import { fontProduct } from '@styles/fonts'
import styled from 'styled-components'

// https://rakuten-frontend.github.io/rex-css-framework/#icon

export const RexIcon = styled.span`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font: normal 1em var(--rex-icon);
  line-height: 1;
  text-indent: 0;
`

const ProductIcon = styled.span`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  top: 1px;
  display: inline-block;

  font: normal 1em ${fontProduct.style.fontFamily};
  font-variant: normal;
  text-transform: none;
  line-height: 1;
`

export const IconArrowDown = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.arrowDown}';
  }
`

export const IconArrowLeft = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.arrowLeft}';
  }
`

export const IconArrowRight = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.arrowRight}';
  }
`

export const IconArrowUp = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.arrowUp}';
  }
`

export const IconBarChartFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.barChartFill}';
  }
`

export const IconBarChartLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.barChartLine}';
  }
`

export const IconBarcodeFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.barcodeFill}';
  }
`

export const IconBarcodeLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.barcodeLine}';
  }
`

export const IconBrowsingHistoryFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.browsingHistoryFill}';
  }
`

export const IconBrowsingHistoryLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.browsingHistoryLine}';
  }
`

export const IconBuildingFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.buildingFill}';
  }
`

export const IconBuildingLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.buildingLine}';
  }
`

export const IconBusFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.busFill}';
  }
`

export const IconBusLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.busLine}';
  }
`

export const IconCalculatorFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.calculatorFill}';
  }
`

export const IconCalculatorLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.calculatorLine}';
  }
`

export const IconCalendarFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.calendarFill}';
  }
`

export const IconCalendarLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.calendarLine}';
  }
`

export const IconCampaignFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.campaignFill}';
  }
`

export const IconCampaignLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.campaignLine}';
  }
`

export const IconCarFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.carFill}';
  }
`

export const IconCarLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.carLine}';
  }
`

export const IconCartFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.cartFill}';
  }
`

export const IconCartLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.cartLine}';
  }
`

export const IconChangeOrder = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.changeOrder}';
  }
`

export const IconChatFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.chatFill}';
  }
`

export const IconChatLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.chatLine}';
  }
`

export const IconCheck = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.check}';
  }
`

export const IconChevronDown = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.chevronDown}';
  }
`

export const IconChevronLeft = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.chevronLeft}';
  }
`

export const IconChevronRight = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.chevronRight}';
  }
`

export const IconChevronUp = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.chevronUp}';
  }
`

export const IconCircleArrowDown = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.circleArrowDown}';
  }
`

export const IconCircleArrowLeft = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.circleArrowLeft}';
  }
`

export const IconCircleArrowRight = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.circleArrowRight}';
  }
`

export const IconCircleArrowUp = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.circleArrowUp}';
  }
`

export const IconCloudFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.cloudFill}';
  }
`

export const IconCloudLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.cloudLine}';
  }
`

export const IconCommentFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.commentFill}';
  }
`

export const IconCommentLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.commentLine}';
  }
`

export const IconCompareFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.compareFill}';
  }
`

export const IconCompareLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.compareLine}';
  }
`

export const IconCopyFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.copyFill}';
  }
`

export const IconCopyLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.copyLine}';
  }
`

export const IconCouponFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.couponFill}';
  }
`

export const IconCouponLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.couponLine}';
  }
`

export const IconCreditCardFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.creditCardFill}';
  }
`

export const IconCreditCardLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.creditCardLine}';
  }
`

export const IconCrossUse = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.crossUse}';
  }
`

export const IconCurrencyFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.currencyFill}';
  }
`

export const IconCurrencyLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.currencyLine}';
  }
`

export const IconDeleteFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.deleteFill}';
  }
`

export const IconDeleteLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.deleteLine}';
  }
`

export const IconDeliveryFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.deliveryFill}';
  }
`

export const IconDeliveryLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.deliveryLine}';
  }
`

export const IconDesktopFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.desktopFill}';
  }
`

export const IconDesktopLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.desktopLine}';
  }
`

export const IconDomesticAreaFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.domesticAreaFill}';
  }
`

export const IconDomesticAreaLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.domesticAreaLine}';
  }
`

export const IconDownloadFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.downloadFill}';
  }
`

export const IconDownloadLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.downloadLine}';
  }
`

export const IconEMoneyFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.eMoneyFill}';
  }
`

export const IconEMoneyLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.eMoneyLine}';
  }
`

// ejs版にない シンフレ使用箇所もない
// export const IconExternalLinkFill = styled(RexIcon)`
//   &::before {
//     content: '\\e93d';
//   }
// `

