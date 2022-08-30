var express = require('express');
var router = express.Router();
const  db = require('../../dbConnection');


router.get("/technologies",(req,res)=>{
    db.query('SELECT * FROM `technology` ',
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


router.delete("/technologies/:id",(req,res)=>{
  let id = req.params.id;
  db.query("DELETE FROM `technology` WHERE `id` = ?",[id],
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


router.post("/technologies",(req,res)=>{
  let technology = req.body.Name;
  db.query("INSERT INTO `technology` (Name) VALUES (?)",
  [technology],
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



router.put("/technologies/:id",(req,res)=>{
  let data = req.body.Name;
  let id = req.params.id;
  db.query("UPDATE `technology` SET `Name`=? WHERE `id`=? ",[data,id],
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