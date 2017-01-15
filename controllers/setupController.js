var Profiles = require('../models/profileModel'); 
var Channels = require('../models/channelsModel');
var Posts = require('../models/postModel'); 
var Comments = require('../models/commentsModel');  

module.exports = function(app){ 
    app.get('/api/setupSeedData', function(req, res){ 
        //seed database 


        var starterProfiles = [
            {
                    name : 'Alec Kinahan', 
                    bio : 'A homo CS student', 
                    picture: 'alec.jpg',
                    email : 'alec.kinahan@gmail.com', 
                    username : 'akinahan007', 
                    password : '1995'    


            }, 
            {
                  name : 'Ryan Lider', 
                    bio : 'A homo biochem student', 
                    picture: 'ryan.jpg',
                    email : 'rslider@shaw.ca', 
                    username : 'rslider', 
                    password : 'iamaMAC'    

            }
        ]; 

        var starterPosts = [{
               profileID : '1939139130391u3013u90', 
                channelID : '1i390130910390183018', 
                body : 'hi im alec excited to be here', 
                picture : 'alec.jpg', 
                likes : '402'       

        },
        {
                 profileID : '9341-20401-294-012940-', 
                channelID : '48210490129490-12094-012', 
                body : 'This is a great place to find resources http://xxx.com', 
                picture : 'porno.jpg', 
                likes : '991'    

        }


        ]; 

        var starterComments = [{
             postID : '1111111', 
            profileID : '1939139130391u3013u90', 
            body : 'Well said'



        },
        {
             postID : '2222222', 
             profileID : '9341-20401-294-012940-', 
             body : 'Intersting Idea'

        }];

        var starterChannels = [{


                name : 'UVIC Genneral', 
                description : 'A channel for all things UVic', 
                picture : 'Uvic.jpg'  
        }, 
        {

                name : 'UVIC Girls Soccer', 
                description : 'A place to discuss practice', 
                picture : 'Ball.jpg'  


        }]; 
        

       Profiles.create(starterProfiles, function(err, results){ 
           //res.send(results); 


       }); 

        Posts.create(starterPosts, function(err, results){
           // res.send(results); 


        }); 
        Comments.create(starterComments, function(err, results){

            //res.send(results); 
        });
        Channels.create(starterChannels, function(err, results){

            res.send(results); 

        })
    }); 
}