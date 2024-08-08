//
//  UIUXQLQuickLoginMNOView.m
//  RakutenBank
//
//  Created by sugiyama8067 on 2014/04/29.
//
//

#import "UIUXQLQuickLoginMNOView.h"
#import "DataStorageService.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "UnderlineTextField.h"
#import "ValidatedTextField+ConfigUtil.h"
#import "UIUXLIUtilMacro.h"
#import "UIUXLoginMakeViewUtil.h"
#import <LocalAuthentication/LocalAuthentication.h>
#import "AssertUtil.h"
#import "CommonUtil.h"
#import "ResourceLoaderModel.h"
#import "MakeViewUtil.h"
#import "Branch.h"

@implementation UIUXQLQuickLoginMNOViewDTO

@end

#pragma mark - 定数定義
static NSString * const CHECKBOX_OFF_IMAGE = @"LI_CheckBox_Off";
static NSString * const CHECKBOX_ON_IMAGE = @"LI_CheckBox_On";
static NSString * const BTN_PASSDISP_IMAGE = @"icon_pwd_show";
static NSString * const BTN_PASSHIDE_IMAGE = @"icon_pwd_hide";

#pragma mark - UI用マージン
static CGFloat const UI_MARGIN_LEVEL0 = 0.0f;
static CGFloat const UI_MARGIN_LEVEL2 = 10.0f;
static CGFloat const UI_MARGIN_LEVEL3 = 15.0f;
static CGFloat const UI_MARGIN_LEVEL6 = 30.0f;

#pragma mark - interface
@interface UIUXQLQuickLoginMNOView () <UnderlineTextFieldDelegate>
@property (nonatomic, weak) UIUXQLQuickLoginMNOViewController * viewController; ///< コントローラーオブジェクト保持
@property (nonatomic)         NSInteger contentTopNumber;               ///< 最上位空白viewインデックス保持
@property (nonatomic, strong) LIStackLayoutView * loginBlock;           ///< ログインブロック
@property (nonatomic, strong) LIStackLayoutView * biometryBlock;        ///< 生体認証のブロック
@property (nonatomic, strong) UIImage * loginFormBackground;            ///< 最上位空白viewインデックス保持
@property (nonatomic)         NSInteger indexForBiometry;               ///< 生体認証のブロック挿入位置を保持
@property (nonatomic, strong) UnderlineTextField * loginUserIdInput;      ///< ログインユーザーID入力欄
@property (nonatomic, strong) UnderlineTextField * loginPasswordInput;    ///< ログインパスワード入力欄
@property (nonatomic, strong) UIButton * passwordDispButton;            ///< パスワード表示ボタン
@property (nonatomic, strong) UIButton * loginFormButton;               ///< ログイン入力欄ボタン
@property (nonatomic, strong) UIButton * loginButton;                   ///< ログインボタン
@property (nonatomic, strong) UIButton * biometryButton;                ///< 生体認証ログインボタン
@property (nonatomic, strong) UIButton * backToMNOButton;                ///< 楽天モバイルへ戻るボタン
@property (nonatomic, strong) UIView * coverView;                       ///< ダイアログカバー
@property (nonatomic, strong) UIButton * biometryCheckBox;              ///< ダイアログチェックボックス
@property (nonatomic, strong) NSUserDefaults * nSUserDefaults;          ///< ユーザデフォルトを保持
@property (nonatomic, strong) LIStackLayoutView * mainBlockView;        ///< メインブロック

@end

@implementation UIUXQLQuickLoginMNOView
#pragma mark - LIBaseScrollViewクラスのメソッドオーバーライド
- (instancetype)initWithFrame:(CGRect)frame
                      viewDTO:(NSObject *)viewDTO
               viewController:(ParentController *)vc
{
    self.viewDto = (UIUXQLQuickLoginMNOViewDTO *)viewDTO;
    self.viewController = (UIUXQLQuickLoginMNOViewController *)vc;
    self.nSUserDefaults = [NSUserDefaults standardUserDefaults];
    self = [super initWithFrame:frame viewDTO:viewDTO];
    
    if (!self) {
        return nil;
    }
    
    return self;
}

