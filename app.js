const express = require('express');
const app = express();

app.get('/service1', (req, res) => {
    res.send("Hello world 123");
});

app.listen(3002, () => {
    console.log('listening on port 3002');
});