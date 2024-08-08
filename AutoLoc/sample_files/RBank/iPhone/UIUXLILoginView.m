//
//  LoginView.m
//  RakutenBank
//
//  Created by sugiyama8067 on 2014/04/11.
//
//

#import "UIUXLILoginView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "UnderlineTextField.h"
#import "ValidatedTextField+ConfigUtil.h"
#import "UIUXLIUtilMacro.h"
#import "UIUXLoginMakeViewUtil.h"
#import "MakeViewUtil.h"

#pragma mark - 定数定義
static CGFloat const linkRightMargin = 15.0f;   ///< リンク右側マージン
static NSString * const BTN_PASSDISP_IMAGE = @"icon_pwd_show";
static NSString * const BTN_PASSHIDE_IMAGE = @"icon_pwd_hide";

#pragma mark - 表示データモデル定義
@implementation UIUXLILoginViewDTO

@end

@interface UIUXLILoginView () <UIUXLILoginViewDelegate, UnderlineTextFieldDelegate>

@property (nonatomic, weak) id<UIUXLILoginViewDelegate> uiuxLILoginViewdelegate; ///< イベントデリゲート
@property (nonatomic) UnderlineTextField * userIDInput;   ///< ユーザーID入力欄
@property (nonatomic) UnderlineTextField * passwordInput;   ///< パスワード入力欄
@property (nonatomic, strong) UIButton * passwordDispButton;            ///< パスワード表示ボタン
@property (nonatomic) UIButton * loginButton;  ///< ログインボタン

@end

@implementation UIUXLILoginView
#pragma mark - LIBaseScrollViewクラスのメソッドオーバーライド
// イニシャライザ
- (id)initWithFrame:(CGRect)frame viewDTO:(NSObject *)viewDTO delegate:(id<UIUXLILoginViewDelegate>)delegate
{
    self.uiuxLILoginViewdelegate = delegate;
    return [super initWithFrame:frame viewDTO:viewDTO];
}

//サブビューView初期化メソッド
- (void)loadInitialViews
{
    [self addBlankWithHeight:k_VmarginContentsTop];
    
    [self addViewAtHCenter:self.inputField];
    [self addBlankWithHeight:k_VmarginContentsBottom];
}

//入力欄クリアメソッド
- (void)clearInput
{
    //ログインパスワード入力欄を空欄にする
    [self.passwordInput.inputField clearText];
}