// ビューの初期化時にサブビューを構築する
- (void)loadInitialViews
{
    [self addBlankWithHeight:20.0f];
    self.contentTopNumber = [self addBlankWithHeight:60.0f];
    
    self.backgroundColor = UIColor.whiteColor;
    
    //楽天ロゴ表示
    UIImageView * logoImageView;
    logoImageView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"logo_rkbk_horizontal"]];
    logoImageView.frame = CGRectMake(0, 0, 202, 32);
    logoImageView.contentMode = UIViewContentModeScaleAspectFit;
    [self addViewAtHCenter:logoImageView];
    [self addBlankWithHeight:25.0f];
    
    //MNO連携説明csf画像
    UIView *mmoLoginInfoImage = [[UIView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width - (15.0f*2), 0.0f)];
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    NSString *csfImagePath = appDel.externalFileDto.mnoQuickLoginInformationImgUrl;
    [self setImage:csfImagePath toView:mmoLoginInfoImage insets:UIEdgeInsetsZero handler:nil];
    [self addViewAtHCenter:mmoLoginInfoImage];
    [self addBlankWithHeight:35.0f];
    
    //ログインブロック追加
    [self addLoginBlock];
    
    self.viewDto.holdBiometryType = BiometryTypeNone;
    if ([BiometryUtil allCheckBiometry]) {
        //生体認証ブロック追加
        [self makeBiometryBlock];
        [self addViewAtHCenter:self.biometryBlock];
        
        self.viewDto.biometryViewFlag = YES;
    } else {
        self.viewDto.biometryViewFlag = NO;
    }
    
    //メインブロック追加
    [self addMainBlock];
    
    if ([CommonUtil isIOS11OrLater]) {
        self.contentInsetAdjustmentBehavior = UIScrollViewContentInsetAdjustmentNever;
    }
    
    // 障害枠CSF画像の取得
    ResourceLoaderModel * rlm = [appDel.modelLocator queryModelWithType:ModelTypeResourceLoader];
    [rlm fetchRemoteFileFor:self
                       urls:@[appDel.externalFileDto.noticeImageLogin]
                    handler:@selector(onImageResponse:)
                     update:NO];
}

//入力欄クリアメソッド
- (void)clearInput
{
    //各画面遷移時にパスワード入力欄を空欄にする
    [self.loginPasswordInput.inputField clearText];
}

