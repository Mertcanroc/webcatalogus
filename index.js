import express from 'express';
import cors from 'cors';
import fs from 'node:fs';

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//cars json's ophalen in de server
app.get('/cars', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/cars1.json', function(err, data){
    res.send(data);
  })
});

app.get('/cars2', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/cars2.json', function(err, data){
    res.send(data);
  })
});

app.get('/cars3', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/cars3.json', function(err, data){
    res.send(data);
  })
});

app.get('/sneakers', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/sneakers.json', function(err, data){
    res.send(data);
  })
});

app.get('/basketBall', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/basketBall.json', function(err, data){
    res.send(data);
  })
});

// data's van de arrays worden hier opgehaald en direct gestuurd naar client(js voor shirts)
app.get('/shirt-one', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/tshirt-one.json', function(err, data){
    res.send(data);
  })
});

app.get('/shirt-two', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/tshirt-two.json', function(err, data){
    res.send(data);
  })
});

app.get('/shirt-three', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/tshirt-three.json', function(err, data){
    res.send(data);
  })
});

app.get('/shirt-four', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/tshirt-four.json', function(err, data){
    res.send(data);
  })
});

app.get('/shirt-five', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/tshirt-five.json', function(err, data){
    res.send(data);
  })
});

app.get('/shirt-six', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/tshirt-six.json', function(err, data){
    res.send(data);
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); 