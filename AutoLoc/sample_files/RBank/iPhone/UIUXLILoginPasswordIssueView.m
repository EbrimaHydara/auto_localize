//
//  UIUXLILoginPasswordIssueView.m
//  RakutenBank
//
//  Created by sugiyama8067 on 2014/04/26.
//
//

#import "UIUXLILoginPasswordIssueView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "RBInputTextField.h"
#import "ValidatedTextField+ConfigUtil.h"
#import "UIUXLIUtilMacro.h"

#define ARROW_AREA_WIDTH 23.0f

#pragma mark - 表示データモデル定義
@implementation UIUXLILoginPasswordIssueViewDTO

@end

@interface UIUXLILoginPasswordIssueView () <RBInputTextFieldDelegate>

@property (nonatomic, strong) RBInputTextField * userIDInput;   ///< ユーザID入力欄
@property (nonatomic, strong) RBInputTextField * pinInput;      ///< 暗証番号入力欄
@property (nonatomic, strong) UIButton * issueButton;           ///< 発行するボタン
@property (nonatomic, strong) UIView *idPwUnknownView; //IDPW不明な場合トグル
@property (nonatomic) BOOL toggleIsOpen; //トグル開閉状態

@end

@implementation UIUXLILoginPasswordIssueView

- (void)loadInitialViews
{
    [self addBlankWithHeight:k_VmarginContentsTop];
    
    //操作説明テキスト追加
    [self addInstructionText];
    [self addBlankWithHeight:15.0f];

    //ユーザID入力欄追加
    [self adduserIDInput];
    [self addBlankWithHeight:25.0f];

    //暗証番号入力欄追加
    [self addPinInput];
    [self addBlankWithHeight:25.0f];
    
    //IDPW不明な場合トグルと発行するボタン追加
    [self addViewAtHCenter:[self makeHr1]];
    [self addIdPwUnknownView];
    
    //発行するボタン追加
    [self addIssueButton];
}

#pragma mark - ビューの初期化メソッド群
//操作説明テキスト追加
- (void)addInstructionText
{
    //文言読み込み
    NSString * textStr = [NSString stringWithFormat:
                          NSLocalizedString(@"UI0075_Instruction", nil),
                          NSLocalizedString(@"Common_UserID", nil)];
    
    UILabel * text = [self uiLableWithWidth:VIEW_WIDTH_LEVEL2
                                       text:textStr
                                  textColor:[ColorUtil textColorBlack]
                                   fontSize:k_FontSize_DefaultMsg
                                     isbold:NO];
    CHANGE_ORIGIN_X(text, k_HmarginLevel2);
    [self addView:text];
}

//ユーザID入力欄追加
- (void)adduserIDInput
{
    //文言読み込み
    NSString * title = NSLocalizedString(@"Common_UserID", nil);
    
    CGRect frame = CGRectMake(0.0f, 0.0f, VIEW_WIDTH_LEVEL2, k_HeightTextField);
    self.userIDInput = [[RBInputTextField alloc] initWithFrame:frame];
    self.userIDInput.title = title;
    [self.userIDInput.inputField configToUserID];
    self.userIDInput.inputField.autocapitalizationType = UITextAutocapitalizationTypeNone;
    self.userIDInput.rbInputTextFieldDelegate = self;
    
    CHANGE_ORIGIN_X(self.userIDInput, k_HmarginLevel2);
    [self addView:self.userIDInput];
}

//暗証番号入力欄追加
- (void)addPinInput
{

    //文言読み込み
    NSString * title = [NSLocalizedString(@"Common_PIN", nil) stringByAppendingString:NSLocalizedString(@"UI0075_PINCondition1", nil)];

    //暗証番号入力欄
    CGRect frame = CGRectMake(0.0f, 0.0f, VIEW_WIDTH_LEVEL2, k_HeightTextField);

    self.pinInput = [[RBInputTextField alloc] initWithFrame:frame];
    self.pinInput.title = title;
    
    self.pinInput.inputField.secureTextEntry = YES;
    [self.pinInput.inputField configPIN];
    self.pinInput.rbInputTextFieldDelegate = self;
    
    CHANGE_ORIGIN_X(self.pinInput, k_HmarginLevel2);
    [self addView:self.pinInput];
}

