//
//  UIUXLOTLinkView.m
//  RakutenBank
//
//  Created by sugiyama8067 on 2014/04/25.
//
//

#import "UIUXLOTLinkView.h"
#import "UIUXLOTBaseScrollView+MakeViewUtils.h"
#import "UIUXLOTMakeViewUtil.h"
#import "UIUXLOTUtilMacro.h"
#import "UIUXLOTStackLayoutView.h"
#import "AssertUtil.h"

#pragma mark - 定数定義
static CGFloat const k_FooterMenuBarHeight = 49.0f;     ///< フッターメニューバー高さ
static CGFloat const k_FontSize_Explanation = 12.5f;    ///< アップル非関与テキストフォントサイズ

/**
 * ボタンタグ
 */
typedef NS_ENUM(NSUInteger, ButtonTag) {
    ButtonTag_First = 1,
    ButtonTagBigToto = ButtonTag_First,     ///< BIG・toto
    ButtonTagNumbers,                       ///< ナンバーズ
    ButtonTagTotalizator,                   ///< 公営競技
    ButtonTag_Last
};

@implementation UIUXLOTLinkView

- (void)loadInitialViews
{
    [self addBlankWithHeight:k_VmarginContentsTop];
    
    //機能ボタン追加
    [self addFunctionButton];
    
    //説明文追加
    [self addExplanation];
    
    [self addBlankWithHeight:k_VmarginContentsBottom];
}

// BIG/totoセグメントバナー画像読み込み
- (void)loadBigtotoButtonImage:(NSString *)imageUrl
{
    [self setImage:imageUrl toView:_bigtotoButton insets:UIEdgeInsetsMake(0.0f, 0.0f, 0.0f, 0.0f) handler:^() {
        // ネイティブ保持画像削除（メインスレッドにて実行）
        [self.bigtotoButton setImage:nil forState:UIControlStateNormal];
        [self.bigtotoButton setImage:nil forState:UIControlStateHighlighted];
    }];
}

// 宝くじセグメントバナー画像読み込み
- (void)loadLotButtonImage:(NSString *)imageUrl
{
    [self setImage:imageUrl toView:_lotButton insets:UIEdgeInsetsMake(0.0f, 0.0f, 0.0f, 0.0f) handler:^() {
        // ネイティブ保持画像削除（メインスレッドにて実行）
        [self.lotButton setImage:nil forState:UIControlStateNormal];
        [self.lotButton setImage:nil forState:UIControlStateHighlighted];
    }];
}

// 公営競技セグメントバナー画像読み込み
- (void)loadTotalizatorButtonImage:(NSString *)imageUrl
{
    [self setImage:imageUrl toView:_totalizatorButton insets:UIEdgeInsetsMake(0.0f, 0.0f, 0.0f, 0.0f) handler:^() {
        // ネイティブ保持画像削除（メインスレッドにて実行）
        [self.totalizatorButton setImage:nil forState:UIControlStateNormal];
        [self.totalizatorButton setImage:nil forState:UIControlStateHighlighted];
    }];
}

