const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send();
});

app.set('view engine', 'ejs');

app.listen(PORT, (req, res) => {
    console.log(`Servidor rodando na porta ${PORT}`);
})