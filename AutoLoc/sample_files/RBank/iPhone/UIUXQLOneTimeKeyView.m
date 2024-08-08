//
//  UIUXQLOneTimeKeyView.m
//  RakutenBank
//
//  Created by nw_y.ito on 2014/04/18.
//
//

#import "UIUXQLOneTimeKeyView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "UIUXLIUtilMacro.h"
#import "MixedTypeTextView.h"
#import "RBInputTextField.h"
#import "ValidatedTextField+ConfigUtil.h"

@interface UIUXQLOneTimeKeyView () <RBInputTextFieldDelegate, UIUXQLOneTimeKeyViewDelegate>

@property (nonatomic) RBInputTextField * oneTimeKeyInput;   ///< ワンタイムキー入力欄
@property (nonatomic) UIButton * sendOneTimeKeyButton;  ///< ワンタイムキー発行ボタン
@property (nonatomic) UIButton * submitButton;  ///< 認証ボタン
@property (nonatomic) UIView * sendOneTimeKeyFieldView; ///< ワンタイムキー送信後の追加表示View
@property (nonatomic, strong) UIUXQLOneTimeKeyViewDTO * viewDto;

@end

@implementation UIUXQLOneTimeKeyViewDTO

@end

@implementation UIUXQLOneTimeKeyView

#pragma mark - イニシャライザ

- (id)initWithFrame:(CGRect)frame viewDTO:(NSObject *)viewDTO
{
    self = [super initWithFrame:frame viewDTO:viewDTO];
    if (!self) {
        return nil;
    }
    
    _viewDto = (UIUXQLOneTimeKeyViewDTO *)viewDTO;
    
    return self;
}

#pragma mark - LIBaseScrollViewクラスのメソッドオーバーライド
// ビューの初期化時にサブビューを構築する
- (void)loadInitialViews
{
    //ワンタイムキー入力欄
    self.oneTimeKeyInput = [self inputWithTitle:nil];
    [self.oneTimeKeyInput.inputField configToOneTimeKey];
    self.oneTimeKeyInput.rbInputTextFieldDelegate = self;
    
    //ワンタイムキー発行ボタン
    self.sendOneTimeKeyButton =
    [self imageButton:[UIImage imageNamed:@"LI_btn_gray420_04"]
       hilightedImage:[UIImage imageNamed:@"LI_btn_gray420_04_hover"]
        disablesIamge:[UIImage imageNamed:@"LI_btn_gray420_04_inactive"]
           imageScale:0.5f];
    [self.sendOneTimeKeyButton addTarget:self
                                  action:@selector(sendOneTimeKeyButtonAction:)
                        forControlEvents:UIControlEventTouchUpInside];

    //認証ボタン
    self.submitButton =
    [self imageButton:[UIImage imageNamed:@"LI_btn_orange420_04"]
       hilightedImage:[UIImage imageNamed:@"LI_btn_orange420_04_hover"]
        disablesIamge:[UIImage imageNamed:@"LI_btn_orange420_04_inactive"]
           imageScale:0.5f];
    self.submitButton.enabled = NO;   //初期値は無効
    [self.submitButton addTarget:self
                          action:@selector(submitButtonAction:)
                forControlEvents:UIControlEventTouchUpInside];
    
    //「メールが届かないお客さまへ」リンク
    UIView * linkTitle1 = [self indicatorButtonWithTitle:[NSString stringWithFormat:
                                                          NSLocalizedString(@"UI0004_LinkTitle_HelpUndeliveredMail", nil),
                                                          NSLocalizedString(@"Common_Customer", nil)]
                                                    rect:CGRectMake(0.0f, 0.0f, 0.0f, 0.0f)
                                                    font:[UIFont boldSystemFontOfSize:k_FontSize_DefaultMsg]
                                                  target:self
                                                  action:@selector(helpUndeliveredMailLinkAction:)];
    
    UILabel * text1 = [self uiLableWithWidth:VIEW_WIDTH_LEVEL2
                                        text:[NSString stringWithFormat:
                                              NSLocalizedString(@"UI0004_Text1", nil),
                                              NSLocalizedString(@"Common_QuickLogin", nil)]
                                   textColor:[ColorUtil textColorBlack]
                                    fontSize:k_FontSize_DefaultMsg
                                      isbold:NO];
    CHANGE_WIDTH(text1, VIEW_WIDTH_LEVEL2);
    
    UILabel * text2 = [self uiLableWithWidth:VIEW_WIDTH_LEVEL2
                                        text:[NSString stringWithFormat:
                                              NSLocalizedString(@"UI0004_Text2", nil),
                                              NSLocalizedString(@"Common_OneTimeKey", nil)]
                                   textColor:[ColorUtil textColorBlack]
                                    fontSize:k_FontSize_DefaultMsg
                                      isbold:NO];
    CHANGE_WIDTH(text2, VIEW_WIDTH_LEVEL2);

    NSString * heading1 = [NSString stringWithFormat:
                           NSLocalizedString(@"UI0004_Heading1", nil),
                           NSLocalizedString(@"Common_OneTimeKey", nil)];
    NSString * heading2 = [NSString stringWithFormat:
                           NSLocalizedString(@"UI0004_Heading2", nil),
                           NSLocalizedString(@"Common_OneTimeKey", nil)];
    
    [self addBlankWithHeight:k_VmarginContentsTop];
    
    [self addViewAtHCenter:text1];
    [self addBlankWithHeight:15.0f];
    
    [self addViewAtHCenter:[self hBarLevel1]];
    
    [self addBlankWithHeight:15.0f];
    //見出し1
    [self addViewAtHCenter:[self stepViewWithNumber:1 title:heading1]];
    [self addBlankWithHeight:15.0f];
    
    [self addViewAtHCenter:text2];
    [self addBlankWithHeight:20.0f];
    //ワンタイムキー発行ボタン
    [self addViewAtHCenter:self.sendOneTimeKeyButton];
    [self addBlankWithHeight:15.0f];
    //「メールが届かないお客さまへ」リンク
    [self addViewAtHCenter:linkTitle1];
    [self addBlankWithHeight:20.0f];
    
    [self addViewAtHCenter:[self hBarLevel1]];
    
    [self addBlankWithHeight:15.0f];
    //見出し2
    [self addViewAtHCenter:[self stepViewWithNumber:2 title:heading2]];
    [self addBlankWithHeight:15.0f];
    
    UIView * view = [self guidMsgView];
    [self addView:view];
    CHANGE_ORIGIN_X(view, k_HmarginLevel2);
    
    [self addBlankWithHeight:20.0f];
    [self addViewAtHCenter:self.oneTimeKeyInput];
    [self addBlankWithHeight:20.0f];
    
    [self addViewAtHCenter:[self hBarLevel1]];
    
    [self addBlankWithHeight:20.0f];
    //認証ボタン
    [self addViewAtHCenter:self.submitButton];
    
    [self addBlankWithHeight:k_VmarginContentsBottom];
}

