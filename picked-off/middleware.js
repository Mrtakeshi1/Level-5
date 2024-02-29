function middleware(req, res, next) {
    req.customProperty = "This is a custom property added by middleware.";
    next();
  }
  
  module.exports = middleware;
  