- (UIView *)makeHr1 {
    UIView * bar = [self hBarLevel1];
    CHANGE_WIDTH(bar, VIEW_WIDTH_LEVEL1);
    CHANGE_HEIGHT(bar, 1.5f);
    return bar;
}
- (UIView *)makeHr2 {
    UIView * bar = [self hBarLevel1];
    CHANGE_WIDTH(bar, VIEW_WIDTH_LEVEL1);
    CHANGE_HEIGHT(bar, k_HBarLevel2Height);
    return bar;
}

// ユーザIDもログインパスワードも不明な場合欄追加
- (void)addIdPwUnknownView {
    self.idPwUnknownView = [self makeIdPwUnknownView:NO];
    self.toggleIsOpen = NO;
    [self addViewAtHCenter:self.idPwUnknownView];
}

- (UIView *)makeIdPwUnknownView:(BOOL)isOpen {
    //　トグルボタン
    const float vPadding = 15.0f;
    CGRect frame = CGRectMake(20.0f, vPadding, VIEW_WIDTH_LEVEL2 - 20.0f, 0);
    NSString *title = [NSString stringWithFormat:
                       NSLocalizedString(@"UI0075_IdPasswordUnknownTitle", nil),
                       NSLocalizedString(@"Common_UserID", nil),
                       NSLocalizedString(@"Common_LoginPassword", nil)];
    UILabel *label = [self makeLabel:frame title:title isBold:YES];
    UIImageView *toggleIcon;
    if (isOpen) {
        toggleIcon = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"LI_BTN_AccordionToClose.png"]];
    } else {
        toggleIcon = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"LI_BTN_AccordionToOpen.png"]];
    }
    [toggleIcon sizeToFit];
    toggleIcon.frame = CGRectMake(0, 0, toggleIcon.frame.size.width/2, toggleIcon.frame.size.height/2);
    frame = CGRectMake(k_HmarginLevel1, 0, VIEW_WIDTH_LEVEL2, label.frame.size.height + vPadding*2);
    UIButton *toggleButton = [[UIButton alloc] initWithFrame:frame];
    toggleButton.backgroundColor = [UIColor clearColor];
    toggleButton.exclusiveTouch = YES;
    [toggleButton addTarget:self action:@selector(onTapToggleButton) forControlEvents:UIControlEventTouchUpInside];
    [toggleButton addSubview:label];
    toggleIcon.center = CGPointMake(toggleIcon.center.x, toggleButton.center.y);
    [toggleButton addSubview:toggleIcon];
    
    LIStackLayoutView *baseView = [[LIStackLayoutView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, 0)];
    [baseView addViewAtHCenter:toggleButton];
    
    if (isOpen) {
        
        // 説明
        frame = CGRectMake(k_HmarginLevel2, 0, VIEW_WIDTH_LEVEL2, 0);
        title = [NSString stringWithFormat:
                 NSLocalizedString(@"UI0075_IdPasswordUnknownMsg", nil),
                 NSLocalizedString(@"Common_LoginPassword", nil)];
        UILabel *description = [self makeLabel:frame title:title isBold:NO];
        [baseView addViewAtHCenter:description];
        [baseView addBlankWithHeight:10.0f];
        [baseView addViewAtHCenter:[self makeHr2]];
        
        // 支店口番わかるボタン
        frame = CGRectMake(0, 0, VIEW_WIDTH_LEVEL2 - ARROW_AREA_WIDTH, 0);
        title = [NSString stringWithFormat:
                 NSLocalizedString(@"UI0075_IdPasswordUnknown", nil),
                 NSLocalizedString(@"Common_BranchNumber", nil),
                 NSLocalizedString(@"Common_AccountNumber", nil),
                 NSLocalizedString(@"Common_PIN", nil)];
        UILabel *idPwUnknownLabel = [self makeLabel:frame title:title isBold:NO];
        frame = CGRectMake(42.0f, idPwUnknownLabel.frame.size.height + 10.0f, 218.0f, 0);
        title = NSLocalizedString(@"UI0075_PhoneSupport", nil);
        UILabel *phoneSupportLabel = [self makeLabel:frame title:title isBold:YES];
        UIImageView *freedial = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"LI_icon_tel"]];
        [freedial sizeToFit];
        freedial.frame = CGRectMake(0, 0, freedial.frame.size.width/2, freedial.frame.size.height/2);
        freedial.center = CGPointMake(freedial.center.x, phoneSupportLabel.center.y);
        UIView *buttonContent = [[UIView alloc] init];
        buttonContent.frame = CGRectMake(k_HmarginLevel1, 0, VIEW_WIDTH_LEVEL2 - ARROW_AREA_WIDTH, phoneSupportLabel.frame.origin.y + phoneSupportLabel.frame.size.height);
        [buttonContent addSubview:idPwUnknownLabel];
        [buttonContent addSubview:phoneSupportLabel];
        [buttonContent addSubview:freedial];
        [baseView addViewAtHCenter:[self makeArrowLink:buttonContent :@selector(idPwButtonAction:)]];
        [baseView addViewAtHCenter:[self makeHr2]];
        
        // 全部わからないボタン
        [baseView addViewAtHCenter:[self makeSimpleArrowLink:[NSString stringWithFormat:
                                                              NSLocalizedString(@"UI0075_AllUnknown", nil)]
                                                            :@selector(allButtonAction:)
                                                            :NO]];
        [baseView addViewAtHCenter:[self makeHr2]];
        [baseView addBlankWithHeight:15.0f];
        
        // 備考
        NSString * note1 = [NSString stringWithFormat:
                            NSLocalizedString(@"UI0075_Note1", nil),
                            NSLocalizedString(@"Common_BranchNumber", nil),
                            NSLocalizedString(@"Common_AccountNumber", nil),
                            NSLocalizedString(@"Common_RKBKName", nil)];
        NSString * note2 = [NSString stringWithFormat:
                            NSLocalizedString(@"UI0075_Note2", nil),
                            NSLocalizedString(@"Common_PIN", nil),
                            NSLocalizedString(@"Common_Login", nil)];
        NSMutableAttributedString *attrNote1 = [[NSMutableAttributedString alloc] initWithString:note1
                                                                                      attributes:@{NSFontAttributeName:[UIFont systemFontOfSize:k_FontSize_DefaultMsg]}];
        [attrNote1 addAttribute:NSForegroundColorAttributeName value:[ColorUtil textColorRed] range:[note1 rangeOfString:@"キャッシュカード"]];
        [attrNote1 addAttribute:NSForegroundColorAttributeName value:[ColorUtil textColorRed] range:[note1 rangeOfString:@"Thank Youレター"]];
        UILabel * note1Label = [self uiLableWithWidth:VIEW_WIDTH_INTEXTBOX
                                       attributedText:attrNote1];
        note1Label.textAlignment = NSTextAlignmentLeft;
        UILabel * note2Label = [self makeLabel:CGRectMake(0, 0, VIEW_WIDTH_INTEXTBOX, 0) title:note2 isBold:NO];
        
        CHANGE_ORIGIN_X(note1Label, k_TextBackgroundViewMarginLeft);
        CHANGE_ORIGIN_X(note2Label, k_TextBackgroundViewMarginLeft);
        LIStackLayoutView * stackView = [[LIStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, VIEW_WIDTH_TEXTBOX, 0.0f)];
        [self configBorderToBackgroundStyle:stackView BackgroundColor:[UIColor whiteColor] borderColor:[ColorUtil textBoxBorderLightGlay]];
        [stackView addBlankWithHeight:10.0f];
        [stackView addView:note1Label];
        [stackView addBlankWithHeight:10.0f];
        [stackView addView:note2Label];
        [stackView addBlankWithHeight:10.0f];
        [baseView addViewAtHCenter:stackView];
        [baseView addBlankWithHeight:15.0f];
        
        // 閉じるボタン
        frame = CGRectMake(0, 0, VIEW_WIDTH_LEVEL2, 0);
        UILabel *closeLabel = [self makeLabel:frame title:@"閉じる" isBold:NO];
        closeLabel.font = [UIFont systemFontOfSize:k_FontSiez_AccountOpenGuidMsg];
        UIImageView *closeImage = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"LI_i_ArrowUp_CloseOut.png"]];
        [closeImage sizeToFit];
        closeImage.frame = CGRectMake(0, 0, closeImage.frame.size.width/2, closeImage.frame.size.height/2);
        float closeButtonWidth = closeLabel.frame.size.width + 5.0f + closeImage.frame.size.width;
        frame = CGRectMake(self.frame.size.width - closeButtonWidth - k_HmarginLevel2, 0, closeButtonWidth, closeLabel.frame.size.height);
        UIButton *closeButton = [[UIButton alloc] initWithFrame:frame];
        closeButton.backgroundColor = [UIColor clearColor];
        closeButton.exclusiveTouch = YES;
        [closeButton addTarget:self action:@selector(onTapCloseButton) forControlEvents:UIControlEventTouchUpInside];
        [closeButton addSubview:closeLabel];
        CHANGE_ORIGIN_X(closeImage, closeButtonWidth - closeImage.frame.size.width);
        closeImage.center = CGPointMake(closeImage.center.x, closeLabel.center.y);
        [closeButton addSubview:closeImage];
        [baseView addView:closeButton];
        [baseView addBlankWithHeight:10.0f];
    }
    [baseView addViewAtHCenter:[self makeHr1]];
    return baseView;
}

