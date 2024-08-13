//
//  TOPMainView.m
//  RakutenBank
//
//  Created by nw_y.ito on 16/03/04.
//
//

#import "TOPMainView.h"

#import "AlertUtil.h"
#import "AssertUtil.h"
#import "ColorUtil.h"
#import "CommonUtil.h"
#import "LanguageUtil.h"
#import "DataStorageService.h"
#import "OmnConstants.h"
#import "RakutenBankAppDelegate.h"
#import "UIUXTOPBaseScrollView+MakeViewUtils.h"
#import "UIUXTOPMainViewController.h"
#import "UIUXTOPMakeViewUtil.h"
#import "UIUXTOPUtilMacro.h"
#import "UIUXTOPLayoutUtil.h"
#import "CampaignResponse.h"
#import "LayoutUtil.h"
#import "Statement.h"
#import "FormatUtil.h"
#import "ResourceLoaderModel.h"
#import "DashboardBalanceCell.h"
#import "DashboardSecurityCell.h"
#import "DashboardDebitCell.h"
#import "DashboardFCCell.h"
#import "DashboardCardloanCell.h"
#import "DashboardEditCell.h"
#import "DashboardFlowLayout.h"
#import "CardBalanceDto.h"
#import "CardSecurityDto.h"
#import "CardDebitDto.h"
#import "CardLoanDto.h"
#import "CardFCDto.h"
#import "DashboardResponse.h"
#import "MakeViewUtil.h"
#import "LayoutUtil.h"
#import "ServiceItemCell.h"
#import "ServiceGuideView.h"
#import "HowToUseGuideBasicView.h"
#import "DashboardGuideView.h"
#import "DashboardGuideTutorialView.h"
#import "HowToUseGuideTutorialView.h"
#import "HowToUseGuideViewController.h"
#import "DashboardGuideViewController.h"
#import "OmnitureMeasurementWrapper.h"
#import "GuideMakeViewUtil.h"
#import "HistoryHorizontalStackLayoutView.h"
#import "HistoryItemCell.h"
#import "HistoryServiceItemDto.h"
#import "HistoryUtil.h"
#import "ServiceKeyConstant.h"
#import "MenuConfigModel.h"
#import <WebKit/WebKit.h>
#import "BackgroundUtil.h"
#import "BackgroundDownloadService.h"
#import "GroupServiceItemDto.h"
#import "GroupServiceItemCell.h"

#pragma mark - 定数定義
/** タイムアウト値 */
#define TIMEOUT_CONNECTION              240
/** 提携支店連携状況（1：未連携、2：連携済み、3：トークンが30日以内に期限切れ、4：初回連携時にSTEP2の認証が未完了、5：トークンが失効）*/
#define PARTNER_LINK_STATUS_NOT_LINKED      @"1"
#define PARTNER_LINK_STATUS_LINKED          @"2"
#define PARTNER_LINK_STATUS_EXPIRE_NEXT_30  @"3"
#define PARTNER_LINK_STATUS_UNCOMPLETED     @"4"
#define PARTNER_LINK_STATUS_TOKEN_EXPIRED   @"5"

/**
 * ボタンタグ
 */
typedef NS_ENUM(NSUInteger, ButtonTag) {
    ButtonTag_First = 1,
    ButtonTagAssetInquiry = ButtonTag_First,    ///< 預金残高内訳へ
    ButtonTagAssetDisplay,      ///< 表示・非表示ボタン
    ButtonTagInquiryTabOpen,    ///< 入出金明細タブ(開く)
    ButtonTagInquiryTabClose,   ///< 入出金明細タブ(閉じる)
    ButtonTagAccountTabOpen,    ///< 口座情報タブ(開く)
    ButtonTagAccountTabClose,   ///< 口座情報タブ(閉じる)
    ButtonTagTransferTab,       ///< 入出金・振込タブ
    ButtonTagServiceTab,        ///< 商品・サービスタブ
    ButtonTagOtherTab,          ///< 便利な機能タブ
    ButtonTagFacebook,          ///< Facebookで送金
    ButtonTagViber,             ///< Viberで送金
    ButtonTagMerumane,          ///< メルマネ
    ButtonTagStatement,         ///< 入出金明細
    ButtonTagCard,              ///< カード利用状況・お申込
    ButtonTagConveniBarcode,    ///< 楽天銀行コンビニ支払い
    ButtonTagRate,              ///< 金利一覧
    ButtonTagTimeAccount,       ///< 定期預金
    ButtonTagExste,             ///< 楽天エクステ預金
    ButtonTagFC,                ///< 外貨預金
    ButtonTagSuperLoan,         ///< 楽天銀行スーパーローン
    ButtonTagHomeLoan,          ///< 住宅ローン
    ButtonTagFX,                ///< 新・楽天銀行FX
    ButtonTagCashGift,          ///< 現金プレゼント
    ButtonTagCampaign,          ///< キャンペーン応募
    ButtonTagBIG,               ///< BIG・toto
    ButtonTagNumbers,           ///< 宝くじ
    ButtonTagKouei,             ///< 公営競技
    ButtonTagInsurance,         ///< 保険
    ButtonTagCashb,             ///< CASHb
    ButtonTagMoneySupport,      ///< マネーサポート
    ButtonTagATM,               ///< ATM・コンビニ
    ButtonTagHelp,              ///< ヘルプ
    ButtonTagSecurity,          ///< セキュリティ
    ButtonTagSetting,           ///< 登録情報
    ButtonTagServiceList,       ///< サービス一覧
    ButtonTagReferralCodeSeeMore, ///< 紹介コードの使い方
    ButtonTagBankInfoListLastOne,///< お知らせ一覧
    ButtonTagPointReceipt,      ///< ポイント受取
    ButtonTagQrLogin,           ///< QRログイン
    ButtonTagBillSplit,         ///< 楽らくワリカン
    ButtonTagBillSplitPayment,  ///< 楽らくワリカン入出金明細アイコン
    ButtonTagClosePartnerAttention,             ///< 提携銀行の注意事項を閉じる
    ButtonTagReloadPartnerAsset,                ///< 提携支店の情報更新
    ButtonTagShowAvailableAmountInformation,    ///< 支払い金額のポップアップ表示
    ButtonTagRakutenBankDeposit,                ///< 楽天銀行へ入金
    ButtonTagRakutenBankWithdrawal,             ///< 楽天銀行から出金
    ButtonTagPartnerAssetDisplay,               ///< 提携支店の残高表示非表示
    ButtonTagRakutenMemberLinkRegister,         ///< 楽天会員リンク登録
    ButtonTagPartnerLink,                       ///< 連携のお願い
    ButtonTagTransfer,          ///< 振込・振替・送金
    ButtonTagATMDeposit,        ///< ATM入金
    ButtonTagCustomerCenter,    ///< お問合せ・お手続きもっと見る
    ButtonTagFAQ,               ///< FAQ
    ButtonTagGuide,             ///< 使い方ガイド
    ButtonTagStopAccount,       ///< 取引停止中
    ButtonTagUnpaid,            ///< 未収
    ButtonTagAgreeAgain,        ///< 付番同意
    ButtonTagCustomerAttribute, ///< 属性変更メッセージ枠
    ButtonTagConfirmPointServiceTarget,    ///< ポイント付与対象サービスを確認
    ButtonTagOverseaTransfer,              ///< 海外送金
    ButtonTagNoticePromotion,              ///< 重要なお知らせ・プロモーション
    ButtonTagNoticePromotionClose,         ///< 重要なお知らせ・プロモーションの閉じるボタン
    ButtonTagBanner1,           ///< あなたにおすすめ1
    ButtonTagBanner2,           ///< あなたにおすすめ2
    ButtonTagBanner3,           ///< あなたにおすすめ3
    ButtonTagHistoryDelete,     ///< 最近の履歴・消去ボタン
    ButtonTagBackgroundSetting, ///< 背景設定ボタン
    ButtonTagAccountTransferApprovalRequest,  ///<口座振替承認依頼
    ButtonTagSegmentBanner,     ///< セグメントバナー
    ButtonTagAccountInformationConfirmation, ///<登録情報確認依頼
    ButtonTag_Last
};

typedef NS_ENUM(NSInteger, LabelTag)  {
    LabelTagPartnerBranchName = 100,  ///< 提携金融機関名
    LabelTagPartnerUpdateTime,       ///< 提携金融機関更新時間
    LabelTagUpdateTime,              ///< プロパー更新時間
    LabelTagAccountBalance,          ///< 普通預金
    LabelTagAccountBalanceYen,       ///< 普通預金円
    LabelTagPaymentBalanceTitle,     ///< 支払い可能金額タイトル
    LabelTagPaymentBalance,          ///< 支払い可能金額
    LabelTagPaymentBalanceYen        ///< 支払い可能金額円
};

// セクションの種類
typedef NS_ENUM(NSInteger, SectionType)  {
    Service = 20,    ///< 商品・サービス
    ReferralCode,    ///< 友達に紹介
    Recommendation,  ///< あなたにおすすめ
    Notification,    ///< 楽天銀行からのお知らせ
    CustomerCenter,  ///< お問い合わせ・お手続き
    CustomerCenterPartner,   ///< お問い合わせ・お手続き提携
    GroupService,           ///<楽天グループサービス
    History                  ///< 最近の履歴
};

// 各セクションのタイトルビューのボタンView内のViewのtag
typedef NS_ENUM(NSInteger, SectionHeaderViewType)  {
    SectionHeaderViewButtonLabel = 1000    ///< ラベル
};

// 残高種類
typedef NS_ENUM(NSInteger, BalanceType) {
    MainBalance = 0,           ///< プロパー口座残高預金
    PartnerBalance,            ///< 支店口座残高預金
    PartnerPaymentBalance      ///< 支店口座支払い可能金額
};

BOOL isAttentionClose;           ///< 注意事項表示フラグ
NSString * urlInformationOKB;    ///< OKB専用注意事項のCSF画像URL
NSString * urlInformationNCB;    ///< NCB専用注意事項のCSF画像URL
NSString * urlNoticeCommon;      ///< 共通通知CSF画像URL
NSString * urlNoticeOKB;         ///< OKB専用通知CSF画像URL
NSString * urlNoticeNCB;         ///< NCB専用通知CSF画像URL
NSString * urlStopAccount;       ///<取引停中CSF画像URL
NSString * urlEmergency;         ///<緊急メッセージCSF画像URL
BOOL isHistoryDeleteMode;        ///< 最近の履歴ー消去モード

static NSString * const k_CellID = @"cell";                     ///< セルID
static CGFloat const k_HeightCell = 68.0f;                     ///< セル高さ
static CGFloat const k_HeightCellSeparatorSectionEnd = 1.0f;    ///< セクション区切りの線の太さ
static NSInteger const k_InfinityCount = 10000;     /// ダッシュボード無限ループ用

/// ダッシュボードCell ID
static NSString *DashboardBalanceCellReuseIdentifier = @"DashboardBalanceCellReuseIdentifier";
static NSString *DashboardSecurityCellReuseIdentifier = @"DashboardSecurityCellReuseIdentifier";
static NSString *DashboardDebitCellReuseIdentifier = @"DashboardDebitCellReuseIdentifier";
static NSString *DashboardFCCellReuseIdentifier = @"DashboardFCCellReuseIdentifier";
static NSString *DashboardCardloanCellReuseIdentifier = @"DashboardCardloanCellReuseIdentifier";
static NSString *DashboardEditCellReuseIdentifier = @"DashboardEditCellReuseIdentifier";
/// サービス項目Cell ID
static NSString *ServiceItemReuseIdentifier = @"ServiceItemReuseIdentifier";
static NSString *GroupServiceItemReuseIdentifier = @"GroupServiceItemReuseIdentifier";

@interface TOPMainView ()<UITableViewDataSource, UITableViewDelegate, UICollectionViewDataSource, UICollectionViewDelegate, TOPMainViewDelegate, DashboardFlowLayoutDelegate,HistoryItemCellDelegate>

@property (nonatomic, strong) TOPMainViewDTO * viewDto;

@property (nonatomic, strong) UIView * rPointInfoView;              ///< 楽天会員・ポイント情報・楽天ペイボタンコンテナビュー
@property (nonatomic, strong) RBAnimationBaseView * rInfoLoadingAnimationView;   ///< 電文待ちの際に表示するローディング動画ビュー

@property (nonatomic, strong) UIView * rPointContainerView;         ///< 楽天会員・ポイント情報コンテナビュー
@property (nonatomic, strong) UIView * rStandardPointView;          ///< 通常ポイントコンテナビュー
@property (nonatomic, strong) UIView * rTimeLimitedPointView;       ///< 期間限定ポイントコンテナビュー
@property (nonatomic, strong) UIView * rPointInfoContainerView;     ///< 楽天ポイント情報コンテナビュー
@property (nonatomic, strong) UIView * rPointInfoLoadingView;       ///< 楽天ポイント情報ローディングビュー
@property (nonatomic, strong) UIView * rRankIconContainerView;      ///< 楽天会員ランキングコンテナビュー
@property (nonatomic, strong) UILabel * valueRStandardPoint;        ///< 通常ポイント
@property (nonatomic, strong) UILabel * valueRTimeLimitedPoint;     ///< 期間限定ポイント
@property (nonatomic, strong) UIButton * rPayButton;                ///< 楽天ペイ遷移ボタン
@property (nonatomic, strong) UIImageView * rPointRankingView;      ///< 楽天会員ランキングビュー


@property (nonatomic, strong) UICollectionView *dashboardView;  ///< ダッシュボードビュー
@property (nonatomic, strong) UIPageControl *dashboardControl;  ///< ダッシュボードのインジケーター
@property (nonatomic, strong) HistoryHorizontalStackLayoutView * historyStackView; ///< 最近の履歴ビューのstackLayoutView
@property (nonatomic, strong) UIScrollView * historyScrollView; ///< 最近の履歴ビュー

@property (nonatomic, strong) UIButton * historySectionLinkBtn; ///< 最近の履歴ビュー のボタン

@property (nonatomic, strong) UICollectionView *serviceView;    ///< 商品・サービスビュー
@property (nonatomic, strong) UICollectionView *customerCenterView; ///< お問合せ・お手続き
@property (nonatomic, strong) UICollectionView *groupServiceView; ///<楽天グループサービスビュー
@property (nonatomic, strong) UIView * groupServiceBaseView;        ///<楽天グループサービスビュー(全体)
@property (nonatomic, strong) UIView * tabCloseView;            ///< 入出金明細・口座情報が閉じたビュー
@property (nonatomic, strong) UIView * tabInquiryView;          ///< 入出金明細が開いたビュー
@property (nonatomic, strong) UIView * tabAccountView;          ///< 口座情報が閉じたビュー

@property (nonatomic, strong) UIView * serviceListTransferView; ///< 入出金・振込を選択時のビュー
@property (nonatomic, strong) UIView * serviceListServiceView;  ///< 商品・サービスを選択時のビュー
@property (nonatomic, strong) UIView * serviceListOtherView;    ///< 便利な機能を選択時のビュー

@property (nonatomic, strong) UIView * attentionCloseView;                      ///< 注意事項閉じる際のビュー
@property (nonatomic, strong) UIView * attentionOpenView;                       ///< 注意事項開く際のビュー
@property (nonatomic, strong) UIUXTOPStackLayoutView * depositBackgroundView;   ///< 預金残高ビュー

@property (nonatomic, strong) UIButton * assetDisplayButton;    ///< 表示・非表示ボタン
@property (nonatomic, strong) UIView * assetValueView;          ///< 預金残高の金額ビュー
@property (nonatomic, strong) UIView * assetUnitView;           ///< 預金残高の金額単位ビュー
@property (nonatomic, strong) UIView * assetNoDisplayView;      ///< 金額非表示ビュー

@property (nonatomic, strong) UILabel * referralCodeLabel;        ///< 紹介コードラベル

// セグメントバナービュー
@property (nonatomic, strong) UIButton * bannerView1;
@property (nonatomic, strong) UIButton * bannerView2;
@property (nonatomic, strong) UIButton * bannerView3;
@property (nonatomic, strong) UIView * bannerLoadingView;
@property (nonatomic, strong) RBAnimationBaseView * bannerLoadingAnimationView;

// 新規追加セグメントバナー枠
@property (nonatomic, strong) UIButton * segmentBannerBtn;       ///< セグメントバナービュー

@property (nonatomic, strong) UIView * topCampaignView;
@property (nonatomic, strong) RBAnimationBaseView * topCampaignLoadingView;
@property (nonatomic, strong) UIView * historyView;

// 提携支店
@property (nonatomic, strong) UIImageView * switchBtn;         ///< 表示・非表示切り替えボタン
@property (nonatomic, strong) UIView * partnerTotalBalanceView;           ///< 提携支店残高ビュー
@property (nonatomic, strong) UIView * partnerTotalBalanceHideView;       ///< 提携支店残高非表示ビュー
@property (nonatomic, strong) RBAnimationBaseView * partnerTotalBalanceLoadingView;    ///< 提携支店残高ロードビュー
@property (nonatomic, strong) UIView * partnerAvailiableBalanceView;      ///< 支払い可能金額ビュー
@property (nonatomic, strong) RBAnimationBaseView * partnerAvailiableBalanceLoadingView;    ///< 支払い可能金額ロードビュー
@property (nonatomic, strong) UIView * properBalanceView;           ///< 楽天銀行普通預金ビュー
@property (nonatomic, strong) UIView * properBalanceHideView;       ///< 楽天銀行普通預金非表示ビュ
@property (nonatomic, strong) RBAnimationBaseView * properBalanceLoadingView;    ///< 楽天銀行普通預金ロードビュー
@property (nonatomic, strong) RBAnimationBaseView * partnerUpddateTimeLoadingView;   ///< 提携支店更新時間ロードビュー
@property (nonatomic, strong) RBAnimationBaseView * properUpddateTimeLoadingView;    ///< 楽天銀行更新時間ロードビュー
@property (nonatomic, strong) UIImageView * btnBackView;        ///< ボタン背景ビュー
@property (nonatomic, strong) UIImageView * recommendationBackView; ///<  あなたにおすすめ背景ビュー
@property (nonatomic, strong) UIImageView * bottomImageView;    ///<  最下部背景ビュー
@property (nonatomic, strong) UIView * bankInfoView;            ///< 楽天銀行からのお知らせビュー

@property (nonatomic, strong) NSString * bannerImageName1;      ///< セグメントバナー画像名
@property (nonatomic, strong) NSString * bannerImageName2;      ///< セグメントバナー画像名
@property (nonatomic, strong) NSString * bannerImageName3;      ///< セグメントバナー画像名

@property (nonatomic) NSInteger indexForDepositBalanceView;     ///< 預金残高・ハッピー領域の挿入位置を保持
@property (nonatomic) NSInteger indexForErrorView;              ///< 預金残高エラービューの挿入位置を保持
@property (nonatomic) NSInteger indexForPartnerLinkView;        ///< 連携のお願いビューの挿入位置を保持
@property (nonatomic) NSInteger indexForPartnerView;            ///< 提携支店の挿入位置を保持
@property (nonatomic) NSInteger indexForPartnerOperationView;   ///< 提携支店ボタンビューの挿入位置を保持
@property (nonatomic) NSInteger indexForTab;                    ///< 入出金明細・口座情報タブの挿入位置を保持
@property (nonatomic) NSInteger indexForServiceTab;             ///< サービスタブの挿入位置を保持
@property (nonatomic) NSInteger indexForAttentionView;          ///< 注意事項の挿入位置を保持
@property (nonatomic) NSInteger indexForNoticeTop;              ///< 緊急メッセージ挿入位置を保持
@property (nonatomic) NSInteger indexForNoticeStopAccount;      ///< 取引停止中挿入位置を保持
@property (nonatomic) NSInteger indexForNoticeUnpaid;           ///< 未収挿入位置を保持
@property (nonatomic) NSInteger indexForAgreeAgain;             ///< 付番同意挿入位置を保持
@property (nonatomic) NSInteger indexForCustomerAttribute;      ///< 属性変更枠挿入位置を保持
@property (nonatomic) NSInteger indexForPointReceive;           ///< ポイント受取枠挿入位置を保持
@property (nonatomic) NSInteger indexForFcCreditReceive;        ///< 海外送金受取枠挿入位置を保持
@property (nonatomic) NSInteger indexForNoticePromotionView;    ///< 重要なお知らせ・プロモーション挿入位置を保持.
@property (nonatomic) NSInteger indexForCSFPartnerIndividual;   ///< 支店専用お知らせCSF挿入位置を保持
@property (nonatomic) NSInteger indexForAccountTransferApprovalView; ///< 口座振替承認依頼の挿入位置を保持
@property (nonatomic) NSInteger indexForSegmentBannerView;      ///< セグメントバナービューの挿入位置を保持
@property (nonatomic) NSInteger indexForAccountInformationConfirminationView; ///< 登録情報確認依頼の挿入位置を保持
@property(nonatomic,strong) HowToUseGuideBasicView *howToUseGuideBasicView;

/**
 * <NSString *, UIView *> 画像URLとViewのマッピング
 */
@property (nonatomic, strong) NSMutableDictionary * urlViewMap;

@property (nonatomic, strong) UIView * happyBackgroundView;

@property (nonatomic, strong) UIView * happyStageView;

@property (nonatomic, strong) WKWebView * userAgentWebView;
@end

@implementation TOPMainViewDTO

@end

@implementation TOPMainView

#pragma mark - イニシャライザ

- (id)initWithFrame:(CGRect)frame viewDTO:(NSObject *)viewDTO delegate:(id)delegate
{
    _viewDto = (TOPMainViewDTO *)viewDTO;
    _topMainViewDelegate = delegate;
    //UIScrollViewのデリゲート
    self.delegate = delegate;
    
    self = [super initWithFrame:frame viewDTO:viewDTO];
    if (!self) {
        return nil;
    }
    
    
    return self;
}

#pragma mark - UIUXTOPBaseScrollViewクラスのメソッドオーバーライド
- (void)loadInitialViews

{
    self.stackLayoutView.backgroundColor = UIColor.clearColor;
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;

    // 商品・サービス項目追加
    self.viewDto.serviceItems = [self createServiceItems];
    
    // お問合せ・お手続き項目追加
    self.viewDto.customerCenterItems = [self createCustomerCenterItems];
    
    if ([appDel isProperBranch]) {
        // プロパー支店かつ楽天ID連携済みの場合に表示
        if (self.viewDto.isRakutenMemberLinked) {
            [self addRPointInfoView];
        }
        // メッセージ枠を設定する
        [self setMessageArea:NO];
        
        // ダッシュボード
        [self addDashboardView];
        
        // ボタン領域
        [self addOperationView];

        // 最近の履歴
        [self addViewAtHCenter:[self addHistoryView]];
        [self addBlankWithHeight:8.0f];

        // 商品・サービス
        [self addServiceView];
        
        // 友達に紹介
        [self addReferralCodeView];
        
        // あなたにおすすめ.
        [self addRecommendationView];
        
        //キャンペーン領域
        [self addCampaignView];
        
        // セグメントバナー
        [self addSegmentBannerView];
        
        /// 楽天銀行からのお知らせ
        [self addBankInfo];
        
        // お問合せ・お手続き
        [self addCustomerCenterView];
        
        // 楽天グループサービス(fintech)
        [self addGroupServiceView];
        
    } else {
        //提携支店用お知らせ
        [self addPartnerBankNoticeView];
        
        //注意事項領域
        [self addAttentionView];
        
        // 提携支店のメイン情報
        [self addBlankWithHeight:16.0f];
        self.indexForPartnerView = [self addViewAtHCenter:[[UIView alloc] initWithFrame:CGRectZero]] - 1;
        [self addBlankWithHeight:16.0f];
        [self addPartnerView];

        // ボタン領域
        self.indexForPartnerOperationView = [self addViewAtHCenter:[[UIView alloc] initWithFrame:CGRectZero]] - 1;
        if ([appDel isOKBBranch]) {
            [self addPartnerOperationView];
        } else {
            [self addPartnerOperationViewWithDepositAndTransfer];
        }

        // 最近の履歴
        [self addViewAtHCenter:[self addHistoryView]];
        [self addBlankWithHeight:8.0f];

        // 商品・サービス
        [self addServiceView];
        
        // 楽天銀行からのお知らせ
        [self addBankInfo];
        
        // お問合せ
        [self addCustomerCenterView];
        
        // CSF画像取得
        [self startLoading];
    }
    
    // 背景画像設定
    [self addBackgroundSettingView];
    
    // 使い方ガイドの表示
    if(appDel.isProperBranch){
        [self showGuides];
    }

}

#pragma mark - ビューの初期化メソッド群
#pragma mark subView追加メソッド

// 商品・サービスの項目を作成
- (NSArray *) createServiceItems
{
    NSMutableArray *serviceItems = [[NSMutableArray alloc] init];
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    
    ServiceItemDto *itemCampaign = [[ServiceItemDto alloc] initWithName:[LanguageUtil RBLocalizedString:@"UI0012_IconButton_Campaign_Text"] actionType:TYPE_WEBVIEW actionArgs:@"07" iconName:@"itemCampaign" statusIndex:@"37"];
    ServiceItemDto *itemBigToto = [self createServiceItemDto:@"toto.totalizator"];
    
    if ([appDel isProperBranch]) {
        // プロパー口座の場合
        ServiceItemDto *itemDeposit = [[ServiceItemDto alloc] initWithName:[LanguageUtil RBLocalizedString:@"UI0012_IconButton_YenTimeDeposit_Text"] actionType:TYPE_NATIVE actionArgs:@"TimeAccount" iconName:@"itemTimeDeposit" statusIndex:@"26"];
        ServiceItemDto *itemFC = [[ServiceItemDto alloc] initWithName:[LanguageUtil RBLocalizedString:@"UI0012_IconButton_ForeignCurrencyDeposits_Text"] actionType:TYPE_NATIVE actionArgs:@"FC" iconName:@"itemForeignExchange" statusIndex:@"13"];
        ServiceItemDto *itemCardApply = [[ServiceItemDto alloc] initWithName:[LanguageUtil RBLocalizedString:@"UI0012_IconButton_CardUsageApplication_Text"] actionType:TYPE_WEBVIEW actionArgs:@"08" iconName:@"itemCardApply" statusIndex:@"30"];
        ServiceItemDto *itemViber = [[ServiceItemDto alloc] initWithName:[LanguageUtil RBLocalizedString:@"UI0012_IconButton_ViberRemittance_Text"] actionType:TYPE_NATIVE actionArgs:@"Viber" iconName:@"itemViber" statusIndex:@"56"];
        ServiceItemDto *itemMoneySupport = [[ServiceItemDto alloc] initWithName:[LanguageUtil RBLocalizedString:@"UI0012_IconButton_MoneySupport_Text"] actionType:TYPE_NATIVE actionArgs:@"MoneySupport" iconName:@"itemMoneySupport" statusIndex:@"23"];
        ServiceItemDto *itemSecurity = [[ServiceItemDto alloc] initWithName:[LanguageUtil RBLocalizedString:@"UI0012_IconButton_Security_Text"] actionType:TYPE_WEBVIEW actionArgs:@"15" iconName:@"itemSecurity" statusIndex:@"40"];
        
        [serviceItems addObject:itemDeposit];
        [serviceItems addObject:itemFC];
        [serviceItems addObject:itemCardApply];
        [serviceItems addObject:itemBigToto];
        [serviceItems addObject:itemViber];
        [serviceItems addObject:itemCampaign];
        [serviceItems addObject:itemMoneySupport];
        [serviceItems addObject:itemSecurity];
    } else {
        // 地銀口座の場合
        ServiceItemDto *itemLottery = [[ServiceItemDto alloc] initWithName:@"宝くじ" actionType:TYPE_BROWSER actionArgs:@"03" iconName:@"itemLottery" statusIndex:@"15"];
        ServiceItemDto *itemCompetition = [[ServiceItemDto alloc] initWithName:@"公営競技" actionType:TYPE_BROWSER actionArgs:@"24" iconName:@"itemCompetition" statusIndex:@"39"];
        ServiceItemDto *itemSecurity = [[ServiceItemDto alloc] initWithName:@"セキュリティ" actionType:TYPE_WEBVIEW actionArgs:@"15" iconName:@"itemSecurity" statusIndex:@"40"];
        
        ServiceItemDto *itemTransactionHistory = [[ServiceItemDto alloc] initWithName:@"入出金明細" actionType:TYPE_NATIVE actionArgs:@"Statement" iconName:@"itemTransactionHistory" statusIndex:@"3"];
        ServiceItemDto *itemHelp = [[ServiceItemDto alloc] initWithName:@"ヘルプ" actionType:TYPE_NATIVE actionArgs:@"Help" iconName:@"itemHelp" statusIndex:@"21"];
        [serviceItems addObject:itemBigToto];
        [serviceItems addObject:itemLottery];
        [serviceItems addObject:itemCompetition];
        // 総額が0ではない場合、楽天から出金を表示
        if (self.viewDto.totalAssetBalance != nil && self.viewDto.totalAssetBalance.length > 0 && ![self.viewDto.totalAssetBalance isEqualToString:@"0"]) {
            ServiceItemDto *itemTransfer = [[ServiceItemDto alloc] initWithName:@"楽天銀行から出金" actionType:TYPE_WEBVIEW actionArgs:@"98" iconName:@"transfer" statusIndex:@""];
            [serviceItems addObject:itemTransfer];
        }
        [serviceItems addObject:itemTransactionHistory];
        [serviceItems addObject:itemSecurity];
        [serviceItems addObject:itemCampaign];
        [serviceItems addObject:itemHelp];
    }
    return (NSArray *) serviceItems;
}

