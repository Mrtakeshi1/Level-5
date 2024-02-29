function itemsMiddleware(req, res, next) {
  console.log("THE ITEMS MIDDLEWARE WAS EXECUTED ");
  next();
}


module.exports = itemsMiddleware;