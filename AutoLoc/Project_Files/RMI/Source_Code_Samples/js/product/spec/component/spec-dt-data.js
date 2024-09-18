export const specPageDtData = [
    {
        buttonText: '基本スペック',
        data: {
            manufacturer: "メーカー",
            name: "製品名",
            "Product Code": "型番",
            color: "色",
            dimensions: "サイズ",
            weight: "重量",
            Display: {
                definitionTerm: "ディスプレイ",
                subData: {
                    sizeType: "サイズ / 種類",
                    resolution: "解像度",
                }
            },
            CPU: "CPU",
            OS: "OS",
            memory: "内部メモリ(RAM / ROM)",
            cardslot: "外部メモリ",
            battery: "バッテリー容量",
            wirelessCharge: "ワイヤレス充電",
            standbyTime1: "連続待受時間(LTE)",
            talkTime1: "連続通話時間(LTE)",
            Speed: {
                definitionTerm: "通信速度",
                subData: {
                    "down(LTE)": "LTE 受信時",
                    "up(LTE)": "LTE 送信時",
                    "down(sub6)": "5G (Sub6) 受信時",
                    "up(sub6)": "5G (Sub6) 送信時",
                    "down (mmW)": "5G (ミリ波) 受信時",
                    "up (mmW)": "5G (ミリ波) 送信時",
                }
            },
            SIM: "SIM",
            "FeliCa / NFC": "おサイフケータイ / NFC",
            waterDustresistant: "防水 / 防塵",
            shockResistant: "耐衝撃",
            biometricID: "生体認証(指紋 / 顔)",
            fastCharge: "急速充電",
            accessories1: "付属品",
        }
    },
    {
        buttonText: '通信',
        data: {
            connectivity1: "4x4 MIMO",
            wifi: "Wi-Fi",
            tethering: "テザリング(Wi-Fi)",
            bluetooth: "Bluetooth&reg;",
            infrared: "赤外線通信",
        }
    },
    {
        buttonText: 'カメラ',
        data: {
            mainCamera: {
                text: 'メインカメラ(外側)',
                subData: {
                    resolution1: "解像度",
                    opticalZoom1: "光学ズーム(写真 / 動画) ※最大",
                    digitalZoom1: "デジタルズーム(写真 / 動画) ※最大",
                    stabilizer1: "手振れ補正(写真 / 動画)",
                    autoFocus1: "オートフォーカス",
                    focalratio1: "F値",
                    ISO1: "ISO(最大)",
                    HDR1: "HDR",
                    LEDflash1: "LEDフラッシュ",
                    AIcamera1: "AIカメラ",
                }
            },
            selfieCamera: {
                text: 'フロントカメラ(内側)',
                subData: {
                    resolution2: "解像度",
                    opticalZoom2: "光学ズーム(写真 / 動画) ※最大",
                    digitalZoom2: "デジタルズーム(写真 / 動画) ※最大",
                    stabilizer2: "手振れ補正(写真 / 動画)",
                    autoFocus2: "オートフォーカス",
                    focalratio2: "F値",
                    ISO2: "ISO(最大)",
                    HDR2: "HDR",
                    LEDflash2: "LEDフラッシュ",
                    AIcamera2: "AIカメラ",
                }
            },
        }
    },
    {
        buttonText: 'その他',
        data: {
            HiRes: "ハイレゾ・オーディオ",
            ETWS: "緊急速報機能",
            microphonejack: "イヤホンマイクジャック",
            USB: "USB",
            GPS: "GPS",
            codec1: "動画コーデック",
        }
    },
    {
        buttonText: '対応周波数',
        data: {
            "5G(sub6)1": "5G (Sub6)",
            "5G (mmW)1": "5G (ミリ波)",
            LTE1: "FDD-LTE",
            tdLTE1: "TD-LTE",
            wcdma1: "WCDMA",
            GSM1: "GSM",
        }
    }
];

export const specInPageData = {
    name: "製品名",
    "Product Code": "型番",
    color: "色",
    dimensions: "サイズ",
    weight: "重量",
    Display: {
        definitionTerm: "ディスプレイ",
        subData: {
            sizeType: "サイズ / 種類",
            resolution: "解像度",
        }
    },
    CPU: "CPU",
    OS: "OS",
    memory: "内部メモリ(RAM / ROM)",
    battery: "バッテリー容量",
    wirelessCharge: "ワイヤレス充電",
    standbyTime1: "連続待受時間(LTE)",
    talkTime1: "連続通話時間(LTE)",
    SIM: "SIM",
    "FeliCa / NFC": "おサイフケータイ / NFC",
    waterDustresistant: "防水 / 防塵",
    biometricID: "生体認証(指紋 / 顔)",
    wifi: "Wi-Fi",
    tethering: "テザリング(Wi-Fi)",
    resolution1: "メインカメラ (外側)",
    resolution2: "フロントカメラ (内側)",
    accessories1: "付属品",
};
