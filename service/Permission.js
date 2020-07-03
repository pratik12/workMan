// Permissionervice is responsible to make the data ready to be passed onto the database layer.
// PermissionService returns the result to the controllers.

const { createPermissions, removePermissions, findPermission } = require('../db/Permission')

export function createPermission(permissionsObj){

    // try saving the permission in database.
    // This will be enclosed in a Promise based architecture where we will wait for the promise to be finished.

    const newPerm = createPermissions(permissionsObj)
    return new Promise((reject, resolve) => {
      resolve(data)
    })
}

export function removePermission(permId){
    // To maintain the integrity of this operation, the following steps should be followed

  // Based on permId retrieve the permission Object
  const permObj = findPermission(permId)

  // Loop through the permissions associated with this role record
  const result = removePermissions(permId)
  // Make sure the permissions themselves do not get deleted from Permissions Table as these permissions could be shared
  // by another role.
  // now its safe to delete the permission.
  
  for(permission in roleObject){
    // delete the association between the permissions and role record.
    // now loop here for permissions and delete the permissions records from `PermissionRoles` Table.
    const permissions = removePermission(permission)
  }


  return new Promise((reject, resolve) => {
    resolve(data)
  })
}