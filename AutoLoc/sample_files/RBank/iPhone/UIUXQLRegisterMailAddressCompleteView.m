//
//  UIUXQLRegisterMailAddressCompleteView.m
//  RakutenBank
//
//  Created by nw_y.ito on 2014/04/22.
//
//

#import "UIUXQLRegisterMailAddressCompleteView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "UIUXLIUtilMacro.h"
#import "MixedTypeTextView.h"
#import "RBInputTextField.h"
#import "ValidatedTextField+ConfigUtil.h"
#import "UIUXLoginMakeViewUtil.h"

@interface UIUXQLRegisterMailAddressCompleteView () <UIUXQLRegisterMailAddressCompleteViewDelegate>

@property (nonatomic) UIButton * nextButton;  ///< 次へボタン
@property (nonatomic) UIUXQLRegisterMailAddressCompleteViewDTO * viewDto;

@end

@implementation UIUXQLRegisterMailAddressCompleteViewDTO

@end

@implementation UIUXQLRegisterMailAddressCompleteView

#pragma mark - イニシャライザ

- (id)initWithFrame:(CGRect)frame viewDTO:(NSObject *)viewDTO
{
    _viewDto = (UIUXQLRegisterMailAddressCompleteViewDTO *)viewDTO;
    
    self = [super initWithFrame:frame viewDTO:viewDTO];
    if (!self) {
        return nil;
    }
    
    return self;
}

#pragma mark - ビューの初期化メソッド群

// ビューの初期化時にサブビューを構築する
- (void)loadInitialViews
{
    //メッセージ1
    UILabel * text1 = [self uiLableWithWidth:self.frame.size.width - 30.0f
                                        text:NSLocalizedString(@"UI0151_Text1", nil)
                                   textColor:[ColorUtil textColorLightGreen]
                                    fontSize:23.0f
                                      isbold:NO];
    CHANGE_ORIGIN_X(text1, 15.0f);
    //メッセージ2
    UILabel * text2 = [self uiLableWithWidth:self.frame.size.width - 30.0f
                                        text:NSLocalizedString(@"UI0151_Text2", nil)
                                   textColor:[ColorUtil textColorBlack]
                                    fontSize:k_FontSize_DefaultMsg
                                      isbold:NO];
    CHANGE_ORIGIN_X(text2, 15.0f);

    self.nextButton= [UIButton buttonWithType:UIButtonTypeCustom];
    UIImage* normalImage = [UIImage imageNamed:@"LI_btn_account-open-return-top-hover"];
    [self.nextButton setImage:normalImage
            forState:UIControlStateNormal];
    [self.nextButton setImage:[UIImage imageNamed:@"LI_btn_account-open-return-top-out"]
            forState:UIControlStateHighlighted];
    CGFloat btnWidth = self.frame.size.width - 2 * 15;
    CGFloat btnHeight = normalImage.size.height * btnWidth / normalImage.size.width;
    self.nextButton.frame = CGRectMake(15, 0, self.frame.size.width - 2 * 15, btnHeight);
    self.nextButton.exclusiveTouch = YES;
    [self.nextButton addTarget:self
                        action:@selector(nextButtonAction:)
              forControlEvents:UIControlEventTouchUpInside];
    
    
    [self addBlankWithHeight:35.0f];
    
    //メッセージ
    [self addView:text1];
    [self addBlankWithHeight:5.0f];
    
    [self addView:text2];
    [self addBlankWithHeight:25.0f];
    
    //メールアドレス・取引通知エリア
    [self addTextBox];
    [self addBlankWithHeight:20.0f];
    
    //完了ボタン
    [self addViewAtHCenter:self.nextButton];
    
    [self addBlankWithHeight:64];
    
    //プロパー支店の場合に、 Segment bannerを表示する
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    if ([appDel isProperBranch]) {
        [self addSegmentBannerView];
    }

    [self addBlankWithHeight:k_VmarginContentsBottom];
}

