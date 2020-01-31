const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = '5200';

app.listen(PORT, () => {
    console.log(`Backend conectado en el puerto => ${PORT}`);
});