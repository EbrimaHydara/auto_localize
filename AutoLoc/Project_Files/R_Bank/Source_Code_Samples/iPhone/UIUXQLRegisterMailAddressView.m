//
//  UIUXQLRegisterMailAddressView.m
//  RakutenBank
//
//  Created by nw_y.ito on 2014/04/22.
//
//

#import "UIUXQLRegisterMailAddressView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "UIUXLIUtilMacro.h"
#import "MixedTypeTextView.h"
#import "RBInputTextField.h"
#import "ValidatedTextField+ConfigUtil.h"

@interface UIUXQLRegisterMailAddressView () <RBInputTextFieldDelegate, UIUXQLRegisterMailAddressViewDelegate, ToggleSelectDelegate>

@property (nonatomic) RBInputTextField * mailAddressInput; ///< メールアドレス入力欄
@property (nonatomic) RBInputTextField * oneTimeKeyInput;  ///< ワンタイムキー入力欄
@property (nonatomic) UIButton * sendOneTimeKeyButton;     ///< ワンタイムキー発行ボタン
@property (nonatomic) UIButton * submitButton;             ///< 認証ボタン
@property (nonatomic) UIButton * mailAddressSelect;        ///< メールアドレス選択欄
@property (nonatomic) ToggleSelect * otherMailAddressToggleButton; ///< 別のメールアドレスを設定トグルボタン
@property (nonatomic) LIStackLayoutView * otherMailAddressInputView;    ///< 別のメールアドレスを設定押下後の追加表示View
@property (nonatomic) UIView * sendOneTimeKeyFieldView;    ///< ワンタイムキー送信後の追加表示View
@property (nonatomic) UIUXQLRegisterMailAddressViewDTO * viewDto;   ///< 表示データモデル

@end

@implementation UIUXQLRegisterMailAddressViewDTO

@end

@implementation UIUXQLRegisterMailAddressView

#pragma mark - イニシャライザ

- (id)initWithFrame:(CGRect)frame viewDTO:(NSObject *)viewDTO
{
    _viewDto = (UIUXQLRegisterMailAddressViewDTO *)viewDTO;
    
    self = [super initWithFrame:frame viewDTO:viewDTO];
    if (!self) {
        return nil;
    }
    
    return self;
}

