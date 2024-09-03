var express = require('express');
var router = express.Router();
const axios = require("axios")
/* GET home page. */
router.get('/', async function (req, res, next) {
  // axios.get('https://jsonplaceholder.typicode.com/todos/', {
  //   params: { id: 5 }
  // })
  //   .then(response => {
  //     console.log("this is get", response.data)
  //     // res.send(response.data)
  //   })
  //   .catch(error => console.log(error))

  // axios.post("https://jsonplaceholder.typicode.com/posts",
  //   { title: "out Title", body: "thi is test body" }
  // )
  //   .then(response => {
  //     // console.log(response.data)
  //     res.send(response.data)
  //   })
  //   .catch(error => console.log(error))
  // axios.patch("https://jsonplaceholder.typicode.com/posts/1",
  //   { title: "out Title", body: "change post1 sfa" }
  // )
  //   .then(response => {
  //     // console.log(response.data)
  //     res.send(response.data)
  //   })
  //   .catch(error => console.log(error))

  axios.delete("https://jsonplaceholder.typicode.com/posts/1"
  )
    .then(response => {
      // console.log(response.data)
      res.send(response.data)
    })
    .catch(error => console.log(error))


});

module.exports = router;
