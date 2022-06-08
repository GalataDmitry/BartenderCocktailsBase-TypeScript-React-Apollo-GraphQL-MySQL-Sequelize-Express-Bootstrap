const express = require('express')
const cors = require('cors')
require('dotenv').config()
const {graphqlHTTP} = require('express-graphql')
const schema = require('./graphqlSchema/schema')

const PORT: number | string = process.env.PORT || 5050
const app = express()
app.use(cors())

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))

app.listen(PORT, (error: string): void => error ?
    console.log('[---> server run error') :
    console.log(`server run on port ${PORT}`))
