const questionImage = document.getElementsByClassName("js-quiz-form-question-img");
const questionImageSp = document.getElementsByClassName("js-quiz-form-question-img-sp");
const imgPath = "/assets/img/area/campaign/treasure-hunt/quiz/";
const title = document.getElementsByClassName("js-title-text")[0];
const placeTitle = document.getElementsByClassName("js-place-text")[0];
const placeTitleSp = document.getElementsByClassName("js-place-text-sp")[0];
const inputBox = document.getElementsByClassName("js-quiz-form-input");
const result = document.getElementsByClassName("js-quiz-form-result");
const hintText = document.getElementsByClassName("js-hint-panel");
const bigHintText = document.getElementsByClassName("js-hint-big-panel");
const submit = document.getElementById("js-quiz-form-submit");
const formArea = document.getElementById("js-form-area");
const retry = document.getElementById("js-area-date-submit");
const correctContents = document.getElementById("js-correct-form");
const caption = document.getElementById("js-caption-list");
const treasurePlaceText = document.getElementById("js-treasure-area");
const treasurePlaceTextSp = document.getElementById("js-treasure-area-sp");
const correctMap = document.getElementById("js-correct-map");
const correctCode = document.getElementById("js-correct-code");
const wrongResult = document.getElementById("js-wrong-result");
const finalQuestionImage = document.getElementsByClassName("js-quiz-form-question-final");
const finalQuestionImageSp = document.getElementsByClassName("js-quiz-form-question-final-sp");
const error = document.getElementById("js-error");
const correct = "treasureHunt-Quiz_Result--correct";
const wrong = "treasureHunt-Quiz_Result--wrong";
const treasureBoxArr =['天空', '湖畔','古塔', '大海','渓谷','森林'];

// 問題用の配列
const questionsArr = {
    "question1":[`${imgPath}img-question-1`, `${imgPath}img-question-2`, `${imgPath}img-question-3`],
    "question2":[`${imgPath}img-question-4`, `${imgPath}img-question-5`, `${imgPath}img-question-6`],
    "question3":[`${imgPath}img-question-7`, `${imgPath}img-question-8`, `${imgPath}img-question-9`],
    "question4":[`${imgPath}img-question-10`, `${imgPath}img-question-11`, `${imgPath}img-question-12`],
    "question5":[`${imgPath}img-question-13`, `${imgPath}img-question-14`, `${imgPath}img-question-15`],
    "question6":[`${imgPath}img-question-16`, `${imgPath}img-question-17`, `${imgPath}img-question-18`]
}

//  最終問題の画像を格納する
const finalQuestionArr = [
    `${imgPath}img-question-final-1`, `${imgPath}img-question-final-2`, `${imgPath}img-question-final-3`,
    `${imgPath}img-question-final-4`, `${imgPath}img-question-final-5`, `${imgPath}img-question-final-6`
]

