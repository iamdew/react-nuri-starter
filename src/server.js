if (!global._babelPolyfill) {
    require('babel-polyfill');
}

require('asset-require-hook')({
    extensions: ['ico', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'ttf', 'eot', 'woff', 'woff2'],
    name: 'assets/[hash].[ext]',
    limit: 10000
});

require('css-modules-require-hook')({
    extensions: '.less',
    processorOpts: {
        parser: require('postcss-less').parse
    }
});

require('dotenv').config();

var app = require('./server/app');
var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server running at port', port);
});
