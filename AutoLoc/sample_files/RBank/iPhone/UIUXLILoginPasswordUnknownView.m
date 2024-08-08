//
//  UIUXLILoginPasswordUnknownView.m
//  RakutenBank
//
//  Created by kobayashi8156 on 2014/04/25.
//
//

#import "UIUXLILoginPasswordUnknownView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "UIUXLIUtilMacro.h"
#import "UIUXLICompareCheckInput.h"
#import "ValidatedTextField+ConfigUtil.h"

@interface UIUXLILoginPasswordUnknownView () <UIUXLICompareCheckInputDelegate, UIUXLILoginPasswordUnknownViewDelegate>

@end

@implementation UIUXLILoginPasswordUnknownView

- (void)loadInitialViews
{
    [self addBlankWithHeight:k_VmarginContentsTop];
    [self addAutomaticIssueGuidanceText];
    [self addBlankWithHeight:15.0f];
    [self addExpirationDateGuideTextBlock];
    [self addBlankWithHeight:15.0f];
    [self addNextButton];
}

- (void)updateData:(NSObject *)dto {}

- (void)addAutomaticIssueGuidanceText
{
    NSString * textString = [NSString stringWithFormat:
                             NSLocalizedString(@"UI0074_AutomaticIssueGuidance", nil),
                             NSLocalizedString(@"Common_LoginPassword", nil),
                             NSLocalizedString(@"Common_OneTimeAuth", nil)];
    UILabel * text = [self uiLableWithWidth:VIEW_WIDTH_LEVEL2
                                       text:textString
                                  textColor:[ColorUtil textColorBlack]
                                   fontSize:15
                                     isbold:NO];
    CHANGE_ORIGIN_X(text, k_HmarginLevel2);
    [self addViewAtHCenter:text];
}

- (void)addExpirationDateGuideTextBlock
{
    NSString *textString = [NSString stringWithFormat:NSLocalizedString(@"UI0074_ExpirationDateGuide", nil)];
    [self addViewAtHCenter:[self textBlock:textString]];
}

- (void)addNextButton {
    
    UIButton * nextButton = [self imageButton:[UIImage imageNamed:@"LI_btn_orange420_02"]
                                hilightedImage:[UIImage imageNamed:@"LI_btn_orange420_02_hover"]
                                 disablesIamge:[UIImage imageNamed:@"LI_btn_orange420_02_inactive"]
                                    imageScale:0.5];
    [nextButton addTarget:self action:@selector(nextButtonAction:)forControlEvents:UIControlEventTouchUpInside];
    
    //画面高さ分の隙間調整
    CGFloat marginHeight = self.frame.size.height - self.stackLayoutView.subViewsHeight - (k_VmarginContentsBottom + nextButton.frame.size.height);
    if (marginHeight < k_VmarginContentsBottom) {
        //画面下端から計算したマージンが少ない場合は固定値を使用する
        marginHeight = k_VmarginContentsBottom;
    }
    [self addBlankWithHeight:marginHeight];
    [self addViewAtHCenter:nextButton];
    
}

- (void)nextButtonAction:(UIButton *)button
{
    [self.uIUXLILoginPasswordUnknownViewDelegate nextButtonAction:button];
}

@end
