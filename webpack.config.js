module.exports = {
    entry: './app.ts',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
      // { test: /\.ts$/, loader: 'ts-loader' }
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: /(node_modules(?!\/rxjs))/
            }
        ]
    },
    resolve: {
        alias: {
            'rxjs': 'rxjs-es'
        }
    },
}