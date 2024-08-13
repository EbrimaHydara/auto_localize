//
//  UIUXQLDOBAuthView.m
//  RakutenBank
//
//  Created by nw_y.ito on 2014/04/22.
//
//

#import "UIUXQLDOBAuthView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "UIUXLIUtilMacro.h"
#import "MixedTypeTextView.h"
#import "RBInputTextField.h"
#import "ValidatedTextField+ConfigUtil.h"

@implementation UIUXQLDOBAuthViewDTO

@end

@interface UIUXQLDOBAuthView () <RBInputTextFieldDelegate>

@property (nonatomic) RBInputTextField * pinInput;   ///< 暗証番号入力欄
@property (nonatomic) RBInputTextField * birthdayInput;   ///< 生年月日入力欄
@property (nonatomic) RBInputTextField * branchNumberInput;   ///< 支店番号入力欄
@property (nonatomic) RBInputTextField * accountNumberInput;   ///< 口座番号入力欄
@property (nonatomic) UIButton * submitButton;  ///< 認証ボタン
@property (nonatomic, strong) UIView * showPickerView;          ///< ピッカー表示ビュー

@end

@implementation UIUXQLDOBAuthView

#pragma mark - LIBaseScrollViewクラスのメソッドオーバーライド
// ビューの初期化時にサブビューを構築する
- (void)loadInitialViews
{
    //メッセージ1
    UILabel * text1 = [self uiLableWithWidth:self.frame.size.width - 30.0f
                                        text:[NSString stringWithFormat:
                                              NSLocalizedString(@"UI0141_Text1", nil),
                                              NSLocalizedString(@"Common_PIN", nil),
                                              NSLocalizedString(@"Common_Birthday", nil),
                                              NSLocalizedString(@"Common_BranchNumber", nil),
                                              NSLocalizedString(@"Common_AccountNumber", nil),
                                              NSLocalizedString(@"Common_BranchNumber", nil),
                                              NSLocalizedString(@"Common_AccountNumber", nil)]
                                   textColor:[ColorUtil textColorBlack]
                                    fontSize:k_FontSize_DefaultMsg
                                      isbold:NO];
    CHANGE_ORIGIN_X(text1, 15.0f);
    //暗証番号入力欄
    self.pinInput = [self inputWithTitle:NSLocalizedString(@"Common_PIN", nil)];
    self.pinInput.inputField.secureTextEntry = YES;
    [self.pinInput.inputField configPIN];
    self.pinInput.rbInputTextFieldDelegate = self;
    //生年月日入力欄
    self.birthdayInput = [self inputWithTitle:NSLocalizedString(@"Common_Birthday", nil)];
    [self.birthdayInput.inputField configBirthday];
    self.birthdayInput.rbInputTextFieldDelegate = self;
    self.birthdayInput.inputField.enabled = NO;
    
    //ダミーボタン作成
    UIButton * dummyButton = [UIButton buttonWithType:UIButtonTypeCustom];
    dummyButton.frame = self.birthdayInput.inputField.frame;
    dummyButton.backgroundColor = [UIColor clearColor];
    dummyButton.exclusiveTouch = YES;
    [dummyButton addTarget:self
                    action:@selector(birthdayButtonAction:)
          forControlEvents:UIControlEventTouchUpInside];
    [self.birthdayInput addSubview:dummyButton];
    
    //支店番号入力欄
    self.branchNumberInput = [self inputWithTitle:NSLocalizedString(@"Common_BranchNumber", nil)];
    [self.branchNumberInput.inputField configBranchNumber];
    self.branchNumberInput.rbInputTextFieldDelegate = self;
    //口座番号入力欄
    self.accountNumberInput = [self inputWithTitle:NSLocalizedString(@"Common_AccountNumber", nil)];
    [self.accountNumberInput.inputField configAccountNumber];
    self.accountNumberInput.rbInputTextFieldDelegate = self;
    //認証ボタン
    self.submitButton = [self imageButton:[UIImage imageNamed:@"LI_btn_orange420_04"]
                           hilightedImage:[UIImage imageNamed:@"LI_btn_orange420_04_hover"]
                            disablesIamge:[UIImage imageNamed:@"LI_btn_orange420_04_inactive"]
                               imageScale:0.5f];
    self.submitButton.enabled = NO;   //初期値は無効
    [self.submitButton addTarget:self
                          action:@selector(submitButtonAction:)
                forControlEvents:UIControlEventTouchUpInside];
    
    
    [self addBlankWithHeight:k_VmarginContentsTop];
    
    //メッセージ
    [self addViewAtHCenter:text1];
    [self addBlankWithHeight:20.0f];
    
    //暗証番号入力フォーム
    [self addViewAtHCenter:self.pinInput];
    [self addBlankWithHeight:k_VmarginUnderTextField];
    //生年月日入力フォーム
    [self addViewAtHCenter:self.birthdayInput];
    [self addBlankWithHeight:k_VmarginUnderTextField];
    //支店番号入力フォーム
    [self addViewAtHCenter:self.branchNumberInput];
    [self addBlankWithHeight:k_VmarginUnderTextField];
    //口座番号入力フォーム
    [self addViewAtHCenter:self.accountNumberInput];
    [self addBlankWithHeight:20.0f];
    
    //認証ボタン
    [self addViewAtHCenter:self.submitButton];
    
    [self addBlankWithHeight:k_VmarginContentsBottom];
}

