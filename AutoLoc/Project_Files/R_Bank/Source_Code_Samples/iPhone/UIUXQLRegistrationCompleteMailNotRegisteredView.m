//
//  UIUXQLRegistrationCompleteMailNotRegisteredView.m
//  RakutenBank
//
//  Created by khedkar4474 on 25/11/21.
//  Copyright © 2021 Rakuten Bank, Ltd. All rights reserved.
//

#import "UIUXQLRegistrationCompleteMailNotRegisteredView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "UIUXLIUtilMacro.h"
#import "MixedTypeTextView.h"
#import "MakeViewUtil.h"

@interface UIUXQLRegistrationCompleteMailNotRegisteredView () <UIUXQLRegistrationCompleteMailNotRegisteredViewDelegate>

@property (nonatomic) UIButton * nextButton;  ///< 次へボタン

@end

@implementation UIUXQLRegistrationCompleteMailNotRegisteredView

#pragma mark - ビューの初期化メソッド群

// ビューの初期化時にサブビューを構築する
- (void)loadInitialViews
{
    [self addBlankWithHeight:35.0f];
    
    //メッセージ
    [self addViewAtHCenter:self.createMessageView];
    
    //次へボタン
    [self addSubview:self.createNextButton];
}

-(UIView *)createMessageView
{
    UILabel * text1 = [self uiLableWithWidth:VIEW_WIDTH_LEVEL2
                                        text:[NSString stringWithFormat:
                                              NSLocalizedString(@"UI0007_Text1", nil),
                                              NSLocalizedString(@"Common_QuickLogin", nil)]
                                   textColor:[ColorUtil textColorLightGreen]
                                    fontSize:23.0f
                                      isbold:NO];
    CHANGE_WIDTH(text1, VIEW_WIDTH_LEVEL2);
    return text1;
}


- (UIButton *)createNextButton
{
    UIButton * button = [UIButton buttonWithType:UIButtonTypeCustom];
    CGRect frame = CGRectMake(0.0f, 0.0f, self.frame.size.width-30.0f, 64.0f);
    button.frame = frame;
    [button setTitle:NSLocalizedString(@"UI0007_btnToRegisterMail", nil) forState:UIControlStateNormal];
    [button setBackgroundColor:[ColorUtil rkbkYellow]];
    [button setTitleColor:UIColor.blackColor forState:UIControlStateNormal];
    button.titleLabel.font = [UIFont fontWithName:NotoSansCJKjpRegular size:23.0f];
    button.titleLabel.lineBreakMode = NSLineBreakByWordWrapping;
    button.titleLabel.textAlignment = NSTextAlignmentCenter;
    button.center = CGPointMake(self.frame.size.width / 2,
                                         self.frame.size.height - button.frame.size.height / 2 - k_VmarginContentsBottom);
    [button addTarget:self
                        action:@selector(nextButtonAction:)
              forControlEvents:UIControlEventTouchUpInside];
    button.clipsToBounds = YES;
    button.exclusiveTouch = YES;
    
    return button;
}

#pragma mark - UIUXQLRegistrationCompleteViewDelegateメソッド実装
//次へボタンイベント
- (void)nextButtonAction:(UIButton *)button
{
    if ([self.uiuxQLRegistrationCompleteMailNotRegisteredViewDelegate respondsToSelector:@selector(nextButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxQLRegistrationCompleteMailNotRegisteredViewDelegate nextButtonAction:button];
    }
}

@end
