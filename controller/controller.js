var express = require('express')
var router = express.Router();  
var bodyParser = require('body-parser');
var UserModel = require('../model/user.model');




router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));



router.get('/users', async(req,res)=>{
    // find all doc
    const doc = await UserModel.find();
    res.send(doc)
});

router.get('/user/:id',async(req,res)=>{
    const doc = await UserModel.find({_id:req.params.id});
    res.send(doc);
});

router.post('/add-user',(req,res)=>{
    const user = new UserModel({
        userName:req.body.userName,
        password:req.body.password,
    });
    user.save()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.json({ message:err })
    })
    // let user = {
    //     id : users.length + 1,
    //     userName:req.body.userName,
    // }
    // users.push(user)
    // res.send(user)
})

router.put('/update-user/:id',async(req,res)=>{
    const user =await UserModel.findOneAndUpdate({_id:req.params.id},{$set:{
        userName:req.body.userName,
        password:req.body.password,
    }});
    user.save()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>{
        res.json({ message:err })
    })


    // let user=users.find(u => u.id == req.params.id);
    // if(!user) res.status(400).send("User not found From id:"+req.params.id);
     
    // user.userName=req.body.userName;
    // res.send(user)
})

router.delete('/delete-user/:id', async(req,res)=>{
    const user =await UserModel.deleteOne({_id:req.params.id})
    .then(data=>{
        res.json({data,msg:"user deleted from id:"+req.params.id})
    })
    .catch(err=>{
        res.json({ message:err })
    })
    // let user=users.find(u => u.id == req.params.id);
    // if(!user) res.status(400).send("User not found From id:"+req.params.id);
     
    // const index= users.indexOf(user)
    // users.splice(index,1)
    // res.send(user)
})

module.exports= router;