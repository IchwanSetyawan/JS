const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/mongodb');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res)=>{
    res.json({pesan: "Hello World!"});
})

app.post('/crud', (req, res)=>{
    let crud = new db.crud();
    crud.nama = req.body.nama;
    crud.umur = req.body.umur;
    crud.save((err, data)=>{
        if(err){
            console.log(err);          
        }else{
            res.json({pesan: "berhasil menambahkan data"})
        }
    })
})

app.get('/crud', (req, res)=>{
    db.crud.find({})
    .then((data)=>{
        res.json(data);
    })
})

app.put('/crud/:id', (req, res)=>{
    db.crud.update(
        {_id: req.params.id},req.body)
        .then(()=>{
            res.json({pesan: "Berhasil update data"});
        })
})

app.delete('/crud/:id', (req, res)=>{
    db.crud.remove({_id: req.params.id}).then(()=>{
        res.json({pesan: "berhasil menghapus data"});
    })
})


app.listen(3000, ()=>{
    console.log('server berjalan di port 3000');
})