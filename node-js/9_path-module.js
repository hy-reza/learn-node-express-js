//PATH MODULE

const path = require('path')

console.info(path.win32)

console.table({
    dirname : path.dirname(__dirname),
    basename : path.basename(__dirname),
    extname : path.extname(__dirname``)
})