//
- (void)addTextBox
{
    LIStackLayoutView * stackView = [[LIStackLayoutView alloc]
                                     initWithFrame:self.frame];
    [self configBorderToBackgroundStyle:stackView
                        BackgroundColor:[UIColor whiteColor]
                            borderColor:[ColorUtil textBoxBorderLightGlay]];
    
    //登録メールアドレス
    UILabel * mailAddressLabel = [self uiLableWithWidth:stackView.frame.size.width - k_HmarginTextBox * 2
                                                   text:NSLocalizedString(@"UI0151_Label1", nil)
                                              textColor:[ColorUtil textColorBlack]
                                               fontSize:k_FontSize_DefaultMsg
                                                 isbold:YES];
    NSString * str = self.viewDto.registeredMailAddress;
    UILabel * mailAddress = [self uiLableWithWidth:stackView.frame.size.width - k_HmarginTextBox * 2
                                              text:str
                                         textColor:[ColorUtil textColorRed]
                                          fontSize:22.0f
                                            isbold:NO];
    mailAddress.textAlignment = NSTextAlignmentCenter;
    //取引通知
    UILabel * alertTypeLabel = [self uiLableWithWidth:stackView.frame.size.width - k_HmarginTextBox * 2
                                                 text:NSLocalizedString(@"UI0151_Label2", nil)
                                            textColor:[ColorUtil textColorBlack]
                                             fontSize:k_FontSize_DefaultMsg
                                               isbold:YES];
    NSString * notification = (self.viewDto.notifiesTransaction) ? @"受け取る" : @"受け取らない";
    
    UILabel * alertType = [self uiLableWithWidth:stackView.frame.size.width - k_HmarginTextBox * 2
                                            text:notification
                                       textColor:[ColorUtil textColorRed]
                                        fontSize:k_FontSize_DefaultMsg
                                          isbold:YES];
    
    [stackView addBlankWithHeight:15.0f];
    [stackView addViewAtHCenter:mailAddressLabel];
    [stackView addBlankWithHeight:5.0f];
    
    [stackView addViewAtHCenter:mailAddress];
    
    [stackView addBlankWithHeight:15.0f];
    
    [stackView addViewAtHCenter:alertTypeLabel];
    [stackView addBlankWithHeight:10.0f];
    
    [stackView addViewAtHCenter:alertType];
    
    [stackView addBlankWithHeight:15.0f];
    
    [self addViewAtHCenter:stackView];
}

-(void)addSegmentBannerView
{
    self.segmentBannerView = [[UIButton alloc] initWithFrame: CGRectMake(0, 0, self.frame.size.width - 2 * k_HmarginTextBox, 0)];
    [self.segmentBannerView addTarget:self action:@selector(onSegmentBannerTapped) forControlEvents:UIControlEventTouchUpInside];
    [self addViewAtHCenter: self.segmentBannerView];
}

- (void)loadSegmentBannerImage: (NSString *)imagePath
{
    [self setImage:imagePath toView:self.segmentBannerView insets:UIEdgeInsetsZero handler:nil];
}

/**
 * 外部画像を読み込み、Viewに追加する
 * @param url 画像URL
 * @param toView 読み込んだ画像を描画するView
 */
- (void)setImage:(NSString *)url toView:(UIView *)view insets:(UIEdgeInsets)insets handler:(void(^)())completionHandler
{
    [UIUXLoginMakeViewUtil setNetworkImage:url toView:view insets:insets handler:^() {
        NSInteger index = [self indexOfView:view];
        if (index >= 0) {
            // ビュースタックに積まれていたら再配置してレイアウト更新
            [self replaceView:index view:view];
        } else {
            [view setNeedsDisplay];
            
        }
        if (completionHandler) {
            completionHandler();
        }
    }];
}

/**
 * ビューの更新
 * mainスレッドから呼ぶこと
 */
- (void)replaceView:(NSInteger) index
               view:(UIView *)view
{
    if (index >= 0) {
        [self removeViewAtIndex:index animated:NO];
        [self insertView:view atIndex:index animated:NO];
    }
}

#pragma mark - selector
- (void) onSegmentBannerTapped
{
    if (self.uiuxQLRegisterMailAddressCompleteViewDelegate && [self.uiuxQLRegisterMailAddressCompleteViewDelegate respondsToSelector:@selector(segmentBannerTappedAction)])
    {
        [self.uiuxQLRegisterMailAddressCompleteViewDelegate segmentBannerTappedAction];
    }
}

#pragma mark - UIUXQLRegisterMailAddressCompleteViewDelegateメソッド実装
//次へボタンイベント
- (void)nextButtonAction:(UIButton *)button
{
    if ([self.uiuxQLRegisterMailAddressCompleteViewDelegate respondsToSelector:@selector(nextButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxQLRegisterMailAddressCompleteViewDelegate nextButtonAction:button];
    }
}

@end