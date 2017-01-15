var configValues = require('./config'); 

module.exports = { 


    getDbConnectionString: function(){ 
        return 'mongodb://'+ configValues.uname + ':' + configValues.pwd + '@ds161018.mlab.com:61018/users'
      
    }
}