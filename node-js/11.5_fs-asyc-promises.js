const fs = require("fs").promises;
const { create } = require("lodash");
const util = require("util");


//USE MODULE PROMISES IN EASIEST WAY

const getFile = async() => {
    
    const fileContent = await fs.readFile('./content/first.txt', 'utf-8')
    await fs.writeFile('./content/fourth.txt', fileContent)

}
getFile()



// //SET PROMISE READ FILE USING PROMISE NEW OBJECT 
// const promisedFileContent = (filePath) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filePath, "utf8", (e, fileContent) => {
//             if (e) {
//                 reject(e);
//             }            
//             resolve(fileContent);
//         });
//     });
// };

// //SET PROMISE READ FILE USING UTIL
// const promisedFile = util.promisify(fs.readFile);
// const promisedCreateFile = util.promisify(fs.writeFile)

// //GET DATA USING ASYNC AWAIT FROM UTILS PROMISE SET UP
// const getContent = async () => {
//     const content = await promisedFile("./content/second.txt", "utf-8");
//     await promisedCreateFile('./content/third.txt', content, {
//         flag: 'a'
//     })
//     console.log(content)
// }
// getContent()

// //GET DATA USING THEN CHAIN
// promisedFileContent("./content/first.txt")
// .then((result) => console.log(result))
// .catch((err) => console.error(err));

// //GET DATA USING ASYNC AWAIT
// const getData = async () => {
//     try {
//         const start = await promisedFileContent("./content/first.txt");
//         console.info(start);
//     } catch (error) {
//         console.info(error);
//   }
// };

// getData()