- (ServiceItemDto *)createServiceItemDto:(NSString *)key
{
    RakutenBankAppDelegate *appDel = [UIApplication sharedApplication].delegate;
    NSString * serviceNameKey = [LanguageUtil isEnglishMode] ? k_MenuConfigServiceEnglishName : k_MenuConfigServiceName;
    NSDictionary * serviceButtonDict = appDel.serviceListExternalFileDto.serviceButtonDict;
    NSString * serviceName = serviceButtonDict[key][serviceNameKey];
    NSString * statusIndex = serviceButtonDict[key][k_MenuConfigStatusIndex];
    NSString * actionArgs = serviceButtonDict[key][k_MenuConfigActionArgs];
    NSString * iconName = serviceButtonDict[key][k_MenuConfigIconImage];
    NSString * actionType = serviceButtonDict[key][k_MenuConfigActionType];
    NSString * pLayerWebViewTitle = serviceButtonDict[key][k_MenuConfigPLayerWebViewTitle] ? serviceButtonDict[key][k_MenuConfigPLayerWebViewTitle] : @"";
    
    ServiceItemDto *serviceItemDto = [[HistoryServiceItemDto alloc] initWithName:serviceName actionType:actionType actionArgs:actionArgs iconName:iconName statusIndex:statusIndex serviceKey:key pLayerWebViewTitle:pLayerWebViewTitle];
    return serviceItemDto;
}

// お問合せ・お手続きの項目を作成
- (NSArray *) createCustomerCenterItems
{
    NSMutableArray *serviceItems = [[NSMutableArray alloc] init];
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    ServiceItemDto *itemFAQ;
    if ([appDel isNCBBranch]) {
        itemFAQ = [[ServiceItemDto alloc] initWithName:@"よくあるご質問\n(FAQ)"
                                            actionType:TYPE_BROWSER
                                            actionArgs:appDel.externalFileDto.topFAQNCB
                                              iconName:@"itemFAQ"
                                           statusIndex:@""
                                            serviceKey:SERVICEKEY_PARTNER_FAQ
                                    pLayerWebViewTitle:@""];
    } else {
        itemFAQ = [[ServiceItemDto alloc] initWithName:[LanguageUtil RBLocalizedString:@"UI0012_IconButton_FAQ_Text"]
                                            actionType:TYPE_BROWSER
                                            actionArgs:appDel.externalFileDto.topFAQ
                                              iconName:@"itemFAQ"
                                           statusIndex:@""
                                            serviceKey:SERVICEKEY_FAQ
                                    pLayerWebViewTitle:@""];
    }
    
    ServiceItemDto *itemHelp = [[ServiceItemDto alloc] initWithName:[LanguageUtil RBLocalizedString:@"UI0012_IconButton_Help_Text"] actionType:TYPE_NATIVE actionArgs:@"Help" iconName:@"itemHelp" statusIndex:@"21"];
    ServiceItemDto *itemCustomerCenter = [[ServiceItemDto alloc] initWithName:[LanguageUtil RBLocalizedString:@"UI0012_IconButton_Inquiry_Text"] actionType:TYPE_BROWSER actionArgs:appDel.externalFileDto.qlCustomerCenter iconName:@"itemCustomerCenter" statusIndex:@"" serviceKey:SERVICEKEY_INQUIRY pLayerWebViewTitle:@""];
    
    
    [serviceItems addObject:itemFAQ];
    [serviceItems addObject:itemHelp];
    [serviceItems addObject:itemCustomerCenter];
    
    
    if ([appDel isProperBranch]) {
        // プロパー口座の場合
        ServiceItemDto *itemGuide = [[ServiceItemDto alloc] initWithName:[LanguageUtil RBLocalizedString:@"UI0012_IconButton_HowToUse_Text"] actionType:TYPE_NATIVE actionArgs:@"Guide" iconName:@"itemGuide" statusIndex:@"72"];
        [serviceItems addObject:itemGuide];

        ServiceItemDto *itemIDSend = [[ServiceItemDto alloc] initWithName:[LanguageUtil RBLocalizedString:@"UI0012_IconButton_SubmitDocument_Text"] actionType:TYPE_NATIVE actionArgs:@"IdSend" iconName:@"itemIDSend" statusIndex:@"62"];
        [serviceItems addObject:itemIDSend];
        
        ServiceItemDto *itemSwitchLanguage = [[ServiceItemDto alloc] initWithName:[LanguageUtil RBLocalizedString:@"UI0012_InquiryList_LanguageSwichTitle"]  actionType:TYPE_NATIVE actionArgs:@"SwitchLanguage" iconName:@"language" statusIndex:@""];
        [serviceItems addObject:itemSwitchLanguage];
    }
    
    
    
    return (NSArray *) serviceItems;
}

/// メッセージ枠
- (void) setMessageArea:(BOOL)update
{
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    
    UIImageView *noticeCSFEmptyView = [[UIImageView alloc] initWithFrame:CGRectZero];
    UIImageView *stopAccountCSFEmptyView = [[UIImageView alloc] initWithFrame:CGRectZero];
    UIImageView *unpaidCSFEmptyView = [[UIImageView alloc] initWithFrame:CGRectZero];
    UIImageView *agreeAgainCSFEmptyView = [[UIImageView alloc] initWithFrame:CGRectZero];
    UIView *customerAttributeEmptyView = [[UIView alloc] initWithFrame:CGRectZero];
    UIView *pointReceiveEmptyView = [[UIView alloc] initWithFrame:CGRectZero];
    UIView *fcCreditReceiveEmptyView = [[UIView alloc] initWithFrame:CGRectZero];
    UIView *accountTransferApprovalView = [[UIView alloc] initWithFrame:CGRectZero];
    UIView *accountInformationConfirminationView = [[UIView alloc] initWithFrame:CGRectZero];
    UIView *noticePromotionEmptyView = [[UIView alloc] initWithFrame:CGRectZero];

    if (!update) {
        self.indexForNoticeStopAccount = [self addViewAtHCenter:stopAccountCSFEmptyView] - 1;
        self.indexForNoticeTop =  [self addViewAtHCenter:noticeCSFEmptyView] - 1;
        self.indexForNoticeUnpaid = [self addViewAtHCenter:unpaidCSFEmptyView] - 1;
        self.indexForAgreeAgain = [self addViewAtHCenter:agreeAgainCSFEmptyView] - 1;
        self.indexForCustomerAttribute = [self addViewAtHCenter:customerAttributeEmptyView] - 1;
        self.indexForPointReceive = [self addViewAtHCenter:pointReceiveEmptyView] - 1;
        self.indexForFcCreditReceive = [self addViewAtHCenter:fcCreditReceiveEmptyView] - 1;
        self.indexForAccountTransferApprovalView = [self addViewAtHCenter:accountTransferApprovalView] - 1;
        self.indexForAccountInformationConfirminationView = [self addViewAtHCenter:accountInformationConfirminationView] - 1;
        self.indexForNoticePromotionView = [self addViewAtHCenter:noticePromotionEmptyView] - 1;
    } else {
        // 表示非表示制御がある枠に関して、更新の場合は空のViewでリセットしておく
        // 取引停止中
        [self removeViewAtIndex:self.indexForNoticeStopAccount animated:NO];
        [self insertViewAtHCenter:stopAccountCSFEmptyView atIndex:self.indexForNoticeStopAccount animated:NO];
        // 未収
        [self removeViewAtIndex:self.indexForNoticeUnpaid animated:NO];
        [self insertViewAtHCenter:unpaidCSFEmptyView atIndex:self.indexForNoticeUnpaid animated:NO];
        // 付番再同意
        [self removeViewAtIndex:self.indexForAgreeAgain animated:NO];
        [self insertViewAtHCenter:agreeAgainCSFEmptyView atIndex:self.indexForAgreeAgain animated:NO];
        // 属性変更
        [self removeViewAtIndex:self.indexForCustomerAttribute animated:NO];
        [self insertViewAtHCenter:customerAttributeEmptyView atIndex:self.indexForCustomerAttribute animated:NO];
        // ポイント受取
        [self removeViewAtIndex:self.indexForPointReceive animated:NO];
        [self insertViewAtHCenter:pointReceiveEmptyView atIndex:self.indexForPointReceive animated:NO];
        // 海外送金受取
        [self removeViewAtIndex:self.indexForFcCreditReceive animated:NO];
        [self insertViewAtHCenter:fcCreditReceiveEmptyView atIndex:self.indexForFcCreditReceive animated:NO];
        // 口座振替承認依頼
        [self removeViewAtIndex:self.indexForAccountTransferApprovalView animated:NO];
        [self insertViewAtHCenter:accountTransferApprovalView atIndex:self.indexForAccountTransferApprovalView animated:NO];
        // 登録情報確認依頼
        [self removeViewAtIndex:self.indexForAccountInformationConfirminationView animated:NO];
        [self insertViewAtHCenter:accountInformationConfirminationView atIndex:self.indexForAccountInformationConfirminationView animated:NO];
        
        // 重要なおしらせ・プロモーション
        [self removeViewAtIndex:self.indexForNoticePromotionView animated:NO];
        [self insertViewAtHCenter:noticePromotionEmptyView atIndex:self.indexForNoticePromotionView animated:NO];
    }

    // 緊急メッセージ枠
    [UIUXTOPMakeViewUtil setNetworkImage:appDel.externalFileDto.noticeImageTop width:self.frame.size.width handler:^(UIImageView *imageView) {
        [self removeViewAtIndex:self.indexForNoticeTop animated:NO];
        [self insertViewAtHCenter:imageView atIndex:self.indexForNoticeTop animated:NO];
    }];
    
    if ([@"2" isEqualToString:self.viewDto.inactiveState]) {
        // 取引停止中
        NSString * stopAccountImageTop = [LanguageUtil isEnglishMode] ? appDel.externalFileDto.stopAccountImageTopEnglish : appDel.externalFileDto.stopAccountImageTop;
        [UIUXTOPMakeViewUtil setNetworkImage:stopAccountImageTop width:self.frame.size.width handler:^(UIImageView *imageView) {
            [self removeViewAtIndex:self.indexForNoticeStopAccount animated:NO];
            UIButton *stopAccountBtn = [[UIButton alloc] initWithFrame:imageView.frame];
            [stopAccountBtn addSubview:imageView];
            stopAccountBtn.tag = ButtonTagStopAccount;
            [stopAccountBtn addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
            [self insertViewAtHCenter:stopAccountBtn atIndex:self.indexForNoticeStopAccount animated:NO];
        }];
    } else {

        // 地銀口座の場合、以下のメッセージは表示しない.
        if ([@"1" isEqualToString:self.viewDto.cardAccruedFlag]) {
            // 未収
            NSString *unpaidImageTop = [LanguageUtil isEnglishMode] ? appDel.externalFileDto.unpaidImageTopEnglish : appDel.externalFileDto.unpaidImageTop;
            [UIUXTOPMakeViewUtil setNetworkImage:unpaidImageTop width:self.frame.size.width handler:^(UIImageView *imageView) {
                [self removeViewAtIndex:self.indexForNoticeUnpaid animated:NO];
                UIButton *unpaidBtn = [[UIButton alloc] initWithFrame:imageView.frame];
                [unpaidBtn addSubview:imageView];
                unpaidBtn.tag = ButtonTagUnpaid;
                [unpaidBtn addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
                [self insertViewAtHCenter:unpaidBtn atIndex:self.indexForNoticeUnpaid animated:NO];
            }];
        }
        
        // 付番同意
        [self addMessageNumberingAgreeAgain];
        
        // 属性変更
        [self addMessageCustomerAttribute];

        // ポイント受取
        if (appDel.externalFileDto.pointReceiptEnabled && [@"1" isEqualToString:self.viewDto.pointReceiptButtonFlag]) {
            UIButton * pointReceiveView = [[UIButton alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 64.0f)];
            pointReceiveView.backgroundColor = UIColor.whiteColor;
            pointReceiveView.tag = ButtonTagPointReceipt;
            [pointReceiveView addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
            
            UILabel * titleLbl;
            int deadlineDays = [self.viewDto.pointReceiptDeadlineDays intValue];
            
            if (deadlineDays > 2) {
                // 3日以上
                titleLbl = [MakeViewUtil labelWithTextType:Japanese text:@"新規口座開設おめでとうございます！" textColor:ColorUtil.styleColor777676 fontSize:12.0f isbold:YES
                                                          labelType:Label width:0.0f];
                titleLbl.frame = CGRectMake(0.0f, 16.0f, 0.0f, 14.0f);
            } else if (deadlineDays == 0) {
                // 本日最終日
                titleLbl = [MakeViewUtil labelWithTextType:Japanese text:@"本日最終日！！" textColor:UIColor.blackColor fontSize:20.0f isbold:NO labelType:Label width:0.0f];
                titleLbl.frame = CGRectMake(0.0f, 6.0f, 0.0f, 20.0f);
            } else {
                titleLbl = [MakeViewUtil labelWithTextType:Japanese text:@"" textColor:ColorUtil.styleColor777676 fontSize:12.0f isbold:YES labelType:Label width:0.0f];
                titleLbl.frame = CGRectMake(0.0f, 16.0f, 0.0f, 16.0f);
                
                NSString * str1 = @"締め切り日まであと";
                NSString * str2 = [[NSString alloc] initWithFormat:@"%d日", deadlineDays];
                
                NSMutableAttributedString * attStr1 = [[NSMutableAttributedString alloc] initWithString:str1];
                NSMutableAttributedString * attStr2 = [[NSMutableAttributedString alloc] initWithString:str2];
                NSRange range1 = NSMakeRange(0, str1.length);
                NSRange range2 = NSMakeRange(0, str2.length);
                [attStr1 addAttribute:NSFontAttributeName value: [UIFont fontWithName:NotoSansCJKjpBold size:12.0f] range: range1];
                [attStr1 addAttribute:NSForegroundColorAttributeName value:ColorUtil.styleColor777676 range:range1];
                [attStr2 addAttribute:NSFontAttributeName value:[UIFont fontWithName:NotoSansCJKjpBold size:16.0f] range:range2];
                [attStr2 addAttribute:NSForegroundColorAttributeName value:ColorUtil.styleColorBF0000 range:range2];
                [attStr1 appendAttributedString:attStr2];
                titleLbl.attributedText = attStr1;
            }
            
            titleLbl.textAlignment = NSTextAlignmentCenter;
            [titleLbl sizeToFit];
            titleLbl.center = CGPointMake(pointReceiveView.center.x, titleLbl.center.y);
            [pointReceiveView addSubview:titleLbl];
            
            // アイコン
            UIImageView *iconView = [[UIImageView alloc] initWithFrame:CGRectMake(CGRectGetMinX(titleLbl.frame) - 44.0f, 16.0f, 32.0f, 32.0f)];
            iconView.image = [UIImage imageNamed:@"pointReceive"];
            iconView.contentMode = UIViewContentModeScaleAspectFill;
            iconView.clipsToBounds = YES;
            [pointReceiveView addSubview:iconView];
            
            // 矢印
            UIImageView *arrowView = [[UIImageView alloc] initWithFrame:CGRectMake(self.frame.size.width - 32.0f, 24.0f, 16.0f, 16.0f)];
            arrowView.image = [UIImage imageNamed:@"rightGrayArrow"];
            arrowView.contentMode = UIViewContentModeScaleAspectFill;
            arrowView.clipsToBounds = YES;
            [pointReceiveView addSubview:arrowView];
            
            // ポイントの受取はこちらラベル
            UILabel * descriptionLbl = [MakeViewUtil labelWithTextType:Japanese text:@"ポイントの受取はこちら" textColor:ColorUtil.styleColorBF0000 fontSize:12.0f isbold:NO labelType:Label width:0.0f];
            descriptionLbl.frame = CGRectMake(0.0f, 37.0f, self.frame.size.width, 12.0f);
            descriptionLbl.textAlignment = NSTextAlignmentCenter;
            [pointReceiveView addSubview:descriptionLbl];

            UIUXTOPStackLayoutView * stackView = [[UIUXTOPStackLayoutView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, 0)];
            [stackView addBlankWithHeight:1.0f];
            [stackView addViewAtHCenter:pointReceiveView];

            [self removeViewAtIndex:self.indexForPointReceive animated:NO];
            [self insertViewAtHCenter:stackView atIndex:self.indexForPointReceive animated:NO];
        }
        // 海外送金
        if (appDel.externalFileDto.frCreditReceiveEnabled)
        {
            NSUInteger count = [self.viewDto.frCreditReceiveCount integerValue];
            if (count && count > 0) {
                count = MIN(99, count);
                NSString * fcTitle = [[NSString alloc] initWithFormat:[LanguageUtil RBLocalizedString:@"UI0012_Banner_ForeignCurrencyReceive_Message"], (unsigned long)count];
                
                UIButton * fcCreditReceiveView = [[UIButton alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 64.0f)];
                fcCreditReceiveView.backgroundColor = UIColor.whiteColor;
                fcCreditReceiveView.tag = ButtonTagOverseaTransfer;
                [fcCreditReceiveView addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
                
                UIImageView *arrowView = [[UIImageView alloc] initWithImage: [UIImage imageNamed:@"rightGrayArrow"]];
                arrowView.frame = CGRectMake(self.frame.size.width - 32.0f, 24.0f, 16.0f, 16.0f);
                arrowView.contentMode = UIViewContentModeScaleAspectFill;
                arrowView.clipsToBounds = YES;
                [fcCreditReceiveView addSubview:arrowView];
                
                UILabel *fcTitleLbl = [MakeViewUtil labelWithTextType:Japanese text:fcTitle textColor:ColorUtil.styleColor777676 fontSize:12.0f isbold:YES labelType:Label width:0.0f];
                fcTitleLbl.frame = CGRectMake(0.0f, 16.0f, self.frame.size.width, 14.0f);
                fcTitleLbl.textAlignment = NSTextAlignmentCenter;
                [fcCreditReceiveView addSubview:fcTitleLbl];
                
                [fcTitleLbl sizeToFit];
                fcTitleLbl.center = CGPointMake(fcCreditReceiveView.center.x, fcTitleLbl.center.y);
                
                UILabel *fcInfoLbl = [MakeViewUtil labelWithTextType:Japanese text:[LanguageUtil RBLocalizedString:@"UI0012_Banner_ForeignCurrencyReceive_MessageLink"] textColor:ColorUtil.styleColorBF0000 fontSize:12.0f isbold:NO labelType:Label width:0.0f];
                fcInfoLbl.frame = CGRectMake(0.0f, 37.0f, self.frame.size.width, 12.0f);
                fcInfoLbl.textAlignment = NSTextAlignmentCenter;
                [fcCreditReceiveView addSubview:fcInfoLbl];
                
                UIImageView *iconView = [[UIImageView alloc] initWithImage: [UIImage imageNamed:@"remittanceAbroad"]];
                iconView.frame = CGRectMake(CGRectGetMinX(fcTitleLbl.frame) - 40.0f, 16.0f, 32.0f, 32.0f);
                iconView.contentMode = UIViewContentModeScaleAspectFill;
                iconView.clipsToBounds = YES;
                [fcCreditReceiveView addSubview:iconView];
                
                UIUXTOPStackLayoutView * stackView = [[UIUXTOPStackLayoutView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, 0)];
                [stackView addBlankWithHeight:1.0f];
                [stackView addViewAtHCenter:fcCreditReceiveView];

                [self removeViewAtIndex:self.indexForFcCreditReceive animated:NO];
                [self insertViewAtHCenter:stackView atIndex:self.indexForFcCreditReceive animated:NO];
            }
        }
        
        // 口座振替承認依頼

        if (self.viewDto.accountTransferApprovalRequestDeadline != nil && [self.viewDto.accountTransferApprovalRequestDeadline length]!=0) {
            CGFloat marginStart                  = 16.0f;
            CGFloat marginEnd                    = 16.0f;
            CGFloat marginTop                    = 16.0f;
            CGFloat marginBottom                 = 16.0f;
            CGFloat marginBetweenLabelAndButton  = 8.0f;

            //設定するボタン
            UIButton *settingButton = [[UIButton alloc] initWithFrame:CGRectMake(0, 0, 88, 36)];
            [settingButton setTitle:[LanguageUtil RBLocalizedString:@"UI0012_Banner_SetUpButton_Text"] forState:UIControlStateNormal];
            settingButton.titleLabel.font = [UIFont fontWithName:NotoSansCJKjpRegular size:14.0f];

            settingButton.layer.cornerRadius = settingButton.frame.size.height / 8;
            settingButton.clipsToBounds = YES;
            settingButton.exclusiveTouch = YES;
            settingButton.backgroundColor = UIColor.whiteColor;
            [settingButton setTitleColor:ColorUtil.styleColorBF0000 forState:UIControlStateNormal];
            [settingButton.layer setBorderColor:ColorUtil.styleColorBF0000.CGColor];
            [settingButton.layer setBorderWidth:1.0f];

            settingButton.tag = ButtonTagAccountTransferApprovalRequest;
            [settingButton addTarget:self
                              action:@selector(tapButtonAction:)
                    forControlEvents:UIControlEventTouchUpInside];
            
            CGFloat labelAreaWidth = self.frame.size.width - (marginStart + marginBetweenLabelAndButton + settingButton.frame.size.width + marginEnd);
            // メッセージラベル
            UILabel * descriptionLabel = [MakeViewUtil labelWithTextType:Japanese
                                                             text:@""
                                                        textColor:ColorUtil.styleColor000000
                                                         fontSize:12.0f
                                                           isbold:NO
                                                        labelType:Text
                                                            width:0.0f
            ];
            NSMutableAttributedString* labelString = [[NSMutableAttributedString alloc]initWithString:[LanguageUtil RBLocalizedString:@"UI0012_Banner_DirectDebit_RequestedMessage"]];
    
            [labelString appendAttributedString:[[NSMutableAttributedString alloc]initWithString:[NSString stringWithFormat:[LanguageUtil RBLocalizedString:@"UI0012_Banner_DirectDebit_Requested_ExpirationDate"],
                                                                                                  [self.viewDto.accountTransferApprovalRequestDeadline substringWithRange:NSMakeRange(0, 4)],
                                                                                                  [self.viewDto.accountTransferApprovalRequestDeadline substringWithRange:NSMakeRange(4, 2)],
                                                                                                  [self.viewDto.accountTransferApprovalRequestDeadline substringWithRange:NSMakeRange(6, 2)]]
                                                                                      attributes:@{NSForegroundColorAttributeName:ColorUtil.styleColorBF0000}]];
            

            if ([self.viewDto.accountTransferApprovalRequestMerchantName length]!=0) {
                [labelString appendAttributedString:[[NSMutableAttributedString alloc]initWithString:@"　"]];
                [labelString appendAttributedString:[[NSMutableAttributedString alloc]initWithString:self.viewDto.accountTransferApprovalRequestMerchantName]];
            }

            [descriptionLabel setAttributedText:labelString];
            
            descriptionLabel.frame = CGRectMake(marginStart, marginTop, labelAreaWidth , 0.0f);
            descriptionLabel.numberOfLines = 0;
            [descriptionLabel sizeToFit];
        
            
            CGFloat totalHeight = descriptionLabel.frame.size.height + marginTop + marginBottom;
            [settingButton setCenter:CGPointMake(self.frame.size.width - settingButton.frame.size.width/2 - marginEnd, totalHeight/2)];
            
            //全体の下地
            UIView * accountTransferApprovalRequestView = [[UIButton alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, totalHeight)];
            accountTransferApprovalRequestView.backgroundColor = UIColor.whiteColor;
            
            [accountTransferApprovalRequestView addSubview:settingButton];
            [accountTransferApprovalRequestView addSubview:descriptionLabel];

            UIUXTOPStackLayoutView * stackView = [[UIUXTOPStackLayoutView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, 0)];
            [stackView addBlankWithHeight:1.0f];
            [stackView addViewAtHCenter:accountTransferApprovalRequestView];

        
            [self removeViewAtIndex:self.indexForAccountTransferApprovalView animated:NO];
            [self insertViewAtHCenter:stackView atIndex:self.indexForAccountTransferApprovalView animated:NO];
        }
        
        //登録情報確認依頼
        [self addMessageAccountInformationConfirmation];

        // 重要なお知らせ・プロモーション
        NSString *noticePromotionText = self.viewDto.importantNoticePromotionMessageContent;
        NSString *noticePromotionTextColor = self.viewDto.importantNoticePromotionTextColor;
        NSString *startDate = self.viewDto.importantNoticePromotionDisplayStartDate;
        NSString *type = self.viewDto.importantNoticePromotionTypeFlag;
        // 前回のstartDateをUserDefaultから取得
        NSString *cachedStartDate = [DataStorageService getValue:ValueTypeUserDefaultsPromotionStartDate];
        if (cachedStartDate == nil) {
            cachedStartDate = @"";
        }
        bool hasText = noticePromotionText != nil && noticePromotionText.length > 0;
        bool isStartDateDifferent = ![cachedStartDate isEqualToString:startDate];

        if ((hasText && [@"0" isEqualToString:type]) || (hasText && isStartDateDifferent && [@"1" isEqualToString:type])) {
            // メッセージラベル
            UILabel * noticeLbl = [MakeViewUtil labelWithTextType:Japanese text:noticePromotionText textColor:[ColorUtil convertToUIColor:noticePromotionTextColor] fontSize:12.0f isbold:NO labelType:Label width:0.0f];
            CGFloat width = [@"0" isEqualToString:type] ? self.frame.size.width - 48.0f : self.frame.size.width - 72.0f;
            noticeLbl.frame = CGRectMake(24.0f, 18.0f, width, 0.0f);
            noticeLbl.numberOfLines = 0;
            [noticeLbl sizeToFit];
            
            CGFloat height = MAX(64.0f, noticeLbl.frame.size.height + 18.0f + 14.0f);
            
            UIButton * noticePromotionView = [[UIButton alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, height)];
            noticePromotionView.backgroundColor = UIColor.whiteColor;
            noticePromotionView.tag = ButtonTagNoticePromotion;
            [noticePromotionView addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];

            if ([@"1" isEqualToString:type]) {
                // プロモーションの場合、閉じるボタンを追加.
                UIButton * closeBtn = [[UIButton alloc] initWithFrame:CGRectMake(self.frame.size.width - 40.0f, 0.0f, 32.0f, 32.0f)];
                [closeBtn setImage:[UIImage imageNamed:@"closeGray"] forState:UIControlStateNormal];
                closeBtn.imageEdgeInsets = UIEdgeInsetsMake(8.0f, 8.0f, 8.0f, 8.0f);
                closeBtn.imageView.contentMode = UIViewContentModeScaleAspectFit;
                closeBtn.contentHorizontalAlignment = UIControlContentHorizontalAlignmentFill;
                closeBtn.contentVerticalAlignment = UIControlContentVerticalAlignmentFill;
                closeBtn.tag = ButtonTagNoticePromotionClose;
                closeBtn.center = CGPointMake(closeBtn.center.x, noticePromotionView.center.y);
                [noticePromotionView addSubview:closeBtn];
                [closeBtn addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
            }
            
            
            [noticePromotionView addSubview:noticeLbl];
            
            UIUXTOPStackLayoutView * stackView = [[UIUXTOPStackLayoutView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, 0)];
            [stackView addBlankWithHeight:1.0f];
            [stackView addViewAtHCenter:noticePromotionView];

            [self removeViewAtIndex:self.indexForNoticePromotionView animated:NO];
            [self insertViewAtHCenter:stackView atIndex:self.indexForNoticePromotionView animated:NO];
            [OmnitureMeasurementWrapper setProp:12 toValue:self.viewDto.importantNoticePromotionCampaignNumber];
            [OmnitureMeasurementWrapper trackAppState:[NSString stringWithFormat:@"%@%@", OMN_MAINMENU, OMN_PAGENAME_SUFFIX_C12]
                                              channel:OMN_MENU_CHANNEL];
        }
    }
}

/// メッセージ枠(提携支店用)
- (void) setMessageAreaPartner:(BOOL)update
{
    UIView *stopAccountCSFEmptyView = [[UIView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    UIView *agreeAgainCSFEmptyView = [[UIView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    UIView *noticeCSFEmptyView = [[UIView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    UIView *customerAttributeEmptyView = [[UIView alloc] initWithFrame:CGRectZero];
    UIView *accountInformationConfirminationView = [[UIView alloc] initWithFrame:CGRectZero];

    if (!update) {
        self.indexForNoticeStopAccount = [self addViewAtHCenter:stopAccountCSFEmptyView] - 1;
        self.indexForAgreeAgain = [self addViewAtHCenter:agreeAgainCSFEmptyView] - 1;
        self.indexForNoticeTop =  [self addViewAtHCenter:noticeCSFEmptyView] - 1;
        self.indexForCustomerAttribute = [self addViewAtHCenter:customerAttributeEmptyView] - 1;
        self.indexForAccountInformationConfirminationView = [self addViewAtHCenter:accountInformationConfirminationView] - 1;
    } else {
        // 表示非表示制御がある枠に関して、更新の場合は空のViewでリセットしておく
        // 取引停止中
        [self removeViewAtIndex:self.indexForNoticeStopAccount animated:NO];
        [self insertViewAtHCenter:stopAccountCSFEmptyView atIndex:self.indexForNoticeStopAccount animated:NO];
        // 付番同意
        [self removeViewAtIndex:self.indexForAgreeAgain animated:NO];
        [self insertViewAtHCenter:agreeAgainCSFEmptyView atIndex:self.indexForAgreeAgain animated:NO];
        // 属性変更
        [self removeViewAtIndex:self.indexForCustomerAttribute animated:NO];
        [self insertViewAtHCenter:customerAttributeEmptyView atIndex:self.indexForCustomerAttribute animated:NO];
        // 登録情報確認依頼
        [self removeViewAtIndex:self.indexForAccountInformationConfirminationView animated:NO];
        [self insertViewAtHCenter:accountInformationConfirminationView atIndex:self.indexForAccountInformationConfirminationView animated:NO];
    }
    
    if ([@"2" isEqualToString:self.viewDto.inactiveState]) {
        // 取引停止中
        [self pushLoadUrl:urlStopAccount baseView:nil index:self.indexForNoticeStopAccount];

    } else {
        // 付番同意
        [self addMessageNumberingAgreeAgain];
        // 属性変更
        [self addMessageCustomerAttribute];
        // 登録情報確認依頼
        [self addMessageAccountInformationConfirmation];
    }
    // 緊急メッセージ
    [self pushLoadUrl:urlEmergency baseView:nil index:self.indexForNoticeTop];
}

/// Fintech UI: グループ連携情報枠
- (void) addRPointInfoView
{
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    
    [self addBlankWithHeight:0.5f];
    
    // 1:Regular, 2:Silver, 3:Gold, 4:Platinum, 5:Diamond, -:N/A
    
    NSString *initialStatus = @"-";
    CGFloat frameSizeWidth = self.frame.size.width;
    
    self.rPointInfoContainerView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, frameSizeWidth, 50.0f)];
    self.rPointInfoView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, frameSizeWidth, 50.0f)];
    
    // 会員ランキング表示部
    self.rRankIconContainerView = [[UIView alloc] initWithFrame:CGRectMake(0.03 * frameSizeWidth, 1.5f, 50.0f, 50.0f)];

    self.rPointRankingView = [[UIImageView alloc] initWithFrame:CGRectMake(0, 0, 50, self.rRankIconContainerView.frame.size.height)];
    self.rPointRankingView.image = [UIImage imageNamed:self.viewDto.rRankingImageName];
    self.rPointRankingView.contentMode = UIViewContentModeScaleAspectFit;
    self.rPointRankingView.frame = CGRectInset(self.rPointRankingView.bounds, 10, 10); // Inner padding for ranking image;
    
    [self.rRankIconContainerView addSubview:self.rPointRankingView];

    // ポイント表示部
    self.rPointContainerView = [[UIView alloc] initWithFrame:CGRectMake(0.17 * frameSizeWidth, 0, 0.7 * frameSizeWidth, 50.0f)];
    self.rStandardPointView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 0.40 * self.rPointContainerView.bounds.size.width, 50.0f)];
    self.rTimeLimitedPointView = [[UIView alloc] initWithFrame:CGRectMake(0.40 * self.rPointContainerView.bounds.size.width, 0, 0.55 * self.rPointContainerView.bounds.size.width, 50.0f)];
    
    UIView * rPayLinkIconContainerView = [[UIView alloc] initWithFrame:CGRectMake(0.80 * frameSizeWidth, -5.0f, 60.0f, 60.0f)];
    
    UILabel * labelRStandardPoint = [MakeViewUtil labelWithTextType:Japanese
                                                    text:[LanguageUtil RBLocalizedString:@"UI0012_RakutenStandardPoint_Title"]
                                                    textColor:[ColorUtil textColorBlack]
                                                    fontSize:12
                                                    isbold:NO
                                                    labelType:LabelWithAdjustment
                                                    width:self.rStandardPointView.frame.size.width];
    labelRStandardPoint.frame = CGRectMake(0, 7, labelRStandardPoint.frame.size.width, labelRStandardPoint.frame.size.height);
    
    // T0014v2Response -> viewDto -> TOPMainView
    self.valueRStandardPoint = [MakeViewUtil labelWithTextType:Japanese
                                                           text:initialStatus
                                                           textColor:[ColorUtil textColorBlack]
                                                           fontSize:13
                                                           isbold:YES
                                                           labelType:LabelWithAdjustment
                                                           width:self.rStandardPointView.frame.size.width];
    self.valueRStandardPoint.frame = CGRectMake(0, 24, self.valueRStandardPoint.frame.size.width, self.valueRStandardPoint.frame.size.height);
    
    UILabel * labelRTimeLimitedPoint = [MakeViewUtil labelWithTextType:Japanese
                                                    text:[LanguageUtil RBLocalizedString:@"UI0012_RakutenTimeLimitedPoint_Title"]
                                                    textColor:[ColorUtil textColorBlack]
                                                    fontSize:12
                                                    isbold:NO
                                                    labelType:LabelWithAdjustment
                                                    width:self.rTimeLimitedPointView.frame.size.width];
    labelRTimeLimitedPoint.frame = CGRectMake(0, 7, labelRTimeLimitedPoint.frame.size.width, labelRTimeLimitedPoint.frame.size.height);
    
    self.valueRTimeLimitedPoint = [MakeViewUtil labelWithTextType:Japanese
                                                           text:initialStatus
                                                           textColor:[ColorUtil textColorBlack]
                                                           fontSize:13
                                                           isbold:YES
                                                           labelType:LabelWithAdjustment
                                                           width:self.rTimeLimitedPointView.frame.size.width];
    self.valueRTimeLimitedPoint.frame = CGRectMake(0, 24, self.valueRTimeLimitedPoint.frame.size.width, self.valueRTimeLimitedPoint.frame.size.height);
    
    // RPayリンク
    self.rPayButton = [UIButton buttonWithType:UIButtonTypeSystem];
    
    [self.rPayButton setImage:[[UIImage imageWithData:[[NSData alloc]initWithContentsOfURL:[NSURL URLWithString:appDel.externalFileDto.rPayLaunchIconUrl]]] imageWithRenderingMode:UIImageRenderingModeAlwaysOriginal] forState:UIControlStateNormal];
    
    [self.rPayButton addTarget:self action:@selector(rPayButtonTapped) forControlEvents:UIControlEventTouchUpInside];
    self.rPayButton.frame = CGRectInset(rPayLinkIconContainerView.bounds, 0, 0);
    self.rPayButton.contentMode = UIViewContentModeScaleAspectFit;
    self.rPayButton.exclusiveTouch = YES;
    
    [rPayLinkIconContainerView addSubview:self.rPayButton];

    // ローディング表示
    // ||rInfoLoadingAnimationView|| <
    // ||rPointInfoLoadingView|| = ||rPointInfoView|| <
    // ||rPointInfoContainerView||
    self.rInfoLoadingAnimationView = [MakeViewUtil makeLoadingCircleView:12.0f iconSize:16.0f];
    self.rPointInfoLoadingView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, frameSizeWidth, 50.0f)];
    self.rPointInfoLoadingView.backgroundColor = UIColor.whiteColor;
    self.rInfoLoadingAnimationView.center = CGPointMake(CGRectGetMidX(self.rPointInfoLoadingView.bounds), CGRectGetMidY(self.rPointInfoLoadingView.bounds));
    [self.rPointInfoLoadingView addSubview:self.rInfoLoadingAnimationView];

    

    // 電文情報が入るまで
    self.rPointInfoLoadingView.hidden = NO;
    self.rPointInfoView.hidden = YES;
    
    [self.rRankIconContainerView addSubview:self.rPointRankingView];
    [self.rStandardPointView addSubview:labelRStandardPoint];
    [self.rStandardPointView addSubview:self.valueRStandardPoint];
    [self.rTimeLimitedPointView addSubview:labelRTimeLimitedPoint];
    [self.rTimeLimitedPointView addSubview:self.valueRTimeLimitedPoint];
    [self.rPointContainerView addSubview:self.rStandardPointView];
    [self.rPointContainerView addSubview:self.rTimeLimitedPointView];
    
    [self.rPointInfoView addSubview:self.rRankIconContainerView];
    [self.rPointInfoView addSubview:self.rPointContainerView];
    [self.rPointInfoView addSubview:rPayLinkIconContainerView];
    
    [self.rPointInfoContainerView addSubview:self.rPointInfoView];
    [self.rPointInfoContainerView addSubview:self.rPointInfoLoadingView];
    
    self.rPointInfoView.backgroundColor = [UIColor whiteColor];
    
    [self addSubview:self.rPointInfoContainerView];
    [self addView:[[UIView alloc] initWithFrame:self.rPointInfoContainerView.frame]];
}

- (void)resetPointViewOrigin:(CGFloat) contentOffset
{
    if (self.rPointInfoContainerView) {
        CGRect frame = self.rPointInfoContainerView.frame;
        frame.origin.y = contentOffset;
        self.rPointInfoContainerView.frame = frame;
        
        [self bringSubviewToFront:self.rPointInfoContainerView];
    }
}

/// Fintech UI: 楽天ペイボタン
- (void) rPayButtonTapped
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onGroupServiceItemTapped:)]) {
        [self.topMainViewDelegate onRPayItemTapped:self.viewDto.rPayServiceItem];
    }
}

