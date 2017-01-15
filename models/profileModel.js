var mongoose = require ('mongoose'); 

var Schema = mongoose.Schema; 

var ProfileSchema = new Schema ({ 
    name : String, 
    bio : String, 
    picture: String, 
    email : String, 
    username : String, 
    password : String, 
    channels : String        


});

var Profiles = mongoose.model('Profiles', ProfileSchema); 

module.exports = Profiles; 