// ヒントの配列
const hintsArr = {
    "hint1":[
        [
            "上の二つのイラストとその特徴を当てはめましょう。",
            "イラストはそれぞれ「天使」と「悪魔」です。"
        ],
        [
            "それぞれのスマホに書かれている単語と出ている電波の数に注目しましょう。",
            "一番上の例の場合、「さ」いこう、え「い」ご、がめ「ん」から 「さいん」という言葉を導き出しているようです。"
        ],
        [
            "空港をつなぐ乗り物は「ひこうき」であり、飛行機は「ひこう」して空港を行き来します。\n下のイラストも同様に考え当てはまる言葉を導き出しましょう。",
            "青ハテナには「つうしん」が当てはまります。\n「赤３＝青２」は「ひこう」の3文字目と「つうしん」の2文字目が同じことを表しています。"
        ]
    ],
    "hint2":[
        [   "2つのイラストを英語･日本語で表してみましょう。\nまた2つの四角には共通するアルファベット4文字が埋まります。",
            "「英/あ」の組み合わせは、そのイラストの英語読みが当てはまります。\n例えばAPPLEの英語読みは「あっぷる」です。"
        ],
        [   "例を見ると表に書かれている数字のマスを順に読むとそれぞれ「むら」「よる」となるようです。\nまずはこの表が何なのかを考えてみましょう。",
            "これらの表はすべて五十音表のま行〜ら行の部分を表しています。"
        ],
        [
            "「高速」は「こ」「うそ」「く」、「詳細」は「しょう」「さ」「い」に分割して考えてみましょう。",
            "「親」⇔「子」、「真」⇔「嘘」、「楽」⇔「苦」のように、それぞれの単語の反対の意味を表す言葉を並べて読むと「こうそく」になります。 \nまた「右(ゆう)」⇔「左(さ)」の例をもとに考えると、「矛(む)」の反対の意味を表す言葉は「矛盾(むじゅん)」という言葉から「盾(じゅん)」となります。"
        ]
    ],
    "hint3":[
        [
            "問題の指示通り、丸に書かれたひらがなを大きい方から順に読みましょう。",
            "丸は問題文のものも含めて6つあります。"
        ],
        [
            "まずは左の例から矢印の法則を考えてみましょう。\n木のイラストを漢字に変換すると、それぞれ「木(き)」「森(もり)」と見なすことが出来ます。\n上のイラストの「カメラ」と、下の 「き」「もり」の関係を考えてみましょう。",
            "矢印には「五十音順で1つ次の文字に進める」という法則が当てはまりそうです。\n問題の右の木のイラストを漢字に変換することで「林(はやし)」と見なすことができます。\nここから矢印の法則をもとに？に当てはまる言葉を考えてみましょう。"
        ],
        [
            "赤矢印は「左の漢数字を算用数字にする」、-2と書かれた青矢印は「左の数字を2減らす」という法則であると考えることができます。",
            "「二」「八」から2を引いて算用数字に直すと「0」と「6」になります。\nこの変換を上の文字列に適応させて逆から読んでみましょう。\n数字以外にも、とある記号が答えに登場します。"
        ]
    ],
    "hint4":[
        [
            "例をもとにすると、紺色の音符には「ラ」、黄緑色の音符には「ファ」が当てはまるようです。 音符であることも踏まえて法則性を考えましょう。",
            "音にはそれぞれ音階の「ドレミファソラシ」が一つずつ当てはまります。"
        ],
        [
            "上の2つの例示から法則を考えてみましょう。\nまずは下線の言葉と右のイラストをひらがなに直して比べてみましょう。",
            "例えば一番上の例示の場合、「らいえん」「らいおん」となっており、『え』が『お』」に変わっています。 同様に考えて、「あんてな」という単語を「『な』が『い』」をもとに変換しましょう。"
        ],
        [
            "それぞれのイラストを英単語で言い表すと「piano」と「beer」になります。",
            "それぞれの色のハテナに対応するアルファベットを当てはめていきましょう。\n例えば3文字目は「r」と「n」を組み合わせて「m」となります。"
        ]
    ],
    "hint5":[
        [
            "橋の上に立っている人の視線と月を結び、通った文字を読みましょう。",
            "1文字目は「も」になります。"
        ],
        [
            "両矢印は「反対の意味を表す」と捉えることが出来ます。\n料金プランがわかり「にくい」「づらい」の反対の意味\nを表す言葉を中央の枠に埋めてみましょう。",
            "「やすい」の反対の意味を表す言葉を上の青い枠に埋めてみよう。"
        ],
        [
            "それぞれの枠の上にある丸2つはその漢字の読み仮名を表しています。\n黒枠の「？う」から考え始めると良さそうです。英語では「King」という意味をもつ漢字を埋めましょう。",
            "黒枠の読みは「おう」、赤枠の読みは「たま」、青枠の読みは「くに」となります。"
        ]
    ],
    "hint6":[
        [
            "「来年」「明日」のそれぞれ1つ前、2つ前が指す言葉を考えてみましょう。 \nまた共通の色マスには同じ文字が当てはまります。",
            "「来年」の一つ前は「今年(ことし)」、「明日」の1つ前は「今日(きょう)」が当てはまります。"
        ],
        [
            "例示にある「はち」は数字の「８」を指しています。\nこれをもとに？に入るものを考えてみましょう。",
            "？には「０(○)」が当てはまります。\n出来上がったものを数字/記号として読みましょう。"
        ],
        [
            "×と○で構成された文字列のうち、○の部分だけを読むことでそれぞれ右のイラストを表すようです。",
            "イラストはそれぞれ「プラン」「バンド」「ナン」「チバ」"
        ]
    ],
}