- (UIButton *)makeSimpleArrowLink:(NSString *)title :(SEL)action :(BOOL)isBold {
    // リンクテキスト
    CGRect labelFrame = CGRectMake(k_HmarginLevel1, 0, VIEW_WIDTH_LEVEL2 - ARROW_AREA_WIDTH, 0);
    UILabel *label = [self makeLabel:labelFrame title:title isBold:isBold];
    
    return [self makeArrowLink:label :action];
}

- (UIButton *)makeArrowLink:(UIView *)content :(SEL)action {
    const float vPadding = 15.0f;
    
    // 矢印画像
    UIImageView *iv = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"CMN_Arrow_TextLinkOut"]];
    [iv sizeToFit];
    iv.frame = CGRectMake(VIEW_WIDTH_LEVEL1 - ARROW_AREA_WIDTH, 0, iv.frame.size.width/2, iv.frame.size.height/2);
    
    // コンテンツと矢印を乗せるボタン
    float max = (content.frame.size.height < iv.frame.size.height) ? iv.frame.size.height : content.frame.size.height;
    CGRect buttonFrame = CGRectMake(k_HmarginLevel1, 0, VIEW_WIDTH_LEVEL1, max + vPadding*2);
    UIButton *button = [[UIButton alloc] initWithFrame:buttonFrame];
    button.backgroundColor = [UIColor clearColor];
    button.exclusiveTouch = YES;
    [button addTarget:self action:action forControlEvents:UIControlEventTouchUpInside];
    CHANGE_ORIGIN_Y(content, vPadding);
    content.userInteractionEnabled = NO;
    [button addSubview:content];
    iv.center = CGPointMake(iv.center.x, button.center.y);
    [button addSubview:iv];
    return button;
}

