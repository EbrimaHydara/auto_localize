//
//  UIUXQLRegisterFailView.m
//  RakutenBank_PT
//
//  Created by li3731 on 2020/12/23.
//  Copyright © 2020 Rakuten Bank, Ltd. All rights reserved.
//

#import "UIUXQLRegisterFailView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "ColorUtil.h"
#import "OmnitureMeasurementWrapper.h"
#import "LIStackLayoutView.h"
#import "UIUXLIUtilMacro.h"
#import "UIUXLoginMakeViewUtil.h"

@interface UIUXQLRegisterFailView ()

@property (nonatomic, weak) id<UIUXQLRegisterFailViewDelegate> failViewDelegate; ///< イベントデリゲート

@property (nonatomic, strong) UIView * csfImageView;

@end

@implementation UIUXQLRegisterFailView

#pragma mark - イニシャライザ
/**
 * 指定イニシャライザ
 */
- (id)initWithFrame:(CGRect)frame delegate:(id<UIUXQLRegisterFailViewDelegate>)delegate
{
    self = [super initWithFrame:frame];
    if (self) {
        self.failViewDelegate = delegate;
    }
    
    return self;
}

- (void)loadInitialViews
{
    self.backgroundColor = [UIColor whiteColor];
    
    LIStackLayoutView *stackView = [[LIStackLayoutView alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width - 2 * 16.0f, 0.0f)];
    
    stackView.backgroundColor = [ColorUtil getUIColorByRGB:@"#F2DBDA" alpha:1.0f];
    stackView.layer.borderColor = [ColorUtil textColorRed].CGColor;
    stackView.layer.borderWidth = 2;

    CGFloat padding = 5.0f;
    CGFloat width = stackView.frame.size.width - 2 * padding;
    
    UILabel *errorLbl = [[UILabel alloc] initWithFrame:CGRectMake(padding, 0.0f, width, 0.0f)];
    errorLbl.text = @"ご利用の環境では、クイックログインの設定が承れませんでした。\nお手数ですが、楽天銀行カスタマーセンターまでご連絡をお願いいたします。";
    errorLbl.font = [UIFont systemFontOfSize:k_FontSize_DefaultMsg];
    errorLbl.textColor = [ColorUtil getUIColorByRGB:@"#BF0000" alpha:1.0f];
    errorLbl.numberOfLines = 0;
    errorLbl.textAlignment = NSTextAlignmentLeft;
    [errorLbl sizeToFit];

    [stackView addBlankWithHeight:5.0f];
    [stackView addViewAtHCenter:errorLbl];
    [stackView addBlankWithHeight:5.0f];
    
    [self addBlankWithHeight:24.0f];
    [self addViewAtHCenter:stackView];
    [self addBlankWithHeight:24.0f];
    
    // CSF画像
    self.csfImageView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width - 2 * 16, 0)];
    [self addViewAtHCenter:self.csfImageView];

    // 楽天銀行ホームへ戻るボタン
    UIButton *homeBtn = [self imageButton:[UIImage imageNamed:@"btn_qrLogin_home"]
                 hilightedImage:[UIImage imageNamed:@"btn_qrLogin_home"]
                  disablesIamge:nil
                     imageScale:0.5f];
    homeBtn.exclusiveTouch = YES;
    [homeBtn addTarget:self action:@selector(backToHomeButtonAction:) forControlEvents:UIControlEventTouchUpInside];
    [self addBlankWithHeight:30.0f];
    [self addViewAtHCenter:homeBtn];

    // CSF画像読み込み開始
    RakutenBankAppDelegate *appDel = [UIApplication sharedApplication].delegate;
    NSString *csfImagePath = appDel.externalFileDto.quickLoginErrorCustomerCenterImageUrl;
    [self setImage:csfImagePath toView:self.csfImageView insets:UIEdgeInsetsZero handler:nil];
}

/**
 * 外部画像を読み込み、Viewに追加する
 * @param url 画像URL
 * @param toView 読み込んだ画像を描画するView
 */
- (void)setImage:(NSString *)url toView:(UIView *)view insets:(UIEdgeInsets)insets handler:(void(^)())completionHandler
{
    [UIUXLoginMakeViewUtil setNetworkImage:url toView:view insets:insets handler:^() {
        NSInteger index = [self indexOfView:view];
        if (index >= 0) {
            // ビュースタックに積まれていたら再配置してレイアウト更新
            [self replaceView:index view:view];
        } else {
            [view setNeedsDisplay];
            
        }
        if (completionHandler) {
            completionHandler();
        }
    }];
}

/**
 * ビューの更新
 * mainスレッドから呼ぶこと
 */
- (void)replaceView:(NSInteger) index
               view:(UIView *)view
{
    if (index >= 0) {
        [self removeViewAtIndex:index animated:NO];
        [self insertView:view atIndex:index animated:NO];
    }
}

/**
 * 楽天銀行ホームへ戻るボタンタップイベント
 */
- (void)backToHomeButtonAction:(UIButton *)button
{
    if ([self.failViewDelegate respondsToSelector:@selector(backToHomeButtonAction:)]) {
        //同名のメソッドを呼ぶだけ
        [self.failViewDelegate backToHomeButtonAction:button];
    }
}


@end
