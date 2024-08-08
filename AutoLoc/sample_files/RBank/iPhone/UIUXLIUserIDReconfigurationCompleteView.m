//
//  UIUXLIUserIDReconfigurationCompleteView.m
//  RakutenBank
//
//  Created by kobayashi8156 on 2014/04/21.
//
//

#import "UIUXLIUserIDReconfigurationCompleteView.h"

#import "RakutenBankAppDelegate.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "UIUXLIUtilMacro.h"

@interface UIUXLIUserIDReconfigurationCompleteView () <UIUXLIUserIDReconfigurationCompleteViewDelegate>
@property (nonatomic, strong) UIButton * nextButton;
@end

@implementation UIUXLIUserIDReconfigurationCompleteView

//サブビューView初期化メソッド
#pragma mark - LIBaseScrollViewクラスのメソッドオーバーライド
- (void)loadInitialViews
{
    [self addBlankWithHeight:k_VmarginContentsTop];
    
    // 完了メッセージ
    [self addCompText];
    [self addBlankWithHeight:15.0f];

    // userID表示ブロック
    [self addUserIdDisplayBlock];
    [self addNextButton];
}

//Viewデータ更新メソッド
- (void)updateData:(NSObject *)dto
{
    
}

// Label(Text):設定完了メッセージ
- (void)addCompText
{
    // メッセージ読み込み
    NSString * textString = [NSString stringWithFormat:
                             NSLocalizedString(@"UI0041_CompletSetting", nil),
                             NSLocalizedString(@"Common_UserID", nil)];
    
    // メッセージをラベル化
    UILabel * text = [self uiLableWithWidth:VIEW_WIDTH_LEVEL2
                                       text:textString
                                  textColor:[ColorUtil textColorLightGreen]
                                   fontSize:23
                                     isbold:NO];
    CHANGE_ORIGIN_X(text, k_HmarginLevel2);
    [self addView:text];
}

// Block(Text):ユーザID表示
- (void)addUserIdDisplayBlock {
    // 文言読み込み
    NSString *textString = [NSString stringWithFormat:
                            NSLocalizedString(@"UI0041_Label_UserID", nil),
                            NSLocalizedString(@"Common_Customer", nil),
                            NSLocalizedString(@"Common_UserID", nil)];
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    NSString *userID = appDel.firstLoginDto.userIdComp;
    [self addViewAtHCenter:[self twoLinesBlock:textString messageText:userID messageTextFontSize:23.0f]];
}

- (void)addNextButton {
    self.nextButton = [self imageButton:[UIImage imageNamed:@"btn_main_yellow_go_next"]
                         hilightedImage:[UIImage imageNamed:@"btn_main_yellow_go_next"]
                          disablesIamge:[UIImage imageNamed:@"btn_main_yellow_go_next"]
                             imageScale:VIEW_WIDTH_LEVEL15 / [UIImage imageNamed:@"btn_main_yellow_go_next"].size.width];
    self.nextButton.exclusiveTouch = YES;

    [self.nextButton addTarget:self
                    action:@selector(nextButtonAction:)
          forControlEvents:UIControlEventTouchUpInside];

    //画面高さ分の隙間調整
    CGFloat buttonTopMargin = self.frame.size.height - self.stackLayoutView.subViewsHeight - (self.nextButton.frame.size.height + 15.0f);
    if (buttonTopMargin < 15.0f) {
        //ボタン上部に十分なマージンが取れない場合は画面最下部の固定配置を諦める
        buttonTopMargin = 15.0f;
    }
    [self addBlankWithHeight:buttonTopMargin];
    [self addViewAtHCenter:self.nextButton];
    [self addBlankWithHeight:15.0f];
}

- (void)nextButtonAction:(UIButton *)button {
    if ([self.uIUXLIUserIDReconfigurationCompleteViewDelegate respondsToSelector:@selector(nextButtonAction:)]) {
        [self.uIUXLIUserIDReconfigurationCompleteViewDelegate nextButtonAction:button];
    }
}

@end
