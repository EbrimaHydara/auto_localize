//
//  UIUXLILoginPasswordIssueCompleteView.m
//  RakutenBank
//
//  Created by sugiyama8067 on 2014/04/26.
//
//

#import "UIUXLILoginPasswordIssueCompleteView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "RBInputTextField.h"
#import "ValidatedTextField+ConfigUtil.h"

#pragma mark - 表示データモデル定義
@implementation UIUXLILoginPasswordIssueCompleteViewDTO

@end

@interface UIUXLILoginPasswordIssueCompleteView ()

@end

@implementation UIUXLILoginPasswordIssueCompleteView

#pragma mark - イニシャライザ

- (id)initWithFrame:(CGRect)frame viewDTO:(NSObject *)viewDTO
{
    _viewDto = (UIUXLILoginPasswordIssueCompleteViewDTO *)viewDTO;
    
    self = [super initWithFrame:frame viewDTO:viewDTO];
    if (!self) {
        return nil;
    }
    
    return self;
}

- (void)loadInitialViews
{
    [self addBlankWithHeight:k_VmarginContentsTop];
    
    //送付先メールアドレス表示
    [self addSendMailaddress];
    [self addBlankWithHeight:10.0f];
    
    //カスタマーセンター追加
    [self addCustomerCenterInfo];
    
    //発行するボタン追加
    [self addNextButton];
    [self addBlankWithHeight:k_VmarginContentsBottom];
}

#pragma mark - ビューの初期化メソッド群
//送付先メールアドレス表示
- (void)addSendMailaddress
{
    //文言読み込み
    NSString * sendInfoStr = [NSString stringWithFormat:
                              NSLocalizedString(@"UI0076_SendInfo", nil),
                              NSLocalizedString(@"Common_LoginPassword", nil)];
    NSString * infoTextStr = [NSString stringWithFormat:
                              NSLocalizedString(@"UI0076_AvailableTimeInfo", nil),
                              NSLocalizedString(@"Common_LoginPassword", nil),
                              NSLocalizedString(@"Common_LoginPassword", nil),
                              NSLocalizedString(@"Common_Login", nil),
                              NSLocalizedString(@"Common_LoginPassword", nil)];
    
    UIView * sendAdderVIew = [self sendMailField:self.viewDto.mailAddresses
                                    sendInfoText:sendInfoStr
                                   attentionText:nil
                                  infomationText:infoTextStr
                                         showBar:NO
                               buttomSpaceHeight:0];
    [self addViewAtHCenter:sendAdderVIew];
}

//カスタマーセンター追加
- (void)addCustomerCenterInfo
{
    //文言ロード
    NSString * infoStr = [NSString stringWithFormat:
                          NSLocalizedString(@"UI0076_CustomerCenterInfo", nil),
                          NSLocalizedString(@"Common_RKBKName", nil),
                          NSLocalizedString(@"Common_CustomerCenter", nil),
                          NSLocalizedString(@"Common_Inquiry", nil)];
    
    [self addViewAtHCenter:[self customerCenterViewWithInfo:infoStr
                                                     target:self
                                                    message:@selector(customerCenterButtonAction:)]];
}

//次へボタン追加
- (void)addNextButton
{
    UIButton * nextButton = [self imageButton:[UIImage imageNamed:@"LI_btn_orange420_02"]
                               hilightedImage:[UIImage imageNamed:@"LI_btn_orange420_02_hover"]
                                disablesIamge:[UIImage imageNamed:@"LI_btn_orange420_02_inactive"]
                                   imageScale:0.5];
    [nextButton addTarget:self
                   action:@selector(nextButtonAction:)
         forControlEvents:UIControlEventTouchUpInside];
    
    //画面高さ分の隙間調整
    CGFloat marginHeight = self.frame.size.height - self.stackLayoutView.subViewsHeight - (k_VmarginContentsBottom + nextButton.frame.size.height);
    if (marginHeight < k_VmarginContentsBottom) {
        //画面下端から計算したマージンが少ない場合は固定値を使用する
        marginHeight = k_VmarginContentsBottom;
    }
    [self addBlankWithHeight:marginHeight];
    
    [self addViewAtHCenter:nextButton];
}

#pragma mark - UIUXLILoginPasswordIssueViewDelegateを呼ぶメソッド実装
//次へボタンイベント
- (void)nextButtonAction:(UIButton *)button
{
    if ([self.uiuxLILoginPasswordIssueCompleteViewDelegate respondsToSelector:@selector(nextButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLILoginPasswordIssueCompleteViewDelegate nextButtonAction:button];
    }
}

//カスタマーセンターボタンイベント
- (void)customerCenterButtonAction:(UIButton *)button
{
    if ([self.uiuxLILoginPasswordIssueCompleteViewDelegate respondsToSelector:@selector(customerCenterButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxLILoginPasswordIssueCompleteViewDelegate customerCenterButtonAction:button];
    }
}

@end
