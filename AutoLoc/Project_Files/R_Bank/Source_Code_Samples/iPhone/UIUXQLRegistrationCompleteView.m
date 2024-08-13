//
//  UIUXQLRegistrationCompleteView.m
//  RakutenBank
//
//  Created by nw_y.ito on 2014/04/22.
//
//

#import "UIUXQLRegistrationCompleteView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "UIUXLIUtilMacro.h"
#import "MixedTypeTextView.h"

@interface UIUXQLRegistrationCompleteView () <UIUXQLRegistrationCompleteViewDelegate>

@property (nonatomic) UIButton * nextButton;  ///< 次へボタン

@end

@implementation UIUXQLRegistrationCompleteView

#pragma mark - ビューの初期化メソッド群

// ビューの初期化時にサブビューを構築する
- (void)loadInitialViews
{
    //メッセージ1
    UILabel * text1 = [self uiLableWithWidth:VIEW_WIDTH_LEVEL2
                                        text:[NSString stringWithFormat:
                                              NSLocalizedString(@"UI0007_Text1", nil),
                                              NSLocalizedString(@"Common_QuickLogin", nil)]
                                   textColor:[ColorUtil textColorLightGreen]
                                    fontSize:23.0f
                                      isbold:NO];
    CHANGE_WIDTH(text1, VIEW_WIDTH_LEVEL2);
    //次へボタン
    self.nextButton = [self imageButton:[UIImage imageNamed:@"CMN_btn_gtop"]
                         hilightedImage:[UIImage imageNamed:@"CMN_btn_gtop_hover"]
                          disablesIamge:nil
                             imageScale:0.5f];
    self.nextButton.center = CGPointMake(self.frame.size.width / 2,
                                         self.frame.size.height - self.nextButton.frame.size.height / 2 - k_VmarginContentsBottom);
    [self.nextButton addTarget:self
                        action:@selector(nextButtonAction:)
              forControlEvents:UIControlEventTouchUpInside];
    
    
    [self addBlankWithHeight:35.0f];
    
    //メッセージ
    [self addViewAtHCenter:text1];
    
    //次へボタン
    [self addSubview:self.nextButton];
}

#pragma mark - UIUXQLRegistrationCompleteViewDelegateメソッド実装
//次へボタンイベント
- (void)nextButtonAction:(UIButton *)button
{
    if ([self.uiuxQLRegistrationCompleteViewDelegate respondsToSelector:@selector(nextButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxQLRegistrationCompleteViewDelegate nextButtonAction:button];
    }
}

@end