#pragma mark - LIBaseScrollViewクラスのメソッドオーバーライド
// ビューの初期化時にサブビューを構築する
- (void)loadInitialViews
{
    RakutenBankAppDelegate * appDelegate = [[UIApplication sharedApplication] delegate];

    //ビューの初期化
    //メッセージ1
    UIView * messasge1View;
    NSString * text1 = [NSString stringWithFormat:
                        NSLocalizedString(@"UI0150_Text1", nil),
                        NSLocalizedString(@"Common_OneTimeAuth", nil)];
    if (self.viewDto.isMailDeliveryManagement) {
        // 「送達管理対象フラグ」が「1:対象」
        NSString * csfImage1URL;
        if (self.viewDto.mailAddressList.count == 0) {
        // 「メールアドレス件数」が0件
            csfImage1URL = appDelegate.externalFileDto.checkStatusAddressControlInsertInputNotRegisteredMailImg;
        } else {
            // 「メールアドレス件数」が0件でない
            csfImage1URL = appDelegate.externalFileDto.checkStatusAddressControlInsertInputRegisteredMailImg;
        }

        messasge1View = [[UIView alloc] initWithFrame:CGRectMake(16.0f, 0, self.frame.size.width - (16.0f * 2), 0)];
        messasge1View.backgroundColor = UIColor.clearColor;
        [self pushLoadUrl:csfImage1URL forView:messasge1View];
    } else {
        // 「送達管理対象フラグ」が「0:対象外」
        messasge1View = [self uiLableWithWidth:self.frame.size.width - (16.0f * 2)
                                          text:text1
                                     textColor:[ColorUtil textColorBlack]
                                      fontSize:k_FontSize_DefaultMsg
                                        isbold:NO];
        CHANGE_ORIGIN_X(messasge1View, 16.0f);
    }
    
    //メッセージ2
    UIView * messasge2View;
    NSString * csfImage2URL;
    csfImage2URL = appDelegate.externalFileDto.checkStatusAddressControlInsertInputInfo01Img;
    messasge2View = [[UIView alloc] initWithFrame:CGRectMake(16.0f, 0, self.frame.size.width - (16.0f * 2), 0)];
    messasge2View.backgroundColor = UIColor.clearColor;
    [self pushLoadUrl:csfImage2URL forView:messasge2View];

    //メッセージ3 (赤枠)
    UIView * messasge3View = [self textBox];

    //ワンタイムキー発行ボタン
    self.sendOneTimeKeyButton = [self imageButton:[UIImage imageNamed:@"LI_btn_gray420_04"]
                                   hilightedImage:[UIImage imageNamed:@"LI_btn_gray420_04_hover"]
                                    disablesIamge:[UIImage imageNamed:@"LI_btn_gray420_04_inactive"]
                                       imageScale:0.5f];
    self.sendOneTimeKeyButton.enabled = NO;   //初期値は無効
    [self.sendOneTimeKeyButton addTarget:self
                                  action:@selector(sendOneTimeKeyButtonAction:)
                        forControlEvents:UIControlEventTouchUpInside];
    //認証ボタン
    self.submitButton = [self imageButton:[UIImage imageNamed:@"LI_btn_orange420_04"]
                           hilightedImage:[UIImage imageNamed:@"LI_btn_orange420_04_hover"]
                            disablesIamge:[UIImage imageNamed:@"LI_btn_orange420_04_inactive"]
                               imageScale:0.5f];
    self.submitButton.enabled = NO;   //初期値は無効
    [self.submitButton addTarget:self
                          action:@selector(submitButtonAction:)
                forControlEvents:UIControlEventTouchUpInside];
    
    //ビュー追加
    [self addBlankWithHeight:24.0f];
    
    [self addViewAtHCenter:messasge1View];
    [self addBlankWithHeight:24.0f];
    [self addViewAtHCenter:messasge2View];
    [self addBlankWithHeight:24.0f];
    if (self.viewDto.isMailDeliveryManagement && (self.viewDto.mailAddressList.count == 0)) {
        // 「送達管理対象フラグ」が「1:対象」かつ、「メールアドレス件数」が0件の場合
        [self addViewAtHCenter:messasge3View];
        [self addBlankWithHeight:24.0f];
    }

    [self addViewAtHCenter:[self hBarLevel1]];
    
    BOOL mailAddressflag = (self.viewDto.mailAddressList && (self.viewDto.mailAddressList.count > 0));
    //1.メールアドレスの設定
    [self addMailAddressSettingView:mailAddressflag];
    
    [self addViewAtHCenter:[self hBarLevel1]];
    
    //2.ワンタイムキーを発行
    [self addOneTimeKeyMakeView];
    
    [self addViewAtHCenter:[self hBarLevel1]];
    
    //3.ワンタイムキーを入力
    [self addOneTimeKeyInputView];
    
    [self addViewAtHCenter:[self hBarLevel1]];
    [self addBlankWithHeight:20.0f];
    
    //認証ボタン
    [self addViewAtHCenter:self.submitButton];
    [self addBlankWithHeight:k_VmarginContentsBottom];
    
    // CSF画像読み込み開始
    [self startLoading];
}

