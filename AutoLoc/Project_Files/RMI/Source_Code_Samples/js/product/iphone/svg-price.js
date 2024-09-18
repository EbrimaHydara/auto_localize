export const svgDisplayNumber = (instPrice) => {
    const svgPath = {
        0 : {
            p: 'M11.5005 30.546C9.17649 30.546 7.17449 29.958 5.49449 28.782C3.81449 27.578 2.51249 25.856 1.58849 23.616C0.692492 21.348 0.244492 18.646 0.244492 15.51C0.244492 12.346 0.692492 9.644 1.58849 7.404C2.51249 5.164 3.81449 3.442 5.49449 2.238C7.17449 1.034 9.17649 0.431998 11.5005 0.431998C13.7965 0.431998 15.7845 1.034 17.4645 2.238C19.1725 3.442 20.4745 5.164 21.3705 7.404C22.2945 9.644 22.7565 12.346 22.7565 15.51C22.7565 18.674 22.2945 21.376 21.3705 23.616C20.4745 25.856 19.1725 27.578 17.4645 28.782C15.7845 29.958 13.7965 30.546 11.5005 30.546ZM11.5005 25.59C13.3205 25.59 14.7345 24.708 15.7425 22.944C16.7505 21.18 17.2545 18.702 17.2545 15.51C17.2545 12.318 16.7365 9.84 15.7005 8.076C14.6925 6.312 13.2925 5.43 11.5005 5.43C9.65249 5.43 8.22449 6.312 7.21649 8.076C6.23649 9.84 5.74649 12.318 5.74649 15.51C5.74649 18.702 6.23649 21.18 7.21649 22.944C8.22449 24.708 9.65249 25.59 11.5005 25.59Z',
            v: '0 0 23 31',
            w: '23',
            h: '33',
        },
        1 : {
            p: 'M8.00338 29V6.194L2.62738 10.436L0.821383 5.984L8.75938 0.0199976H13.2534V29H8.00338Z',
            v: '0 0 14 29',
            w: '14',
            h: '33',
        },
        2 : {
            p: 'M1.44861 30V25.884C1.44861 24.26 1.72861 22.804 2.28861 21.516C2.87661 20.228 3.80061 18.996 5.06061 17.82C6.34861 16.644 8.07061 15.44 10.2266 14.208C11.9066 13.2 13.0826 12.318 13.7546 11.562C14.4266 10.778 14.7626 9.882 14.7626 8.874C14.7626 7.782 14.3566 6.914 13.5446 6.27C12.7606 5.598 11.6686 5.262 10.2686 5.262C8.89661 5.262 7.58061 5.682 6.32061 6.522C5.06061 7.334 4.02461 8.482 3.21261 9.966L0.902609 5.64C1.96661 4.044 3.35261 2.784 5.06061 1.86C6.79661 0.907998 8.61661 0.431998 10.5206 0.431998C13.4606 0.431998 15.7986 1.202 17.5346 2.742C19.2706 4.254 20.1386 6.298 20.1386 8.874C20.1386 10.694 19.5646 12.332 18.4166 13.788C17.2686 15.216 15.3226 16.728 12.5786 18.324C11.0666 19.22 9.89061 20.018 9.05061 20.718C8.21061 21.418 7.60861 22.118 7.24461 22.818C6.90861 23.49 6.74061 24.246 6.74061 25.086V25.17H20.6006V30H1.44861Z',
            v: '0 0 21 30',
            w: '21',
            h: '33',
        },
        3 : {
            p: 'M11.0997 30.546C6.81569 30.546 3.38569 28.964 0.809688 25.8L3.11969 21.516C5.19169 24.372 7.72569 25.8 10.7217 25.8C12.2337 25.8 13.4517 25.408 14.3757 24.624C15.3277 23.84 15.8037 22.818 15.8037 21.558C15.8037 20.27 15.2997 19.248 14.2917 18.492C13.2837 17.708 11.9117 17.316 10.1757 17.316H6.81569V12.654H10.4697C11.8977 12.654 13.0597 12.304 13.9557 11.604C14.8517 10.904 15.2997 9.966 15.2997 8.79C15.2997 7.698 14.8797 6.83 14.0397 6.186C13.2277 5.514 12.1217 5.178 10.7217 5.178C8.11769 5.178 5.87769 6.41 4.00169 8.874L1.90169 4.59C2.99369 3.246 4.30969 2.224 5.84969 1.524C7.41769 0.795998 9.15369 0.431998 11.0577 0.431998C12.9337 0.431998 14.5857 0.753998 16.0137 1.398C17.4417 2.042 18.5477 2.938 19.3317 4.086C20.1437 5.206 20.5497 6.508 20.5497 7.992C20.5497 9.56 20.1017 10.932 19.2057 12.108C18.3097 13.284 17.0777 14.18 15.5097 14.796C19.3177 15.916 21.2217 18.296 21.2217 21.936C21.2217 23.672 20.7877 25.184 19.9197 26.472C19.0797 27.76 17.9037 28.768 16.3917 29.496C14.8797 30.196 13.1157 30.546 11.0997 30.546Z',
            v: '0 0 22 31',
            w: '22',
            h: '33',
        },
        4 : {
            p: 'M13.1999 0.0199976H18.7859V18.458H22.7759V22.742H18.7859V29H13.7039V22.742H0.473852V19.088L13.1999 0.0199976ZM5.72385 18.458H13.7039V6.488L5.72385 18.458Z',
            v: '0 0 23 29',
            w: '23',
            h: '33',
        },
        5 : {
            p: 'M10.466 29.546C6.48998 29.546 3.25598 28.23 0.763977 25.598L2.94798 21.104C4.90798 23.54 7.25998 24.758 10.004 24.758C11.712 24.758 13.084 24.282 14.12 23.33C15.156 22.378 15.674 21.104 15.674 19.508C15.674 18.024 15.198 16.834 14.246 15.938C13.294 15.014 12.034 14.552 10.466 14.552C8.19798 14.552 6.44798 15.518 5.21598 17.45L1.77198 15.686L2.73798 0.0199976H19.664V4.808H7.02198L6.51798 12.452C7.91798 10.912 9.83598 10.142 12.272 10.142C14.008 10.142 15.534 10.548 16.85 11.36C18.166 12.172 19.202 13.292 19.958 14.72C20.714 16.12 21.092 17.744 21.092 19.592C21.092 21.58 20.644 23.33 19.748 24.842C18.852 26.326 17.606 27.488 16.01 28.328C14.414 29.14 12.566 29.546 10.466 29.546Z',
            v: '0 0 22 30',
            w: '22',
            h: '33',
        },
        6 : {
            p: 'M11.0073 30.546C7.56328 30.546 4.88928 29.3 2.98528 26.808C1.08128 24.288 0.129281 20.76 0.129281 16.224C0.129281 13.032 0.619281 10.26 1.59928 7.908C2.57928 5.528 3.96528 3.694 5.75728 2.406C7.54928 1.09 9.66328 0.431998 12.0993 0.431998C15.4033 0.431998 18.2593 1.608 20.6673 3.96L18.5673 8.16C17.5593 7.068 16.5793 6.284 15.6273 5.808C14.6753 5.304 13.6253 5.052 12.4773 5.052C10.2373 5.052 8.50128 5.934 7.26928 7.698C6.03728 9.434 5.36528 11.954 5.25328 15.258C5.84128 13.914 6.73728 12.878 7.94128 12.15C9.14528 11.422 10.5873 11.058 12.2673 11.058C14.0313 11.058 15.5853 11.464 16.9293 12.276C18.2733 13.088 19.3233 14.208 20.0793 15.636C20.8633 17.064 21.2553 18.702 21.2553 20.55C21.2553 22.538 20.8213 24.288 19.9533 25.8C19.0853 27.284 17.8813 28.446 16.3413 29.286C14.8013 30.126 13.0233 30.546 11.0073 30.546ZM11.0073 26.178C12.4913 26.178 13.7093 25.674 14.6613 24.666C15.6133 23.658 16.0893 22.342 16.0893 20.718C16.0893 19.122 15.6133 17.834 14.6613 16.854C13.7373 15.846 12.5333 15.342 11.0493 15.342C9.53728 15.342 8.31928 15.846 7.39528 16.854C6.47128 17.862 6.00928 19.178 6.00928 20.802C6.00928 22.398 6.47128 23.7 7.39528 24.708C8.34728 25.688 9.55128 26.178 11.0073 26.178Z',
            v: '0 0 22 31',
            w: '22',
            h: '33',
        },
        7 : {
            p: 'M1.88038 29L13.8504 4.976H0.200383V0.0199976H19.9824V3.758L7.46638 29H1.88038Z',
            v: '0 0 20 29',
            w: '20',
            h: '33',
        },
        8 : {
            p: 'M11.0112 30.588C8.85516 30.588 6.97916 30.238 5.38316 29.538C3.78716 28.838 2.54116 27.844 1.64516 26.556C0.749156 25.268 0.301156 23.77 0.301156 22.062C0.301156 20.382 0.777156 18.94 1.72916 17.736C2.70916 16.504 4.08116 15.58 5.84516 14.964C4.30516 14.376 3.11516 13.508 2.27516 12.36C1.43516 11.184 1.01516 9.826 1.01516 8.286C1.01516 6.774 1.43516 5.43 2.27516 4.254C3.11516 3.05 4.27716 2.112 5.76116 1.44C7.27316 0.767998 9.02316 0.431998 11.0112 0.431998C12.9712 0.431998 14.6932 0.767998 16.1772 1.44C17.6892 2.112 18.8652 3.05 19.7052 4.254C20.5452 5.43 20.9652 6.774 20.9652 8.286C20.9652 9.854 20.5452 11.212 19.7052 12.36C18.8652 13.508 17.6752 14.376 16.1352 14.964C17.8992 15.608 19.2572 16.532 20.2092 17.736C21.1892 18.94 21.6792 20.382 21.6792 22.062C21.6792 23.77 21.2312 25.268 20.3352 26.556C19.4392 27.844 18.1792 28.838 16.5552 29.538C14.9592 30.238 13.1112 30.588 11.0112 30.588ZM11.0112 13.284C12.4392 13.284 13.5872 12.878 14.4552 12.066C15.3512 11.254 15.7992 10.19 15.7992 8.874C15.7992 7.586 15.3512 6.55 14.4552 5.766C13.5872 4.982 12.4392 4.59 11.0112 4.59C9.55516 4.59 8.37916 4.982 7.48316 5.766C6.61516 6.55 6.18116 7.586 6.18116 8.874C6.18116 10.19 6.61516 11.254 7.48316 12.066C8.37916 12.878 9.55516 13.284 11.0112 13.284ZM11.0112 26.43C12.5232 26.43 13.7552 25.996 14.7072 25.128C15.6872 24.26 16.1772 23.14 16.1772 21.768C16.1772 20.396 15.6872 19.276 14.7072 18.408C13.7552 17.54 12.5232 17.106 11.0112 17.106C9.44316 17.106 8.18316 17.54 7.23116 18.408C6.27916 19.276 5.80316 20.396 5.80316 21.768C5.80316 23.168 6.27916 24.302 7.23116 25.17C8.18316 26.01 9.44316 26.43 11.0112 26.43Z',
            v: '0 0 22 31',
            w: '22',
            h: '33',
        },
        9 : {
            p: 'M9.92779 30.546C8.10779 30.546 6.41379 30.238 4.84579 29.622C3.30579 29.006 2.00379 28.138 0.939789 27.018L2.95579 22.65C4.66379 24.862 6.90379 25.968 9.67579 25.968C14.1838 25.968 16.5358 22.622 16.7318 15.93C16.0878 17.218 15.1638 18.212 13.9598 18.912C12.7558 19.584 11.3138 19.92 9.63379 19.92C7.89779 19.92 6.35779 19.528 5.01379 18.744C3.69779 17.932 2.66179 16.812 1.90579 15.384C1.14979 13.956 0.771789 12.318 0.771789 10.47C0.771789 8.454 1.19179 6.704 2.03179 5.22C2.89979 3.708 4.08979 2.532 5.60179 1.692C7.14179 0.851998 8.93379 0.431998 10.9778 0.431998C14.4778 0.431998 17.1658 1.706 19.0418 4.254C20.9458 6.802 21.8978 10.456 21.8978 15.216C21.8978 18.408 21.4078 21.152 20.4278 23.448C19.4758 25.744 18.1038 27.508 16.3118 28.74C14.5478 29.944 12.4198 30.546 9.92779 30.546ZM10.9358 15.636C12.4478 15.636 13.6658 15.132 14.5898 14.124C15.5418 13.116 16.0178 11.8 16.0178 10.176C16.0178 8.608 15.5418 7.32 14.5898 6.312C13.6378 5.304 12.4198 4.8 10.9358 4.8C9.45179 4.8 8.24779 5.304 7.32379 6.312C6.39979 7.32 5.93779 8.636 5.93779 10.26C5.93779 11.856 6.39979 13.158 7.32379 14.166C8.24779 15.146 9.45179 15.636 10.9358 15.636Z',
            v: '0 0 22 31',
            w: '22',
            h: '33',
        },
        ',' : {
            p: 'M2.82683 14.014L0.642828 11.536C3.52683 10.444 5.17883 8.806 5.59883 6.622C5.23483 6.818 4.80083 6.916 4.29683 6.916C3.40083 6.916 2.64483 6.608 2.02883 5.992C1.41283 5.348 1.10483 4.55 1.10483 3.598C1.10483 2.646 1.42683 1.848 2.07083 1.204C2.74283 0.559999 3.61083 0.237999 4.67483 0.237999C5.90683 0.237999 6.88683 0.714 7.61483 1.666C8.37083 2.59 8.74883 3.85 8.74883 5.446C8.74883 7.322 8.24483 9.002 7.23683 10.486C6.25683 11.97 4.78683 13.146 2.82683 14.014Z',
            v: '0 0 9 1',
            w: '9',
            h: '43',
        }
    };
    const priceNumber = ( instPrice * 24 ).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const fragment = document.createDocumentFragment();

    let priceSplit = [...priceNumber];

    priceSplit.forEach(element => {
        const n = element;
        const ns = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(ns, 'svg');
        const path = document.createElementNS(ns, 'path');
        svg.setAttribute('viewBox', svgPath[n].v);
        svg.setAttribute('fill', 'none');
        svg.setAttribute('width', svgPath[n].w);
        svg.setAttribute('height', svgPath[n].h);
        path.setAttribute('fill', '#FF008C');
        path.setAttribute('d', svgPath[n].p);
        svg.appendChild(path);
        fragment.appendChild(svg);
    });
    return fragment;
};
