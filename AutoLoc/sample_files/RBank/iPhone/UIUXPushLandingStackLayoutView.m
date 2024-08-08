//
//  UIUXPushLandingStackLayoutView.m
//  RakutenBank
//
//  Created by yeung3732 on 2020/06/07.
//  Copyright © 2020 Rakuten Bank, Ltd. All rights reserved.
//
//

#import "UIUXPushLandingStackLayoutView.h"
#import "UIUXFCUtilMacro.h"

#pragma mark - 定数定義
//標準アニメーション時間[s]
#define ANIMATION_DURATION_DEFAULT 0.3f

#pragma mark - マクロ定義

//メンバ変数をプロパティで宣言
@interface UIUXPushLandingStackLayoutView()

//UIViewのsubviewsは仕様が変わる可能性があるためサブビューリストを別に管理
@property (nonatomic, strong) NSMutableArray * contentViews;    ///<サブビューリスト
@property (nonatomic, strong) UIView         * removeView;      ///<削除アニメーション後に削除するビュー
@property (nonatomic)         BOOL             isAnimation;     ///<アニメーション実行フラグ
@property (nonatomic)         NSInteger        numOfColumn;     ///<列数

@end


@implementation UIUXPushLandingStackLayoutView

#pragma mark - イニシャライザ
- (id)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (self) {
        // Initialization code
        
        //インスタンス変数の初期化
        self.contentViews = [[NSMutableArray alloc] init];
        self.isAnimation = NO;
        self.removeView = nil;
        
        //自身の背景は透過色とし、画面背景はviewControllerに持たせる
        self.backgroundColor = [UIColor clearColor];
    }
    return self;
}

#pragma mark - 公開インスタンスメソッド
#pragma mark - view追加・削除関係メソッド
/**
 *  Viewを今あるViewの最下部に追加するメソッド
 *  @param[in] view 追加するview
 *  @retval    追加したviewのインデックス
 */
- (NSInteger)addView:(UIView *)view
{
    //サブビューを追加
    [self.contentViews addObject:view];
    [self addSubview:view];
    
    //サブビューの位置を最下部に再配置
    CHANGE_ORIGIN_Y(view, self.subViewsHeight);
    
    //サブビュー高さ合計値を更新
    _subViewsHeight += view.frame.size.height;
    
    //高さをサブビューにあわせて更新
    CHANGE_HEIGHT(self, self.subViewsHeight);
    
    //追加したviewのインデックスを返す。
    return self.subviews.count;
}

/**
 *  Viewを今あるViewの最下部に水平中央に追加するメソッド
 *  @param[in] view 追加するview
 *  @retval    追加したviewのインデックス
 */
- (NSInteger)addViewAtHCenter:(UIView *)view
{
    //サブビューの水平中心を自身の中心とあわせる。
    CGPoint center = view.center;
    center.x = self.frame.size.width / 2;
    view.center = center;
    
    //サブビューを追加
    return [self addView:view];
}

/**
 *  空白挿入メソッド 幅0の空白を下部に追加する。
 *  @param[in] height 空白高さ
 *  @retval    追加した空白のインデックス
 */
- (NSInteger)addBlankWithHeight:(CGFloat)height
{
    UIView * blank = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 0, height)];
    blank.backgroundColor = [UIColor clearColor];
    
    return [self addView:blank];
}

@end
