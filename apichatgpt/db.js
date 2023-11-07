const mongoose = require('mongoose');

const MongoConnection = ()=>{
    mongoose.connect('mongodb://127.0.0.1/basetest')
    .then(()=>{
        console.log('Sucessfully connected');
    })
    .catch((err)=>{
        console.log(err);
    });
}
module.exports = MongoConnection