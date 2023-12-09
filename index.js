const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set the static folder to serve HTML files
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/tracks', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tracks.html'));
});

app.get('/own-tracks', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'own-tracks.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
