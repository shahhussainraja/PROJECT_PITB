var express = require('express');
var router = express.Router();
const  db = require('../../dbConnection');


router.get("/regions",(req,res)=>{
    db.query('SELECT * FROM `regions` ',
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

router.post("/regions",(req,res)=>{
  let regions = req.body.Name;
  db.query("INSERT INTO `regions` (Name) VALUES (?)",
  [regions],
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


router.delete("/regions/:id",(req,res)=>{
  let id = req.params.id;
  db.query("DELETE FROM `regions` WHERE `id` = ?",[id],
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


router.put("/regions/:id",(req,res)=>{
  let data = req.body.Name;
  let id = req.params.id;
  db.query("UPDATE `regions` SET `Name`=? WHERE `id`=? ",[data,id],
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