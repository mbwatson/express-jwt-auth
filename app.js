const express = require('express')
const userRouter = require('./routers/user')

const PORT = process.env.AUTH_PORT || 3001

require('./db/db')

const app = express()

app.use(express.json())
app.use(userRouter)

app.listen(PORT, () => {
    console.log(`Auth server listening on port ${ PORT }...`)
})