// 大ヒントの配列
const bigHintArr = {
    "big1":[
        "究極の手がかり！謎の答えは「【てんくうのしろ】と呼ばれる名所」の一文の中に隠れています。この手がかりを使って、さっそく再挑戦してみましょう！",
        "大ヒントをプレゼント！謎の答えは、「楽天モバイルの通信エリアなら【どこでも】データ高速無制限※で使える！」の一文の中に隠れています。この大ヒントを頼りに、ぜひもう一度チャレンジしてみてください。そして次は、いよいよ天空の宝箱最後の謎が待っています！\n\n※公平なサービス提供または環境により速度低下する場合あり",
        "謎解きのラストピース！答えは「楽天モバイルは、完全仮想化クラウドネイティブモバイルネットワークを構築し、【こうひんしつ】な通信サービスを実現へ※！」の一文の中に隠れています。この手がかりを頼りに改めてトライし、天空の宝箱の隠し場所を発見しましょう！\n\n※大規模商用ネットワークとして。2019年10月1日時点／ステラアソシエ調べ"
    ],
    "big2":[
        "究極の手がかり！謎の答えは「楽天モバイルは、【りんくあぷり】を使うと国内通話が無料かけ放題！※」という一文に隠れています。この手がかりを使って、さっそく再挑戦してみましょう！\n\n※一部対象外番号あり。アプリ未使用時30秒22円",
        "大ヒントをプレゼント！謎の答えは「【まりも】が有名な名所」という一文に隠れています。この大ヒントを頼りに、ぜひもう一度チャレンジしてみてください。そして次は、いよいよ湖畔の宝箱最後の謎が待っています！",
        "謎解きのラストピース！答えは「楽天モバイルは、業界【さいこうすいじゅん】の人口カバー率！※」という一文に隠れています。この手がかりを頼りに、改めてトライし、湖畔の宝箱の隠し場所を発見しましょう！\n\n※2023年9月時点"
    ],
    "big3":[
        "究極の手がかり！謎の答えは「【てっぽうゆり】が有名な名所」という一文に隠れています。この手がかりを使って、さっそく再挑戦してみましょう！",
        "大ヒントをプレゼント！謎の答えは「楽天モバイルのデータ通信の【はやさ】を今すぐ体験しよう！」という一文に隠れています。この大ヒントを頼りに、ぜひもう一度チャレンジしてみてください。\nそして次は、いよいよ古塔の宝箱最後の謎が待っています！",
        "謎解きのラストピース！答えは「楽天モバイルの人口カバー率は【99.9%】！※」という一文に隠れています。この手がかりを頼りに、改めてトライし、古塔の宝箱の隠し場所を発見しましょう！\n\n※2023年9月時点。人口カバー率は、国勢調査に用いられる約500m区画において、50%以上の場所で通信可能なエリアを基に算出"
    ],
    "big4":[
        "究極の手がかり！謎の答えは「太平洋の絶景を臨む【カミイソ】の鳥居」という一文に隠れています。この手がかりを使って、さっそく再挑戦してみましょう！",
        "ヒントをプレゼント！謎の答えは「楽天モバイルの【あんてい】した通信環境※」という一文に隠れています。この大ヒントを頼りに、ぜひもう一度チャレンジしてみてください。そして次は、いよいよ大海の宝箱最後の謎が待っています！\n\n※建物内等つながりにくい場合あり。環境により速度低下する場合あり。",
        "謎解きのラストピース！答えは「楽天モバイルが目指すのは、【number one】キャリア！」という一文に隠れています。この手がかりを頼りに、改めてトライし、大海の宝箱の隠し場所を発見しましょう！"
    ],
    "big5":[
        "究極の手がかり！謎の答えは「【もみじ】が綺麗な名所」という一文に隠れています。この手がかりを使って、さっそく再挑戦してみましょう！",
        "大ヒントをプレゼント！謎の答えは「楽天モバイルは海外でも2G無料※で【つかいやすい】！」という一文に隠れています。この大ヒントを頼りに、ぜひもう一度チャレンジしてみてください。そして次は、いよいよ渓谷の宝箱最後の謎が待っています！\n\n※ 通話料等別。2GB超過後は最大128kbps。対象エリア及び条件は変更する場合あり。プランのデータ利用料に加算",
        "謎解きのラストピース！答えは「【全国】の通信エリアでつながる楽天モバイル！※」という一文に隠れています。この手がかりを頼りに、改めてトライし、渓谷の宝箱の隠し場所を発見しましょう！\n\n※建物内等つながりにくい場合あり。環境により速度低下する場合あり"
    ],
    "big6":[
        "究極の手がかり！謎の答えは「【きのこ】が有名な名所」という一文に隠れています。この手がかりを使って、さっそく再挑戦してみましょう！",
        "大ヒントをプレゼント！謎の答えは「楽天モバイルなら、データ高速【むせいげん】※1で3,278円/月（税込）！※2」という一文に隠れています。この大ヒントを頼りに、ぜひもう一度チャレンジしてみてください。そして次は、いよいよ森林の宝箱最後の謎が待っています！\n\n※1公平なサービス提供または環境により速度低下する場合あり。※2通話料等別。プログラム適用条件あり。",
        "謎解きのラストピース！答えは「楽天モバイルも【プラチナバンド】を獲得！」という一文に隠れています。この手がかりを頼りに、改めてトライし、森林の宝箱の隠し場所を発見しましょう！"
    ],
};

