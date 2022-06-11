const express = require('express')
const cors = require('cors')
require('dotenv').config()
const {graphqlHTTP} = require('express-graphql')
const schema = require('./graphqlSchema/schema')
let _db = require('./models/index')

const PORT: number | string = process?.env?.['PORT'] || 5051
const app = express()
app.use(cors())

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))

app.listen(PORT, (error: any) => error ?
    console.log('[---> server run error', error) :
    console.log(`server run on port ${PORT}`)
)
_db.sequelize.authenticate()
    .then(() => console.log('db successfully connected'))
    .catch((error: any) => console.log(`connect error${error}`))
