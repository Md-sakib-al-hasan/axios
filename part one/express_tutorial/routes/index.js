var express = require('express');
var router = express.Router();
const axios = require("axios")
/* GET home page. */
router.get('/', async function (req, res, next) {
  axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => res.render('index', { title: response.data.title }))
    .catch(error => console.log(error))

});

module.exports = router;