#pragma mark - ビューの初期化メソッド群
//ログインブロック追加
- (void)addLoginBlock
{
    //文言読み込み
    NSString * unclearLinkTitleStr = [NSString stringWithFormat:
                                      NSLocalizedString(@"UI0008_LinkTitle_HelpForgetPassword", nil),
                                      NSLocalizedString(@"Common_Password", nil)];
    
    LIStackLayoutView * baseView = [[LIStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    if(appDel.branchInfoList != nil && appDel.branchInfoList.count > 1) {
        //複数口座の場合に表示
        //ログインID入力欄
        CGRect inputFrame = CGRectMake(16.0f, 0.0f, self.frame.size.width - 32.0f, k_HeightTextField);
        self.loginUserIdInput = [[UnderlineTextField alloc] initWithFrame:inputFrame];
        self.loginUserIdInput.placeholder = NSLocalizedString(@"Common_UserID", nil);
        [self.loginUserIdInput.inputField configToUserIDForLoginPage];
        self.loginUserIdInput.inputField.autocapitalizationType = UITextAutocapitalizationTypeNone;
        self.loginUserIdInput.inputField.returnKeyType = UIReturnKeyNext;
        self.loginUserIdInput.inputTextFieldDelegate = self;
        [self.loginUserIdInput unusedErrorWithShrinkSpace:NO];
        [baseView addViewAtHCenter:self.loginUserIdInput];
        [baseView addBlankWithHeight:k_VmarginUnderTextField];
    }
        
    //ログインパスワード入力欄
    CGRect inputFrame = CGRectMake(16.0f, 0.0f, self.frame.size.width - 32.0f, k_HeightTextField);
    self.loginPasswordInput = [[UnderlineTextField alloc] initWithFrame:inputFrame];
    self.loginPasswordInput.placeholder = NSLocalizedString(@"Common_LoginPassword", nil);
    [self.loginPasswordInput.inputField configToLoginPasswordForLoginPage];
    self.loginPasswordInput.inputField.secureTextEntry = YES;
    self.loginPasswordInput.inputField.returnKeyType = UIReturnKeyJoin;
    self.loginPasswordInput.inputField.shiftJISCheckActive = NO;
    self.loginPasswordInput.inputField.emojiCheckActive = NO;
    self.loginPasswordInput.inputTextFieldDelegate = self;
    [self.loginPasswordInput setDefaultErrorMessage2:NSLocalizedString(@"Common_LoginPassword", nil)];
    //パスワード表示ボタン
    self.passwordDispButton = [self imageButton:[UIImage imageNamed:BTN_PASSDISP_IMAGE]
                                 hilightedImage:[UIImage imageNamed:BTN_PASSDISP_IMAGE]
                                  disablesIamge:[UIImage imageNamed:BTN_PASSDISP_IMAGE]
                                     imageScale:1];
    [self.passwordDispButton addTarget:self
                                action:@selector(passwordDispButtonAction:)
                      forControlEvents:UIControlEventTouchUpInside];
    [self.loginPasswordInput setRightIcon:self.passwordDispButton];
    [baseView addViewAtHCenter:self.loginPasswordInput];
    [baseView addBlankWithHeight:k_VmarginUnderTextField];
    
    //ログインボタン
    self.loginButton = [[UIButton alloc] initWithFrame:CGRectMake(16.0f, self.frame.origin.y + self.frame.size.height, self.frame.size.width - 16.0f * 2, 44.0f)];
    [self.loginButton setTitle:NSLocalizedString(@"Common_Login", nil) forState:UIControlStateNormal];
    [self.loginButton setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
    [self.loginButton setTitleColor:[ColorUtil textColorGlay] forState:UIControlStateDisabled];
    self.loginButton.layer.cornerRadius = 5.0f;
    self.loginButton.exclusiveTouch = YES;
    
    [self changeInputTextStatus:nil];
    [self.loginButton addTarget:self
                         action:@selector(loginButtonAction:)
               forControlEvents:UIControlEventTouchUpInside];
    [baseView addViewAtHCenter:self.loginButton];
    [baseView addBlankWithHeight:15.0f];
    
    //パスワードをお忘れのお客さまリンク
    UIView * unclearLink = [self linkText:unclearLinkTitleStr action:@selector(unclearLinkButtonAction:) rightAlignView:self];
    
    [baseView addView:unclearLink];
    [baseView addBlankWithHeight:32.0f];
    
    [baseView sizeToFit];
    self.loginBlock = baseView;
    self.indexForBiometry = [self addViewAtHCenter:baseView];
}

//生体認証ブロック追加
- (void)makeBiometryBlock
{
    //文言読み込み
    NSString * biometryButtonText = @"";
    NSString * biometryLinkText = @"";
    NSString * iconName = @"";
    SEL linkAction = nil;
    
    LIStackLayoutView * baseView = [[LIStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    
    if (BiometryTypeTouchID == [BiometryUtil checkBiometryStatus]) {
        // TouchIDが有効であることを保持
        self.viewDto.holdBiometryType = BiometryTypeTouchID;
        biometryLinkText = NSLocalizedString(@"Common_About_TouchID_Login", nil);
        biometryButtonText = [NSString stringWithFormat:NSLocalizedString(@"Common_Biometry_Login", nil), NSLocalizedString(@"Common_TouchID", nil)];
        iconName = @"icon_touchid";
        linkAction = @selector(touchIDLinkButtonAction:);
    } else if (BiometryTypeFaceID == [BiometryUtil checkBiometryStatus]) {
        // FaceIDが有効であることを保持
        self.viewDto.holdBiometryType = BiometryTypeFaceID;
        biometryLinkText = NSLocalizedString(@"Common_About_FaceID_Login", nil);
        biometryButtonText = [NSString stringWithFormat:NSLocalizedString(@"Common_Biometry_Login", nil), NSLocalizedString(@"Common_FaceID", nil)];
        iconName = @"icon_faceid";
        linkAction = @selector(faceIDLinkButtonAction:);
    }
    if(biometryButtonText) {
        UIButton *button = [[UIButton alloc] initWithFrame:CGRectMake(16.0f, self.frame.origin.y + self.frame.size.height, self.frame.size.width - 16.0f * 2, 44.0f)];
        [button setTitle:biometryButtonText forState:UIControlStateNormal];
        [button addTarget:self
                   action:@selector(biometryButtonAction:)
         forControlEvents:UIControlEventTouchUpInside];
        [button setTitleColor:[UIColor whiteColor] forState:UIControlStateNormal];
        [button setBackgroundColor:[ColorUtil backgroundColorRed]];
        button.layer.cornerRadius = 5.0f;
        button.enabled = YES;
        button.exclusiveTouch = YES;
        
        //アイコン表示
        UIImageView * icon;
        [button.titleLabel sizeToFit];
        CGFloat textWidth = button.titleLabel.frame.size.width;
        icon = [[UIImageView alloc] initWithImage:[UIImage imageNamed:iconName]];
        icon.frame = CGRectMake((button.frame.size.width / 2) - (textWidth / 2) - 16 - 6,
                                (button.frame.size.height / 2) - (16 / 2) ,
                                16,
                                16);
        icon.contentMode = UIViewContentModeScaleAspectFit;
        [button addSubview:icon];
        
        self.biometryButton = button;
        [baseView addViewAtHCenter:self.biometryButton];
        [baseView addBlankWithHeight:15.0f];
        
        UIView * link = [self linkText2:biometryLinkText action:linkAction rightAlignView:self];
        MOVE_WITH_RIGHT_POSITION(link, CGRectGetMaxX(self.biometryButton.frame));
        [baseView addView:link];
    }
    
    [baseView addBlankWithHeight:32.0f];
    [baseView sizeToFit];
    self.biometryBlock = baseView;
}

//メインブロック追加
- (void)addMainBlock
{
    LIStackLayoutView * baseView = [[LIStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    UIButton *button = [[UIButton alloc] initWithFrame:CGRectMake(16.0f, self.frame.origin.y + self.frame.size.height, self.frame.size.width - 16.0f * 2, 44.0f)];
    [button setTitle:@"楽天モバイルへ戻る" forState:UIControlStateNormal];
    [button addTarget:self
               action:@selector(backToMNOButtonAction:)
     forControlEvents:UIControlEventTouchUpInside];
    [button setTitleColor:[ColorUtil textColorRed] forState:UIControlStateNormal];
    button.layer.borderColor = [ColorUtil backgroundColorRed].CGColor;
    button.layer.borderWidth = 2;
    button.layer.cornerRadius = 5.0f;
    button.enabled = YES;
    button.exclusiveTouch = YES;
    self.backToMNOButton = button;
    
    [baseView addViewAtHCenter:[self hBarLevel1]];
    [baseView addBlankWithHeight:26.0f];
    [baseView addViewAtHCenter:self.backToMNOButton];
    [baseView addBlankWithHeight:15.0f];
    
    //プライバシーポリシーのリンク追加
    [baseView addBlankWithHeight:32.0f];
    UIView * link = [self linkText:NSLocalizedString(@"Common_PrivacyPolicy", nil) action:@selector(onPrivacyPolicyButtonAction:) rightAlignView:self];
    [baseView addView:link];
    [baseView sizeToFit];
    self.mainBlockView = baseView;
    [self addViewAtHCenter:baseView];
}

//Level1水平バー作成メソッド
- (UIView *)hBarLevel1
{
    UIView * hBar = [UIUXLoginMakeViewUtil hBarWithBaseWidth:self.frame.size.width
                                                      margin:10.0f
                                                      weight:1.0f
                                                       color:ColorUtil.SeparatorLightBrown];
    return hBar;
}

//リンクTextを作成する
- (UIView *)linkText:(NSString *)text
              action:(SEL)action
      rightAlignView:(UIView*)rightAlignView
{
    UIView * link = [self blueTextButtonWithTitle:text
                                             rect:CGRectZero
                                             font:[UIFont boldSystemFontOfSize:14.0f]
                                           target:self
                                           action:action];
    
    float x =  rightAlignView.frame.size.width - link.frame.size.width - 16.0f;
    CGRect frame = CGRectMake(x, 0, link.frame.size.width, link.frame.size.height);
    link.frame = frame;
    
    return link;
}

//アイコン付きのリンクTextを作成する
- (UIView *)linkText2:(NSString *)text
              action:(SEL)action
      rightAlignView:(UIView*)rightAlignView
{
    UIView * link = [self blueTextHelpButtonWithTitle:text
                                                 rect:CGRectZero
                                                 font:[UIFont boldSystemFontOfSize:14.0f]
                                               target:self
                                               action:action];
    
    float x =  rightAlignView.frame.size.width - link.frame.size.width - 16.0f;
    CGRect frame = CGRectMake(x, 0, link.frame.size.width, link.frame.size.height);
    link.frame = frame;
    
    return link;
}

#pragma mark - UnderlineTextFieldDelegate実装
- (void)showAlertView:(UnderlineTextField *)inputTextField
{
    inputTextField.errorMessageVisible = YES;
}

- (void)changeInputTextStatus:(UnderlineTextField *)inputTextField
{
    self.loginButton.enabled = (self.loginUserIdInput == nil || self.loginUserIdInput.inputField.inputTextEnable) && self.loginPasswordInput.inputField.inputTextEnable;
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
    if (inputTextField == self.loginUserIdInput) {
        // Nextボタンタップ時にはパスワード入力欄にフォーカスを移す
        [self.loginPasswordInput.inputField becomeFirstResponder];
        return YES;
    } else if (inputTextField == self.loginPasswordInput) {
        // Joinボタンタップ時にはログインボタンタップ時と同じ処理を実施
        if (self.loginButton.enabled) {
            [self loginButtonAction:self.loginButton];
            return YES;
        }
    }
    
    return NO;
}

#pragma mark - UIUXQLRegistrationCompleteViewDelegateを呼ぶメソッド実装
//ログインボタンイベント
- (void)loginButtonAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginMNOViewDelegate respondsToSelector:@selector(loginButtonAction:)]) {
        if (self.loginUserIdInput != nil) {
            self.viewDto.loginUserId = self.loginUserIdInput.inputField.text;
        }
        self.viewDto.loginPassword = self.loginPasswordInput.inputField.text;
        [self.uiuxQLQuickLoginMNOViewDelegate loginButtonAction:button];
    }
}

//パスワード表示ボタン
- (void)passwordDispButtonAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginMNOViewDelegate respondsToSelector:@selector(passwordDispButtonAction:)]) {
        //デリゲートメソッドが定義されていた場合
        [self.uiuxQLQuickLoginMNOViewDelegate passwordDispButtonAction:self.loginPasswordInput.inputField];
    }
}

/**
 * 生体認証ボタンイベント
 */
- (void)biometryButtonAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginMNOViewDelegate respondsToSelector:@selector(biometryButtonAction:)]) {
        [self.uiuxQLQuickLoginMNOViewDelegate biometryButtonAction:button];
    }
}

