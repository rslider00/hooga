var mongoose = require ('mongoose'); 

var Schema = mongoose.Schema; 

var PostSchema = new Schema ({ 
    profileID : String, 
    channelID : String, 
    body: String, 
    picture : String, 
    likes : String
});

var Posts = mongoose.model('Posts', PostSchema); 

module.exports = Posts; 