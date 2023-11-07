const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  if (!req.headers['authorization']) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const token = req.headers['authorization'].split(' ')[1];
    console.log(token);
    jwt.verify(token, process.env.LOCALKEY, function (error, data) {
      if (error) {
        return res.status(404).json({ status: 'Invalid token, authorization denied' });
      }
      req.user = data;
      console.log(req.user.id)
      next();
    });
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = validateToken;
