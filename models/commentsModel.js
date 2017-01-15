var mongoose = require ('mongoose'); 

var Schema = mongoose.Schema; 

var CommentsSchema = new Schema ({ 
    postID : String, 
    profileID : String, 
    body : String

});

var Comments = mongoose.model('Comments', CommentsSchema); 

module.exports = Comments; 
