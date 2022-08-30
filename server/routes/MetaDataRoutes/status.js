var express = require('express');
var router = express.Router();
const  db = require('../../dbConnection');


router.get("/status",(req,res)=>{
    db.query('SELECT * FROM `status` ',
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

router.post("/status",(req,res)=>{
  let status = req.body.Name;
  db.query("INSERT INTO `status` (Name) VALUES (?)",
  [status],
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

router.delete("/status/:id",(req,res)=>{
  let id = req.params.id;
  db.query("DELETE FROM `status` WHERE `id` = ?",[id],
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


router.put("/status/:id",(req,res)=>{
  let data = req.body.Name;
  let id = req.params.id;
  db.query("UPDATE `status` SET `Name`=? WHERE `id`=? ",[data,id],
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