//入力欄クリアメソッド
- (void)clearInput
{
    //暗証番号入力欄を空欄にする
    [self.pinInput.inputField clearText];
    
    //生年月日入力欄を空欄にする
    [self.birthdayInput.inputField clearText];
}

#pragma mark - ビューの初期化メソッド群
//入力欄
- (RBInputTextField *)inputWithTitle:(NSString *)title
{
    CGRect frame = CGRectMake(0.0f, 0.0f, k_WidthTextFieldShort, k_HeightTextField);
    RBInputTextField * input = [[RBInputTextField alloc] initWithFrame:frame];
    input.title = title;
    
    return input;
}

#pragma mark - ピッカー入力イベント
//ピッカー入力で選択されたらよばれる
- (void)selectedPicker:(UIView *)pickerInputView
          selectedYear:(NSString *)selectedYear
         selectedMonth:(NSString *)selectedMonth
           selectedDay:(NSString *)selectedDay
{
    self.birthdayInput.inputField.text = [NSString stringWithFormat:@"%@/%@/%@",
                                          selectedYear,selectedMonth,selectedDay];
    if (self.pinInput.inputField.inputTextEnable
        && self.branchNumberInput.inputField.inputTextEnable
        && self.accountNumberInput.inputField.inputTextEnable) {
        //生年月日以外全て有効な場合、ボタンを有効にする
        self.submitButton.enabled = YES;
    }
}

//ピッカー入力終了時に呼ばれる
- (void)didFinishPicker:(UIView *)sender
{
    if (self.showPickerView == sender) {
        self.showPickerView = nil;
    }
}

#pragma mark - RBInputTextFieldDelegateメソッド実装
- (void)changeInputTextStatus:(RBInputTextField *)rbInputTextField
{
    self.submitButton.enabled = self.pinInput.inputField.inputTextEnable
                                && (self.birthdayInput.inputField.text.length != 0)
                                && self.branchNumberInput.inputField.inputTextEnable
                                && self.accountNumberInput.inputField.inputTextEnable;
}

#pragma mark - UIUXQLDOBAuthViewDelegateメソッド実装
//認証ボタンイベント
- (void)submitButtonAction:(UIButton *)button
{
    if ([self.uiuxQLDOBAuthViewDelegate respondsToSelector:@selector(submitButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxQLDOBAuthViewDelegate submitButtonAction:button];
    }
}

//誕生日入力ダミーボタンイベント
- (void)birthdayButtonAction:(UIButton *)button
{
    if (button == self.showPickerView) {
        //すでに押されたボタンでピッカーを表示している場合は何もしない。
        return;
    }
    
    if ([self.uiuxQLDOBAuthViewDelegate respondsToSelector:@selector(birthdayButtonAction:defaultDate:)]) {
        self.showPickerView = button;
        [self.uiuxQLDOBAuthViewDelegate birthdayButtonAction:button
                                                 defaultDate:self.birthdayInput.inputField.text];
    }
}

#pragma mark - プロパティアクセサオーバーライド

- (NSObject *)viewDTO
{
    if (!self.pinInput || !self.birthdayInput || !self.branchNumberInput || !self.accountNumberInput) {
        return nil;
    }
    
    // 毎回新規インスタンスを生成返却することに注意
    UIUXQLDOBAuthViewDTO * dto = UIUXQLDOBAuthViewDTO.new;
    dto.pin = self.pinInput.inputField.text;
    dto.birthDate = self.birthdayInput.inputField.text;
    dto.branchNumber = self.branchNumberInput.inputField.text;
    dto.accountNumber = self.accountNumberInput.inputField.text;
    
    return dto;
}

@end