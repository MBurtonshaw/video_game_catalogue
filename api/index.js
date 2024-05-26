const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
const list = require('./games.json');

let titles = list.games;
let genres = list.genres;

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(list)
})

app.get('/games', (req, res) => {
    res.send(titles);
});


app.get('/genres', (req, res) => {
    res.send(genres);
});


app.listen(PORT, ()=>console.log('app is listening on port 5000'));