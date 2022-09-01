const e = require('express');
var express = require('express');
var router = express.Router();
const  db = require('../dbConnection');
const auth = require("../Middleware/auth")
const promiseQuery = require("../promiseQuery");


router.get('/projectStatus',auth,async(req,res)=>{
    let status,total, ndpPcCount,dgProjectCount,contractNdpCount,test;    
try{
   status =await promiseQuery("SELECT DISTINCT `Status` as name, COUNT(*) as data FROM `projectwiseresources` GROUP BY `Status`"); 
   totalProject =await promiseQuery("SELECT  COUNT(`Project`) as total FROM `projectwiseresources`");
   technology =await promiseQuery("SELECT  DISTINCT `Technology` as name,COUNT(`Technology`) as y,COUNT(`Technology`) as actualValue FROM `projectwiseresources` GROUP BY `Technology`");
   ndpPcCount =await promiseQuery("select `Status`,NDP_PC, count(projectwiseresources.id) as totalProjects from projectwiseresources GROUP BY `Status`,NDP_PC");
   dgProjectCount=await promiseQuery("SELECT `Concerned_DG`,`NDP_PC`, count(`projectwiseresources`.`id`) as totalProjects from `projectwiseresources` GROUP BY `Concerned_DG`,`NDP_PC`");
    contractNdpCount =await promiseQuery("SELECT DISTINCT `NDP_PC` as name, COUNT(projectwiseresources.id) as data FROM `projectwiseresources` GROUP BY `NDP_PC`");
    
    
}catch(err){
    return res.status(400).send(err.message);  
}   

let statusBox =[];
statusBox.push(status.find((e)=>e.name === 'In Development'));
statusBox.push(status.find((e)=>e.name === 'Live & Continuous Development' ));
statusBox.push(status.find((e)=>e.name === 'Live without Development'));
statusBox.push(status.find((e)=>e.name === 'Closed'));


//getting values for specific formate for Dg Project Column Chart
let arr1=[];
for(let i=0 ;i< dgProjectCount.length ;i++){
     let dum =[0,0];
    if(arr1.some(item =>item.name === dgProjectCount[i].Concerned_DG)!==true){
        if(dgProjectCount[i].NDP_PC === "NDP"){
            let  name = dgProjectCount[i].Concerned_DG;
            dum[0]=dgProjectCount[i].totalProjects;
            dgProjectCount.map((e)=>{
           if( e.Concerned_DG === name ){
               if(e.NDP_PC !=="NDP"){
                   dum[1]+=e.totalProjects;
               }
           }
        
        });
    arr1.push({name:name,data:dum})
    }
}

}



//getting values for specific formate for Status wise project bar graph
let arr2=[];
for(let i=0 ;i< ndpPcCount.length ;i++){
     let dum =[0,0];
    if(arr2.some(item =>item.name === ndpPcCount[i].Status)!==true){
        if(ndpPcCount[i].NDP_PC === "NDP"){
            let  name = ndpPcCount[i].Status;
            dum[0]=ndpPcCount[i].totalProjects;
            ndpPcCount.map((e)=>{
            if( e.Status === name ){
               if(e.NDP_PC !=="NDP"){
                   dum[1]+=e.totalProjects;
               }
           }
        });
    arr2.push({name:name,data:dum})
    }
}

}

//getting values for specific formate for 3D Donut Chart for NPC/PC1 Pojects
let ndpPieData =[{
    name:'Projects',
    data:[]
}]
for (let i = 0; i < contractNdpCount.length; i++) {
    ndpPieData[0].data.push([contractNdpCount[i].name,contractNdpCount[i].data]);
}

   res.status(200).send({statusBox:statusBox,
                        totalProject:totalProject[0].total,
                        technologyChart:technology,
                        dgBarChart:arr1,
                        statusBarChart:arr2,
                        ndpPieData:ndpPieData});




    


})



  
  module.exports = router;


