var express = require('express');
var router = express.Router();
const  db = require('../../dbConnection');


router.get("/coordinators",(req,res)=>{
    db.query('SELECT * FROM `pm_coordinator` ',
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


router.post("/coordinators",(req,res)=>{
  let coordinators = req.body.Name;
  db.query("INSERT INTO `pm_coordinator` (Name) VALUES (?)",
  [coordinators],
    function(err, results) {
      if(err){
        console.log(err);
        res.status(400).send(err.message);  
        return ;
      }
      res.status(200).send(results);
     });
});

    
router.delete("/coordinators/:id",(req,res)=>{
  let id = req.params.id;
  db.query("DELETE FROM `pm_coordinator` WHERE `id` = ?",[id],
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

router.put("/coordinators/:id",(req,res)=>{
  let data = req.body.Name;
  let id = req.params.id;
  db.query("UPDATE `pm_coordinator` SET `Name`=? WHERE `id`=? ",[data,id],
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