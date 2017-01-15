var Comments = require ('../models/commentsModel');
var bodyParser = require('body-parser');

module.exports = function(app){ 

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true})); 

//retrieve a comment 

    app.get('/api/comment/:id', function(req, res){
    Comments.findById({_id:req.params.id}, function(err, comment){
        if (err) throw err; 

        res.send(comment); 


         }); 
    }); 

//post a new comment 

app.post('/api/newcomment', function(req, res){ 
    var newComment = Comments ({
        postID : req.body.postID, 
        profileID : req.body.profileID, 
        body : req.body.body

    }); 
    newComment.save(function(err, result){ 
        if (err) throw err; 
        res.send(result); 

    }); 
}); 

//delete a comment 

app.delete('/api/comment/:id', function(req, res){
    Comments.findByIdAndRemove(req.params.id, function(err){ 
        if (err) throw err; 
        res.send('Success'); 
    }); 
}); 









}  