#pragma mark - ビューの初期化メソッド群
//1.メールアドレスの設定
- (void)addMailAddressSettingView:(BOOL)mailAddressFlag
{
    //文言ロード
    NSString * heading1 = NSLocalizedString(@"UI0150_Heading1", nil);
    NSString * text2 = NSLocalizedString(@"UI0150_Text2", nil);
    NSString * text3 = NSLocalizedString(@"UI0150_Text3", nil);
    
    NSString * placeholderMailaddress = NSLocalizedString(@"UI0150_Placeholder_MailAddress", nil);
    NSString * label1 = NSLocalizedString(@"UI0150_Label1", nil);
    
    //メッセージ2
    UILabel * text2Label = [self uiLableWithWidth:VIEW_WIDTH_LEVEL2
                                             text:text2
                                        textColor:[ColorUtil textColorBlack]
                                         fontSize:k_FontSize_DefaultMsg
                                           isbold:NO];
    CHANGE_ORIGIN_X(text2Label, k_HmarginLevel2)
    //メッセージ3
    UILabel * text3Label = [self uiLableWithWidth:VIEW_WIDTH_LEVEL2
                                             text:text3
                                        textColor:[ColorUtil textColorBlack]
                                         fontSize:k_FontSize_DefaultMsg
                                           isbold:NO];
    CHANGE_ORIGIN_X(text3Label, k_HmarginLevel2)
    //メールアドレス選択欄
    NSString * initText = @"メールアドレスを選択";
    NSInteger tag = 1;
    self.mailAddressSelect = [self pickerInputLabelWithInitText:initText
                                                    praceholder:placeholderMailaddress
                                                            tag:tag];
    //メールアドレス入力欄
    self.mailAddressInput = [self inputWithTitle:nil inputWidth:k_WidthTextFieldLong];
    [self.mailAddressInput.inputField configMailAddress];
    self.mailAddressInput.rbInputTextFieldDelegate = self;
    
    [self addBlankWithHeight:15.0f];
    
    [self addView:[self stepViewWithNumber:1 title:heading1]];
    [self addBlankWithHeight:15.0f];
    
    if (mailAddressFlag) {
        self.otherMailAddressInputView = [self otherMailAddressInputWithInputLabel];
        
        //メールアドレス登録済み
        [self addView:text2Label];
        [self addBlankWithHeight:20.0f];
        
        //メールアドレス選択欄
        [self addViewAtHCenter:self.mailAddressSelect];
        [self addBlankWithHeight:20.0f];
        
        [self addViewAtHCenter:[self hBarLevel1]];
        
        //別のメールアドレスを設定
        UIView * toggleUIView = [self toggleOtherMailAddressTitle:label1 delegate:self tag:0 value:0];
        for (UIView * view in toggleUIView.subviews) {
            if ([view isMemberOfClass:[ToggleSelect class]]) {
                //イベント処理のため、トグルセレクトを保持
                self.otherMailAddressToggleButton = (ToggleSelect *)view;
                break;
            }
        }
        [self addView:toggleUIView];
    } else {
        //メールアドレス選択欄を無効化する　発行ボタン有効チェック処理でチェックしているため
        self.mailAddressSelect.enabled = NO;
        
        [self addView:text3Label];
        [self addBlankWithHeight:20.0f];
        
        //メールアドレス未登録
        //メールアドレス入力欄
        [self addViewAtHCenter:self.mailAddressInput];
        [self addBlankWithHeight:20.0f];
    }
}

