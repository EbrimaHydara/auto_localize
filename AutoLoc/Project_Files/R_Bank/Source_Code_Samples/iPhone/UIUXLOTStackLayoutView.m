//
//  UIUXLOTStackLayoutView.m
//  RakutenBank
//
//  Created by sugiyama8067 on 2014/02/10.
//
//

#import "UIUXLOTStackLayoutView.h"

#import "UIUXLOTUtilMacro.h"

#pragma mark - 定数定義
//標準アニメーション時間[s]
#define ANIMATION_DURATION_DEFAULT 0.3f

#pragma mark - マクロ定義

//メンバ変数をプロパティで宣言
//自動生成アクセサを使用すると、代入時のretain,releaseをしてくれるのでプロパティで宣言
@interface UIUXLOTStackLayoutView()

//UIViewのsubviewsは仕様が変わる可能性があるためサブビューリストを別に管理
@property (nonatomic, strong) NSMutableArray * contentViews;    ///<サブビューリスト
@property (nonatomic, strong) UIView         * removeView;      ///<削除アニメーション後に削除するビュー
@property (nonatomic)         BOOL             isAnimation;     ///<アニメーション実行フラグ
@property (nonatomic)         NSInteger        numOfColumn;     ///<列数

@end


@implementation UIUXLOTStackLayoutView

#pragma mark - イニシャライザ
- (id)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self) {
        // Initialization code
        
        //インスタンス変数の初期化
        self.contentViews = [[NSMutableArray alloc] init];
        self.isAnimation = NO;
        self.removeView = nil;
        
        //自身の背景は透過色とし、画面背景はviewControllerに持たせる
        self.backgroundColor = [UIColor clearColor];
    }
    return self;
}

#pragma mark - 公開インスタンスメソッド
#pragma mark - view追加・削除関係メソッド
/**
 *  Viewを今あるViewの最下部に追加するメソッド
 *  @param[in] view 追加するview
 *  @retval    追加したviewのインデックス
 */
- (NSInteger)addView:(UIView *)view
{
    //サブビューを追加
    [self.contentViews addObject:view];
    [self addSubview:view];
    
    //サブビューの位置を最下部に再配置
    CHANGE_ORIGIN_Y(view, self.subViewsHeight);
    
    //サブビュー高さ合計値を更新
    _subViewsHeight += view.frame.size.height;
    
    //高さをサブビューにあわせて更新
    CHANGE_HEIGHT(self, self.subViewsHeight);
    
    //追加したviewのインデックスを返す。
    return self.subviews.count;
}

/**
 *  Viewを今あるViewの最下部に水平中央に追加するメソッド
 *  @param[in] view 追加するview
 *  @retval    追加したviewのインデックス
 */
- (NSInteger)addViewAtHCenter:(UIView *)view
{
    //サブビューの水平中心を自身の中心とあわせる。
    CGPoint center = view.center;
    center.x = self.frame.size.width / 2;
    view.center = center;
    
    //サブビューを追加
    return [self addView:view];
}

/**
 *  View挿入メソッド
 *  アニメーション指定した場合はほかのViewのアニメーション中は実行されません。
 *  @param[in]  view  挿入するview
 *  @param[in]  index 挿入する位置
 *  @param[in]  animated アニメーション有無 YES:有り NO:無し
 *  @retval     YES:挿入実行
 *  @retval     NO :アニメーション中のため挿入未実行
 */
- (BOOL)insertView:(UIView *)view atIndex:(NSInteger)index animated:(BOOL)animated
{
    //戻り値を準備
    BOOL isSuccess = NO;
    
    if (!self.isAnimation) {
        //アニメーション中でない場合　サブビューを挿入
        //戻り値を更新
        isSuccess = YES;
        
        //サブビューを挿入
        [self.contentViews insertObject:view atIndex:index];
        [self insertSubview:view atIndex:index];
        
        //追加したサブビュー以下のサブビューの位置を再配置
        //一つ手前までのサブビューの合計高さを計算
        if (index) {
            //挿入位置より上にviewがある場合
            UIView * upperView = self.contentViews[index - 1];
            _subViewsHeight = upperView.frame.origin.y + upperView.frame.size.height;
        } else {
            //一番上に挿入した場合
            _subViewsHeight = 0;
        }
        
        //追加したviewは拡大アニメーションさせるためほかのviewとは分けて再配置する。
        CHANGE_ORIGIN_Y(view, _subViewsHeight);
        _subViewsHeight += view.frame.size.height;
        
        if (animated) {
            [self insertViewAnimation:view];
        }
        
        //追加したview以下を再配置する。
        [self replaceViewsWithStartIndex:index + 1
                                animated:animated
                                selector:@selector(insertViewEnd)];
        
        //高さをサブビューにあわせて更新
        CHANGE_HEIGHT(self, self.subViewsHeight);
        
    } else {
        //アニメーション中の場合　何もしない
        //戻り値を念のため更新
        isSuccess = NO;
    }
    
    return isSuccess;
}

