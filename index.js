// MODULES
const express = require('express');
const app = express();

// GET DATA
const bicycles = require('./data/data.json');

// EJS Setup
app.set('view engine', 'ejs');

// Static Root Folder
app.use(express.static('public'));

// Main Page
app.get('/', (req, res) => {
    return res.render('bicycles', { bicycles });
});

// Overview Page
app.get('/bicycle', (req, res) => {
    const bicycle = bicycles.find(b => b.id === req.query.id);
    return res.render('overview', { bicycle });
});

// Server
app.listen(3000, () => console.log('Server is running at port 3000'));