module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: 'build.js'
    },
    loaders: [
        {
            test: /\.vue$/, loader: 'vue'
        }
    ]
}