//2.ワンタイムキーを発行
- (void)addOneTimeKeyMakeView
{
    //文字列ロード
    NSString * heading2 = [NSString stringWithFormat:
                           NSLocalizedString(@"UI0150_Heading2", nil),
                           NSLocalizedString(@"Common_OneTimeKey", nil)];
    NSString * text41 = NSLocalizedString(@"UI0150_Text4_1", nil);
    NSString * text42 = NSLocalizedString(@"UI0150_Text4_2", nil);
    NSString * text43 = NSLocalizedString(@"UI0150_Text4_3", nil);
    NSString * text44 = NSLocalizedString(@"UI0150_Text4_4", nil);
    
    //mttデータ作成
    NSArray * guidMsgTypeData
    = @[//1行目
        @[@{k_MTTDataKeyText  : text41,
            k_MTTDataKeyfont  : [UIFont boldSystemFontOfSize:k_FontSize_DefaultMsg],
            k_MTTDataKeycolor : [ColorUtil textColorBlack]},
          @{k_MTTDataKeyText  : text42,
            k_MTTDataKeyfont  : [UIFont systemFontOfSize:k_FontSize_DefaultMsg],
            k_MTTDataKeycolor : [ColorUtil textColorBlack]}],
        //2行目
        @[@{k_MTTDataKeyText  : text43,
            k_MTTDataKeyfont  : [UIFont systemFontOfSize:k_FontSize_DefaultMsg],
            k_MTTDataKeycolor : [ColorUtil textColorBlack]}],
        //3行目
        @[@{k_MTTDataKeyText  : text44,
            k_MTTDataKeyfont  : [UIFont systemFontOfSize:k_FontSize_DefaultMsg],
            k_MTTDataKeycolor : [ColorUtil textColorBlack]}]];
    //テキスト
    MixedTypeTextView * textView = [[MixedTypeTextView alloc]
                                    initWithMTTData:guidMsgTypeData
                                    width:VIEW_WIDTH_LEVEL2];
    CHANGE_ORIGIN_X(textView, k_HmarginLevel2);
    
    //ワンタイムキー入力欄
    self.oneTimeKeyInput = [self inputWithTitle:nil inputWidth:k_WidthTextFieldShort];
    [self.oneTimeKeyInput.inputField configToOneTimeKey];
    self.oneTimeKeyInput.rbInputTextFieldDelegate = self;
    
    [self addBlankWithHeight:20.0f];
    
    [self addView:[self stepViewWithNumber:2 title:heading2]];
    [self addBlankWithHeight:15.0f];
    
    //書式混在メッセージ
    [self addView:textView];
    [self addBlankWithHeight:20.0f];
    
    //発行ボタン
    [self addViewAtHCenter:self.sendOneTimeKeyButton];
    [self addBlankWithHeight:20.0f];
}

//赤枠テキストエリア
- (UIView *)textBox
{
    CGRect frame = CGRectMake(16.0f, 0.0f, self.frame.size.width - (16.0f * 2), 0.0f);
    LIStackLayoutView * stackView = [[LIStackLayoutView alloc] initWithFrame:frame];
    [self configBorderToBackgroundStyle:stackView
                        BackgroundColor:[UIColor whiteColor]
                            borderColor:[ColorUtil textBoxBorderRed]];
    
    //枠内メッセージ
    UILabel * sectionText1Label = [self uiLableWithWidth:frame.size.width - (16.0f * 2)
                                                   text:@"お申込み時にご登録いただいたメールアドレス"
                                              textColor:[ColorUtil textColorBlack]
                                               fontSize:14.0f
                                                 isbold:YES];
    CHANGE_ORIGIN_X(sectionText1Label, 16.0f)
    UILabel * sectionText2Label = [self uiLableWithWidth:frame.size.width - (16.0f * 2)
                                                   text:self.viewDto.mailDeliveryManagementAddress
                                              textColor:[ColorUtil textColorBlack]
                                               fontSize:12.0f
                                                 isbold:NO];
    CHANGE_ORIGIN_X(sectionText2Label, 16.0f)

    [stackView addBlankWithHeight:16.0f];
    [stackView addView:sectionText1Label];
    [stackView addBlankWithHeight:16.0f];
    [stackView addView:sectionText2Label];
    [stackView addBlankWithHeight:16.0f];
    
    return stackView;
}