/**
 * TouchIDでのログインについてボタンイベント
 */
- (void)touchIDLinkButtonAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginMNOViewDelegate respondsToSelector:@selector(touchIDLinkButtonAction:)]) {
        [self.uiuxQLQuickLoginMNOViewDelegate touchIDLinkButtonAction:button];
    }
}

/**
 * FaceIDでのログインについてボタンイベント
 */
- (void)faceIDLinkButtonAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginMNOViewDelegate respondsToSelector:@selector(faceIDLinkButtonAction:)]) {
        [self.uiuxQLQuickLoginMNOViewDelegate faceIDLinkButtonAction:button];
    }
}

/**
 * 生体認証無効時ダイアログOKボタンイベント
 */
- (void)onBiometryDialogOKAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginMNOViewDelegate respondsToSelector:@selector(onBiometryDialogOKAction:)]) {
        [self.uiuxQLQuickLoginMNOViewDelegate onBiometryDialogOKAction:button];
    }
}

/**
 * ダイアログチェックボックスボタンイベント
 */
- (void)onBiometryCheckBoxAction:(UIButton *)button
{
    RBLog(@"ダイアログチェックボックスボタンイベント");
    if ([self.uiuxQLQuickLoginMNOViewDelegate respondsToSelector:@selector(onBiometryCheckBoxAction:)]) {
        [self.uiuxQLQuickLoginMNOViewDelegate onBiometryCheckBoxAction:button];
    }
}

