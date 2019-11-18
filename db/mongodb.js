const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crud', {useMongoClient : true});

const db = mongoose.connection;

db.on('error', ()=> console.log('database error'));
db.once('open', ()=> console.log('database connected'));

let crudSchema = mongoose.Schema({
    nama: String,
    umur: Number
});

exports.crud =mongoose.model('crud', crudSchema);