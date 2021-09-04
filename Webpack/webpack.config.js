
const path = require("path")

module.exports = {
    entry:'./scr/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'dist/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            // 1.小于13000 时用base64 2.大于yong file loader
                            limit:88848
                        }
                    }
                ]
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                use:[
                    {
                        loader:'file-loader',
                        // options:{
                        //     // 1.小于13000 时用base64 2.大于yong file loader
                        //     limit:88848
                        // }
                    }
                ]
            },
            
        ]
    }
}