// 答えの配列
const answersArr = {
    "answer1":["てんくうのしろ","どこでも","こうひんしつ"],
    "answer2":["りんくあぷり","まりも", "さいこうすいじゅん"],
    "answer3":["てっぽうゆり", "はやさ","99.9%"],
    "answer4":["カミイソ","あんてい","number one"],
    "answer5":["もみじ", "つかいやすい","全国"],
    "answer6":["きのこ", "むせいげん", "プラチナバンド"],
}

// 注釈の可変部分
const captions = [
    ["「山城の郷」周辺は山がちな地形のため、体力に自信のない方や、体調が悪いときは、参加をお控えいただきますようお願いします。"],
    ["「イオマプの庭」はホテルの裏手になっておりますが、一般の観光客も立ち入りが可能です。"],
    ["展望台周辺は海に面した岩場となっております。落下事故防止のため、岩に登ることはお控えください。", "地震の揺れを感じたら、誘導マップに従ってすぐに高いところに避難してください。"],
    ["宝箱設置場所に行くためには、橋を渡る必要があります。橋では立ち止まったり、身を乗り出さないようにしてください。"],
]


// 正解コードの配列
const codes = [
    "2368",
    "1468",
    "1568",
    "1245",
    "3468",
    "1356"
];

// mapのURL収納の配列(iframeのURl入れておく)
const mapArr = [
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3256.0607403253175!2d134.82125!3d35.3044722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDE4JzE2LjEiTiAxMzTCsDQ5JzE2LjUiRQ!5e0!3m2!1sja!2sjp!4v1713150648441!5m2!1sja!2sjp",
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2897.2231325610437!2d144.0916111!3d43.4350556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDI2JzA2LjIiTiAxNDTCsDA1JzI5LjgiRQ!5e0!3m2!1sja!2sjp!4v1713150596994!5m2!1sja!2sjp",
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3541.818755994129!2d128.6741667!3d27.4125833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDI0JzQ1LjMiTiAxMjjCsDQwJzI3LjAiRQ!5e0!3m2!1sja!2sjp!4v1713320990653!5m2!1sja!2sjp",
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3214.872900271082!2d140.58902780000003!3d36.3153889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDE4JzU1LjQiTiAxNDDCsDM1JzIwLjUiRQ!5e0!3m2!1sja!2sjp!4v1713321042758!5m2!1sja!2sjp",
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3262.9924841121583!2d137.31327779999998!3d35.1318611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDA3JzU0LjciTiAxMzfCsDE4JzQ3LjgiRQ!5e0!3m2!1sja!2sjp!4v1713321078276!5m2!1sja!2sjp",
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3108.7149914502193!2d140.18136110000003!3d38.816083299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDQ4JzU3LjkiTiAxNDDCsDEwJzUyLjkiRQ!5e0!3m2!1sja!2sjp!4v1713321104183!5m2!1sja!2sjp",
];