/**
 * 後でボタンイベント
 */
- (void)onBiometryDialogAfterAction:(UIButton *)button
{
    RBLog(@"後でボタンイベント");
    if ([self.uiuxQLQuickLoginMNOViewDelegate respondsToSelector:@selector(onBiometryDialogAfterAction:)]) {
        [self.uiuxQLQuickLoginMNOViewDelegate onBiometryDialogAfterAction:button];
    }
}

/**
 * 設定ボタンイベント
 */
- (void)onBiometryDialogSettingAction:(UIButton *)button
{
    RBLog(@"設定ボタンイベント");
    if ([self.uiuxQLQuickLoginMNOViewDelegate respondsToSelector:@selector(onBiometryDialogSettingAction:)]) {
        [self.uiuxQLQuickLoginMNOViewDelegate onBiometryDialogSettingAction:button];
    }
}

//パスワードをお忘れのお客さまリンクイベント
- (void)unclearLinkButtonAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginMNOViewDelegate respondsToSelector:@selector(unclearLinkButtonAction:)]) {
        [self.uiuxQLQuickLoginMNOViewDelegate unclearLinkButtonAction:button];
    }
}

/**
 * プライバシーボタンイベント
 */
- (void)onPrivacyPolicyButtonAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginMNOViewDelegate respondsToSelector:@selector(onPrivacyPolicyButtonAction:)]) {
        [self.uiuxQLQuickLoginMNOViewDelegate onPrivacyPolicyButtonAction:button];
    }
}


/**
 * 楽天モバイルへ戻るボタンイベント
 */
- (void)backToMNOButtonAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginMNOViewDelegate respondsToSelector:@selector(backToMNOButtonAction:)]) {
        [self.uiuxQLQuickLoginMNOViewDelegate backToMNOButtonAction:button];
    }
}

