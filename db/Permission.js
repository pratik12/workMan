// similar structure and code structure as per ./Rol.js and ./User.js
// import the required queries from ./queries/permission

const { savePermissions, selectPermissions, deletePermissions} = require('./queries/permissions')

export default async function createPermissions(params){
  const result = await savePermissions(params)
  return result
}

export default async function removePermissions(params){
  const result = await deletePermissions()
  return result
}

export default async function findPermissions(params){
  const result = await selectPermissions(params)
  return result
}

export default async function findPermissionsById(params){
  const result = await selectPermissions(params)
  return result
}

export default async function findPermissionsByName(params){
  const result = await selectPermissions(params)
  return result
}