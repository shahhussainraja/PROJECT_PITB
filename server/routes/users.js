var express = require('express');
var router = express.Router();
const  db = require('../dbConnection');

router.get('/data', function(req, res) {
  let sql = 'SELECT Name FROM `technology` ';
  db.query(sql,function(err, results) {
      if(err){
        console.log(err);
        res.status(400).send(err.message);
        return ;
      }
      if(results.length == 0){
        res.send("No data Found");
        return;
      }
      res.status(200).send(results);
      console.log(results);
    }
  );
  

 



});

module.exports = router;
