//
//  UIUXLITopStartView.m
//  RakutenBank
//
//  Created by nw_y.ito on 2014/04/14.
//
//

#import "UIUXLITopStartView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "CommonUtil.h"

@interface UIUXLITopStartView ()

@property (nonatomic) UIButton * startAccountOpenButton;  ///< 口座開設開始ボタン
@property (nonatomic) UIButton * startSendPictureButton;  ///< 書類送付ボタン
@property (nonatomic) UIButton * startLoginButton;        ///< ログイン開始ボタン
@property (nonatomic) UIButton* superLoanButton;          ///< スーパーローン
@property (nonatomic) UIButton* educationLoanButton;      ///< 教育ローン
@property (nonatomic) UIButton* personalInfoButton;       ///< 預金口座の氏名・住所変更
@property (nonatomic) UIButton* myNumberButton;           ///< マイナンバー(個人番号)

@end

@implementation UIUXLITopStartView

#pragma mark - ビューの初期化メソッド群

// ビューの初期化時にサブビューを構築する
- (void)loadInitialViews
{
    // 外部情報ファイル情報取得
    RakutenBankAppDelegate * rakutenBankAppDelegate = [[UIApplication sharedApplication] delegate];

    UIImage* image = [UIImage imageNamed:@"LI_btn_top_01"];
    CGFloat imageScale = self.stackLayoutView.frame.size.width / image.size.width;
    
    //口座開設開始ボタン
    self.startAccountOpenButton = [self imageButton:[UIImage imageNamed:@"LI_btn_top_01"]
                                     hilightedImage:[UIImage imageNamed:@"LI_btn_top_01_hover"]
                                      disablesIamge:nil
                                         imageScale:imageScale];
    //書類送付ボタン
    self.startSendPictureButton = [self imageButton:[UIImage imageNamed:@"LI_btn_top_02"]
                                     hilightedImage:[UIImage imageNamed:@"LI_btn_top_02_hover"]
                                      disablesIamge:nil
                                         imageScale:imageScale];

    //ログイン開始ボタン
    self.startLoginButton = [self imageButton:[UIImage imageNamed:@"LI_btn_top_03"]
                               hilightedImage:[UIImage imageNamed:@"LI_btn_top_03_hover"]
                                disablesIamge:nil
                                   imageScale:imageScale];
    
    // 口座開設のお申込み
    if (rakutenBankAppDelegate.externalFileDto.accountOpeningStartEnabled) {
        [self.startAccountOpenButton addTarget:self
                                        action:@selector(startAccountOpenButtonAction:)
                              forControlEvents:UIControlEventTouchUpInside];
        [self addViewAtHCenter:self.startAccountOpenButton];
    }

    // 口座開設の書類送付
    [self.startSendPictureButton addTarget:self
                                    action:@selector(startSendPictureButtonAction:)
                          forControlEvents:UIControlEventTouchUpInside];
    [self addViewAtHCenter:self.startSendPictureButton];

    // 口座開設進捗状況の確認
    NSString* linkTitleUnclear = NSLocalizedString(@"UI0030_Link1", nil);
    UIView* linkView1 = [self linkText:linkTitleUnclear
                               action:@selector(confirmAccountStatusButtonAction:)
                       rightAlignView:self.startSendPictureButton];
    [self addBlankWithHeight:16.0f];
    linkView1.frame = CGRectMake(linkView1.frame.origin.x - 15,
                                 linkView1.frame.origin.y,
                                 linkView1.frame.size.width,
                                 linkView1.frame.size.height);
    [self addView:linkView1];

    // ログインのお手続き
    [self.startLoginButton addTarget:self
                              action:@selector(startLoginButtonAction:)
                    forControlEvents:UIControlEventTouchUpInside];
    [self addBlankWithHeight:31.0f];
    [self addViewAtHCenter:self.startLoginButton];
    
    // 機種変更時のクイックログイン移行
    [self addBlankWithHeight:16.0f];
    linkTitleUnclear = NSLocalizedString(@"UI0030_Link2", nil);
    UIView* linkView2 = [self linkText:linkTitleUnclear
                                action:@selector(startQrChangeDeviceButtonAction:)
                        rightAlignView:linkView1];
    [self addView:linkView2];

    // その他の書類送付 ブロック
    [self addBlankWithHeight:41.0f];
    LIStackLayoutView * documentSendView = [self createDocumentSendView];
    [self addView:documentSendView];

    //プライバシーポリシーのリンク追加
    UIView * privacyPolicyLink = [self indicatorButtonWithTitle2:NSLocalizedString(@"Common_PrivacyPolicy", nil)
                                                            rect:CGRectMake(0.0f, 0.0f, 0.0f, 0.0f)
                                                            font:[UIFont boldSystemFontOfSize:13.0f]
                                                          target:self
                                                          action:@selector(onPrivacyPolicyButtonAction:)];
    [self addViewAtHCenter:privacyPolicyLink];
    [self addBlankWithHeight:15.0f];
}

