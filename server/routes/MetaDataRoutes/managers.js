var express = require('express');
var router = express.Router();
const  db = require('../../dbConnection');
const auth = require("../../Middleware/auth")

router.get("/managers",auth,(req,res)=>{
    db.query('SELECT * FROM `managers` ',
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


router.post("/managers",auth,(req,res)=>{
  let status = req.body.Name;
  db.query("INSERT INTO `managers` (Name) VALUES (?)",
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



router.delete("/managers/:id",auth,(req,res)=>{
  let id = req.params.id;
  db.query("DELETE FROM `managers` WHERE `id` = ?",[id],
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



router.put("/managers/:id",auth,(req,res)=>{
  let data = req.body.Name;
  let id = req.params.id;
  db.query("UPDATE `managers` SET `Name`=? WHERE `id`=? ",[data,id],
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