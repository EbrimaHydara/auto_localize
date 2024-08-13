//
//  TOPCampaignView.m
//  RakutenBank
//
//  Created by nw_y.ito on 2016/03/02.
//
//

#import "TOPCampaignView.h"
#import "CampaignResponse.h"
#import "ColorUtil.h"

#pragma mark - ビューサイズの規定
static NSInteger const PROM_IMAGE_HEIGHT = 80;
static NSInteger const PROM_IMAGE_TOP_MARGIN = 8;
static NSInteger const CAMPAIGN_IMAGE_HEIGHT = 80;
static NSInteger const CAMPAIGN_IMAGE_WIDTH = 180;
static NSInteger const CAMPAIGN_IMAGE_MARGIN = 8;
static NSInteger const PROM_PAGECONTROL_HEIGHT = 30;
static NSInteger const PROM_PAGECONTROL_WIDTH = 80;
static UIColor * COLOR_ORANGE = nil;

@interface CampaignBannerScrollView ()
@end

//bounds領域外のタップに対応したカスタムビュー
@implementation CampaignBannerScrollView

- (UIView *)hitTest:(CGPoint)point withEvent:(UIEvent *)event
{
    for (UIView * subview in self.subviews) {
        if (CGRectContainsPoint(subview.frame, point)) {
            return subview;
        }
    }
    return self;
}

@end

#pragma mark - TOPCampaignViewの無名カテゴリ
@interface TOPCampaignView ()
@property (nonatomic, strong) CampaignBannerScrollView * scrollView;    ///< スクロール
@property (nonatomic, strong) UIPageControl * pageControl;  ///< ページコントロール
@property (nonatomic, strong) NSTimer * timer;              ///< タイマー
@property (nonatomic)         NSInteger pagingInterval;     ///< ページ送りインターバル
@property (nonatomic, strong) NSArray * campaignList;       ///< キャンペーンリスト <CampaignResponse.h>
@property (nonatomic, strong) NSArray * imageViewList;      ///< 画像読み込み先ビュー <UIImageView>
@property (nonatomic, strong) NSArray * imageList;          ///< 画像のリスト  <UIImage>
@property (nonatomic, weak) ParentController * viewController ; ///< 親ViewController
@end

#pragma mark - TOPCampaignViewの実装
@implementation TOPCampaignView

#pragma mark - 抽象メソッド指定イニシャライザ実装
- (id)initWithFrame:(CGRect)frame
     viewController:(ParentController *)viewController
              pages:(NSInteger)pages
       campaignList:(NSArray *)campaignList
{
    self = [super initWithFrame:frame];
    if (self) {
        CGRect newRect = frame;
        newRect.size.height = PROM_IMAGE_HEIGHT + PROM_PAGECONTROL_HEIGHT;
        self.frame = newRect;
        self.viewController = viewController;
        [self loadData:pages campaignList:campaignList];
        [self loadInitialViews];
    }
    return self;
}

- (void)update:(NSInteger)pages
  campaignList:(NSArray *)campaignList
{
    [self loadData:pages campaignList:campaignList];
    [self loadInitialViews];
}
#pragma mark - 抽象メソッドスタート実装
- (void)start
{
    if ([self.timer isValid]) {
        RBLog(@"Promotion is already started.");
        return;
    }
    
    if (self.pagingInterval && self.pages > 1) {
        self.timer = [NSTimer scheduledTimerWithTimeInterval:self.pagingInterval
                                                      target:self
                                                    selector:@selector(onTimerFire)
                                                    userInfo:nil
                                                     repeats:YES];
        RBLog(@"Promotion paging started.");
    } else {
        RBLog(@"Promotion paging is disabled.");
    }
}

#pragma mark - 抽象メソッドストップ実装
- (void)stop
{
    if ([self.timer isValid]) {
        [self.timer invalidate];
        RBLog(@"Promotion paging stopped.");
    } else {
        RBLog(@"No working timer exist.");
    }
    
}

#pragma mark - データ取得メソッド
// 外部情報ファイルより表示データを読み込む
- (void)loadData:(NSInteger)pages campaignList:(NSArray *)campaignList
{
    self.pages = pages;
    self.pagingInterval = 5;
    self.campaignList = campaignList;
}

