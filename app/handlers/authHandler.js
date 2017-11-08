const passport = require('passport');
const config = require('../../config');

function login(req, res, next) {
  // If the user is already logged in, log out first
  if (req.user) {
    req.logout();
  }

  // Always use LDAP Strategy - add Local Strategy based on configuration
  const strategies = ['ldapauth'];
  if (config.get('auth.useLocalStrategy')) {
    strategies.push('local');
  }

  passport.authenticate(strategies)(req, res, (err) => {
    if (err) {
      next(err);
    } else {
      res.json(req.user);
    }
  });
}

function logout(req, res) {
  req.logout();
  res.sendStatus(200);
}

function currentUser(req, res) {
  if (req.user) {
    res.json(req.user);
  } else {
    res.sendStatus(401);
  }
}

module.exports = {
  login,
  currentUser,
  logout
};
