var express = require('express');
var router = express.Router();
const  db = require('../dbConnection');
const auth = require("../Middleware/auth")
const promiseQuery = require("../promiseQuery");


router.get('/docs',auth,(req, res)=>{
   db.query('SELECT * FROM `projectwiseresources` ',
      function(err, results) {
        if(err){
          console.log(err);
          res.status(400).send(err.message);  
          return ;
        }
        let length = results.length;
        let page =Number(req.query.page ? req.query.page : 1);
        let perPage = Number(req.query.perPage ? req.query.perPage : 9  );
        let skipRecord = perPage * (page - 1);
        
        sql = `SELECT * FROM projectwiseresources  LIMIT ${skipRecord},${perPage}`
        db.query(sql,(err,paginatedResult)=>{
          if(err){
            res.status(400).send(err.message);
          }
          res.status(200).send({length,paginatedResult});
        })

    });
  });


  router.post('/docs',auth,(req, res)=>{
    const data = req.body.data;    
    const workingResource = req.body.workingResources
    db.query('INSERT INTO `projectwiseresources` (Project,Year,Manager,PM_Coordinator,Status,Department,Higher_Department,NDP_PC,Concerned_DG,Region,Technology,R_Working_on_Active_Projects,Techinical_Lead_Web,Techinical_Lead_Android,GITLAB_ID,Android_Repo,iOS_Repo,Web_Repo,Continuous_Development,Continuous_Integration,team,URL) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
       [data.project,data.date,data.manager,data.coordinator,data.status,data.subDepartment,data.department,data.ndp,data.concernDg,data.region,data.technology,workingResource.toString(),data.techLeadWeb,data.techLeadAndroid,data.gitLabId,data.androidRepo,data.iOsRepo,data.webRepo,data.continousDev,data.continousInt,data.team,data.url]
       ,function(err, results) {
         if(err){
           console.log(err);
           res.status(400).send(err.message);  
           return ;
         }
         res.status(200).send(results); 
     }
     );
   });
 


  router.put('/docs/:id',auth,(req, res)=>{
//multiSelect ->toString() use 
    const data = req.body.docs;
    const workingResource = req.body.workingResources    
    db.query('UPDATE `projectwiseresources` SET `Project`=?, `Year`=?, `Manager`=?, `PM_Coordinator`=?, `Status`=?, `Department`=?, `Higher_Department`=?, `NDP_PC`=?, `Concerned_DG`=?, `Region`=?, `Technology`=?, `R_Working_on_Active_Projects`=?, `Techinical_Lead_Web`=?, `Techinical_Lead_Android`=?, `GITLAB_ID`=? , `Android_Repo`=?, `iOS_Repo`=?, `Web_Repo`=?, `Continuous_Development`=?, `Continuous_Integration`=?, `team`=?, `URL`=? WHERE `id`= ?',
       [data.project,data.date,data.manager,data.coordinator,data.status,data.subDepartment,data.department,data.ndp,data.concernDg,data.region,data.technology,workingResource.toString(),data.techLeadWeb,data.techLeadAndroid,data.gitLabId,data.androidRepo,data.iOsRepo,data.webRepo,data.continousDev,data.continousInt,data.team,data.url,req.params.id]
       ,function(err, results) {
         if(err){
           console.log(err);
           back={}
           back['message']="Server down for maintinace";
           back['error']=err.message;
           res.status(400).send(back);  
           return ;
         }
         res.status(200).send(results); 
     }
     );
   });
 
  
router.delete("/docs/:id",auth,(req,res)=>{
  db.query("DELETE FROM `projectwiseresources` WHERE `id` = ?",[req.params.id],
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

 
router.get("/searchDocs",auth,(req,res)=>{

  let sql = "SELECT * FROM projectwiseresources  WHERE project LIKE '"+req.query.search+"%'";
  db.query(sql,
      function(err, results) {
        if(err){
          console.log(err);
          res.status(400).send(err.message);  
          return ;
        }
        let length = results.length;
        res.status(200).send({length,results});
    }
    );

  });


  
  router.get("/formDocs",auth, async(req,res)=>{
    let coordinators,departments,subDepartments,developers;
    let dg,managers,ndp,regions,status,teams,technologies;
    
    try{
      coordinators = await promiseQuery("SELECT * FROM `pm_coordinator` ");
      departments = await promiseQuery('SELECT * FROM `higher_department` ');
      subDepartments = await promiseQuery('SELECT * FROM `sub_department` ');
      developers = await promiseQuery('SELECT * FROM `lead_developers` ');
      dg = await promiseQuery('SELECT * FROM `concern_dg` ');
      managers = await promiseQuery('SELECT * FROM `managers` '); 
      regions = await promiseQuery('SELECT * FROM `regions` ');
      ndp = await promiseQuery('SELECT * FROM `ndp_pc-1`');
      status = await promiseQuery('SELECT * FROM `status` ');
      teams = await promiseQuery('SELECT * FROM `teams` ');
      technologies = await promiseQuery('SELECT * FROM `technology` ');
    }catch(err){
     return  res.status(400).send(err.message);
    }
  
    
      let data = {
        coordinators:coordinators,
        departments:departments,
        subDepartments:subDepartments,
        developers:developers,
        dg:dg,
        managers:managers,
        ndp:ndp,
        regions:regions,
        status:status,
        teams:teams,
        technologies:technologies
      }
      res.status(200).send(data);

 });
  
  
  
 
  module.exports = router;


