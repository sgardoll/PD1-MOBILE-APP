//import required node packages
const storage = require('node-persist'); 
const express = require('express'); 
const bodyParser = require('body-parser'); 
const { v4: uuidv4 } = require('uuid');
const cors = require('cors'); 
    
//IIFE to kickstart the program, it is async so we can call async functions inside it i.e. await
(async() => {
    //initialize express app
    const app = express(); 
    //register the json body parser middleware
    app.use(bodyParser.json()); 
    app.use(cors()); 
    //initialize the node persist storage
    let options = { dir:'services\\storage'}; 
    await storage.init(options); 
    //register POST [CREATE] user handler
    app.post('/users', async(req,res)=>{
        let u = req.body; 
        let id = uuidv4(); 
        u.id = id; 
        u.updated = new Date(); 
        await storage.setItem(id,u); 
        res.statusCode = 201; 
        res.json(u); 
    }); 
    //register PUT [UPDATE] user handler
    app.put('/users', async(req,res)=>{
   
        let original = await storage.getItem(req.body.id); 
        let updated = {...original,...req.body,updated:new Date()}; 
        await storage.updateItem(original.id,updated); 
        res.statusCode = 200; 
        res.json(updated); 
    }); 
    //register GET users handler
    app.get('/users',async(req,res)=>{
        let users = await storage.values(); 
        res.json(users); 
    }); 
    //register GET single user by id handler
    app.get('/users/:id',async(req,res)=>{
        let id = req.params.id; 
        let user = await storage.getItem(id); 
        res.json(user); 
    })
     //register DELETE single user by id handler
     app.delete('/users/:id',async(req,res)=>{
        let id = req.params.id; 
        let user = await storage.removeItem(id); 
        res.status(204).send();   
    })

    //start the web service i.e. bind to NIC/Port
    app.listen(3000,()=>console.log('web service started')); 
})();