#pragma mark - Biometry
// 生体認証を開始
- (void)evaluatePolicy
{
    LAContext *context = [[LAContext alloc] init];
    
    // 生体認証のダイアログを表示
    [context evaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics
            localizedReason:@"ロックを解除します"
                      reply:^(BOOL success, NSError *authenticationError) {
                          if (success) {
                              RBLog(@"生体認証OK!");
                              if ([self.uiuxQLQuickLoginMNOViewDelegate respondsToSelector:@selector(biometryLoginAction)]) {
                                  [self.uiuxQLQuickLoginMNOViewDelegate biometryLoginAction];
                              }
                          } else {
                              RBLog(@"生体認証NG!");
                              return;
                          }
                      }];
}

/**
 * 使用確認ダイアログview
 */
- (void)useConfirmationDialogView:(BiometryType)biometryType
{
    self.scrollEnabled = NO;
    self.coverView = [[UIView alloc] initWithFrame:self.viewController.view.bounds];
    self.coverView.backgroundColor = [[UIColor blackColor] colorWithAlphaComponent:0.3f];
    [self.coverView addSubview:[self makeuseConfirmationDialog:biometryType]];
    [self.viewController.view addSubview:self.coverView];
}

/**
 * ダイアログ作成メソッド
 */
- (UIView *)makeuseConfirmationDialog:(BiometryType)biometryType
{
    // トータルマージン初期化
    CGFloat totalMargin = UI_MARGIN_LEVEL0;
    
    // ダイアログのベースビュー作成
    UIView * baseView = [[UIView alloc] initWithFrame:CGRectMake(k_HmarginLevel6,
                                                                 self.coverView.frame.size.height/4,
                                                                 VIEW_WIDTH_LEVEL6,
                                                                 UI_MARGIN_LEVEL0)];
    baseView.backgroundColor = [UIColor whiteColor];
    baseView.layer.cornerRadius = UI_MARGIN_LEVEL2;
    
    // 上段のマージン加算
    totalMargin += k_HmarginLevel2;
    
    // ダイアログメッセージラベル
    NSString * biometryTypeStr = NSLocalizedString(@"Common_TouchID", nil);
    if (biometryType == BiometryTypeFaceID) {
        biometryTypeStr = NSLocalizedString(@"Common_FaceID", nil);
    }
    UILabel * confirmationDialogMessView = [UIUXLoginMakeViewUtil labelWithWidth:VIEW_WIDTH_LEVEL8
                                                                            text:[NSString stringWithFormat:
                                                                                  NSLocalizedString(@"UI0008_ConfirmationDialogMessText", nil),
                                                                                  biometryTypeStr]
                                                                       textColor:[UIColor blackColor]
                                                                        fontSize:k_FontSize_DefaultMsg
                                                                          isbold:NO];
    [baseView addSubview:confirmationDialogMessView];
    // ダイアログメッセージラベルの位置を変更
    confirmationDialogMessView.center = CGPointMake(baseView.bounds.size.width / 2, UI_MARGIN_LEVEL0); // ベースのセンターに配置
    CHANGE_ORIGIN_Y(confirmationDialogMessView, totalMargin); // トータルマージン分下げる

    // 追加したUIとマージンを加算
    totalMargin += confirmationDialogMessView.frame.size.height;
    totalMargin += UI_MARGIN_LEVEL6;
    
    // チェックボックスのベースビュー作成
    UIView * checkBaseView = [[UIView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, 0.0f, 0.0f)];
    
    // チェックボックス作成
    self.biometryCheckBox = [self checkBoxButton:@selector(onBiometryCheckBoxAction:)
                                          target:self
                                             tag:11];
    [checkBaseView addSubview:self.biometryCheckBox];
    
    // チェックボックス横メッセージ作成
    UILabel * checkBoxMess = [UIUXLoginMakeViewUtil labelWithWidth:VIEW_WIDTH_LEVEL8
                                                              text:NSLocalizedString(@"UI0008_ConfirmationDialogCheckBoxMessText", nil)
                                                         textColor:[UIColor blackColor]
                                                          fontSize:k_FontSize_DefaultMsg
                                                            isbold:NO];
    [checkBaseView addSubview:checkBoxMess];
    checkBoxMess.center = CGPointMake(0, self.biometryCheckBox.bounds.size.height / 2);
    LINEUP_TO_RIGHT(checkBoxMess, self.biometryCheckBox, UI_MARGIN_LEVEL2);
    CHANGE_HEIGHT(checkBaseView, checkBoxMess.frame.size.height);
    
    // ベースビューのサイズ計算
    checkBaseView.frame = CGRectMake(0.0f,
                                     0.0f,
                                     checkBoxMess.frame.size.width + self.biometryCheckBox.frame.size.width,
                                     self.biometryCheckBox.frame.size.height);
    UIButton * checkBoxInBtn = [self clButton:@selector(onBiometryCheckBoxAction:)
                                       target:self
                                        frame:checkBaseView.frame];
    [checkBaseView addSubview:checkBoxInBtn];
    [baseView addSubview:checkBaseView];
    checkBaseView.center = CGPointMake(baseView.bounds.size.width / 2, UI_MARGIN_LEVEL0);
    CHANGE_ORIGIN_Y(checkBaseView, totalMargin);
    LINEUP_TO_LEFT(self.biometryCheckBox, checkBoxMess, UI_MARGIN_LEVEL2);
    
    totalMargin += UI_MARGIN_LEVEL3;
    totalMargin += checkBaseView.frame.size.height;
    
    
    // 水平線追加
    UIView * barOne = [[UIView alloc] initWithFrame:CGRectMake(0.0f,
                                                               0.0f,
                                                               VIEW_WIDTH_LEVEL6,
                                                               k_HBarLevel2Height)];
    barOne.backgroundColor = [ColorUtil SeparatorLightGray];
    [baseView addSubview:barOne];
    CHANGE_ORIGIN_Y(barOne, totalMargin);
    
    // 透明の後でボタン作成
    UIButton* dialogAfter = [self clButton:@selector(onBiometryDialogAfterAction:)
                                    target:self
                                     frame:CGRectMake(0.0f, 0.0f, VIEW_WIDTH_LEVEL6/2, 45.0f)];
    [baseView addSubview:dialogAfter];
    CHANGE_ORIGIN_Y(dialogAfter, totalMargin);
    
    // 後でメッセージ作成
    UILabel * afterMess = [UIUXLoginMakeViewUtil labelWithWidth:UI_MARGIN_LEVEL0
                                                           text:NSLocalizedString(@"UI0008_AfterMessText", nil)
                                                      textColor:[UIColor blackColor]
                                                       fontSize:k_FontSize_DefaultMsg
                                                         isbold:NO];
    [dialogAfter addSubview:afterMess];
    afterMess.center = CGPointMake(dialogAfter.bounds.size.width / 2, dialogAfter.bounds.size.height / 2);
    
    // 垂直線追加
    UIView * barTwo = [[UIView alloc] initWithFrame:CGRectMake(0.0f,
                                                               0.0f,
                                                               k_HBarLevel2Height,
                                                               dialogAfter.frame.size.height)];
    barTwo.backgroundColor = [ColorUtil SeparatorLightGray];
    [baseView addSubview:barTwo];
    CHANGE_ORIGIN_Y(barTwo, totalMargin);
    LINEUP_TO_RIGHT(barTwo, dialogAfter, UI_MARGIN_LEVEL0);
    
    // 透明の設定ボタン作成
    UIButton* dialogSetting = [self clButton:@selector(onBiometryDialogSettingAction:)
                                      target:self
                                       frame:CGRectMake(0.0f, 0.0f, VIEW_WIDTH_LEVEL6/2, 45.0f)];
    [baseView addSubview:dialogSetting];
    CHANGE_ORIGIN_Y(dialogSetting, totalMargin);
    LINEUP_TO_RIGHT(dialogSetting, barTwo, UI_MARGIN_LEVEL0);
    
    // 設定メッセージ作成
    UILabel * settingMess = [UIUXLoginMakeViewUtil labelWithWidth:UI_MARGIN_LEVEL0
                                                             text:NSLocalizedString(@"UI0008_SettingMessText", nil)
                                                        textColor:[UIColor blackColor]
                                                         fontSize:k_FontSize_DefaultMsg
                                                           isbold:NO];
    [dialogSetting addSubview:settingMess];
    settingMess.center = CGPointMake(dialogSetting.bounds.size.width / 2, dialogSetting.bounds.size.height / 2);
    
    // マージンの加算
    totalMargin += dialogAfter.frame.size.height;
    

    CHANGE_HEIGHT(baseView, totalMargin);
    return baseView;
}