//3.ワンタイムキーを入力
- (void)addOneTimeKeyInputView
{
    //文言ロード
    NSString * heading3 = [NSString stringWithFormat:
                           NSLocalizedString(@"UI0150_Heading3", nil),
                           NSLocalizedString(@"Common_OneTimeKey", nil)];
    NSString * text51 = [NSString stringWithFormat:
                         NSLocalizedString(@"UI0150_Text5_1", nil),
                         NSLocalizedString(@"Common_OneTimeKey", nil)];
    NSString * text52 = NSLocalizedString(@"UI0150_Text5_2", nil);
    NSString * text53 = NSLocalizedString(@"UI0150_Text5_3", nil);
    
    //mttデータ作成
    NSArray * guidMsgTypeData
    = @[//1行目
        @[@{k_MTTDataKeyText  : text51,
            k_MTTDataKeyfont  : [UIFont systemFontOfSize:k_FontSize_DefaultMsg],
            k_MTTDataKeycolor : [ColorUtil textColorBlack]}],
        //2行目
        @[@{k_MTTDataKeyText  : text52,
            k_MTTDataKeyfont  : [UIFont boldSystemFontOfSize:k_FontSize_DefaultMsg],
            k_MTTDataKeycolor : [ColorUtil textColorBlack]},
          @{k_MTTDataKeyText  : text53,
            k_MTTDataKeyfont  : [UIFont systemFontOfSize:k_FontSize_DefaultMsg],
            k_MTTDataKeycolor : [ColorUtil textColorBlack]}]];
    
    //折り返しが発生しないように幅を微調整(+10)して作成
    MixedTypeTextView * textView = [[MixedTypeTextView alloc]
                                    initWithMTTData:guidMsgTypeData
                                    width:VIEW_WIDTH_LEVEL2 + 10.0f];
    CHANGE_ORIGIN_X(textView, k_HmarginLevel2);
    
    [self addBlankWithHeight:20.0f];
    
    [self addView:[self stepViewWithNumber:3 title:heading3]];
    [self addBlankWithHeight:15.0f];
    
    //書式混在メッセージ
    [self addView:textView];
    [self addBlankWithHeight:20.0f];
    
    //ワンタイムキー入力欄
    [self addViewAtHCenter:self.oneTimeKeyInput];
    [self addBlankWithHeight:20.0f];
}

//タイトル付き入力欄
- (RBInputTextField *)inputWithTitle:(NSString *)title inputWidth:(CGFloat)width
{
    CGRect frame = CGRectMake(0.0f, 0.0f, width, k_HeightTextField);
    RBInputTextField * input = [[RBInputTextField alloc] initWithFrame:frame];
    input.title = title;
    
    return input;
}

//ピッカー選択入力欄
- (UIButton *)pickerInputLabelWithInitText:(NSString *)initText
                               praceholder:(NSString *)praceholder
                                       tag:(NSInteger)tag
{
    //リストボタンイメージ配置
    UIImage * image = [UIImage imageNamed:@"CMN_Icon_Dropdown"];
    UIImageView * imageView = [[UIImageView alloc]initWithImage:image];
    RESIZE_WITH_SCALE(imageView, 0.5f);
    MOVE_WITH_ORIGIN(imageView, VIEW_WIDTH_LEVEL2 - imageView.frame.size.width, 0.0f);
    
    UIColor * textColor;
    if ([initText isEqualToString:praceholder]) {
        //プレースホルダーの場合
        textColor = [ColorUtil textColorGlay];
    } else {
        //プレースホルダーでない場合
        textColor = [ColorUtil textColorBlack];
    }
    
    //ボタン配置
    UIButton * dummyButton = [UIButton buttonWithType:UIButtonTypeCustom];
    dummyButton.frame = CGRectMake(0.0f, 0.0f, VIEW_WIDTH_LEVEL2, imageView.frame.size.height);
    //テキスト設定
    [dummyButton setTitleColor:textColor forState:UIControlStateNormal];
    [dummyButton setTitleColor:[ColorUtil textColorGlay] forState:UIControlStateDisabled];
    [dummyButton setTitle:initText forState:UIControlStateNormal];
    dummyButton.titleLabel.font = [UIFont systemFontOfSize:14.0];
    dummyButton.contentHorizontalAlignment = UIControlContentHorizontalAlignmentLeft;
    dummyButton.titleEdgeInsets = UIEdgeInsetsMake(0.0, 10.0,
                                                   0.0, imageView.frame.size.width + 10);
    dummyButton.titleLabel.lineBreakMode = NSLineBreakByTruncatingTail;
    //外観設定
    dummyButton.backgroundColor = [UIColor whiteColor];
    dummyButton.layer.borderColor = [ColorUtil inputBoxBorderLightGray].CGColor;
    dummyButton.layer.borderWidth = 1.0f;
    dummyButton.layer.cornerRadius = 5.0f;
    //イベント設定
    dummyButton.exclusiveTouch = YES;
    [dummyButton addTarget:self action:@selector(onPickerInputTap:) forControlEvents:UIControlEventTouchUpInside];
    dummyButton.tag = tag;
    
    [dummyButton addSubview:imageView];
    
    return dummyButton;
}

