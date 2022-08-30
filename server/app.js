//TO read enviroment variable 
require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require("./dbConnection");
const cors = require('cors')
var app = express();


//Now data base Connection wil come here
db.connect((err)=>{
  if(err){
      throw err;
  }
  console.log("MySQL is connected......")
})

//Server Router are here
var usersRouter = require('./routes/users');
var docsRouter = require("./routes/docsRoutes")
var managersRouter = require("./routes/MetaDataRoutes/managers")
var dgRouter = require("./routes/MetaDataRoutes/dg")
var developersRouter = require("./routes/MetaDataRoutes/developers")
var coordinatorsRouter = require("./routes/MetaDataRoutes/coordinators")
var departmentRouter = require("./routes/MetaDataRoutes/departments")
var subDepartmentRouter = require("./routes/MetaDataRoutes/subDepartments ")
var ndpRouter = require("./routes/MetaDataRoutes/ndp")
var technologyRouter = require("./routes/MetaDataRoutes/technologies")
var regionRouter = require("./routes/MetaDataRoutes/regions")
var statusRouter = require("./routes/MetaDataRoutes/status")
var teamRouter = require("./routes/MetaDataRoutes/teams")


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());



app.use('/', usersRouter);
app.use('/', docsRouter);
app.use('/', managersRouter);
app.use('/', dgRouter);
app.use('/', developersRouter);
app.use('/', coordinatorsRouter);
app.use('/', departmentRouter);
app.use('/', subDepartmentRouter);
app.use('/', ndpRouter);
app.use('/', technologyRouter);
app.use('/', regionRouter);
app.use('/', statusRouter);
app.use('/',teamRouter);


console.log("server is running on port 8080");
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
