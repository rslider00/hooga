var Profiles = require ('../models/profileModel');
var bodyParser = require('body-parser');

module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.get('/api/profile/:id', function(req, res){
        Profiles.findById({_id:req.params.id}, function(err, profile){
            if (err) throw err;

            res.send(profile);
        });
    });
    app.get('/api/profiles/:uname', function(req, res){
        Profiles.find({username: req.params.uname}, function(err, profiles){
        if (err) throw err;
        res.send(profiles);


        });
    });
    app.post('/api/register', function(req, res){
        var newProfile = Profiles({
            name: req.body.name,
            bio: req.body.bio,
            picture: req.body.picture,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        newProfile.save(function(err, result){
            if (err) throw err;
            res.send(result);
        });


    })
    app.post('/api/profile/:id', function(req, res){
        Profiles.findByIdAndUpdate(req.params.id, {
            bio: req.body.bio, picture: req.body.picture, password: req.body.password }, function(err, profile){
                if(err) throw err;
                res.send('Success');
        });


    });

}