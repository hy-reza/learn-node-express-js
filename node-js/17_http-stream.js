const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res)=>{
    // const text = await fs.readFile('./content/bigOne.txt', 'utf-8')
    // res.end(text)


    const readStream = fs.createReadStream('./content/bigOne.txt', 'utf-8')

    readStream.on('data', (result) => {
        res.end(result)
    })
})


server.listen(3000)