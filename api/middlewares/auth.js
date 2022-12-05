const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.autorization;

  console.log(req.headers);

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (!err) {
      next();
    } else {
      console.log("auth failed");
      return res.status(401).json({ tasks: "auth failed" });
    }
  });
};
