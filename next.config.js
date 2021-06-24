// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            '/suapc': { page: '/suapc' },
            '/halloffame': { page: '/halloffame' },
            '/contact': { page: '/contact' },
            '/sponser': { page: '/sponser' },
            '/camp-contest': { page: '/camp-contest' }
        };
    },
    assetPrefix: !debug ? '' : '',
    webpack: (config, { dev }) => {
        // Perform customizations to webpack config
        // console.log('webpack');
        // console.log(config.module.rules, dev);
        config.module.rules = config.module.rules.map((rule) => {
            if (rule.loader === 'babel-loader') {
                rule.options.cacheDirectory = false;
            }
            return rule;
        });
        // Important: return the modified config
        return config;
    },
}