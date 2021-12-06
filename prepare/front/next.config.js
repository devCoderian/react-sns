// const CompressPlugin = require('compression-webpack-plugin') //내장되어있음
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
    //ANALYZE라는 환경변수가 true여야 작동
});
module.exports = withBundleAnalyzer({
    compress: true, //CompressPlugin 대체
    webpack(config, { webpack }){
        const prod = process.env.NODE_ENV === 'production';
        const plugins = [
            ...config.plugins,
            new webpack.ContextReplacementPlugin(/moment[/\\]locale$/,/^\.\/ko$/),
        ];
        // if(prod){
        //     plugins.push(new CompressPlugin()); 
        // }
        return {
            ...config,
            mode: prod ? 'production': 'development', 
            devtool: prod ? 'hidden-source-map': 'eval',
            plugins,
        }
    }
});