var express = require('express');
var router = express.Router();
const  db = require('../../dbConnection');
const auth = require("../../Middleware/auth")

router.get("/dg",auth,(req,res)=>{
    db.query('SELECT * FROM `concern_dg` ',
      function(err, results) {
        if(err){
          console.log(err);
          res.status(400).send(err.message);  
          return ;
        }
        res.status(200).send(results);
    }
    );
  });

router.post("/dg",auth,(req,res)=>{
    let dg = req.body.Name;
    db.query("INSERT INTO `concern_dg` (Name) VALUES (?)",
    [dg],
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

router.delete("/dg/:id",auth,(req,res)=>{
  let id = req.params.id;
  db.query("DELETE FROM `concern_dg` WHERE `id` = ?",[id],
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

router.put("/dg/:id",auth,(req,res)=>{
  let data = req.body.Name;
  let id = req.params.id;
  db.query("UPDATE `concern_dg` SET `Name`=? WHERE `id`=? ",[data,id],
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