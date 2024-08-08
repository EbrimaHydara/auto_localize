//
//  UIUXLOTBaseScrollView.m
//  RakutenBank
//
//  Created by sugiyama8067 on 2014/02/05.
//
//

#import "UIUXLOTBaseScrollView.h"
#import "UIUXLOTUtilMacro.h"

#pragma mark - 定数定義

#pragma mark - マクロ定義
//ちょくちょく呼ばれると思うので、メソッドにはせず、マクロで展開しておく
//contentSizeをsubViewsHeightで更新するマクロ
#define UPDATE_CONTENT_SIZE \
{\
    CGSize size = self.contentSize; \
    size.height = self.stackLayoutView.subViewsHeight;\
    self.contentSize = size;\
}

//メンバ変数をプロパティで宣言
//自動生成アクセサを使用すると、代入時のretain,releaseをしてくれるのでプロパティで宣言
@interface UIUXLOTBaseScrollView()

@end

@implementation UIUXLOTBaseScrollView

#pragma mark - イニシャライザ
- (id)initWithFrame:(CGRect)frame
{
    return [self initWithFrame:frame viewDTO:nil];
}

//指定イニシャライザ
- (id)initWithFrame:(CGRect)frame viewDTO:(NSObject *)viewDTO
{
    self = [super initWithFrame:frame];
    if (self) {
        // Initialization code
        
        //インスタンス変数の初期化
        self.stackLayoutView = [[UIUXLOTStackLayoutView alloc]
                                initWithFrame:CGRectMake(0.0f, 0.0f,
                                                         frame.size.width, frame.size.height)];
        self.viewDTO = viewDTO;
        
        //画面構成
        //自身の背景は透過色とし、画面背景はviewControllerに持たせる
        self.backgroundColor = [UIColor clearColor];
        //スタックレイアウト追加
        [self addSubview:self.stackLayoutView];
        //サブビューを構築する
        [self loadInitialViews];
    }
    return self;
}

#pragma mark - 公開インスタンスメソッド
#pragma mark view追加・削除関係メソッド
/**
 *  Viewを今あるViewの最下部に追加するメソッド
 *  @param[in] view 追加するview
 *  @retval    追加したviewのインデックス
 */
- (NSInteger)addView:(UIView *)view
{
    //サブビューを追加
    NSInteger index = [self.stackLayoutView addView:view];
    
    //contentSizeの高さを更新
    UPDATE_CONTENT_SIZE;
    
    //追加したviewのインデックスを返す。
    return index;
}

/**
 *  Viewを今あるViewの最下部に水平中央に追加するメソッド
 *  @param[in] view 追加するview
 *  @retval    追加したviewのインデックス
 */
- (NSInteger)addViewAtHCenter:(UIView *)view
{
    //サブビューを追加
    NSInteger index = [self.stackLayoutView addViewAtHCenter:view];
    
    //contentSizeの高さを更新
    UPDATE_CONTENT_SIZE;
    
    //追加したviewのインデックスを返す。
    return index;
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
    //viewを挿入
    BOOL isSuccess = [self.stackLayoutView insertView:view atIndex:index animated:animated];
    
    UPDATE_CONTENT_SIZE;
    
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
    //viewを挿入
    BOOL isSuccess = [self.stackLayoutView insertViewAtHCenter:view
                                                       atIndex:index
                                                      animated:animated];
    
    UPDATE_CONTENT_SIZE;
    
    return isSuccess;
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
    //viewを挿入
    BOOL isSuccess = [self.stackLayoutView removeViewAtIndex:index animated:animated];
    
    UPDATE_CONTENT_SIZE;
    
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
    BOOL isSuccess = [self.stackLayoutView removeTopViewWithAnimated:animated];
    
    UPDATE_CONTENT_SIZE;
    
    return isSuccess;
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
    BOOL isSuccess = [self.stackLayoutView removeBottomViewWithAnimated:animated];
    
    UPDATE_CONTENT_SIZE;
    
    return isSuccess;
}

/**
 *  空白挿入メソッド 幅0の空白を下部に追加する。
 *  @param[in] height 空白高さ
 *  @retval    追加した空白のインデックス
 */
- (NSInteger)addBlankWithHeight:(CGFloat)height
{
    NSInteger index = [self.stackLayoutView addBlankWithHeight:height];
    
    UPDATE_CONTENT_SIZE;
    
    return index;
}

/**
 *  Viewインデックス検索メソッド
 *  @param[in] view 検索するview
 *  @retval         見つかったインデックス
 *  @retval         -1:見つからなかった
 */
- (NSInteger)indexOfView:(UIView *)view
{
    return [self.stackLayoutView indexOfView:view];
}

#pragma mark frame関係メソッド
/**
 *  frame高さをcontentsizeにあわせるメソッド
 */
- (void)frameHeightToFit
{
    CHANGE_HEIGHT(self, self.subViewsHeight);
}

#pragma mark - サブクラス実装用メソッド
//サブビューView初期化メソッド
- (void)loadInitialViews
{
    //実装はサブクラス側で行うこと
}

//Viewデータ更新メソッド
- (void)updateData:(NSObject *)dto
{
    //実装はサブクラス側で行うこと
}

//画面遷移時等入力欄をクリアする必要がある場合に入力欄をクリアするメソッド
- (void)clearInput
{
    //実装はサブクラス側で行うこと
}

#pragma mark - 非公開インスタンスメソッド

#pragma mark -

@end
