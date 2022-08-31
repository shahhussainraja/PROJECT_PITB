var express = require('express');
var router = express.Router();
const  db = require('../../dbConnection');
const auth = require("../../Middleware/auth")

router.get("/developers",auth,(req,res)=>{
    db.query('SELECT * FROM `lead_developers` ',
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


router.post("/developers",auth,(req,res)=>{
  let developer = req.body.Name;
  db.query("INSERT INTO `lead_developers` (Name) VALUES (?)",
  [developer],
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


router.delete("/developers/:id",auth,(req,res)=>{
  let id = req.params.id;
  db.query("DELETE FROM `lead_developers` WHERE `id` = ?",[id],
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

router.put("/developers/:id",auth,(req,res)=>{
  let data = req.body.Name;
  let id = req.params.id;
  db.query("UPDATE `lead_developers` SET `Name`=? WHERE `id`=? ",[data,id],
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














module.exports = router;