var express = require('express');
var router = express.Router();
const  db = require('../../dbConnection');
const auth = require("../../Middleware/auth")

router.get("/subDepartments",auth,(req,res)=>{
    db.query("SELECT `sub_department`.`id`,`sub_department`.`Name`,`higher_department`.`Name` As higher_departmentName FROM `sub_department` JOIN `higher_department` ON `sub_department`.`H_departmentId` = `higher_department`.`id`",
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

router.post("/subDepartments",auth,(req,res)=>{
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

router.delete("/subDepartments/:id",auth,(req,res)=>{
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

router.put("/subDepartments/:id",auth,(req,res)=>{
  let Name = req.body.Name;
  let departmentId = req.body.departmentId;
  let id = req.params.id;
  db.query("UPDATE `sub_department` SET `Name`=? , H_departmentId=? WHERE `id`=? ",[Name,departmentId,id],
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