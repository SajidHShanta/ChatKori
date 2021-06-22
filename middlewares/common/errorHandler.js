const createError = require('http-errors');

//404-not found handler
function notFoundHandler(req, res, next){
  next(createError(404, "Your requested content is not found"));
}

//common error handler
function errorHaldler(err, req, res, next){
  res.locals.error = process.env.NODE_ENV === 'development' ? err : { message: err.message};
  res.status(err.startus || 500);

  if(res.locals.html){
    //html error response
    res.render('error', {
      title: "Error Page"
    });
  } else{
    //json error response
    res.json(res.locals.error);
  }
}

module.exports = {
  notFoundHandler,
  errorHaldler,
}
