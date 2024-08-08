//
//  UIUXQLQuickLoginView.m
//  RakutenBank
//
//  Created by sugiyama8067 on 2014/04/29.
//
//

#import "UIUXQLQuickLoginView.h"
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

@implementation UIUXQLQuickLoginViewDTO

@end

#pragma mark - 定数定義
/**
 * ボタンタグ
 */
typedef NS_ENUM(NSUInteger, ButtonTag) {
    ButtonTag_First = 1,
    ButtonTagATM = ButtonTag_First, ///< ATM・コンビニ
    ButtonTagRate,                  ///< 金利一覧
    ButtonTagHomeLoan,              ///< 住宅ローン
    ButtonTagSuperLoan,             ///< 楽天銀行スーパーローン
    
    ButtonTagFAQ,                   ///< よくある質問
    ButtonTagHelp,                  ///< ヘルプ
    ButtonTagSupport,               ///< お問い合わせ
    ButtonTag_Last
};

static NSString * const CHECKBOX_OFF_IMAGE = @"LI_CheckBox_Off";
static NSString * const CHECKBOX_ON_IMAGE = @"LI_CheckBox_On";
static NSString * const BTN_PASSDISP_IMAGE = @"icon_pwd_show";
static NSString * const BTN_PASSHIDE_IMAGE = @"icon_pwd_hide";

static NSString * const k_CellID = @"cell";                     ///< セルID
static CGFloat const k_HeightCell = 50.0f;                     ///< セル高さ
static CGFloat const k_HeightCellSeparatorSectionEnd = 1.0f;    ///< セクション区切りの線の太さ

#pragma mark - UI用マージン
static CGFloat const UI_MARGIN_LEVEL0 = 0.0f;
//static CGFloat const UI_MARGIN_LEVEL1 = 5.0f;
static CGFloat const UI_MARGIN_LEVEL2 = 10.0f;
static CGFloat const UI_MARGIN_LEVEL3 = 15.0f;
//static CGFloat const UI_MARGIN_LEVEL4 = 20.0f;
//static CGFloat const UI_MARGIN_LEVEL5 = 25.0f;
static CGFloat const UI_MARGIN_LEVEL6 = 30.0f;

#pragma mark - interface
@interface UIUXQLQuickLoginView () <UITableViewDelegate, UITableViewDataSource, UnderlineTextFieldDelegate>
@property (nonatomic, weak) UIUXQLQuickLoginViewController * viewController; ///< コントローラーオブジェクト保持
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
@property (nonatomic)         CGFloat * cellHeight;                     ///< セル高さ
@property (nonatomic, strong) UIView * coverView;                       ///< ダイアログカバー
@property (nonatomic, strong) UIButton * biometryCheckBox;              ///< ダイアログチェックボックス
@property (nonatomic, strong) NSUserDefaults * nSUserDefaults;          ///< ユーザデフォルトを保持
@property (nonatomic, strong) UIView * footerView;                      ///< お問い合わせ先/プライバシーポリシーボタン領域
@property (nonatomic, strong) LIStackLayoutView * mainBlockView;        ///< メインブロック

@end

@implementation UIUXQLQuickLoginView
#pragma mark - LIBaseScrollViewクラスのメソッドオーバーライド
- (instancetype)initWithFrame:(CGRect)frame
                      viewDTO:(NSObject *)viewDTO
               viewController:(ParentController *)vc
{
    self.viewDto = (UIUXQLQuickLoginViewDTO *)viewDTO;
    self.viewController = (UIUXQLQuickLoginViewController *)vc;
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
    
    //支店口座追加ブロック追加
    [self addBranchAccountsBlock];
    
    //メインブロック追加
    [self addMainBlock];
    
    if ([CommonUtil isIOS11OrLater]) {
        self.contentInsetAdjustmentBehavior = UIScrollViewContentInsetAdjustmentNever;
    }
    
    // CSF画像の取得
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
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
    
    //楽天ロゴ表示
    UIImageView * logoImageView;
    logoImageView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"logo_rkbk_horizontal"]];
    logoImageView.frame = CGRectMake(0, 0, 202, 32);
    logoImageView.contentMode = UIViewContentModeScaleAspectFit;
    [baseView addViewAtHCenter:logoImageView];
    [baseView addBlankWithHeight:64.0f];
    
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
    
    [baseView addBlankWithHeight:15.0f];
    [baseView sizeToFit];
    self.biometryBlock = baseView;
}