/// ダッシュボード
- (void) addDashboardView
{
    [self addBlankWithHeight:16.0f];
    
    CGRect dashboardFrame = CGRectMake(0.0f, 0.0f, self.frame.size.width, 308.0f);
    DashboardFlowLayout * layout = [[DashboardFlowLayout alloc] init];
    self.dashboardView = [[UICollectionView alloc] initWithFrame:dashboardFrame collectionViewLayout:layout];
    [self.dashboardView setBackgroundColor:[UIColor clearColor]];
    self.dashboardView.dataSource = self;
    self.dashboardView.delegate = self;
    self.dashboardView.pagingEnabled = NO;
    self.dashboardView.decelerationRate = UIScrollViewDecelerationRateFast;
    self.dashboardView.showsHorizontalScrollIndicator = NO;
    [self.dashboardView registerClass:[DashboardBalanceCell class] forCellWithReuseIdentifier:DashboardBalanceCellReuseIdentifier];
    [self.dashboardView registerClass:[DashboardSecurityCell class] forCellWithReuseIdentifier:DashboardSecurityCellReuseIdentifier];
    [self.dashboardView registerClass:[DashboardDebitCell class] forCellWithReuseIdentifier:DashboardDebitCellReuseIdentifier];
    [self.dashboardView registerClass:[DashboardFCCell class] forCellWithReuseIdentifier:DashboardFCCellReuseIdentifier];
    [self.dashboardView registerClass:[DashboardCardloanCell class] forCellWithReuseIdentifier:DashboardCardloanCellReuseIdentifier];
    [self.dashboardView registerClass:[DashboardEditCell class] forCellWithReuseIdentifier:DashboardEditCellReuseIdentifier];
    [self addViewAtHCenter:self.dashboardView];

    if (self.viewDto.dashboardShowArray.count > 1) {
        /* 無限スクロール対応：ダッシュボードの開始位置を真ん中に設定する、
         * 左にスワイプにしても、右にスワイプにしても、それぞれ50,000xダッシュボード数回をスワイプしない限り、ダッシュボードが無限のようにスクロールできる
         */
        [self.dashboardView setContentOffset:CGPointMake([layout pageWidth] * self.viewDto.dashboardShowArray.count * k_InfinityCount / 2, 0) animated:NO];
    }
    
    RakutenBankAppDelegate *appDel = [UIApplication sharedApplication].delegate;
    BOOL isAnimationShown = appDel.isTopAnimationShown;
    
    if (!isAnimationShown) {
        // アニメーション
        [UIView animateWithDuration:0.5 animations:^{
            self.dashboardView.transform = CGAffineTransformMakeTranslation(-16.0f, 0.0f);
        } completion:^(BOOL finished) {
            [UIView animateWithDuration:0.5 animations:^{
                self.dashboardView.transform = CGAffineTransformIdentity;
            }];
        }];
        
        appDel.isTopAnimationShown = YES;
    }
}

/// メッセージ枠
- (void) addMessageCustomerAttribute
{
    if (self.viewDto.idSendFlagForCustomerAttribute)
    {

        UIView * baseView = [[UIView alloc] init];
        baseView.backgroundColor = UIColor.whiteColor;

        
        UIButton * messageView = [[UIButton alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 64.0f)];
        messageView.backgroundColor = UIColor.clearColor;
        messageView.tag = ButtonTagCustomerAttribute;
        [messageView addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
        
        UIImageView *arrowView = [[UIImageView alloc] initWithImage: [UIImage imageNamed:@"rightGrayArrow"]];
        arrowView.frame = CGRectMake(self.frame.size.width - 32.0f, 24.0f, 16.0f, 16.0f);
        arrowView.contentMode = UIViewContentModeScaleAspectFill;
        arrowView.clipsToBounds = YES;
        [messageView addSubview:arrowView];
        
        UILabel *messageTitleLabel = [MakeViewUtil labelWithTextType:Japanese
                                                         text:[LanguageUtil RBLocalizedString:@"UI0012_Banner_UpdatePersonalInfo_ConfirmedMessage"]
                                                    textColor:ColorUtil.styleColor777676
                                                     fontSize:12.0f
                                                       isbold:YES
                                                    labelType:Text
                                                        width:0.0f];
        
        messageTitleLabel.textAlignment = NSTextAlignmentCenter;
        //widthを指定するため、sizeToFitの前にframeをセットする。
        messageTitleLabel.frame = CGRectMake(0.0f, 16.0f, self.frame.size.width, messageTitleLabel.frame.size.height);
        [messageTitleLabel sizeToFit];
        messageTitleLabel.frame = CGRectMake(0.0f, 16.0f, self.frame.size.width, messageTitleLabel.frame.size.height);
        
        
        UILabel *messageInfoLabel = [MakeViewUtil labelWithTextType:Japanese
                                                        text:[LanguageUtil RBLocalizedString:@"UI0012_Banner_UpdatePersonalInfo_ConfirmedMessageLink"]
                                                   textColor:ColorUtil.styleColorBF0000
                                                    fontSize:12.0f
                                                      isbold:NO
                                                   labelType:Label
                                                       width:0.0f];
        messageInfoLabel.frame = CGRectMake(0.0f, 16.0f + messageTitleLabel.frame.size.height + 7.0f, self.frame.size.width, 12.0f);
        messageInfoLabel.textAlignment = NSTextAlignmentCenter;
        [messageInfoLabel sizeToFit];
        
        UIImageView *iconView = [[UIImageView alloc] initWithImage: [UIImage imageNamed:@"TOP_icon_message_warning"]];
        iconView.frame = CGRectMake(0.0f, messageTitleLabel.frame.origin.y, 32.0f, 32.0f);
        iconView.contentMode = UIViewContentModeScaleAspectFill;
        iconView.clipsToBounds = YES;
        
        NSInteger padding = 5.0f;
        // centeringView幅＝iconView幅+余白(5.0f)+messageInfoLabel幅
        UIView * centeringView = [[UIView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, iconView.frame.size.width + padding + messageInfoLabel.frame.size.width, 64.0f)];


        centeringView.backgroundColor = UIColor.clearColor;
        centeringView.center = CGPointMake(messageView.center.x, centeringView.center.y);
        CHANGE_ORIGIN_X(messageInfoLabel, iconView.frame.origin.x + iconView.frame.size.width + padding);
        messageTitleLabel.center = CGPointMake(messageInfoLabel.center.x, messageTitleLabel.center.y);
        baseView.frame = CGRectMake(0.0f, 0.0f, self.frame.size.width, messageInfoLabel.frame.origin.y + messageInfoLabel.frame.size.height +
                                    padding);

        [centeringView addSubview:iconView];
        [centeringView addSubview:messageTitleLabel];
        [centeringView addSubview:messageInfoLabel];
        [baseView addSubview:centeringView];
        [baseView addSubview:messageView];

        UIUXTOPStackLayoutView * stackView = [[UIUXTOPStackLayoutView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, 0)];
        [stackView addBlankWithHeight:1.0f];
        [stackView addViewAtHCenter:baseView];

        [self removeViewAtIndex:self.indexForCustomerAttribute animated:NO];
        [self insertViewAtHCenter:stackView atIndex:self.indexForCustomerAttribute animated:NO];
    }
}

// 付番同意バナー作成
- (void)addMessageNumberingAgreeAgain
{
    // 付番同意済みの場合、以下のメッセージは表示しない.
    if ([@"0" isEqualToString:self.viewDto.numberingAgreeDivision]) {
        // 付番同意
        RakutenBankAppDelegate *appDel = [UIApplication sharedApplication].delegate;
        NSString *agreeAgainImageTop = appDel.externalFileDto.agreeAgainImageTop;
        [UIUXTOPMakeViewUtil setNetworkImage:agreeAgainImageTop width:self.frame.size.width handler:^(UIImageView *imageView) {
            [self removeViewAtIndex:self.indexForAgreeAgain animated:NO];
            UIButton *agreeAgainBtn = [[UIButton alloc] initWithFrame:imageView.frame];
            [agreeAgainBtn addSubview:imageView];
            agreeAgainBtn.tag = ButtonTagAgreeAgain;
            [agreeAgainBtn addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
            [self insertViewAtHCenter:agreeAgainBtn atIndex:self.indexForAgreeAgain animated:NO];
        }];
    }
}

// 登録情報確認依頼
- (void)addMessageAccountInformationConfirmation
{

    if (!self.viewDto.needRegisteredInformationConfirmFlag) {
        return;
    }

    UIButton * accountInformationConfirmationView = [[UIButton alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 64.0f)];
    accountInformationConfirmationView.backgroundColor = UIColor.whiteColor;
    accountInformationConfirmationView.tag = ButtonTagAccountInformationConfirmation;
    [accountInformationConfirmationView addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
    UIView *titleView = [[UIView alloc]init];
    [titleView setUserInteractionEnabled:NO];
    [accountInformationConfirmationView addSubview:titleView];
    
    UIImageView *iconView = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"changeInfo"]];
    
    [titleView addSubview:iconView];
    
    UILabel *titleLbl = [MakeViewUtil labelWithTextType:Japanese
                                                   text:[LanguageUtil RBLocalizedString:@"UI0012_Banner_UpdatePersonalInfo_Title"]
                                              textColor:ColorUtil.styleColorBF0000
                                               fontSize:16.0f
                                                 isbold:YES
                                              labelType:Text
                                                  width:0.0f];
    CGRect titleLblFitSize = [titleLbl textRectForBounds:CGRectMake(40.0f, 4.0f, 999.0f,999.0f) limitedToNumberOfLines:2];
    titleLbl.numberOfLines = 2;
    titleLbl.frame = titleLblFitSize;
    titleLbl.textAlignment = NSTextAlignmentCenter;
    
    iconView.frame = CGRectMake(0.0f, titleLbl.frame.origin.y + (titleLbl.frame.size.height / 2) - 16.0f , 32.0f, 32.0f);
    
    [accountInformationConfirmationView addSubview:titleLbl];
    [titleView addSubview:titleLbl];
    
    titleView.frame = CGRectUnion(iconView.frame, titleLbl.frame);
    
    titleView.center = CGPointMake(self.frame.size.width / 2, 32.0f);
    
    UIImageView *arrowView = [[UIImageView alloc] initWithImage: [UIImage imageNamed:@"rightGrayArrow"]];
    arrowView.frame = CGRectMake(self.frame.size.width - 32.0f, 24.0f, 16.0f, 16.0f);
    arrowView.contentMode = UIViewContentModeScaleAspectFill;
    arrowView.clipsToBounds = YES;
    [accountInformationConfirmationView addSubview:arrowView];
    
    UIUXTOPStackLayoutView * stackView = [[UIUXTOPStackLayoutView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, 0)];
    [stackView addBlankWithHeight:1.0f];
    [stackView addViewAtHCenter:accountInformationConfirmationView];
    
    [self removeViewAtIndex:self.indexForAccountInformationConfirminationView animated:NO];
    [self insertViewAtHCenter:stackView atIndex:self.indexForAccountInformationConfirminationView animated:NO];
}

///< 振込・振替・送金ボタンとATM・入金ボタン.
- (void)addOperationView
{
    CGRect frame = CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f);
    CGFloat height = 44 * frame.size.width / 375;
    CGFloat controlHeight = 38 * frame.size.width / 375;
    CGFloat bottomHeight = 16 * frame.size.width / 375;
    CGFloat areaHeight = controlHeight + height + bottomHeight;
    
    CGFloat padding = 24 * frame.size.width / 375;
    CGFloat paddingMiddle = padding * 2 / 3;
    
    CGFloat totalWidth = frame.size.width - 2 * padding - paddingMiddle;
    CGFloat leftWidth = totalWidth * 3 / 5;
    CGFloat rightWidth = totalWidth * 2 / 5;
    CGRect leftFrame = CGRectMake(padding, controlHeight, leftWidth, height);
    CGRect rightFrame = CGRectMake(padding + leftWidth + paddingMiddle, controlHeight, rightWidth, height);
    
    // インジケーターを設定
    self.dashboardControl = [[UIPageControl alloc] initWithFrame: CGRectMake(0, 0, self.frame.size.width, controlHeight)];
    [self.dashboardControl setNumberOfPages:self.viewDto.dashboardShowArray.count];
    self.dashboardControl.currentPage = 0;
    self.dashboardControl.pageIndicatorTintColor = UIColor.whiteColor;
    self.dashboardControl.currentPageIndicatorTintColor = ColorUtil.styleColorBF0000;
    self.dashboardControl.userInteractionEnabled = NO;
    self.dashboardControl.backgroundColor = UIColor.clearColor;
    
    UIButton *transferBtn = [self createOperationButtonWithTitle:[LanguageUtil RBLocalizedString:@"UI0012_TransferRemittanceButton_Text"] frame:leftFrame tag:ButtonTagTransfer];
    UIButton *atmDepositBtn = [self createOperationButtonWithTitle:[LanguageUtil RBLocalizedString:@"UI0012_ATMPaymentButton_Text"] frame:rightFrame tag:ButtonTagATMDeposit];
    
    UIView *operationView = [[UIView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, frame.size.width, areaHeight)];
    operationView.backgroundColor = UIColor.clearColor;

    self.btnBackView = [[UIImageView alloc] initWithFrame:operationView.frame];
    self.btnBackView.backgroundColor = UIColor.clearColor;
    [operationView addSubview:self.btnBackView];
    [operationView addSubview:self.dashboardControl];
    [operationView addSubview:transferBtn];
    [operationView addSubview:atmDepositBtn];
    
    [self setOperationViewBackground];
    
    [self addViewAtHCenter:operationView];
}

///< 振込・振替・送金ボタンとATM・入金ボタンの背景を設定
- (void)setOperationViewBackground
{
    BackgroundViewDto *dto = [BackgroundUtil getBackgroundViewDto:self.viewDto.settingBackgroundId];
    NSString *path = [[BackgroundDownloadService sharedManager] localPathForFile:self.viewDto.settingBackgroundId];
    UIImage *backgroundImage = [UIImage imageWithContentsOfFile:path];
    BOOL isExpired = dto.hasExpiring && [BackgroundUtil isBackgroundExpired:dto.expiringDate];
    if (!isExpired && backgroundImage) {
        [BackgroundUtil setNetworkImage:dto.buttonAreaImageUrl toView:self.btnBackView handler:nil];
    } else {
        self.btnBackView.image = nil;
    }
}

