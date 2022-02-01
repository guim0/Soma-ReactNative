// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');


module.exports = getDefaultConfig(__dirname);

module.exports = {

    project:{
        ios:{},
        android:{},
    },
    assets: ['./assets/fonts']
};

