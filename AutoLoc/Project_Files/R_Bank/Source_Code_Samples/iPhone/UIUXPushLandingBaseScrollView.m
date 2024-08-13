//
//  UIUXPushLandingBaseScrollView.m
//  RakutenBank
//
//  Created by yeung3732 on 2020/06/07.
//  Copyright © 2020 Rakuten Bank, Ltd. All rights reserved.
//
//

#import "UIUXPushLandingBaseScrollView.h"
#import "UIUXFCUtilMacro.h"
#import "FCUtil.h"
#import "ResourceLoaderModel.h"

#pragma mark - マクロ定義

//contentSizeをsubViewsHeightで更新するマクロ
#define UPDATE_CONTENT_SIZE \
{\
    CGSize size = self.contentSize; \
    size.height = self.stackLayoutView.subViewsHeight;\
    self.contentSize = size;\
}

//メンバ変数をプロパティで宣言
@interface UIUXPushLandingBaseScrollView()

@end

@implementation UIUXPushLandingBaseScrollView

#pragma mark - イニシャライザ
- (id)initWithFrame:(CGRect)frame
{
    return [self initWithFrame:frame viewDTO:nil];
}

//指定イニシャライザ
- (instancetype)initWithFrame:(CGRect)frame viewDTO:(NSObject *)viewDTO
{
    self = [super initWithFrame:frame];
    if (self) {
        // Initialization code
        
        //インスタンス変数の初期化
        self.stackLayoutView = [[UIUXPushLandingStackLayoutView alloc]
                                initWithFrame:CGRectMake(0.0f, 0.0f,
                                                         frame.size.width, frame.size.height)];
        self.viewDTO = viewDTO;
        
        //画面構成
        //自身の背景は透過色とし、画面背景はviewControllerに持たせる
        self.backgroundColor = [UIColor clearColor];
        //スタックレイアウト追加
        [self addSubview:self.stackLayoutView];
        //サブビューを構築する
        [self loadInitialViews];
    }
    
    return self;
}

#pragma mark - 公開インスタンスメソッド
#pragma mark view追加・削除関係メソッド
/**
 *  Viewを今あるViewの最下部に追加するメソッド
 *  @param[in] view 追加するview
 *  @retval    追加したviewのインデックス
 */
- (NSInteger)addView:(UIView *)view
{
    //サブビューを追加
    NSInteger index = [self.stackLayoutView addView:view];
    
    //contentSizeの高さを更新
    UPDATE_CONTENT_SIZE;
    
    //追加したviewのインデックスを返す。
    return index;
}

/**
 *  Viewを今あるViewの最下部に水平中央に追加するメソッド
 *  @param[in] view 追加するview
 *  @retval    追加したviewのインデックス
 */
- (NSInteger)addViewAtHCenter:(UIView *)view
{
    //サブビューを追加
    NSInteger index = [self.stackLayoutView addViewAtHCenter:view];
    
    //contentSizeの高さを更新
    UPDATE_CONTENT_SIZE;
    
    //追加したviewのインデックスを返す。
    return index;
}

/**
 *  空白挿入メソッド 幅0の空白を下部に追加する。
 *  @param[in] height 空白高さ
 *  @retval    追加した空白のインデックス
 */
- (NSInteger)addBlankWithHeight:(CGFloat)height
{
    NSInteger index = [self.stackLayoutView addBlankWithHeight:height];
    
    UPDATE_CONTENT_SIZE;
    
    return index;
}

#pragma mark - サブクラス実装用メソッド
//サブビューView初期化メソッド
- (void)loadInitialViews
{
    //実装はサブクラス側で行うこと
}

@end
