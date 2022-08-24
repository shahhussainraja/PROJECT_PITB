var express = require('express');
var router = express.Router();
const  db = require('../dbConnection');
const auth = require("../Middleware/auth")


router.get('/docs',auth,(req, res)=>{
   db.query('SELECT * FROM `projectwiseresources` ',
      function(err, results) {
        if(err){
          console.log(err);
          res.status(400).send(err.message);  
          return ;
        }
        if(results.length == 0){
          console.log("Data Not found");
          res.status(400).send(false);
          return;
        }
        res.status(200).send(results);
    }
    );
  });


  router.get("/allDocs",(req,res)=>{
    let sql = "SELECT `Name` FROM concern_dg c , higherdepartment h"
    db.query(sql,
      function(err, results) {
        if(err){
          console.log(err);
          res.status(400).send(err.message);  
          return ;
        }
        if(results.length == 0){
          console.log("Data Not found");
          res.status(400).send(false);
          return;
        }
        res.status(200).send(results);

    }
    );
  })


  
  module.exports = router;


