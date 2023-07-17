//async set up promises
const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
//const { result } = require('lodash')
//const { resolve } = require('path')

// 

// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err)=>console.log(err))

const start = async()=>{
    try {
        const first = await readFile('./content/first.txt')
        const second = await readFile('./content/first.txt')
        writeFile('./content/writen-file', `THIS IS AWESOME PROMISE: ${first}, ${second}`)
    } catch (error) {
        console.log(err);
    }
}
start()

//const getText = (path)=>{
//     return new Promise((resolve, reject)=>{
//     readFile(path, 'utf8', (err, data)=>{
//     if(err){
//         reject(err)
//     }else{
//         resolve(data)
//     }
// })
//     })
// }