// 書類送付サブビューを構築する
- (LIStackLayoutView *) createDocumentSendView
{
    CGRect frame = CGRectMake(0, 0, self.stackLayoutView.frame.size.width, 0);
    LIStackLayoutView* view = [[LIStackLayoutView alloc] initWithFrame:frame];
    view.backgroundColor = [UIColor clearColor];
    
    // その他の書類送付
    UILabel* title = [self normalText:NSLocalizedString(@"UI0030_Title1", nil)
                             fontSize:13.0f
                        textAlignment:NSTextAlignmentCenter
                            textColor:[ColorUtil textColorDefault]
                                width:frame.size.width
                           marginLeft:0.0f];
    [view addView:title];
    
    // 線
    UIImageView* lineView = [[UIImageView alloc] initWithFrame:CGRectMake(0, 0, view.frame.size.width, 2)];
    [lineView.layer setBorderColor:[ColorUtil textColorDefault].CGColor];
    [lineView.layer setBorderWidth:2.0];
    [view addBlankWithHeight:7.0f];
    [view addView:lineView];
    
    // その他の書類送付 説明
    UILabel* desc = [self normalText:NSLocalizedString(@"UI0030_Text1", nil)
                            fontSize:12.0f
                       textAlignment:NSTextAlignmentLeft
                           textColor:[ColorUtil textColorAccountOpenDefault]
                               width:frame.size.width - 15 * 2
                          marginLeft:15.0f];
    [view addBlankWithHeight:20.0f];
    [view addView:desc];
    
    // Scale計算
    UIImage* image = [UIImage imageNamed:@"LI_btn_top-super-loan-out"];
    float width = (view.frame.size.width - 15 * 2) / 2;
    float imageScale = width / image.size.width;
    
    // スーパーローン
    self.superLoanButton = [self imageButton:[UIImage imageNamed:@"LI_btn_top-super-loan-out"]
                              hilightedImage:[UIImage imageNamed:@"LI_btn_top-super-loan-hover"]
                               disablesIamge:nil
                                  imageScale:imageScale];
    [self.superLoanButton addTarget:self
                             action:@selector(selectApplyLoanAction:)
                   forControlEvents:UIControlEventTouchUpInside];
    self.superLoanButton.frame = CGRectMake(15,
                                            0,
                                            self.superLoanButton.frame.size.width,
                                            self.superLoanButton.frame.size.height);
    
    // 教育ローン
    self.educationLoanButton = [self imageButton:[UIImage imageNamed:@"LI_btn_top-education-loan-out"]
                                  hilightedImage:[UIImage imageNamed:@"LI_btn_top-education-loan-hover"]
                                   disablesIamge:nil
                                      imageScale:imageScale];
    [self.educationLoanButton addTarget:self
                                 action:@selector(selectApplyEducationLoanAction:)
                       forControlEvents:UIControlEventTouchUpInside];
    self.educationLoanButton.frame = CGRectMake(self.superLoanButton.frame.origin.x +
                                                self.superLoanButton.frame.size.width,
                                                0,
                                                self.educationLoanButton.frame.size.width,
                                                self.educationLoanButton.frame.size.height);

    // 預金口座の氏名・住所変更
    self.personalInfoButton = [self imageButton:[UIImage imageNamed:@"LI_btn_top-personal-info-out"]
                                 hilightedImage:[UIImage imageNamed:@"LI_btn_top-personal-info-hover"]
                                  disablesIamge:nil
                                     imageScale:imageScale];
    [self.personalInfoButton addTarget:self
                                action:@selector(selectCustomerAttributeAction:)
                      forControlEvents:UIControlEventTouchUpInside];
    self.personalInfoButton.frame = CGRectMake(15, 0,
                                               self.personalInfoButton.frame.size.width,
                                               self.personalInfoButton.frame.size.height);
    
    // マイナンバー
    self.myNumberButton = [self imageButton:[UIImage imageNamed:@"LI_btn_top-my-number-out"]
                             hilightedImage:[UIImage imageNamed:@"LI_btn_top-my-number-hover"]
                              disablesIamge:nil
                                 imageScale:imageScale];
    [self.myNumberButton addTarget:self
                            action:@selector(selectMyNumberAction:)
                  forControlEvents:UIControlEventTouchUpInside];
    self.myNumberButton.frame = CGRectMake(self.personalInfoButton.frame.origin.x + self.personalInfoButton.frame.size.width,
                                           0,
                                           self.myNumberButton.frame.size.width,
                                           self.myNumberButton.frame.size.height);

    // row1
    [view addBlankWithHeight:15.0f];
    UIView* panel1 = [[UIView alloc]initWithFrame:CGRectMake(0, 0, 0, 0)];
    [panel1 addSubview:self.superLoanButton];
    [panel1 addSubview:self.educationLoanButton];
    panel1.frame = CGRectMake(0, 0, view.frame.size.width, self.superLoanButton.frame.size.height);
    [view addView:panel1];
    
    // row2
    UIView* panel2 = [[UIView alloc]initWithFrame:CGRectMake(0,
                                                             0,
                                                             view.frame.size.width,
                                                             self.personalInfoButton.frame.size.height)];
    [panel2 addSubview:self.personalInfoButton];
    [panel2 addSubview:self.myNumberButton];
    [view addView:panel2];

    // 説明
    desc = [self normalText:NSLocalizedString(@"UI0030_Text2", nil)
                   fontSize:11.0f
              textAlignment:NSTextAlignmentLeft
                  textColor:[ColorUtil textColorAccountOpenDefault]
                      width:frame.size.width - 15 * 2
                 marginLeft:15.0f];
    [view addView:desc];
    NSMutableParagraphStyle *style = [[NSParagraphStyle defaultParagraphStyle] mutableCopy];
    style.headIndent = 12;
    NSDictionary *attributes = @{NSParagraphStyleAttributeName: style};
    NSAttributedString *richText = [[NSAttributedString alloc] initWithString:NSLocalizedString(@"UI0030_Text2", nil)
                                               attributes:attributes];
    desc.attributedText = richText;
    [view addBlankWithHeight:15.0f];
    
    return view;
}

