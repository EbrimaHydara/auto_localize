//
//  UIUXLIUserIDInitConfirmView.m
//  RakutenBank
//
//  Created by sugiyama8067 on 2014/04/26.
//
//

#import "UIUXLIUserIDInitConfirmView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "UIUXLIUtilMacro.h"
#import "MixedTypeTextView.h"
#import "RBInputTextField.h"
#import "ValidatedTextField+ConfigUtil.h"

#pragma mark - 表示データモデル定義
@implementation UIUXLIUserIDInitConfirmViewDTO

@end

@interface UIUXLIUserIDInitConfirmView () <RBInputTextFieldDelegate>

@property (nonatomic, strong) UIButton * executeButton;         ///< 実行ボタン
@property (nonatomic, strong) RBInputTextField * birthdayInput; ///< 誕生日入力欄
@property (nonatomic, strong) UIView * showPickerView;          ///< ピッカー表示ビュー

@end

@implementation UIUXLIUserIDInitConfirmView

- (void)loadInitialViews {
    [self addBlankWithHeight:k_VmarginContentsTop];
    
    //ステップ画像
    [self addStep];
    [self addBlankWithHeight:15.0f];
    
    //初期化テキスト追加
    [self addInputBirthdayText];
    [self addBlankWithHeight:15.0];
    
    //初期化後のユーザID説明テキストブロック追加
    [self addUserIDGuidanceTextBlock];
    [self addBlankWithHeight:15.0];
    
    //生年月日入力欄追加
    [self addBirthdayInput];
    
    //初期化ボタン追加
    [self addExecuteButton];
}

//入力欄クリアメソッド
- (void)clearInput
{
    //生年月日入力欄を空欄にする
    [self.birthdayInput.inputField clearText];
    
    self.executeButton.enabled = NO;
}

#pragma mark - ビューの初期化メソッド群
//ステップ画像
- (void)addStep
{
    UIImage * img = [UIImage imageNamed:@"LI_step_userid_2"];
    UIImageView * iv = [[UIImageView alloc] initWithImage:img];
    iv.frame = CGRectMake(0, 0, img.size.width / 2, img.size.height / 2);
    [self addViewAtHCenter:iv];
}

//初期化テキスト追加
- (void)addInputBirthdayText
{
    //文言読み込み
    NSString * text = [NSString stringWithFormat:
                       NSLocalizedString(@"UI0072_UserIDInitText", nil),
                       NSLocalizedString(@"Common_UserID", nil)];
    
    UILabel * label = [self uiLableWithWidth:VIEW_WIDTH_LEVEL2
                                        text:text
                                   textColor:[ColorUtil textColorBlack]
                                    fontSize:k_FontSize_DefaultMsg
                                      isbold:NO];
    CHANGE_ORIGIN_X(label, k_HmarginLevel2);
    [self addView:label];
}

//初期化後のユーザID説明テキストブロック追加
- (void)addUserIDGuidanceTextBlock
{
    //文言読み込み
    NSString * textStr = [NSString stringWithFormat:
                          NSLocalizedString(@"UI0072_UserIDGuidanceText", nil),
                          NSLocalizedString(@"Common_UserID", nil),
                          NSLocalizedString(@"Common_UserID", nil)];
    //背景作成
    UIView * baseView = [self textBackgroundViewWithBackgroundColor:[UIColor whiteColor]
                                                        borderColor:[ColorUtil textBoxBorderRed]];
    CGFloat curY = k_TextBackgroundViewMarginTop;
    //テキスト追加
    UILabel * text1Label = [self uiLableWithWidth:VIEW_WIDTH_INTEXTBOX
                                             text:textStr
                                        textColor:[ColorUtil textColorBlack]
                                         fontSize:k_FontSize_DefaultMsg
                                           isbold:NO];
    MOVE_WITH_ORIGIN(text1Label, k_TextBackgroundViewMarginLeft, curY);
    [baseView addSubview:text1Label];
    curY += text1Label.frame.size.height + k_VmarginUnderTextField;
    
    //ベースの高さ修正
    CHANGE_HEIGHT(baseView, curY);
    
    [self addViewAtHCenter:baseView];
}

