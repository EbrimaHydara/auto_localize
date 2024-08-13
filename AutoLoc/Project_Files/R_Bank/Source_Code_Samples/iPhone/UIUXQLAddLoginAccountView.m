//
//  UIUXQLAddLoginAccountView.m
//  RakutenBank_PT
//
//  Created by canon_yeung on 2019/07/23.
//  Copyright © 2019 Rakuten Bank, Ltd. All rights reserved.
//

#import "UIUXQLAddLoginAccountView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"

@implementation UIUXQLAddLoginAccountViewDTO

@end

@interface UIUXQLAddLoginAccountView ()

@property (nonatomic, weak) id<UIUXQLAddLoginAccountViewDelegate> uiuxQLAddLoginAccountViewDelegate;    ///< イベントデリゲート
@property (nonatomic, strong) UIUXQLAddLoginAccountViewDTO * viewDto;                                   ///< DTO
@property (nonatomic) UIButton * proceedToLoginButton;                                                  ///< ログインの手続きへ進むボタン
@property (nonatomic, strong) UIView * csfImageView;                                                    ///< CSF画像ビュー

@end

@implementation UIUXQLAddLoginAccountView

#pragma mark - イニシャライザ
/**
 * 指定イニシャライザ
 */
- (id)initWithFrame:(CGRect)frame
     viewController:(id<UIUXQLAddLoginAccountViewDelegate>)viewController
                dto:(UIUXQLAddLoginAccountViewDTO *)dto
{
    if (self) {
        self.uiuxQLAddLoginAccountViewDelegate = viewController; // コントローラーを設定
        self.viewDto = dto;
    }
    self = [super initWithFrame:frame];
    return self;
}

#pragma mark - ビューの初期化メソッド群

// ビューの初期化時にサブビューを構築する
- (void)loadInitialViews
{
    [self addBlankWithHeight:15.0f];
    [self addCSFImageView];
    [self addBlankWithHeight:15.0f];
    
    //ログインの手続きへ進むボタン
    self.proceedToLoginButton = [self imageButton:[UIImage imageNamed:@"LI_btn_add-bank"]
                                   hilightedImage:[UIImage imageNamed:@"LI_btn_add-bank"]
                                    disablesIamge:nil
                                       imageScale:0.5f];
    [self.proceedToLoginButton addTarget:self
                                    action:@selector(proceedToLoginButtonAction:)
                          forControlEvents:UIControlEventTouchUpInside];
    [self addViewAtHCenter:self.proceedToLoginButton];
    [self addBlankWithHeight:15.0f];
}

/**
 * CSF画像表示部を作成して追加する
 */
- (void)addCSFImageView
{
    // CSF画像
    self.csfImageView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, VIEW_WIDTH_LEVEL15, 0)];
    self.csfImageView.backgroundColor = UIColor.clearColor;
    [self pushLoadUrl:self.viewDto.csfImageURL forView:self.csfImageView];
    [self addViewAtHCenter:self.csfImageView];
    
    // CSF画像読み込み開始
    if ([self.viewDto.csfImageURL length] != 0) {
        [self startLoading];
    }
}

#pragma mark - UIUXQLAddLoginAccountViewDelegateメソッド実装
//ログインの手続きへ進むボタンイベント
- (void)proceedToLoginButtonAction:(UIButton *)button
{
    if ([self.uiuxQLAddLoginAccountViewDelegate respondsToSelector:@selector(proceedToLoginButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.uiuxQLAddLoginAccountViewDelegate proceedToLoginButtonAction:button];
    }
}

@end
