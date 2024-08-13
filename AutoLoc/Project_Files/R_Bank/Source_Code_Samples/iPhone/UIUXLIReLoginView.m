//
//  UIUXLIReLoginView.m
//  RakutenBank
//
//  Created by sugiyama8067 on 2014/04/26.
//
//

#import "UIUXLIReLoginView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "RakutenBankAppDelegate.h"
#import "RBInputTextField.h"
#import "ValidatedTextField+ConfigUtil.h"
#import "UIUXLIUtilMacro.h"

@interface UIUXLIReLoginView () <RBInputTextFieldDelegate>

@property (nonatomic, strong) UIButton * loginButton;                   ///< ログインボタン
@property (nonatomic, strong) RBInputTextField * loginPasswordInput;    ///< ログインパスワード入力欄

@end

@implementation UIUXLIReLoginViewDTO

@end

@implementation UIUXLIReLoginView

//サブビューView初期化メソッド
#pragma mark - LIBaseScrollViewクラスのメソッドオーバーライド
- (void)loadInitialViews
{
    [self addBlankWithHeight:k_VmarginContentsTop];
    [self addBlock];
    [self addBlankWithHeight:k_VmarginContentsBottom];
}

//入力欄クリアメソッド
- (void)clearInput
{
    //ログインパスワード入力欄を空欄にする
    [self.loginPasswordInput.inputField clearText];
}

#pragma mark - ビューの初期化メソッド群
// ブロック枠
- (void)addBlock
{
    // 再ログインメッセージ
    NSString *reLoginStr = [NSString stringWithFormat:
                         NSLocalizedString(@"UI0077_ReLogin", nil),
                         NSLocalizedString(@"Common_UserID", nil),
                         NSLocalizedString(@"Common_Login", nil)];
    UILabel *reLogin = [self uiLableWithWidth:VIEW_WIDTH_INTEXTBOX text:reLoginStr textColor:[ColorUtil textColorBlack] fontSize:k_FontSize_DefaultMsg isbold:NO];
    CHANGE_ORIGIN_X(reLogin, k_TextBackgroundViewMarginLeft);
    // ユーザIDタイトル
    NSString *idTitleStr = [NSString stringWithFormat:
                        NSLocalizedString(@"UI0077_IdTitle", nil),
                        NSLocalizedString(@"Common_Customer", nil),
                         NSLocalizedString(@"Common_UserID", nil)];
    UILabel *idTitle = [self uiLableWithWidth:VIEW_WIDTH_INTEXTBOX text:idTitleStr textColor:[ColorUtil textColorBlack] fontSize:k_FontSize_DefaultMsg isbold:YES];
    CHANGE_ORIGIN_X(idTitle, k_TextBackgroundViewMarginLeft);
    // ユーザID
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    NSString * userIDStr = appDel.firstLoginDto.userIdComp;
    UILabel *userID = [self uiLableWithWidth:VIEW_WIDTH_INTEXTBOX text:userIDStr textColor:[ColorUtil textColorBlack] fontSize:k_FontSize_DefaultMsg isbold:NO];
    CHANGE_ORIGIN_X(userID, k_TextBackgroundViewMarginLeft);
    // ログインパスワード
    NSString * pwTitleStr = NSLocalizedString(@"Common_LoginPassword", nil);
    CGRect frame = CGRectMake(0.0f, 0.0f, VIEW_WIDTH_INTEXTBOX, k_HeightTextField);
    self.loginPasswordInput = [[RBInputTextField alloc] initWithFrame:frame];
    self.loginPasswordInput.title = pwTitleStr;
    self.loginPasswordInput.bold = YES;
    self.loginPasswordInput.inputField.secureTextEntry = YES;
    [self.loginPasswordInput.inputField configToLoginPassword];
    self.loginPasswordInput.inputField.shiftJISCheckActive = NO;
    self.loginPasswordInput.inputField.emojiCheckActive = NO;
    self.loginPasswordInput.rbInputTextFieldDelegate = self;
    // 次アクション案内
    NSString *nextActionStr = [NSString stringWithFormat:
                               NSLocalizedString(@"UI0077_AfterLogin", nil),
                               NSLocalizedString(@"Common_Login", nil),
                               NSLocalizedString(@"Common_QuickLogin", nil)];
    UILabel *nextAction = [self uiLableWithWidth:VIEW_WIDTH_INTEXTBOX text:nextActionStr textColor:[ColorUtil textColorBlack] fontSize:k_FontSize_DefaultMsg isbold:NO];
    CHANGE_ORIGIN_X(nextAction, k_TextBackgroundViewMarginLeft);
    // ログインボタン
    self.loginButton = [self imageButton:[UIImage imageNamed:@"LI_btn_orange420_01"]
                          hilightedImage:[UIImage imageNamed:@"LI_btn_orange420_01_hover"]
                           disablesIamge:[UIImage imageNamed:@"LI_btn_orange420_01_inactive"]
                              imageScale:0.5];
    [self.loginButton addTarget:self
                         action:@selector(loginButtonAction:)
               forControlEvents:UIControlEventTouchUpInside];
    self.loginButton.enabled = NO;
    
    // ブロック枠内に配置
    LIStackLayoutView * stackView = [[LIStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, VIEW_WIDTH_TEXTBOX, 0.0f)];
    [self configBorderToBackgroundStyle:stackView BackgroundColor:[UIColor whiteColor] borderColor:[ColorUtil textBoxBorderLightGlay]];
    
    [stackView addBlankWithHeight:15.0f];
    [stackView addView:reLogin];
    [stackView addBlankWithHeight:25.0f];
    [stackView addView:idTitle];
    [stackView addView:userID];
    [stackView addBlankWithHeight:25.0f];
    [stackView addViewAtHCenter:self.loginPasswordInput];
    [stackView addBlankWithHeight:25.0f];
    [stackView addView:nextAction];
    [stackView addBlankWithHeight:15.0f];
    [stackView addViewAtHCenter:self.loginButton];
    [stackView addBlankWithHeight:15.0f];
    [self addViewAtHCenter:stackView];
}

#pragma mark - RBInputTextFieldDelegate実装
- (void)changeInputTextStatus:(RBInputTextField *)rbInputTextField
{
    self.loginButton.enabled = rbInputTextField.inputField.inputTextEnable;
}

#pragma mark - UIUXLIReLoginViewDelegateを呼ぶメソッド実装
- (void)loginButtonAction:(UIButton *)button
{
    if ([self.uiuxLIReLoginViewDelegate respondsToSelector:@selector(loginButtonAction:)]) {
        [self.uiuxLIReLoginViewDelegate loginButtonAction:button];
    }
}

#pragma mark - プロパティのアクセサ
- (UIUXLIReLoginViewDTO *)viewDto
{
    if (!self.loginPasswordInput) {
        return nil;
    }
    
    // 毎回新規インスタンスを生成・返却することに注意
    UIUXLIReLoginViewDTO * dto = UIUXLIReLoginViewDTO.new;
    dto.loginPassword = self.loginPasswordInput.inputField.text;
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    dto.userId = appDel.firstLoginDto.userIdComp;
    
    return dto;
}

@end
