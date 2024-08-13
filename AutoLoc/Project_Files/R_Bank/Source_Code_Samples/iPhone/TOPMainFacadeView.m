//
//  TOPMainView.m
//  RakutenBank
//
//  Created by nw_y.ito on 16/03/04.
//
//

#import "TOPMainFacadeView.h"

#import "ColorUtil.h"
#import "CommonUtil.h"
#import "RakutenBankAppDelegate.h"
#import "UIUXTOPBaseScrollView+MakeViewUtils.h"
#import "UIUXTOPMakeViewUtil.h"
#import "UIUXTOPUtilMacro.h"
#import "UIUXTOPLayoutUtil.h"
#import "LayoutUtil.h"
#import "MakeViewUtil.h"
#import "LayoutUtil.h"

#pragma mark - 定数定義

@implementation TOPMainFacadeView

#pragma mark - UIUXTOPBaseScrollViewクラスのメソッドオーバーライド
- (void)loadInitialViews
{
    // デフォルト背景色
    self.backgroundColor = ColorUtil.styleColorEBEBEB;
    
    [self addBlankWithHeight:16.0f];
    
    // ダッシュボードダミーレイアウト
    UIView * dashboardBase = [[UIView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, 308.0f)];
    [self addViewAtHCenter:dashboardBase];
    
    UIView * dashboardCenter = [[UIView alloc] initWithFrame:CGRectMake(2.0f * 12.0f, 0, dashboardBase.frame.size.width - 4.0f * 12.0f, dashboardBase.frame.size.height)];
    UIView * dashboardLeft = [[UIView alloc] initWithFrame:CGRectMake(-dashboardCenter.frame.size.width + 12.0f, 0, dashboardCenter.frame.size.width, dashboardBase.frame.size.height)];
    UIView * dashboardRight = [[UIView alloc] initWithFrame:CGRectMake(dashboardBase.frame.size.width + dashboardCenter.frame.size.width - 12.0f, 0, 12.0f, dashboardBase.frame.size.height)];
    
    dashboardCenter.layer.cornerRadius = 8.0f;
    dashboardCenter.backgroundColor = UIColor.whiteColor;
    dashboardLeft.layer.cornerRadius = 8.0f;
    dashboardLeft.backgroundColor = UIColor.whiteColor;
    dashboardRight.layer.cornerRadius = 8.0f;
    dashboardRight.backgroundColor = UIColor.whiteColor;
    
    [dashboardBase addSubview:dashboardCenter];
    [dashboardBase addSubview:dashboardLeft];
    [dashboardBase addSubview:dashboardRight];

    // ダッシュボード下領域
    CGRect frame = CGRectMake(0.0f, 0.0f, self.frame.size.width, 0.0f);
    CGFloat height = 44 * frame.size.width / 375;
    CGFloat controlHeight = 38 * frame.size.width / 375;
    CGFloat bottomHeight = 16 * frame.size.width / 375;
    CGFloat areaHeight = controlHeight + height + bottomHeight;
    
    [self addBlankWithHeight:areaHeight];

    // 履歴以下の領域
    UIView * otherArea = [[UIView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, self.frame.size.height - self.stackLayoutView.subViewsHeight)];
    otherArea.backgroundColor = UIColor.whiteColor;
    [self addViewAtHCenter:otherArea];

    
}


@end