- (UILabel *)makeLabel:(CGRect)frame title:(NSString *)title isBold:(BOOL)isBold {
    UILabel *label = [[UILabel alloc] initWithFrame:frame];
    label.text = title;
    if (isBold) {
        label.font = [UIFont boldSystemFontOfSize:k_FontSize_DefaultMsg];
    } else {
        label.font = [UIFont systemFontOfSize:k_FontSize_DefaultMsg];
    }
    label.textColor = [ColorUtil textColorBlack];
    label.backgroundColor = [UIColor clearColor];
    label.numberOfLines = 0;
    label.textAlignment = NSTextAlignmentLeft;
    [label sizeToFit];
    return label;
}

//発行するボタン追加
- (void)addIssueButton
{
    self.issueButton = [self imageButton:[UIImage imageNamed:@"LI_btn_orange420_08"]
                          hilightedImage:[UIImage imageNamed:@"LI_btn_orange420_08_hover"]
                           disablesIamge:[UIImage imageNamed:@"LI_btn_orange420_08_inactive"]
                              imageScale:0.5];
    self.issueButton.enabled = NO;
    [self.issueButton addTarget:self
                         action:@selector(issueButtonAction:)
               forControlEvents:UIControlEventTouchUpInside];
    
    //画面高さ分の隙間調整
    CGFloat buttonTopMargin = self.frame.size.height - self.stackLayoutView.subViewsHeight - (self.issueButton.frame.size.height + k_VmarginContentsBottom);
    if (buttonTopMargin < 25.0f) {
        //ボタン上部に十分なマージンが取れない場合は画面最下部の固定配置を諦める
        buttonTopMargin = 25.0f;
    }
    [self addBlankWithHeight:buttonTopMargin];
    [self addViewAtHCenter:self.issueButton];
    [self addBlankWithHeight:k_VmarginContentsBottom];
}

