const mongoose = require('mongoose');
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

require('dotenv').config();

const middlewares = require('./middlewares');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})

const app = express();
const port = process.env.PORT || 1337;

app.use(helmet());
app.use(morgan('common'));
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

app.get('/', (req, res) => {
    res.json({
        message: "Hello world"
    });
});

app.use(middlewares.notFound);

app.use(middlewares.handlerError);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