// checkBox
- (UIButton *)checkBoxButton:(SEL)action
                      target:(id)target
                         tag:(NSInteger)tag
{
    /* UI作成 */
    UIButton * checkBoxView = [UIButton buttonWithType:UIButtonTypeCustom];  // ボタン作成
    UIImage * img = [UIImage imageNamed:CHECKBOX_OFF_IMAGE];// 画像をオブジェクトとして取り込み
    checkBoxView.frame = CGRectMake(0, 0, img.size.width / 2, img.size.height / 2); // ボタンサイズ
    [checkBoxView setImage:img forState:UIControlStateNormal]; // 通常表示の画像を設定
    [checkBoxView setImage:[UIImage imageNamed:CHECKBOX_ON_IMAGE]
                  forState:UIControlStateDisabled];
    checkBoxView.exclusiveTouch = YES; // 同時押しを防止
    checkBoxView.tag = tag;
    [checkBoxView addTarget:target
                     action:action
        forControlEvents:UIControlEventTouchUpInside];
    
    return checkBoxView;
}

/**
 * 生体認証無効時ダイアログ
 */
- (void)aboutBiometryDeviceDisabledDialogView:(NSString *)biometryDeviceName
{
    self.scrollEnabled = NO;
    
    self.coverView = [[UIView alloc] initWithFrame:self.viewController.view.bounds];
    self.coverView.backgroundColor = [[UIColor blackColor] colorWithAlphaComponent:0.3f];
    UIView * dialogView = [UIUXLoginMakeViewUtil makeUniqueDialog:self
                                                            frame:CGRectMake(k_HmarginLevel6,
                                                                             self.coverView.frame.size.height/5,
                                                                             VIEW_WIDTH_LEVEL6,
                                                                             VIEW_WIDTH_LEVEL6)
                                                     cloaseAction:@selector(onBiometryDialogOKAction:)
                                                       dialogMess:[NSString stringWithFormat:
                                                                   NSLocalizedString(@"UI0008_AboutBiometryDeviceDisabledDialogMessage", nil),
                                                                   biometryDeviceName]];
    [self.coverView addSubview:dialogView];
    dialogView.center = self.coverView.center;
    
    [self.viewController.view addSubview:self.coverView];
}