#pragma mark - ビューの構築メソッド
// 初期状態のビューを構築する
- (void)loadInitialViews
{
    for (UIView * view in self.subviews) {
        [view removeFromSuperview];
    }
    const CGFloat pageControlMarginTop = 10.0f;
    
    self.backgroundColor = UIColor.whiteColor;
    
    // ページビュー
    self.scrollView = [[CampaignBannerScrollView alloc] initWithFrame:CGRectMake(CAMPAIGN_IMAGE_MARGIN/2.0f, PROM_IMAGE_TOP_MARGIN, self.frame.size.width, PROM_IMAGE_HEIGHT)];
    self.scrollView.pagingEnabled = YES;
    self.scrollView.bounds = CGRectMake(0.0, 0.0, CAMPAIGN_IMAGE_WIDTH + CAMPAIGN_IMAGE_MARGIN, PROM_IMAGE_HEIGHT);
    self.scrollView.clipsToBounds = NO;
    self.scrollView.showsHorizontalScrollIndicator = NO;
    self.scrollView.showsVerticalScrollIndicator = NO;
    self.scrollView.delegate = self;
    self.scrollView.contentSize = CGSizeMake((CAMPAIGN_IMAGE_WIDTH + CAMPAIGN_IMAGE_MARGIN) * self.pages, PROM_IMAGE_HEIGHT);
    
    [self addSubview:self.scrollView];
    
    // ページコンテント
    UIImageView * content = nil;
    NSMutableArray * ivs = [[NSMutableArray alloc] initWithCapacity:self.pages];
    for (int i = 0; i < self.pages; i++) {
        CGRect rect = CGRectMake((CAMPAIGN_IMAGE_WIDTH + CAMPAIGN_IMAGE_MARGIN) * i, 0, CAMPAIGN_IMAGE_WIDTH, CAMPAIGN_IMAGE_HEIGHT);
        content = [[UIImageView alloc] initWithFrame:rect];
        content.userInteractionEnabled = YES;
        content.tag = i;
        [content addGestureRecognizer:[[UITapGestureRecognizer alloc] initWithTarget:self
                                                                              action:@selector(imageViewTapAction:)]];
        [self.scrollView addSubview:content];
        [ivs addObject:content];
    }
    self.imageViewList = ivs;
    
    // 画像を別スレッドでロードし設定する
    [self performSelectorInBackground:@selector(loadImageOnBackground) withObject:nil];
    
    // ページコントロール
    self.pageControl = [[UIPageControl alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, PROM_PAGECONTROL_HEIGHT)];
    self.pageControl.center = CGPointMake(self.center.x, PROM_IMAGE_TOP_MARGIN + self.scrollView.frame.size.height + pageControlMarginTop);
    self.pageControl.numberOfPages = self.pages;
    self.pageControl.currentPage = fabsf(self.pages / 2.0f - 0.5f);
    [self onPageTouch:self.pageControl];
    [self.pageControl addTarget:self
                         action:@selector(onPageTouch:)
               forControlEvents:UIControlEventValueChanged];
    
    // ページインジケーターの色を設定
    if ([self.pageControl respondsToSelector:@selector(setPageIndicatorTintColor:)]) {
        // iOS6以降で対応
        self.pageControl.pageIndicatorTintColor = UIColor.grayColor;
        self.pageControl.currentPageIndicatorTintColor = TOPCampaignView.COLOR_ORANGEFact;
    } else {
        self.pageControl.backgroundColor = TOPCampaignView.COLOR_ORANGEFact;
        self.pageControl.layer.cornerRadius = 8.0f;
    }
    
    [self addSubview:self.pageControl];
}

// 画像をリモートまたはローカルキャッシュより取得しUIImageViewに設定する
- (void)loadImageOnBackground
{
    @autoreleasepool {
        UIImage * img = nil;
        RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
        NSMutableArray * imgList = [[NSMutableArray alloc] initWithCapacity:self.pages];
        for (int i = 0; i < self.pages; i++) {
            CampaignResponse * campaign = (CampaignResponse *)self.campaignList[i];
            NSString * urlStr = campaign.campaignImageURL;
            img = appDel.imageCache[urlStr];
            if (!img) {
                RBLog(@"Loading image:%@", urlStr);
                NSData * data = [NSData dataWithContentsOfURL:[NSURL URLWithString:urlStr]];
                if (data) {
                    img = [UIImage imageWithData:data];
                    if (img) {
                        // 正しく取得できた画像をキャッシュ
                        appDel.imageCache[urlStr] = img;
                    }
                } else {
                    // 取得エラーの際は空イメージを詰める
                    img = [[UIImage alloc] init];
                }
            } else {
                RBLog(@"Loaded from cache:%@", urlStr);
            }
            if (img) {
                [imgList addObject:img];
            }
        }
        self.imageList = imgList;
        [self performSelectorOnMainThread:@selector(setImageOnMainThread)
                               withObject:nil
                            waitUntilDone:NO];
    }
}

