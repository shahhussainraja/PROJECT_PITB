var express = require('express');
var router = express.Router();
const  db = require('../../dbConnection');


router.get("/departments",(req,res)=>{
    db.query('SELECT * FROM `higher_department` ',
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


router.post("/departments",(req,res)=>{
  let departments = req.body.Name;
  db.query("INSERT INTO `higher_department` (Name) VALUES (?)",
  [departments],
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


router.delete("/departments/:id",(req,res)=>{
  let id = req.params.id;
  db.query("DELETE FROM `higher_department` WHERE `id` = ?",[id],
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


router.put("/departments/:id",(req,res)=>{
  let data = req.body.Name;
  let id = req.params.id;
  db.query("UPDATE `higher_department` SET `Name`=? WHERE `id`=? ",[data,id],
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