//機能遷移ボタン追加
- (void)addFunctionButton
{
    //BIG toto見出し
    UILabel *bigtotoLabel = [self lableWithWidth:self.frame.size.width
                                                text:@"BIG・toto"
                                           textColor:[ColorUtil textColorBlack]
                                            fontSize:15.0
                                              isbold:YES];
    MOVE_WITH_ORIGIN(bigtotoLabel, 15.0f, 0);
    [self addView:bigtotoLabel];
    [self addBlankWithHeight:12.5f];

    //BIG totoボタン配置
    //一旦ネイティブの画像を表示
    NSString * bigtotoImageName = @"LOT_btn_bigtoto";
    NSString * hoverBigtotoImageName = [bigtotoImageName stringByAppendingString:@"_hover"];
    _bigtotoButton = [UIUXLOTMakeViewUtil imageButton:[UIImage imageNamed:bigtotoImageName]
                                          hilightedImage:[UIImage imageNamed:hoverBigtotoImageName]
                                           disablesIamge:nil
                                              imageScale:0.5];
    _bigtotoButton.tag = ButtonTagBigToto;
    [_bigtotoButton addTarget:self
               action:@selector(tapButtonAction:)
     forControlEvents:UIControlEventTouchUpInside];
    [self addViewAtHCenter:_bigtotoButton];
    [self addBlankWithHeight:22.5f];

    //宝くじ見出し
    UILabel *lotLabel = [self lableWithWidth:self.frame.size.width
                                            text:@"宝くじ"
                                       textColor:[ColorUtil textColorBlack]
                                        fontSize:15.0
                                          isbold:YES];
    MOVE_WITH_ORIGIN(lotLabel, 15.0f, 0);
    [self addView:lotLabel];
    [self addBlankWithHeight:12.5f];
    //宝くじボタン配置
    //一旦ネイティブの画像を表示
    NSString * lotImageName = @"LOT_btn_takarakuji";
    NSString * hoverLotImageName = [lotImageName stringByAppendingString:@"_hover"];
    _lotButton = [UIUXLOTMakeViewUtil imageButton:[UIImage imageNamed:lotImageName]
                                          hilightedImage:[UIImage imageNamed:hoverLotImageName]
                                           disablesIamge:nil
                                              imageScale:0.5];
    _lotButton.tag = ButtonTagNumbers;
    [_lotButton addTarget:self
               action:@selector(tapButtonAction:)
     forControlEvents:UIControlEventTouchUpInside];
    [self addViewAtHCenter:_lotButton];
    [self addBlankWithHeight:22.5f];

    //営競技見出し
    UILabel *totalizatorLabel = [self lableWithWidth:self.frame.size.width
                                        text:@"【広告】公営競技"
                                   textColor:[ColorUtil textColorBlack]
                                    fontSize:15.0
                                      isbold:YES];
    MOVE_WITH_ORIGIN(totalizatorLabel, 15.0f, 0);
    [self addView:totalizatorLabel];
    [self addBlankWithHeight:12.5f];
    //公営競技ボタン配置
    //一旦ネイティブの画像を表示
    NSString * totalizatorImageName = @"LOT_btn_kouei";
    NSString * hoverTotalizatorImageName = [totalizatorImageName stringByAppendingString:@"_hover"];
    _totalizatorButton = [UIUXLOTMakeViewUtil imageButton:[UIImage imageNamed:totalizatorImageName]
                               hilightedImage:[UIImage imageNamed:hoverTotalizatorImageName]
                                disablesIamge:nil
                                   imageScale:0.5];
    _totalizatorButton.tag = ButtonTagTotalizator;
    [_totalizatorButton addTarget:self
               action:@selector(tapButtonAction:)
     forControlEvents:UIControlEventTouchUpInside];
    [self addViewAtHCenter:_totalizatorButton];
    [self addBlankWithHeight:10.0f];
    [self removeBottomViewWithAnimated:NO];
}

//説明文追加
- (void)addExplanation
{
    //文言読み込み
    NSString * explanationStr = NSLocalizedString(@"LOT_explanation_text", nil);
    
    NSArray *explanationStrArray = [explanationStr componentsSeparatedByString:@"\n"];

    
    //背景枠付箇条書きテキスト作成
    UIView *textBox = [self itemizedTextBox:@""
                               itemizedTexts:explanationStrArray
                                    fontSize:k_FontSize_Explanation
                                      bullet:@"・"
                                  paddingTop:12.5f
                                paddingRight:k_TextBackgroundViewMarginRight
                               paddingBottom:12.5f
                                 paddingLeft:k_TextBackgroundViewMarginLeft
                                 lineSpacing:0.0f];
    
    //文言View追加
    [self addBlankWithHeight:30.0f];
    [self addViewAtHCenter:textBox];
}
//ボタンタップイベント
- (void)tapButtonAction:(UIButton *)button
{
    switch (button.tag) {
        case ButtonTagBigToto:
            if ([self.uiuxLOTLinkViewDelegate respondsToSelector:@selector(bigTotoButtonAction:)]) {
                [self.uiuxLOTLinkViewDelegate bigTotoButtonAction:button];
            }
            break;
        case ButtonTagNumbers:
            if ([self.uiuxLOTLinkViewDelegate respondsToSelector:@selector(numbersButtonAction:)]) {
                [self.uiuxLOTLinkViewDelegate numbersButtonAction:button];
            }
            break;
        case ButtonTagTotalizator:
            if ([self.uiuxLOTLinkViewDelegate respondsToSelector:@selector(totalizatorButtonAction:)]) {
                [self.uiuxLOTLinkViewDelegate totalizatorButtonAction:button];
            }
            break;
        default:
            ASSERT_BRANCH_PARAMETER_ERROR(@"Button.tag")
            break;
    }
}

#pragma mark - 外部画像読み込み関係メソッド
/**
 * 外部画像を読み込み、Viewに追加する
 * @param url 画像URL
 * @param toView 読み込んだ画像を描画するView
 */
- (void)setImage:(NSString *)url toView:(UIView *)view insets:(UIEdgeInsets)insets handler:(void(^)())completionHandler
{
    [UIUXLOTMakeViewUtil setNetworkImage:url toView:view insets:insets handler:^() {
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
@end