export const IconExternalLinkLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.externalLinkLine}';
  }
`

export const IconEyeBanFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.eyeBanFill}';
  }
`

export const IconEyeBanLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.eyeBanLine}';
  }
`

export const IconEyeFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.eyeFill}';
  }
`

export const IconEyeLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.eyeLine}';
  }
`

export const IconFavoriteHalfFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.favoriteHalfFill}';
  }
`

export const IconFavoriteFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.favoriteFill}';
  }
`

export const IconFavoriteLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.favoriteLine}';
  }
`

export const IconFerryFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.ferryFill}';
  }
`

export const IconFerryLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.ferryLine}';
  }
`
// これの正体を探らねば
export const IconFilter = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.filter}';
  }
`

export const IconFilterFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.filterFill}';
  }
`

export const IconFilterLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.filterLine}';
  }
`

export const IconFillColorFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.fillColorFill}';
  }
`

export const IconFillColorLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.fillColorLine}';
  }
`

export const IconFolderFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.folderFill}';
  }
`

export const IconFolderLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.folderLine}';
  }
`

export const IconGiftFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.giftFill}';
  }
`

export const IconGiftLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.giftLine}';
  }
`

export const IconGridModeFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.gridModeFill}';
  }
`

export const IconGridModeLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.gridModeLine}';
  }
`

export const IconHeartFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.heartFill}';
  }
`

export const IconHeartLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.heartLine}';
  }
`

export const IconHomeFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.homeFill}';
  }
`

export const IconHomeLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.homeLine}';
  }
`

export const IconIdentificationDocumentFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.identificationDocumentFill}';
  }
`

export const IconIdentificationDocumentLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.identificationDocumentLine}';
  }
`

export const IconImageFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.imageFill}';
  }
`

export const IconImageLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.imageLine}';
  }
`

export const IconKeyboardFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.keyboardFill}';
  }
`

export const IconKeyboardLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.keyboardLine}';
  }
`

export const IconLanguageFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.languageFill}';
  }
`

export const IconLanguageLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.languageLine}';
  }
`

export const IconLaptopFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.laptopFill}';
  }
`

export const IconLaptopLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.laptopLine}';
  }
`

export const IconLikeFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.likeFill}';
  }
`

export const IconLikeLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.likeLine}';
  }
`

export const IconLinkLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.linkLine}';
  }
`

export const IconListFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.listFill}';
  }
`

export const IconListLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.listLine}';
  }
`

export const IconListViewFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.listViewFill}';
  }
`

export const IconListViewLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.listViewLine}';
  }
`

export const IconLoadingLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.loadingLine}';
  }
`

export const IconLocationFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.locationFill}';
  }
`

export const IconLocationLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.locationLine}';
  }
`

export const IconLoginLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.loginLine}';
  }
`

export const IconLogoutLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.logoutLine}';
  }
`

export const IconLuckyKujiFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.luckyKujiFill}';
  }
`

export const IconLuckyKujiLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.luckyKujiLine}';
  }
`

export const IconMailFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.mailFill}';
  }
`

export const IconMailLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.mailLine}';
  }
`

export const IconMapFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.mapFill}';
  }
`

export const IconMapLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.mapLine}';
  }
`

export const IconMeatballHorizontalFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.meatballHorizontalFill}';
  }
`

export const IconMeatballVerticalFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.meatballVerticalFill}';
  }
`

export const IconMenu = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.menu}';
  }
`

export const IconMinus = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.minus}';
  }
`

export const IconMobilePhoneFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.mobilePhoneFill}';
  }
`

export const IconMobilePhoneLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.mobilePhoneLine}';
  }
`

export const IconMovieFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.movieFill}';
  }
`

export const IconMovieLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.movieLine}';
  }
`

export const IconMyPageFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.myPageFill}';
  }
`

export const IconMyPageLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.myPageLine}';
  }
`

export const IconNewUserFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.newUserFill}';
  }
`

//ejs版ではNew-window
export const IconNewTabFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.newTabFill}';
  }
`
//ejs版ではNew-window
export const IconNewTabLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.newTabLine}';
  }
`

export const IconNewsFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.newsFill}';
  }
`

export const IconNewsLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.newsLine}';
  }
`

export const IconNoticeGenericFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.noticeGenericFill}';
  }
`

export const IconNoticeGenericLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.noticeGenericLine}';
  }
`

export const IconNoticeUserFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.noticeUserFill}';
  }
