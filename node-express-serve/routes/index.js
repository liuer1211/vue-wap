var express = require('express');
var router = express.Router();

/* post home page. */
router.post('/list', function(req, res, next) {
  console.log("=======",req.body)
  // res.render('index', { title: 'Express' });
  let data = {
    code: 1,
    message: "ok",
    result: {
      list: [
        {
          name:req.body.name,
          age:req.body.age
        }
      ],
      page: 1,
      pageSize: 10,
      total: 1
    }
  }
  res.send(data)
});

router.get('/', function(req, res, next) {
  console.log("=======",req.body)
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