//別のメールアドレスを設定作成メソッド
- (UIView *)toggleOtherMailAddressTitle:(NSString *)title
                               delegate:(id<ToggleSelectDelegate>)delegate
                                    tag:(NSInteger)tag
                                  value:(NSInteger)value
{
    //定数定義
    const CGFloat spaceHeight = 10.0f;
    
    //ベースビュー作成
    UIView * baseView = [[UIView alloc]
                         initWithFrame:CGRectMake(k_HmarginLevel2, 0.0f,
                                                  VIEW_WIDTH_LEVEL2, 0)];
    
    //タイトル作成 タップイベントがあるのでToggleSelectiで作成
    UIImage *normalImage = [UIImage imageNamed:@"LI_BTN_AccordionToOpen.png"];
    UIImage *selectedImage = [UIImage imageNamed:@"LI_BTN_AccordionToClose.png"];
    ToggleSelect * selecter = [[ToggleSelect alloc]
                               initWithNormalImage:normalImage
                               selectedImage:selectedImage
                               imageReduxtionScale:0.5
                               text:title
                               textColor:[ColorUtil textColorBlack]
                               font:[UIFont boldSystemFontOfSize:k_FontSize_DefaultMsg]
                               textMargin:10.0f
                               origin:CGPointMake(0, spaceHeight)
                               witdh:baseView.frame.size.width];
    
    selecter.tag = tag;
    selecter.value = value;
    selecter.delegate = delegate;
    [baseView addSubview:selecter];
    
    //高さ調整
    CHANGE_HEIGHT(baseView, spaceHeight + selecter.frame.size.height + spaceHeight);
    
    return baseView;
}

//閉じる作成メソッド
- (UIView *)toggleCloseTitle:(NSString *)title
                    delegate:(id<ToggleSelectDelegate>)delegate
                         tag:(NSInteger)tag
                       value:(NSInteger)value
{
    //閉じるボタン追加
    UIImage * normalImage = [UIImage imageNamed:@"LI_i_ArrowUp_CloseOut.png"];
    UIImage * selectedImage = [UIImage imageNamed:@"LI_i_ArrowUp_CloseOut.png"];
    UIFont * font = [UIFont systemFontOfSize:k_FontSiez_AccountOpenGuidMsg];
    ToggleSelect * closeTextSelect = [[ToggleSelect alloc]
                                      initWithNormalImage:normalImage
                                      selectedImage:selectedImage
                                      imageReduxtionScale:0.5f
                                      text:title
                                      textColor:[ColorUtil textColorBlack]
                                      font:font
                                      textMargin:5.0f
                                      origin:CGPointMake(0, 0)
                                      witdh:VIEW_WIDTH_LEVEL2];
    closeTextSelect.iconPosition = ToggleSelectIconPositionRight;
    closeTextSelect.textAtSelected = title;
    closeTextSelect.tag = tag;
    closeTextSelect.value = value;
    closeTextSelect.delegate = self;
    closeTextSelect.selected = YES;
    CGFloat openTextSelectOriginX = self.frame.size.width
    - k_HmarginLevel2
    - closeTextSelect.frame.size.width;
    CHANGE_ORIGIN_X(closeTextSelect, openTextSelectOriginX);
    
    return closeTextSelect;
}

//別のメールアドレスを設定押下で表示されるView
- (LIStackLayoutView *)otherMailAddressInputWithInputLabel
{
    CGRect frame = CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f);
    LIStackLayoutView * view = [[LIStackLayoutView alloc] initWithFrame:frame];
    
    [view addBlankWithHeight:5.0f];
    
    //メールアドレス入力欄
    self.mailAddressInput.title = NSLocalizedString(@"UI0150_InputTitle_NewMailAddress", nil);
    [view addViewAtHCenter:self.mailAddressInput];
    [view addBlankWithHeight:20.0f];
    
    //閉じる
    [view addView:[self toggleCloseTitle:@"閉じる" delegate:self tag:1 value:1]];
    [view addBlankWithHeight:10.0f];
    
    return view;
}

