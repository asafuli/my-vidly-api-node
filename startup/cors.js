const cors = require("cors");

module.exports = function(app) {

  let corsOptions = {
    credentials: true, 
    origin: true
  }
  //app.options('/me', cors(corsOptions));
  app.use(cors(corsOptions));
};
