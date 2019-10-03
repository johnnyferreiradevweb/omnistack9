const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ft28b.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/', (req, res) => {
    return res.json({ message: 'Hello World!!' });
});

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('server started');
});