//メールアドレスの状態を判定し、ワンタイムキー送信ボタンの有効無効を切り替える
- (void)checkSendOneTimeKeyButton
{
    if (self.mailAddressSelect && self.mailAddressSelect.enabled) {
        if(![self.mailAddressSelect.titleLabel.text
             isEqualToString:NSLocalizedString(@"UI0150_Placeholder_MailAddress", nil)]) {
            self.sendOneTimeKeyButton.enabled = YES;
        } else {
            self.sendOneTimeKeyButton.enabled = NO;
        }
    } else {
        if(self.mailAddressInput.inputField.inputTextEnable) {
            self.sendOneTimeKeyButton.enabled = YES;
        } else {
            self.sendOneTimeKeyButton.enabled = NO;
        }
    }
}

#pragma mark - RBInputTextFieldDelegateメソッド実装
- (void)changeInputTextStatus:(RBInputTextField *)rbInputTextField
{
    if (rbInputTextField == self.mailAddressInput) {
        //ワンタイムキー発行ボタンの有効無効判定
        [self checkSendOneTimeKeyButton];
    } else if (rbInputTextField == self.oneTimeKeyInput) {
        //認証ボタンの有効無効判定
        if (self.oneTimeKeyInput.inputField.inputTextEnable) {
            self.submitButton.enabled = YES;
        } else {
            self.submitButton.enabled = NO;
        }
    }
}

//文字入力制限を別途設定する
- (BOOL)isInputCharactersEnable:(RBInputTextField *)rbInputTextField newText:(NSString *)newText oldText:(NSString *)oldText
{
    if (rbInputTextField == self.mailAddressInput) {
        //メールアドレスのみ別途制限する(2byte文字は無効)
        NSInteger valueByte = [newText lengthOfBytesUsingEncoding:NSShiftJISStringEncoding];
        if ([newText length] == valueByte) {
            return YES;
        }else{
            return NO;
        }
    } else {
        //メールアドレス以外は追加の制限は行わない
        return YES;
    }
}

#pragma mark - ピッカー入力イベントメソッド

//ピッカー入力タップイベント
- (void)onPickerInputTap:(UIButton *)sender
{
    //ワンタイムキー入力欄でキーボードを開いていた場合はキーボードを閉じる
    [self.oneTimeKeyInput.inputField resignFirstResponder];
    
    if ([self.uiuxQLRegisterMailAddressViewDelegate respondsToSelector:@selector(onPickerInputTap:inputItem:selectedItem:)]) {
        [self.uiuxQLRegisterMailAddressViewDelegate onPickerInputTap:sender
                                                           inputItem:self.viewDto.mailAddressList
                                                        selectedItem:self.mailAddressSelect.titleLabel.text];
    }
}

//ピッカー入力で選択されたらよばれる
- (void)selectedPicker:(UIButton *)sender
             inputItem:(NSArray *)inputItem
        selectedString:(NSString *)selectedString
           selectedRow:(NSInteger)selectedRow
{
    [self.mailAddressSelect setTitle:selectedString forState:UIControlStateNormal];
    if (![selectedString isEqualToString:NSLocalizedString(@"UI0150_Placeholder_MailAddress", nil)]) {
        //プレースホルダー文言でない場合
        [self.mailAddressSelect setTitleColor:[ColorUtil textColorBlack]
                                     forState:UIControlStateNormal];
    }
}

//ピッカー入力終了時に呼ばれる
- (void)didFinishPicker:(UIButton *)sender
              inputItem:(NSArray *)inputItem
{
    //ワンタイムキー発行ボタンの有効無効判定
    [self checkSendOneTimeKeyButton];
}

