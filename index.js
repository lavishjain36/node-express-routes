// //import an express module
// const express=require('express');
// const port=4000;

// //create an instance of the express application
// const app=express();

// //define a route mechanism 
// app.get('/all',(req,res)=>{
//     res.send("Hello Buddy.Welcome to express Server");
// })

// app.get('/users',(req,res)=>{
//     res.send("Users listed here");
// })


// //creater a router for user 

// app.route('/users').get((req,res)=>{
//     res.send('User are listed here')
// })


// app.route('/students').get((req,res)=>{
//     res.send('Students are listed here');
// })

// //post 
// app.post('/',(req,res)=>{
//     console.log(req.body);
//     res.send({
//         status:200,
//         message:"Data Send successfully"
//     })
// })
// //Start the server and listen to a port number
// app.listen(port,()=>{
//     console.log("Server is running on port :" +port);
// })


const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const PORT=8000;

let details=[
    {
        id:1,
        name:"Abhijeet",
        email:"abhijeet@gmail.com"
    },
    {
        id:2,
        name:"Pardeep",
        email:"pardeep@gmail.com"
    },
    {
        id:3,
        name:"Rajshekar Buddha",
        email:"buddha@gmail.com"
    },
    {
        id:4,
        name:"Amir",
        email:"amir@gmail.com"
    },
    {
        id:5,
        name:"Leonard",
        email:"leonard@gmail.com"
    },
    {
        id:6,
        name:"Shivam",
        email:"Shivam@gmail.com",
      
    }
]


//routes
app.get('/',(req,res)=>{
    res.send(details);
})

//Route Get-Id parameter

app.get("/:id",(req,res)=>{
    //logic
    let id=req.params.id;
    console.log(id);
    const data=details.filter(item=>item.id==id);
    res.send(data);
})


app.post("/",async(req,res)=>{
    details.push(req.body);
    res.send({message:'Data Sent successfully'});
})


// app.put 
// app.delete

app.listen(PORT,()=>{
    console.log("Server is running on port " +PORT );
})