`

export const IconNoticeUserLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.noticeUserLine}';
  }
`

export const IconPaintFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.paintFill}';
  }
`

export const IconPaintLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.paintLine}';
  }
`

export const IconPaperPlaneFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.paperPlaneFill}';
  }
`

export const IconPaperPlaneLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.paperPlaneLine}';
  }
`

export const IconPdfFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.pdfFill}';
  }
`

export const IconPdf = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.pdf}';
  }
`

export const IconPhoneFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.phoneFill}';
  }
`

export const IconPhoneLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.phoneLine}';
  }
`

export const IconPhotographFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.photographFill}';
  }
`

export const IconPhotographLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.photographLine}';
  }
`

export const IconPinFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.pinFill}';
  }
`

export const IconPinLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.pinLine}';
  }
`

export const IconPlaneFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.planeFill}';
  }
`

export const IconPlaneLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.planeLine}';
  }
`

export const IconPlus = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.plus}';
  }
`

export const IconPointFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.pointFill}';
  }
`

export const IconPointLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.pointLine}';
  }
`

export const IconPriceFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.priceFill}';
  }
`

export const IconPriceLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.priceLine}';
  }
`

export const IconPrintFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.printFill}';
  }
`

export const IconPrintLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.printLine}';
  }
`

export const IconPurchaseHistoryFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.purchaseHistoryFill}';
  }
`

export const IconPurchaseHistoryLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.purchaseHistoryLine}';
  }
`

export const IconQrcodeFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.qrcodeFill}';
  }
`

export const IconQrcodeLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.qrcodeLine}';
  }
`

export const IconRakutenAccountFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.rakutenAccountFill}';
  }
`

export const IconRakutenAccountLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.rakutenAccountLine}';
  }
`

export const IconRakutenCloseAccountFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.rakutenCloseAccountFill}';
  }
`

export const IconRakutenCloseAccountLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.rakutenCloseAccountLine}';
  }
`

export const IconRakutenRegistrationFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.rakutenRegistrationFill}';
  }
`

export const IconRakutenRegistrationLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.rakutenRegistrationLine}';
  }
`

export const IconRankingFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.rankingFill}';
  }
`

export const IconRankingLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.rankingLine}';
  }
`

export const IconRefresh = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.refresh}';
  }
`

export const IconReviewCommentFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.reviewCommentFill}';
  }
`

export const IconReviewCommentLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.reviewCommentLine}';
  }
`

export const IconReviewEditFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.reviewEditFill}';
  }
`

export const IconReviewEditLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.reviewEditLine}';
  }
`

export const IconRssSymbolLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.rssSymbolLine}';
  }
`

export const IconRewardsFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.rewardsFill}';
  }
`

export const IconRewardsLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.rewardsLine}';
  }
`

export const IconRssTextFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.rssTextFill}';
  }
`

export const IconRssTextLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.rssTextLine}';
  }
`

export const IconSaveFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.saveFill}';
  }
`

export const IconSaveLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.saveLine}';
  }
`

export const IconSearchHistoryFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.searchHistoryFill}';
  }
`

export const IconSearchHistoryLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.searchHistoryLine}';
  }
`

export const IconSearch = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.search}';
  }
`

export const IconSecurityFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.securityFill}';
  }
`

export const IconSecurityLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.securityLine}';
  }
`

export const IconSettingsFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.settingsFill}';
  }
`

export const IconSettingsLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.settingsLine}';
  }
`

export const IconShareFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.shareFill}';
  }
`

export const IconShareLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.shareLine}';
  }
`

export const IconShopFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.shopFill}';
  }
`

export const IconShopLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.shopLine}';
  }
`

export const IconSignBanFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.signBanFill}';
  }
`

export const IconSignBanLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.signBanLine}';
  }
`

export const IconSignHelpFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.signHelpFill}';
  }
`

export const IconSignHelpLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.signHelpLine}';
  }
`

export const IconSignInfoFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.signInfoFill}';
  }
`

export const IconSignInfoLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.signInfoLine}';
  }
`

export const IconSignWarningFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.signWarningFill}';
  }
`

export const IconSignWarningLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.signWarningLine}';
  }
`

export const IconSlidersFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.slidersFill}';
  }
`

export const IconSlidersLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.slidersLine}';
  }
`

export const IconSmartphoneFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.smartphoneFill}';
  }
`

export const IconSmartphoneLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.smartphoneLine}';
  }
`

export const IconSortLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.sortLine}';
  }
`

export const IconSurveyFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.surveyFill}';
  }
`

export const IconSurveyLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.surveyLine}';
  }
