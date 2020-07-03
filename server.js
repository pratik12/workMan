const express = require('express')
const app = express();
const bodyParser = require('body-parser')

const cors = require('cors')

const { roleRoutes, permissionRoutes} = require('./routes')

app.use(cors())

app.use('/permissions/', permissionRoutes)
app.use('/roles/', roleRoutes)

app.use(bodyParser.json())

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})