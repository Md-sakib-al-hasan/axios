var express = require('express');
var router = express.Router();
const axios = require("axios")
/* GET home page. */
router.get('/', async function (req, res, next) {
  axios.post('https://jsonplaceholder.typicode.com/todos/', {
    title: "Learning post with Headers",
    body: "Body with post Headers"
  }, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(resp => {
      console.log(resp);
      res.send("posted data whit heards");
    })
    .catch(e => console.log(e))

});

module.exports = router;
