const {readFile} = require('fs')

console.log('start of first task');

readFile('./content/first.txt', 'utf8', (err,res)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(res);
    console.log('completed first task');
})

console.log('ready for the next task, waiting for the next');