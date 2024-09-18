export default {
    stepA: (step) => {
        return `
        <div class="c-Theme-White" data-parts="A">
            <h3 class="c-Txt_Normal-l">${step}. 製品の初期設定をする</h3>
            <p class="u-Adjust_Mt-16">製品の電源を入れて、案内にしたがって初期設定を行ってください。</p>
            <p class="u-Adjust_Mt-8 c-Txt_Cap">※eSIMの開通手続きにはデータ通信が必要なため、eSIMをお申し込みの場合は必ずWi-Fi接続を行ってください。<br>※Androidの初期設定中にmy 楽天モバイルアプリの設定を行う場合は、アプリのバージョンを最新版にアップデートしたうえで設定を行ってください。</p>
            <div class="u-Adjust_Mt-24 u-Adjust_Align-center">
            <a href="/guide/setting/" class="c-Btn_Regular-large" target="_blank"><span>製品ごとの初期設定方法を確認する<span class="c-Icon_New-window-l c-Btn_Icon-end"></span></span></a>
            </div>
            <p class="u-Adjust_Mt-16 c-Txt_Cap">
            ※「AIかんたん本人確認（eKYC）」を利用し、iPhone 14以降の製品＋eSIMのセットを購入された場合、初期設定方法は<a class="c-Link_Txt-inline-icon" href="/guide/iphone/setting/ekyc/" target="_blank">こちら<span class="c-Icon_New-window-l"></span></a>からご確認ください。
            </p>
        </div>
        `
    },
    stepB: (step) => {
        return `
        <div class="c-Theme-White" data-parts="B">
            <h3 class="c-Txt_Normal-l">${step}. 製品の事前確認・準備をする</h3>
            <p class="u-Adjust_Mt-16">
            お持ちの製品が利用できるか、ソフトウェアのアップデートが必要かを「<a class="c-Link_Txt-inline-icon" href="/product/certified-products/" target="_blank">楽天回線対応製品<span class="c-Icon_New-window-l"></span></a>」よりご確認ください。<br>
            また、<span class="c-Txt_Emp-02">SIMロック解除が必要な製品をお持ちの場合は、必ずSIMロックを解除してから</span>開通手続きを行ってください。
            </p>
            <p class="c-Txt_Cap u-Adjust_Mt-8">
            ※SIMロック解除をせずに、開通手続きした場合、SIMロック解除まで楽天回線はご利用できません。
            </p>
            <p class="c-Txt_Cap">
            ※楽天モバイル（ドコモ回線・au回線）、ワイモバイル、UQモバイル、IIJmio、LINEモバイル、mineoなどでiPhoneをご利用されていた方は、MNP開通手続きやAPN設定の前に、「<a class="c-Link_Txt-inline-icon" href="/guide/setting/profile_delete/" target="_blank">お手持ちのiPhone・iPadで楽天回線を使用するためのAPN構成プロファイル削除方法<span class="c-Icon_New-window-l"></span></a>」をご確認のうえプロファイルの削除を行ってください。
            </p>
        </div>
        `
    },
    stepC: (step) => {
        return `
        <div class="c-Theme-White" data-parts="C">
            <h3 class="c-Txt_Normal-l">${step}. 「my 楽天モバイル」アプリをインストールする</h3>
            <p class="u-Adjust_Mt-16">App Storeから「my 楽天モバイル」アプリをインストールしてください。</p>
            <div class="u-Adjust_Align-center u-Adjust_Mt-16">
                <a target="_blank" href="https://apps.apple.com/jp/app/myrakutenmobile/id1473535769">
                    <img src="/assets/img/guide/opening/appstore.png" width="300" alt="">
                </a>
            </div>
        </div>
        `
    },
    stepD: (step) => {
        return `
        <div class="c-Theme-White" data-parts="D">
            <h3 class="c-Txt_Normal-l">${step}. 「my 楽天モバイル」アプリをインストールする</h3>
            <p class="u-Adjust_Mt-16">Google Play Storeから「my 楽天モバイル」アプリをインストールしてください。</p>
            <div class="u-Adjust_Align-center u-Adjust_Mt-16">
                <a target="_blank" href="https://play.google.com/store/apps/details?id=jp.co.rakuten.mobile.ecare">
                    <img src="/assets/img/guide/opening/playstore.png" width="300" alt="">
                </a>
            </div>
        </div>
        `
    },
    stepE: (step) => {
        return `
        <div class="c-Theme-White" data-parts="E">
            <h3 class="c-Txt_Normal-l">${step}. 製品にSIMカードをセットする</h3>
            <p class="u-Adjust_Mt-16">楽天モバイルで利用する製品の電源を切り、新しいSIMカードをセットしてください。</p>
            <div class="u-Adjust_Mt-24 u-Adjust_Align-center">
                <a href="/product/sim/#set-sim-card" class="c-Btn_Regular-large" target="_blank"><span>SIMカードのセットについて詳細を確認する<span class="c-Icon_New-window-l c-Btn_Icon-end"></span></span></a>
            </div>
        </div>
        `
    },
    stepF: (step) => {
        return `
        <div class="c-Theme-White" data-parts="F">
            <h3 class="c-Txt_Normal-l">${step}. iPhoneの場合、キャリア設定をアップデートする</h3>
            <p class="u-Adjust_Mt-16">iPhoneの場合、「キャリア設定アップデート」と表示される場合があります。その場合は必ず「アップデート」をタップしてください。</p>
            <p class="u-Adjust_Mt-8 c-Txt_Cap">
            ※［今はしない］をタップした場合、もしくは表示されなかった場合は、ホーム画面より「設定」→「一般」→「情報」の順に進むと、ポップアップが表示されます。「アップデート」をタップしてしばらくお待ちください。
            </p>
            <p class="c-Txt_Cap">
            ※「情報」に進んでも表示されない場合は、アップデートの操作は不要です。
            </p>
            <div class="u-Adjust_Align-center u-Adjust_Mt-16">
            <img src="/assets/img/guide/opening/img01.png" width="300" alt="">
            </div>
        </div>
        `
    },
    stepG: (step) => {
        return `
        <div class="c-Theme-White" data-parts="G">
            <h3 class="c-Txt_Normal-l">${step}. スタートガイド裏面のQRコード読み取り、本人確認を完了する</h3>
            <p class="u-Adjust_Mt-16">
            スタートガイド裏面のQRコードを読み取り、my 楽天モバイルアプリを起動してください。<br>
            ログイン後、「本人確認が完了しました」と表示されることをご確認ください。<br>
            スタートガイド裏面のQRコードを読み取れない場合は、以下のページをご確認ください。
            </p>
            <div class="u-Adjust_Mt-16">
                <a href="/faq/detail/10000747/" class="c-Link_Txt-inline" target="_blank">開通手続きについて、スタートガイド裏面のQRコードが読み取れないのですが、どうすればよいですか？<span class="c-Icon_Chevron-right"></span></a>
            </div>
            <p class="u-Adjust_Mt-8 c-Txt_Cap">
            ※プラン変更（移行）の場合、QRコードはないため読み取りは不要です。
            </p>
            <div class="u-Adjust_Align-center u-Adjust_Mt-16">
            <img src="/assets/img/guide/opening/img02.png" width="300" alt="">
            </div>
        </div>
        `
    },
    stepH: (step) => {
        return `
        <div class="c-Theme-White" data-parts="H">
            <h3 class="c-Txt_Normal-l">${step}. 「my 楽天モバイル」Webサイトにて転入手続きをする</h3>
            <p class="u-Adjust_Mt-16">
            <span class="c-Txt_Emp-01">現在ご利用中の製品</span>にて「my 楽天モバイル」のWebサイトへアクセスし、ホームに表示されている申込番号をタップし、［お申し込み履歴を見る］をタップしてください。<br>その後に表示される注意事項をご確認のうえ、［転入を開始する］をタップしてください。
            </p>
            <p class="u-Adjust_Mt-8 c-Txt_Cap">
            ※お申し込みステータスの表示が「準備中」の場合でもお手続きは可能です。
            </p>
            <p class="c-Txt_Cap">
            ※プラン変更（移行）の場合も同じ操作を行ってください。
            </p>
            <p class="c-Txt_Cap">
            ※［MNP番号の再取得］ボタンが表示されている場合は「<a class="c-Link_Txt-inline-icon" href="/faq/detail/00001526/" target="_blank">開通手続き時に［MNP予約番号の再取得］と表示されるのですが、どうすればよいですか？<span class="c-Icon_New-window-l"></span></a>」をご確認ください。
            </p>
            <p class="c-Txt_Cap">
            ※「my 楽天モバイル」にログインができない場合は、「<a class="c-Link_Txt-inline-icon" href="/faq/detail/00001207/" target="_blank">[my 楽天モバイル] ログインできない場合どうしたらよいですか？<span class="c-Icon_New-window-l"></span></a>」をご確認ください。
            </p>
            <div class="u-Adjust_Align-center guide-opening-Layout_Card-img-2 u-Adjust_Mt-24">
            <img src="/assets/img/guide/opening/img03.png" width="300" alt="">
            <img src="/assets/img/guide/opening/img04.png" width="300" alt="">
            </div>
            <div class="u-Adjust_Mt-24 u-Adjust_Align-center">
            <div>
                <a href="https://portal.mobile.rakuten.co.jp/dashboard#home" class="c-Btn_Secondly-large" target="_blank"><span>「my 楽天モバイル」Webサイトへ進む<span class="c-Icon_New-window-l c-Btn_Icon-end"></span></span></a>
            </div>
            <div class="u-Adjust_Mt-16">
                <a href="/guide/mnp/flow/" class="c-Btn_Regular-large" target="_blank"><span>転入手続きについて詳細を確認する<span class="c-Icon_New-window-l c-Btn_Icon-end"></span></span></a>
            </div>
            </div>
            <h4 class="c-Txt_Normal-m u-Adjust_Mt-24">他社から乗り換え（MNP）／プラン変更（移行）の受付時間について</h4>
            <p class="u-Adjust_Mt-16">
            他社から乗り換え（MNP）やプラン変更（移行）の場合、開通手続きの受付時間によって完了するタイミングが異なります。<br>
            受付時間は以下の通りです。<br>
            21:01～翌8:59にお手続きを行った場合には、翌9:00以降までお待ちください。
            </p>
            <div class="c-Table u-Adjust_Mt-24">
            <div class="c-Table_Wrap">
                <table class="c-Table_Container">
                <thead>
                    <tr>
                    <th scope="col">受付時間</th>
                    <th scope="col">完了時間</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>9:00～21:00</td>
                    <td>当日中</td>
                    </tr>
                    <tr>
                    <td>21:01～翌8:59</td>
                    <td>翌9:00以降</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        `
    },
    stepI: (step) => {
        return `
        <div class="c-Theme-White" data-parts="I">
            <h3 class="c-Txt_Normal-l">${step}. 「my 楽天モバイル」Webサイトにて転入手続きをする</h3>
            <p class="u-Adjust_Mt-16">
            「my 楽天モバイル」のWebサイトへアクセスし、ホームに表示されている申込番号をタップし、［お申し込み履歴を見る］をタップしてください。<br>その後、表示される注意事項をご確認のうえ、［MNP転入を開始する］をタップしてください。
            </p>
            <p class="u-Adjust_Mt-8 c-Txt_Cap">
            ※お申し込みステータスの表示が「準備中」の場合でもお手続きは可能です。
            </p>
            <p class="c-Txt_Cap">
            ※プラン変更（移行）の場合も同じ操作を行ってください。
            </p>
            <p class="c-Txt_Cap">
            ※［MNP番号の再取得］ボタンが表示されている場合は「<a class="c-Link_Txt-inline-icon" href="/faq/detail/00001526/" target="_blank">開通手続き時に［MNP予約番号の再取得］と表示されるのですが、どうすればよいですか？<span class="c-Icon_New-window-l"></span></a>」をご確認ください。
            </p>
            <p class="c-Txt_Cap">
            ※「my 楽天モバイル」にログインができない場合は、「<a class="c-Link_Txt-inline-icon" href="/faq/detail/00001207/" target="_blank">[my 楽天モバイル] ログインできない場合どうしたらよいですか？<span class="c-Icon_New-window-l"></span></a>」をご確認ください。
            </p>
            <div class="u-Adjust_Align-center guide-opening-Layout_Card-img-2 u-Adjust_Mt-24">
            <img src="/assets/img/guide/opening/img06.png" width="300" alt="">
            <img src="/assets/img/guide/opening/img04.png" width="300" alt="">
            </div>
            <div class="u-Adjust_Mt-24 u-Adjust_Align-center">
            <div>
                <a href="https://portal.mobile.rakuten.co.jp/dashboard#home" class="c-Btn_Secondly-large" target="_blank"><span>「my 楽天モバイル」Webサイトへ進む<span class="c-Icon_New-window-l c-Btn_Icon-end"></span></span></a>
            </div>
            <div class="u-Adjust_Mt-16">
                <a href="/guide/mnp/flow/" class="c-Btn_Regular-large" target="_blank"><span>転入手続きについて詳細を確認する<span class="c-Icon_New-window-l c-Btn_Icon-end"></span></span></a>
            </div>
            </div>
            <h4 class="c-Txt_Normal-m u-Adjust_Mt-24">他社から乗り換え（MNP）／プラン変更（移行）の受付時間について</h4>
            <p class="u-Adjust_Mt-16">
            他社から乗り換え（MNP）やプラン変更（移行）の場合、開通手続きの受付時間によって完了するタイミングが異なります。<br>
            受付時間は以下の通りです。<br>
            21:01～翌8:59にお手続きを行った場合には、翌9:00以降までお待ちください。
            </p>
            <div class="c-Table u-Adjust_Mt-24">
            <div class="c-Table_Wrap">
                <table class="c-Table_Container">
                <thead>
                    <tr>
                    <th scope="col">受付時間</th>
                    <th scope="col">完了時間</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>9:00～21:00</td>
                    <td>当日中</td>
                    </tr>
                    <tr>
                    <td>21:01～翌8:59</td>
                    <td>翌9:00以降</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        `
    },
    stepJ: (step) => {
        return `
        <div class="c-Theme-White" data-parts="J">
            <h3 class="c-Txt_Normal-l">${step}. 「my 楽天モバイル」アプリにて転入手続きをする</h3>
            <p class="u-Adjust_Mt-16">
            「my 楽天モバイル」のホームに表示されている申込番号をタップし、［お申し込み履歴を見る］をタップしてください。<br>
            その後に表示される注意事項をご確認のうえ、［MNP転入を開始する］を選択してください。
            </p>
            <p class="u-Adjust_Mt-8 c-Txt_Cap">
            ※お申し込みステータスの表示が「準備中」の場合でもお手続きは可能です。
            </p>
            <p class="c-Txt_Cap">
            ※プラン変更（移行）の場合も同じ操作を行ってください。
            </p>
            <p class="c-Txt_Cap">
            ※［MNP番号の再取得］ボタンが表示されている場合は「<a class="c-Link_Txt-inline-icon" href="/faq/detail/00001526/" target="_blank">開通手続き時に［MNP予約番号の再取得］と表示されるのですが、どうすればよいですか？<span class="c-Icon_New-window-l"></span></a>」をご確認ください。
            </p>
            <p class="c-Txt_Cap">
            ※「my 楽天モバイル」にログインができない場合は、「<a class="c-Link_Txt-inline-icon" href="/faq/detail/00001207/" target="_blank">[my 楽天モバイル] ログインできない場合どうしたらよいですか？<span class="c-Icon_New-window-l"></span></a>」をご確認ください。
            </p>
            <div class="u-Adjust_Align-center guide-opening-Layout_Card-img-2 u-Adjust_Mt-24">
            <img src="/assets/img/guide/opening/img06.png" width="300" alt="">
            <img src="/assets/img/guide/opening/img04.png" width="300" alt="">
            </div>
            <div class="u-Adjust_Mt-24 u-Adjust_Align-center">
            <div>
                <a href="/guide/my-rakuten-mobile/" class="c-Btn_Secondly-large" target="_blank"><span>「my 楽天モバイル」アプリをインストールする<span class="c-Icon_New-window-l c-Btn_Icon-end"></span></span></a>
            </div>
            <div class="u-Adjust_Mt-16">
                <a href="/guide/mnp/flow/" class="c-Btn_Regular-large" target="_blank"><span>転入手続きについて詳細を確認する<span class="c-Icon_New-window-l c-Btn_Icon-end"></span></span></a>
            </div>
            </div>
            <h4 class="c-Txt_Normal-m u-Adjust_Mt-24">他社から乗り換え（MNP）／プラン変更（移行）の受付時間について</h4>
            <p class="u-Adjust_Mt-16">
            他社から乗り換え（MNP）やプラン変更（移行）の場合、開通手続きの受付時間によって完了するタイミングが異なります。<br>
            受付時間は以下の通りです。<br>
            21:01～翌8:59にお手続きを行った場合には、翌9:00以降までお待ちください。
            </p>
            <div class="c-Table u-Adjust_Mt-24">
            <div class="c-Table_Wrap">
                <table class="c-Table_Container">
                <thead>
                    <tr>
                    <th scope="col">受付時間</th>
                    <th scope="col">完了時間</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>9:00～21:00</td>
                    <td>当日中</td>
                    </tr>
                    <tr>
                    <td>21:01～翌8:59</td>
                    <td>翌9:00以降</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
        </div>
        `
    },
    stepK: (step) => {
        return `
        <div class="c-Theme-White" data-parts="K">
            <h3 class="c-Txt_Normal-l">${step}. プッシュ通知をタップする</h3>
            <p class="u-Adjust_Mt-16">プッシュ通知が表示されるので、通知をタップしてください。</p>
            <p class="c-Txt_Cap u-Adjust_Mt-8">
            ※プッシュ通知が表示されない場合は、「<a href="/faq/detail/10000516/" class="c-Link_Txt-inline-icon" target="_blank">【iPhone 14以降でeSIMをお申し込みの方】初期設定や開通手続き中に、モバイル通信プランに関するプッシュ通知が表示されないのですが、どうすればよいですか？<span class="c-Icon_New-window-l"></span></a>」をご確認いただき、ご対応をお願いします。
            </p>
            <div class="u-Adjust_Align-center u-Adjust_Mt-16">
            <img src="/assets/img/guide/opening/img05.png" width="300" alt="">
            </div>
        </div>
        `
    },
    stepL: (step) => {
        return `
        <div class="c-Theme-White" data-parts="L">
            <h3 class="c-Txt_Normal-l">${step}. 「my 楽天モバイル」アプリの［eSIM開通手続きに進む］をタップする</h3>
            <p class="u-Adjust_Mt-16">
            「my 楽天モバイル」のホームに表示されている［お申し込み履歴を見る］をタップしてください。<br>
            その後に表示される画面にて［eSIM開通手続きに進む］をタップし、画面の案内に沿って開通手続きを行ってください。
            </p>
            <p class="u-Adjust_Mt-8 c-Txt_Cap">
            ※お申し込みステータスの表示が「準備中」の場合でもお手続きは可能です。
            </p>
            <p class="c-Txt_Cap">
            ※［eSIM開通手続きに進む］をタップした際にQRコードが表示された場合、「my 楽天モバイル」のWebサイトにアクセスしている可能性があります。「my 楽天モバイル」のアプリを起動し、操作をやり直してください。
            </p>
            <p class="c-Txt_Cap">
            ※［MNP番号の再取得］ボタンが表示されている場合は「<a class="c-Link_Txt-inline-icon" href="/faq/detail/00001207/" target="_blank">[my 楽天モバイル] ログインできない場合どうしたらよいですか？<span class="c-Icon_New-window-l"></span></a>」をご確認ください。
            </p>
            <div class="u-Adjust_Align-center guide-opening-Layout_Card-img-2 u-Adjust_Mt-24">
            <img src="/assets/img/guide/opening/img06.png" width="300" alt="">
            <img src="/assets/img/guide/opening/img07.png" width="300" alt="">
            </div>
            <div class="u-Adjust_Mt-24 u-Adjust_Align-center">
            <div class="u-Adjust_Mt-16">
                <a href="/guide/my-rakuten-mobile/" class="c-Btn_Secondly-large" target="_blank"><span>「my 楽天モバイル」アプリをインストールする<span class="c-Icon_New-window-l c-Btn_Icon-end"></span></span></a>
            </div>
            </div>
        </div>
        `
    },
    stepM: (step) => {
        return `
        <div class="c-Theme-White" data-parts="M">
            <h3 class="c-Txt_Normal-l">${step}. 「my 楽天モバイル」アプリの［eSIM開通手続きに進む］をタップし、画面の表示に沿って開通を完了させる</h3>
            <p class="u-Adjust_Mt-16">
            「my 楽天モバイル」のホームに表示されている［お申し込み履歴を見る］をタップしてください。<br>
            その後に表示される画面にて［eSIM開通手続きに進む］をタップし、画面の案内に沿って開通手続きを行ってください。
            </p>
            <p class="u-Adjust_Mt-8 c-Txt_Cap">
            ※お申し込みステータスの表示が「準備中」の場合でもお手続きは可能です。
            </p>
            <p class="c-Txt_Cap">
            ※［eSIM開通手続きに進む］をタップした際にQRコードが表示された場合、「my 楽天モバイル」のWebサイトにアクセスしている可能性があります。「my 楽天モバイル」のアプリを起動し、操作をやり直してください。
            </p>
            <p class="c-Txt_Cap">
            ※「my 楽天モバイル」にログインができない場合は、「<a class="c-Link_Txt-inline-icon" href="/faq/detail/00001207/" target="_blank">[my 楽天モバイル] ログインできない場合どうしたらよいですか？<span class="c-Icon_New-window-l"></span></a>」をご確認ください。
            </p>
            <div class="u-Adjust_Align-center guide-opening-Layout_Card-img-2 u-Adjust_Mt-24">
            <img src="/assets/img/guide/opening/img06.png" width="300" alt="">
            <img src="/assets/img/guide/opening/img07.png" width="300" alt="">
            </div>
            <div class="u-Adjust_Mt-24 u-Adjust_Align-center">
            <div class="u-Adjust_Mt-16">
                <a href="/guide/my-rakuten-mobile/" class="c-Btn_Secondly-large" target="_blank"><span>「my 楽天モバイル」アプリをインストールする<span class="c-Icon_New-window-l c-Btn_Icon-end"></span></span></a>
            </div>
            </div>
        </div>
        `
    },
    stepN: (step) => {
        return `
        <div class="c-Theme-White" data-parts="N">
            <h3 class="c-Txt_Normal-l">${step}. モバイル通信プランをインストールする</h3>
            <p class="u-Adjust_Mt-16">モバイル通信プランのインストール画面が表示されるため、［続ける］をタップしてください。</p>
            <p class="c-Txt_Cap u-Adjust_Mt-8">
            ※iOS 16以降をご利用されている場合、［eSIMのアクティベート］と表示される場合があります。
            </p>
            <div class="u-Adjust_Align-center u-Adjust_Mt-16">
            <img src="/assets/img/guide/opening/img08.png" width="300" alt="">
            </div>
        </div>
        `
    },
    stepO: (step) => {
        return `
        <div class="c-Theme-White" data-parts="O">
            <h3 class="c-Txt_Normal-l">${step}. 「キャリア設定アップデート」と表示された場合、アップデートする</h3>
            <p class="u-Adjust_Mt-16">開通手続き完了後、「キャリア設定アップデート」と表示された場合は必ず「アップデート」をタップしてください。</p>
            <p class="c-Txt_Cap u-Adjust_Mt-8">
            ※［今はしない］をタップした場合、もしくは表示されなかった場合は、ホーム画面より「設定」→「一般」→「情報」の順に進むと、ポップアップが表示されます。「アップデート」をタップしてしばらくお待ちください。
            </p>
            <p class="c-Txt_Cap">
            ※「情報」に進んでも表示されない場合は、アップデートの操作は不要です。
            </p>
            <div class="u-Adjust_Align-center u-Adjust_Mt-16">
            <img src="/assets/img/guide/opening/img01.png" width="300" alt="">
            </div>
        </div>
        `
    },
    stepP: (step) => {
        return `
        <div class="c-Theme-White" data-parts="P">
            <h3 class="c-Txt_Normal-l">${step}. Wi-FiをOFFにし、楽天回線の接続ができるかを確認する</h3>
            <p class="u-Adjust_Mt-16">
            ［Wi-Fi］アイコンをタップし、画面上部のアンテナマークの隣に「4G」または「5G」と表示されているかをご確認ください。<br>
            また、SafariやGoogle ChromeなどのWebブラウザアプリが利用できるかをご確認ください。
            </p>
            <p class="u-Adjust_Mt-8 c-Txt_Cap">
            ※画面はiPhoneのものです。
            </p>
            <p class="c-Txt_Cap">
            ※本人確認を「楽天グループに 提出済みの書類で確認」で行った方は、転送不要郵便のお受け取りが必要です。<br>
            お受け取りが確認できない場合、お申し込みがキャンセルになる、もしくは別途本人確認の手続きを実施いただく必要があります。
            </p>
            <div class="u-Adjust_Align-center guide-opening-Layout_Card-img-2 u-Adjust_Mt-24">
            <img src="/assets/img/guide/opening/img09.png" width="300" alt="">
            <img src="/assets/img/guide/opening/img10.png" width="300" alt="">
            </div>
        </div>
        `
    },
    stepQ: (step) => {
        return `
        <div class="c-Theme-White" data-parts="Q">
            <h3 class="c-Txt_Normal-l">${step}. メールの確認をする</h3>
            <p class="u-Adjust_Mt-16">
            eSIM再発行手続き完了後、楽天モバイルより「[楽天モバイル] eSIMプロファイルダウンロードのお願い」というメールが送られます。<br>
            届いているかを確認してください。
            </p>
            <p class="u-Adjust_Mt-8 c-Txt_Cap">
            ※メール受信前は、楽天回線の開通手続きを行うことができません。必ず、メール受信後に開通手続きを行ってください。
            </p>
        </div>
        `
    },
    stepR: (step) => {
        return `
        <div class="c-Theme-White" data-parts="R">
            <h3 class="c-Txt_Normal-l">${step}. my 楽天モバイルにてSIMの初期設定をする</h3>
            <p class="u-Adjust_Mt-16">
            「my 楽天モバイル」アプリのホームに表示されている［お申し込み履歴を見る］をタップしてください。<br>
            その後に表示される画面にて［SIMの初期設定をする］をタップすると「開通手続き中」と表示されるます。<br>
            手続きが完了するまで、しばらくお待ちください。
            </p>
            <p class="u-Adjust_Mt-8 c-Txt_Cap">
            ※時間がかかる場合は、電波の良い場所（窓際など）に移動してください。
            </p>
            <p class="c-Txt_Cap">
            ※「my 楽天モバイル」にログインができない場合は、「<a class="c-Link_Txt-inline-icon" href="/faq/detail/00001207/" target="_blank">[my 楽天モバイル] ログインできない場合どうしたらよいですか？<span class="c-Icon_New-window-l"></span></a>」をご確認いただき、ご対応をお願いします。
            </p>
            <div class="u-Adjust_Align-center guide-opening-Layout_Card-img-2 u-Adjust_Mt-24">
            <img src="/assets/img/guide/opening/img11.png" width="300" alt="">
            <img src="/assets/img/guide/opening/img12.png" width="300" alt="">
            </div>
            <div class="u-Adjust_Mt-24 u-Adjust_Align-center">
            <a href="https://portal.mobile.rakuten.co.jp/dashboard#home" class="c-Btn_Secondly-large" target="_blank"><span>ホームへ進む<span class="c-Icon_New-window-l c-Btn_Icon-end"></span></span></a>
            </div>
        </div>
        `
    }
}
