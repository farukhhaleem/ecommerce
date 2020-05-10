const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/WEB9810_DB', (err)=>{
    // console.log(err);
    if(!err){
        console.log('MongoDB connaction successfull.....');
    }else{
        console.log('Error in DB connection : '+ JSON.stringify(err, undefined, 2));
    }
});
module.exports = mongoose;
