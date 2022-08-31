const e = require('express');
var express = require('express');
var router = express.Router();
const  db = require('../dbConnection');
const auth = require("../Middleware/auth")
const promiseQuery = require("../promiseQuery");


router.get('/projectStatus',auth,async(req,res)=>{
let status,total;
try{
   status =await promiseQuery("SELECT DISTINCT `Status` as name, COUNT(*) as data FROM `projectwiseresources` GROUP BY `Status`");
   totalProject =await promiseQuery("SELECT  COUNT(`Project`) as total FROM `projectwiseresources`");
   technology =await promiseQuery("SELECT  DISTINCT `Technology` as name,COUNT(`Technology`) as y FROM `projectwiseresources` GROUP BY `Technology`");
}catch(err){
   return res.status(400).send(err.message); 
}

let data =[];
data.push(status.find((e)=>e.name === 'In Development'));
data.push(status.find((e)=>e.name === 'Live & Continuous Development' ));
data.push(status.find((e)=>e.name === 'Live without Development'));
data.push(status.find((e)=>e.name === 'Closed'));


res.status(200).send({status:data,totalProject:totalProject[0].total,technology:technology });
})



  
  module.exports = router;