/**
 * パスワード表示切り替え
 */
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

// 透明ボタン
- (UIButton *)clButton:(SEL)action
                target:(id)target
                 frame:(CGRect)frame
{
    UIButton * inBtn = [UIButton buttonWithType:UIButtonTypeCustom];
    inBtn.frame = frame;
    [inBtn addTarget:target
              action:action
    forControlEvents:UIControlEventTouchUpInside];
    return inBtn;
}


/**
 * ダイアログ閉じる
 */
- (void)onDialogCloseButtonAction
{
    [self.coverView removeFromSuperview];
    self.coverView = nil;
    self.scrollEnabled = YES;
}

/**
 * 画面状態の判定を行い通常クイックログインと生体認証クイックログインの見た目を変更する
 */
- (void)changeNormalQliBiometryQliViews
{
    // 生体認証 ⇨ 通常クイックログイン
    if (self.viewDto.biometryViewFlag && ![BiometryUtil allCheckBiometry]) {
        [self removeViewAtIndex:self.indexForBiometry animated:NO];
        self.viewDto.biometryViewFlag = false;
    }
    
    // クイックログイン ⇨ 生体認証
    if (!self.viewDto.biometryViewFlag && [BiometryUtil allCheckBiometry]) {
        [self makeBiometryBlock];
        [self insertViewAtHCenter:self.biometryBlock atIndex:self.indexForBiometry animated:NO];
        self.viewDto.biometryViewFlag = true;
    }
}

/**
 * チェックボックス切り替え
 */
- (void)chengeBiometryCheckBoxAction
{
    if (self.viewDto.checkBoxFlag) {
        self.biometryCheckBox.imageView.image = [UIImage imageNamed:CHECKBOX_ON_IMAGE];
    } else {
        self.biometryCheckBox.imageView.image = [UIImage imageNamed:CHECKBOX_OFF_IMAGE];
    }
}

/**
 * CSF画像取得レスポンスハンドラ
 */
- (void)onImageResponse:(NSNotification *)notification
{
    NSDictionary * userInfo = notification.userInfo;
    
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    id noticeImageData = userInfo[appDel.externalFileDto.noticeImageLogin];
    
    dispatch_async(dispatch_get_main_queue(), ^() {
        if ([noticeImageData isKindOfClass:NSData.class]) {
            NSData * imgData = (NSData *)noticeImageData;
            
            UIImage * image = [UIImage imageWithData:imgData];
            UIImageView * imageView = [[UIImageView alloc] initWithImage:image];
            CHANGE_WIDTH(imageView, self.frame.size.width);
            CHANGE_HEIGHT(imageView, imageView.frame.size.height * imageView.frame.size.width / image.size.width);
            
            [self insertViewAtHCenter:imageView atIndex:self.contentTopNumber - 1 animated:NO];
            self.indexForBiometry++;
        }
    });
}

#pragma mark - 外部画像読み込み関係メソッド
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
@end