//支店口座追加ブロック追加
- (void)addBranchAccountsBlock
{
    //文言読み込み
    NSString * accountRegisterLink = @"ログインする支店口座を追加する";
    
    LIStackLayoutView * baseView = [[LIStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];

    // 支店口座についてのリンク追加
    UIView * touchLink = [self linkText:accountRegisterLink action:@selector(registerAccountsButtonAction:) rightAlignView:self];
    [baseView addView:touchLink];
    [baseView addBlankWithHeight:32.0f];
    [baseView addViewAtHCenter:[self hBarLevel1]];
    [baseView addBlankWithHeight:22.0f];

    [baseView sizeToFit];
    [self addViewAtHCenter:baseView];
}

//メインブロック追加
- (void)addMainBlock
{
    LIStackLayoutView * baseView = [[LIStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    
    //書類送付ボタン
    [baseView addViewAtHCenter:[self makeSendFileBlock]];
    
    //商品・サービス
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    if(appDel.branchInfoList != nil && [appDel.branchInfoList indexOfObjectPassingTest:^BOOL(Branch * _Nonnull obj, NSUInteger idx, BOOL * _Nonnull stop) {
        *stop = [@"0" isEqualToString:obj.branchType];
        return *stop;
    }] != NSNotFound) {
        // プロパー支店登録されていたら表示
        [baseView addViewAtHCenter:[self makeServiceBlock]];
    }
    
    //楽天銀行からのお知らせ
    if (self.viewDto.bankInfoListLastOne != nil) {
        [baseView addGrayWithHeight:8.0f];
        [baseView addBlankWithHeight:25.0f];
        [self makeBankInfo];
        [baseView addViewAtHCenter:self.infoTable];
    }
    
    //困ったときは
    [baseView addViewAtHCenter:[self makeSupportBlock]];
    
    //プライバシーポリシーのリンク追加
    [baseView addGrayWithHeight:8.0f];
    [baseView addBlankWithHeight:32.0f];
    UIView * link = [self linkText:NSLocalizedString(@"Common_PrivacyPolicy", nil) action:@selector(onPrivacyPolicyButtonAction:) rightAlignView:self];
    [baseView addView:link];
    [baseView addBlankWithHeight:32.0f];
    [baseView addGrayWithHeight:80.0f];
    [baseView sizeToFit];
    self.mainBlockView = baseView;
    [self addViewAtHCenter:baseView];
}

//書類送付ブロック
- (UIView *)makeSendFileBlock
{
    LIStackLayoutView * baseView = [[LIStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    
    //書類送付ボタン
    UIButton *button = [[UIButton alloc] initWithFrame:CGRectMake(16.0f, self.frame.origin.y + self.frame.size.height, self.frame.size.width - 16.0f * 2, 44.0f)];
    [button setTitle:NSLocalizedString(@"UI0008_SendFileButtonText", nil) forState:UIControlStateNormal];
    [button addTarget:self
               action:@selector(startSendPictureButtonAction:)
     forControlEvents:UIControlEventTouchUpInside];
    [button setTitleColor:[ColorUtil textColorRed] forState:UIControlStateNormal];
    button.layer.borderColor = [ColorUtil backgroundColorRed].CGColor;
    button.layer.borderWidth = 2;
    button.layer.cornerRadius = 5.0f;
    button.enabled = YES;
    button.exclusiveTouch = YES;
    [baseView addViewAtHCenter:button];
    [baseView addBlankWithHeight:16.0f];
    
    //ボタン下のUI
    UIView *sendDescriptionView = [[UIView alloc] initWithFrame:CGRectMake(36.0f, 0.0f, self.frame.size.width - 36.0f * 2, 40.0f)];
    UIImageView * icon;
    icon = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"identity_verification"]];
    icon.frame = CGRectMake(0, 0, 40, 40);
    icon.contentMode = UIViewContentModeScaleAspectFit;
    [sendDescriptionView addSubview:icon];
    
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    NSString * descriptionText = NSLocalizedString(@"UI0008_SendFileButtonDescription", nil);
    if(appDel.branchInfoList != nil && appDel.branchInfoList.count > 1) {
        descriptionText = NSLocalizedString(@"UI0008_SendFileButtonDescription2", nil);
    }
    
    UILabel *label = [MakeViewUtil labelWithTextType:Japanese
                                                text:descriptionText
                                           textColor:[ColorUtil textColorGlay]
                                            fontSize:14.0f
                                              isbold:NO
                                           labelType:Text
                                               width:sendDescriptionView.frame.size.width - 49];
    CHANGE_ORIGIN_X(label, 49);
    [sendDescriptionView addSubview:label];
    CHANGE_HEIGHT(sendDescriptionView, label.frame.size.height);
    [baseView addViewAtHCenter:sendDescriptionView];
    [baseView addBlankWithHeight:32.0f];
    
    return baseView;
}

//商品・サービスブロック追加
- (UIView *)makeServiceBlock
{
    //文言読み込み
    NSString * titleText = NSLocalizedString(@"UI0008_SectionTitle_Service", nil);
    
    LIStackLayoutView * baseView = [[LIStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    [baseView addGrayWithHeight:8.0f];
    [baseView addBlankWithHeight:25.0f];
    //タイトル
    UILabel * titleLabel = [MakeViewUtil labelWithTextType:Japanese
                                                      text:titleText
                                                 textColor:ColorUtil.textColorBlack
                                                  fontSize:16
                                                    isbold:YES
                                                 labelType:Label
                                                     width:0];
    CHANGE_ORIGIN_X(titleLabel, 16);
    [baseView addView:titleLabel];
    [baseView addBlankWithHeight:16.0f];
    
    NSArray * array = @[@[@"atm_search", @"ATMを探す", @(ButtonTagATM)],
                        @[@"interest_rate_list", @"金利一覧", @(ButtonTagRate)],
                        @[@"housing_loan", @"住宅ローン", @(ButtonTagHomeLoan)],
                        @[@"card_loan", @"カードローン", @(ButtonTagSuperLoan)]];
    [baseView addViewAtHCenter:[self makeServiceAreaRowView:array bottomMargin:64.0f]];
    
    [baseView sizeToFit];
    return baseView;
}

//困ったときはブロック追加
- (UIView *)makeSupportBlock
{
    //文言読み込み
    NSString * titleText = NSLocalizedString(@"UI0008_SectionTitle_Support", nil);
    
    LIStackLayoutView * baseView = [[LIStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    [baseView addGrayWithHeight:8.0f];
    [baseView addBlankWithHeight:25.0f];
    //タイトル
    UILabel * titleLabel = [MakeViewUtil labelWithTextType:Japanese
                                                      text:titleText
                                                 textColor:ColorUtil.textColorBlack
                                                  fontSize:16
                                                    isbold:YES
                                                 labelType:Label
                                                     width:0];
    CHANGE_ORIGIN_X(titleLabel, 16);
    [baseView addView:titleLabel];
    [baseView addBlankWithHeight:16.0f];
    
    NSArray * array = @[@[@"faq", @"よくある質問", @(ButtonTagFAQ)],
                        @[@"help", @"ヘルプ", @(ButtonTagHelp)],
                        @[@"inquiry", @"お問い合わせ", @(ButtonTagSupport)]];
    [baseView addViewAtHCenter:[self makeServiceAreaRowView:array bottomMargin:64.0f]];
    
    [baseView sizeToFit];
    return baseView;
}

// 配列情報から一行に4つずつ並んだサービスボタンのビューを作成する
- (UIView *)makeServiceAreaRowView:(NSArray *)services bottomMargin:(CGFloat)bottomMargin
{
    UIView * baseView = [[UIView alloc] initWithFrame:CGRectMake(16.0f, 0.0f, self.frame.size.width - 16 * 2, 0.0f)];
    UIButton * button;
    UILabel  * label;
    NSUInteger index;
    NSInteger marginx = (baseView.frame.size.width - 60 * 4) / 3;
    CGFloat labelWidth = (baseView.frame.size.width - 15.0f * 3) / 4;
    CGFloat heightMargin = 20.0f;
    for(index = 0; index < services.count; index++) {
        NSInteger x = index % 4;
        NSInteger y = index / 4;
        //ボタン外枠
        button = [[UIButton alloc] initWithFrame:CGRectMake((60 + marginx) * x, (60 + heightMargin) * y, 60, 60)];
        [button addTarget:self
                   action:@selector(tapButtonAction:)
         forControlEvents:UIControlEventTouchUpInside];
        button.layer.borderColor = [ColorUtil textBoxBorderLightGlay].CGColor;
        button.layer.borderWidth = 1;
        button.layer.cornerRadius = 15;
        button.enabled = YES;
        button.exclusiveTouch = YES;
        //アイコン表示
        UIImageView * icon;
        icon = [[UIImageView alloc] initWithImage:[UIImage imageNamed:services[index][0]]];
        icon.frame = CGRectMake((button.frame.size.width / 2) - (40 / 2),
                                (button.frame.size.height / 2) - (40/ 2),
                                40,
                                40);
        icon.contentMode = UIViewContentModeScaleAspectFit;
        [button addSubview:icon];
        //ラベル表示
        label = [MakeViewUtil labelWithTextType:Japanese
                                           text:services[index][1]
                                      textColor:ColorUtil.textColorBlack
                                       fontSize:10
                                         isbold:NO
                                      labelType:LabelWithAdjustment
                                          width:labelWidth];
        label.textAlignment = NSTextAlignmentCenter;
        button.tag = [services[index][2] integerValue];
        MOVE_WITH_ORIGIN(label,
                         button.frame.origin.x + button.frame.size.width / 2 - label.frame.size.width / 2,
                         button.frame.origin.y + button.frame.size.height + 7.0f);
        [baseView addSubview:button];
        [baseView addSubview:label];
    }
    CHANGE_HEIGHT(baseView, button.frame.origin.y + button.frame.size.height + bottomMargin);
    
    return baseView;
}

//銀行からのお知らせ作成
- (void)makeBankInfo
{
    CGRect frame = CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f);
    self.infoTable = [[UITableView alloc] initWithFrame:frame
                                                  style:UITableViewStylePlain];
    
    self.infoTable.backgroundColor = LI_BACKGROUND_COLOR;
    self.infoTable.separatorStyle = UITableViewCellSeparatorStyleNone;  //cellセパレータ無し
    self.infoTable.scrollEnabled = NO;
    self.infoTable.backgroundColor = [UIColor clearColor];
    self.infoTable.dataSource = self;
    self.infoTable.delegate = self;
    
    //各高さ設定
    UIView * headerView = [self tableView:self.infoTable viewForHeaderInSection:0];
    self.infoTable.sectionHeaderHeight = headerView.frame.size.height;
    //UIView * footerView = [self tableView:self.infoTable viewForFooterInSection:0];
    //self.infoTable.sectionFooterHeight = footerView.frame.size.height;
    self.infoTable.rowHeight = k_HeightCell;
    
    //フレーム高さ設定
    [self.infoTable reloadData];
    CGRect fraem = self.infoTable.frame;
    fraem.size.height = k_HeightCell * self.viewDto.bankInfoList.count + headerView.frame.size.height;
    self.infoTable.frame = fraem;
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

#pragma mark - UITableViewDataSourceのデリゲート
- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    return self.viewDto.bankInfoList.count;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    UITableViewCell * cell = [tableView dequeueReusableCellWithIdentifier:k_CellID];
    if (!cell) {
        cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleSubtitle
                                      reuseIdentifier:k_CellID];
        //共通設定
        cell.textLabel.font = [UIFont systemFontOfSize:14.0f];
        cell.textLabel.textColor = [ColorUtil textColorBlack];
        cell.textLabel.numberOfLines = 2;
        cell.backgroundColor = UIColor.whiteColor;
        cell.selectionStyle = UITableViewCellSelectionStyleNone;
        cell.exclusiveTouch = YES;
        cell.frame = CGRectMake(0.0f, 0.0f, tableView.frame.size.width, k_HeightCell);
    }
    
    //セルの内容を設定する
    [self configCell:cell indexPath:indexPath];
    
    return cell;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    [tableView deselectRowAtIndexPath:indexPath animated:NO];
    
    NSString * urlStr = self.viewDto.bankInfoList[indexPath.row][@"url"];
    if (urlStr && ![urlStr isEqualToString:@""]) {
        //リンク先のURLが存在する場合はリンク先に遷移
        if ([self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(bankInfoActionAtIndexPath:)]) {
            [self.uiuxQLQuickLoginViewDelegate bankInfoActionAtIndexPath:indexPath];
        }
    }
}

#pragma mark - UITableViewDelegateのデリゲート
- (UIView *)tableView:(UITableView *)tableView viewForHeaderInSection:(NSInteger)section
{
    CGRect frame = tableView.frame;
    frame.size.height = 36.0f;
    UIView * view = [[UIView alloc] initWithFrame:frame];
    
    UILabel * titleLabel = [MakeViewUtil labelWithTextType:Japanese
                                                      text:NSLocalizedString(@"UI0008_SectionTitle_BankInfo", nil)
                                                 textColor:ColorUtil.textColorBlack
                                                  fontSize:16
                                                    isbold:YES
                                                 labelType:Label
                                                     width:0];
    CHANGE_ORIGIN_X(titleLabel, 16);
    [view addSubview:titleLabel];
    
    UIView * link = [self linkText:NSLocalizedString(@"UI0008_BankInfoAllDisp", nil) action:@selector(onBankInfoListLastOneButtonAction:) rightAlignView:tableView];
    [view addSubview:link];
    
    return view;
}

#pragma mark - 非公開ユーティリティーメソッド
/**
 * セルの設定を行う
 */
- (void)configCell:(UITableViewCell *)cell indexPath:(NSIndexPath *)indexPath
{
    NSDictionary * displayDataDict = self.viewDto.bankInfoList[indexPath.row];
    
    if (!displayDataDict[@"url"] || [displayDataDict[@"url"] isEqualToString:@""]) {
        // リンク先URLが存在しない場合はaccessoryViewにImageViewを削除する
        cell.accessoryView = nil;
    } else {
        // リンク先URLが存在する場合はaccessoryViewにImageViewを追加する
        UIImage * arrowImage = [UIImage imageNamed:@"service_button_arrow"];
        UIImageView * arrow = [[UIImageView alloc] initWithImage:arrowImage];
        cell.accessoryView = arrow;
    }
    
    //タイトル設定
    cell.textLabel.text = displayDataDict[@"contents"];
    
    //背景ビュー
    UIView * backgroundView = [[UIView alloc] initWithFrame:cell.bounds];
    backgroundView.backgroundColor = UIColor.whiteColor;
    
    //区切り線を追加する
    UIView * separeterView = [[UIView alloc] initWithFrame:cell.bounds];
    separeterView.backgroundColor = [ColorUtil SeparatorLightBrown];
    CHANGE_HEIGHT(separeterView, k_HeightCellSeparatorSectionEnd);
    MOVE_WITH_BOTTOM_POSITION(separeterView, cell.frame.size.height);
    [backgroundView addSubview:separeterView];
    
    cell.backgroundView = backgroundView;
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
//ボタンタップイベント
- (void)tapButtonAction:(UIButton *)button
{
    switch (button.tag) {
        case ButtonTagATM:
            [self onATMButtonAction:button];
            break;
        case ButtonTagRate:
            [self onRateButtonAction:button];
            break;
        case ButtonTagHomeLoan:
            [self onHomeLoanButtonAction:button];
            break;
        case ButtonTagSuperLoan:
            [self onSuperLoanButtonAction:button];
            break;
        case ButtonTagFAQ:
            [self onFaqButtonAction:button];
            break;
        case ButtonTagHelp:
            [self onHelpButtonAction:button];
            break;
        case ButtonTagSupport:
            [self contactButtonAction:button];
            break;
        default:
            ASSERT_BRANCH_PARAMETER_ERROR(@"Button.tag");
            break;
    }
}

// ATMを探すボタンイベント
- (void)onATMButtonAction:(UIButton *)button
{
    if (self.uiuxQLQuickLoginViewDelegate && [self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(onATMButtonAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate onATMButtonAction:button];
    }
}

// 金利一覧ボタンイベント
- (void)onRateButtonAction:(UIButton *)button
{
    if (self.uiuxQLQuickLoginViewDelegate && [self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(onRateButtonAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate onRateButtonAction:button];
    }
}

// 住宅ローンボタンイベント
- (void)onHomeLoanButtonAction:(UIButton *)button;
{
    if (self.uiuxQLQuickLoginViewDelegate && [self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(onHomeLoanButtonAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate onHomeLoanButtonAction:button];
    }
}

// 楽天銀行スーパーローンボタンイベント
- (void)onSuperLoanButtonAction:(UIButton *)button
{
    if (self.uiuxQLQuickLoginViewDelegate && [self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(onSuperLoanButtonAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate onSuperLoanButtonAction:button];
    }
}

// よくある質問ボタンイベント
- (void)onFaqButtonAction:(UIButton *)button
{
    if (self.uiuxQLQuickLoginViewDelegate && [self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(onFaqButtonAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate onFaqButtonAction:button];
    }
}

// ヘルプボタンイベント
- (void)onHelpButtonAction:(UIButton *)button
{
    if (self.uiuxQLQuickLoginViewDelegate && [self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(onHelpButtonAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate onHelpButtonAction:button];
    }
}

//ログインボタンイベント
- (void)loginButtonAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(loginButtonAction:)]) {
        if (self.loginUserIdInput != nil) {
            self.viewDto.loginUserId = self.loginUserIdInput.inputField.text;
        }
        self.viewDto.loginPassword = self.loginPasswordInput.inputField.text;
        [self.uiuxQLQuickLoginViewDelegate loginButtonAction:button];
    }
}

//パスワード表示ボタン
- (void)passwordDispButtonAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(passwordDispButtonAction:)]) {
        //デリゲートメソッドが定義されていた場合
        [self.uiuxQLQuickLoginViewDelegate passwordDispButtonAction:self.loginPasswordInput.inputField];
    }
}

/**
 * 生体認証ボタンイベント
 */
- (void)biometryButtonAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(biometryButtonAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate biometryButtonAction:button];
    }
}

/**
 * TouchIDでのログインについてボタンイベント
 */
- (void)touchIDLinkButtonAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(touchIDLinkButtonAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate touchIDLinkButtonAction:button];
    }
}

/**
 * FaceIDでのログインについてボタンイベント
 */
- (void)faceIDLinkButtonAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(faceIDLinkButtonAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate faceIDLinkButtonAction:button];
    }
}

