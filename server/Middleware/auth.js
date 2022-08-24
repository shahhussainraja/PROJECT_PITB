const jwt = require("jsonwebtoken");

function auth(req,res,next){

 let token = req.header("Authorization");
 if (!token) return res.status(401);

 try {
    let user = jwt.verify(token,process.env.jwtKey);
    req.user = user;
  } catch (err) {
    res.status(401).send(err.message);
  }
 next();
}


module.exports = auth;