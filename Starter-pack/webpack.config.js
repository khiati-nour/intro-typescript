module.exports={
    entry: './src/script.ts',
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                use:'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve:{
        extensions: ['.tsx','.ts','.js']

},
    output:{
    filename:'bundle.js',
        path: `${process.cwd()}/public`,
},
devServer:{
        inline:false
}
}