// 答えを収納しておく箱
let answer = [];
let noAnswer = inputBox.length;
let count = 0;

// 初期は謎解きフォームを表示させる
correctContents.style.display = "none";
wrongResult.style.display = "none";

// テキスト設定、答え格納をする関数
const addFunction = (objQuestion, ObjFinalQuestion, objHint, objAnswer, objBigHint, target,place,placeSp, map, code) => {
    for(let i = 0; i < questionImage.length; i++) {
        // クイズの画像を指定する（PC/SP出しわけ）
        questionImage[i].src = `${objQuestion[i]}-pc.png`;
        questionImageSp[i].srcset = `${objQuestion[i]}-sp.png`;
        answer[i] = objAnswer[i];
        bigHintText[i].innerText = objBigHint[i];

        // 大ヒント表示
        for(let j = 0; j < 2; j++) {
            hintText[i * 2].innerText = objHint[i][0];
            hintText[1 + (i * 2)].innerText = objHint[i][1];
        }
    }

    // 正解のページの可変箇所
    title.innerText = `${target}の宝箱の謎`;
    placeTitle.innerText = `${target}の宝箱のありかはここだ!`;
    placeTitleSp.innerText = `${target}の宝箱の\nありかはここだ!`;
    correctMap.src = map;
    correctCode.innerText = code;
    treasurePlaceText.innerText = place;
    treasurePlaceTextSp.innerText = placeSp;
    finalQuestionImage[0].src = `${ObjFinalQuestion}-pc.png?20240426`;
    finalQuestionImageSp[0].srcset = `${ObjFinalQuestion}-sp.png?20240426`;
}

//  注釈追加の関数
const addCaptions = (targetCaption) => {
    for (let i = 0; i < targetCaption.length; i++) {
        if(targetCaption[i] !== "") {
            const listItem = document.createElement("li");
            listItem.innerText= targetCaption[i];
            listItem.classList.add("u-Adjust_Mt-8");
            caption.appendChild(listItem);
        }
    }
}

// パラメータがないまたは間違っている
const showError = () => {
    formArea.style.display = "none";
    correctContents.style.display = "none";
    wrongResult.style.display = "none";
    error.style.display = "block";
    title.style.display = "none";
}

// urlのパラメータを取得する
let urlText =  window.location.href;
let url = new URL(urlText);
let param = url.searchParams.get("question");