///< ボタン作成
- (UIButton *) createOperationButtonWithTitle: (NSString *)title frame: (CGRect)frame tag: (NSInteger) tag
{
    UIButton *btn = [[UIButton alloc] initWithFrame:frame];
    btn.layer.cornerRadius = frame.size.height / 8;
    btn.clipsToBounds = YES;
    btn.backgroundColor = ColorUtil.styleColorBF0000;
    [btn setTitleColor:UIColor.whiteColor forState:UIControlStateNormal];
    [btn.layer setBorderColor:ColorUtil.styleColorBF0000.CGColor];
    [btn.layer setBorderWidth:1.0f];
    [btn setTitle:title forState:UIControlStateNormal];
    btn.titleLabel.font = [UIFont fontWithName:NotoSansCJKjpBold size:16.0f];
    btn.titleLabel.adjustsFontSizeToFitWidth = YES;
    btn.tag = tag;
    
    [btn addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
    
    return btn;
}

///< ボタン作成(白背景)
- (UIButton *) createOperationButtonWhiteWithTitle: (NSString *)title frame: (CGRect)frame tag: (NSInteger) tag
{
    UIButton *btn = [[UIButton alloc] initWithFrame:frame];
    btn.layer.cornerRadius = frame.size.height / 8;
    btn.clipsToBounds = YES;
    btn.backgroundColor = UIColor.whiteColor;
    [btn setTitleColor:ColorUtil.styleColorBF0000 forState:UIControlStateNormal];
    [btn.layer setBorderColor:ColorUtil.styleColorBF0000.CGColor];
    [btn.layer setBorderWidth:1.0f];
    [btn setTitle:title forState:UIControlStateNormal];
    btn.titleLabel.font = [UIFont fontWithName:NotoSansCJKjpRegular size:16.0f];
    btn.titleLabel.adjustsFontSizeToFitWidth = YES;
    btn.tag = tag;
    
    [btn addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
    
    return btn;
}

// 各セクションのタイトルビューを作成する
- (UIView *)createSectionTitleByType: (SectionType)type
{
    NSString * title;
    NSString * btnName;
    NSInteger btnTag = -1;
    switch (type) {
        case Service:
            title = [LanguageUtil RBLocalizedString:@"UI0012_ProductsAndServices_Title"];
            btnName = [LanguageUtil RBLocalizedString:@"UI0012_ShowAll"];
            btnTag = ButtonTagServiceList;
            break;
        case ReferralCode:
            title = [LanguageUtil RBLocalizedString:@"UI0012_ReferralCode_Title"];
            btnName = [LanguageUtil RBLocalizedString:@"UI0012_ReferralCode_SeeMore"];
            btnTag = ButtonTagReferralCodeSeeMore;
            break;
        case Recommendation:
            title = [LanguageUtil RBLocalizedString:@"UI0012_Recommendation_Title"];
            break;
        case Notification:
            title = [LanguageUtil RBLocalizedString:@"UI0012_Announcement_Title"];
            if (self.viewDto.bankInfoList != nil) {
                btnName =  [LanguageUtil isEnglishMode] ? self.viewDto.bankInfoListLastOne[@"EN_contents"]: self.viewDto.bankInfoListLastOne[@"contents"];
                btnTag = ButtonTagBankInfoListLastOne;
            }
            break;
        case CustomerCenter:
            title = [LanguageUtil RBLocalizedString:@"UI0012_ContactAndProcedure_Title"];
            btnName =[LanguageUtil RBLocalizedString:@"UI0012_ShowMore"];;
            btnTag = ButtonTagCustomerCenter;
            break;
        case GroupService:
            title = [LanguageUtil RBLocalizedString:@"UI0012_RakutenGroupService_Title"];
            break;
        default:
            title = [LanguageUtil RBLocalizedString:@"UI0012_ContactAndProcedure_Title"];
            break;
    }
    

    UIView *view = [[UIView alloc] init];
    view.backgroundColor = UIColor.clearColor;
    
    // タイトル
    UILabel *titleLbl = [MakeViewUtil labelWithTextType:Japanese text:title textColor:UIColor.blackColor fontSize:16.0f isbold:YES labelType:Text width:0.0f];
    [titleLbl sizeToFit];
    CGFloat titleWidth = titleLbl.frame.size.width;
    CGFloat titleHeight = titleLbl.frame.size.height;
    titleLbl.frame = CGRectMake(16.0f, 16.0f, titleWidth, titleHeight);
    //タイトルが見切れないように調整
    CGFloat height = (self.frame.size.width * 52 / 375) > (titleHeight + 16.0f) ? self.frame.size.width * 52 / 375: titleHeight + 16.0f;
    view.frame = CGRectMake(0.0f, 0.0f, self.frame.size.width, height);
    [view addSubview:titleLbl];
    
    if (type == Recommendation) {
        // あなたにおすすめに対して、テキストにshadowを設定する
        titleLbl.layer.shadowRadius = 1;
        titleLbl.layer.shadowOffset = CGSizeMake(-1, 1);
        titleLbl.layer.shadowColor = UIColor.whiteColor.CGColor;
        titleLbl.layer.shadowOpacity = 1;
    }
    
    // リンクボタン
    if (btnTag != -1) {
        UILabel * linkLbl = [MakeViewUtil labelWithTextType:Japanese text:btnName textColor:ColorUtil.styleColor0277BD fontSize:14.0f isbold:NO labelType:Label width:0.0f];
        [linkLbl sizeToFit];
        CGFloat linkWidth = linkLbl.frame.size.width;
        UIButton *linkBtn = [[UIButton alloc] initWithFrame:CGRectMake(self.frame.size.width - 16.0f - linkWidth, 16.0f, linkWidth, 14.0f)];
        linkBtn.tag = btnTag;
        [linkBtn addSubview:linkLbl];
        [linkBtn addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
        [view addSubview:linkBtn];
    }
    
    return view;
}
// 最近の履歴セクションのタイトルビューを作成する
- (UIView *)createHistorySectionTitleByType
{
    UIView *view = [[UIView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 52.0f)];
    view.backgroundColor = UIColor.clearColor;

    // タイトル
    UILabel *titleLbl = [MakeViewUtil labelWithTextType:Japanese text:[LanguageUtil RBLocalizedString:@"UI0012_History_Title"] textColor:UIColor.blackColor fontSize:16.0f isbold:YES labelType:Label width:0.0f];
    [titleLbl sizeToFit];
    CGFloat titleWidth = titleLbl.frame.size.width;
    titleLbl.frame = CGRectMake(16.0f, 16.0f, titleWidth, 20.0f);
    [view addSubview:titleLbl];
    
    // リンクボタン
    if ([HistoryUtil getHistoryServiceCount] > 0) {
        UILabel * linkLbl = [MakeViewUtil labelWithTextType:Japanese text:[LanguageUtil RBLocalizedString:@"UI0012_DeleteHistory"] textColor:ColorUtil.styleColor0277BD fontSize:14.0f isbold:NO labelType:Label width:0.0f];
        linkLbl.tag = SectionHeaderViewButtonLabel;
        [linkLbl sizeToFit];
        CGFloat linkWidth = linkLbl.frame.size.width;
        self.historySectionLinkBtn = [[UIButton alloc] initWithFrame:CGRectMake(self.frame.size.width - 16.0f - linkWidth, 16.0f, linkWidth, 14.0f)];
        self.historySectionLinkBtn.tag = ButtonTagHistoryDelete;
        [self.historySectionLinkBtn addSubview:linkLbl];
        [self.historySectionLinkBtn addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
        [view addSubview:self.historySectionLinkBtn];
    }
    
    return view;
}


///< 最近の履歴
- (UIView *) addHistoryView
{
    // 消去モードを初期化
    isHistoryDeleteMode = false;

    UIUXTOPStackLayoutView *baseView = [[UIUXTOPStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    baseView.backgroundColor = UIColor.whiteColor;
    self.historyView = baseView;
    
    UIView *titleView = [self createHistorySectionTitleByType];
    titleView.backgroundColor = UIColor.whiteColor;
    [baseView addViewAtHCenter:titleView];

    self.historyStackView = [[HistoryHorizontalStackLayoutView alloc] initWithFrame:CGRectMake(0, 0, 0, 150.0f)];
    
    // 履歴データ取得
    NSMutableArray * historyServices = [HistoryUtil getHistoryServicesDtoArray];
    if (!historyServices || historyServices.count == 0) {
        // 履歴が0件の場合
        UIView * messageView = [self createNonStackingHistoryView];
        [baseView addViewAtHCenter:messageView];
        [baseView sizeToFit];
        [baseView addBlankWithHeight:20.0f];
        return baseView;
    }
    
    // 履歴ボタン作成
    CGFloat buttonHeight = 0;
    for (HistoryServiceItemDto * serviceItemDto in historyServices) {
        UIView * view = [self makeHistoryItemButton:serviceItemDto];
        [self.historyStackView addView:view];
        if (buttonHeight < view.frame.size.height) {
            // ボタンの高さが可変のため最大値を保持する
            buttonHeight = view.frame.size.height;
        }
    }
    CHANGE_HEIGHT(self.historyStackView, buttonHeight); // 横StackViewの高さをボタンの高さに合わせる
    CHANGE_ORIGIN_X(self.historyStackView, 12.0f); // 右余白

    // 横StackViewを横スクロール用のViewに追加
    self.historyScrollView = [[UIScrollView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, 150.0f)];
    self.historyScrollView.backgroundColor = UIColor.whiteColor;
    self.historyScrollView.contentSize = CGSizeMake(self.historyStackView.frame.size.width +20.0, self.historyStackView.frame.size.height);
    CHANGE_HEIGHT(self.historyScrollView, buttonHeight);
    self.historyScrollView.bounces = YES;
    self.historyScrollView.scrollEnabled = YES;
    [self.historyScrollView addSubview:self.historyStackView];

    [baseView addViewAtHCenter:self.historyScrollView];
    [baseView addBlankWithHeight:20.0f];
    [baseView sizeToFit];
    return baseView;
}

///<   最近の履歴を更新
- (void)updateHistoryView
{
    NSInteger index = [self.stackLayoutView indexOfView:self.historyView];
    self.historyView = [self addHistoryView];
    [self.stackLayoutView removeViewAtIndex:index animated:NO];
    [self.stackLayoutView insertView:self.historyView atIndex:index animated:NO];
}

///< 0件の場合のビュー表示
- (UIView *) createNonStackingHistoryView
{
    UIUXTOPStackLayoutView *messageView = [[UIUXTOPStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    UILabel * historyMessageLbl1 = [MakeViewUtil labelWithTextType:Japanese text:[LanguageUtil RBLocalizedString:@"UI0012_NoHistory_Title"]
                                               textColor:UIColor.blackColor
                                                fontSize:14.0f
                                                  isbold:YES
                                               labelType:Label
                                                   width:0.0f];
    historyMessageLbl1.textAlignment = NSTextAlignmentCenter;
    [messageView addViewAtHCenter:historyMessageLbl1];
    UILabel * historyMessageLbl2 = [MakeViewUtil labelWithTextType:Japanese text:[LanguageUtil RBLocalizedString:@"UI0012_NoHistory_Text"]
                                               textColor:UIColor.blackColor
                                                fontSize:10.0f
                                                  isbold:NO
                                               labelType:Label
                                                   width:0.0f];
    historyMessageLbl2.textAlignment = NSTextAlignmentCenter;
    [messageView addViewAtHCenter:historyMessageLbl2];
    [messageView sizeToFit];
    
    // ボタン非表示
    self.historySectionLinkBtn.hidden = YES;
    // 履歴削除モードリセット
    isHistoryDeleteMode = NO;
    
    return messageView;
}

///< 最近の履歴ボタンの作成
- (UIView *) makeHistoryItemButton : (HistoryServiceItemDto *)serviceItemDto
{
    // レイアウトを設定する. 幅は「商品・サービス」のボタンと同じ幅になるように設定している
    CGFloat cellPadding = 16.0f;
    CGFloat itemWidth = (self.frame.size.width - 3 * cellPadding - 2 * 20.0f) / 4;

    HistoryItemCell * view = [[HistoryItemCell alloc] initWithFrame:CGRectMake(0.0f, 7.0f, itemWidth, 0.0f)];
    [view setSubView:serviceItemDto];
    view.delegate = self;
    return view;
}



///< 商品・サービス
- (void) addServiceView
{
    UIUXTOPStackLayoutView *baseView = [[UIUXTOPStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    baseView.backgroundColor = UIColor.whiteColor;
    
    UIView *titleView = [self createSectionTitleByType: Service];
    titleView.backgroundColor = UIColor.whiteColor;
    [baseView addViewAtHCenter:titleView];
    
    // 商品・サービスを設定
    UICollectionViewFlowLayout *layout = UICollectionViewFlowLayout.new;
    
    // レイアウトを設定する.
    CGFloat cellPadding = 16.0f;
    CGFloat itemWidth = (self.frame.size.width - 3 * cellPadding - 2 * 20.0f) / 4;
    CGFloat itemHeight = 60.0f + 7.0f + 28.0f + 17.0f;
    CGFloat spacing = (self.frame.size.width - 2 * 26.0f - 4 * itemWidth) / 3;
    layout.itemSize = CGSizeMake(itemWidth, itemHeight);
    layout.minimumLineSpacing = 0.0f;
    layout.minimumInteritemSpacing = spacing;
    layout.sectionInset = UIEdgeInsetsMake(0.0f, 26.0f, 0.0f, 26.0f);
    CGRect serviceFrame = CGRectMake(0.0f, 0.0f, self.frame.size.width, 224.0f);
    self.serviceView = [[UICollectionView alloc] initWithFrame:serviceFrame collectionViewLayout:layout];
    self.serviceView.backgroundColor = UIColor.whiteColor;
    self.serviceView.dataSource = self;
    self.serviceView.delegate = self;
    [self.serviceView registerClass:[ServiceItemCell class] forCellWithReuseIdentifier:ServiceItemReuseIdentifier];
    [baseView addViewAtHCenter:self.serviceView];
    
    [baseView sizeToFit];
    [self addViewAtHCenter:baseView];
    
    RakutenBankAppDelegate *appDel = [UIApplication sharedApplication].delegate;
    if (![appDel isProperBranch]) {
        [self addBlankWithHeight:8.0f];
    }
}

// 友達に紹介を追加
- (void) addReferralCodeView
{
    // 区切り線
    UIView * blank = [[UIView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, 1.0f)];
    blank.backgroundColor = ColorUtil.SeparatorLightGray;
    [self addViewAtHCenter:blank];

    RakutenBankAppDelegate *appDel = [UIApplication sharedApplication].delegate;

    UIView *baseView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, self.frame.size.height)];
    UIView *referralCodeView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 140.0f, 65.0f)];
    CGFloat padding = 16.0f;

    baseView.backgroundColor = UIColor.whiteColor;
    
    UIView *titleView = [self createSectionTitleByType:ReferralCode];
    [baseView addSubview:titleView];

    // 紹介コードを送る
    UILabel * sendCodeLabel = [MakeViewUtil labelWithTextType:Japanese
                                                         text:[LanguageUtil RBLocalizedString:@"UI0012_ReferralCode_SendCode"]
                                                    textColor:ColorUtil.textColorGlay3
                                                     fontSize:10.0f
                                                       isbold:NO
                                                    labelType:Label
                                                        width:0.0f];
    // 紹介コードラベル
    self.referralCodeLabel = [MakeViewUtil labelWithTextType:Japanese
                                                        text:appDel.t0014v2Res.referralCode
                                                   textColor:UIColor.blackColor
                                                    fontSize:16.0f
                                                      isbold:YES
                                                   labelType:Label
                                                       width:0.0f];
    
    // 紹介コードを送る
    referralCodeView.backgroundColor = [ColorUtil convertToUIColor:@"0xF7F7F7"];
    referralCodeView.layer.cornerRadius = 8.0f;
    referralCodeView.layer.borderWidth = 1.0f;
    referralCodeView.layer.borderColor = [ColorUtil convertToUIColor:@"0xD1D1D1"].CGColor;
    MOVE_WITH_ORIGIN(referralCodeView,
                     baseView.frame.size.width - padding - referralCodeView.frame.size.width,
                     titleView.frame.origin.y + titleView.frame.size.height);
    
    MOVE_WITH_ORIGIN(sendCodeLabel, 8.0f, 8.0f);
    [referralCodeView addSubview:sendCodeLabel];
    MOVE_WITH_ORIGIN(self.referralCodeLabel, 8.0f, sendCodeLabel.frame.origin.y + sendCodeLabel.frame.size.height + 8.0f);
    [referralCodeView addSubview:self.referralCodeLabel];

    UIImageView *iconView = [[UIImageView alloc] initWithFrame:CGRectMake(referralCodeView.frame.size.width - 22.0f - 10.0f,
                                                                          self.referralCodeLabel.frame.origin.y + (self.referralCodeLabel.frame.size.height - 22.0f) / 2.0f,
                                                                          22.0f,
                                                                          22.0f)];
    iconView.image = [UIImage imageNamed:@"icon_share_blue"];
    iconView.contentMode = UIViewContentModeScaleAspectFill;
    iconView.clipsToBounds = YES;
    [referralCodeView addSubview:iconView];

    CHANGE_HEIGHT(referralCodeView, 65.0f);
    [baseView addSubview:referralCodeView];

    [referralCodeView setUserInteractionEnabled:YES];
    [referralCodeView addGestureRecognizer:[[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(onSendCode)]];

    // CSF画像
    // 画像幅は191で固定だが、もしも画面幅に収まらない場合の対策として判定、縮小ロジックを入れておく
    CGFloat csfWidth = 191.0f;
    CGFloat csfRatio = 65.0f / 191.0f;
    CGFloat spaceWidht = baseView.frame.size.width - referralCodeView.frame.size.width - padding*2 - 12.0f;
    if (spaceWidht < csfWidth) {
        csfWidth = spaceWidht;
    }
    UIView * csfView = [[UIView alloc] initWithFrame:CGRectMake(padding,
                                                                referralCodeView.frame.origin.y,
                                                                csfWidth,
                                                                csfWidth * csfRatio)];
    [baseView addSubview:csfView];
    
    // ベースビューの高さを計算して設定
    CGFloat baseHeight = titleView.frame.origin.y + titleView.frame.size.height + 16.0f;
    if (csfView.frame.size.height > referralCodeView.frame.size.height) {
        baseHeight += csfView.frame.size.height;
    } else {
        baseHeight += referralCodeView.frame.size.height;
    }
    RESIZE_WITH_SIZE(baseView, baseView.frame.size.width, baseHeight)
    
    [self addViewAtHCenter:baseView];
    
    // CSF画像読み込み
    NSString * imageUrl;
    NSString * defaultImageName;
    if ([LanguageUtil isEnglishMode]) {
        imageUrl = appDel.externalFileDto.referralCodeInfoEnImg;
        defaultImageName = @"ReferralCodeInfoEn";
    } else {
        imageUrl = appDel.externalFileDto.referralCodeInfoImg;
        defaultImageName = @"ReferralCodeInfo";
    }
    
    [UIUXTOPMakeViewUtil setNetworkImage:imageUrl toView:csfView defaultImage:[UIImage imageNamed:defaultImageName] insets:UIEdgeInsetsZero handler:nil];
}


// あなたにおすすめ領域を追加
- (void) addRecommendationView
{
    UIView *titleView = [self createSectionTitleByType: Recommendation];
    CGFloat padding = self.frame.size.width * 16 / 375;
    
    self.bannerView1 = [self createBannerView: CGRectGetMaxY(titleView.frame)];
    self.bannerView2 = [self createBannerView: CGRectGetMaxY(self.bannerView1.frame) + padding];
    self.bannerView3 = [self createBannerView: CGRectGetMaxY(self.bannerView2.frame) + padding];
    
    self.bannerView1.tag = ButtonTagBanner1;
    self.bannerView2.tag = ButtonTagBanner2;
    self.bannerView3.tag = ButtonTagBanner3;
    
    // background image
    CGFloat width = self.frame.size.width;
    CGFloat height = titleView.frame.size.height + self.bannerView1.frame.size.height + padding + self.bannerView2.frame.size.height + padding + self.bannerView3.frame.size.height + padding * 3 / 2;
    CGRect recommendationFrame = CGRectMake(0, 0, width, height);
    self.recommendationBackView = [[UIImageView alloc] initWithFrame:recommendationFrame];
    self.recommendationBackView.contentMode = UIViewContentModeScaleAspectFill;
    self.recommendationBackView.clipsToBounds = YES;
    
    [self setRecomendationViewwBackground];
    
    // 読込中アニメーションViewを生成しておく
    self.bannerLoadingAnimationView = [MakeViewUtil makeLoadingCircleView:12.0f iconSize:16.0f];
    self.bannerLoadingView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, self.bannerLoadingAnimationView.frame.size.width + 18.0f * 2.0f, self.bannerLoadingAnimationView.frame.size.height + 8.0f * 2.0f)];
    self.bannerLoadingView.layer.cornerRadius = self.bannerLoadingView.frame.size.height / 2.0f;
    self.bannerLoadingView.backgroundColor = UIColor.whiteColor;
    MOVE_WITH_ORIGIN(self.bannerLoadingAnimationView, 18, 8.0f);
    [self.bannerLoadingView addSubview:self.bannerLoadingAnimationView];
    MOVE_WITH_ORIGIN(self.bannerLoadingView, (recommendationFrame.size.width - self.bannerLoadingView.frame.size.width) / 2.0f, self.bannerView1.frame.origin.y + ((self.bannerView3.frame.origin.y + self.bannerView1.frame.size.height - self.bannerView1.frame.origin.y) - self.bannerLoadingView.frame.size.height) / 2.0f)
    self.bannerLoadingView.hidden = YES;
    
    UIView *recommendationView = [[UIView alloc] initWithFrame:recommendationFrame];
    
    [self addViewAtHCenter:recommendationView];
    [recommendationView addSubview:self.recommendationBackView];
    [recommendationView addSubview:titleView];
    [recommendationView addSubview:self.bannerView1];
    [recommendationView addSubview:self.bannerView2];
    [recommendationView addSubview:self.bannerView3];
    [recommendationView addSubview:self.bannerLoadingView];
    
}

///< あなたにおすすめの背景を設定
- (void)setRecomendationViewwBackground
{
    BackgroundViewDto *dto = [BackgroundUtil getBackgroundViewDto:self.viewDto.settingBackgroundId];
    NSString *path = [[BackgroundDownloadService sharedManager] localPathForFile:self.viewDto.settingBackgroundId];
    UIImage *backgroundImage = [UIImage imageWithContentsOfFile:path];
    BOOL isExpired = dto.hasExpiring && [BackgroundUtil isBackgroundExpired:dto.expiringDate];
    if (!isExpired && backgroundImage) {
        [BackgroundUtil setNetworkImage:dto.recommendationAreaImageUrl toView:self.recommendationBackView handler:nil];
    } else {
        self.recommendationBackView.image = nil;
    }
}

///< バナービューを作成
- (UIButton *)createBannerView: (CGFloat)originY
{
    CGFloat height = self.frame.size.width * 96 / 375;
    CGFloat padding = self.frame.size.width * 16 / 375;
    CGRect bannerFrame = CGRectMake(padding, originY, self.frame.size.width, height);
    UIButton *bannerView = [[UIButton alloc] initWithFrame:bannerFrame];
    bannerView.imageEdgeInsets = UIEdgeInsetsMake(0.0f, 0.0f, 0.0f, 16.0f);
    bannerView.backgroundColor = UIColor.whiteColor;
    bannerView.imageView.contentMode = UIViewContentModeScaleAspectFill;
    bannerView.contentHorizontalAlignment = UIControlContentHorizontalAlignmentFill;
    bannerView.contentVerticalAlignment = UIControlContentVerticalAlignmentFill;
    bannerView.layer.cornerRadius = 10.0f;
    bannerView.clipsToBounds = YES;
    [bannerView addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
    
    return bannerView;
}

///< キャンペーンエリア追加
-(void) addCampaignView
{
    TOPCampaignView * prom = nil;
    NSInteger pageCount = [self.viewDto.campaignCount integerValue];
    if (pageCount) {
        // キャンペーンエリア表示
        prom = [[TOPCampaignView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, 0)
                                       viewController:(ParentController *)self.topMainViewDelegate
                                                pages:pageCount
                                         campaignList:self.viewDto.campaignResponceList];
        prom.topCampaignViewDelegate = (id)self.topMainViewDelegate;
        [self addViewAtHCenter:prom];
        [(ParentController *)self.topMainViewDelegate registerPromotion:prom]; // viewDidAppear前であればstartは自動実行される
        [self addBlankWithHeight:8.0f];
        self.topCampaignView = prom;
    } else {
        // キャンペーンエリア非表示(高さ0のダミーViewを表示)
        self.topCampaignView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, 0)];
        [self addViewAtHCenter:self.topCampaignView];
    }
}

///< キャンペーンエリア更新
-(void) updateCampaignView:(BOOL)updating
{
    TOPCampaignView * prom = nil;
    NSInteger pageCount = [self.viewDto.campaignCount integerValue];
    NSInteger index = [self.stackLayoutView indexOfView:self.topCampaignView];
    if (updating) {
        // 読み込み中表示
        prom = [[TOPCampaignView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, 0)
                                       viewController:(ParentController *)self.topMainViewDelegate
                                                pages:0
                                         campaignList:nil];
        // 既存のキャンペーンエリアと差し替え
        [self.stackLayoutView removeViewAtIndex:index animated:NO];
        [self.stackLayoutView insertView:prom atIndex:index animated:NO];
        
        // 読込中アニメーションViewを生成して貼り付け
        self.topCampaignLoadingView = [MakeViewUtil makeLoadingCircleView:12.0f iconSize:16.0f];
        MOVE_WITH_ORIGIN(self.topCampaignLoadingView, (prom.frame.size.width - self.topCampaignLoadingView.frame.size.width) / 2.0f, (prom.frame.size.height - self.topCampaignLoadingView.frame.size.height) / 2.0f)
        [prom addSubview:self.topCampaignLoadingView];

        self.topCampaignView = prom;
    } else {
        if (pageCount) {
            // キャンペーンエリア作り直し
            prom = [[TOPCampaignView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, 0)
                                           viewController:(ParentController *)self.topMainViewDelegate
                                                    pages:pageCount
                                             campaignList:self.viewDto.campaignResponceList];
            prom.topCampaignViewDelegate = (id)self.topMainViewDelegate;
            
            // 既存のキャンペーンエリアと差し替え
            [self.stackLayoutView removeViewAtIndex:index animated:NO];
            [self.stackLayoutView insertView:prom atIndex:index animated:NO];
            
            [(ParentController *)self.topMainViewDelegate registerPromotion:prom]; // viewDidAppear前であればstartは自動実行される
            self.topCampaignView = prom;
        } else {
            // 非表示、ダミーの高さ0のキャンペーンエリアを追加しておく
            self.topCampaignView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, 0)];
            [self.stackLayoutView removeViewAtIndex:index animated:NO];
            [self.stackLayoutView insertView:self.topCampaignView atIndex:index animated:NO];
        }
    }
}

///< セグメントバナーloading枠追加
- (void)addSegmentBannerLoadingView
{
    // 読込中アニメーションViewを生成しておく
    RBAnimationBaseView * segmentBannerLoadingAnimationView = [MakeViewUtil makeLoadingCircleView:12.0f iconSize:16.0f];
    CGFloat animationViewWidth = segmentBannerLoadingAnimationView.frame.size.width + 18.0f * 2.0f;
    CGFloat animationViewHeight = segmentBannerLoadingAnimationView.frame.size.height + 8.0f * 2.0f;
    UIView * segmentBannerLoadingView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, animationViewWidth, animationViewHeight)];
    segmentBannerLoadingView.layer.cornerRadius = segmentBannerLoadingView.frame.size.height / 2.0f;
    segmentBannerLoadingView.backgroundColor = UIColor.whiteColor;
    MOVE_WITH_ORIGIN(segmentBannerLoadingAnimationView, 18, 8.0f);
    [segmentBannerLoadingView addSubview:segmentBannerLoadingAnimationView];
    
    CGRect frame = CGRectMake(0.0f, 0.0f, self.frame.size.width, animationViewHeight + 2 * 16.0f);
    // セグメントバナーView
    UIView *segmentBannerView = [[UIView alloc] initWithFrame:frame];
    segmentBannerView.backgroundColor = self.backgroundColor;
    [segmentBannerView addSubview:segmentBannerLoadingView];
    segmentBannerLoadingView.center = segmentBannerView.center;
    if (self.indexForSegmentBannerView) {
        [self removeViewAtIndex:self.indexForSegmentBannerView animated:NO];
        [self insertView:segmentBannerView atIndex:self.indexForSegmentBannerView animated:NO];
    } else {
        self.indexForSegmentBannerView = [self addViewAtHCenter: segmentBannerView] - 1;
    }
}

///< セグメントバナー枠追加
- (void)addSegmentBannerView
{
    [self addSegmentBannerLoadingView];
    [self createSegmentBannerBtn];
}

- (void) createSegmentBannerBtn
{
    // セグメントバナーボタン作成。高さは画像の読み込み完了後に調整
    self.segmentBannerBtn = [UIButton buttonWithType:UIButtonTypeCustom];
    CGFloat sideSpace = 16.0f;
    self.segmentBannerBtn.frame = CGRectMake(sideSpace, 0.0f, (self.frame.size.width - (sideSpace * 2)), 0.0f);
    self.segmentBannerBtn.exclusiveTouch = YES;
    self.segmentBannerBtn.tag = ButtonTagSegmentBanner;
    [self.segmentBannerBtn addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
}

///< 銀行からのお知らせ追加
- (void)addBankInfo
{
    CGRect frame = CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f);
    UIUXTOPStackLayoutView *baseView = [[UIUXTOPStackLayoutView alloc] initWithFrame:frame];
    self.bankInfoView = baseView;
    [self addViewAtHCenter:self.bankInfoView];
    [self addBlankWithHeight:8.0f];
}

///< 銀行からのお知らせViewを作成して挿入
- (void)updateBankInfo
{
    CGRect frame = CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f);
    UIUXTOPStackLayoutView *baseView = [[UIUXTOPStackLayoutView alloc] initWithFrame:frame];
    baseView.backgroundColor = UIColor.whiteColor;

    UIView *titleView = [self createSectionTitleByType: Notification];
    titleView.backgroundColor = UIColor.whiteColor;
    [baseView addViewAtHCenter:titleView];
    
    CGFloat height = self.viewDto.bankInfoList.count * k_HeightCell;
    self.infoTable = [[UITableView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, frame.size.width, height)
                                                  style:UITableViewStylePlain];
    
    self.infoTable.backgroundColor = UIColor.whiteColor;
    self.infoTable.separatorStyle = UITableViewCellSeparatorStyleNone;  //cellセパレータ無し
    self.infoTable.scrollEnabled = NO;
    self.infoTable.backgroundColor = [UIColor clearColor];
    self.infoTable.dataSource = self;
    self.infoTable.delegate = self;
    
    self.infoTable.rowHeight = k_HeightCell;
    
    [baseView addViewAtHCenter:self.infoTable];
    
    [baseView sizeToFit];
    
    // お知らせビューを差し替え
    NSInteger index = [self indexOfView:self.bankInfoView];
    self.bankInfoView = baseView;
    [self removeViewAtIndex:index animated:NO];
    [self insertView:self.bankInfoView atIndex:index animated:NO];
}

