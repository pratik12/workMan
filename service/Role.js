// RoleService is responsible to make the data ready to be passed onto the database layer.
// RoleService returns the result to the controllers.
const { createRole, remove } = require('../db/Role')
const { createPermission, remove } = require('../db/Permission')

export function createRole({roleName, roleDescription, permissionsObj}){

    // check for existingRole

    if(Role.exists){
      return { data: role, message: "record already exist", status: 201 } 
    }

    // else create a new role instance and save it to database
    const newRole = create({roleName, roleDescription})
    

    for(permission in options[permissions]){
      // now loop here for permissions and create the permissions records.
      const newPermissions = createPermission(permission)
    }

    // try saving the Role in database.
    // This will be enclosed in a Promise based architecture where we will wait for the promise to be finished.

    return new Promise((reject, resolve) => {
      resolve(data)
    })
}

export function removeRole(roleId){
    // To maintain the integrity of this operation, the following steps should be followed

  // Based on roleName retrieve the role Object
  const result = remove()
  // Loop through the permissions associated with this role record
  // delete the association between the permissions and role record.
  // Make sure the permissions themselves do not get deleted from Permissions Table as these permissions could be shared
  // by another role.
  // now its safe to delete the role.

  for(permission in roleObject){
    // now loop here for permissions and delete the permissions records from `PermissionRoles` Table.
    const permissions = removePermission(permission)
  }

  // Now delete the role object from the database.

  return new Promise((reject, resolve) => {
    resolve(data)
  })
}
