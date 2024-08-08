//
//  UIUXLIPasswordSettingCompleteView.m
//  RakutenBank
//
//  Created by kobayashi8156 on 2014/04/23.
//
//

#import "UIUXLIPasswordSettingCompleteView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "UIUXLIUtilMacro.h"
#import "UIUXLICompareCheckInput.h"
#import "ValidatedTextField+ConfigUtil.h"


@interface UIUXLIPasswordSettingCompleteView () <UIUXLICompareCheckInputDelegate>
@property (nonatomic, strong) UIButton * quickLoginButton;
@end

@implementation UIUXLIPasswordSettingCompleteView

- (void)loadInitialViews
{
    [self addBlankWithHeight:35.0f];
    [self addCompText];
    [self addBlankWithHeight:15.0f];
    [self addEndSetMessText];
    [self addBlankWithHeight:15.0f];
    [self addGuideText];
    [self addNextButton];
}

- (void)updateData:(NSObject *)dto
{
}

- (void)addCompText
{
    NSString * textString = [NSString stringWithFormat:NSLocalizedString(@"UI0044_CompletSetting", nil),
                             NSLocalizedString(@"Common_PIN", nil)];
    
    UILabel * text = [self uiLableWithWidth:VIEW_WIDTH_LEVEL2
                                       text:textString
                                  textColor:[ColorUtil textColorLightGreen]
                                   fontSize:23
                                     isbold:NO];
    CHANGE_ORIGIN_X(text, k_HmarginLevel2);
    [self addView:text];
}

- (void)addEndSetMessText
{
    NSString * textString = [NSString stringWithFormat:NSLocalizedString(@"UI0044_EndSetMessText", nil)];
    
    UILabel * text = [self uiLableWithWidth:VIEW_WIDTH_LEVEL2
                                       text:textString
                                  textColor:[ColorUtil textColorBlack]
                                   fontSize:k_FontSize_DefaultMsg
                                     isbold:NO];
    CHANGE_ORIGIN_X(text, k_HmarginLevel2);
    [self addView:text];
}

- (void)addGuideText
{
    NSString * textString = [NSString stringWithFormat:
                             NSLocalizedString(@"UI0044_PINSetCompMess", nil),
                             NSLocalizedString(@"Common_QuickLogin", nil)];
    
    UILabel * text = [self uiLableWithWidth:VIEW_WIDTH_LEVEL2
                                       text:textString
                                  textColor:[ColorUtil textColorBlack]
                                   fontSize:13
                                     isbold:NO];
    CHANGE_ORIGIN_X(text, k_HmarginLevel2)
    [self addView:text];
}

- (void)addNextButton {
    self.quickLoginButton = [self imageButton:[UIImage imageNamed:@"LI_btn_orange420_09"]
                               hilightedImage:[UIImage imageNamed:@"LI_btn_orange420_09_hover"]disablesIamge:[UIImage imageNamed:@"LI_btn_orange420_09_inactive"]
                                   imageScale:0.5f];
    [self.quickLoginButton addTarget:self action:@selector(quickLoginButtonAction:)forControlEvents:UIControlEventTouchUpInside];
    
    CGFloat marginHeight = self.frame.size.height - self.stackLayoutView.subViewsHeight - (k_VmarginContentsBottom + self.quickLoginButton.frame.size.height);
    if (marginHeight < k_VmarginContentsBottom) {
        marginHeight = k_VmarginContentsBottom;
    }
    [self addBlankWithHeight:marginHeight];
    [self addViewAtHCenter:self.quickLoginButton];
}


- (void) quickLoginButtonAction:(UIButton *)button
{
    if ([self.uIUXLIPasswordSettingCompleteViewDelegate respondsToSelector:@selector(quickLoginButtonAction:)]) {
        [self.uIUXLIPasswordSettingCompleteViewDelegate quickLoginButtonAction:button];
    }
}

@end
