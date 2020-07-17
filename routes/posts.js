const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/posts',(req, res) =>{
    res.send('we are on posts');

});
/*
router.post('/',(req, res)=> {
    console.log(req.body);
})
*/

router.post('/',(req, res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
    
   
    .then(data=> {
        res.json(data);

        
    })
    .catch(err=> {
        console.log(err);
        res.json({message:err});
    })

   


});  


module.exports = router ;