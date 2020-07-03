const routes = require('express').Router()

// Get all roles, roleByID, roleByName
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'success' });
})

routes.post('/create', (req, res) => {
  const params = req.query

  const result = permissionController.createPermissions(params)
  res.status(200).json({ params, message: 'Role created successfully' });
})


module.exports = roleRoutes
