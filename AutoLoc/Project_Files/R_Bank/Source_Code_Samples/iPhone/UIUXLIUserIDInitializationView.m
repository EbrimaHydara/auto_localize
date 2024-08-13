//
//  UIUXLIUserIDInitializationView.m
//  RakutenBank
//
//  Created by kobayashi8156 on 2014/04/24.
//
//

#import "UIUXLIUserIDInitializationView.h"

#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "UIUXLIUtilMacro.h"
#import "UIUXLICompareCheckInput.h"
#import "ValidatedTextField+ConfigUtil.h"
#import "RBInputTextField.h"

@interface UIUXLIUserIDInitializationView () <UIUXLICompareCheckInputDelegate, RBInputTextFieldDelegate, UIUXLIUserIDInitializationViewDelegate>

@property (nonatomic, strong) UIButton * nextButton;                ///< 次へボタン
@property (nonatomic, strong) UIButton * userIdInitProceButton;     ///< ユーザ初期化の手順ボタン
@property (nonatomic) RBInputTextField * branchNumberTextEdit;      ///< 支店番号入力欄
@property (nonatomic) RBInputTextField * accountNumberTextEdit;     ///< 口座番号入力欄
@property (nonatomic) RBInputTextField * loginPasswordTextEdit;     ///< ログインパスワード入力欄
@property (nonatomic, strong) UIView * showPickerView;              ///< ピッカー表示ビュー

@end

@implementation UIUXLIUserIDInitializationViewDTO

@end

@implementation UIUXLIUserIDInitializationView
#pragma mark - イニシャライザ

- (id)initWithFrame:(CGRect)frame viewDTO:(NSObject *)viewDTO
{
    _viewDto = (UIUXLIUserIDInitializationViewDTO *)viewDTO;
    
    self = [super initWithFrame:frame viewDTO:viewDTO];
    if (!self) {
        return nil;
    }
    
    return self;
}

#pragma mark - LIBaseScrollViewクラスのメソッドオーバーライド
- (void)loadInitialViews
{
    [self addBlankWithHeight:k_VmarginContentsTop];
    
    [self addStep];
    [self addBlankWithHeight:15.0f];
    [self addInitDescriptionMessText];
    [self addBlankWithHeight:15.0f];
    [self adduserIDInitProcedure];
    [self addBlankWithHeight:25.0f];
    [self addBranchNumberTextEdit];
    [self addBlankWithHeight:15.0f];
    [self addNeededInformationTextLink];
    [self addBlankWithHeight:25.0f];
    [self addAccountNumberTextEdit];
    [self addBlankWithHeight:15.0f];
    [self addLoginPasswordTextEdit];
    [self addBlankWithHeight:25.0f];
    [self addNextButton];
    [self addBlankWithHeight:k_VmarginContentsBottom];
}

//入力欄クリアメソッド
- (void)clearInput
{
    //ログインパスワード入力欄を空欄にする
    [self.loginPasswordTextEdit.inputField clearText];
}

#pragma mark - ビューの初期化メソッド群
- (void)addStep
{
    UIImage * img = [UIImage imageNamed:@"LI_step_userid_1"];
    UIImageView * iv = [[UIImageView alloc] initWithImage:img];
    iv.frame = CGRectMake(0, 0, img.size.width / 2, img.size.height / 2);
    [self addViewAtHCenter:iv];
}

- (void)addInitDescriptionMessText
{
    NSString * textString = [NSString stringWithFormat:
                             NSLocalizedString(@"UI0071_InitDescriptionMess", nil),
                             NSLocalizedString(@"Common_UserID", nil),
                             NSLocalizedString(@"Common_UserID", nil)];
    NSMutableAttributedString *attrString = [[NSMutableAttributedString alloc] initWithString:textString
                                                                                   attributes:@{NSFontAttributeName:[UIFont systemFontOfSize:k_FontSize_DefaultMsg]}];
    [attrString addAttribute:NSForegroundColorAttributeName value:[ColorUtil textColorRed] range:[textString rangeOfString:@"初期化"]];
    [attrString addAttribute:NSForegroundColorAttributeName value:[ColorUtil textColorRed] range:[textString rangeOfString:@"再設定"]];
    UILabel * text = [self uiLableWithWidth:VIEW_WIDTH_INTEXTBOX attributedText:attrString];
    text.textAlignment = NSTextAlignmentLeft;
    
    LIStackLayoutView * stackView = [[LIStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, VIEW_WIDTH_TEXTBOX, 0.0f)];
    [self configBorderToBackgroundStyle:stackView BackgroundColor:[UIColor whiteColor] borderColor:[ColorUtil textBoxBorderLightGlay]];
    
    [stackView addBlankWithHeight:15.0f];
    [stackView addViewAtHCenter:text];
    [stackView addBlankWithHeight:15.0f];
    [self addViewAtHCenter:stackView];
}