#pragma mark - ビューの初期化メソッド群
//入力欄ブロック
- (UIView *)inputField
{
    LIStackLayoutView * stackView = [[LIStackLayoutView alloc]
                                     initWithFrame:self.frame];
    stackView.backgroundColor = [UIColor whiteColor];
    
    [stackView addBlankWithHeight:20.0f];
    
    UIImageView * logoImageView;
    logoImageView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"logo_rkbk_horizontal"]];
    logoImageView.frame = CGRectMake(0, 0, 202, 32);
    logoImageView.contentMode = UIViewContentModeScaleAspectFit;
    
    [stackView addViewAtHCenter:logoImageView];
    [stackView addBlankWithHeight:64.0f];
    
    //文言読み込み
    //ユーザID入力欄タイトル
    NSString * userIdTitle =
    [NSString stringWithFormat:NSLocalizedString(@"UI0002_InputTitle_UserID", nil),
     NSLocalizedString(@"Common_RKBKName", nil),
     NSLocalizedString(@"Common_UserID", nil)];
    //ログインパスワード入力欄タイトル
    NSString * pinTitle =
    [NSString stringWithFormat:NSLocalizedString(@"UI0002_InputTitle_LoginPassword", nil),
     NSLocalizedString(@"Common_LoginPassword", nil)];
    //ログインでお困りのお客さまリンク
    NSString * linkTitleUnclear =
    [NSString stringWithFormat:NSLocalizedString(@"UI0002_LinkTitle_Unclear", nil),
     NSLocalizedString(@"Common_Login", nil)];
    //はじめて口座にログインする場合リンク
    NSString * linkTitleFirstLogin =
    [NSString stringWithFormat:
     NSLocalizedString(@"UI0002_LinkTitle_FirstLogin", nil),
     NSLocalizedString(@"Common_Login", nil)];
    
    //ユーザID入力欄
    self.userIDInput = [self inputWithPlaceholder:userIdTitle];
    [self.userIDInput.inputField configToUserIDForLoginPage];
    self.userIDInput.inputField.autocapitalizationType = UITextAutocapitalizationTypeNone;
    self.userIDInput.inputField.returnKeyType = UIReturnKeyNext;
    [self.userIDInput unusedErrorWithShrinkSpace:NO];
    [stackView addViewAtHCenter:self.userIDInput];
    [stackView addBlankWithHeight:k_VmarginUnderTextField];

    //パスワード入力欄
    self.passwordInput = [self inputWithPlaceholder:pinTitle];
    [self.passwordInput.inputField configToLoginPasswordForLoginPage];
    self.passwordInput.inputField.secureTextEntry = YES;
    self.passwordInput.inputField.returnKeyType = UIReturnKeyJoin;
    self.passwordInput.inputField.shiftJISCheckActive = NO;
    self.passwordInput.inputField.emojiCheckActive = NO;
    [self.passwordInput setDefaultErrorMessage2:NSLocalizedString(@"Common_LoginPassword", nil)];
    //パスワード表示ボタン
    self.passwordDispButton = [self imageButton:[UIImage imageNamed:BTN_PASSDISP_IMAGE]
                                 hilightedImage:[UIImage imageNamed:BTN_PASSDISP_IMAGE]
                                  disablesIamge:[UIImage imageNamed:BTN_PASSDISP_IMAGE]
                                     imageScale:1];
    [self.passwordDispButton addTarget:self
                                action:@selector(passwordDispButtonAction:)
                      forControlEvents:UIControlEventTouchUpInside];
    [self.passwordInput setRightIcon:self.passwordDispButton];
    // ビューに追加
    [stackView addViewAtHCenter:self.passwordInput];
    [stackView addBlankWithHeight:k_VmarginUnderTextField];
    
    //ログインボタン
    self.loginButton = [[UIButton alloc] initWithFrame:CGRectMake(16.0f, self.frame.origin.y + self.frame.size.height, self.frame.size.width - 16.0f * 2, 44.0f)];
    self.loginButton.titleLabel.font = [MakeViewUtil fontWithTextType:Japanese fontSize:16 isbold:YES];
    [self.loginButton setTitle:@"ログイン" forState:UIControlStateNormal];
    [self.loginButton setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    [self.loginButton setTitleColor:[ColorUtil textColorGlay] forState:UIControlStateDisabled];
    self.loginButton.layer.cornerRadius = 5.0f;
    self.loginButton.exclusiveTouch = YES;
    
    [self changeInputTextStatus:nil];
    [self.loginButton addTarget:self
                         action:@selector(loginButtonAction:)
               forControlEvents:UIControlEventTouchUpInside];
    [stackView addViewAtHCenter:self.loginButton];
    [stackView addBlankWithHeight:48.0f];
    
    
    [stackView addViewAtHCenter:[self hBarLevel2]];
    //リンク右エッジ座標
    CGFloat const linkRightEdge = stackView.frame.size.width - linkRightMargin;
    //ユーザID・パスワード不明リンク
    [stackView addView:[self linkText:linkTitleUnclear
                               action:@selector(unclearLinkButtonAction:)
                            rightEdge:linkRightEdge]];
    [stackView addViewAtHCenter:[self hBarLevel2]];
    
    //初めてのログインリンク
    [stackView addView:[self linkText:linkTitleFirstLogin
                               action:@selector(firstLoginButtonAction:)
                            rightEdge:linkRightEdge]];
    [stackView addViewAtHCenter:[self hBarLevel2]];
    
    //Touch IDでのログインについて
    [stackView addView:[self linkText:NSLocalizedString(@"Common_About_TouchID_Login", nil)
                               action:@selector(touchIDLinkButtonAction:)
                            rightEdge:linkRightEdge]];
    [stackView addViewAtHCenter:[self hBarLevel2]];
    
    //Face IDでのログインについて
    [stackView addView:[self linkText:NSLocalizedString(@"Common_About_FaceID_Login", nil)
                               action:@selector(faceIDLinkButtonAction:)
                            rightEdge:linkRightEdge]];
    [stackView addViewAtHCenter:[self hBarLevel2]];
    
    [stackView addBlankWithHeight:15.0f];
    
    return stackView;
}