//生年月日入力欄追加
- (void)addBirthdayInput
{
    //文言読み込み
    NSString * title = NSLocalizedString(@"Common_Birthday", nil);
    
    //入力欄作成
    CGRect frame = CGRectMake(0.0f, 0.0f, k_WidthTextFieldLong2, k_HeightTextField);
    self.birthdayInput = [[RBInputTextField alloc] initWithFrame:frame];
    self.birthdayInput.title = title;
    [self.birthdayInput.inputField configBirthday];
    self.birthdayInput.inputField.enabled = NO;
    self.birthdayInput.inputField.placeholder = @"選択してください";
    self.birthdayInput.inputField.layer.cornerRadius = 5.0f;
    
    // 「▼」アイコン
    UIImage * image = [UIImage imageNamed:@"CMN_Icon_Dropdown"];
    UIImageView * imageView = [[UIImageView alloc]initWithImage:image];
    RESIZE_WITH_SCALE(imageView, 0.5f);
    MOVE_WITH_ORIGIN(imageView, self.birthdayInput.inputField.frame.size.width - imageView.frame.size.width, self.birthdayInput.inputField.frame.origin.y);
    CHANGE_HEIGHT(self.birthdayInput.inputField, imageView.frame.size.height);
    [self.birthdayInput addSubview:imageView];
    
    //ダミーボタン作成
    UIButton * dummyButton = [UIButton buttonWithType:UIButtonTypeCustom];
    dummyButton.frame = self.birthdayInput.inputField.frame;
    dummyButton.backgroundColor = [UIColor clearColor];
    dummyButton.exclusiveTouch = YES;
    [dummyButton addTarget:self
                    action:@selector(birthdayButtonAction:)
          forControlEvents:UIControlEventTouchUpInside];
    [self.birthdayInput addSubview:dummyButton];
    
    [self addViewAtHCenter:self.birthdayInput];
}

//初期化ボタン追加
- (void)addExecuteButton
{
    self.executeButton = [self imageButton:[UIImage imageNamed:@"LI_btn_orange420_07"]
                            hilightedImage:[UIImage imageNamed:@"LI_btn_orange420_07_hover"]
                             disablesIamge:[UIImage imageNamed:@"LI_btn_orange420_07_inactive"]
                                imageScale:0.5];
    self.executeButton.enabled = NO;
    [self.executeButton addTarget:self
                           action:@selector(executeButtonAction:)
                 forControlEvents:UIControlEventTouchUpInside];
    
    //画面高さ分の隙間調整
    CGFloat buttonTopMargin = self.frame.size.height - self.stackLayoutView.subViewsHeight - (self.executeButton.frame.size.height + k_VmarginContentsBottom);
    if (buttonTopMargin < 25.0f) {
        //ボタン上部に十分なマージンが取れない場合は画面最下部の固定配置を諦める
        buttonTopMargin = 25.0f;
    }
    [self addBlankWithHeight:buttonTopMargin];
    [self addViewAtHCenter:self.executeButton];
    [self addBlankWithHeight:k_VmarginContentsBottom];
}

#pragma mark - ピッカー入力イベント
//ピッカー入力で選択されたらよばれる
- (void)selectedPicker:(UIView *)pickerInputView
          selectedYear:(NSString *)selectedYear
         selectedMonth:(NSString *)selectedMonth
           selectedDay:(NSString *)selectedDay
{
    self.birthdayInput.inputField.text = [NSString stringWithFormat:@"%@/%@/%@",
                                          selectedYear,selectedMonth,selectedDay];
    if (!self.executeButton.enabled) {
        self.executeButton.enabled = YES;
    }
}

//ピッカー入力終了時に呼ばれる
- (void)didFinishPicker:(UIView *)sender
{
    if (self.showPickerView == sender) {
        self.showPickerView = nil;
    }
}

#pragma mark - プロパティのアクセサ
- (UIUXLIUserIDInitConfirmViewDTO *)viewDto
{
    if (!self.birthdayInput) {
        return nil;
    }
    
    // 常に新しいインスタンスを生成して返却しているので注意
    UIUXLIUserIDInitConfirmViewDTO * dto = UIUXLIUserIDInitConfirmViewDTO.new;
    dto.birthday = self.birthdayInput.inputField.text;
    
    return dto;
}

#pragma mark - UIUXLIUserIDInitConfirmViewDelegateを呼ぶメソッド実装
//ログインボタンイベント
- (void)executeButtonAction:(UIButton *)button
{
    if ([self.uiuxLIUserIDInitConfirmViewDelegate respondsToSelector:@selector(executeButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLIUserIDInitConfirmViewDelegate executeButtonAction:button];
    }
}

//誕生日入力ダミーボタンイベント
- (void)birthdayButtonAction:(UIButton *)button
{
    if (button == self.showPickerView) {
        //すでに押されたボタンでピッカーを表示している場合は何もしない。
        return;
    }
    
    if ([self.uiuxLIUserIDInitConfirmViewDelegate respondsToSelector:@selector(birthdayButtonAction:defaultDate:)]) {
        self.showPickerView = button;
        [self.uiuxLIUserIDInitConfirmViewDelegate birthdayButtonAction:button
                                                           defaultDate:self.birthdayInput.inputField.text];
    }
}

@end
