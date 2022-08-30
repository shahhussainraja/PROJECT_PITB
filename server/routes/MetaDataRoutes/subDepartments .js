var express = require('express');
var router = express.Router();
const  db = require('../../dbConnection');


router.get("/subDepartments",(req,res)=>{
    db.query('SELECT * FROM `sub_department`',
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


router.post("/subDepartments",(req,res)=>{
  db.query("INSERT INTO `sub_department` (Name,H_departmentId) VALUES (?,?)",
  [req.body.Name,req.body.departmentId],
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



router.delete("/subDepartments/:id",(req,res)=>{
  let id = req.params.id;
  db.query("DELETE FROM `sub_department` WHERE `id` = ?",[id],
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