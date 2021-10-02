// import http from 'http';
// import express from 'express';
// import fs from 'fs'; 
// import path from 'path';
// import { usersRoute }from './routes/users'; 

// let app = express(); //Declare our express application instance

// app.use(express.json());  //new body parser
// app.use('/Users', usersRoute);
// app.use(express.static('src'))

// //create new users
// const user:any[]=[];
// /*
// usersRoute.post('/',(req,res,next)=>{
//     console.log(req.body);
//     //create user object
   
//     //else error and return correct message
//     {
//         "message": "string",
//         "status": "string"
//     }
//     user.push({userId:req.body.userId, firstName:req.body.firstName, lastName:req.body.lastName, emailAddress:req.body.emailAddress, password:req.body.password});
//     //if successful creation, return all info except password
//     res.send(user);
//     console.log(user);
// })
// */
//get full list of users and return the JSON array
/* usersRoute.get('/',(req,res,next)=>{
    console.log(req.params.userId);
    let foundUser = user.find(d=>d.userId==req.params.userId)
    if (foundUser===undefined)
    {
    res.send('user[]');
    }
}); */


//view specific user
// usersRoute.get('/:userId',(req,res,next)=>{
//     res.send('get UsersId');
// })

//edit user
/* usersRoute.patch('/:userId',(req,res,next)=>{
    console.log(req.params.userId);
    let foundUser = user.find(d=>d.userId==req.params.userId)
    if (foundUser===undefined)
    {
        res.status(404).send({status:404, message:'User not found'}); 
    }else
    res.send('update User');
})
 */
// usersRoute.delete('/',(req,res,next)=>{
//     res.send('Delete UsersId');
// })

// app.get('/', (req,res,next)=>{
    //res.sendFile(path.join(process.cwd(),'src','html','/index.html'));
     //open html file
     /* let myFile=path.join(process.cwd(),'src','html',req.url?.replace('/','')as string);

     if(fs.existsSync('${myFile}'))
     {
         let myFileContent = fs.readFileSync(myFile);
 
         res.write(myFileContent);
         res.statusCode=200;
         req.body
 
     }else{
         res.write('File not Found');
         res.statusCode = 404;
     } */
     
//     res.send('Help Page');
// });

// let server = http.createServer(app);
// server.listen(3000); //Fully working HTTP server

// app.get('/Users',(req,res,next)=>{
//     req.body;
//     res.send('Hello Users');
// });

// app.post('/Users',(req,res,next)=>{
//     req.body;
//     res.send('Hello Users');
// });

// app.get('/Users/:userId',(req,res,next)=>{

//     req.params.userId;
//     res.send('Hello Users');
// });

// app.post('/Users/:userId',(req,res,next)=>{

//     req.params.userId;
//     res.send('Hello Users');
// });


// //users.ts

// import express from 'express';
// import fs from 'fs'; 
// import path from 'path';

// let usersRoute = express.Router();

// //create new users
// const user:any[]=[];

// usersRoute.post('/',(req,res,next)=>{
//     console.log(req.body);
//     //create user object
   
//     //else error and return correct message
 
//     user.push({userId:req.body.userId, firstName:req.body.firstName, lastName:req.body.lastName, emailAddress:req.body.emailAddress, password:req.body.password});
//     //if successful creation, return all info except password
//     res.send(user);
//     console.log(user);
// })

//get full list of users and return the JSON array
// usersRoute.get('/',(req,res,next)=>{
//     console.log(req.params.userId);
//     let foundUser = user.find(d=>d.userId==req.params.userId)
//     if (foundUser===undefined)
//     {
//     res.send('user[]');
//     }
// });
// usersRoute.get('/',(req,res,next)=>{
//     res.send("Hello from Users")
// })

//view specific user
// usersRoute.get('/:userId',(req,res,next)=>{
//     res.send('get UsersId');
// })

//edit user
/* usersRoute.patch('/:userId',(req,res,next)=>{
    console.log(req.params.userId);
    let foundUser = user.find(d=>d.userId==req.params.userId)
    if (foundUser===undefined)
    {
        res.status(404).send({status:404, message:'User not found'}); 
    }else
    res.send('update User');
})
 */
// usersRoute.delete('/',(req,res,next)=>{
//     res.send('Delete UsersId');
// })
// export{usersRoute}