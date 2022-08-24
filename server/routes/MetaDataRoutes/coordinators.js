var express = require('express');
var router = express.Router();
const  db = require('../../dbConnection');


router.get("/coordinators",(req,res)=>{
    db.query('SELECT * FROM `pm_coordinator` ',
      function(err, results) {
        if(err){
          console.log(err);
          res.status(400).send(err.message);  
          return ;
        }
        res.status(200).send(results);
    }
    );
})

module.exports = router;