- (void)adduserIDInitProcedure
{
    NSString * link = [NSString stringWithFormat:NSLocalizedString(@"UI0071_ReconfigStepLinkMess", nil)];
    
    LIStackLayoutView * stackView = [[LIStackLayoutView alloc]
                                     initWithFrame:self.frame];
    CGFloat const linkRightEdge = VIEW_WIDTH_TEXTBOX;
    [stackView addView:[self linkText:link
                               action:@selector(tutorialForInitUserIdAction:) rightEdge:linkRightEdge]];
    [self addViewAtHCenter:stackView];
}

- (void)addBranchNumberTextEdit
{
    //支店番号入力欄作成
    self.branchNumberTextEdit = [self inputWithTitle:[NSString stringWithFormat:@"%@ / %@", NSLocalizedString(@"Common_BranchName", nil), NSLocalizedString(@"Common_BranchNumber", nil)]];
    [self.branchNumberTextEdit.inputField configBranchNumber];
    self.branchNumberTextEdit.rbInputTextFieldDelegate = self;
    self.branchNumberTextEdit.inputField.enabled = NO;
    self.branchNumberTextEdit.inputField.placeholder = @"選択してください";
    self.branchNumberTextEdit.inputField.layer.cornerRadius = 5.0f;
    
    // 「▼」アイコン
    UIImage * image = [UIImage imageNamed:@"CMN_Icon_Dropdown"];
    UIImageView * imageView = [[UIImageView alloc]initWithImage:image];
    RESIZE_WITH_SCALE(imageView, 0.5f);
    MOVE_WITH_ORIGIN(imageView, self.branchNumberTextEdit.inputField.frame.size.width - imageView.frame.size.width, self.branchNumberTextEdit.inputField.frame.origin.y);
    CHANGE_HEIGHT(self.branchNumberTextEdit.inputField, imageView.frame.size.height);
    [self.branchNumberTextEdit addSubview:imageView];
    
    //ダミーボタン作成
    UIButton * dummyButton = [UIButton buttonWithType:UIButtonTypeCustom];
    dummyButton.frame = self.branchNumberTextEdit.inputField.frame;
    dummyButton.backgroundColor = [UIColor clearColor];
    dummyButton.exclusiveTouch = YES;
    [dummyButton addTarget:self
                    action:@selector(branchNumberButtonAction:)
          forControlEvents:UIControlEventTouchUpInside];
    
    //支店番号入力欄にダミーボタンをかぶせる
    [self.branchNumberTextEdit addSubview:dummyButton];
    
    [self addViewAtHCenter:self.branchNumberTextEdit];
}

- (void)addAccountNumberTextEdit
{
    self.accountNumberTextEdit = [self inputWithTitle:NSLocalizedString(@"Common_AccountNumber", nil)];
    [self.accountNumberTextEdit.inputField configAccountNumber];
    self.accountNumberTextEdit.rbInputTextFieldDelegate = self;
    [self addViewAtHCenter:self.accountNumberTextEdit];
}

- (void)addLoginPasswordTextEdit
{
    self.loginPasswordTextEdit = [self inputWithTitle:NSLocalizedString(@"Common_LoginPassword", nil)];
    [self.loginPasswordTextEdit.inputField configToLoginPassword];
    self.loginPasswordTextEdit.inputField.secureTextEntry = YES;
    self.loginPasswordTextEdit.inputField.shiftJISCheckActive = NO;
    self.loginPasswordTextEdit.inputField.emojiCheckActive = NO;
    self.loginPasswordTextEdit.rbInputTextFieldDelegate = self;
    [self addViewAtHCenter:self.loginPasswordTextEdit];
}

- (void)addNeededInformationTextLink
{
    NSString * linkTitleNeededInformation =
    [NSString stringWithFormat:NSLocalizedString(@"UI0071_NeededInformationLinkMess", nil),
     NSLocalizedString(@"Common_BranchNumber", nil),
     NSLocalizedString(@"Common_AccountNumber", nil)];
    
    LIStackLayoutView * stackView = [[LIStackLayoutView alloc]
                                     initWithFrame:self.frame];
    CGFloat const linkRightEdge = VIEW_WIDTH_TEXTBOX;
    [stackView addView:[self linkText:linkTitleNeededInformation
                               action:@selector(onRequiredInfoLostAction:) rightEdge:linkRightEdge]];
    [self addViewAtHCenter:stackView];
}

- (void)addNextButton
{
    self.nextButton = [self imageButton:[UIImage imageNamed:@"LI_btn_orange420_02"]
                         hilightedImage:[UIImage imageNamed:@"LI_btn_orange420_02_hover"]
                          disablesIamge:[UIImage imageNamed:@"LI_btn_orange420_02_inactive"]
                             imageScale:0.5f];
    
    self.nextButton.enabled = NO;
    [self.nextButton addTarget:self action:@selector(nextButtonAction:) forControlEvents:UIControlEventTouchUpInside];
    [self addViewAtHCenter:self.nextButton];
}

