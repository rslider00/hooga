var Channels = require('../models/channelsModel'); 
var bodyParser = require('body-parser');

module.exports = function(app){ 

    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({extended : true})); 

//retrieve a channel from the database

app.get('/api/channel/:id', function(req, res){ 
    Channels.findById({_id:req.params.id}, function(err, channel){ 
        if (err) throw err; 

        res.send(channel); 

    }); 
}); 

// create a new channel in the database
app.post('/api/newchannel', function(req, res){

var newChannel = Channels ({ 

    name : req.body.name, 
    description : req.body.description, 
    picture : req.body.picture  

    }); 
    
newChannel.save(function(err, result){ 
    if (err) throw err; 
    res.send(result); 
})




}); 
















}