///< お問合せ・お手続き
- (void) addCustomerCenterView
{
    RakutenBankAppDelegate *delegate = UIApplication.sharedApplication.delegate;
    SectionType type = [delegate isProperBranch] ? CustomerCenter : CustomerCenterPartner;
    CGFloat height = [delegate isProperBranch] ? 224.0f : 112.0f;
    
    UIUXTOPStackLayoutView *baseView = [[UIUXTOPStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    baseView.backgroundColor = UIColor.whiteColor;
    
    UIView *titleView = [self createSectionTitleByType: type];
    titleView.backgroundColor = UIColor.whiteColor;
    [baseView addViewAtHCenter:titleView];
    
    UICollectionViewFlowLayout *layout = UICollectionViewFlowLayout.new;
    CGFloat cellPadding = 16.0f;
    CGFloat itemWidth = (self.frame.size.width - 3 * cellPadding - 2 * 20.0f) / 4;
    CGFloat itemHeight = 60.0f + 7.0f + 28.0f + 17.0f;
    CGFloat spacing = (self.frame.size.width - 2 * 26.0f - 4 * itemWidth) / 3;
    layout.itemSize = CGSizeMake(itemWidth, itemHeight);
    layout.minimumLineSpacing = 0.0f;
    layout.minimumInteritemSpacing = spacing;
    layout.sectionInset = UIEdgeInsetsMake(0.0f, 26.0f, 0.0f, 26.0f);
    CGRect serviceFrame = CGRectMake(0.0f, 0.0f, self.frame.size.width, height);
    self.customerCenterView = [[UICollectionView alloc] initWithFrame:serviceFrame collectionViewLayout:layout];
    self.customerCenterView.backgroundColor = UIColor.whiteColor;
    self.customerCenterView.dataSource = self;
    self.customerCenterView.delegate = self;
    [self.customerCenterView registerClass:[ServiceItemCell class] forCellWithReuseIdentifier:ServiceItemReuseIdentifier];
    [baseView addViewAtHCenter:self.customerCenterView];
    
    [baseView sizeToFit];
    [self addViewAtHCenter:baseView];
}

///< 楽天銀行グループサービス
- (void)addGroupServiceView
{
   
    UIUXTOPStackLayoutView *baseView = [[UIUXTOPStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    baseView.backgroundColor = UIColor.whiteColor;
    self.groupServiceBaseView = baseView;
    [self addBlankWithHeight:8.0f];
    [self addViewAtHCenter:baseView];
}

- (void) updateGroupService {
    //1件もない場合は表示しない
    if (self.viewDto.groupServiceItems.count == 0) {
        return;
    }
    CGRect frame = CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f);
    UIUXTOPStackLayoutView *baseView = [[UIUXTOPStackLayoutView alloc] initWithFrame:frame];
    baseView.backgroundColor = UIColor.whiteColor;

    UIView *titleView = [self createSectionTitleByType: GroupService];
    titleView.backgroundColor = UIColor.whiteColor;
    [baseView addViewAtHCenter:titleView];
    
    UICollectionViewFlowLayout *layout = UICollectionViewFlowLayout.new;
    CGFloat cellPadding = 16.0f;
    CGFloat itemWidth = (self.frame.size.width - 3 * cellPadding - 2 * 20.0f) / 4;
    CGFloat itemHeight = 60.0f + 7.0f + 28.0f + 17.0f;
    CGFloat spacing = (self.frame.size.width - 2 * 26.0f - 4 * itemWidth) / 3;
    layout.itemSize = CGSizeMake(itemWidth, itemHeight);
    layout.minimumLineSpacing = 0.0f;
    layout.minimumInteritemSpacing = spacing;
    layout.sectionInset = UIEdgeInsetsMake(0.0f, 26.0f, 0.0f, 26.0f);
    CGRect serviceFrame = CGRectMake(0.0f, 0.0f, self.frame.size.width, 224.0f);
    self.groupServiceView = [[UICollectionView alloc] initWithFrame:serviceFrame collectionViewLayout:layout];
    self.groupServiceView.backgroundColor = UIColor.whiteColor;
    self.groupServiceView.dataSource = self;
    self.groupServiceView.delegate = self;
    [self.groupServiceView registerClass:[GroupServiceItemCell class] forCellWithReuseIdentifier:GroupServiceItemReuseIdentifier];
    [baseView addViewAtHCenter:self.groupServiceView];

    [baseView sizeToFit];
    // グループサービスビューを差し替え
    NSInteger index = [self indexOfView:self.groupServiceBaseView];
    self.groupServiceBaseView = baseView;
    [self removeViewAtIndex:index animated:NO];
    [self insertView:self.groupServiceBaseView atIndex:index animated:NO];
}

///< 背景を設定する
- (void) addBackgroundSettingView
{
    // bottom area image
    CGFloat width = self.frame.size.width;
    CGFloat height = width * 108 / 375;
    CGRect bottomFrame = CGRectMake(0, 0, width, height);
    UIView *bottomView = [[UIView alloc] initWithFrame:bottomFrame];
    
    self.bottomImageView = [[UIImageView alloc] initWithFrame: bottomFrame];
    self.bottomImageView.contentMode = UIViewContentModeScaleAspectFill;
    self.bottomImageView.clipsToBounds = YES;
    [bottomView addSubview:self.bottomImageView];

    [self setBottomViewwBackground];
    
    CGFloat btnHeight = height * 44 / 108;
    CGFloat btnWidth = self.frame.size.width * 163 / 375;
    UIButton *settingBtn = [[UIButton alloc] initWithFrame: CGRectMake(0, 0, btnWidth, btnHeight)];
    settingBtn.center = self.bottomImageView.center;
    settingBtn.backgroundColor = UIColor.whiteColor;
    settingBtn.layer.cornerRadius = btnHeight / 8;
    settingBtn.layer.borderWidth = 1.0f;
    settingBtn.layer.borderColor = ColorUtil.styleColorBF0000.CGColor;
    [settingBtn setTitle:[LanguageUtil RBLocalizedString:@"UI0012_ChangeBackground_Title"] forState:UIControlStateNormal];
    [settingBtn setTitleColor:ColorUtil.styleColorBF0000 forState:UIControlStateNormal];
    settingBtn.titleLabel.font = [UIFont systemFontOfSize:16.0f];
    settingBtn.tag = ButtonTagBackgroundSetting;
    [settingBtn addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
    [bottomView addSubview:settingBtn];

    [self addViewAtHCenter:bottomView];
}

///< 背景画像を更新
- (void)updateBackgroundImage
{
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    if ([appDel isProperBranch]) {
        [self setOperationViewBackground];
        [self setRecomendationViewwBackground];
    }
    [self setBottomViewwBackground];
}

///< 最下部の背景を設定
- (void)setBottomViewwBackground
{
    BackgroundViewDto *dto = [BackgroundUtil getBackgroundViewDto:self.viewDto.settingBackgroundId];
    NSString *path = [[BackgroundDownloadService sharedManager] localPathForFile:self.viewDto.settingBackgroundId];
    UIImage *backgroundImage = [UIImage imageWithContentsOfFile:path];
    BOOL isExpired = dto.hasExpiring && [BackgroundUtil isBackgroundExpired:dto.expiringDate];
    RakutenBankAppDelegate *appDel = [UIApplication sharedApplication].delegate;
    if (!isExpired && backgroundImage && [appDel isProperBranch]) {
        [BackgroundUtil setNetworkImage:dto.bottomAreaImageUrl toView:self.bottomImageView handler:nil];
    } else {
        self.bottomImageView.image = nil;
    }
}

/**
 各種の使い方ガイドを表示する
 */
-(void)showGuides{
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    UIUXTOPMainViewController *controller=(UIUXTOPMainViewController *)self.topMainViewDelegate;
    BOOL isFromGuide = NO;
    if([controller.navigationController.viewControllers count] > 4){
        UIViewController *vc= [[controller.navigationController viewControllers]objectAtIndex: [controller.navigationController.viewControllers count]-4];
        if ([vc isKindOfClass:HowToUseGuideViewController.class]) {
            isFromGuide = YES;
        }
    }
    DashboardFlowLayout * layout = [[DashboardFlowLayout alloc] init];
    UIViewController *vc;
    if([controller.navigationController.viewControllers count] > 3){
         vc= [[controller.navigationController viewControllers]objectAtIndex: [controller.navigationController.viewControllers count]-3];
        if([vc isKindOfClass:DashboardGuideViewController.class]){
            if (self.viewDto.dashboardShowArray.count > 1) {
                // タップイベントを無効にする.
                [UIApplication.sharedApplication beginIgnoringInteractionEvents];
                [self.dashboardView setContentOffset:CGPointMake([layout pageWidth] * self.viewDto.dashboardShowArray.count * k_InfinityCount / 2, 0) animated:NO];
                dispatch_after(dispatch_time(DISPATCH_TIME_NOW, 0.5 * NSEC_PER_SEC),
                               dispatch_get_main_queue(), ^{
                                   [self.dashboardView setContentOffset:CGPointMake([layout pageWidth] * (self.viewDto.dashboardShowArray.count * k_InfinityCount / 2 + self.viewDto.dashboardShowArray.count - 1), 0) animated:YES];
                                       dispatch_after(dispatch_time(DISPATCH_TIME_NOW, 0.5 * NSEC_PER_SEC),
                                                      dispatch_get_main_queue(), ^{
                                           // タップイベントを回復する.
                                           [UIApplication.sharedApplication endIgnoringInteractionEvents];
                                                          DashboardGuideView *dashboardGuideView = [[DashboardGuideView alloc] init];
                                                          dashboardGuideView.guideImageView.image=[UIImage imageNamed:[GuideMakeViewUtil getAspectFilename:@"dashboard2" checkLanguage:YES]];
                                                          dashboardGuideView.dashboardGuideViewDelegate = (id)self.topMainViewDelegate;
                                                          isFromGuide?[dashboardGuideView.closeGuideAndUseAppButton setTitle:[LanguageUtil RBLocalizedString:@"DashboardGuide_BackTo_HowToUse"] forState:UIControlStateNormal]:[dashboardGuideView.closeGuideAndUseAppButton setTitle:[LanguageUtil RBLocalizedString:@"DashboardGuide_EndOfGuideButton_Text"] forState:UIControlStateNormal];
                                                          [UIUXTOPMakeViewUtil fadeInWithView:dashboardGuideView];
                                                          [appDel.window addSubview:dashboardGuideView];
                                                          [self sentEventToRATWithEventName:@"_2"];
                                                  });
                               });
            }
        }
    }
    // サービスガイド.
    BOOL hasLogin = [DataStorageService getBOOL:ValueTypeUserDefaultsHasLogin];
    NSString *oldVersion = [DataStorageService getValue:ValueTypeUserDefaultsOldVersion];
    BOOL isServiceGuideShown = [DataStorageService getBOOL:ValueTypeUserDefaultsServiceGuideShown];
    
    if (oldVersion == nil) {
        oldVersion = @"";
    }
    NSString *currentVersion = [CommonUtil getVersionInfo];

    // 登録キー存在チェック
    BOOL hasRegisterKey = appDel.registerKey != NULL && appDel.registerKey.length > 0;

    // サービスガイド・アップデートガイドの表示判定
    BOOL shouldShowServiceGuide = NO;
    BOOL shouldShowUpdateGuide = NO;
    
    if (!isServiceGuideShown) {
        // サービスガイド未表示の場合
        shouldShowServiceGuide = !hasRegisterKey;
        shouldShowUpdateGuide = hasRegisterKey;
    } else {
        // サービスガイド表示済みの場合
        shouldShowServiceGuide = NO;
        shouldShowUpdateGuide = hasLogin && ![oldVersion isEqualToString:currentVersion];
    }
    
    [DataStorageService setInputValue:[NSNumber numberWithBool:YES] valueType:ValueTypeUserDefaultsHasLogin];
    [DataStorageService setInputValue:currentVersion valueType:ValueTypeUserDefaultsOldVersion];
    
    if (shouldShowServiceGuide) {
        [DataStorageService setInputValue:[NSNumber numberWithBool:YES] valueType:ValueTypeUserDefaultsServiceGuideShown];
        if (appDel.externalFileDto.enabledShowServiceGuide) {
            // サービスガイド
            ServiceGuideView *serviceGuideView=[[ServiceGuideView alloc] initWithGuideType:serviceGuide];
            [appDel.window addSubview:serviceGuideView];
            return;
        } else if (appDel.externalFileDto.enabledShowHowtoUseGuideTutorial) {
            // 使い方案内画面
            HowToUseGuideTutorialView *howToUseGuideTutorialView=[[HowToUseGuideTutorialView alloc] initWithGuideType:serviceGuide];
            [UIUXTOPMakeViewUtil fadeInWithView:howToUseGuideTutorialView];
            [appDel.window addSubview:howToUseGuideTutorialView];
            return;
        }
    }
    
    if (shouldShowUpdateGuide) {
        [DataStorageService setInputValue:[NSNumber numberWithBool:YES] valueType:ValueTypeUserDefaultsServiceGuideShown];
        if (appDel.externalFileDto.enabledShowUpdateGuide) {
            // アップデーガイド
            ServiceGuideView *serviceGuideView=[[ServiceGuideView alloc] initWithGuideType:updateGuide];
            [appDel.window addSubview:serviceGuideView];
        } else if (appDel.externalFileDto.enabledShowHowtoUseGuideTutorial) {
            // 使い方案内画面
            HowToUseGuideTutorialView *howToUseGuideTutorialView=[[HowToUseGuideTutorialView alloc] initWithGuideType:updateGuide];
            [UIUXTOPMakeViewUtil fadeInWithView:howToUseGuideTutorialView];
            [appDel.window addSubview:howToUseGuideTutorialView];
            return;
        }
    }
}

// 提携支店用お知らせ
- (void)addPartnerBankNoticeView
{
    // CSF画像
    RakutenBankAppDelegate *appDel = [UIApplication sharedApplication].delegate;
    urlStopAccount = appDel.externalFileDto.stopAccountImageTop;
    urlEmergency = appDel.externalFileDto.noticeImageTop;
    urlNoticeCommon = appDel.externalFileDto.noticeImageTopPartnerBranchCommonImgUrl;
    urlNoticeOKB = appDel.externalFileDto.noticeImageTopPartnerBranchOKBImgUrl;
    urlNoticeNCB = appDel.externalFileDto.noticeImageTopPartnerBranchNCBImgUrl;

    // メッセージ枠を設定する
    [self setMessageAreaPartner:NO];
    
    // 提携支店共通お知らせCSF
    UIView * csfCommonView = [[UIView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    NSInteger indexForCSFPartnerCommon = [self addViewAtHCenter:csfCommonView] - 1;
    
    // OKB or NCB 支店専用お知らせCSF
    UIView * csfIndividualView = [[UIView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    self.indexForCSFPartnerIndividual = [self addViewAtHCenter:csfIndividualView] - 1;

    [self pushLoadUrl:urlNoticeCommon baseView:nil index:indexForCSFPartnerCommon];
    if ([appDel isOKBBranch]) {
        [self pushLoadUrl:urlNoticeOKB baseView:nil index:self.indexForCSFPartnerIndividual];
    } else {
        [self pushLoadUrl:urlNoticeNCB baseView:nil index:self.indexForCSFPartnerIndividual];
    }
}


- (void)addAttentionView
{
    RakutenBankAppDelegate *appDel = [UIApplication sharedApplication].delegate;

    // 注意事項（閉じる状態）
    self.attentionCloseView = [self createAttentionCloseView];
    // 注意事項（開く状態）
    self.attentionOpenView = [self createAttentionOpenView];
    // 開閉状態
    if ([appDel isOKBBranch]) {
        isAttentionClose = [DataStorageService getBOOL:ValueTypeUserDefaultsPartnerBankAttentionOKB];
    } else {
        isAttentionClose = [DataStorageService getBOOL:ValueTypeUserDefaultsPartnerBankAttentionNCB];
    }

    self.indexForAttentionView = [self addViewAtHCenter:isAttentionClose ? self.attentionCloseView : self.attentionOpenView] - 1;
    self.indexForErrorView = [self addViewAtHCenter: [[UIView alloc] initWithFrame:CGRectZero]] - 1;
    self.indexForPartnerLinkView = [self addViewAtHCenter: [[UIView alloc] initWithFrame:CGRectZero]] - 1;
}

// 注意事項（閉じる状態）
- (UIView *)createAttentionCloseView
{
    // 注意事項（閉じる状態）
    UIUXTOPStackLayoutView * baseCloseView = [[UIUXTOPStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    baseCloseView.backgroundColor = UIColor.whiteColor;
    
    UIView * closeView = [self createTitleView: NO];
    [baseCloseView addViewAtHCenter:closeView];

    return baseCloseView;
}

// 注意事項（開く状態）
- (UIView *)createAttentionOpenView
{
    RakutenBankAppDelegate *appDel = [UIApplication sharedApplication].delegate;

    // 注意事項（開く状態）
    UIUXTOPStackLayoutView * baseView = [[UIUXTOPStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
    baseView.backgroundColor = UIColor.whiteColor;
    
    UIView * titleView = [self createTitleView: YES];

    // CSF画像領域
    UIView *csfBlankView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, 1.0f)];
    csfBlankView.backgroundColor = UIColor.clearColor;

    // 閉じるボタン
    CGFloat btnWidth = 88.0f;
    UIButton *closeBtn = [[UIButton alloc] initWithFrame:CGRectMake((self.frame.size.width - btnWidth) * 0.5, 0.0f, btnWidth, 36.0f)];
    closeBtn.layer.borderColor = ColorUtil.styleColorBF0000.CGColor;
    closeBtn.layer.borderWidth = 1.0f;
    closeBtn.layer.cornerRadius = 5.0f;
    closeBtn.clipsToBounds = YES;
    [closeBtn setTitle:@"閉じる" forState:UIControlStateNormal];
    [closeBtn setTitleColor:ColorUtil.styleColorBF0000 forState:UIControlStateNormal];
    closeBtn.tag = ButtonTagClosePartnerAttention;
    [closeBtn addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
    [baseView addViewAtHCenter:titleView];
    
    [baseView addBlankWithHeight:16.0f];
    long indexForCSF = [baseView addViewAtHCenter:csfBlankView] - 1;
    [baseView addBlankWithHeight:16.0f];
    [baseView addViewAtHCenter:closeBtn];
    [baseView addBlankWithHeight:32.0f];
    
    // CSF画像
    if ([appDel isOKBBranch]) {
        urlInformationOKB = appDel.externalFileDto.informationImageTopPartnerBranchOKBImgUrl;
        [self pushLoadUrl:urlInformationOKB baseView:baseView index:indexForCSF];
    } else {
        urlInformationNCB = appDel.externalFileDto.informationImageTopPartnerBranchNCBImgUrl;
        [self pushLoadUrl:urlInformationNCB baseView:baseView index:indexForCSF];
    }

    return baseView;
}

- (void)addPartnerView
{
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;

    CGFloat width = self.frame.size.width - 2 * 16.0f;
    
    UIView *partnerView = [[UIView alloc] initWithFrame:CGRectMake(16.0f, 0.0f, width, 357.0f)];
    partnerView.backgroundColor = UIColor.whiteColor;
    partnerView.layer.cornerRadius = 5.0f;
    partnerView.clipsToBounds = YES;

    // 支店名
    UILabel *bankNameLbl = [MakeViewUtil labelWithTextType:Japanese text:self.viewDto.partnerBankName textColor:UIColor.blackColor fontSize:20.0f isbold:YES labelType:Label width:0.0f];
    [bankNameLbl sizeToFit];
    bankNameLbl.frame = CGRectMake(16.0f, 16.0f, bankNameLbl.frame.size.width, bankNameLbl.frame.size.height);
    [partnerView addSubview:bankNameLbl];
    
    // 普通預金
    UILabel *normalLbl = [MakeViewUtil labelWithTextType:Japanese text:@"普通預金" textColor:ColorUtil.styleColor807F7F fontSize:12.0f isbold:NO labelType:Label width:0.0f];
    [normalLbl sizeToFit];
    CHANGE_ORIGIN_X(normalLbl, width - 16.0f - normalLbl.frame.size.width);
    CHANGE_ORIGIN_Y(normalLbl, 56.0f);
    [partnerView addSubview:normalLbl];
    
    // 提携金融機関更新時間
    NSString *formatedTime = [NSString stringWithFormat:@"%@ 更新", [FormatUtil convertToTimeWithoutSecond:self.viewDto.partnerBankUpdateTime]];
    UILabel *updateTimeLbl = [MakeViewUtil labelWithTextType:Japanese text:formatedTime textColor:ColorUtil.styleColor807F7F fontSize:12.0f isbold:NO labelType:Label width:0.0f];
    [updateTimeLbl sizeToFit];
    updateTimeLbl.tag = LabelTagPartnerUpdateTime;
    CHANGE_ORIGIN_X(updateTimeLbl, width - 16.0f - normalLbl.frame.size.width - 16.0f - updateTimeLbl.frame.size.width);
    CHANGE_ORIGIN_Y(updateTimeLbl, 56.0f);
    [partnerView addSubview:updateTimeLbl];
    
    // 提携金融機関更新時間(読み込み中)
    self.partnerUpddateTimeLoadingView = [MakeViewUtil makeLoadingCircleView:12.0f iconSize:16.0f];
    CHANGE_ORIGIN_X(self.partnerUpddateTimeLoadingView, width - 16.0f - normalLbl.frame.size.width - 16.0f - self.partnerUpddateTimeLoadingView.frame.size.width);
    CHANGE_ORIGIN_Y(self.partnerUpddateTimeLoadingView, 56.0f + (updateTimeLbl.frame.size.height - self.partnerUpddateTimeLoadingView.frame.size.height) / 2.0f);
    [partnerView addSubview:self.partnerUpddateTimeLoadingView];
    
    // 更新ボタン
    CGFloat reloadBtnSize = 24.0f;
    UIButton *reloadBtn = [[UIButton alloc] initWithFrame:CGRectMake(CGRectGetMinX(updateTimeLbl.frame) - reloadBtnSize, 52.0f, reloadBtnSize, reloadBtnSize)];
    [reloadBtn setImage:[UIImage imageNamed:@"refresh"] forState:UIControlStateNormal];
    [reloadBtn setImageEdgeInsets:UIEdgeInsetsMake(4.0f, 4.0f, 4.0f, 4.0f)];
    reloadBtn.tag = ButtonTagReloadPartnerAsset;
    [reloadBtn addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
    [partnerView addSubview:reloadBtn];
    
    // 残高表示・非表示取得
    BOOL isDisplay = self.viewDto.depositBalanceIsDisplay;
    
    // 表示・非表示ボタン
    self.switchBtn = [[UIImageView alloc] initWithFrame: CGRectMake(width - 16.0f - 59.0f, 16.0f, 59.0f, 24.0f)];
    self.switchBtn.contentMode = UIViewContentModeScaleAspectFill;
    self.switchBtn.clipsToBounds = YES;
    UITapGestureRecognizer * recognizer = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(switchPartnerBalanceShowHide)];
    [self.switchBtn setUserInteractionEnabled:YES];
    [self.switchBtn addGestureRecognizer:recognizer];
    [self.switchBtn setImage:isDisplay ? [UIImage imageNamed:@"balanceShow"] : [UIImage imageNamed:@"balanceHide"]];
    [partnerView addSubview:self.switchBtn];

    CGFloat originYForBalance = CGRectGetMaxY(normalLbl.frame);
    // 残高
    self.partnerTotalBalanceView = [[UIView alloc] initWithFrame:CGRectMake(0.0f, originYForBalance, width, 56.0f)];
    self.partnerTotalBalanceHideView = [[UIView alloc] initWithFrame:self.partnerTotalBalanceView.frame];
    [partnerView addSubview:self.partnerTotalBalanceView];
    [partnerView addSubview:self.partnerTotalBalanceHideView];
    [self.partnerTotalBalanceView setHidden:!isDisplay];
    [self.partnerTotalBalanceHideView setHidden:isDisplay];

    // 円
    UILabel *totalBalanceYenLbl = [MakeViewUtil labelWithTextType:Japanese text:@"円" textColor:UIColor.blackColor fontSize:20.0f isbold:NO labelType:Label width:0.0f];
    totalBalanceYenLbl.frame = CGRectMake(width - 20.0f - 16.0f, 18.0f, 20.0f, 20.0f);
    totalBalanceYenLbl.tag = LabelTagAccountBalanceYen;
    [self.partnerTotalBalanceView addSubview:totalBalanceYenLbl];
    
    // 残高金額
    UILabel *totalBalanceLbl = [MakeViewUtil labelWithTextType:Amount text:@"" textColor:UIColor.blackColor fontSize:32.0f isbold:NO labelType:LabelWithAdjustment width:0.0f];
    totalBalanceLbl.tag = LabelTagAccountBalance;
    totalBalanceLbl.textAlignment = NSTextAlignmentRight;
    totalBalanceLbl.frame = CGRectMake(16.0f,
                                       8.0f - kTextPaddingForAutoShrink/2,
                                       CGRectGetMinX(totalBalanceYenLbl.frame) - 16.0f,
                                       32.0f + kTextPaddingForAutoShrink);
    [self.partnerTotalBalanceView addSubview:totalBalanceLbl];
    
    // 残高金額のロードアニメーション
    self.partnerTotalBalanceLoadingView = [MakeViewUtil makeLoadingSquareView:CGSizeMake(totalBalanceLbl.frame.size.width + totalBalanceYenLbl.frame.size.width,
                                                                                         totalBalanceLbl.frame.size.height)];
    MOVE_WITH_ORIGIN(self.partnerTotalBalanceLoadingView, totalBalanceLbl.frame.origin.x, self.partnerTotalBalanceView.frame.origin.y + totalBalanceLbl.frame.origin.y)
    [partnerView addSubview:self.partnerTotalBalanceLoadingView];

    // 金額非表示
    UILabel * totalBalanceHideLbl = [MakeViewUtil labelWithTextType:Japanese text:[LanguageUtil RBLocalizedString:@"UI0012_NoDisplayAssetMessage"] textColor:UIColor.blackColor fontSize:32.0f isbold:NO labelType:Label width:0.0f];
    [totalBalanceHideLbl sizeToFit];
    totalBalanceHideLbl.textAlignment = NSTextAlignmentRight;
    totalBalanceHideLbl.frame = CGRectMake(0.0f, 8.0f, width - 16.0f, 32.0f);
    [self.partnerTotalBalanceHideView addSubview:totalBalanceHideLbl];
    
    // 支払い可能金額
    self.partnerAvailiableBalanceView = [[UIView alloc] initWithFrame:CGRectMake(0.0f, CGRectGetMaxY(self.partnerTotalBalanceView.frame), self.frame.size.width, 16.0f)];
    
    // 支払い可能金額 円
    UILabel *partnerAvailiableBalanceYenLbl = [MakeViewUtil labelWithTextType:Japanese text:@"円" textColor:UIColor.blackColor fontSize:16.0f isbold:NO labelType:Label width:0.0f];
    partnerAvailiableBalanceYenLbl.frame = CGRectMake(width - 16.0f - 16.0f, 0.0f, 16.0f, 16.0f);
    partnerAvailiableBalanceYenLbl.tag = LabelTagPaymentBalanceYen;
    [self.partnerAvailiableBalanceView addSubview:partnerAvailiableBalanceYenLbl];
    
    if ([appDel isOKBBranch]) {
        // 支払い可能金額
        UILabel *partnerAvailiableBalanceLbl = [MakeViewUtil labelWithTextType:Amount text:@"000,000,000,000,000" textColor:UIColor.blackColor fontSize:16.0f isbold:NO labelType:LabelWithAdjustment width:0.0f];
        [partnerAvailiableBalanceLbl sizeToFit];
        partnerAvailiableBalanceLbl.tag = LabelTagPaymentBalance;
        partnerAvailiableBalanceLbl.textAlignment = NSTextAlignmentRight;
        partnerAvailiableBalanceLbl.frame = CGRectMake(partnerAvailiableBalanceYenLbl.frame.origin.x - partnerAvailiableBalanceLbl.frame.size.width, 0.0f, partnerAvailiableBalanceLbl.frame.size.width, 16.0f);
        [self.partnerAvailiableBalanceView addSubview: partnerAvailiableBalanceLbl];
        
        // 支払い可能金額タイトル
        UILabel *partnerAvailiableTitleLbl = [MakeViewUtil labelWithTextType:Japanese text:@"支払可能金額" textColor:UIColor.blackColor fontSize:10.0f isbold:NO labelType:Label width:0.0f];
        [partnerAvailiableTitleLbl sizeToFit];
        partnerAvailiableTitleLbl.frame = CGRectMake(CGRectGetMinX(partnerAvailiableBalanceLbl.frame) - partnerAvailiableTitleLbl.frame.size.width - 4.0f, 0.0f, partnerAvailiableTitleLbl.frame.size.width, 16.0f);
        partnerAvailiableTitleLbl.tag = LabelTagPaymentBalanceTitle;
        [self.partnerAvailiableBalanceView addSubview: partnerAvailiableTitleLbl];
        
        [partnerView addSubview: self.partnerAvailiableBalanceView];
        [self.partnerAvailiableBalanceView setHidden:!isDisplay];
        
        // ？ボタン
        UIButton * questionBtn = [[UIButton alloc] initWithFrame:CGRectMake(CGRectGetMinX(partnerAvailiableTitleLbl.frame) - 24.0f, -4.0f, 24.0f, 24.0f)];
        [questionBtn setImage:[UIImage imageNamed:@"question"] forState:UIControlStateNormal];
        questionBtn.imageEdgeInsets = UIEdgeInsetsMake(4.0f, 4.0f, 4.0f, 4.0f);
        questionBtn.imageView.contentMode = UIViewContentModeScaleAspectFill;
        questionBtn.contentHorizontalAlignment = UIControlContentHorizontalAlignmentFill;
        questionBtn.contentVerticalAlignment = UIControlContentVerticalAlignmentFill;
        questionBtn.tag = ButtonTagShowAvailableAmountInformation;
        [questionBtn addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
        [self.partnerAvailiableBalanceView addSubview:questionBtn];
        
        // 支払い可能金額のロードアニメーション
        CGRect loadingFrame = CGRectMake(CGRectGetMinX(questionBtn.frame),
                                         self.partnerAvailiableBalanceView.frame.origin.y,
                                         CGRectGetMaxX(partnerAvailiableBalanceYenLbl.frame) - CGRectGetMinX(questionBtn.frame),
                                         self.partnerAvailiableBalanceView.frame.size.height);
        self.partnerAvailiableBalanceLoadingView = [MakeViewUtil makeLoadingSquareView:loadingFrame.size];
        self.partnerAvailiableBalanceLoadingView.frame = loadingFrame;
        [partnerView addSubview:self.partnerAvailiableBalanceLoadingView];
    }
    
    // 分割線
    UIView * seperator = [[UIView alloc] initWithFrame:CGRectMake(16.0f, 159.0f, width - 2 * 16.0f, 1.0f)];
    seperator.backgroundColor = ColorUtil.styleColorF6F4F4;
    [partnerView addSubview:seperator];

    // 楽天銀行情報
    UILabel * rakutenLbl = [MakeViewUtil labelWithTextType:Japanese text:@"楽天銀行" textColor:UIColor.blackColor fontSize:20.0f isbold:NO labelType:Label width:0.0f];
    [rakutenLbl sizeToFit];
    CHANGE_ORIGIN_X(rakutenLbl, 16.0f);
    CHANGE_ORIGIN_Y(rakutenLbl, 175.0f);
    [partnerView addSubview:rakutenLbl];
    
    // 口座種類と口座番号
    NSString *accountNumber = [NSString stringWithFormat:@"%@ %@", self.viewDto.cardBalanceDto.accountType, self.viewDto.cardBalanceDto.accountNumber];
    UILabel *accountLbl = [MakeViewUtil labelWithTextType:Japanese text:accountNumber textColor:UIColor.blackColor fontSize:12.0f isbold:YES labelType:Label width:0.0f];
    [accountLbl sizeToFit];
    CHANGE_ORIGIN_X(accountLbl, width - 16.0f - accountLbl.frame.size.width);
    CHANGE_ORIGIN_Y(accountLbl, 175.0f);
    [partnerView addSubview:accountLbl];
    
    // 支店名
    UILabel * rakutenBranchLbl = [MakeViewUtil labelWithTextType:Japanese text:self.viewDto.cardBalanceDto.branchNameKanji textColor:ColorUtil.styleColor807F7F fontSize:12.0f isbold:NO labelType:Label width:0.0f];
    [rakutenBranchLbl sizeToFit];
    CHANGE_ORIGIN_X(rakutenBranchLbl, CGRectGetMinX(accountLbl.frame) - 14.0f - rakutenBranchLbl.frame.size.width);
    CHANGE_ORIGIN_Y(rakutenBranchLbl, 175.0f);
    [partnerView addSubview:rakutenBranchLbl];
    
    // 普通預金
    UILabel *rakutenNormalLbl = [MakeViewUtil labelWithTextType:Japanese text:@"普通預金" textColor:ColorUtil.styleColor807F7F fontSize:12.0f isbold:NO labelType:Label width:0.0f];
    [rakutenNormalLbl sizeToFit];
    CHANGE_ORIGIN_X(rakutenNormalLbl, width - 16.0f - rakutenNormalLbl.frame.size.width);
    CHANGE_ORIGIN_Y(rakutenNormalLbl, 211.0f);
    [partnerView addSubview:rakutenNormalLbl];

    // 楽天銀行更新時間
    NSString * rakutenFormatedTime = [NSString stringWithFormat:@"%@ 更新", [FormatUtil convertToTimeWithoutSecond:self.viewDto.updateTime]];
    UILabel * rakutenUpdateTimeLbl = [MakeViewUtil labelWithTextType:Japanese text:rakutenFormatedTime textColor:ColorUtil.styleColor807F7F fontSize:12.0f isbold:NO labelType:Label width:0.0f];
    [rakutenUpdateTimeLbl sizeToFit];
    rakutenUpdateTimeLbl.tag = LabelTagUpdateTime;
    CHANGE_ORIGIN_X(rakutenUpdateTimeLbl, width - 16.0f - rakutenNormalLbl.frame.size.width - 16.0f - rakutenUpdateTimeLbl.frame.size.width);
    CHANGE_ORIGIN_Y(rakutenUpdateTimeLbl, 211.0f);
    [partnerView addSubview:rakutenUpdateTimeLbl];
    
    // 楽天銀行更新時間(読み込み中)
    self.properUpddateTimeLoadingView = [MakeViewUtil makeLoadingCircleView:12.0f iconSize:16.0f];
    CHANGE_ORIGIN_X(self.properUpddateTimeLoadingView, width - 16.0f - rakutenNormalLbl.frame.size.width - 16.0f - self.properUpddateTimeLoadingView.frame.size.width);
    CHANGE_ORIGIN_Y(self.properUpddateTimeLoadingView, 211.0f + (rakutenUpdateTimeLbl.frame.size.height - self.properUpddateTimeLoadingView.frame.size.height) / 2.0f);
    [partnerView addSubview:self.properUpddateTimeLoadingView];
    
    // 楽天銀行普通預金残高エリア
    self.properBalanceView = [[UIView alloc] initWithFrame:CGRectMake(0.0f, CGRectGetMaxY(rakutenNormalLbl.frame), width, 68.0f)];
    self.properBalanceView.backgroundColor = UIColor.clearColor;
    [partnerView addSubview:self.properBalanceView];

    // 普通預金　円
    UILabel *properBalanceYenLbl = [MakeViewUtil labelWithTextType:Japanese text:@"円" textColor:UIColor.blackColor fontSize:20.0f isbold:NO labelType:Label width:0.0f];
    properBalanceYenLbl.frame = CGRectMake(self.properBalanceView.frame.size.width - 20.0f - 16.0f, 18.0f, 20.0f, 20.0f);
    [self.properBalanceView addSubview:properBalanceYenLbl];

    UILabel *properBalanceLbl = [MakeViewUtil labelWithTextType:Amount text:self.viewDto.cardBalanceDto.ordinaryBalance textColor:UIColor.blackColor fontSize:32.0f isbold:NO labelType:LabelWithAdjustment width:0.0f];
    [properBalanceLbl sizeToFit];
    properBalanceLbl.textAlignment = NSTextAlignmentRight;
    properBalanceLbl.frame = CGRectMake(16.0f,
                                        8.0f - kTextPaddingForAutoShrink /2,
                                        CGRectGetMinX(properBalanceYenLbl.frame) - 16.0f,
                                        32.0f + kTextPaddingForAutoShrink);
    [self.properBalanceView addSubview:properBalanceLbl];

    // 金額非表示
    self.properBalanceHideView = [[UIView alloc] initWithFrame:self.properBalanceView.frame];
    self.properBalanceHideView.backgroundColor = UIColor.clearColor;
    [partnerView addSubview:self.properBalanceHideView];

    // 残高金額のロードアニメーション
    self.properBalanceLoadingView = [MakeViewUtil makeLoadingSquareView:CGSizeMake(properBalanceLbl.frame.size.width + properBalanceYenLbl.frame.size.width,
                                                                                   properBalanceLbl.frame.size.height)];
    MOVE_WITH_ORIGIN(self.properBalanceLoadingView, properBalanceLbl.frame.origin.x, self.properBalanceView.frame.origin.y + properBalanceLbl.frame.origin.y)
    [partnerView addSubview:self.properBalanceLoadingView];

    UILabel * properBalanceHideLbl = [MakeViewUtil labelWithTextType:Japanese text:[LanguageUtil RBLocalizedString:@"UI0012_NoDisplayAssetMessage"] textColor:UIColor.blackColor fontSize:32.0f isbold:NO labelType:Label width:0.0f];
    [properBalanceHideLbl sizeToFit];
    properBalanceHideLbl.textAlignment = NSTextAlignmentRight;
    properBalanceHideLbl.frame = CGRectMake(0.0f, 8.0f, self.properBalanceHideView.frame.size.width - 16.0f, 32.0f);
    [self.properBalanceHideView addSubview:properBalanceHideLbl];

    [self.properBalanceView setHidden:!isDisplay];
    [self.properBalanceHideView setHidden:isDisplay];

    // 楽天会員リンク
    CGRect memberLinkFrame = CGRectMake(0.0f, partnerView.frame.size.height - 64.0f, width, 64.0f);
    UIView *memberLinkView = [self createMemberLinkArea: memberLinkFrame];
    [partnerView addSubview:memberLinkView];

    [self removeViewAtIndex:self.indexForPartnerView animated:NO];
    [self insertViewAtHCenter:partnerView atIndex:self.indexForPartnerView animated:NO];

    [self updatePartnerDisplayData];
}

///< 入出金明細ボタンと楽天銀行から出金するボタン
- (void)addPartnerOperationView
{
    UIView *operationView = [[UIView alloc] initWithFrame:CGRectMake(0.0, 0.0, self.frame.size.width, 44.0f + 16.0f)];
    operationView.backgroundColor = UIColor.clearColor;

    if (self.viewDto.totalAssetBalance != nil && ![self.viewDto.totalAssetBalance isEqualToString:@"0"]) {
        CGFloat totalWidth = self.frame.size.width - 2 * 24.0f - 16.0f;
        CGFloat leftWidth = totalWidth * 2 / 5;
        CGFloat rightWidth = totalWidth * 3 / 5;
        CGRect leftFrame = CGRectMake(24.0f, 0.0f, leftWidth, 44.0f);
        CGRect rightFrame = CGRectMake(24.0f + leftWidth + 16.0f, 0.0f, rightWidth, 44.0f);
        UIButton *statementBtn = [self createOperationButtonWhiteWithTitle:@"入出金明細" frame:leftFrame tag:ButtonTagStatement];
        UIButton *transferBtn = [self createOperationButtonWithTitle:@"楽天銀行から出金" frame:rightFrame tag:ButtonTagRakutenBankWithdrawal];
        [operationView addSubview:statementBtn];
        [operationView addSubview:transferBtn];
    } else {
        CGRect frame = CGRectMake(24.0f, 0.0f, self.frame.size.width - 2 * 24.0f, 44.0f);
        UIButton *statementBtn = [self createOperationButtonWhiteWithTitle:@"入出金明細" frame:frame tag:ButtonTagStatement];
        [operationView addSubview:statementBtn];
    }
    
    // ボタンエリア更新
    [self removeViewAtIndex:self.indexForPartnerOperationView animated:NO];
    [self insertView:operationView atIndex:self.indexForPartnerOperationView animated:NO];
}

///< 入出金明細ボタンと楽天銀行へ入金するボタン、楽天銀行から出金するボタン
- (void)addPartnerOperationViewWithDepositAndTransfer
{
    UIView *operationView = [[UIView alloc] initWithFrame:CGRectMake(0.0, 0.0, self.frame.size.width, 44.0f + 16.0f + 44.0f + 16.0f)];
    operationView.backgroundColor = UIColor.clearColor;

    CGRect frame = CGRectMake(24.0f, 0.0f, self.frame.size.width - 2 * 24.0f, 44.0f);
    UIButton *statementBtn = [self createOperationButtonWhiteWithTitle:@"入出金明細" frame:frame tag:ButtonTagStatement];
    [operationView addSubview:statementBtn];

    CGFloat totalWidth = self.frame.size.width - 2 * 25.0f - 5.0f;
    CGFloat leftWidth = totalWidth / 2;
    CGFloat rightWidth = totalWidth / 2;
    CGRect leftFrame = CGRectMake(25.0f, 44.0f + 16.0f, leftWidth, 44.0f);
    CGRect rightFrame = CGRectMake(25.0f + leftWidth + 5.0f, 44.0f + 16.0f, rightWidth, 44.0f);
    UIButton *depositBtn = [self createOperationButtonWithTitle:@" 楽天銀行へ入金する " frame:leftFrame tag:ButtonTagRakutenBankDeposit];
    UIButton *transferBtn = [self createOperationButtonWithTitle:@" 楽天銀行から出金する " frame:rightFrame tag:ButtonTagRakutenBankWithdrawal];

    // 提携支店連携状況が未連携の場合、入金ボタン非活性
    if (!([PARTNER_LINK_STATUS_LINKED isEqualToString:self.viewDto.partnerLinkStatus]
          || [PARTNER_LINK_STATUS_EXPIRE_NEXT_30 isEqualToString:self.viewDto.partnerLinkStatus])) {
        [depositBtn setTitleColor:[ColorUtil styleColorC0BFBF] forState:UIControlStateDisabled];
        depositBtn.backgroundColor = [ColorUtil styleColorECEBEB];
        depositBtn.enabled = NO;
    }

    // 総額（評価額）が0、もしくは提携支店連携状況が未連携の場合、出金ボタン非活性
    if (self.viewDto.totalAssetBalance == nil || self.viewDto.totalAssetBalance.length == 0
        || [self.viewDto.totalAssetBalance isEqualToString:@"0"]
        || !([PARTNER_LINK_STATUS_LINKED isEqualToString:self.viewDto.partnerLinkStatus]
             || [PARTNER_LINK_STATUS_EXPIRE_NEXT_30 isEqualToString:self.viewDto.partnerLinkStatus])) {

        [transferBtn setTitleColor:[ColorUtil styleColorC0BFBF] forState:UIControlStateDisabled];
        transferBtn.backgroundColor = [ColorUtil styleColorECEBEB];
        transferBtn.enabled = NO;
    }

    [operationView addSubview:depositBtn];
    [operationView addSubview:transferBtn];

    // ボタンエリア更新
    [self removeViewAtIndex:self.indexForPartnerOperationView animated:NO];
    [self insertView:operationView atIndex:self.indexForPartnerOperationView animated:NO];
}

- (void) createErrorView
{
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;

    BOOL isLoadSuccess = self.viewDto.partnerBankBalance && self.viewDto.partnerBankBalance.length > 0;

    // 提携支店と連携できないステータスの場合は残高取得の成否に関わらず、残高取得エラーを出力しないようにする
    if ([appDel isNCBBranch]
        && ([PARTNER_LINK_STATUS_NOT_LINKED isEqualToString:self.viewDto.partnerLinkStatus]
            || [PARTNER_LINK_STATUS_UNCOMPLETED isEqualToString:self.viewDto.partnerLinkStatus]
            || [PARTNER_LINK_STATUS_TOKEN_EXPIRED isEqualToString:self.viewDto.partnerLinkStatus])) {
        isLoadSuccess = YES;
    }
    // 提携支店連携状況が連携済ではない場合、認証要否を要とする
    if ([appDel isNCBBranch] && ![PARTNER_LINK_STATUS_LINKED isEqualToString:self.viewDto.partnerLinkStatus]) {
        UIUXTOPStackLayoutView *baseView = [[UIUXTOPStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
        [baseView addBlankWithHeight:2.0f];

        UIButton * partnerLinkView = [[UIButton alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
        partnerLinkView.backgroundColor = UIColor.whiteColor;
        partnerLinkView.tag = ButtonTagPartnerLink;
        [partnerLinkView addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
        
        UILabel * titleLbl = [MakeViewUtil labelWithTextType:Japanese text:@"連携のお願い" textColor:[ColorUtil colorFromType:SystemColor_Danger] fontSize:16.0f isbold:YES labelType:Label width:0.0f];
        [titleLbl sizeToFit];
        CHANGE_ORIGIN_X(titleLbl, (self.frame.size.width - titleLbl.frame.size.width) / 2);
        CHANGE_ORIGIN_Y(titleLbl, 6.0f);
        [partnerLinkView addSubview:titleLbl];
        
        // アイコン
        UIImageView * errorIcon = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"error"]];
        errorIcon.frame = CGRectMake(CGRectGetMinX(titleLbl.frame) - 4.0f - 24.0f, 6.0f, 24.0f, 24.0f);
        errorIcon.contentMode = UIViewContentModeScaleAspectFill;
        errorIcon.clipsToBounds = YES;
        [partnerLinkView addSubview:errorIcon];
        
        NSString * textContent = @"";
        if ([PARTNER_LINK_STATUS_NOT_LINKED isEqualToString:self.viewDto.partnerLinkStatus]) {
            textContent = @"NCB支店のご利用には、西日本シティ銀行との口座連携が必要です。";
        } else if ([PARTNER_LINK_STATUS_UNCOMPLETED isEqualToString:self.viewDto.partnerLinkStatus]) {
            textContent = @"口座連携が最後まで完了していません。\nNCB支店のご利用には、西日本シティ銀行との口座連携が必要です。";
        } else if ([PARTNER_LINK_STATUS_EXPIRE_NEXT_30 isEqualToString:self.viewDto.partnerLinkStatus]) {
            textContent = @"口座連携の有効期限が近づいています、\n事前に再連携することで、有効期限が更新（延長）されます。";
        } else if ([PARTNER_LINK_STATUS_TOKEN_EXPIRED isEqualToString:self.viewDto.partnerLinkStatus]) {
            textContent = @"口座連携の有効期限が切れました、再連携をお願いします。\nNCB支店のご利用には、西日本シティ銀行との口座連携が必要です。";
        }
        UILabel * errorLbl = [MakeViewUtil labelWithTextType:Japanese text:textContent textColor:[ColorUtil colorFromType:SystemColor_Danger] fontSize:12.0f isbold:NO labelType:Label width:0.0f];
        errorLbl.frame = CGRectMake(0.0f, 0.0f, self.frame.size.width - 2 * 32.0f, 0.0f);
        errorLbl.textAlignment = NSTextAlignmentLeft;
        errorLbl.numberOfLines = 0;
        errorLbl.lineBreakMode = NSLineBreakByCharWrapping;
        [errorLbl sizeToFit];
       
        CHANGE_ORIGIN_Y(errorLbl, 36.0f);
        errorLbl.center = CGPointMake(partnerLinkView.center.x, errorLbl.center.y);
        [partnerLinkView addSubview:errorLbl];
        CHANGE_HEIGHT(partnerLinkView, errorLbl.frame.origin.y + errorLbl.frame.size.height + 16.0f);

        // 矢印
        UIImageView *arrowView = [[UIImageView alloc] initWithFrame:CGRectMake(self.frame.size.width - 32.0f, partnerLinkView.frame.size.height / 2 - 8.0f, 16.0f, 16.0f)];
        arrowView.image = [UIImage imageNamed:@"rightGrayArrow"];
        arrowView.contentMode = UIViewContentModeScaleAspectFill;
        arrowView.clipsToBounds = YES;
        [partnerLinkView addSubview:arrowView];
        
        [baseView addViewAtHCenter:partnerLinkView];

        [self removeViewAtIndex:self.indexForPartnerLinkView animated:NO];
        [self insertViewAtHCenter:baseView atIndex:self.indexForPartnerLinkView animated:NO];

    } else {
        UIView *blankView = [[UIView alloc] initWithFrame:CGRectZero];
        
        [self removeViewAtIndex:self.indexForPartnerLinkView animated:NO];
        [self insertViewAtHCenter:blankView atIndex:self.indexForPartnerLinkView animated:NO];

    }

    // 残高取得エラー
    if (isLoadSuccess) {
        UIView *blankView = [[UIView alloc] initWithFrame:CGRectZero];
        
        [self removeViewAtIndex:self.indexForErrorView animated:NO];
        [self insertViewAtHCenter:blankView atIndex:self.indexForErrorView animated:NO];
    } else {
        UIUXTOPStackLayoutView *baseView = [[UIUXTOPStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
        
        // 背景色設定用
        UIUXTOPStackLayoutView *backgroudView = [[UIUXTOPStackLayoutView alloc] initWithFrame: baseView.frame];
        backgroudView.backgroundColor = UIColor.whiteColor;
        
        UIUXTOPStackLayoutView *errorView = [[UIUXTOPStackLayoutView alloc] initWithFrame: baseView.frame];
        errorView.backgroundColor = [[ColorUtil colorFromType:SystemColor_Danger] colorWithAlphaComponent:0.08];
        
        UIView * titleView = [[UIView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 32.0f)];
        titleView.backgroundColor = UIColor.clearColor;
        UILabel * errorTitleLbl = [MakeViewUtil labelWithTextType:Japanese text:@"預金残高の取得エラー" textColor:[ColorUtil colorFromType:SystemColor_Danger] fontSize:16.0f isbold:YES labelType:Label width:0.0f];
        [errorTitleLbl sizeToFit];
        CHANGE_ORIGIN_X(errorTitleLbl, (self.frame.size.width - errorTitleLbl.frame.size.width) / 2);
        CHANGE_ORIGIN_Y(errorTitleLbl, 4.0f);
        [titleView addSubview:errorTitleLbl];
        
        UIImageView * errorIcon = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"error"]];
        errorIcon.frame = CGRectMake(CGRectGetMinX(errorTitleLbl.frame) - 4.0f - 24.0f, 4.0f, 24.0f, 24.0f);
        errorIcon.contentMode = UIViewContentModeScaleAspectFill;
        errorIcon.clipsToBounds = YES;
        [titleView addSubview:errorIcon];
        
        UILabel * errorLbl = [MakeViewUtil labelWithTextType:Japanese text:self.viewDto.partnerBankErrorMessage textColor:[ColorUtil colorFromType:SystemColor_Danger] fontSize:12.0f isbold:NO labelType:Label width:0.0f];
        errorLbl.frame = CGRectMake(0.0f, 0.0f, self.frame.size.width - 2 * 16.0f, 0.0f);
        errorLbl.textAlignment = NSTextAlignmentLeft;
        errorLbl.numberOfLines = 0;
        errorLbl.lineBreakMode = NSLineBreakByCharWrapping;
        [errorLbl sizeToFit];
       
        CHANGE_ORIGIN_X(errorLbl, 16.0f);
        CHANGE_ORIGIN_Y(errorLbl, 36.0f);
        
        [errorView addViewAtHCenter:titleView];
        [errorView addViewAtHCenter:errorLbl];
        [errorView addBlankWithHeight:4.0f];
        [backgroudView addViewAtHCenter:errorView];
        
        [baseView addBlankWithHeight:2.0f];
        [baseView addViewAtHCenter:backgroudView];
        [baseView sizeToFit];
        
        [self removeViewAtIndex:self.indexForErrorView animated:NO];
        [self insertViewAtHCenter:baseView atIndex:self.indexForErrorView animated:NO];
    }
}

// 外部画像読み込みキューに追加
- (void)pushLoadUrl:(NSString *)url baseView: (UIUXTOPStackLayoutView *)baseView index:(NSInteger)index
{
    if (!self.urlViewMap) {
        self.urlViewMap = [[NSMutableDictionary alloc] initWithCapacity:3];
    }
    
    NSMutableDictionary * subDic = [[NSMutableDictionary alloc] initWithCapacity:3];
    if (baseView) {
        subDic[@"Base"] = baseView;
    }
    subDic[@"Index"] = [NSString stringWithFormat:@"%ld", (long)index];
    
    self.urlViewMap[url] = subDic;
}

// CSF画像読み込み
- (void) startLoading
{
    NSMutableArray * urls = [[NSMutableArray alloc] initWithCapacity:self.urlViewMap.count];
    for (NSString * url in [self.urlViewMap allKeys]) {
        if (!url || [url isEqualToString:@""]) {
            continue;
        }
        [urls addObject:url];
    }
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    ResourceLoaderModel * rlm = [appDel.modelLocator queryModelWithType:ModelTypeResourceLoader];
    [rlm fetchRemoteFileFor:self urls:urls handler:@selector(onResourceLoaderResponse:) update:NO];
}

/**
 * 画像取得レスポンス
 */
- (void)onResourceLoaderResponse:(NSNotification *)response
{
    NSDictionary * urlDataMap = response.userInfo;
    for (NSString * url in urlDataMap.allKeys) {
        NSMutableDictionary * dict = self.urlViewMap[url];
        if ([dict isEqual:[NSNull null]]) {
            continue;
        }
        
        UIUXTOPStackLayoutView * baseView = dict[@"Base"];
        NSInteger index = [dict[@"Index"] integerValue];

        NSData * data = urlDataMap[url];
        if ([data isEqual:[NSNull null]]) {
            continue;
        }
        UIImage * img = [UIImage imageWithData:data];
        if (!img) {
            continue;
        }
        
        void(^setImage)(void) = ^{
            CGRect csfFrame = CGRectMake(0.0f, 0.0f, img.size.width / 2, img.size.height / 2);
            UIImageView * csfView = [[UIImageView alloc] initWithFrame:csfFrame];
            csfView.image = img;
            CHANGE_HEIGHT(csfView, csfView.frame.size.height * self.frame.size.width / csfView.frame.size.width);
            CHANGE_WIDTH(csfView, self.frame.size.width);

            if ([url isEqualToString:urlInformationOKB] || [url isEqualToString:urlInformationNCB]) {
                if (![baseView isEqual:[NSNull null]]) {
                    [baseView removeViewAtIndex:index animated:NO];
                    [baseView insertViewAtHCenter:csfView atIndex:index animated:NO];
                }
                
                if ([self.stackLayoutView.subviews containsObject:self.attentionOpenView]) {
                    [self removeViewAtIndex:self.indexForAttentionView animated:NO];
                    [self insertViewAtHCenter:self.attentionOpenView atIndex:self.indexForAttentionView animated:NO];
                }
            } else {
                UIUXTOPStackLayoutView *subView = [[UIUXTOPStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f)];
                subView.backgroundColor = UIColor.whiteColor;
                
                if ([@[urlStopAccount, urlEmergency, urlNoticeCommon, urlNoticeOKB, urlNoticeNCB] containsObject:url]) {
                    [subView addViewAtHCenter:csfView];
                }
                
                [self removeViewAtIndex:index animated:NO];
                [self insertViewAtHCenter:subView atIndex:index animated:NO];
            }
        };
        
        dispatch_async(dispatch_get_main_queue(), setImage);
    }
}

- (UIView *)createTitleView: (BOOL)isUp {
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;

    CGRect frame = CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f);
    UIView * titleView = [[UIView alloc] initWithFrame:frame];
    CHANGE_HEIGHT(titleView, 44.0f);
    titleView.backgroundColor = UIColor.clearColor;
    if ([appDel isNCBBranch] && isUp) {
        titleView.backgroundColor = [ColorUtil styleColorF6F4F4];
    }

    UIImageView *okbIcon = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"CMN_logo_partner_okb"]];
    okbIcon.contentMode = UIViewContentModeScaleAspectFill;
    okbIcon.clipsToBounds = YES;
    okbIcon.frame = CGRectMake(8.0f, 10.0f, 44.0f, 24.0f);
    if ([appDel isNCBBranch]) {
        okbIcon = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"CMN_logo_partner_ncb"]];
        okbIcon.frame = CGRectMake(40.0f, 1.0f, 42.0f, 42.0f);
    }
    [titleView addSubview:okbIcon];
    
    UIImage * arrowImage = isUp ? [UIImage imageNamed:@"TOP_icon_arrow_up"] : [UIImage imageNamed:@"TOP_icon_arrow_down"];
    UIImageView * arrowIcon = [[UIImageView alloc] initWithImage:arrowImage];
    arrowIcon.contentMode = UIViewContentModeScaleAspectFill;
    arrowIcon.clipsToBounds = YES;
    arrowIcon.frame = CGRectMake(frame.size.width - 16.0f - 16.0f, 14.0f, 16.0f, 16.0f);
    [titleView addSubview:arrowIcon];
    
    CGFloat x = CGRectGetMaxX(okbIcon.frame) + 8.0f;
    NSString *titleText = @"OKB支店ご利用に際してのご注意事項";
    if ([appDel isNCBBranch]) {
        titleText = @"NCB支店ご利用に際してのご注意事項";
    }
    UILabel * titleLbl = [MakeViewUtil labelWithTextType:Japanese text:titleText textColor:UIColor.blackColor fontSize:14.0f isbold:NO labelType:LabelWithAdjustment width:0.0f];
    titleLbl.frame = CGRectMake(x, 0.0f, titleView.frame.size.width - x - 16.0 - 16.0, titleView.frame.size.height);
    titleLbl.textAlignment = NSTextAlignmentCenter;
    [titleView addSubview:titleLbl];
    
    // ジェスチャーを設定.
    UITapGestureRecognizer *recognizer = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(titleTappedAction:)];
    [titleView setUserInteractionEnabled:YES];
    [titleView addGestureRecognizer:recognizer];
    
    return titleView;
}

- (UIView *)createMemberLinkArea: (CGRect)frame
{
    BOOL registed = [@"1" isEqualToString:self.viewDto.rakutenIdRelationFlag];
    
    UIView *baseView = [[UIView alloc] initWithFrame:frame];
    baseView.backgroundColor = ColorUtil.styleColorF3F3F4;

    CGFloat start = 42.0f;
    CGFloat iconBKViewWidth = 44.0f;
    UIView * iconViewBackground = [[UIView alloc] initWithFrame:CGRectMake(start, -24.0f, iconBKViewWidth, iconBKViewWidth)];
    iconViewBackground.backgroundColor = UIColor.whiteColor;
    iconViewBackground.layer.borderColor = ColorUtil.styleColorF3F3F4.CGColor;
    iconViewBackground.layer.borderWidth = 1.0f;
    iconViewBackground.layer.cornerRadius = iconBKViewWidth * 0.5;
    [baseView addSubview:iconViewBackground];
    
    //ステージアイコン,ラベル
    CGFloat iconWidth = 28.0f;
    UIImageView * iconView = [[UIImageView alloc] initWithImage: [UIImage imageNamed:@"rakutenPoint"]];
    iconView.contentMode = UIViewContentModeScaleAspectFill;
    iconView.clipsToBounds = YES;
    iconView.frame = CGRectMake(start + (iconBKViewWidth - iconWidth) / 2, -iconWidth / 2, iconWidth, iconWidth);
    [baseView addSubview:iconView];
    
    // 会員リンク
    UIView *linkView = [[UIView alloc] initWithFrame: CGRectMake(0.0f, 0.0f, start * 2 + iconBKViewWidth, baseView.frame.size.height)];
    [baseView addSubview:linkView];

    UILabel * linkLbl = [MakeViewUtil labelWithTextType:Japanese text:@"楽天会員リンク" textColor:UIColor.blackColor fontSize:12.0f isbold:YES labelType:Label width:0.0f];
    linkLbl.textAlignment = NSTextAlignmentCenter;
    linkLbl.frame = CGRectMake(0.0f, 26.0f, linkView.frame.size.width, 12.0f);
    UILabel * stateLbl = [MakeViewUtil labelWithTextType:Japanese text:registed ? @"登録完了" : @"登録未完了" textColor:registed ? UIColor.blackColor : ColorUtil.styleColorBF0000 fontSize:12.0f isbold:YES labelType:Label width:0.0f];
    stateLbl.textAlignment = NSTextAlignmentCenter;
    stateLbl.frame = CGRectMake(0.0f, CGRectGetMaxY(linkLbl.frame) + 2.0f, linkView.frame.size.width, 12.0f);

    [linkView addSubview:linkLbl];
    [linkView addSubview:stateLbl];
    
    // 詳細説明
    UIView *detailView = [[UIView alloc] initWithFrame: CGRectMake(linkView.frame.size.width, 0.0f, baseView.frame.size.width - linkView.frame.size.width, baseView.frame.size.height)];
    [baseView addSubview:detailView];
    
    NSString *descriptionText = @"楽天銀行の各種サービス利用で\n楽天ポイント獲得！";
    UILabel * detailLbl = [MakeViewUtil labelWithTextType:Japanese text:descriptionText textColor:ColorUtil.styleColor807F7F fontSize:10.0f isbold:NO labelType:Label width:0.0f];
    detailLbl.numberOfLines = 2;
    detailLbl.textAlignment = NSTextAlignmentCenter;
    [detailLbl sizeToFit];
    detailLbl.frame = CGRectMake(0.0f, 8.0f, detailView.frame.size.width, detailLbl.frame.size.height);
    [detailView addSubview:detailLbl];
    
    UILabel *confirmLbl = [MakeViewUtil labelWithTextType:Japanese text:registed ? @"ポイント付与対象サービスを確認" : @"楽天会員登録をする" textColor: ColorUtil.styleColor0277BD fontSize:9.0f isbold:NO labelType:Label width:0.0f];
    [confirmLbl sizeToFit];
    CHANGE_ORIGIN_Y(confirmLbl, 43.0f);
    CHANGE_ORIGIN_X(confirmLbl, (detailView.frame.size.width - confirmLbl.frame.size.width - 4.0f - 16.0f) / 2);
    
    UIImageView *confirmIcon = [[UIImageView alloc] initWithImage:[UIImage imageNamed:@"rakutenRegister"]];
    confirmIcon.frame = CGRectMake(CGRectGetMaxX(confirmLbl.frame) + 4.0f, 40.0f, 16.0f, 16.0f);
    confirmIcon.contentMode = UIViewContentModeScaleAspectFill;
    confirmIcon.clipsToBounds = YES;
    
    [detailView addSubview:confirmLbl];
    [detailView addSubview:confirmIcon];
    
    UIButton *confirmBtn = [[UIButton alloc] initWithFrame:CGRectMake(confirmLbl.frame.origin.x, confirmLbl.frame.origin.y, confirmLbl.frame.size.width + 4.0f + confirmIcon.frame.size.width, confirmIcon.frame.size.height)];
    confirmBtn.backgroundColor = UIColor.clearColor;
    confirmBtn.tag = registed ? ButtonTagConfirmPointServiceTarget : ButtonTagRakutenMemberLinkRegister;
    [confirmBtn addTarget:self action:@selector(tapButtonAction:) forControlEvents:UIControlEventTouchUpInside];
    [detailView addSubview:confirmBtn];
    return baseView;
}

// Gestureイベント
- (void)titleTappedAction:(UITapGestureRecognizer *)sender
{
    [self toggleAttention];
}

//ボタンタップイベント
- (void)tapButtonAction:(UIButton *)button
{
    switch (button.tag) {
        case ButtonTagAssetInquiry:
            [self onAssetInquiryButtonAction:button];
            break;
        case ButtonTagAssetDisplay:
            [self onAssetDisplayButtonAction:button];
            break;
        case ButtonTagInquiryTabOpen:
            [self onInquiryTabOpenButtonAction:button];
            break;
        case ButtonTagInquiryTabClose:
            [self onInquiryTabCloseButtonAction:button];
            break;
        case ButtonTagAccountTabOpen:
            [self onAccountTabOpenButtonAction:button];
            break;
        case ButtonTagAccountTabClose:
            [self onAccountTabCloseButtonAction:button];
            break;
        case ButtonTagTransferTab:
            [self onTransferTabButtonAction:button];
            break;
        case ButtonTagServiceTab:
            [self onServiceTabButtonAction:button];
            break;
        case ButtonTagStatement:
            [self onStatementButtonAction:button];
            break;
        case ButtonTagOtherTab:
            [self onOtherTabButtonAction:button];
            break;
        case ButtonTagTransfer:
            // 振込・振替・送金
            [self onTransferButtonAction:button];
            break;
        case ButtonTagATMDeposit:
            // ATM・入金
            [self onATMDepositButtonAction:button];
            break;
        case ButtonTagFacebook:
            [self onFacebookButtonAction:button];
            break;
        case ButtonTagViber:
            [self onViberButtonAction:button];
            break;
        case ButtonTagMerumane:
            [self onMerumaneButtonAction:button];
            break;
        case ButtonTagCard:
            [self onCardButtonAction:button];
            break;
        case ButtonTagConveniBarcode:
            [self onConveniBarcodeButtonAction:button];
            break;
        case ButtonTagRate:
            [self onRateButtonAction:button];
            break;
        case ButtonTagTimeAccount:
            [self onTimeAccountButtonAction:button];
            break;
        case ButtonTagExste:
            [self onExsteButtonAction:button];
            break;
        case ButtonTagFC:
            [self onFCButtonAction:button];
            break;
        case ButtonTagSuperLoan:
            [self onSuperLoanButtonAction:button];
            break;
        case ButtonTagHomeLoan:
            [self onHomeLoanButtonAction:button];
            break;
        case ButtonTagFX:
            [self onFXButtonAction:button];
            break;
        case ButtonTagBIG:
            [self onBIGButtonAction:button];
            break;
        case ButtonTagNumbers:
            [self onNumbersButtonAction:button];
            break;
        case ButtonTagKouei:
            [self onKoueiButtonAction:button];
            break;
        case ButtonTagCampaign:
            [self onCampaignButtonAction:button];
            break;
        case ButtonTagCashGift:
            [self onCashGiftButtonAction:button];
            break;
        case ButtonTagInsurance:
            [self onInsuranceButtonAction:button];
            break;
        case ButtonTagCashb:
            [self onCashbButtonAction:button];
            break;
        case ButtonTagMoneySupport:
            [self onMoneySupportButtonAction:button];
            break;
        case ButtonTagATM:
            [self onATMButtonAction:button];
            break;
        case ButtonTagHelp:
            [self onHelpButtonAction:button];
            break;
        case ButtonTagSecurity:
            [self onSecurityButtonAction:button];
            break;
        case ButtonTagSetting:
            [self onSettingButtonAction:button];
            break;
        case ButtonTagServiceList:
            [self onServiceListButtonAction:button];
            break;
        case ButtonTagReferralCodeSeeMore:
            [self onReferralCodeSeeMoreAction:button];
            break;
        case ButtonTagBankInfoListLastOne:
            [self onBankInfoListLastOneButtonAction:button];
            break;
        case ButtonTagPointReceipt:
            [self onPointReceiptButtonAction:button];
            break;
        case ButtonTagQrLogin:
            [self onQrLoginButtonAction:button];
            break;
        case ButtonTagBillSplit:
            [self onBillSplitButtonAction:button];
            break;
        case ButtonTagClosePartnerAttention:
            [self onCloseButtonAction:button];
            break;
        case ButtonTagReloadPartnerAsset:
            [self onReloadButtonAction:button];
            break;
        case ButtonTagShowAvailableAmountInformation:
            [self onPartnerQuestionButtonAction:button];
            break;
        case ButtonTagRakutenBankDeposit:
            [self onPartnerDepositButtonAction:button];
            break;
        case ButtonTagRakutenBankWithdrawal:
            [self onPartnerWithdrawalButtonAction:button];
            break;
        case ButtonTagRakutenMemberLinkRegister:
            [self onRakutenMemberLinkRegister:button];
            break;
        case ButtonTagCustomerCenter:
            [self onShowMoreCustomerCenter:button];
            break;
        case ButtonTagHistoryDelete:
            [self onHistoryDeleteAction:button];
            break;
        case ButtonTagFAQ:
            // FAQ
            [self onFAQButtonAction:button];
            break;
        case ButtonTagGuide:
            // 使い方ガイド
            [self onGuideButtonAction:button];
            break;
        case ButtonTagStopAccount:
            // 取引停止中
            [self onStopAccountAction:button];
            break;
        case ButtonTagUnpaid:
            // 未収
            [self onUnpaidAction:button];
            break;
        case ButtonTagAgreeAgain:
            // 付番同意
            [self onAgreeAgainAction:button];
            break;
        case ButtonTagOverseaTransfer:
            // 海外送金
            [self onFRCreditMessageTap];
            break;
        case ButtonTagConfirmPointServiceTarget:
            // ポイント付与対象サービス確認
            [self onConfirmPointService:button];
            break;
        case ButtonTagNoticePromotion:
            // 重要なお知らせ・プロモーション
            [self onNoticePromotionAction:button];
            break;
        case ButtonTagPartnerLink:
            // 連携のお願い
            [self onPartnerLinkAction:button];
            break;
        case ButtonTagNoticePromotionClose:
            [self onCloseNoticePromotion: button];
            break;
        case ButtonTagBanner1:
            [self segmentBannerImageButtonAction: 0];
            break;
        case ButtonTagBanner2:
            [self segmentBannerImageButtonAction: 1];
            break;
        case ButtonTagBanner3:
            [self segmentBannerImageButtonAction: 2];
            break;
        case ButtonTagSegmentBanner:
            [self segmentBannerImageButtonAction: 3];
            break;
        case ButtonTagCustomerAttribute:
            [self onCustomerAttributeMessageAction];
            break;
        case ButtonTagBackgroundSetting:
            [self onBackgroundSettingAction];
            break;
        case ButtonTagAccountTransferApprovalRequest:
            [self onAccountTransferApprovalAction];
            break;
        case ButtonTagAccountInformationConfirmation:
            [self onAccountInformationConfirmationAction];
            break;
        default:
            break;
    }
}

// 重要なお知らせ・プロモーションを閉じる
- (void) onCloseNoticePromotion: (UIButton *)sender
{
    // StartDateを保存.
    if (self.viewDto.importantNoticePromotionDisplayStartDate != nil) {
        [DataStorageService setInputValue:self.viewDto.importantNoticePromotionDisplayStartDate valueType:ValueTypeUserDefaultsPromotionStartDate];
    }
    
    [self removeViewAtIndex:self.indexForNoticePromotionView animated:NO];
    [self insertViewAtHCenter:[[UIView alloc] initWithFrame:CGRectZero] atIndex:self.indexForNoticePromotionView animated:NO];
}

// 注意事項を閉じる.
- (void)onCloseButtonAction:(UIButton*)sender
{
    [self toggleAttention];
}

// 注意事項トグルを切り替える
- (void)toggleAttention
{
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;

    BOOL isAttentionShown = [self.attentionOpenView isDescendantOfView:self];
    
    [self removeViewAtIndex:self.indexForAttentionView animated:NO];

    if (isAttentionShown) {
        [self insertViewAtHCenter:self.attentionCloseView atIndex:self.indexForAttentionView animated:NO];
        
        if (!isAttentionClose) {
            isAttentionClose = YES;
            if ([appDel isOKBBranch]) {
                [DataStorageService setInputValue:[NSString stringWithFormat:@"%d", isAttentionClose]
                                        valueType:ValueTypeUserDefaultsPartnerBankAttentionOKB];
            } else {
                [DataStorageService setInputValue:[NSString stringWithFormat:@"%d", isAttentionClose]
                                        valueType:ValueTypeUserDefaultsPartnerBankAttentionNCB];
            }
        }
    } else {
        [self insertViewAtHCenter:self.attentionOpenView atIndex:self.indexForAttentionView animated:NO];
    }
}

// あなたにおすすめ領域、および新規バナー枠の表示内容を更新する.
- (void)updateBannerArea: (NSArray *)adList
{
    if (adList == nil || adList.count < 4) {
        return;
    }
    
    // あなたにおすすめ領域
    SegmentBannerAdDto *dto1 = adList[0];
    SegmentBannerAdDto *dto2 = adList[1];
    SegmentBannerAdDto *dto3 = adList[2];
    // 新規バナー枠
    SegmentBannerAdDto *dto4 = adList[3];
    
    // バナー画像を設定する.
    self.bannerImageName1 = dto1.imageFileName;
    self.bannerImageName2 = dto2.imageFileName;
    self.bannerImageName3 = dto3.imageFileName;
    
    // CSF画像を取得する.
    [UIUXTOPMakeViewUtil setNetworkImage:self.bannerImageName1 toView:self.bannerView1 insets:UIEdgeInsetsZero handler:nil];
    [UIUXTOPMakeViewUtil setNetworkImage:self.bannerImageName2 toView:self.bannerView2 insets:UIEdgeInsetsZero handler:nil];
    [UIUXTOPMakeViewUtil setNetworkImage:self.bannerImageName3 toView:self.bannerView3 insets:UIEdgeInsetsZero handler:nil];
    
    // 画像なしの場合、ローディング中のビューを削除
    if (dto4.imageFileName == nil || [dto4.imageFileName isEqualToString:@""]) {
        [self removeViewAtIndex:self.indexForSegmentBannerView animated:NO];
    }
    [self createSegmentBannerBtn];
    [UIUXTOPMakeViewUtil setNetworkImage:dto4.imageFileName toView:self.segmentBannerBtn insets:UIEdgeInsetsZero handler:^{
        [self removeViewAtIndex:self.indexForSegmentBannerView animated:NO];
        CGRect frame = CGRectMake(0, 0, self.frame.size.width, self.segmentBannerBtn.frame.size.height + 2 * 16);
        UIView *segmentBannerView = [[UIView alloc] initWithFrame:frame];
        segmentBannerView.backgroundColor = self.backgroundColor;
        [segmentBannerView addSubview: self.segmentBannerBtn];
        MOVE_WITH_ORIGIN(self.segmentBannerBtn, self.segmentBannerBtn.frame.origin.x, 16)
        [self insertView:segmentBannerView atIndex:self.indexForSegmentBannerView animated:NO];
    }];
    
    [self updateRecommendationView:NO];

    // 広告情報をRAT送信.
    for (int i = 0; i < adList.count; i++) {
        SegmentBannerAdDto * dto = adList[i];
        
        [OmnitureMeasurementWrapper setProp:12 toValue:dto.imageFileName];
        [OmnitureMeasurementWrapper trackAppState:[NSString stringWithFormat:@"%@%@", OMN_MAINMENU, OMN_PAGENAME_SUFFIX_C12]
                                          channel:OMN_MENU_CHANNEL];
    }
}

- (void) updateRakutenPointView:(BOOL)updating
{
    // 支店判断用
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    // 存在しない場合には更新せず
    if (self.rPointInfoContainerView) {

        if (updating) {
            self.rPointInfoView.hidden = YES;
            self.rPointInfoLoadingView.hidden = NO;
        
        } else {
            // 楽天ポイント最新情報を更新する
            // メンテナンスの場合、電文0014v2AdditionalResponseからハイフンを取得
            self.rPointInfoView.hidden = NO;
            self.rPointInfoLoadingView.hidden = YES;

            if (self.viewDto.rStandardPoint) {
                self.valueRStandardPoint.text = self.viewDto.rStandardPoint;
            }
            if (self.viewDto.rTimeLimitedPoint) {
                self.valueRTimeLimitedPoint.text = self.viewDto.rTimeLimitedPoint;
            }
            
            if (self.viewDto.rRankingImageName == nil) {
                self.rRankIconContainerView.hidden = YES;
                self.rPointContainerView.frame = CGRectMake(0.063 * self.frame.size.width, 0, 0.7 * self.frame.size.width, 50.0f);
            } else {
                self.rPointRankingView.image = [UIImage imageNamed:self.viewDto.rRankingImageName];
            }
        }
    }
}

// あなたにおすすめ領域を更新
- (void) updateRecommendationView:(BOOL)updating
{
    if (updating) {
        // 更新中アニメーションを表示
        self.bannerView1.hidden = YES;
        self.bannerView2.hidden = YES;
        self.bannerView3.hidden = YES;
        self.bannerLoadingView.hidden = NO;
        
    } else {
        // 最新情報で更新
        self.bannerView1.hidden = NO;
        self.bannerView2.hidden = NO;
        self.bannerView3.hidden = NO;
        self.bannerLoadingView.hidden = YES;
    }
}

//提携金融機関の表示データ更新
- (void)updatePartnerDisplayData
{
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;

    BOOL isLoadSuccess = self.viewDto.partnerBankBalance && self.viewDto.partnerBankBalance.length > 0;
    [self createErrorView];
    
    // 残高の金額を更新する
    UILabel * accountBalanceLabel = [self viewWithTag:LabelTagAccountBalance];
    UILabel * accountBalanceYenLabel = [self viewWithTag:LabelTagAccountBalanceYen];
    UILabel * paymentBalanceLabel = [self viewWithTag:LabelTagPaymentBalance];
    UILabel * paymentBalanceYenLabel = [self viewWithTag:LabelTagPaymentBalanceYen];
    UILabel * paymentBalanceTitleLabel = [self viewWithTag:LabelTagPaymentBalanceTitle];
    UIButton * questionBtn = [self viewWithTag:ButtonTagShowAvailableAmountInformation];
    
    accountBalanceLabel.text = isLoadSuccess ? self.viewDto.partnerBankBalance: @"-";
    CGFloat width = isLoadSuccess ? self.frame.size.width - 2 * 16.0f - 16.0f - 16.0f - 20.0f : self.frame.size.width - 2 * 16.0f - 16.0f - 16.0f;
    CHANGE_WIDTH(accountBalanceLabel, width);
    
    [accountBalanceYenLabel setHidden:!isLoadSuccess];
    
    // 更新時間の更新
    NSString *formatedTime = [NSString stringWithFormat:@"%@ 更新", [FormatUtil convertToTimeWithoutSecond:self.viewDto.partnerBankUpdateTime]];
    UILabel * updateTimeLabel = [self viewWithTag:LabelTagPartnerUpdateTime];
    updateTimeLabel.text = isLoadSuccess? formatedTime : nil;
    
    if ([appDel isOKBBranch]) {
        paymentBalanceLabel.text = isLoadSuccess? self.viewDto.partnerBankAvailableAmount : @"-";

        // 利用可能金額レイアウト調整
        [paymentBalanceLabel sizeToFit];
        CGFloat availableMaxWidth = CGRectGetMinX(paymentBalanceYenLabel.frame) - 16.0f - 80.0f;
        CGFloat availiableWidth = MIN(availableMaxWidth, paymentBalanceLabel.frame.size.width);
        paymentBalanceLabel.frame = CGRectMake(CGRectGetMinX(paymentBalanceYenLabel.frame) - availiableWidth,
                                               0.0f - kTextPaddingForAutoShrink/2,
                                               availiableWidth,
                                               16.0f + kTextPaddingForAutoShrink );
        
        if (isLoadSuccess) {
            CHANGE_ORIGIN_X(paymentBalanceTitleLabel, CGRectGetMinX(paymentBalanceLabel.frame) - paymentBalanceTitleLabel.frame.size.width - 4.0f);
        } else {
            CHANGE_ORIGIN_X(paymentBalanceTitleLabel, CGRectGetMinX(paymentBalanceLabel.frame) - paymentBalanceTitleLabel.frame.size.width - 16.0f);
        }
        
        CHANGE_ORIGIN_X(questionBtn, CGRectGetMinX(paymentBalanceTitleLabel.frame) - 24.0f);
    }

    [self updatePartnerBalanceLoading];
}

// 0014電文による更新発生開始時の各種処理を行う
- (void)update0014Ready
{
    // 履歴はこのタイミングで更新しておく
    [self updateHistoryView];
    
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    if ([appDel isProperBranch]) {
        // プロパー口座
        // キャンペーンエリアを読み込み中に
        [self updateCampaignView:YES];
        // ダッシュボードを読み込み中に
        [self reloadDashboardView];
    } else {
        // 提携支店口座
        [self updatePartnerBalanceLoading];
    }
}
// 0014電文による更新最後の各種処理を行う
- (void)update0014Finish
{
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    self.viewDto.serviceItems = [self createServiceItems];
    if ([appDel isProperBranch]) {
        // プロパー口座
        // メッセージ枠を更新
        [self setMessageArea:YES];
        // ダッシュボードを更新
        [self reloadDashboardView];
        // 紹介コードを更新
        self.referralCodeLabel.text = appDel.t0014v2Res.referralCode;
    } else {
        // 画像URLとViewのマッピング初期化
        self.urlViewMap = nil;
        // メッセージ枠を更新
        [self setMessageAreaPartner:YES];
        // 提携支店口座
        [self addPartnerView];
        if ([appDel isOKBBranch]) {
            [self addPartnerOperationView];
        } else {
            [self addPartnerOperationViewWithDepositAndTransfer];
        }
        [self.serviceView reloadData];

        // お知らせ
        if ([appDel isOKBBranch]) {
            [self pushLoadUrl:urlNoticeOKB baseView:nil index:self.indexForCSFPartnerIndividual];
        } else {
            [self pushLoadUrl:urlNoticeNCB baseView:nil index:self.indexForCSFPartnerIndividual];
        }

        // 注意事項領域
        [self removeViewAtIndex:self.indexForAttentionView animated:NO];
        // 注意事項（閉じる状態）
        self.attentionCloseView = [self createAttentionCloseView];
        // 注意事項（開く状態）
        self.attentionOpenView = [self createAttentionOpenView];
        // 開閉状態
        if ([appDel isOKBBranch]) {
            isAttentionClose = [DataStorageService getBOOL:ValueTypeUserDefaultsPartnerBankAttentionOKB];
        } else {
            isAttentionClose = [DataStorageService getBOOL:ValueTypeUserDefaultsPartnerBankAttentionNCB];
        }
        if (isAttentionClose) {
            [self insertViewAtHCenter:self.attentionCloseView atIndex:self.indexForAttentionView animated:NO];
        } else {
            [self insertViewAtHCenter:self.attentionOpenView atIndex:self.indexForAttentionView animated:NO];
        }
        // CSF画像取得
        [self startLoading];
    }
}

// 0014Additional電文による更新発生開始時の各種処理を行う
- (void)update0014AdditionalReady
{
    RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
    if ([appDel isProperBranch]) {
        // プロパー口座
        if (!(self.topCampaignView
              && [self.topCampaignView isKindOfClass:TOPCampaignView.class]
              && ((TOPCampaignView *)self.topCampaignView).pages == 0)) {
            // キャンペーンエリアが読込中(TOPCampaignViewクラスとして存在し、かつキャンペーン数設定が0)でない場合はエリアを読込中に
            // (0014v2電文送信後に0014Additional電文送信する場合、0014v2送信時のタイミングですでにキャンペーンが読み込み中表示になっているため、その場合は再度読み込み中にはしない)
            [self updateCampaignView:YES];
        }
    } else {
        // 提携支店口座
        // NOOP
    }
}

#pragma mark - UITableViewDataSourceのデリゲート
- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    return self.viewDto.bankInfoList.count;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    UITableViewCell * cell = [tableView dequeueReusableCellWithIdentifier:k_CellID];
    if (!cell) {
        cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault
                                      reuseIdentifier:k_CellID];
        //共通設定
        cell.textLabel.font = [UIFont fontWithName:NotoSansCJKjpRegular size:14.0f];
        cell.textLabel.textColor = UIColor.blackColor;
        cell.textLabel.numberOfLines = 2;
        cell.textLabel.lineBreakMode = NSLineBreakByTruncatingTail;
        cell.backgroundColor = UIColor.clearColor;
        cell.frame = CGRectMake(0.0f, 0.0f, tableView.frame.size.width, k_HeightCell);
    }
    
    //セルの内容を設定する
    [self configCell:cell indexPath:indexPath];
    
    return cell;
}

#pragma mark - BWEBリクエスト
- (void)requestBWEBAPIForCardloanInfo
{
    self.viewDto.bwebUpdating = YES;
    [self reloadDashboardView];

    NSURL *bwebUrl = [NSURL URLWithString:self.viewDto.bwebUrlForCardloan];
    
    //リクエスト発行の準備
    NSMutableURLRequest *urlRequest = [[NSMutableURLRequest alloc] initWithURL:bwebUrl
                                                                   cachePolicy:NSURLRequestReloadIgnoringCacheData
                                                               timeoutInterval:TIMEOUT_CONNECTION];
    [urlRequest setHTTPMethod:@"POST"];
    [urlRequest setCachePolicy:NSURLRequestReloadIgnoringLocalCacheData];
    [urlRequest setTimeoutInterval:TIMEOUT_CONNECTION];
    [urlRequest setValue:@"application/x-www-form-urlencoded" forHTTPHeaderField:@"Content-Type"];
    [urlRequest setValue:@"1" forHTTPHeaderField:@"X-Rb-Smp-App"];
    [urlRequest setValue:[NSString stringWithFormat:@"iPhone App(%@;%@;%@;Apple)"
                          , [[UIDevice currentDevice] model], [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleVersion"] ,
                          [UIDevice currentDevice].systemVersion] forHTTPHeaderField:@"X-User-Agent"];
    
    self.userAgentWebView = [[WKWebView alloc] init];
    [self.userAgentWebView evaluateJavaScript:@"navigator.userAgent"
                completionHandler:^(id result, NSError *error) {
        NSString *userAgent = nil;
        if (error == nil) {
            if (result != nil) {
                userAgent = [NSString stringWithFormat:@"%@", result];
            }
        } else {
               NSLog(@"evaluateJavaScript error : %@", error.localizedDescription);
        }
        [urlRequest setValue:userAgent forHTTPHeaderField:@"User-Agent"];
           
           //リクエストを発行し、レスポンスを取得
        [[[NSOperationQueue alloc] init] addOperationWithBlock:^{
               //リクエストを発行し、レスポンスを取得
            [NSURLConnection sendAsynchronousRequest:urlRequest queue:[NSOperationQueue mainQueue] completionHandler:^(NSURLResponse * _Nullable response, NSData * _Nullable data, NSError * _Nullable connectionError) {
                if (connectionError) {
                       [[NSNotificationCenter defaultCenter] postNotificationName:@"LoadDataFailed" object:nil];
                       return;
                }
                NSInteger statusCode = [(NSHTTPURLResponse *)response statusCode];
                if (statusCode != 200) {
                    [[NSNotificationCenter defaultCenter] postNotificationName:@"LoadDataFailed" object:nil];
                    return;
                }

                [[NSNotificationCenter defaultCenter] postNotificationName:@"LoadDataSuccess" object:data];
            }];
        }];
    }];
    //リクエストを発行し、レスポンスを取得
    // 通知を受け取れるようにする
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(onUrlConnectionSuccess:) name:@"LoadDataSuccess" object:nil];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(onUrlConnectionError:) name:@"LoadDataFailed" object:nil];
    
    //ステータスバーのインジケータを消す
    [UIApplication sharedApplication].networkActivityIndicatorVisible = NO;
}

- (void)onUrlConnectionError:(NSNotification*)notification
{
    // 取得失敗
    [[NSNotificationCenter defaultCenter] removeObserver:self name:@"LoadDataSuccess" object:nil];
    [[NSNotificationCenter defaultCenter] removeObserver:self name:@"LoadDataFailed" object:nil];
    self.viewDto.bwebUpdating = NO;
    [self reloadDashboardView];

    return;
}


- (void)onUrlConnectionSuccess:(NSNotification*)notification
{
    [[NSNotificationCenter defaultCenter] removeObserver:self name:@"LoadDataSuccess" object:nil];
    [[NSNotificationCenter defaultCenter] removeObserver:self name:@"LoadDataFailed" object:nil];
 
    self.viewDto.bwebUpdating = NO;

    NSError *error = nil;
    NSJSONSerialization *json = [NSJSONSerialization JSONObjectWithData:notification.object
                                                                options:NSJSONReadingAllowFragments
                                                                  error:&error];
    
    if (error || ![json isKindOfClass:NSDictionary.class]) {
        return;
    }
    
    NSDictionary *attributes = (NSDictionary *)json;
    RBLog(@"dictionary: %@", attributes);
    
    // 結果コード
    NSString *resultCode = attributes[@"result_code"];
    // 連携済みフラグ
    NSString *linkFlag = attributes[@"link_flag"];
    // 表示可否フラグ
    NSString *displayAvailability = attributes[@"display_availability"];
    // 状態区分
    NSString *status = attributes[@"status"];
    // 利用可能額
    NSString *availableAmount = attributes[@"available_amount"];
    // 利用総額
    NSString *totalUsage = attributes[@"total_usage"];
    
    if (![@"0000" isEqualToString:resultCode]) {
        // ダッシュボードカードローンを非表示にする.
        [self.viewDto.dashboardShowArray filterUsingPredicate:[NSPredicate predicateWithBlock:^BOOL(DashboardResponse *evaluatedObject, NSDictionary *bindings) {
            // カードローンカードを排除
            return ![evaluatedObject.dashboardID isEqualToString:@"4"];
        }]];
        // indicatorを消す.
        self.dashboardControl.numberOfPages = self.viewDto.dashboardShowArray.count;
        
        [self reloadDashboardView];
        
        return;
    }
    
    // 未連携の場合、カードローンカードを非表示.
    if (![@"1" isEqualToString:linkFlag]) {
        // ダッシュボードカードローンを非表示にする.
        [self.viewDto.dashboardShowArray filterUsingPredicate:[NSPredicate predicateWithBlock:^BOOL(DashboardResponse *evaluatedObject, NSDictionary *bindings) {
            // カードローンカードを排除
            return ![evaluatedObject.dashboardID isEqualToString:@"4"];
        }]];
        
        // indicatorを消す.
        self.dashboardControl.numberOfPages = self.viewDto.dashboardShowArray.count;

        // 削除ダイアログの表示設定.
        for (DashboardResponse *dashboard in self.viewDto.dashboardArray) {
            if ([@"4" isEqualToString:dashboard.dashboardID]) {
                NSString *status0014v2 = dashboard.displayStatus;   ///< 0014v2の表示状態
                if (![@"2" isEqualToString:status0014v2]) {
                    // 電文T0291送信.
                    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onSendTelegramForCardloan: title: message:)]) {
                        [self.topMainViewDelegate onSendTelegramForCardloan:linkFlag title:@"ダッシュボードに表示できるカードが削除されました。" message:dashboard.dashboardName];
                    }
                    
                    // ダッシュボード一覧から、カードローンを削除する
                    [self.viewDto.dashboardArray filterUsingPredicate:[NSPredicate predicateWithBlock:^BOOL(DashboardResponse *evaluatedObject, NSDictionary *bindings) {
                        // カードローンカードを排除
                        return ![evaluatedObject.dashboardID isEqualToString:@"4"];
                    }]];
                }
                break;
            }
        }
        
        [self reloadDashboardView];
        
        return;
    }
    
    // 以下、連携済の場合.
    NSString *description;
    if ([@"0" isEqualToString:status]) {
        description = @"ご利用可能額が0円でなくても、お客さまのご利用状況によってはお借入れができない場合がございます。";
    } else if ([@"1" isEqualToString:status]) {
        description = @"ご返済が確認できないため、現在ご利用いただけません。";
    } else if ([@"2" isEqualToString:status]) {
        description = @"約定返済額の反映までに数日お時間をいただいております。その間、ご利用総額が異なりますのでご了承ください。";
    } else {
        description = @"ご利用可能額が0円でなくても、お客さまのご利用状況によってはお借入れができない場合がございます。";
    }

    // カードローンカードのデータを設定する.
    self.viewDto.cardLoanDto.loanBalanceAmount = totalUsage;
    self.viewDto.cardLoanDto.availableAmount = availableAmount;
    self.viewDto.cardLoanDto.descriptionText = description;
    self.viewDto.cardLoanDto.canDisplay = [@"1" isEqualToString:displayAvailability];

    // 電文0014v2からダッシュボードカードローンが存在しない場合、仮のダッシュボードを追加
    DashboardResponse *cardLoan;
    for (DashboardResponse *dashboard in self.viewDto.dashboardArray) {
        if ([@"4" isEqualToString:dashboard.dashboardID]) {
            cardLoan = dashboard;
            break;
        }
    }
    if (cardLoan == nil) {
        cardLoan = [[DashboardResponse alloc] initWithId:@"4" status:@"2" isAddedShow:@"0" isDeletedShow:@"0"];
        // dashboard arrayに追加（ダッシュボード編集画面に利用する）
        [self.viewDto.dashboardArray addObject:cardLoan];
    }
    
    NSString *status0014v2 = cardLoan.displayStatus;   ///< 0014v2の表示状態

    if ([@"2" isEqualToString:status0014v2]) {
        // 連携済み、且つ0014v2の状態が表示対象外2の場合ダッシュボードカードローンを表示し、追加ダイアログを表示する.
        // ダッシュボードカードローンを表示
        if (![self.viewDto.dashboardShowArray containsObject:cardLoan]) {
            // ダッシュボード編集前に、ダッシュボードカードローンを追加する.
            NSInteger index = self.viewDto.dashboardShowArray.count - 1;
            [self.viewDto.dashboardShowArray insertObject:cardLoan atIndex:index];
            self.dashboardControl.numberOfPages = self.viewDto.dashboardShowArray.count;
            [self reloadDashboardView];
            
            self.dashboardControl.currentPage = self.dashboardView.indexPathsForVisibleItems.firstObject.item;
        }
        
        cardLoan.displayStatus = @"1";

        // 電文T0291送信.
        if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onSendTelegramForCardloan: title: message:)]) {
            [self.topMainViewDelegate onSendTelegramForCardloan:linkFlag title:@"ダッシュボードに新しいカードが追加されました。" message:cardLoan.dashboardName];
        }
    }
    
    [self reloadDashboardView];
}