/**
 * 口座追加についてボタンイベント
 */
- (void)registerAccountsButtonAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(registerAccountsButtonAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate registerAccountsButtonAction:button];
    }
}

/**
 * 生体認証無効時ダイアログOKボタンイベント
 */
- (void)onBiometryDialogOKAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(onBiometryDialogOKAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate onBiometryDialogOKAction:button];
    }
}

/**
 * ダイアログチェックボックスボタンイベント
 */
- (void)onBiometryCheckBoxAction:(UIButton *)button
{
    RBLog(@"ダイアログチェックボックスボタンイベント");
    if ([self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(onBiometryCheckBoxAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate onBiometryCheckBoxAction:button];
    }
}

/**
 * 後でボタンイベント
 */
- (void)onBiometryDialogAfterAction:(UIButton *)button
{
    RBLog(@"後でボタンイベント");
    if ([self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(onBiometryDialogAfterAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate onBiometryDialogAfterAction:button];
    }
}

/**
 * 設定ボタンイベント
 */
- (void)onBiometryDialogSettingAction:(UIButton *)button
{
    RBLog(@"設定ボタンイベント");
    if ([self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(onBiometryDialogSettingAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate onBiometryDialogSettingAction:button];
    }
}

//パスワードをお忘れのお客さまリンクイベント
- (void)unclearLinkButtonAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(unclearLinkButtonAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate unclearLinkButtonAction:button];
    }
}

/**
 * 書類送付ボタンイベント
 */
- (void)startSendPictureButtonAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(startSendPictureButtonAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate startSendPictureButtonAction:button];
    }
}

// 「お知らせ一覧」タップ時のアクション
- (void)onBankInfoListLastOneButtonAction:(UIButton *)button
{
    if (self.uiuxQLQuickLoginViewDelegate && [self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(onBankInfoListLastOneButtonAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate onBankInfoListLastOneButtonAction:button];
    }
}

/**
 * お問い合わせ先ボタンイベント
 */
- (void)contactButtonAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(contactButtonAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate contactButtonAction:button];
    }
}

/**
 * プライバシーボタンイベント
 */
- (void)onPrivacyPolicyButtonAction:(UIButton *)button
{
    if ([self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(onPrivacyPolicyButtonAction:)]) {
        [self.uiuxQLQuickLoginViewDelegate onPrivacyPolicyButtonAction:button];
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
                              if ([self.uiuxQLQuickLoginViewDelegate respondsToSelector:@selector(biometryLoginAction)]) {
                                  [self.uiuxQLQuickLoginViewDelegate biometryLoginAction];
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

@end
