var Posts = require ('../models/postModel'); 
var bodyParser = require('body-parser');

module.exports = function(app){ 

    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({extended : true})); 
    

    app.get('/api/post/:id', function(req, res){ 
        Posts.findById({_id:req.params.id}, function(err, post){
            if (err) throw err; 

            res.send(post); 
        }); 

    }); 
    app.post('/api/newpost', function(req, res){ 
        var newPost = Posts({

        profileID : req.body.profileID, 
        channelID : req.body.channelID, 
        body: req.body.body, 
        picture : req.body.picture, 
        likes : req.body.likes 

        });
        newPost.save(function (err, result){
            if (err) throw err; 
            res.send(result);  

        }); 

    }); 
app.post('/api/post/:id', function(req, res){
        Posts.findByIdAndUpdate(req.params.id, {
            body: req.body.body, picture: req.body.picture }, function(err, post){
                if (err) throw err;
                res.send(post);
        });
    });

app.delete('/api/post/:id', function(req, res){ 
    Posts.findByIdAndRemove(req.params.id, function(err){ 
    if (err) throw err; 
    res.send('Success'); 

    });
});




} 