//普通Textを作成する
- (UILabel *)normalText:(NSString *)string
               fontSize:(float)fontSize
          textAlignment:(NSTextAlignment)textAlignment
              textColor:(UIColor * _Nonnull)textColor
                  width:(float)width
             marginLeft:(float)marginLeft
{
    UILabel * label = [[UILabel alloc] initWithFrame:CGRectMake(marginLeft, 0, width, 0)];
    label.text = string;
    label.backgroundColor = [UIColor clearColor];
    label.textColor = textColor;
    label.textAlignment = textAlignment;
    label.font = [UIFont systemFontOfSize:fontSize];
    label.numberOfLines = 0;
    [label sizeToFit];
    if (textAlignment == NSTextAlignmentCenter) {
        label.frame = CGRectMake(label.frame.origin.x, label.frame.origin.y, width, label.frame.size.height);
    }
    return label;
}

//リンクTextを作成する
- (UIView *)linkText:(NSString *)text
              action:(SEL)action
      rightAlignView:(UIView*)rightAlignView
{
    UIView * link = [self indicatorButtonWithTitle3:text
                                               rect:CGRectZero
                                               font:[UIFont boldSystemFontOfSize:12.0f]
                                             target:self
                                             action:action];
    
    float x = rightAlignView.frame.origin.x + rightAlignView.frame.size.width - link.frame.size.width;
    CGRect frame = CGRectMake(x, 0, link.frame.size.width, link.frame.size.height);
    link.frame = frame;
    
    return link;
}


