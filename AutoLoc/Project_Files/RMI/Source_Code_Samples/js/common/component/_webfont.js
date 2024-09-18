const WebFont = require('webfontloader');

export const webfont = () => {
    WebFont.load({
        google: {
            families: ['Noto Sans JP:400,700'/*, 'Rubik:700,900'*/]
        }
    });
};
