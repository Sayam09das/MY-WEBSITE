const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const connectTODb = require('./database/response');
const staticRoutes = require('./static');
const mainRoutes = require('./routes/mainRoutes');

app.use(cors());
dotenv.config();


connectTODb();


app.set('views', path.join(__dirname, '../frontend'));
app.set('view engine', 'hbs');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());






app.use(staticRoutes);
app.use(mainRoutes);





app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
        return res.status(400).send({ error: 'Invalid JSON format' });
    }
    next();
});

module.exports = app;
