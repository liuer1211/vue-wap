var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  let data = {
    code: 1,
    message: "ok",
    result: {
      list: [{name:"张三",age:20}],
      page: 1,
      pageSize: 10,
      total: 1
    }
  }
  res.send(data)
});

module.exports = router;
