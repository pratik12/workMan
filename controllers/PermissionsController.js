const PermissionsService = require('../service/Permission')

export function createPermissions(options){
  // This destructing is a to provide na idea about how this endpoint will be consumed by the FRONT-END
  // the front end app will be sending in object containing `permissionName, permissionDescription` information

  const result = PermissionsService.createPermission(option)
  
  return result.then(data => data).catch(err => err)

}


export function deletePermissions(options){
  const {permId} = options

  const result = PermissionsService.removePermission(permId)
  
  return result.then(data => data).catch(err => err)

}