//入力欄
- (UnderlineTextField *)inputWithPlaceholder:(NSString *)placeholder
{
    CGRect frame = CGRectMake(16.0f, 0.0f, self.frame.size.width - 32.0f, k_HeightTextField);
    UnderlineTextField * input = [[UnderlineTextField alloc] initWithFrame:frame];
    input.inputTextFieldDelegate = self;
    input.placeholder = placeholder;
    
    return input;
}

//リンク
- (UIView *)linkText:(NSString *)text action:(SEL)action rightEdge:(CGFloat)rightEdge
{
    UIView * parent = [[UIView alloc] initWithFrame:CGRectMake(0, self.frame.origin.y + self.frame.size.height, self.frame.size.width, 44.0f)];
    UITableViewCell *cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleValue1 reuseIdentifier:@"cell"];
    cell.frame = CGRectMake(10.0f, 0, parent.frame.size.width - 10.0f * 2, parent.frame.size.height);
    [parent addSubview:cell];
    
    cell.textLabel.font = [MakeViewUtil fontWithTextType:Japanese fontSize:14 isbold:NO];
    cell.textLabel.text = text;
    cell.detailTextLabel.text = nil;
    
    UIImage * arrowImage = [UIImage imageNamed:@"service_button_arrow"];
    UIImageView * arrow = [[UIImageView alloc] initWithImage:arrowImage];
    cell.accessoryView = arrow;
    
    // 透明ボタン部
    UIButton * btn = [UIButton buttonWithType:UIButtonTypeCustom];
    btn.frame = parent.bounds;
    btn.exclusiveTouch = YES;
    [btn addTarget:self action:action forControlEvents:UIControlEventTouchUpInside];
    [parent addSubview:btn];
    
    return parent;
}

//Level2水平バー作成メソッド
- (UIView *)hBarLevel2
{
    UIView * view = [[UIView alloc]
                     initWithFrame:CGRectMake(k_HmarginLevel2, 0.0f,
                                              VIEW_WIDTH_LEVEL2_2, k_HBarLevel2Height)];
    view.backgroundColor = [ColorUtil SeparatorLightGray];
    
    return view;
}

#pragma mark - プロパティのアクセサ
- (UIUXLILoginViewDTO *)viewDto
{
    if (!self.userIDInput || !self.passwordInput) {
        return nil;
    }
 
    // 常に新しいインスタンスを生成して返却しているので注意
    UIUXLILoginViewDTO * dto = UIUXLILoginViewDTO.new;
    dto.userId = self.userIDInput.inputField.text;
    dto.loginPassword = self.passwordInput.inputField.text;
    
    return dto;
}

