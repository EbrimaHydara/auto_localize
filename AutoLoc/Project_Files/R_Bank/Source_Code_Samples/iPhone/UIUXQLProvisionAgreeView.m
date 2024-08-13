//
//  UIUXQLProvisionAgreeView.m
//  RakutenBank
//
//  Created by nw_y.ito on 2014/04/16.
//
//

#import "UIUXQLProvisionAgreeViewController.h"
#import "UIUXQLProvisionAgreeView.h"
#import "UIUXLIBaseScrollView+MakeViewUtils.h"
#import "RetinaResize.h"

@interface UIUXQLProvisionAgreeView ()

@property (nonatomic) UIButton * startSendPictureButton;  ///< 設定するボタン

@end

@implementation UIUXQLProvisionAgreeViewDTO

@end

@implementation UIUXQLProvisionAgreeView

#pragma mark - イニシャライザ

// 指定イニシャライザ
- (id)initWithFrame:(CGRect)frame viewDTO:(NSObject *)viewDTO
{
    _viewDto = (UIUXQLProvisionAgreeViewDTO *)viewDTO;
    
    self = [super initWithFrame:frame viewDTO:viewDTO];
    if (!self) {
        return nil;
    }
    
    return self;
}

#pragma mark - ビューの初期化メソッド群

// ビューの初期化時にサブビューを構築する
- (void)loadInitialViews
{
    //設定するボタン
    self.startSendPictureButton = [self imageButton:[UIImage imageNamed:@"LI_btn_orange420_03"]
                                     hilightedImage:[UIImage imageNamed:@"LI_btn_orange420_03_hover"]
                                      disablesIamge:[UIImage imageNamed:@"LI_btn_orange420_03_inactive"]
                                         imageScale:0.5f];
    self.startSendPictureButton.center = CGPointMake(self.frame.size.width / 2,
                                                     self.frame.size.height - self.startSendPictureButton.frame.size.height / 2 - 25.0f);
    
    UILabel * text = [[UILabel alloc] initWithFrame:CGRectMake(0.0f, 0.0f, self.frame.size.width - ( 15.0f * 2), 0.0f)];
    text.text = self.viewDto.clauseText;
    text.font = [UIFont systemFontOfSize:15.0f];
    text.textColor = [ColorUtil convertToUIColor:@"#333333"];
    text.textAlignment = NSTextAlignmentLeft;
    text.numberOfLines = 0;
    text.backgroundColor = UIColor.clearColor;
    [text sizeToFit];
    

    [self addBlankWithHeight:k_VmarginContentsTop];
    
    [self addViewAtHCenter:text];
    
    [self addBlankWithHeight:20.0f];
}

@end
