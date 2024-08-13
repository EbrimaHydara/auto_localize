//
//  TOPMainNavigationView.m
//  RakutenBank
//
//  Created by lin1139 on 2024/03/13.
//  Copyright © 2024 Rakuten Bank, Ltd. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "TOPMainNavigationView.h"

@implementation TOPMainViewNavigationBarView

// Override NavigationBarView for TOPMainView
- (id)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    if (!self) {
        return nil;
    }
    
    RakutenBankAppDelegate * appDelegate = [[UIApplication sharedApplication] delegate];
    frame = appDelegate.navigationBarFrame;
    frame = CGRectMake(frame.origin.x, frame.origin.y, frame.size.width, frame.size.height - 3.0f);
    self.frame = frame;
    self.backgroundColor = [UIColor clearColor];

    //ステータスバー背景
    if ([CommonUtil isIOS7OrLater]) {
        //iOS7以降の場合はステータスバー背景ビューを追加
        self.statusBarView = [[UIView alloc] initWithFrame:appDelegate.statusBarFrame];
        self.statusBarView.backgroundColor = [UIColor clearColor];
        [self addSubview:self.statusBarView];
    } else {
        //iOS6以降の場合はステータスバー背景ビューを追加しない
        self.statusBarView = nil;
    }
    
    // コンテンツ表示領域の設定
    CGRect titleFrame = self.frame;
    if (self.statusBarView) {
        titleFrame.origin.y = self.statusBarView.frame.size.height;
        titleFrame.size.height = titleFrame.size.height - titleFrame.origin.y;
    }
    self.titleFrame = titleFrame;
    
    self.titleView = nil;
    self.isUsedDefaultTitleView = NO;
    
    return self;
}

- (void)setLogoImage
{
    CGFloat logoImageViewHeight = self.titleFrame.size.height - 15.0f;
    UIImageView *logoImageView = [[UIImageView alloc] initWithFrame:CGRectMake(0, 0, 150.0f, logoImageViewHeight)];
    logoImageView.image = [UIImage imageNamed:@"CMN_logo_header_rkbk"];
    logoImageView.contentMode = UIViewContentModeScaleAspectFit;
    logoImageView.clipsToBounds = YES;
    self.titleView = logoImageView;
    self.isUsedDefaultTitleView = nil;
}

- (void)setTitleView:(UIView *)titleView
{
    self.isUsedDefaultTitleView = NO;  //標準タイトルViewを使用しないためNO設定
    
    if (titleView) {
        // Calculate the x-coordinate to align titleView with the right edge of leftView
        CGFloat xCoordinate = 50.0f + 23.0f; // Align with the right edge of accountBtn;
        // Adjusting y-coordinate to keep titleView vertically centered with self.titleFrame
        CGFloat yCoordinate = CGRectGetMidY(self.titleFrame) + 1.5f - CGRectGetMidY(titleView.bounds);
        titleView.frame = CGRectMake(xCoordinate, yCoordinate, titleView.frame.size.width, titleView.frame.size.height);
        [self addSubview:titleView];
    }
}

@end
