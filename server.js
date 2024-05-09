const express = require('express');

const app = express();

app.get('/api/data', (req, res) => {
    res.json({ message: 'This is my API!' });
});

app.listen(5000, () => {
    console.log('The server is running on port 5000');
});