// パラメータでもんだいを切り替え
if(param) {
    switch(param) {
        case "1":
            addFunction(questionsArr.question1, finalQuestionArr[0],hintsArr.hint1,answersArr.answer1, bigHintArr.big1, treasureBoxArr[0],"「山城の郷」の裏の展望スペース", "「山城の郷」の\n裏の展望スペース",mapArr[0],codes[0]);
            addCaptions(captions[0]);
            break;
        case "2":
            addFunction(questionsArr.question2, finalQuestionArr[1], hintsArr.hint2,answersArr.answer2,bigHintArr.big2,treasureBoxArr[1],"「阿寒 イオマプの庭」の阿寒湖に隣接するベンチ", "「阿寒 イオマプの庭」の\n阿寒湖に隣接するベンチ",mapArr[1],codes[1]);
            addCaptions(captions[1]);
            break;
        case "3":
            addFunction(questionsArr.question3, finalQuestionArr[2], hintsArr.hint3,answersArr.answer3,bigHintArr.big3, treasureBoxArr[2], "「笠石海浜公園」内の「ゆりの塔」を囲う柵","「笠石海浜公園」内の\n「ゆりの塔」を囲う柵",mapArr[2],codes[2]);
            break;
        case "4":
            addFunction(questionsArr.question4, finalQuestionArr[3], hintsArr.hint4,answersArr.answer4, bigHintArr.big4, treasureBoxArr[3], "「神磯の鳥居」前の展望台","「神磯の鳥居」前の展望台", mapArr[3], codes[3]);
            addCaptions(captions[2]);
            break;
        case "5":
            addFunction(questionsArr.question5, finalQuestionArr[4], hintsArr.hint5,answersArr.answer5, bigHintArr.big5, treasureBoxArr[4],"「香嵐渓」の「待月橋」のたもと","「香嵐渓」の\n「待月橋」のたもと", mapArr[4],codes[4]);
            addCaptions(captions[3]);
            break;
        case "6":
            addFunction(questionsArr.question6, finalQuestionArr[5], hintsArr.hint6,answersArr.answer6, bigHintArr.big6, treasureBoxArr[5],"「小杉の大杉」のフォトスポット横のベンチ", "「小杉の大杉」の\nフォトスポット横のベンチ", mapArr[5], codes[5]);
            break;
        default:
            showError();
    }
}else{
    showError();
}

// 送信ボタンを押した時の挙動
submit.addEventListener("click", () => {
    for (let i = 0; i < inputBox.length;i++) {
        // 空欄をなくしていく
        if(inputBox[i].value !== "") {
            noAnswer--;
            if (inputBox[i].value === answer[i]) {
                // 正解数をカウントする
                count++;
                if(result[i].classList.contains(wrong))result[i].classList.remove(wrong);
                result[i].classList.add(correct);
                result[i].innerText = "〇 正解";
            } else {
                if(result[i].classList.contains(correct))result[i].classList.remove(correct);
                result[i].classList.add(wrong);
                result[i].innerText = "× 不正解";
            }
        }
    }

    // 空欄の枠が一つでもある場合
    if(noAnswer > 0) {
        alert("回答を入力してください");
    } else {
        // 正解数と問題数が一致している時のみ正解コンテンツを表示させる
        // それ以外の時は不正解コンテンツを表示させる
        formArea.style.display = "none";
        window.scroll({
            top: 0,
        });
        if (count === inputBox.length) {
            // 正解コンテンツに変更する
            correctContents.style.display = "block";
            wrongResult.style.display = "none";
        } else {
            wrongResult.style.display = "block";
            correctContents.style.display ="none";
        }
    }
    // リセット処理
    count = 0;
    noAnswer = inputBox.length;
});

// 再挑戦するを押した時の挙動
retry.addEventListener("click", () => {
    // xボタンを押したら非表示にする
    formArea.style.display = "block";
    wrongResult.style.display = "none";
    correctContents.style.display ="none";
    // 入力値リセット
    for (let i = 0; i < inputBox.length;i++) {
        inputBox[i].value = "";
    }
})