// ビューを更新する
- (void)updateData:(NSObject *)dto
{
    if ([self indexOfView:self.sendOneTimeKeyFieldView] == -1) {
        //ワンタイムキー発行後のViewを追加表示する
        self.sendOneTimeKeyFieldView = [self sendOneTimeKeyField:self.viewDto.mailAddressList];
        [self insertViewAtHCenter:self.sendOneTimeKeyFieldView atIndex:13 animated:NO];
    }
}

#pragma mark - ビューの初期化メソッド群
//入力欄
- (RBInputTextField *)inputWithTitle:(NSString *)title
{
    CGRect frame = CGRectMake(0.0f, 0.0f, k_WidthTextFieldShort, k_HeightTextField);
    RBInputTextField * input = [[RBInputTextField alloc] initWithFrame:frame];
    input.title = title;
    input.inputField.autocapitalizationType = UITextAutocapitalizationTypeNone;
    
    return input;
}

//ガイドメッセージ
- (MixedTypeTextView *)guidMsgView
{
    //文字列ロード
    NSString * text3_1 = [NSString stringWithFormat:
                          NSLocalizedString(@"UI0004_Text3_1", nil),
                          NSLocalizedString(@"Common_OneTimeKey", nil)];
    NSString * text3_2 = NSLocalizedString(@"UI0004_Text3_2", nil);
    NSString * text3_3 = NSLocalizedString(@"UI0004_Text3_3", nil);
    
    //mttデータ作成
    NSArray * guidMsgTypeData
    = @[//1行目
        @[@{k_MTTDataKeyText  : text3_1,
            k_MTTDataKeyfont  : [UIFont systemFontOfSize:k_FontSize_DefaultMsg],
            k_MTTDataKeycolor : [ColorUtil textColorBlack]}],
        //2行目
        @[@{k_MTTDataKeyText  : text3_2,
            k_MTTDataKeyfont  : [UIFont boldSystemFontOfSize:k_FontSize_DefaultMsg],
            k_MTTDataKeycolor : [ColorUtil textColorBlack]},
          @{k_MTTDataKeyText  : text3_3,
            k_MTTDataKeyfont  : [UIFont systemFontOfSize:k_FontSize_DefaultMsg],
            k_MTTDataKeycolor : [ColorUtil textColorBlack]}]];
    
    //折り返しが発生しないように幅を微調整(+10)して作成
    return [[MixedTypeTextView alloc]
            initWithMTTData:guidMsgTypeData
            width:VIEW_WIDTH_LEVEL2 + 10.0f];
}


#pragma mark - RBInputTextFieldDelegateメソッド実装
- (void)changeInputTextStatus:(RBInputTextField *)rbInputTextField
{
    self.submitButton.enabled = rbInputTextField.inputField.inputTextEnable;
}

#pragma mark - UIUXQLOneTimeKeyViewDelegateメソッド実装
//ワンタイムキー発行ボタンイベント
- (void)sendOneTimeKeyButtonAction:(UIButton *)button
{
    if ([self.uiuxQLOneTimeKeyViewDelegate respondsToSelector:@selector(sendOneTimeKeyButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxQLOneTimeKeyViewDelegate sendOneTimeKeyButtonAction:button];
    }
}
//認証ボタンイベント
- (void)submitButtonAction:(UIButton *)button
{
    if ([self.uiuxQLOneTimeKeyViewDelegate respondsToSelector:@selector(submitButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        self.viewDto.oneTimeKey = self.oneTimeKeyInput.inputField.text;
        [self.uiuxQLOneTimeKeyViewDelegate submitButtonAction:button];
    }
}
//「メールが届かないお客さまへ」リンクイベント
- (void)helpUndeliveredMailLinkAction:(UIButton *)button
{
    if ([self.uiuxQLOneTimeKeyViewDelegate respondsToSelector:@selector(helpUndeliveredMailLinkAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxQLOneTimeKeyViewDelegate helpUndeliveredMailLinkAction:button];
    }
}

@end
