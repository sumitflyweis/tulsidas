const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
//const SECRET = "demo@1234";
const custom = require("../src/model/commonLogin");

// Define user roles
const roles = {
    admin: 'admin',
    editor: 'editor',
    user: 'user'
  };
  
  // Middleware for role-based authentication
  const authorizeRole = (requiredRole) => {
    return (req, res, next) => {
      if (req.user.role === requiredRole) {
        next();
      } else {
        res.status(403).json({ error: 'Unauthorized' });
      }
    }
  };
  
  // Example route that requires admin authorization
  app.get('/admin', authorizeRole(roles.admin), (req, res) => {
    res.send('Hello Admin!');
  });
  
  // Example route that requires editor authorization
  app.get('/editor', authorizeRole(roles.editor), (req, res) => {
    res.send('Hello Editor!');
  });
  
  // Example route that requires user authorization
  app.get('/user', authorizeRole(roles.user), (req, res) => {
    res.send('Hello User!');
  });
  

  module.exports = { authentication, /*authorisation,*/ authorisationbyBId,/*authorisationbyBId_VENDOR*/ };