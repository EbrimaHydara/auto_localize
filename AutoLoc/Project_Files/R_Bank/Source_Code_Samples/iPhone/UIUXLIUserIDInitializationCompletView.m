//
//  UIUXLIUserIDInitializationCompletView.m
//  RakutenBank
//
//  Created by kobayashi8156 on 2014/04/28.
//
//

#import "UIUXLIUserIDInitializationCompletView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "UIUXLIUtilMacro.h"
#import "UIUXLICompareCheckInput.h"
#import "ValidatedTextField+ConfigUtil.h"
#import "UIViewController+PopupViewController.h"

@interface UIUXLIUserIDInitializationCompletView () <UIUXLICompareCheckInputDelegate>
@property (nonatomic, strong) UIButton * loginButton;
@end

@implementation UIUXLIUserIDInitializationCompletView

- (void)loadInitialViews {
    [self addBlankWithHeight:k_VmarginContentsTop];
    [self addStep];
    [self addBlankWithHeight:15.0f];
    [self addGuideText];
    [self addBlankWithHeight:15.0f];
    [self addUserIdDisplayBlock];
    [self addLoginButton];
}

- (void)updateData:(NSObject *)dto{}

- (void)addStep
{
    UIImage * img = [UIImage imageNamed:@"LI_step_userid_3"];
    UIImageView * iv = [[UIImageView alloc] initWithImage:img];
    iv.frame = CGRectMake(0, 0, img.size.width / 2, img.size.height / 2);
    [self addViewAtHCenter:iv];
}

- (void)addGuideText {
    NSString * textString = [NSString stringWithFormat:
                             NSLocalizedString(@"UI0073_GuideText", nil),
                             NSLocalizedString(@"Common_UserID", nil)];
    
    UILabel * text = [self uiLableWithWidth:VIEW_WIDTH_LEVEL2
                                       text:textString
                                  textColor:[ColorUtil textColorBlack]
                                   fontSize:k_FontSize_DefaultMsg
                                     isbold:NO];
    CHANGE_ORIGIN_X(text, k_HmarginLevel2);
    [self addView:text];
}

- (void)addUserIdDisplayBlock {
    NSString *title = [NSString stringWithFormat:
                       NSLocalizedString(@"UI0073_InputTitle_UserID", nil),
                       NSLocalizedString(@"Common_Customer", nil),
                       NSLocalizedString(@"Common_UserID", nil)];
    
    NSString *mess = [NSString stringWithFormat:
                      NSLocalizedString(@"UI0073_UserIdTextMess", nil),
                      NSLocalizedString(@"Common_BranchNumber", nil),
                      NSLocalizedString(@"Common_AccountNumber", nil)];
    
    NSString *useForNext = NSLocalizedString(@"UI0073_UseForNext", nil);
    
    NSMutableAttributedString *attrMess = [[NSMutableAttributedString alloc] initWithString:mess
                                                                                 attributes:@{NSFontAttributeName:[UIFont systemFontOfSize:13.5f]}];
    [attrMess addAttribute:NSForegroundColorAttributeName value:[ColorUtil textColorRed] range:[mess rangeOfString:@"支店番号"]];
    [attrMess addAttribute:NSForegroundColorAttributeName
                     value:[ColorUtil textColorRed]
                     range:[mess rangeOfString:NSLocalizedString(@"Common_AccountNumber", nil)]];
    [attrMess addAttribute:NSForegroundColorAttributeName value:[ColorUtil textColorRed] range:[mess rangeOfString:@"10桁"]];
    
    // 各ラベル
    UILabel *titleLabel = [self uiLableWithWidth:VIEW_WIDTH_INTEXTBOX
                                            text:title
                                       textColor:[ColorUtil textColorBlack]
                                        fontSize:k_FontSize_DefaultMsg
                                          isbold:NO];
    
    UILabel *messLabel = [self uiLableWithWidth:VIEW_WIDTH_INTEXTBOX attributedText:attrMess];
    
    UILabel *useForNextLabel = [self uiLableWithWidth:VIEW_WIDTH_INTEXTBOX
                                                 text:useForNext
                                            textColor:[ColorUtil textColorBlack]
                                             fontSize:12.0f
                                               isbold:NO];
    
    // ユーザIDイメージ
    UIImage * img = [UIImage imageNamed:@"LI_img_account_number_sample2"];
    UIImageView * concatImage = [[UIImageView alloc] initWithImage:img];
    concatImage.frame = CGRectMake(0, 0, img.size.width / 2, img.size.height / 2);
    
    LIStackLayoutView * stackView = [[LIStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, VIEW_WIDTH_TEXTBOX, 0.0f)];
    [self configBorderToBackgroundStyle:stackView BackgroundColor:[UIColor whiteColor] borderColor:[ColorUtil textBoxBorderLightGlay]];
    
    [stackView addBlankWithHeight:15.0f];
    [stackView addViewAtHCenter:titleLabel];
    [stackView addBlankWithHeight:10.0f];
    [stackView addViewAtHCenter:messLabel];
    [stackView addBlankWithHeight:25.0f];
    [stackView addViewAtHCenter:concatImage];
    [stackView addBlankWithHeight:25.0f];
    [stackView addViewAtHCenter:useForNextLabel];
    [stackView addBlankWithHeight:15.0f];
    [self addViewAtHCenter:stackView];
}

- (void)addLoginButton {
    
    UIButton * loginButton = [self imageButton:[UIImage imageNamed:@"LI_btn_riset-userid_out"]
                                hilightedImage:[UIImage imageNamed:@"LI_btn_riset-userid_hover"]
                                 disablesIamge:nil
                                    imageScale:0.5];
    [loginButton addTarget:self
                    action:@selector(loginButtonAction:)
          forControlEvents:UIControlEventTouchUpInside];
    
    //画面高さ分の隙間調整
    CGFloat buttonTopMargin = self.frame.size.height - self.stackLayoutView.subViewsHeight - (loginButton.frame.size.height + k_VmarginContentsBottom);
    if (buttonTopMargin < 15.0f) {
        //ボタン上部に十分なマージンが取れない場合は画面最下部の固定配置を諦める
        buttonTopMargin = 15.0f;
    }
    [self addBlankWithHeight:buttonTopMargin];
    [self addViewAtHCenter:loginButton];
    [self addBlankWithHeight:k_VmarginContentsBottom];
    
    self.loginButton = loginButton;
}

//設定するボタンイベント
- (void)loginButtonAction:(UIButton *)button {
    if ([self.uIUXLIUserIDInitializationCompletViewDelegate respondsToSelector:@selector(loginButtonAction:)]) {
        [self.uIUXLIUserIDInitializationCompletViewDelegate loginButtonAction:self.loginButton];
    }
}

@end
