//
//  UIUXLILoginPersonalIdentificationNumberSettingView.m
//  RakutenBank
//
//  Created by kobayashi8156 on 2014/04/23.
//
//

#import "UIUXLILoginPersonalIdentificationNumberSettingView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "UIUXLIUtilMacro.h"
#import "UIUXLICompareCheckInput.h"
#import "ValidatedTextField+ConfigUtil.h"


@interface UIUXLILoginPersonalIdentificationNumberSettingView () <UIUXLICompareCheckInputDelegate, UIUXLILoginPersonalIdentificationNumberSettingViewDelegate>

@property (nonatomic, strong) UIUXLICompareCheckInput * inputField;
@property (nonatomic, strong) UIButton * settingButton;

@end

@implementation UIUXLILoginPersonalIdentificationNumberSettingViewDTO

@end

@implementation UIUXLILoginPersonalIdentificationNumberSettingView
#pragma mark - LIBaseScrollViewクラスのメソッドオーバーライド
- (void)loadInitialViews
{
    [self addBlankWithHeight:k_VmarginContentsTop];
    
    [self addPassMessText];
    [self addBlankWithHeight:5.0f];
    
    [self addLoginPassMessText];
    [self addBlankWithHeight:24.0f];
    
    [self addCSFImage];
    [self addBlankWithHeight:24.0f];

    [self addUserIDCondition];
    [self addBlankWithHeight:15.0f];
    
    [self addInputView];
    [self addBlankWithHeight:15.0f];
    
    [self addSettingButton];
    [self addBlankWithHeight:k_VmarginContentsBottom];
    
    [self startLoading];
}

//入力欄クリアメソッド
- (void)clearInput
{
    //暗証番号入力欄を空欄にする
    [self.inputField.inputField.inputField clearText];
    //暗証番号入力欄を空欄にする
    [self.inputField.checkInputField.inputField clearText];
}

#pragma mark - ビューの初期化メソッド群
- (void)addPassMessText
{
    NSString * textString =
    [NSString stringWithFormat:
     NSLocalizedString(@"UI0043_AboutPIN", nil),
     NSLocalizedString(@"Common_PIN", nil)];
    UILabel * text = [self uiLableWithWidth:(self.frame.size.width - ( k_HmarginTextBox * 2))
                                       text:textString
                                        textColor:[ColorUtil textColorBlack]
                                         fontSize:k_FontSize_DefaultMsg
                                           isbold:NO];
    CHANGE_ORIGIN_X(text, k_HmarginTextBox);
    [self addView:text];
}

- (void)addLoginPassMessText
{
    NSString * textString =
    [NSString stringWithFormat:
     NSLocalizedString(@"UI0043_PINNoteOfCaution", nil),
     NSLocalizedString(@"Common_PIN", nil),
     NSLocalizedString(@"Common_LoginPassword", nil)];
    UILabel * text = [self uiLableWithWidth:VIEW_WIDTH_TEXTBOX
                                       text:textString
                                  textColor:[ColorUtil textColorBlack]
                                   fontSize:14.0f
                                     isbold:NO];
    text.textAlignment = NSTextAlignmentLeft;
    [self addViewAtHCenter:text];
}

- (void)addCSFImage
{
    // CSF画像
    RakutenBankAppDelegate *appDelegate = [[UIApplication sharedApplication] delegate];
    UIView * csfImageView;
    csfImageView = [[UIView alloc] initWithFrame:CGRectMake(16.0f, 0, self.frame.size.width - (16.0f * 2), 0)];
    csfImageView.backgroundColor = UIColor.clearColor;
    if (appDelegate.isProperBranch) {
        // プロパー支店
        [self pushLoadUrl:appDelegate.externalFileDto.passwordNumberSettingInfo01Img forView:csfImageView];
    } else {
        // プロパー支店以外(提携支店)
        [self pushLoadUrl:appDelegate.externalFileDto.passwordNumberSettingInfo01TeikeishitenImg forView:csfImageView];
    }
    [self addViewAtHCenter:csfImageView];
}

- (void) addUserIDCondition
{
    NSString * titleString =
    [NSString stringWithFormat:
     NSLocalizedString(@"UI0043_PINConditionTitle", nil),
     NSLocalizedString(@"Common_PIN", nil)];
    
    NSString * condition1String = [NSString stringWithFormat:NSLocalizedString(@"UI0043_PINCondition1", nil)];
    NSString * condition2String = [NSString stringWithFormat:NSLocalizedString(@"UI0043_PINCondition2", nil)];
    NSString * condition3String = [NSString stringWithFormat:NSLocalizedString(@"UI0043_PINCondition3", nil)];

    NSArray * conditionStrings = @[condition1String,
                                   condition2String,
                                   condition3String];

    [self addViewAtHCenter:[self itemizedTextBox2:titleString itemizedTexts:conditionStrings]];
}

- (void)addInputView
{
    NSString * titleString = [NSString stringWithFormat:NSLocalizedString(@"Common_PIN", nil)];
    
    CGRect inputFrame = CGRectMake(0.0f, 0.0f, VIEW_WIDTH_TEXTBOX, 0.0f);
    UIUXLICompareCheckInput * input = [[UIUXLICompareCheckInput alloc] initWithFrame:inputFrame];
    input.inputField.inputFieldSize = CGSizeMake(k_WidthTextFieldShort, k_HeightTextField);
    input.inputField.title = titleString;
    input.inputField.inputField.keyboardType = UIKeyboardTypeDecimalPad;
    input.inputField.inputField.returnKeyType = UIReturnKeyNext;
    input.inputField.inputField.secureTextEntry = YES;
    input.checkInputField.inputField.keyboardType = UIKeyboardTypeDecimalPad;
    input.checkInputField.inputField.secureTextEntry = YES;
    [input.inputField.inputField configPIN];
    [input configCheckInputField];
    input.uiuxLICompareCheckInputDelegate = self;
    [self addViewAtHCenter:input];
    
    self.inputField = input;
}

- (void)addSettingButton
{
    self.settingButton = [self imageButton:[UIImage imageNamed:@"LI_btn_orange420_03"]
                            hilightedImage:[UIImage imageNamed:@"LI_btn_orange420_03_hover"]
                             disablesIamge:[UIImage imageNamed:@"LI_btn_orange420_03_inactive"]
                                imageScale:0.5f];
    self.settingButton.enabled = NO;
    [self.settingButton addTarget:self action:@selector(settingButtonAction:) forControlEvents:UIControlEventTouchUpInside];
    [self addViewAtHCenter:self.settingButton];
}

- (void)changeInputTextStatus:(UIUXLICompareCheckInput *)uiuxLICompareCheckInput
{
    self.settingButton.enabled = uiuxLICompareCheckInput.inputEnable;
}

- (void)settingButtonAction:(UIButton *)button
{
    if ([self.uIUXLILoginPersonalIdentificationNumberSettingViewDelegate respondsToSelector:@selector(settingButtonAction:)]) {
        [self.uIUXLILoginPersonalIdentificationNumberSettingViewDelegate settingButtonAction:button];
    }
}

#pragma mark - プロパティアクセサ
- (NSObject *)viewDTO
{
    if (!self.inputField) {
        return nil;
    }
    
    // 毎回新規インスタンスを生成することに注意
    UIUXLILoginPersonalIdentificationNumberSettingViewDTO * dto = UIUXLILoginPersonalIdentificationNumberSettingViewDTO.new;
    
    dto.pin = self.inputField.inputField.inputField.text;
    dto.pinConfirm = self.inputField.checkInputField.inputField.text;
    
    return dto;
}

@end
