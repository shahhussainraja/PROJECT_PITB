var express = require('express');
var router = express.Router();
const  db = require('../../dbConnection');


router.get("/teams",(req,res)=>{
    db.query('SELECT * FROM `teams` ',
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


router.post("/teams",(req,res)=>{
  let teams = req.body.Name;
  db.query("INSERT INTO `teams` (Name) VALUES (?)",
  [teams],
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


router.delete("/teams/:id",(req,res)=>{
  let id = req.params.id;
  db.query("DELETE FROM `teams` WHERE `id` = ?",[id],
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




router.put("/teams/:id",(req,res)=>{
  let data = req.body.Name;
  let id = req.params.id;
  db.query("UPDATE `teams` SET `Name`=? WHERE `id`=? ",[data,id],
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