const express = require('express');
const { Router } = express;

const route = Router();

route.get('', (req, res) => {
    res.render('login');
});

module.exports = route;