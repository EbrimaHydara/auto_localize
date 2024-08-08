//
//  UIUXLIUserIDSettingInputView.m
//  RakutenBank
//
//  Created by sugiyama8067 on 2014/04/14.
//
//

#import "UIUXLIUserIDSettingInputView.h"

#import "RakutenBankAppDelegate.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "UIUXLIUtilMacro.h"
#import "UIUXLICompareCheckInput.h"
#import "ValidatedTextField+ConfigUtil.h"
#import "MakeViewUtil.h"

@interface UIUXLIUserIDSettingInputView () <UIUXLICompareCheckInputDelegate>

@property (nonatomic, strong) UIUXLICompareCheckInput * inputField;     /// 比較機能付き入力フィールド
@property (nonatomic, strong) UIButton * configButton;  ///< 設定するボタン

@end


@implementation UIUXLIUserIDSettingInputViewDTO

@end

@implementation UIUXLIUserIDSettingInputView

- (id)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self) {
        // Initialization code
    }
    return self;
}

//サブビューView初期化メソッド
#pragma mark - LIBaseScrollViewクラスのメソッドオーバーライド
- (void)loadInitialViews
{
    [self addBlankWithHeight:30.0f];
    
    //ユーザID説明テキスト追加
    [self addAboutUserIDText];
    [self addBlankWithHeight:22.0f];
    
    //ユーザIDの条件追加
    [self addUserIDCondition];
    [self addBlankWithHeight:22.0f];
    
    //ユーザID入力欄追加
    [self addInputView];
    [self addBlankWithHeight:25.0f];
    
    //設定するボタン追加
    [self addConfigButton];
    [self addBlankWithHeight:k_VmarginContentsBottom];
}

#pragma mark - ビューの初期化メソッド群
#pragma mark subView追加メソッド
//ユーザID説明テキスト追加
- (void)addAboutUserIDText
{
    //説明文
    UILabel * text = [MakeViewUtil labelWithTextType:Japanese
                                                text:@"今後ログインで利用する任意のユーザIDを設定してください。"
                                           textColor:UIColor.blackColor
                                            fontSize:18
                                              isbold:NO
                                           labelType:Text
                                               width:VIEW_WIDTH_LEVEL15];
    CHANGE_ORIGIN_X(text, k_HmarginLevel15);
    [self addView:text];
}

//ユーザIDの条件追加
- (void)addUserIDCondition
{
    //文言読み込み
    //タイトル
    NSString * titleString = [NSString stringWithFormat:
                              NSLocalizedString(@"UI0040_UserIDConditionTitle", nil),
                              NSLocalizedString(@"Common_UserID", nil)];
    //条件1
    NSString * condition1String =
    [NSString stringWithFormat:NSLocalizedString(@"UI0040_UserIDCondition1", nil)];
    //条件2
    NSString * condition2String =
    [NSString stringWithFormat:NSLocalizedString(@"UI0040_UserIDCondition2", nil)];
    //条件3
    NSString * condition3String =
    [NSString stringWithFormat:NSLocalizedString(@"UI0040_UserIDCondition3", nil)];
    //条件4
    NSString * condition4String =
    [NSString stringWithFormat:NSLocalizedString(@"UI0040_UserIDCondition4", nil)];
    //条件5
    NSString * condition5String =
    [NSString stringWithFormat:NSLocalizedString(@"UI0040_UserIDCondition5", nil)];
    
    //箇条書き文言配列作成
    NSArray * conditionStrings = @[condition1String,
                                   condition2String,
                                   condition3String,
                                   condition4String,
                                   condition5String];
    
    //条件ブロック追加
    [self addViewAtHCenter:[self itemizedTextBox:titleString
                                   itemizedTexts:conditionStrings]];
}

- (void)addInputView
{
    //文言読み込み
    NSString * titleString = [NSString stringWithFormat:
                              NSLocalizedString(@"UI0040_InputTitle_UserID", nil),
                              NSLocalizedString(@"Common_UserID", nil)];
    //入力比較チェック付き入力欄作成
    CGRect inputFrame = CGRectMake(0.0f, 0.0f, VIEW_WIDTH_TEXTBOX, 0.0f);
    UIUXLICompareCheckInput * input =
    [[UIUXLICompareCheckInput alloc] initWithFrame:inputFrame];
    input.inputField.inputFieldSize = CGSizeMake(k_WidthTextFieldShort, k_HeightTextField);
    input.inputField.title = titleString;
    input.inputField.inputField.autocapitalizationType = UITextAutocapitalizationTypeNone;
    input.inputField.inputField.returnKeyType = UIReturnKeyNext;
    input.checkInputField.inputField.autocapitalizationType = UITextAutocapitalizationTypeNone;
    [input.inputField.inputField configToUserID];
    [input configCheckInputField];
    input.uiuxLICompareCheckInputDelegate = self;
    
    [self addViewAtHCenter:input];
    
    self.inputField = input;
}

//設定するボタン作成
- (void)addConfigButton
{
    //ログインボタン
    self.configButton = [self imageButton:[UIImage imageNamed:@"LI_btn_orange420_03"]
                           hilightedImage:[UIImage imageNamed:@"LI_btn_orange420_03_hover"]
                            disablesIamge:[UIImage imageNamed:@"LI_btn_orange420_03_inactive"]
                               imageScale:0.5f];
    self.configButton.enabled = NO;   //最初は無効
    [self.configButton addTarget:self
                          action:@selector(configButtonAction:)
                forControlEvents:UIControlEventTouchUpInside];
    [self addViewAtHCenter:self.configButton];
}

#pragma mark UIView作成メソッド

#pragma mark - UIUXLICompareCheckInputDelegateメソッド実装
- (void)changeInputTextStatus:(UIUXLICompareCheckInput *)uiuxLICompareCheckInput
{
    self.configButton.enabled = uiuxLICompareCheckInput.inputEnable;
}

#pragma mark - UIUXLILoginViewDelegateを呼ぶメソッド実装
//設定するボタンイベント
- (void)configButtonAction:(UIButton *)button
{
    if ([self.uiuxLIUserIDSettingInputViewDelegate respondsToSelector:@selector(configButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLIUserIDSettingInputViewDelegate configButtonAction:button];
    }
}

#pragma mark - プロパティアクセサ
- (NSObject *)viewDTO
{
    if (!self.inputField) {
        return nil;
    }
    
    // 毎回新規インスタンスを生成することに注意
    UIUXLIUserIDSettingInputViewDTO * dto = UIUXLIUserIDSettingInputViewDTO.new;
    
    dto.desiredUserId = self.inputField.inputField.inputField.text;
    dto.desiredUserIdConfirm = self.inputField.checkInputField.inputField.text;
    
    return dto;
}

@end
