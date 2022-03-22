const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express()

const { MONGO_USERNAME, MONGO_PASSWORD } = process.env

mongoose.connect(
  `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.ojdwd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
)

mongoose.connection.once('open', () => {
  console.log('connected to database')
})

app.use(cors())
app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }))

app.listen(4000, () => {
  console.log('Server is running on port 4000')
})
