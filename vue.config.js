const path = require('path')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vw-line-dist/'
        : '/',
    lintOnSave: false
}
