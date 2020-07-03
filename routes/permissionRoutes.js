const routes = require('express').Router()
const permissionController = require('../controllers/PermissionsController')

// Get all Permissions, PermissionsByID, PermissionsByName
routes.get('/', (req, res) => {
  const data = res.data
  res.status(200).json({ result: data, message: 'success' });
})

routes.post('/create', (req, res) => {
  const params = req.query

  const result = permissionController.createPermissions(params)
  const data = result.data
  res.status(200).json({ result: data, message: 'success' });
})

routes.delete('/', (req, res) => {
  const params = req.query

  const result = permissionController.createPermissions(params)
  res.status(200).json({ result: result.data, message: 'Record deleted successfully' });
})

module.exports = routes