/**
 *  Viewを水平中央に挿入メソッド
 *  アニメーション指定した場合はほかのViewのアニメーション中は実行されません。
 *  @param[in]  view  挿入するview
 *  @param[in]  index 挿入する位置
 *  @param[in]  animated アニメーション有無 YES:有り NO:無し
 *  @retval     YES:挿入実行
 *  @retval     NO :アニメーション中のため挿入未実行
 */
- (BOOL)insertViewAtHCenter:(UIView *)view atIndex:(NSInteger)index animated:(BOOL)animated
{
    //サブビューの水平中心を自身の中心とあわせる。
    CGPoint center = view.center;
    center.x = self.frame.size.width / 2;
    view.center = center;
    
    //サブビューを挿入
    return [self insertView:view atIndex:index animated:animated];
}

/**
 *  View削除メソッド
 *  アニメーション指定した場合はほかのViewのアニメーション中は実行されません。
 *  @param[in]  index 削除するviewの位置
 *  @param[in]  animated アニメーション有無 YES:有り NO:無し
 *  @retval     YES:削除実行
 *  @retval     NO :アニメーション中のため削除未実行
 */
- (BOOL)removeViewAtIndex:(NSInteger)index animated:(BOOL)animated
{
    //戻り値を準備
    BOOL isSuccess = NO;
    
    if (!self.isAnimation) {
        //アニメーション中でない場合　サブビューを削除
        //戻り値を更新
        isSuccess = YES;
        
        //サブビューを削除ビューとして記憶
        self.removeView = self.contentViews[index];
        
        //サブビューリストからサブビューを削除
        [self.contentViews removeObjectAtIndex:index];
        
        //削除したビューをアニメーションさせる
        if (animated) {
            [self removeViewAnimation:self.removeView];
        }
        
        //削除したサブビュー以下のサブビューの位置を再配置
        //一つ手前までのサブビューの合計高さを計算
        if (index) {
            //削除位置より上にviewがある場合
            UIView * upperView = self.contentViews[index - 1];
            _subViewsHeight = upperView.frame.origin.y + upperView.frame.size.height;
        } else {
            //一番上を削除した場合
            _subViewsHeight = 0;
        }
        
        //削除したview以下を再配置する。
        [self replaceViewsWithStartIndex:index
                                animated:animated
                                selector:@selector(removeViewEnd)];
        
        //高さをサブビューにあわせて更新
        CHANGE_HEIGHT(self, self.subViewsHeight);
        
        if (!animated) {
            //アニメーションしない場合はビューを削除
            if (self.removeView) {
                [self.removeView removeFromSuperview];
                self.removeView = nil;
            }
        }
        
    } else {
        //アニメーション中の場合　何もしない
        //戻り値を念のため更新
        isSuccess = NO;
    }
    
    return isSuccess;
}

/**
 *  最上部のView削除メソッド
 *  アニメーション指定した場合はほかのViewのアニメーション中は実行されません。
 *  @param[in]  animated アニメーション有無 YES:有り NO:無し
 *  @retval     YES:削除実行
 *  @retval     NO :アニメーション中のため削除未実行
 */
- (BOOL)removeTopViewWithAnimated:(BOOL)animated
{
    return [self removeViewAtIndex:0 animated:animated];
}

/**
 *  最下部のView削除メソッド
 *  アニメーション指定した場合はほかのViewのアニメーション中は実行されません。
 *  @param[in]  animated アニメーション有無 YES:有り NO:無し
 *  @retval     YES:削除実行
 *  @retval     NO :アニメーション中のため削除未実行
 */
- (BOOL)removeBottomViewWithAnimated:(BOOL)animated
{
    return [self removeViewAtIndex:self.contentViews.count - 1 animated:animated];
}

/**
 *  空白挿入メソッド 幅0の空白を下部に追加する。
 *  @param[in] height 空白高さ
 *  @retval    追加した空白のインデックス
 */
- (NSInteger)addBlankWithHeight:(CGFloat)height
{
    UIView * blank = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 0, height)];
    blank.backgroundColor = [UIColor clearColor];
    
    return [self addView:blank];
}

/**
 *  Viewインデックス検索メソッド
 *  @param[in] view 検索するview
 *  @retval         見つかったインデックス
 *  @retval         -1:見つからなかった
 */