- (RBInputTextField *)inputWithTitle:(NSString *)title
{
    CGRect frame = CGRectMake(0.0f, 0.0f, k_WidthTextFieldLong2, k_HeightTextField);
    RBInputTextField * input = [[RBInputTextField alloc] initWithFrame:frame];
    input.title = title;
    input.bold = YES;
    
    return input;
}

- (UIView *)linkText:(NSString *)text action:(SEL)action rightEdge:(CGFloat)rightEdge
{
    UIView * link =
    [self indicatorButtonWithTitle:text
                              rect:CGRectZero
                              font:[UIFont systemFontOfSize:k_FontSize_DefaultMsg]
                            target:self
                            action:action];
    MOVE_WITH_ORIGIN(link, rightEdge - link.frame.size.width, link.frame.origin.y);
    
    return link;
}

#pragma mark - ピッカー入力イベント
//ピッカー入力で選択されたらよばれる
- (void)selectedPicker:(UIButton *)sender
             inputItem:(NSArray *)inputItem
        selectedString:(NSString *)selectedString
           selectedRow:(NSInteger)selectedRow
{
    [self.branchNumberTextEdit.inputField setText:self.viewDto.branchNumberList[selectedRow]];
    [self changeInputTextStatus:nil];
}

//ピッカー入力終了時に呼ばれる
- (void)didFinishPicker:(UIButton *)sender
{
    if (self.showPickerView == sender) {
        self.showPickerView = nil;
    }
}

#pragma mark - RBInputTextFieldDelegateメソッド実装
- (void)changeInputTextStatus:(RBInputTextField *)rbInputTextField
{
    //入力チェック
    if (self.branchNumberTextEdit.inputField.text.length != 0) {
        self.nextButton.enabled = self.accountNumberTextEdit.inputField.inputTextEnable
        && self.loginPasswordTextEdit.inputField.inputTextEnable;
    } else {
        self.nextButton.enabled = NO;
    }
}

#pragma mark = UIUXLIUserIDInitializationViewDelegateメソッド

// 「ユーザID初期化の手順」タップ時
- (void)tutorialForInitUserIdAction:(UIButton *)button
{
    if ([self.uIUXLIUserIDInitializationViewDelegate respondsToSelector:@selector(tutorialForInitUserIdAction:)]) {
        [self.uIUXLIUserIDInitializationViewDelegate tutorialForInitUserIdAction:button];
    }
}

// 「必要情報を忘れた場合」
- (void)onRequiredInfoLostAction:(UIButton *)button
{
    if ([self.uIUXLIUserIDInitializationViewDelegate respondsToSelector:@selector(onRequiredInfoLostAction:)]) {
        [self.uIUXLIUserIDInitializationViewDelegate onRequiredInfoLostAction:button];
    }
}

// 次へボタン押下時
- (void)nextButtonAction:(UIButton *)button
{
    if ([self.uIUXLIUserIDInitializationViewDelegate respondsToSelector:@selector(nextButtonAction:)]) {
        [self.uIUXLIUserIDInitializationViewDelegate nextButtonAction:button];
    }
}

//支店番号入力ダミーボタンイベント
- (void)branchNumberButtonAction:(UIButton *)button
{
    if (button == self.showPickerView) {
        //すでに押されたボタンでピッカーを表示している場合は何もしない。
        return;
    }
    
    NSMutableArray * selectList = [NSMutableArray array];
    NSString * selectedItem;
    NSString * item;
    for(int i = 0; i < self.viewDto.branchNumberList.count; i++) {
        item = [NSString stringWithFormat:@"%@ (%@)", self.viewDto.branchKanjiList[i], self.viewDto.branchNumberList[i]];
        if ([self.branchNumberTextEdit.inputField.text isEqualToString:self.viewDto.branchNumberList[i]]) {
            selectedItem = item;
        }
        [selectList addObject:item];
    }
    
    if ([self.uIUXLIUserIDInitializationViewDelegate respondsToSelector:@selector(branchNumberButtonAction:inputItem:selectedItem:)]) {
        self.showPickerView = button;
        [self.uIUXLIUserIDInitializationViewDelegate branchNumberButtonAction:button
                                                                    inputItem:selectList
                                                                 selectedItem:selectedItem];
    }
}

#pragma mark - プロパティアクセサ
- (UIUXLIUserIDInitializationViewDTO *)viewDto
{
    if (!self.branchNumberTextEdit || !self.accountNumberTextEdit || !self.loginPasswordTextEdit) {
        return nil;
    }
    
    _viewDto.branchNumber = self.branchNumberTextEdit.inputField.text;
    _viewDto.accountNumber = self.accountNumberTextEdit.inputField.text;
    _viewDto.loginPassword = self.loginPasswordTextEdit.inputField.text;
    
    return _viewDto;
}

@end
