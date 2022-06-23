const errorHandler = (err, req, res, next) => {
  //if response status code === res.statuscode, set that else set status code to 500
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);

  res.json({
    message: err.message,
    stack: err.stack,
  });
};

module.exports = { errorHandler };
