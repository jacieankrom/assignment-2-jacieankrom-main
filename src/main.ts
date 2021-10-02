import express from 'express';
import { usersRoute } from './routes/users'
import fs from 'fs'; 
import path from 'path';



let app = express();
app.use(express.json()); //new body parser

app.use('/Users', usersRoute);


app.get('/',(req,res,next)=>{
    let filePath = path.join(process.cwd(),'src','html','index.html');
    let readHTMLTemplate = fs.readFileSync(filePath).toString();
    console.log(readHTMLTemplate);
    res.send(readHTMLTemplate.replace('<NAMEHERE>',req.body.name));
});

app.listen(3000);


    //console.log(readHTMLTemplate);
    //res.send(readHTMLTemplate.replace('<NAMEHERE>',req.body.name));