#pragma mark - UIUXLILoginViewDelegateを呼ぶメソッド実装
//ログインボタンイベント
- (void)loginButtonAction:(UIButton *)button
{
    if ([self.uiuxLILoginViewdelegate respondsToSelector:@selector(loginButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLILoginViewdelegate loginButtonAction:button];
    }
}

//ユーザID・ログインパスワードが不明リンクボタンイベント
- (void)unclearLinkButtonAction:(UIButton *)button;
{
    if ([self.uiuxLILoginViewdelegate respondsToSelector:@selector(unclearLinkButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLILoginViewdelegate unclearLinkButtonAction:button];
    }
}

//初めてのログインボタンイベント
- (void)firstLoginButtonAction:(UIButton *)button;
{
    if ([self.uiuxLILoginViewdelegate respondsToSelector:@selector(firstLoginButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLILoginViewdelegate firstLoginButtonAction:button];
    }
}

// TouchIDでのログインについて
- (void)touchIDLinkButtonAction:(UIButton *)button
{
    if ([self.uiuxLILoginViewdelegate respondsToSelector:@selector(touchIDLinkButtonAction:)]) {
        [self.uiuxLILoginViewdelegate touchIDLinkButtonAction:button];
    }
}

// FaceIDでのログインについて
- (void)faceIDLinkButtonAction:(UIButton *)button
{
    if ([self.uiuxLILoginViewdelegate respondsToSelector:@selector(faceIDLinkButtonAction:)]) {
        [self.uiuxLILoginViewdelegate faceIDLinkButtonAction:button];
    }
}

#pragma mark - UnderlineTextFieldDelegateメソッド実装
- (void)showAlertView:(UnderlineTextField *)inputTextField
{
    inputTextField.errorMessageVisible = YES;
}

- (void)changeInputTextStatus:(UnderlineTextField *)inputTextField
{
    self.loginButton.enabled = self.userIDInput.inputField.inputTextEnable
    && self.passwordInput.inputField.inputTextEnable;
    if(self.loginButton.enabled) {
        [self.loginButton setBackgroundColor:[ColorUtil backgroundColorRed]];
    } else {
        [self.loginButton setBackgroundColor:[ColorUtil SeparatorLightGray]];
    }
    if(inputTextField.inputField.inputTextEnable && inputTextField.errorMessageVisible) {
        inputTextField.errorMessageVisible = NO;
    }
}

// キーボードのReturnキータップ時に呼ばれるデリゲートメソッド
- (BOOL)textFieldShouldReturn:(UnderlineTextField *)inputTextField
{
    if (inputTextField == self.userIDInput) {
        // Nextボタンタップ時にはパスワード入力欄にフォーカスを移す
        [self.passwordInput.inputField becomeFirstResponder];
        return YES;
    } else if (inputTextField == self.passwordInput) {
        // Joinボタンタップ時にはログインボタンタップ時と同じ処理を実施
        if (self.loginButton.enabled) {
            if ([self.uiuxLILoginViewdelegate respondsToSelector:@selector(loginButtonAction:)]) {
                //デリゲートメソッドが定義されていた場合
                [self.uiuxLILoginViewdelegate loginButtonAction:self.loginButton];
            }
            return YES;
        }
    }
    
    return NO;
}

#pragma mark - パスワード表示ボタン
- (void)passwordDispButtonAction:(UIButton *)button
{
    if ([self.uiuxLILoginViewdelegate respondsToSelector:@selector(passwordDispButtonAction:)]) {
        //デリゲートメソッドが定義されていた場合
        [self.uiuxLILoginViewdelegate passwordDispButtonAction:self.passwordInput.inputField];
    }
}

- (void)toggleSecureTextEntry:(UITextField *)textField
{
    [textField toggleSecureTextEntry];
    if(textField.secureTextEntry) {
        [self setImageToButton:self.passwordDispButton
                   normalImage:[UIImage imageNamed:BTN_PASSDISP_IMAGE]
                hilightedImage:[UIImage imageNamed:BTN_PASSDISP_IMAGE]
                 disablesIamge:[UIImage imageNamed:BTN_PASSDISP_IMAGE]];
    } else {
        [self setImageToButton:self.passwordDispButton
                   normalImage:[UIImage imageNamed:BTN_PASSHIDE_IMAGE]
                hilightedImage:[UIImage imageNamed:BTN_PASSHIDE_IMAGE]
                 disablesIamge:[UIImage imageNamed:BTN_PASSHIDE_IMAGE]];
    }
}


@end
