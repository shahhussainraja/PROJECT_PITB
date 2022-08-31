var express = require('express');
var router = express.Router();
const  db = require('../../dbConnection');
const auth = require("../../Middleware/auth")

router.get("/ndp",auth,(req,res)=>{
    db.query('SELECT * FROM `ndp_pc-1` ',
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

router.post("/ndp",auth,(req,res)=>{
  let ndp = req.body.Name;
  db.query("INSERT INTO `ndp_pc-1` (Name) VALUES (?)",
  [ndp],
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



router.delete("/ndp/:id",auth,(req,res)=>{
  let id = req.params.id;
  db.query("DELETE FROM `ndp_pc-1` WHERE `id` = ?",[id],
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


router.put("/ndp/:id",auth,(req,res)=>{
  let data = req.body.Name;
  let id = req.params.id;
  db.query("UPDATE `ndp` SET `Name`=? WHERE `id`=? ",[data,id],
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