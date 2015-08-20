var express = require('express');
var router = express.Router();

/* GET bills listing. */
router.get('/', function(req, res, next) {
  res.json(200, [{id: 1, label:'bill 1'}, {id: 2, label:'bill 2'}]);
});

router.get('/plop/', function(req, res, next) {
  res.json(200, {label:'plop'});
});

module.exports = router;