#pragma mark - UIUXLITopStartViewDelegateメソッド実装
//口座開設開始ボタンイベント
- (void)startAccountOpenButtonAction:(UIButton *)button
{
    if ([self.uiuxLITopStartViewDelegate respondsToSelector:@selector(startAccountOpenButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLITopStartViewDelegate startAccountOpenButtonAction:button];
    }
}
//書類送付ボタンイベント
- (void)startSendPictureButtonAction:(UIButton *)button
{
    if ([self.uiuxLITopStartViewDelegate respondsToSelector:@selector(startSendPictureButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLITopStartViewDelegate startSendPictureButtonAction:button];
    }
}
//口座開設進捗状況の確認ボタンイベント
- (void)confirmAccountStatusButtonAction:(UIButton *)button
{
    if ([self.uiuxLITopStartViewDelegate respondsToSelector:@selector(confirmAccountStatusButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLITopStartViewDelegate confirmAccountStatusButtonAction:button];
    }
}


//ログイン開始ボタンイベント
- (void)startLoginButtonAction:(UIButton *)button
{
    if ([self.uiuxLITopStartViewDelegate respondsToSelector:@selector(startLoginButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLITopStartViewDelegate startLoginButtonAction:button];
    }
}
//機種変更後クイックログインボタンイベント
- (void)startQrChangeDeviceButtonAction:(UIButton *)button
{
    if ([self.uiuxLITopStartViewDelegate respondsToSelector:@selector(startQrChangeDeviceButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLITopStartViewDelegate startQrChangeDeviceButtonAction:button];
    }
}

/**
 * スーパーローン申込が選択された場合の処理
 */
- (void)selectApplyLoanAction:(UIButton *)button
{
    if ([self.uiuxLITopStartViewDelegate respondsToSelector:@selector(selectApplyLoanAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLITopStartViewDelegate selectApplyLoanAction:button];
    }
}

/**
 * 教育ローン申込が選択された場合の処理
 */
- (void)selectApplyEducationLoanAction:(UIButton *)button
{
    if ([self.uiuxLITopStartViewDelegate respondsToSelector:@selector(selectApplyEducationLoanAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLITopStartViewDelegate selectApplyEducationLoanAction:button];
    }
}

/**
 * 登録情報変更申込が選択された場合の処理
 */
- (void)selectCustomerAttributeAction:(UIButton *)button
{
    if ([self.uiuxLITopStartViewDelegate respondsToSelector:@selector(selectCustomerAttributeAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLITopStartViewDelegate selectCustomerAttributeAction:button];
    }
}

/**
 * マイナンバーのご提供が選択された場合の処理
 */
- (void)selectMyNumberAction:(UIButton *)button
{
    if ([self.uiuxLITopStartViewDelegate respondsToSelector:@selector(selectMyNumberAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLITopStartViewDelegate selectMyNumberAction:button];
    }
}

//プライバシーボタンイベント
- (void)onPrivacyPolicyButtonAction:(UIButton *)button
{
    if ([self.uiuxLITopStartViewDelegate respondsToSelector:@selector(onPrivacyPolicyButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLITopStartViewDelegate onPrivacyPolicyButtonAction:button];
    }
}
@end
