//
//  UIUXLILoginPasswordResetCompleteView.m
//  RakutenBank
//
//  Created by kobayashi8156 on 2014/04/22.
//
//

#import "UIUXLILoginPasswordResetCompleteView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "UIUXLIUtilMacro.h"
#import "UIUXLICompareCheckInput.h"
#import "ValidatedTextField+ConfigUtil.h"


@interface UIUXLILoginPasswordResetCompleteView () <UIUXLICompareCheckInputDelegate>
@property (nonatomic, strong) UIButton * nextButton;
@property (nonatomic, strong) NSString * password;
@property (nonatomic, strong) UIView * csfImageView;    ///< CSF画像ビュー
@end

@implementation UIUXLILoginPasswordResetCompleteViewDTO

@end

@implementation UIUXLILoginPasswordResetCompleteView

- (id)initWithFrame:(CGRect)frame viewDTO:(NSObject *)viewDTO
{
    UIUXLILoginPasswordResetCompleteViewDTO * dto = (UIUXLILoginPasswordResetCompleteViewDTO *)viewDTO;
    _password = dto.password;
    
    self = [super initWithFrame:frame viewDTO:viewDTO];
    if (!self) {
        return nil;
    }
    
    return self;
}

//サブビューView初期化メソッド
- (void)loadInitialViews
{
    [self addBlankWithHeight:35.0f];
    
    // 完了メッセージ
    [self addCompText];

    if (((UIUXLILoginPasswordResetCompleteViewDTO *)self.viewDTO).isSpeedOpen) {
        [self addBlankWithHeight:42.0f];
        // CSF表示(スピード開設初回ログイン)
        // CSF画像
        self.csfImageView = [[UIView alloc] initWithFrame:CGRectMake(k_HmarginLevel15, 0, VIEW_WIDTH_LEVEL15, 0)];
        [self pushLoadUrl:((UIUXLILoginPasswordResetCompleteViewDTO *)self.viewDTO).csfImageURL forView:self.csfImageView];
        [self addViewAtHCenter:self.csfImageView];
        
        [self addBlankWithHeight:50.0f];
    } else {
        [self addBlankWithHeight:15.0f];
        // 今後案内メッセージ
        [self addGuideText];
        [self addBlankWithHeight:25.0f];
        // userID表示ブロック
        [self addUserIdDisplayBlock];
    }
    //次へボタンだよ！
    [self addNextButton];

    // CSF画像読み込み開始
    [self startLoading];
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
                             NSLocalizedString(@"UI0045_Text_LoginPasswordSettingComplete", nil),
                             NSLocalizedString(@"Common_LoginPassword", nil)];
    
    // メッセージをラベル化
    UILabel * text = [self uiLableWithWidth:VIEW_WIDTH_LEVEL2
                                       text:textString
                                  textColor:[ColorUtil textColorLightGreen]
                                   fontSize:23
                                     isbold:NO];
    CHANGE_ORIGIN_X(text, k_HmarginLevel2);
    [self addView:text];
}

// Label(Text):今後案内メッセージ
- (void)addGuideText {
    // メッセージ読み込み
    NSString * textString = [NSString stringWithFormat:
                             NSLocalizedString(@"UI0045_Text_GuideMessage", nil),
                             NSLocalizedString(@"Common_LoginPassword", nil),
                             NSLocalizedString(@"Common_Login", nil)];
    // メッセージをラベル化
    UILabel * text = [self uiLableWithWidth:VIEW_WIDTH_LEVEL2
                                       text:textString
                                  textColor:[ColorUtil textColorBlack]
                                   fontSize:k_FontSize_DefaultMsg
                                     isbold:NO];
    CHANGE_ORIGIN_X(text, k_HmarginLevel2)
    [self addView:text];
}

// Block(Text):お客さまのパスワード表示
- (void)addUserIdDisplayBlock {
    // 文言読み込み
    NSString *textString = [NSString stringWithFormat:
                            NSLocalizedString(@"UI0045_Label_Password", nil),
                            NSLocalizedString(@"Common_Customer", nil),
                            NSLocalizedString(@"Common_Password", nil)];
    [self addViewAtHCenter:[self twoLinesBlock:textString messageText:[@"" stringByPaddingToLength:self.password.length withString:@"*" startingAtIndex:0] messageTextFontSize:23.0f]];
}

- (void)addNextButton {
    self.nextButton = [self imageButton:[UIImage imageNamed:@"btn_main_yellow_go_next"]
                         hilightedImage:[UIImage imageNamed:@"btn_main_yellow_go_next"]
                          disablesIamge:[UIImage imageNamed:@"btn_main_yellow_go_next"]
                             imageScale:VIEW_WIDTH_LEVEL15 / [UIImage imageNamed:@"btn_main_yellow_go_next"].size.width];
    CHANGE_ORIGIN_X(self.nextButton, (self.frame.size.width - self.nextButton.frame.size.width) / 2)
    self.nextButton.exclusiveTouch = YES;
    [self.nextButton addTarget:self action:@selector(nextButtonAction:)forControlEvents:UIControlEventTouchUpInside];
    [self addSubview:self.nextButton];
    [self updateNextButton];
}

//設定するボタンイベント
- (void)nextButtonAction:(UIButton *)button
{
    if ([self.uIUXLILoginPasswordResetCompleteViewDelegate respondsToSelector:@selector(nextButtonAction:)]) {
        [self.uIUXLILoginPasswordResetCompleteViewDelegate nextButtonAction:button];
    }
}

- (void)updateNextButton
{
    CGFloat marginHeight = self.frame.size.height - (self.stackLayoutView.subViewsHeight + 15.0f + self.nextButton.frame.size.height);
    if (marginHeight < 15.0f) {
        marginHeight = 15.0f;
    }
    CHANGE_ORIGIN_Y(self.nextButton, self.stackLayoutView.subViewsHeight + marginHeight);

    CGSize size = self.contentSize;
    size.height = self.nextButton.frame.origin.y + self.nextButton.frame.size.height + 15.0f;
    self.contentSize = size;
}

- (void)onResourceLoaderResponse:(NSNotification *)response
{
    [super onResourceLoaderResponse:response];
    
    [self performSelectorOnMainThread:@selector(updateNextButton)
                           withObject:nil
                        waitUntilDone:NO];
}

@end
