import express from 'express';
import fs from 'fs'; 
import path from 'path';

let usersRoute = express.Router();

const user:any[]=[];

usersRoute.get('/',(req,res,next)=>{
    req.body
    res.send("Hello from Users")
})

usersRoute.get('/:userId',(req,res,next)=>{
    res.send(`Hello from Books:${req.params.userId}`);
});

export{usersRoute}


// exampleRoute.post('/', (req,res,next)=>{
//     let filePath = path.join(process.cwd(),'src','htmlhidden','hello.html');
//     let readHTMLTemplate = fs.readFileSync(filePath).toString();
//     console.log(readHTMLTemplate);
//     res.send(readHTMLTemplate.replace('<NAMEHERE>',req.body.name));
// });