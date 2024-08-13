//
//  UIUXLIUserIDPassUnknownView.m
//  RakutenBank
//
//  Created by kobayashi8156 on 2014/04/24.
//
//

#import "UIUXLIUserIDPassUnknownView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "UIUXLIUtilMacro.h"
#import "MixedTypeTextView.h"
#import "RakutenBankApp.h"

#define ARROW_AREA_WIDTH 23.0f

@interface UIUXLIUserIDPassUnknownView () <UIUXLIUserIDPassUnknownViewDelegate>
@property (nonatomic, strong) UIView *passwordUnknownView;
@property (nonatomic, strong) UIView *idPwUnknownView;
@property (nonatomic) BOOL toggleIsOpen;
@property (nonatomic) BOOL passwordUnknownToggleIsOpen;
@end

@implementation UIUXLIUserIDPassUnknownView

- (void)loadInitialViews {
    [self addBlankWithHeight:k_VmarginContentsTop];
    
    [self addViewAtHCenter:[self makeHr1]];
    [self addViewAtHCenter:[self makeSimpleArrowLink:[NSString stringWithFormat:
                                                      NSLocalizedString(@"UI0070_UserIdUnknown", nil),
                                                      NSLocalizedString(@"Common_UserID", nil)]
                                                    :@selector(userIdButtonAction:)
                                                    :YES]];
    [self addViewAtHCenter:[self makeHr1]];
    // ログインパスワードが不明な場合トグル追加
    [self addPasswordUnknownView];

    [self addBlankWithHeight:25.0f];
    
    [self addViewAtHCenter:[self makeHr1]];
    //　ユーザIDもログインパスワードも不明な場合トグル追加
    [self addIdPwUnknownView];
    [self addBlankWithHeight:k_VmarginContentsBottom];
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

- (void)addPasswordUnknownView {
    self.passwordUnknownView = [self makePasswordUnknownView:NO];
    self.passwordUnknownToggleIsOpen = NO;
    [self addViewAtHCenter:self.passwordUnknownView];
}

- (UIView *)makePasswordUnknownView:(BOOL)isOpen {
    //　トグルボタン
    const float vPadding = 15.0f;
    CGRect frame = CGRectMake(20.0f, vPadding, VIEW_WIDTH_LEVEL2 - 20.0f, 0);
    NSString *title = [NSString stringWithFormat:
                       NSLocalizedString(@"UI0070_PasswordUnknown", nil),
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
    [toggleButton addTarget:self action:@selector(onTapPasswordUnknownToggleButton) forControlEvents:UIControlEventTouchUpInside];
    [toggleButton addSubview:label];
    toggleIcon.center = CGPointMake(toggleIcon.center.x, toggleButton.center.y);
    [toggleButton addSubview:toggleIcon];
    
    LIStackLayoutView *baseView = [[LIStackLayoutView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, 0)];
    [baseView addViewAtHCenter:toggleButton];
    
    if (isOpen) {
        
        // 説明
        frame = CGRectMake(k_HmarginLevel2, 0, VIEW_WIDTH_LEVEL2, 0);
        title = NSLocalizedString(@"UI0070_PasswordUnknownMsg", nil);
        UILabel *description = [self makeLabel:frame title:title isBold:NO];
        [baseView addViewAtHCenter:description];
        [baseView addBlankWithHeight:15.0f];
        [baseView addViewAtHCenter:[self makeHr1]];
        [baseView addBlankWithHeight:5.0f];
        // 楽天銀行アプリにログインできる、または、セキュリティカードをお持ちのお客さまボタン
        [baseView addViewAtHCenter:[self makeSimpleArrowLink:[NSString stringWithFormat:
                                                              NSLocalizedString(@"UI0070_AppliLoginSecurityCardHave", nil)]
                                                            :@selector(appliLoginSecurityCardHaveButtonAction:)
                                                            :NO]];
        [baseView addBlankWithHeight:5.0f];
        [baseView addViewAtHCenter:[self makeHr1]];
        [baseView addBlankWithHeight:5.0f];
        // ユーザID・支店番号・口座番号がお分かりのお客さまボタン
        [baseView addViewAtHCenter:[self makeSimpleArrowLink:[NSString stringWithFormat:
                                                              NSLocalizedString(@"UI0070_IdPassAccountKnown", nil)]
                                                            :@selector(passwordButtonAction:)
                                                            :NO]];
        [baseView addBlankWithHeight:5.0f];
    }
    [baseView addViewAtHCenter:[self makeHr1]];
    return baseView;
}



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
                       NSLocalizedString(@"UI0070_IdPasswordUnknownTitle", nil),
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
                 NSLocalizedString(@"UI0070_IdPasswordUnknownMsg", nil),
                 NSLocalizedString(@"Common_LoginPassword", nil)];
        UILabel *description = [self makeLabel:frame title:title isBold:NO];
        [baseView addViewAtHCenter:description];
        [baseView addBlankWithHeight:10.0f];
        [baseView addViewAtHCenter:[self makeHr2]];
        
        // 支店口番わかるボタン
        frame = CGRectMake(0, 0, VIEW_WIDTH_LEVEL2 - ARROW_AREA_WIDTH, 0);
        title = [NSString stringWithFormat:
                 NSLocalizedString(@"UI0070_IdPasswordUnknown", nil),
                 NSLocalizedString(@"Common_BranchNumber", nil),
                 NSLocalizedString(@"Common_AccountNumber", nil),
                 NSLocalizedString(@"Common_PIN", nil)];
        UILabel *idPwUnknownLabel = [self makeLabel:frame title:title isBold:NO];
        frame = CGRectMake(42.0f, idPwUnknownLabel.frame.size.height + 10.0f, 218.0f, 0);
        title = NSLocalizedString(@"UI0070_PhoneSupport", nil);
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
                                                              NSLocalizedString(@"UI0070_AllUnknown", nil)]
                                                            :@selector(allButtonAction:)
                                                            :NO]];
        [baseView addViewAtHCenter:[self makeHr2]];
        [baseView addBlankWithHeight:15.0f];
        
        // 備考
        NSString * note1 = [NSString stringWithFormat:
                            NSLocalizedString(@"UI0070_Note1", nil),
                            NSLocalizedString(@"Common_BranchNumber", nil),
                            NSLocalizedString(@"Common_AccountNumber", nil),
                            NSLocalizedString(@"Common_RKBKName", nil)];
        NSString * note2 = [NSString stringWithFormat:
                            NSLocalizedString(@"UI0070_Note2", nil),
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

- (void)userIdButtonAction:(UIButton *)button {
    if ([self.uIUXLIUserIDPassUnknownViewDelegate respondsToSelector:@selector(userIdButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uIUXLIUserIDPassUnknownViewDelegate userIdButtonAction:button];
    }
}
- (void)passwordButtonAction:(UIButton *)button {
    if ([self.uIUXLIUserIDPassUnknownViewDelegate respondsToSelector:@selector(passwordButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uIUXLIUserIDPassUnknownViewDelegate passwordButtonAction:button];
    }
}
- (void)idPwButtonAction:(UIButton *)button {
    if ([self.uIUXLIUserIDPassUnknownViewDelegate respondsToSelector:@selector(idPwButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uIUXLIUserIDPassUnknownViewDelegate idPwButtonAction:button];
    }
}
- (void)allButtonAction:(UIButton *)button {
    if ([self.uIUXLIUserIDPassUnknownViewDelegate respondsToSelector:@selector(allButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uIUXLIUserIDPassUnknownViewDelegate allButtonAction:button];
    }
}

- (void)appliLoginSecurityCardHaveButtonAction:(UIButton *)button {
    if ([self.uIUXLIUserIDPassUnknownViewDelegate respondsToSelector:@selector(appliLoginSecurityCardHaveButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uIUXLIUserIDPassUnknownViewDelegate appliLoginSecurityCardHaveButtonAction:button];
    }
}

- (void)onTapToggleButton {
    NSInteger index = [self indexOfView:self.idPwUnknownView];
    [self removeViewAtIndex:index animated:NO];
    self.idPwUnknownView = [self makeIdPwUnknownView:!self.toggleIsOpen];
    [self insertViewAtHCenter:self.idPwUnknownView atIndex:index animated:NO];
    self.toggleIsOpen = !self.toggleIsOpen;
}
- (void)onTapCloseButton {
    NSInteger index = [self indexOfView:self.idPwUnknownView];
    [self removeViewAtIndex:index animated:NO];
    self.idPwUnknownView = [self makeIdPwUnknownView:NO];
    [self insertViewAtHCenter:self.idPwUnknownView atIndex:index animated:NO];
    self.toggleIsOpen = NO;
}

- (void)onTapPasswordUnknownToggleButton {
    NSInteger index = [self indexOfView:self.passwordUnknownView];
    [self removeViewAtIndex:index animated:NO];
    self.passwordUnknownView = [self makePasswordUnknownView:!self.passwordUnknownToggleIsOpen];
    [self insertViewAtHCenter:self.passwordUnknownView atIndex:index animated:NO];
    self.passwordUnknownToggleIsOpen = !self.passwordUnknownToggleIsOpen;
}
- (void)onTapPasswordUnknownCloseButton {
    NSInteger index = [self indexOfView:self.passwordUnknownView];
    [self removeViewAtIndex:index animated:NO];
    self.passwordUnknownView = [self makePasswordUnknownView:NO];
    [self insertViewAtHCenter:self.passwordUnknownView atIndex:index animated:NO];
    self.passwordUnknownToggleIsOpen = NO;
}
@end
