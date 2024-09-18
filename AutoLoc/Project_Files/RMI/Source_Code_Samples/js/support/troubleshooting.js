export const troubleshooting = (select) => {
    const solution = $('#js-solution');
    const solutionHead = $('#js-solution-head');
    const solutionAndroid = $('#js-solution-android');
    const solutionIos = $('#js-solution-ios');
    const solutionDesktop = $('#js-solution-desktop');
    const faq = $('#js-faq');
    const os = $('#js-question-01').find('.js-radio:checked').val();
    const noForm = $('#js-no-form');
    const gotoForm = $('#js-goto-form');

    let solutionList = { ios : [], android : [], desktop: [] };
    let faqList = { ios : [], android : [], desktop: [] };
    let isForm = { ios : false, android : false };

    console.log('troubleshooting');

    switch (select) {
        case 'q29':
            solutionList = { ios : [1,2], android : [] };
            isForm = { ios : true, android : false };
            break;
        case 'q210':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q41':
            solutionList = { ios : [1,2,4], android : [1,2,4] };
            faqList = { ios : [1], android : [1], desktop: [] };
            isForm = { ios : false, android : false };
            break;
        case 'q42':
            solutionList = { ios : [1,2], android : [1,2] };
            faqList = { ios : [1], android : [1], desktop: [] };
            isForm = { ios : false, android : false };
            break;
        case 'q43':
            solutionList = { ios : [1,2], android : [1,2] };
            faqList = { ios : [3], android : [3], desktop: [] };
            isForm = { ios : false, android : false };
            break;
        case 'q44':
            solutionList = { ios : [1,2,4], android : [1,2,4], desktop: [1,2,3,4,5] };
            faqList = { ios : [2], android : [2], desktop: [] };
            isForm = { ios : true, android : true, desktop: true };
            break;
        case 'q45':
            solutionList = { ios : [1,2,4], android : [1,2,4] };
            faqList = { ios : [2], android : [2], desktop: [] };
            isForm = { ios : true, android : true };
            break;
        case 'q46':
            solutionList = { ios : [1,2], android : [1,2], desktop: [1,2,3,4,5] };
            faqList = { ios : [2], android : [2], desktop: [] };
            isForm = { ios : true, android : true, desktop: true };
            break;
        case 'q47':
            solutionList = { ios : [1,2], android : [1,2], desktop: [] };
            faqList = { ios : [2], android : [2], desktop: ['B'] };
            isForm = { ios : false, android : false, desktop: false };
            break;
        case 'q48':
            solutionList = { ios : [1,2,4], android : [1,2,4], desktop: [1,2,3,4,5] };
            faqList = { ios : [2], android : [2], desktop: [] };
            isForm = { ios : true, android : true, desktop: true };
            break;
        case 'q49':
            solutionList = { ios : [1,2,4], android : [1,2,4] };
            faqList = { ios : [2], android : [2], desktop: [] };
            isForm = { ios : true, android : true };
            break;
        case 'q410':
            solutionList = { ios : [1,2], android : [1,2], desktop: [1,2,3,4,5] };
            faqList = { ios : [3], android : [3], desktop: [] };
            isForm = { ios : false, android : false, desktop: true };
            break;
        case 'q411':
            solutionList = { ios : [], android : [1,2], desktop: [] };
            faqList = { ios : [], android : [], desktop: ['B'] };
            isForm = { ios : false, android : false, desktop: false };
            break;
        case 'q412':
            solutionList = { ios : [], android : [1,2,4], desktop: [1,2,3,4,5] };
            isForm = { ios : true, android : true, desktop: true };
            break;
        case 'q413':
            solutionList = { ios : [], android : [1,2], desktop: [] };
            faqList = { ios : [], android : [], desktop: ['B'] };
            isForm = { ios : false, android : false, desktop: false };
            break;
        case 'q414':
            solutionList = { ios : [], android : [1,2,4], desktop: [] };
            faqList = { ios : [], android : [], desktop: [9] };
            isForm = { ios : true, android : true, desktop: false };
            break;
        case 'q415':
            solutionList = { ios : [], android : [], desktop: [1,2,3,4,5] };
            faqList = { ios : [], android : [], desktop: [] };
            isForm = { ios : false, android : false, desktop: true };
            break;
        case 'q31':
            solutionList = { ios : [], android : [], desktop: [1,2,3,4,5] };
            isForm = { ios : false, android : false, desktop: true };
            break;
        case 'q32':
            solutionList = { ios : [], android : [], desktop: [1,2,3,4,5] };
            isForm = { ios : false, android : false, desktop: true };
            break;
        case 'q33':
            solutionList = { ios : [1,2,4], android : [], desktop: [1,2,3,4,5] };
            isForm = { ios : true, android : true, desktop: true };
            break;
        case 'q34':
            solutionList = { ios : [1,2,3], android : [] };
            isForm = { ios : true, android : true };
            break;
        case 'q35':
            solutionList = { ios : [1,2,3], android : [1,2,4], desktop: [1,2,3,4,5] };
            isForm = { ios : true, android : true, desktop: true };
            break;
        case 'q36':
            solutionList = { ios : [1,2,3], android : [1,2,3] };
            isForm = { ios : true, android : true };
            break;
        case 'q37':
            solutionList = { ios : [1,2], android : [1,2,3], desktop: [1,2,3,4,5] };
            faqList = { ios : [], android : [], desktop: [10] };
            isForm = { ios : true, android : true, desktop: true };
            break;
        case 'q38':
            solutionList = { ios : [1,2], android : [1,2,3], desktop: [1,2,3,4,5] };
            isForm = { ios : true, android : true, desktop: true };
            break;
        case 'q39':
            solutionList = { ios : [1,2], android : [1,2], desktop: [1,2,3,4,5] };
            isForm = { ios : true, android : true, desktop: true };
            break;
        case 'q310':
            solutionList = { ios : [1,2], android : [1,2], desktop: [1,2,3,4,5] };
            isForm = { ios : true, android : true, desktop: true };
            break;
        case 'q311':
            solutionList = { ios : [1,2], android : [1,2], desktop: [1,2,3,4,5] };
            isForm = { ios : true, android : true, desktop: true };
            break;
        case 'q312':
            solutionList = { ios : [1,2], android : [], desktop: [1,2,3,4,5] };
            faqList = { ios : [], android : [4], desktop: [] };
            isForm = { ios : true, android : false, desktop: true };
            break;
        case 'q313':
            solutionList = { ios : [1,2], android : [1,2] };
            isForm = { ios : true, android : true };
            break;
        case 'q314':
            solutionList = { ios : [], android : [1,2], desktop: [1,2,3,4,5] };
            isForm = { ios : true, android : true, desktop: true };
            break;
        case 'q315':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : true, android : true };
            break;
        case 'q316':
            solutionList = { ios : [], android : [1,2], desktop: [1,2,3,4,5] };
            faqList = { ios : [], android : [], desktop: [10] };
            isForm = { ios : true, android : true, desktop: true };
            break;
        case 'q317':
            solutionList = { ios : [], android : [], desktop: [1,2,3,4,5] };
            faqList = { ios : [], android : [], desktop: [] };
            isForm = { ios : false, android : false, desktop: true };
            break;
        case 'q318':
            solutionList = { ios : [], android : [], desktop: [1,2,3,4,5] };
            faqList = { ios : [], android : [], desktop: [] };
            isForm = { ios : false, android : false, desktop: true };
            break;
        case 'q322':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q323':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q324':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q325':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q328':
            solutionList = { ios : [1,2], android : [] };
            isForm = { ios : true, android : false };
            break;
        case 'q329':
            solutionList = { ios : [1,2], android : [] };
            isForm = { ios : true, android : false };
            break;
        case 'q330':
            solutionList = { ios : [1,2], android : [] };
            faqList = { ios : [11], android : [], desktop: [] };
            isForm = { ios : true, android : false };
            break;
        case 'q331':
            solutionList = { ios : [1,2], android : [] };
            isForm = { ios : true, android : false };
            break;
        case 'q332':
            solutionList = { ios : [1,2], android : [] };
            isForm = { ios : true, android : false };
            break;
        case 'q335':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q336':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q337':
            solutionList = { ios : [], android : [1,2] };
            faqList = { ios : [], android : [11], desktop: [] };
            isForm = { ios : false, android : true };
            break;
        case 'q338':
            solutionList = { ios : [1,2], android : [1,2] };
            isForm = { ios : true, android : true };
            break;
        case 'q339':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q345':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q55':
            solutionList = { ios : [], android : [], desktop: [1,2,3,4,5] };
            faqList = { ios : [], android : [], desktop: ['C'] };
            isForm = { ios : false, android : false, desktop: true };
            break;
        case 'q56':
            solutionList = { ios : [], android : [], desktop: [] };
            faqList = { ios : [], android : [], desktop: ['A'] };
            isForm = { ios : false, android : false, desktop: false };
            break;
        case 'q522':
            solutionList = { ios : [1,2,3], android : [] };
            faqList = { ios : [5], android : [], desktop: [] };
            isForm = { ios : true, android : true };
            break;
        case 'q523':
            solutionList = { ios : [1,2,3], android : [] };
            faqList = { ios : [5], android : [], desktop: [] };
            isForm = { ios : true, android : true };
            break;
        case 'q524':
            solutionList = { ios : [1,2,3], android : [], desktop: [1,2,3,4,5] };
            faqList = { ios : [5], android : [], desktop: ['C'] };
            isForm = { ios : true, android : false, desktop: true };
            break;
        case 'q525':
            solutionList = { ios : [], android : [], desktop: [] };
            faqList = { ios : [], android : [], desktop: ['A'] };
            isForm = { ios : false, android : false, desktop: false };
            break;
        case 'q527':
            solutionList = { ios : [1,2,3,5], android : [1,2,3], desktop: [1,2,3,4,5] };
            faqList = { ios : [12], android : [5], desktop: ['C'] };
            isForm = { ios : false, android : true, desktop: true };
            break;
        case 'q528':
            solutionList = { ios : [1,2,3,5], android : [1,2,3], desktop: [] };
            faqList = { ios : [], android : [5], desktop: ['A'] };
            isForm = { ios : true, android : true, desktop: false };
            break;
        case 'q529':
            solutionList = { ios : [1,2,3], android : [1,2,3] };
            faqList = { ios : [], android : [5], desktop: [] };
            isForm = { ios : true, android : true };
            break;
        case 'q530':
            solutionList = { ios : [1,2,3], android : [] };
            isForm = { ios : true, android : true };
            break;
        case 'q531':
            solutionList = { ios : [1,2,3,5], android : [] };
            isForm = { ios : true, android : true };
            break;
        case 'q532':
            solutionList = { ios : [1,2,3], android : [1,2,3,5,6], desktop: [1,2,3,4,5] };
            faqList = { ios : [], android : [], desktop: ['C'] };
            isForm = { ios : true, android : true, desktop: true };
            break;
        case 'q533':
            solutionList = { ios : [], android : [1,2,3,5], desktop: [] };
            faqList = { ios : [12], android : [], desktop: ['A'] };
            isForm = { ios : false, android : true, desktop: false };
            break;
        case 'q534':
            solutionList = { ios : [], android : [1,2,3] };
            isForm = { ios : true, android : true };
            break;
        case 'q535':
            solutionList = { ios : [], android : [1,2,3], desktop: [1,2,3,4,5] };
            faqList = { ios : [12], android : [], desktop: ['C'] };
            isForm = { ios : false, android : true, desktop: true };
            break;
        case 'q536':
            solutionList = { ios : [], android : [1,2,3], desktop: [] };
            faqList = { ios : [], android : [], desktop: ['A'] };
            isForm = { ios : true, android : true, desktop: false };
            break;
        case 'q537':
            solutionList = { ios : [], android : [1,2,3,5,6] };
            isForm = { ios : false, android : true };
            break;
        case 'q538':
            solutionList = { ios : [], android : [1,2,3,5] };
            isForm = { ios : false, android : true };
            break;
        case 'q539':
            solutionList = { ios : [], android : [1,2,3] };
            isForm = { ios : false, android : true };
            break;
        case 'q540':
            solutionList = { ios : [], android : [1,2,3] };
            isForm = { ios : false, android : true };
            break;
        case 'q541':
            solutionList = { ios : [], android : [1,2,3] };
            isForm = { ios : false, android : true };
            break;
        case 'q542':
            solutionList = { ios : [], android : [1,2,3,5,6] };
            isForm = { ios : false, android : true };
            break;
        case 'q543':
            solutionList = { ios : [], android : [1,2,3,5,6] };
            isForm = { ios : false, android : true };
            break;
        case 'q544':
            solutionList = { ios : [], android : [1,2,3,5] };
            isForm = { ios : false, android : true };
            break;
        case 'q545':
            solutionList = { ios : [], android : [1,2,3] };
            isForm = { ios : false, android : true };
            break;
        case 'q546':
            solutionList = { ios : [], android : [1,2,3] };
            isForm = { ios : false, android : true };
            break;
        case 'q547':
            solutionList = { ios : [], android : [1,2,3] };
            faqList = { ios : [], android : [7], desktop: [] };
            isForm = { ios : false, android : true };
            break;
        case 'q548':
            solutionList = { ios : [], android : [1,2,3,5,6] };
            isForm = { ios : false, android : true };
            break;
        case 'q550':
            solutionList = { ios : [1,2,5,6], android : [] };
            faqList = { ios : [12], android : [], desktop: [] };
            isForm = { ios : true, android : false };
            break;
        case 'q551':
            solutionList = { ios : [1,2,5,6], android : [] };
            faqList = { ios : [12], android : [], desktop: [] };
            isForm = { ios : true, android : false };
            break;
        case 'q552':
            solutionList = { ios : [1,2,5,6], android : [] };
            isForm = { ios : true, android : false };
            break;
        case 'q571':
            solutionList = { ios : [], android : [1,2,5,6] };
            isForm = { ios : false, android : true };
            break;
        case 'q572':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q573':
            solutionList = { ios : [], android : [1,2,5] };
            isForm = { ios : false, android : true };
            break;
        case 'q574':
            solutionList = { ios : [], android : [1,2,5,6] };
            isForm = { ios : false, android : true };
            break;
        case 'q575':
            solutionList = { ios : [], android : [1,2,5,6] };
            isForm = { ios : false, android : true };
            break;
        case 'q581':
            solutionList = { ios : [1,2], android : [] };
            faqList = { ios : [14], android : [], desktop: [] };
            isForm = { ios : true, android : false };
            break;
        case 'q582':
            solutionList = { ios : [1,2], android : [] };
            isForm = { ios : true, android : false };
            break;
        case 'q583':
            solutionList = { ios : [1,2], android : [] };
            isForm = { ios : true, android : false };
            break;
        case 'q422':
            solutionList = { ios : [], android : [], desktop: [1,2,3,4,5] };
            isForm = { ios : false, android : false, desktop: true };
            break;
        case 'q423':
            solutionList = { ios : [], android : [] };
            faqList = { ios : [6], android : [], desktop: [] };
            isForm = { ios : false, android : false };
            break;
        case 'q424':
            solutionList = { ios : [1,2,3], android : [], desktop: [1,2,3,4,5] };
            isForm = { ios : true, android : true, desktop: true };
            break;
        case 'q426':
            solutionList = { ios : [], android : [], desktop: [1,2,3,4,5] };
            isForm = { ios : false, android : false, desktop: true };
            break;
        case 'q427':
            solutionList = { ios : [1,2], android : [] };
            isForm = { ios : true, android : true };
            break;
        case 'q428':
            solutionList = { ios : [1,2,3], android : [], desktop: [1,2,3,4,5] };
            faqList = { ios : [], android : [6], desktop: [] };
            isForm = { ios : true, android : false, desktop: true };
            break;
        case 'q429':
            solutionList = { ios : [1,2,3], android : [1,2,3] };
            isForm = { ios : true, android : true };
            break;
        case 'q430':
            solutionList = { ios : [1,2,3], android : [], desktop: [1,2,3,4,5] };
            isForm = { ios : true, android : true, desktop: true };
            break;
        case 'q431':
            solutionList = { ios : [1,2,3], android : [] };
            isForm = { ios : true, android : true };
            break;
        case 'q432':
            solutionList = { ios : [1,2,3], android : [], desktop: [] };
            faqList = { ios : [], android : [], desktop: [9] };
            isForm = { ios : true, android : true, desktop: false };
            break;
        case 'q433':
            solutionList = { ios : [1,2], android : [1,2,3], desktop: [1,2,3,4,5] };
            faqList = { ios : [12], android : [], desktop: [] };
            isForm = { ios : true, android : true, desktop: true };
            break;
        case 'q434':
            solutionList = { ios : [1,2], android : [1,2] };
            isForm = { ios : true, android : true };
            break;
        case 'q435':
            solutionList = { ios : [], android : [1,2,3] };
            faqList = { ios : [8,12], android : [], desktop: [] };
            isForm = { ios : true, android : true };
            break;
        case 'q436':
            solutionList = { ios : [1,2,3], android : [1,2,3] };
            faqList = { ios : [12], android : [], desktop: [] };
            isForm = { ios : true, android : true };
            break;
        case 'q437':
            solutionList = { ios : [], android : [1,2,3] };
            faqList = { ios : [12], android : [], desktop: [] };
            isForm = { ios : false, android : true };
            break;
        case 'q438':
            solutionList = { ios : [1,2,3], android : [1,2,3] };
            isForm = { ios : true, android : true };
            break;
        case 'q439':
            solutionList = { ios : [1,2,3], android : [] };
            faqList = { ios : [], android : [4], desktop: [] };
            isForm = { ios : true, android : false };
            break;
        case 'q440':
            solutionList = { ios : [1,2,3], android : [1,2,3] };
            isForm = { ios : true, android : true };
            break;
        case 'q441':
            solutionList = { ios : [], android : [1,2] };
            faqList = { ios : [12], android : [], desktop: [] };
            isForm = { ios : false, android : true };
            break;
        case 'q442':
            solutionList = { ios : [], android : [1,2] };
            faqList = { ios : [9], android : [], desktop: [] };
            isForm = { ios : false, android : true };
            break;
        case 'q443':
            solutionList = { ios : [], android : [] };
            faqList = { ios : [], android : [8], desktop: [] };
            isForm = { ios : false, android : true };
            break;
        case 'q444':
            solutionList = { ios : [], android : [] };
            faqList = { ios : [8,12], android : [] };
            isForm = { ios : true, android : false };
            break;
        case 'q445':
            solutionList = { ios : [1,2,3], android : [] };
            faqList = { ios : [12], android : [], desktop: [] };
            isForm = { ios : true, android : false };
            break;
        case 'q446':
            solutionList = { ios : [1,2,3], android : [] };
            isForm = { ios : true, android : false };
            break;
        case 'q447':
            solutionList = { ios : [1,2,5], android : [] };
            isForm = { ios : true, android : false };
            break;
        case 'q448':
            solutionList = { ios : [1,2], android : [1,2,3] };
            isForm = { ios : true, android : true };
            break;
        case 'q449':
            solutionList = { ios : [1,2], android : [1,2,3] };
            isForm = { ios : true, android : true };
            break;
        case 'q450':
            solutionList = { ios : [1,2,5], android : [1,2,3] };
            faqList = { ios : [10], android : [], desktop: [] };
            isForm = { ios : true, android : true };
            break;
        case 'q451':
            solutionList = { ios : [1,2,5], android : [1,2,3] };
            isForm = { ios : true, android : true };
            break;
        case 'q452':
            solutionList = { ios : [1,2], android : [1,2,3] };
            isForm = { ios : true, android : true };
            break;
        case 'q453':
            solutionList = { ios : [1,2], android : [1,2,3] };
            isForm = { ios : true, android : true };
            break;
        case 'q454':
            solutionList = { ios : [1,2], android : [] };
            faqList = { ios : [], android : [9], desktop: [] };
            isForm = { ios : true, android : true };
            break;
        case 'q455':
            solutionList = { ios : [1,2], android : [] };
            isForm = { ios : true, android : false };
            break;
        case 'q456':
            solutionList = { ios : [1,2], android : [1,2,3,5,6] };
            isForm = { ios : true, android : true };
            break;
        case 'q457':
            solutionList = { ios : [1,2], android : [] };
            faqList = { ios : [], android : [8], desktop: [] };
            isForm = { ios : true, android : true };
            break;
        case 'q458':
            solutionList = { ios : [1,2,3], android : [1,2,3] };
            isForm = { ios : true, android : true };
            break;
        case 'q459':
            solutionList = { ios : [1,2,3], android : [1,2,3] };
            isForm = { ios : true, android : true };
            break;
        case 'q460':
            solutionList = { ios : [1,2,3], android : [1,2,5] };
            faqList = { ios : [], android : [10], desktop: [] };
            isForm = { ios : true, android : true };
            break;
        case 'q461':
            solutionList = { ios : [1,2,3], android : [1,2,5] };
            faqList = { ios : [], android : [10], desktop: [] };
            isForm = { ios : true, android : true };
            break;
        case 'q462':
            solutionList = { ios : [1,2,3], android : [1,2] };
            faqList = { ios : [], android : [10], desktop: [] };
            isForm = { ios : true, android : true };
            break;
        case 'q463':
            solutionList = { ios : [1,2,3], android : [1,2,5] };
            faqList = { ios : [], android : [10], desktop: [] };
            isForm = { ios : true, android : true };
            break;
        case 'q464':
            solutionList = { ios : [1,2,3], android : [1,2,5] };
            isForm = { ios : true, android : true };
            break;
        case 'q465':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q466':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q467':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q468':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q469':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q470':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q471':
            solutionList = { ios : [1,2], android : [1,2] };
            faqList = { ios : [13], android : [], desktop: [] };
            isForm = { ios : true, android : true };
            break;
        case 'q472':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q473':
            solutionList = { ios : [1,2], android : [1,2] };
            isForm = { ios : true, android : true };
            break;
        case 'q474':
            solutionList = { ios : [1,2], android : [1,2] };
            isForm = { ios : true, android : true };
            break;
        case 'q475':
            solutionList = { ios : [1,2,3], android : [1,2] };
            faqList = { ios : [15], android : [], desktop: [] };
            isForm = { ios : true, android : true };
            break;
        case 'q476':
            solutionList = { ios : [1,2], android : [1,2] };
            isForm = { ios : true, android : true };
            break;
        case 'q477':
            solutionList = { ios : [1,2], android : [1,2] };
            faqList = { ios : [16], android : [], desktop: [] };
            isForm = { ios : true, android : true };
            break;
        case 'q478':
            solutionList = { ios : [1,2,3], android : [] };
            isForm = { ios : true, android : false };
            break;
        case 'q479':
            solutionList = { ios : [1,2], android : [] };
            faqList = { ios : [17], android : [], desktop: [] };
            isForm = { ios : true, android : false };
            break;
        case 'q480':
            solutionList = { ios : [1,2,3,5], android : [] };
            faqList = { ios : [18], android : [], desktop: [] };
            isForm = { ios : true, android : false };
            break;
        case 'q481':
            solutionList = { ios : [1,2], android : [] };
            isForm = { ios : true, android : false };
            break;
        case 'q484':
            solutionList = { ios : [], android : [1,2] };
            faqList = { ios : [], android : [13], desktop: [] };
            isForm = { ios : false, android : true };
            break;
        case 'q486':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q487':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q488':
            solutionList = { ios : [], android : [1,2,3] };
            faqList = { ios : [], android : [15], desktop: [] };
            isForm = { ios : false, android : true };
            break;
        case 'q489':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q490':
            solutionList = { ios : [], android : [1,2] };
            faqList = { ios : [], android : [16], desktop: [] };
            isForm = { ios : false, android : true };
            break;
        case 'q491':
            solutionList = { ios : [], android : [1,2,3] };
            isForm = { ios : false, android : true };
            break;
        case 'q492':
            solutionList = { ios : [], android : [1,2] };
            faqList = { ios : [], android : [17], desktop: [] };
            isForm = { ios : false, android : true };
            break;
        case 'q493':
            solutionList = { ios : [], android : [1,2,3,5] };
            faqList = { ios : [], android : [18], desktop: [] };
            isForm = { ios : false, android : true };
            break;
        case 'q494':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q495':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q5105':
            solutionList = { ios : [], android : [1,2] };
            faqList = { ios : [], android : [14], desktop: [] };
            isForm = { ios : false, android : true };
            break;
        case 'q5106':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
        case 'q5107':
            solutionList = { ios : [], android : [1,2] };
            isForm = { ios : false, android : true };
            break;
    }

    if ( os === 'iOS') {
        if( !solutionList.ios.length) {
            solutionHead.attr('aria-hidden', 'true');
        } else {
            solutionList.ios.forEach(id => $('#js-solution-ios-' + id ).attr('aria-hidden', 'false'));
            solutionHead.attr('aria-hidden', 'false');
        }
        solutionIos.attr('aria-hidden', 'false');
        if( !faqList.ios.length ) {
            faq.attr('aria-hidden', 'true');
        } else {
            faqList.ios.forEach(id => $('#js-faq' + id ).attr('aria-hidden', 'false'));
            faq.attr('aria-hidden', 'false');
        }
        if( isForm.ios ) {
            gotoForm.attr('aria-hidden', 'false');
            noForm.attr('aria-hidden', 'true');
        } else {
            gotoForm.attr('aria-hidden', 'true');
            noForm.attr('aria-hidden', 'false');
        }
    }
    if ( os === 'Android') {
        if( !solutionList.android.length) {
            solutionHead.attr('aria-hidden', 'true');
        } else {
            solutionList.android.forEach(id => $('#js-solution-android-' + id ).attr('aria-hidden', 'false'));
            solutionHead.attr('aria-hidden', 'false');
        }
        solutionAndroid.attr('aria-hidden', 'false');
        if( !faqList.android.length ) {
            faq.attr('aria-hidden', 'true');
        } else {
            faqList.android.forEach(id => $('#js-faq' + id ).attr('aria-hidden', 'false'));
            faq.attr('aria-hidden', 'false');
        }
        if( isForm.android ) {
            gotoForm.attr('aria-hidden', 'false');
            noForm.attr('aria-hidden', 'true');
        } else {
            gotoForm.attr('aria-hidden', 'true');
            noForm.attr('aria-hidden', 'false');
        }
    }
    if ( os === 'デスクトップ' ) {
        console.log('os=デスクトップ', {select}, solutionList.desktop)
        if(!solutionList.desktop.length) {
            solutionHead.attr('aria-hidden', 'true');
        } else {
            solutionList.desktop.forEach(id => console.log(id) || $('#js-solution-desktop-' + id ).attr('aria-hidden', 'false'));
            solutionHead.attr('aria-hidden', 'false');
        }
        solutionDesktop.attr('aria-hidden', 'false');

        if( !faqList.desktop.length ) {
            faq.attr('aria-hidden', 'true');
        } else {
            faqList.desktop.forEach(id => $('#js-faq' + id ).attr('aria-hidden', 'false'));
            faq.attr('aria-hidden', 'false');
        }
        if( isForm.desktop ) {
            gotoForm.attr('aria-hidden', 'false');
            noForm.attr('aria-hidden', 'true');
        } else {
            gotoForm.attr('aria-hidden', 'true');
            noForm.attr('aria-hidden', 'false');
        }
    }

    solution.attr('aria-hidden', 'false');

};
