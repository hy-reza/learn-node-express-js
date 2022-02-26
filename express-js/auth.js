const auth = (req, res, next) => {
  const { user } = req.query;

  if (user) {
    console.info({
      status: "authorized",
      data: {
        name: user,
        hostname: req.hostname,
        ip: req.ip,
      },
    });

    next()
  }else{
      console.info('unauthorize')
      return res.status(401).end('UNAUTHORIZED')
    //   next()
  }
 
};

module.exports = auth;