- (NSInteger)indexOfView:(UIView *)view
{
    //検索結果保持変数 見つからなかった場合のため-1で初期化する
    NSInteger index = -1;
    NSInteger i = 0;
    
    do {
        if ([self.contentViews[i] isEqual:view]) {
            index = i;
        }
        
        i++;
    } while ((index == -1) && (i < self.contentViews.count));
    
    return index;
}

#pragma mark - frame関係メソッド
/**
 *  frame高さをcontentsizeにあわせるメソッド
 */
- (void)frameHeightToFit
{
    CHANGE_HEIGHT(self, self.subViewsHeight);
}

#pragma mark - viewデータ更新メソッド
/**
 *  Viewデータ更新メソッド
 *  内部処理の実装は必要に応じて継承クラスで行う
 *  ここではインタフェースのみ定義
 *  @param[in] NSObject 検索するview
 */
- (void)updateData:(NSObject *)dto
{
    
}

#pragma mark - 非公開インスタンスメソッド
/**
 *  insertView: animated: のアニメーション後に呼び出されるメソッド
 */
- (void)insertViewEnd
{
    //アニメーション中フラグをクリア
    self.isAnimation= NO;
}

/**
 *  removeViewAtIndex: animated: のアニメーション後に呼び出されるメソッド
 *  @param[in]   削除するviewの位置
 */
- (void)removeViewEnd
{
    //アニメーション中フラグをクリア
    self.isAnimation = NO;
    
    //削除するviewを削除
    if (self.removeView) {
        [self.removeView removeFromSuperview];
        self.removeView = nil;
    }
}

/**
 *  indexで指定したview以降のviewを並べ直す。
 *  @param[in]  index   :開始インデックス
 *  @param[in]  animated:アニーション有りフラグ 0:アニメーション無し 1:アニメーション有り
 */
- (void)replaceViewsWithStartIndex:(NSInteger)index
                          animated:(BOOL)animated
                          selector:(SEL)selector
{
    //順にviewの高さを足し、並べ直す
    //再配置が終わると_subViewsHeightは正しくサブビューの合計高さとなる
    if (animated) {
        //アニメーション中フラグをセット
        self.isAnimation = YES;
        
        //アニメーションブロック先処理
        CGContextRef context = UIGraphicsGetCurrentContext();
        [UIView beginAnimations:nil context:context];
        [UIView setAnimationCurve:UIViewAnimationCurveEaseInOut];
        [UIView setAnimationDelegate:self];
        [UIView setAnimationDidStopSelector:selector];
        [UIView setAnimationDuration:ANIMATION_DURATION_DEFAULT];
    }
    
    for (NSInteger i = index; i < self.contentViews.count; i++) {
        UIView * replaceView = self.contentViews[i];
        CHANGE_ORIGIN_Y(replaceView, _subViewsHeight);
        _subViewsHeight += replaceView.frame.size.height;
    }
    
    if (animated) {
        //アニメーションブロック後処理
        [UIView commitAnimations];
    }
}

/**
 *  挿入時引数で指定したviewをアニメーション付きで拡大する
 *  ほかのviewの配置変更は行わない
 *  @param[in]  view      :対象のview
 */
- (void)insertViewAnimation:(UIView *)view
{
    //縮小状態にする
    CGAffineTransform trans;
    trans = CGAffineTransformMakeTranslation(0.0f, -view.frame.size.height / 2);
    trans = CGAffineTransformScale(trans, 1.0f, 0.001f);
    view.transform = trans;
    
    //アニメーションブロック先処理
    CGContextRef context = UIGraphicsGetCurrentContext();
    [UIView beginAnimations:nil context:context];
    [UIView setAnimationCurve:UIViewAnimationCurveEaseInOut];
    [UIView setAnimationDuration:ANIMATION_DURATION_DEFAULT];
    
    //元の大きさに広げる
    trans = CGAffineTransformIdentity;
    view.transform = trans;
    
    //アニメーションブロック後処理
    [UIView commitAnimations];
}

/**
 *  削除時引数で指定したviewをアニメーション付きで縮小する
 *  ほかのviewの配置変更は行わない
 *  @param[in]  view      :対象のview
 */
- (void)removeViewAnimation:(UIView *)view
{
    //アニメーションブロック先処理
    CGContextRef context = UIGraphicsGetCurrentContext();
    [UIView beginAnimations:nil context:context];
    [UIView setAnimationCurve:UIViewAnimationCurveEaseInOut];
    [UIView setAnimationDuration:ANIMATION_DURATION_DEFAULT];
    
    //縮小状態にする
    CGAffineTransform trans;
    trans = CGAffineTransformMakeTranslation(0.0f, -view.frame.size.height / 2);
    trans = CGAffineTransformScale(trans, 1.0f, 0.001f);
    self.removeView.transform = trans;
    
    //アニメーションブロック後処理
    [UIView commitAnimations];
}

#pragma mark -

@end