#pragma mark - ToggleSelectDelegateメソッド実装、UIUXQLRegisterMailAddressViewDelegateメソッド実装
//トグルボタン(別のメールアドレスを設定)押下時に呼び出される。(ToggleSelectDelegate)
- (void)onToggleSelectTap:(ToggleSelect *)select
{
    if ([self.uiuxQLRegisterMailAddressViewDelegate respondsToSelector:@selector(onToggleSelectTap:)]) {
        //ピッカー制御のためコントローラー側に処理をしてもらう
        [self.uiuxQLRegisterMailAddressViewDelegate onToggleSelectTap:select];
    }
    
    if (select.tag == 0) {
        //別のメールアドレスを設定ボタン
        if (select.selected) {
            if(![self insertView:self.otherMailAddressInputView
                         atIndex:[self indexOfView:select.superview] + 1
                        animated:YES]) {
                select.selected = !select.selected;
            }
            //メールアドレス選択を無効に
            self.mailAddressSelect.enabled = NO;
            self.mailAddressSelect.backgroundColor = [ColorUtil inputDisabledBackgroundColor];
            self.viewDto.isFreeInputMode = YES;
        } else {
            if (![self removeViewAtIndex:[self indexOfView:select.superview] + 1
                                animated:YES]) {
                select.selected = !select.selected;
            }
            //メールアドレス選択を有効に
            self.mailAddressSelect.enabled = YES;
            self.mailAddressSelect.backgroundColor = [UIColor whiteColor];
            self.viewDto.isFreeInputMode = NO;
        }
    } else {
        //閉じるボタン
        if ([self removeViewAtIndex:[self indexOfView:select.superview]
                           animated:YES]) {
            select.selected = !select.selected;
        }
        self.otherMailAddressToggleButton.selected = NO;
        //メールアドレス選択を有効に
        self.mailAddressSelect.enabled = YES;
        self.mailAddressSelect.backgroundColor = [UIColor whiteColor];
    }
    //ワンタイムキー発行ボタンの有効無効判定
    [self checkSendOneTimeKeyButton];
}

#pragma mark - UIUXQLRegisterMailAddressViewDelegateメソッド実装
//ワンタイムキー発行ボタンイベント
- (void)sendOneTimeKeyButtonAction:(UIButton *)button
{
    if (self.mailAddressSelect && self.mailAddressSelect.enabled) {
        //メールアドレス選択からアドレスを取得
        self.viewDto.selectedMailAddress = self.mailAddressSelect.titleLabel.text;
    } else {
        //メールアドレス入力からアドレスを取得
        self.viewDto.selectedMailAddress = self.mailAddressInput.inputField.text;
    }
    
    if ([self.uiuxQLRegisterMailAddressViewDelegate respondsToSelector:@selector(sendOneTimeKeyButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxQLRegisterMailAddressViewDelegate sendOneTimeKeyButtonAction:button];
    }
}

//認証ボタンイベント
- (void)submitButtonAction:(UIButton *)button
{
    if ([self.uiuxQLRegisterMailAddressViewDelegate respondsToSelector:@selector(submitButtonAction:)]) {
        self.viewDto.oneTimeKey = self.oneTimeKeyInput.inputField.text;
        //同名のメソッドを呼ぶだけ
        [self.uiuxQLRegisterMailAddressViewDelegate submitButtonAction:button];
    }
}

// ワンタイムキー送信通知受信イベント
- (void)onOneTimeKeySentTo:(NSString *)mailAddress
{
    //ワンタイムキー送信後に表示するビューを生成
    UIView * view = [self sendOneTimeKeyField:@[mailAddress]];
    
    if ([self indexOfView:self.sendOneTimeKeyFieldView] == -1) {
        //ワンタイムキー発行後のViewを追加表示する
        [self insertViewAtHCenter:view
                          atIndex:[self indexOfView:self.sendOneTimeKeyButton] + 2
                         animated:NO];
    } else {
        //ワンタイムキー発行後のViewを再表示する
        [self removeViewAtIndex:[self indexOfView:self.sendOneTimeKeyButton] + 2
                       animated:NO];
        [self insertViewAtHCenter:view
                          atIndex:[self indexOfView:self.sendOneTimeKeyButton] + 2
                         animated:NO];
    }
    self.sendOneTimeKeyFieldView = view;
}

@end