- (void) reloadDashboardView {
    [self.dashboardView reloadData];
    DashboardFlowLayout *layout = (DashboardFlowLayout *)self.dashboardView.collectionViewLayout;
    [self.dashboardView setContentOffset:CGPointMake([layout pageWidth] * self.viewDto.dashboardShowArray.count * k_InfinityCount / 2, 0) animated:NO];
    [self.dashboardControl setNumberOfPages:self.viewDto.dashboardShowArray.count];
    [self.dashboardControl setCurrentPage:0];
}

#pragma mark - UITableViewDelegateのデリゲート
- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    [tableView deselectRowAtIndexPath:indexPath animated:NO];
    NSString * urlStr = self.viewDto.bankInfoList[indexPath.row][@"url"];
    
    if (urlStr && ![urlStr isEqualToString:@""]) {
        //リンク先のURLが存在する場合はリンク先に遷移
        [self.topMainViewDelegate onNewsSelectAction:tableView url:urlStr];
    }
}

#pragma mark - UICollectionViewDataSource
- (NSInteger)collectionView:(UICollectionView *)collectionView numberOfItemsInSection:(NSInteger)section
{
    if (collectionView == self.dashboardView) {
        // ダッシュボード
        // 無限スクロール対応：セルの数を大きい数字（ダッシュボード数 x 100,000）に設定しておく.
        return self.viewDto.dashboardShowArray.count == 1 ? 1 : self.viewDto.dashboardShowArray.count * k_InfinityCount;
    } else if (collectionView == self.serviceView) {
        // 商品・サービス
        return self.viewDto.serviceItems.count;
    } else if (collectionView == self.groupServiceView) {
        //楽天グループサービス(トップ画面) 上位７つまでともっと見るボタンを表示
        return  MIN(self.viewDto.groupServiceItems.count,7) + 1;
    } else {
        // お問合せ・お手続き
        return self.viewDto.customerCenterItems.count;
    }
}

