var mongoose = require ('mongoose'); 

var Schema = mongoose.Schema; 

var ChannelSchema = new Schema ({ 
    name : String, 
    description : String, 
    picture : String    

});

var Channels = mongoose.model('Channels', ChannelSchema); 

module.exports = Channels; 
