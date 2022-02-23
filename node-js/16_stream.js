const fs = require('fs');

const stream = fs.createReadStream('./content/bigOne.txt', 'utf-8')

stream.on('data', (err, data)=> {
    if(err)console.error(err)

    console.info(data)
})


// const dataWithoutStream = fs.readFileSync('./content/bigOne.txt', 'utf-8')
// console.info(dataWithoutStream)