- (UICollectionViewCell *)collectionView:(UICollectionView *)collectionView cellForItemAtIndexPath:(NSIndexPath *)indexPath
{
    if (collectionView == self.dashboardView) {
        // ダッシュボード
        // セルの数は実際のダッシュボードの数の100,000倍のため、ここで実際のダッシュボードのindexを取得する.
        int index = fmod(indexPath.row, self.viewDto.dashboardShowArray.count);
        DashboardResponse *dashboard = self.viewDto.dashboardShowArray[index];
        
        if ([dashboard.dashboardID isEqualToString:@"0"]) {
            // 預金・残高カード
            DashboardBalanceCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:DashboardBalanceCellReuseIdentifier forIndexPath:indexPath];
            [cell configureWith:self.viewDto];
            cell.delegate = self;
            return cell;
        } else if([dashboard.dashboardID isEqualToString:@"1"]) {
            // セキュリティ設定カード
            DashboardSecurityCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:DashboardSecurityCellReuseIdentifier forIndexPath:indexPath];
            [cell configureWith:self.viewDto];
            cell.delegate = self;
            return cell;
        } else if([dashboard.dashboardID isEqualToString:@"2"]) {
            // デビットカード
            DashboardDebitCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:DashboardDebitCellReuseIdentifier forIndexPath:indexPath];
            [cell configureWith:self.viewDto];
            cell.delegate = self;
            return cell;
        } else if([dashboard.dashboardID isEqualToString:@"3"]) {
            // 外貨預金カード
            DashboardFCCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:DashboardFCCellReuseIdentifier forIndexPath:indexPath];
            [cell configureWith:self.viewDto];
            cell.delegate = self;
            return cell;
        } else if([dashboard.dashboardID isEqualToString:@"4"]) {
            // カードローンカード
            DashboardCardloanCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:DashboardCardloanCellReuseIdentifier forIndexPath:indexPath];
            [cell configureWith:self.viewDto];
            cell.delegate = self;
            return cell;
        } else {
            // 編集カード
            DashboardEditCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:DashboardEditCellReuseIdentifier forIndexPath:indexPath];
            cell.delegate = self;
            return cell;
        }
    } else if (collectionView == self.serviceView) {
        // 商品・サービス
        ServiceItemCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:ServiceItemReuseIdentifier forIndexPath:indexPath];
        cell.delegate = self;
        [cell configureWith:self.viewDto.serviceItems[indexPath.row]];
        return cell;
    } else if (collectionView == self.groupServiceView) {
        // 楽天グループサービス(トップ画面)
        GroupServiceItemCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:GroupServiceItemReuseIdentifier forIndexPath:indexPath];
        if (indexPath.row <= MIN(self.viewDto.groupServiceItems.count - 1,6)) {
            [cell configureWith:self.viewDto.groupServiceItems[indexPath.row] ratIdPrefix:[NSString stringWithFormat:@"%@_%@",OMN_MAINMENU, OMN_FINTECH]];
        } else {
            [cell configureSeeMore];
        }
        cell.delegate = self;
        return cell;
    } else {
        // お問合せ・お手続き
        ServiceItemCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:ServiceItemReuseIdentifier forIndexPath:indexPath];
        [cell configureWith:self.viewDto.customerCenterItems[indexPath.row]];
        cell.delegate = self;
        return cell;
    }
}