`

export const IconSustainabilityFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.sustainabilityFill}';
  }
`

export const IconSustainabilityLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.sustainabilityLine}';
  }
`

export const IconTabletFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.tabletFill}';
  }
`

export const IconTabletLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.tabletLine}';
  }
`

export const IconTagFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.tagFill}';
  }
`

export const IconTagLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.tagLine}';
  }
`

export const IconTicketFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.ticketFill}';
  }
`

export const IconTicketLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.ticketLine}';
  }
`

export const IconTimeFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.timeFill}';
  }
`

export const IconTimeLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.timeLine}';
  }
`

export const IconTrainFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.trainFill}';
  }
`

export const IconTrainLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.trainLine}';
  }
`

export const IconUploadFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.uploadFill}';
  }
`

export const IconUploadLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.uploadLine}';
  }
`

export const IconVoiceInputFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.voiceInputFill}';
  }
`

export const IconVoiceInputLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.voiceInputLine}';
  }
`

export const IconWalkingFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.walkingFill}';
  }
`

export const IconWorldFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.worldFill}';
  }
`

export const IconWorldLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.worldLine}';
  }
`

export const IconX = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.x}';
  }
`
// たぶんIconXのミス定義？使っているところもないのであとで消す
// export const X = styled(RexIcon)`
//   &::before {
//     content: '\\e924';
//   }
// `
export const IconZipFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.zipFill}';
  }
`

export const IconZipLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.zipLine}';
  }
`

export const IconZoomInFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.zoomInFill}';
  }
`

export const IconZoomLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.zoomLine}';
  }
`

export const IconZoomOutFill = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.zoomOutFill}';
  }
`

export const IconZoomOutLine = styled(RexIcon)`
  &::before {
    content: '${props => props.theme.icon.rex.zoomOutLine}';
  }
`

export const IconStack = styled(RexIcon)`
  display: inline-block;
  position: relative;
  width: 1em;
  height: 1em;
  line-height: 1em;
  &-icon-f,
  &-icon-l {
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
  }
`

// Product

export const IconProductSports = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.sports}';
  }
`

export const IconProductShopping = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.shopping}';
  }
`
export const IconProductSim = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.sim}';
  }
`

export const IconProductAccessory = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.accessory}';
  }
`

export const IconProductArrowSelect = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.arrowSelect}';
  }
`

export const IconProductAuto = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.auto}';
  }
`

export const IconProductBaseStation = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.baseStation}';
  }
`

export const IconProductBattery = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.battery}';
  }
`

export const IconProductCable = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.cable}';
  }
`

export const IconProductCase = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.case}';
  }
`

export const IconProductCharger = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.charger}';
  }
`

export const IconProductClose = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.close}';
  }
`

export const IconProductConnection = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.connection}';
  }
`

export const IconProductDripproof = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.dripproof}';
  }
`

export const IconProductEarphone = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.earphone}';
  }
`

export const IconProductFaceid = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.faceid}';
  }
`

export const IconProductFelica = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.felica}';
  }
`

export const IconProductFilm = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.film}';
  }
`

export const IconProductFinger = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.finger}';
  }
`

export const IconProductFullScreenExit = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.fullScreenExit}';
  }
`

export const IconProductFullScreen = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.fullScreen}';
  }
`

export const IconProductGraphbar = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.graphbar}';
  }
`

export const IconProductHiLes = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.hiLes}';
  }
`

export const IconProductIpv6Router = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.ipv6Router}';
  }
`

export const IconProductLost = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.lost}';
  }
`

export const IconProductMBattery = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.mBattery}';
  }
`

export const IconProductMaintenance = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.maintenance}';
  }
`

export const IconProductMessage = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.message}';
  }
`

export const IconProductNatural = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.natural}';
  }
`

export const IconProductNegative2 = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.negative2}';
  }
`

export const IconProductNegative = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.negative}';
  }
`

export const IconProductOther = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.other}';
  }
`

export const IconProductPositive2 = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.positive2}';
  }
`

export const IconProductPositive = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.positive}';
  }
`

export const IconProductPriceYen = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.priceYen}';
  }
`

export const IconProductRakutenLink = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.rakutenLink}';
  }
`

export const IconProductRouter = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.router}';
  }
`

export const IconProductSmartphone = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.smartphone}';
  }
`

export const IconProductSpeed = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.speed}';
  }
`

export const IconProductWaterproof = styled(ProductIcon)`
  &::before {
    content: '${props => props.theme.icon.product.waterproof}';
  }
`