#pragma mark - RBInputTextFieldDelegate実装
- (void)changeInputTextStatus:(RBInputTextField *)rbInputTextField
{
    self.issueButton.enabled = self.userIDInput.inputField.inputTextEnable && self.pinInput.inputField.inputTextEnable;
}

#pragma mark - プロパティのアクセサ
- (UIUXLILoginPasswordIssueViewDTO *)viewDto
{
    if (!self.userIDInput || !self.pinInput) {
        return nil;
    }
    
    // 常に新しいインスタンスを生成して返却しているので注意
    UIUXLILoginPasswordIssueViewDTO * dto = UIUXLILoginPasswordIssueViewDTO.new;
    dto.userID = self.userIDInput.inputField.text;
    dto.pin = self.pinInput.inputField.text;

    return dto;
}

#pragma mark - UIUXLILoginPasswordIssueViewDelegateを呼ぶメソッド実装
//発行ボタンイベント
- (void)issueButtonAction:(UIButton *)button
{
    if ([self.uiuxLILoginPasswordIssueViewDelegate respondsToSelector:@selector(issueButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLILoginPasswordIssueViewDelegate issueButtonAction:button];
    }
}
//支店口番わかるボタンイベント
- (void)idPwButtonAction:(UIButton *)button {
    if ([self.uiuxLILoginPasswordIssueViewDelegate respondsToSelector:@selector(idPwButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLILoginPasswordIssueViewDelegate idPwButtonAction:button];
    }
}
//全部わからないボタンイベント
- (void)allButtonAction:(UIButton *)button {
    if ([self.uiuxLILoginPasswordIssueViewDelegate respondsToSelector:@selector(allButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLILoginPasswordIssueViewDelegate allButtonAction:button];
    }
}

//IDPW不明な場合トグルタップ時
- (void)onTapToggleButton {
    [self endEditing:YES];

    //発行ボタンが画面最下部固定配置のため、トグルから下をすべて再配置する
    while ([self indexOfView:self.idPwUnknownView] != -1) {
        [self removeBottomViewWithAnimated:NO];
    }

    self.idPwUnknownView = [self makeIdPwUnknownView:!self.toggleIsOpen];
    [self addViewAtHCenter:self.idPwUnknownView];
    [self addIssueButton];
    self.toggleIsOpen = !self.toggleIsOpen;
    
    //再配置によって発行ボタンの活性状態がリセットされるため判定し直す
    [self changeInputTextStatus:self.userIDInput];
}
//トグル閉じるボタンタップ時
- (void)onTapCloseButton {
    [self endEditing:YES];

    //発行ボタンが画面最下部固定配置のため、トグルから下をすべて再配置する
    while ([self indexOfView:self.idPwUnknownView] != -1) {
        [self removeBottomViewWithAnimated:NO];
    }

    self.idPwUnknownView = [self makeIdPwUnknownView:NO];
    [self addViewAtHCenter:self.idPwUnknownView];
    [self addIssueButton];
    self.toggleIsOpen = NO;
    
    //再配置によって発行ボタンの活性状態がリセットされるため判定し直す
    [self changeInputTextStatus:self.userIDInput];
}
@end