- (void)setControlWithPage:(CGFloat)page
{
    [self.dashboardControl setCurrentPage:(NSInteger)page];
}

#pragma mark - UIScrollViewDelegate
- (void)scrollViewDidEndDecelerating:(UIScrollView *)scrollView
{
    if (scrollView == self.dashboardView) {
        DashboardFlowLayout *layout = (DashboardFlowLayout *)self.dashboardView.collectionViewLayout;
        CGFloat width = [layout pageWidth];
        double indexOfPage = scrollView.contentOffset.x / width;
        CGFloat real = fmod(indexOfPage, self.viewDto.dashboardShowArray.count);
        self.dashboardControl.currentPage = real;
        NSUserDefaults * ud = [NSUserDefaults standardUserDefaults];
        BOOL dashboardDisplayedFlag = [ud boolForKey:@"DASHBOARD_DISPLAYED_FLAG"];
        RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
        BOOL hasLogin = [DataStorageService getBOOL:ValueTypeUserDefaultsHasLogin];
        if(!dashboardDisplayedFlag&&appDel.externalFileDto.enabledShowHowtoUseDashboardGuideTutorial&&hasLogin){
            [ud setBool:YES forKey:@"DASHBOARD_DISPLAYED_FLAG"];
            DashboardGuideTutorialView *dashboardGuideView = [[DashboardGuideTutorialView alloc] init];
            dashboardGuideView.dashboardGuideTutorialViewDelegate = (id)self.topMainViewDelegate;
            RakutenBankAppDelegate * appDel = [UIApplication sharedApplication].delegate;
            [UIUXTOPMakeViewUtil fadeInWithView:dashboardGuideView];
            [appDel.window addSubview:dashboardGuideView];
        }

        DashboardResponse *dashboard = self.viewDto.dashboardShowArray[(NSInteger)real];
        if ([@"0" isEqualToString:dashboard.dashboardID]) {
            [self sendToRAT:@"_dashboard_balance"];
        } else if ([@"1" isEqualToString:dashboard.dashboardID]) {
            [self sendToRAT:@"_dashboard_security"];
        } else if ([@"2" isEqualToString:dashboard.dashboardID]) {
            [self sendToRAT:@"_dashboard_debit"];
        } else if ([@"3" isEqualToString:dashboard.dashboardID]) {
            [self sendToRAT:@"_dashboard_foreign_deposit"];
        } else if ([@"4" isEqualToString:dashboard.dashboardID]) {
            [self sendToRAT:@"_dashboard_cardloan"];
        } else if ([@"99" isEqualToString:dashboard.dashboardID]) {
            [self sendToRAT:@"_dashboard_edit"];
        }
    }
}

#pragma mark - TopCampaignViewDelegateのデリゲート
/**
 * キャンペーンバナーがタップされた場合
 */
- (void)onCampaignTap:(TOPCampaignView *)sender campaignNumber:(NSString *)campaignNumber;
{
    if (self.topMainViewDelegate) {
        [self.topMainViewDelegate onCampaignTap:sender campaignNumber:campaignNumber];
    }
}

#pragma mark - 非公開ユーティリティーメソッド
/**
 * セルの設定を行う
 */
- (void)configCell:(UITableViewCell *)cell indexPath:(NSIndexPath *)indexPath
{
    NSDictionary * displayDataDict = self.viewDto.bankInfoList[indexPath.row];
    
    if (!displayDataDict[@"url"] || [displayDataDict[@"url"] isEqualToString:@""]) {
        // リンク先URLが存在しない場合はaccessoryViewにImageViewを削除する
        cell.accessoryView = nil;
    } else {
        // リンク先URLが存在する場合はaccessoryViewにImageViewを追加する
        UIImage * arrowImage = [UIImage imageNamed:@"CMN_Arrow_r_news"];
        UIImageView * arrow = [[UIImageView alloc] initWithImage:arrowImage];
        RESIZE_WITH_SCALE(arrow, 0.5);
        cell.accessoryView = arrow;
    }
    
    //タイトル設定
    cell.textLabel.text = displayDataDict[@"contents"];
    
    //背景ビュー.
    UIView * backgroundView = [[UIView alloc] initWithFrame:cell.bounds];
    backgroundView.backgroundColor = UIColor.whiteColor;
    
    //区切り線を追加する
    UIView * separeterView = [[UIView alloc] initWithFrame:cell.bounds];
    separeterView.backgroundColor = [ColorUtil SeparatorLightBrown];
    CHANGE_HEIGHT(separeterView, k_HeightCellSeparatorSectionEnd);
    MOVE_WITH_BOTTOM_POSITION(separeterView, cell.frame.size.height);
    [backgroundView addSubview:separeterView];

    cell.backgroundView = backgroundView;
}

#pragma mark - TOPMainViewDelegateメソッド
//QRログインボタンタップ時のアクション
- (void)onQrLoginButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onQrLoginButtonAction:)]) {
        [self.topMainViewDelegate onQrLoginButtonAction:button];
    }
}

//ポイント受取ボタンタップ時のアクション
- (void)onPointReceiptButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onPointReceiptButtonAction:)]) {
        [self.topMainViewDelegate onPointReceiptButtonAction:button];
    }
}

//預金残高内訳へタップ時のアクション
- (void)onAssetInquiryButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onAssetInquiryButtonAction:)]) {
        [self.topMainViewDelegate onAssetInquiryButtonAction:button];
    }
}

//提携支店の場合、表示・非表示ボタンタップ時のアクション
- (void)switchPartnerBalanceShowHide
{
    [self switchPartnerBalanceShowHide:YES];
}
//提携支店の場合、表示・非表示ボタンタップ時のアクション
- (void)switchPartnerBalanceShowHide:(BOOL)switchFlag
{
    BOOL willDisplay;
    if (switchFlag) {
        willDisplay = !self.viewDto.depositBalanceIsDisplay;
        // RAT送信.
        NSString *suffix = willDisplay ? @"_balance_show" : @"_balance_hide";
        [self sendToRAT:suffix];
    } else {
        willDisplay = self.viewDto.depositBalanceIsDisplay;
    }
    
    [self.switchBtn setImage: willDisplay ? [UIImage imageNamed:@"balanceShow"] : [UIImage imageNamed:@"balanceHide"]];
    
    if (self.viewDto.sending0014) {
        // 0014電文送信中は表示切り替えしない
    } else if (self.viewDto.sending0014Partner) {
        // 0014_Partner電文送信中は楽天銀行情報のみ表示を切り替える
        [self.properBalanceView setHidden:!willDisplay];
        [self.properBalanceHideView setHidden:willDisplay];
    } else {
        // 0014も0014_Partnerのどちらの電文も送信中でない場合はすべての表示を切り替える
        [self.partnerTotalBalanceView setHidden:!willDisplay];
        [self.partnerTotalBalanceHideView setHidden:willDisplay];
        [self.partnerAvailiableBalanceView setHidden:!willDisplay];
        [self.properBalanceView setHidden:!willDisplay];
        [self.properBalanceHideView setHidden:willDisplay];
    }
    
    // 表示・非表示状態を切り替える.
    self.viewDto.depositBalanceIsDisplay = willDisplay;
    
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onAssetDisplayButtonAction)]) {
        [self.topMainViewDelegate onAssetDisplayButtonAction];
    }
}

// 提携支店情報表示のローディング状態を更新
- (void)updatePartnerBalanceLoading
{
    // デフォルト(0014も0014_Partnerのどちらの電文も送信中でない場合はすべてのロード中表示を終了)
    BOOL partnerLoading = NO;
    BOOL properLoading = NO;
    if (self.viewDto.sending0014) {
        // 0014電文送信中はどちらもロード中表示
        partnerLoading = YES;
        properLoading = YES;
    } else if (self.viewDto.sending0014Partner) {
        // 0014_Partner電文送信中は提携支店情報のみロード中表示
        partnerLoading = YES;
        properLoading = NO;
    }
    [self.partnerTotalBalanceView setHidden:partnerLoading];
    [self.partnerTotalBalanceHideView setHidden:partnerLoading];
    [self.partnerAvailiableBalanceView setHidden:partnerLoading];
    [self.partnerTotalBalanceLoadingView setHidden:!partnerLoading];
    [self.partnerAvailiableBalanceLoadingView setHidden:!partnerLoading];
    [[self viewWithTag:ButtonTagReloadPartnerAsset] setHidden:partnerLoading];
    
    [self.properBalanceView setHidden:properLoading];
    [self.properBalanceHideView setHidden:properLoading];
    [self.properBalanceLoadingView setHidden:!properLoading];
    
    [[self viewWithTag:LabelTagPartnerUpdateTime] setHidden:partnerLoading];
    [self.partnerUpddateTimeLoadingView setHidden:!partnerLoading];
    
    [[self viewWithTag:LabelTagUpdateTime] setHidden:properLoading];
    [self.properUpddateTimeLoadingView setHidden:!properLoading];

    // 金額の表示・非表示もこのタイミングで一度更新しておく
    [self switchPartnerBalanceShowHide:NO];
}

//支払可能金額の「？」アイコンタップ時のアクション
- (void)onPartnerQuestionButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onPartnerQuestionButtonAction:)]) {
        [self.topMainViewDelegate onPartnerQuestionButtonAction:button];
    }
}

// 楽天銀行へ入金タップ時のアクション
- (void)onPartnerDepositButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onPartnerDepositButtonAction:)]) {
        [self.topMainViewDelegate onPartnerDepositButtonAction:button];
    }
}

// 楽天銀行から出金タップ時のアクション
- (void)onPartnerWithdrawalButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onPartnerWithdrawalButtonAction:)]) {
        [self.topMainViewDelegate onPartnerWithdrawalButtonAction:button];
    }
}

//ポイント付与対象サービスを確認リンクタップ時のアクション
- (void)onConfirmPointService:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onConfirmPointService:)]) {
        [self.topMainViewDelegate onConfirmPointService:button];
    }
}

//重要なお知らせ・プロモーションタップ時のアクション
- (void)onNoticePromotionAction: (UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onNoticePromotionAction:)]) {
        [self.topMainViewDelegate onNoticePromotionAction:button];
    }
}

//連携のお願いタップ時のアクション
- (void)onPartnerLinkAction: (UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onPartnerLinkAction:)]) {
        [self.topMainViewDelegate onPartnerLinkAction:button];
    }
}

- (void) segmentBannerImageButtonAction: (NSInteger) bannerIndex
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(segmentBannerImageButtonAction:)]) {
        [self.topMainViewDelegate segmentBannerImageButtonAction:bannerIndex];
    }
}

//会員リンク登録
- (void)onRakutenMemberLinkRegister:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onRakutenMemberLinkRegister:)]) {
        [self.topMainViewDelegate onRakutenMemberLinkRegister:button];
    }
}

//もっと見るボタンタップ
- (void)onShowMoreCustomerCenter:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onShowMoreCustomerCenter:)]) {
        [self.topMainViewDelegate onShowMoreCustomerCenter:button];
    }
}

// 最近の履歴の消去・完了ボタンタップ
- (void)onHistoryDeleteAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onHistoryDeleteAction:)]) {
        [self.topMainViewDelegate onHistoryDeleteAction:button];
    }
    
    // 現在のボタン押下状況で処理を分ける
    if (isHistoryDeleteMode) {
        // 履歴削除モード変更
        isHistoryDeleteMode = NO;
        // プルプル解除
        [self.historyStackView setDeleteMode:NO];
        // ボタン名変更
        UILabel * label = [button viewWithTag: SectionHeaderViewButtonLabel];
        label.text = [LanguageUtil RBLocalizedString:@"UI0012_DeleteHistory"];
        // 各ボタンの削除アイコンを非表示
        [self.historyStackView hiddenIcon:YES];
    } else {
        // 履歴削除モード変更
        isHistoryDeleteMode = YES;
        // プルプルON
        [self.historyStackView setDeleteMode:YES];
        // ボタン名変更
        UILabel * label = [button viewWithTag: SectionHeaderViewButtonLabel];
        label.text = [LanguageUtil RBLocalizedString:@"UI0012_EditHistory_Finish"];
        // 各ボタンの削除アイコンを表示
        [self.historyStackView hiddenIcon:NO];
    }
}

//FAQボタンタップ時のアクション
- (void)onFAQButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onFAQButtonAction:)]) {
        [self.topMainViewDelegate onFAQButtonAction:button];
    }
}

//使い方ガイドタップ時のアクション
- (void)onGuideButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onGuideButtonAction:)]) {
        [self.topMainViewDelegate onGuideButtonAction:button];
    }
}

//海外送金メッセージ枠タップ
- (void)onFRCreditMessageTap
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onFRCreditMessageTap)]) {
        [self.topMainViewDelegate onFRCreditMessageTap];
    }
}

// ダッシュボード編集
- (void)onEditDashboard:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onEditDashboard:)]) {
        [self.topMainViewDelegate onEditDashboard:button];
    }
}

//表示・非表示ボタンタップ時のアクション
- (void)onBalanceShowHideButtonAction:(BOOL)isDisplay
{
    self.viewDto.depositBalanceIsDisplay = isDisplay;
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onAssetDisplayButtonAction)]) {
        [self.topMainViewDelegate onAssetDisplayButtonAction];
    }
}

//表示・非表示ボタンタップ時のアクション
- (void)onAssetDisplayButtonAction:(UIButton *)button
{
    UIImage * img;
    if (self.viewDto.depositBalanceIsDisplay) {
        self.viewDto.depositBalanceIsDisplay = NO;
        img = [UIImage imageNamed:@"TOP_btn_figure_show"];
        self.assetValueView.hidden = YES;
        self.assetUnitView.hidden = YES;
        self.assetNoDisplayView.hidden = NO;
    } else {
        self.viewDto.depositBalanceIsDisplay = YES;
        img = [UIImage imageNamed:@"TOP_btn_figure_hide"];
        self.assetValueView.hidden = NO;
        self.assetUnitView.hidden = NO;
        self.assetNoDisplayView.hidden = YES;
    }
    [self.assetDisplayButton setImage:img forState:UIControlStateNormal];
    [self.assetDisplayButton setImage:img forState:UIControlStateHighlighted];

    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onAssetDisplayButtonAction)]) {
        [self.topMainViewDelegate onAssetDisplayButtonAction];
    }
}

// ハッピープログラムタップ時のアクション
- (void)onHappyButtonAction
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onHappyButtonAction)]) {
        [self.topMainViewDelegate onHappyButtonAction];
    }
}

// ハッピープログラムにエントリータップ時のアクション
- (void)onHappyEntryButtonAction
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onHappyEntryButtonAction)]) {
        [self.topMainViewDelegate onHappyEntryButtonAction];
    }
}

// 「振込・振替・送金」タップ時のアクション
- (void)onTransferButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onTransferButtonAction:)]) {
        [self.topMainViewDelegate onTransferButtonAction:button];
    }
}

// 「ATM・入金」タップ時のアクション
- (void)onATMDepositButtonAction:(UIButton *)button
{
    // RAT送信
    [self sendToRAT:@"_atm_deposit"];
    
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onATMDepositButtonAction:)]) {
        [self.topMainViewDelegate onATMDepositButtonAction:button];
    }
}


// Facebookで送金タップ時のアクション
- (void)onFacebookButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onFacebookButtonAction:)]) {
        [self.topMainViewDelegate onFacebookButtonAction:button];
    }
}

// Viberで送金タップ時のアクション
- (void)onViberButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onViberButtonAction:)]) {
        [self.topMainViewDelegate onViberButtonAction:button];
    }
}

// メルマネタップ時のアクション
- (void)onMerumaneButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onMerumaneButtonAction:)]) {
        [self.topMainViewDelegate onMerumaneButtonAction:button];
    }
}

// 入出金明細タップ時のアクション
- (void)onStatementButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onStatementButtonAction:)]) {
        [self.topMainViewDelegate onStatementButtonAction:button];
    }
}

// カード利用状況・お申込タップ時のアクション
- (void)onCardButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onCardButtonAction:)]) {
        [self.topMainViewDelegate onCardButtonAction:button];
    }
}

// 楽天銀行コンビニタップ時のアクション
- (void)onConveniBarcodeButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onConveniBarcodeButtonAction:)]) {
        [self.topMainViewDelegate onConveniBarcodeButtonAction:button];
    }
}

// 金利一覧タップ時のアクション
- (void)onRateButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onRateButtonAction:)]) {
        [self.topMainViewDelegate onRateButtonAction:button];
    }
}

// 定期預金タップ時のアクション
- (void)onTimeAccountButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onTimeAccountButtonAction:)]) {
        [self.topMainViewDelegate onTimeAccountButtonAction:button];
    }
}

// 楽天エクステ預金タップ時のアクション
- (void)onExsteButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onExsteButtonAction:)]) {
        [self.topMainViewDelegate onExsteButtonAction:button];
    }
}

// 外貨預金タップ時のアクション
- (void)onFCButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onFCButtonAction:)]) {
        [self.topMainViewDelegate onFCButtonAction:button];
    }
}

// 楽天銀行スーパーローンタップ時のアクション
- (void)onSuperLoanButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onSuperLoanButtonAction:)]) {
        [self.topMainViewDelegate onSuperLoanButtonAction:button];
    }
}

// 住宅ローンタップ時のアクション
- (void)onHomeLoanButtonAction:(UIButton *)button;
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onHomeLoanButtonAction:)]) {
        [self.topMainViewDelegate onHomeLoanButtonAction:button];
    }
}

// 新・楽天銀行FXタップ時のアクション
- (void)onFXButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onFXButtonAction:)]) {
        [self.topMainViewDelegate onFXButtonAction:button];
    }
}

// BIG・totoタップ時のアクション
- (void)onBIGButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onBIGButtonAction:)]) {
        [self.topMainViewDelegate onBIGButtonAction:button];
    }
}

// 宝くじタップ時のアクション
- (void)onNumbersButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onNumbersButtonAction:)]) {
        [self.topMainViewDelegate onNumbersButtonAction:button];
    }
}

// 公営競技タップ時のアクション
- (void)onKoueiButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onKoueiButtonAction:)]) {
        [self.topMainViewDelegate onKoueiButtonAction:button];
    }
}

// キャンペーン応募タップ時のアクション
- (void)onCampaignButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onCampaignButtonAction:)]) {
        [self.topMainViewDelegate onCampaignButtonAction:button];
    }
}

// 現金プレゼントタップ時のアクション
- (void)onCashGiftButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onCashGiftButtonAction:)]) {
        [self.topMainViewDelegate onCashGiftButtonAction:button];
    }
}

// 保険タップ時のアクション
- (void)onInsuranceButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onInsuranceButtonAction:)]) {
        [self.topMainViewDelegate onInsuranceButtonAction:button];
    }
}

// CASHbタップ時のアクション
- (void)onCashbButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onCashbButtonAction:)]) {
        [self.topMainViewDelegate onCashbButtonAction:button];
    }
}

// マネーサポートタップ時のアクション
- (void)onMoneySupportButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate &&
        [self.topMainViewDelegate respondsToSelector:@selector(onMoneySupportButtonAction:)]) {
        [self.topMainViewDelegate onMoneySupportButtonAction:button];
    }
}

// ATM・コンビニタップ時のアクション
- (void)onATMButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onATMButtonAction:)]) {
        [self.topMainViewDelegate onATMButtonAction:button];
    }
}

// ヘルプタップ時のアクション
- (void)onHelpButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onHelpButtonAction:)]) {
        [self.topMainViewDelegate onHelpButtonAction:button];
    }
}

// セキュリティタップ時のアクション
- (void)onSecurityButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onSecurityButtonAction:)]) {
        [self.topMainViewDelegate onSecurityButtonAction:button];
    }
}

// 楽らくワリカンタップ時のアクション
- (void)onBillSplitButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onBillSplitButtonAction:)]) {
        [self.topMainViewDelegate onBillSplitButtonAction:button];
    }
}

// 入出金明細ワリカンアイコンタップ時のアクション
- (void)onBillSplitButtonPaymentAction:(UITapGestureRecognizer *)sender
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onBillSplitButtonPaymentAction:)]) {
        Statement * statement = (Statement *)[self.viewDto.statementList objectAtIndex:sender.view.tag];
        [self.topMainViewDelegate onBillSplitButtonPaymentAction:statement.transferAmount];
    }
}

// 登録情報タップ時のアクション
- (void)onSettingButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onSettingButtonAction:)]) {
        [self.topMainViewDelegate onSettingButtonAction:button];
    }
}

// サービス一覧タップ時のアクション
- (void)onServiceListButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onServiceListButtonAction:)]) {
        [self.topMainViewDelegate onServiceListButtonAction:button];
    }
}

// 紹介コードの使い方タップ時のアクション
- (void)onReferralCodeSeeMoreAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onReferralCodeSeeMoreAction:)]) {
        [self.topMainViewDelegate onReferralCodeSeeMoreAction:button];
    }
}

// 「お知らせ一覧」タップ時のアクション
- (void)onBankInfoListLastOneButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onBankInfoListLastOneButtonAction:)]) {
        [self.topMainViewDelegate onBankInfoListLastOneButtonAction:button];
    }
}

//（提携支店）情報更新タップ時のアクション
- (void)onReloadButtonAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onReloadButtonAction:)]) {
        [self.topMainViewDelegate onReloadButtonAction:button];
    }
}

#pragma mark - TOPMainViewDelegateメソッド
-(void)onServiceItemTapped: (ServiceItemDto *)serviceItemDto
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onServiceItemTapped:)]) {
        [self.topMainViewDelegate onServiceItemTapped:serviceItemDto];
    }
}

//入出金明細タブ(開く)タップ時のアクション
- (void)onInquiryTabOpenButtonAction:(UIButton *)button
{
    [self removeViewAtIndex:self.indexForTab animated:NO];
    [self insertViewAtHCenter:self.tabInquiryView atIndex:self.indexForTab animated:NO];
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onInquiryTabOpenButtonAction:)]) {
        [self.topMainViewDelegate onInquiryTabOpenButtonAction:button];
    }
}
//入出金明細タブ(閉じる)タップ時のアクション
- (void)onInquiryTabCloseButtonAction:(UIButton *)button
{
    [self removeViewAtIndex:self.indexForTab animated:NO];
    [self insertViewAtHCenter:self.tabCloseView atIndex:self.indexForTab animated:NO];
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onInquiryTabCloseButtonAction:)]) {
        [self.topMainViewDelegate onInquiryTabCloseButtonAction:button];
    }
}
//口座情報タブ(開く)タップ時のアクション
- (void)onAccountTabOpenButtonAction:(UIButton *)button
{
    [self removeViewAtIndex:self.indexForTab animated:NO];
    [self insertViewAtHCenter:self.tabAccountView atIndex:self.indexForTab animated:NO];
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onAccountTabOpenButtonAction:)]) {
        [self.topMainViewDelegate onAccountTabOpenButtonAction:button];
    }
}
//口座情報タブ(閉じる)タップ時のアクション
- (void)onAccountTabCloseButtonAction:(UIButton *)button
{
    [self removeViewAtIndex:self.indexForTab animated:NO];
    [self insertViewAtHCenter:self.tabCloseView atIndex:self.indexForTab animated:NO];
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onAccountTabCloseButtonAction:)]) {
        [self.topMainViewDelegate onAccountTabCloseButtonAction:button];
    }
}

//振込・振替・送金ボタン押下時
- (void)onTransferTabButtonAction:(UIButton *)button
{
    // RAT送信
    [self sendToRAT:@"_transfer"];
    
    [self removeViewAtIndex:self.indexForServiceTab animated:NO];
    [self insertViewAtHCenter:self.serviceListTransferView atIndex:self.indexForServiceTab animated:NO];
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onTransferTabButtonAction:)]) {
        [self.topMainViewDelegate onTransferTabButtonAction:button];
    }
}
//商品・サービスタブタップ時のアクション
- (void)onServiceTabButtonAction:(UIButton *)button
{
    [self removeViewAtIndex:self.indexForServiceTab animated:NO];
    [self insertViewAtHCenter:self.serviceListServiceView atIndex:self.indexForServiceTab animated:NO];
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onServiceTabButtonAction:)]) {
        [self.topMainViewDelegate onServiceTabButtonAction:button];
    }
}

/**
 * 紹介コードを送るがタップされた場合
 */
- (void)onSendCode
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onSendCode)]) {
        [self.topMainViewDelegate onSendCode];
    }
}

//便利な機能タブタップ時のアクション
- (void)onOtherTabButtonAction:(UIButton *)button
{
    [self removeViewAtIndex:self.indexForServiceTab animated:NO];
    [self insertViewAtHCenter:self.serviceListOtherView atIndex:self.indexForServiceTab animated:NO];
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onOtherTabButtonAction:)]) {
        [self.topMainViewDelegate onOtherTabButtonAction:button];
    }
}

// メッセージ枠、取引停止中タップ時のアクション
- (void)onStopAccountAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onStopAccountAction:)]) {
        [self.topMainViewDelegate onStopAccountAction:button];
    }
}

// メッセージ枠、未収タップ時のアクション
- (void)onUnpaidAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onUnpaidAction:)]) {
        [self.topMainViewDelegate onUnpaidAction:button];
    }
}

// メッセージ枠、付番同意タップ時のアクション
- (void)onAgreeAgainAction:(UIButton *)button
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onAgreeAgainAction:)]) {
        [self.topMainViewDelegate onAgreeAgainAction:button];
    }
}

// メッセージ枠、属性変更タップ時のアクション
- (void)onCustomerAttributeMessageAction
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onCustomerAttributeMessageAction)]) {
        [self.topMainViewDelegate onCustomerAttributeMessageAction];
    }
}

//背景を設定するボタンタップ時のアクション
- (void)onBackgroundSettingAction
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onBackgroundSettingAction)]) {
        [self.topMainViewDelegate onBackgroundSettingAction];
    }
}

//楽天グループサービスタップ時のアクション
-(void)onGroupServiceItemTapped:(GroupServiceItemDto *)groupServiceItem
{
    if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onGroupServiceItemTapped:)]) {
        [self.topMainViewDelegate onGroupServiceItemTapped:groupServiceItem];
    }
}

//口座振替承認依頼タップ時のアクション
- (void) onAccountTransferApprovalAction {
    [self.topMainViewDelegate onAccountTransferApprovalAction];
}

//登録情報確認依頼タップ時のアクション
- (void) onAccountInformationConfirmationAction {
    [self.topMainViewDelegate onAccountInformationConfirmationAction];
}


// RATへタップイベント送信
- (void)sendToRAT: (NSString *)suffix
{
    [OmnitureMeasurementWrapper trackAppState:[NSString stringWithFormat:@"%@%@", OMN_MAINMENU, suffix] channel:OMN_MENU_CHANNEL];
}

//RAT送信
-(void)sentEventToRATWithEventName:(NSString *)eventName{
    [OmnitureMeasurementWrapper trackAppState:[NSString stringWithFormat:@"%@%@", OMN_HOW_TO_USE_GUIDE_DASHBOARD, eventName] channel:OMN_HOW_TO_USE_GUIDE_CHANNEL];
}

//#pragma mark - HistoryItemCellDelegate
// 最近の履歴の各サービス項目タップ時
- (void)onHistoryItemTapped: (UIButton *) sender
                       view:(UIView *) historyItemCell
             serviceItemDto:(HistoryServiceItemDto *) serviceItemDto
{
    if (!isHistoryDeleteMode) {
        // 画面遷移
        if (self.topMainViewDelegate && [self.topMainViewDelegate respondsToSelector:@selector(onHistoryServiceItemTapped:)]) {
            [self.topMainViewDelegate onHistoryServiceItemTapped:serviceItemDto];
        }
    }
}

// 最近の履歴の各サービス項目の削除アイコンタップ時
- (void)onHistoryDeleteIconTapped: (UIButton *) sender
                       view:(UIView *) historyItemCell
             serviceItemDto:(HistoryServiceItemDto *) serviceItemDto
{
    if (isHistoryDeleteMode) {
        // 最近の履歴Viewから対象のViewを削除
        NSInteger index = [self.historyStackView indexOfView:historyItemCell];
        if (index >= 0) {
            [self.historyStackView removeViewAtIndex:index animated:YES];
        }
        
        // 保存している履歴情報から対象履歴を削除
        [HistoryUtil deleteHistoryServices:serviceItemDto.serviceKey];
        
        self.historyScrollView.contentSize = CGSizeMake(self.historyStackView.frame.size.width +20.0, self.historyStackView.frame.size.height);
        
        // 履歴が0件になった場合は表示を切り替える
        if ([HistoryUtil getHistoryServiceCount] == 0) {
            [self.historyStackView removeAllSubViews];
            UIView * messageView = [self createNonStackingHistoryView];
            [self.historyStackView addViewAtVCenter:messageView];
        }
    }
}

@end
