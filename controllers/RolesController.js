const {removeRole, createRole} = require('../service/Role')

export function create(options){
  // This destructing is a to provide na idea about how this endpoint will be consumed by the FRONT-END
  // the front end app will be sending in object containing `roleName, roleDescription, permissionsObj` information
  // Front end will also have to send in `permissionsObj` having the following information 
  // `permissionsName, permissionsDesc`
  const {roleName, roleDescription, permissionsObj} = options

  const result = createRole({roleName, roleDescription, permissionsObj})
  
  return result.then(data => data).catch(err => err)

}


export function remove(options){
  
  const { roleId } = options

  const result = removeRole(roleId)
  
  return result.then(data => data).catch(err => err)

}