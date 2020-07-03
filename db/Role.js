// File consisting database related queries.

// DB ORM object which can be used to run required queries.
// eg: sequelize for POSTGREsql, mongoose for mongoDb

const { createRoles , deleteRole, findRole} = require('./queries/roles')

export default async function createRole(userObj){
  if(userObj){
    const result = await createRoles(userObj) // assuming we have .save() function which will run required queires to insert records in DB
    return result.then(data => { // Assuming we get a promise returned to us by DB save() function
      return data
    }).catch(err => {
      return new Error('DB Error', err)
    })
  }
}

export default async function remove(userObj){
  if(userObj){
    const result = await deleteRole(userObj) // assuming we have .delete() function which will run required queires to delete records in DB
    return result.then(data => { // Assuming we get a promise returned to us by DB delete() function
      return data
    }).catch(err => {
      return new Error('DB Error', err)
    })
  }
}

export default  async function findRoleById(roleId){
  if(roleId){
    const result = await findRole(roleId)
    return result.then(data => { // Assuming we get a promise returned to us by DB select() function
      return data
    }).catch(err => {
      return new Error('DB Error', err)
    })
  }
}

export default async function findRoleByName(name){
  if(name){
    const result = await findRole(name)
    return result.then(data => { // Assuming we get a promise returned to us by DB select() function
      return data
    }).catch(err => {
      return new Error('DB Error', err)
    })
  }
}

export default async function findRoleByUserName(userName){
  if(userName){
    const result = await findRole(userName)
    return result.then(data => { // Assuming we get a promise returned to us by DB select() function
      return data
    }).catch(err => {
      return new Error('DB Error', err)
    })
  }
}