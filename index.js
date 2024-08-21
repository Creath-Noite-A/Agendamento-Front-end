const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const dotenv = require('dotenv');

const router = require('./server/router');

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public/'));

// Engine de template
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', router.index);
app.use('/login', router.login);

app.listen(PORT, (req, res) => {
    console.info(`Servidor rodando na porta ${PORT}`);
})