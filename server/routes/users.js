var express = require('express');
var router = express.Router();
const  db = require('../dbConnection');
const jwt = require("jsonwebtoken");

router.post('/login',function(req, res) {

  let email = req.body.email;
  let password = req.body.password;
  
  // let sql = 'SELECT * FROM `users`  Where userName ='+username;
  db.query('SELECT * FROM users Where Email = ? AND Password = ?',[email,password],
    function(err, results) {
      if(err){
        console.log(err);
        res.status(400).send(err.message);  
        return ;
      }
      if(results.length == 0){
        console.log("Data Not found");
        res.status(400).send(false);
        return;
      }
      const payload ={
        id:results[0].id,
        email:results[0].Email
      }
      let token = jwt.sign(payload,process.env.jwtKey,{expiresIn: 30000000000000000});
      res.status(200).send(token);
    }
  );
});

module.exports = router;