// メインスレッドで画像を設定する
- (void)setImageOnMainThread
{
    for (int i = 0; i < self.pages; i++) {
        ((UIImageView *)self.imageViewList[i]).image = ((UIImage *)self.imageList[i]);
    }
}

#pragma mark - 標準UIイベントハンドラ
// UIScrollViewDelegate
- (void)scrollViewDidEndDecelerating:(UIScrollView *)scrollView
{
    if ((NSInteger)fmod(scrollView.contentOffset.x, (CAMPAIGN_IMAGE_WIDTH + CAMPAIGN_IMAGE_MARGIN)) == 0) {
        self.pageControl.currentPage = scrollView.contentOffset.x / (CAMPAIGN_IMAGE_WIDTH + CAMPAIGN_IMAGE_MARGIN);
    }
}

#pragma mark - カスタムイベントハンドラ

// 画像タップ時のアクション
- (void)imageViewTapAction:(UITapGestureRecognizer *)sender
{
    //中央バナーのインデックス(=中央より左にあるバナー数)
    NSUInteger centerIndex = (NSUInteger)fabsf(self.pages / 2.0f - 0.5f);
    //キャンペーン優先度
    NSInteger campaignPriority;
    if (sender.view.tag < centerIndex) {
        //タップバナーが中央バナーより左
        campaignPriority = 1 + sender.view.tag + (self.pages - centerIndex);
    } else {
        //タップバナーが中央バナーor中央バナーより右
        campaignPriority = 1 + sender.view.tag - centerIndex;
    }
    
    CampaignResponse * campaign = (CampaignResponse *)self.campaignList[sender.view.tag];
    NSString * campaignNumber = campaign.campaignNumber;
    
    [self onCampaignTap:self campaignNumber:campaignNumber campaignPriority:[NSString stringWithFormat:@"%@", @(campaignPriority)]];
}

// ページコントロールタップ時のアクション
- (void)onPageTouch:(id)sender
{
    UIPageControl * pc = (UIPageControl *)sender;
    
    CGRect frame = self.scrollView.frame;
    frame.origin.x = (CAMPAIGN_IMAGE_WIDTH + CAMPAIGN_IMAGE_MARGIN) * pc.currentPage;
    
    BOOL needsAnimation = pc.currentPage ? YES : NO;
    
    [self.scrollView scrollRectToVisible:frame animated:needsAnimation];
}

// タイマー満了時にコールされる
- (void)onTimerFire
{
    RBLog(@"TOPCampaignView::onTimerFire");
    
    NSInteger page = self.pageControl.currentPage;
    page++;
    
    if (page >= self.pageControl.numberOfPages) {
        page = 0;
    }
    
    self.pageControl.currentPage = page;
    
    [self onPageTouch:self.pageControl];
}

- (void)dealloc
{
    [self.timer invalidate];
    
    
}

+ (UIColor*)COLOR_ORANGEFact
{
    if (COLOR_ORANGE == nil) {
        COLOR_ORANGE = [UIColor colorWithRed:1.0f green:0.6f blue:0 alpha:1];
        return COLOR_ORANGE;
    } else {
        return COLOR_ORANGE;
    }
}

/**
 * キャンペーンバナーがタップされた場合
 * @param campaignNumber (NSString *) タップされたキャンペーン番号
 * @param campaignPriority (NSString *) タップされたキャンペーンの優先度
 */
- (void)onCampaignTap:(TOPCampaignView *)sender campaignNumber:(NSString *)campaignNumber  campaignPriority:(NSString *)campaignPriority
{
    if (self.topCampaignViewDelegate) {
        [self.topCampaignViewDelegate onCampaignTap:self campaignNumber:campaignNumber campaignPriority:campaignPriority];
    }
}

@end
