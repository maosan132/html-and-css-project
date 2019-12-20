const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const morgan = require('morgan');
app.use(morgan('dev'));
const errorHandler = require('errorhandler');
app.use(errorHandler());
const cors = require('cors');
app.use(cors());

app.use(express.static('./'));

const apiRouter = require('./api/api');
app.use('/api', apiRouter);

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
    console.log(`Listenning on PORT ${PORT}.`);
});


module.exports = app;