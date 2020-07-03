// File consisting database related queries.

// DB ORM object which can be used to run required queries.
// eg: sequelize for POSTGREsql
const { saveUser, deleteUser, selectUser} = require('./queries/user')

export default async function createUser(userObj){
  if(userObj){
    const result = await saveUser(userObj) // assuming we have .save() function which will run required queires to insert records in DB
    return result.then(data => { // Assuming we get a promise returned to us by DB save() function
      return data
    }).catch(err => {
      return new Error('DB Error', err)
    })
  }
}

export default async function removeUser(userObj){
  if(userObj){
    const result = await deleteUser(userObj) // assuming we have .delete() function which will run required queires to delete records in DB
    return result.then(data => { // Assuming we get a promise returned to us by DB delete() function
      return data
    }).catch(err => {
      return new Error('DB Error', err)
    })
  }
}

export default  async function findUserById(userId){
  if(userId){
    const result = await selectUser(userId)
    return result.then(data => { // Assuming we get a promise returned to us by DB select() function
      return data
    }).catch(err => {
      return new Error('DB Error', err)
    })
  }
}

export default async function findUserByName(userName){
  if(userName){
    const result = await selectUser(userName)
    return result.then(data => { // Assuming we get a promise returned to us by DB select() function
      return data
    }).catch(err => {
      return new Error('DB Error', err)
    })
  }
}