const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const thing = require('./models/Thing');
const Thing = require('./models/Thing');

mongoose.connect('mongodb+srv://salim:Saanda94@cluster0-jtpxd.mongodb.net/gestiondevente',
  { useNewUrlParser: true,
    useUnifiedTopology: true})
  .then(() => console.log('Connexion à Mongodb réussi!!'))
  .catch(() => console.log('Connexion à Mongodb échouée'));

const app =  express();

app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methodes','GET, POST, DELETE, PATCH, OPTION');
  next();
});

app.use(bodyParser.json());

app.post('/api/stuff', (req, res, next)=>{
  delete req.body._id;
  const thing = new Thing({
    ...req.body
  });
  thing.save()
  .then(() => res.status(201).json({ message: 'Objet enregistré'}))
  .catch(() => res.status(400).json({ error}));
});

app.use('/api/stuff', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
      title: 'Mon premier objet',
      description: 'Les infos de mon premier objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 2900,
      userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });
module.exports = app;


