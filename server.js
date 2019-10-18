const express = require('express')
const PORT = 4001
const ctrl = require('./controllers/controllers')
// const 

const app = express()

app.use(express.json())

app.get('/api/test', ctrl.test)
app.get('/api/users', ctrl.getAllUsers)
app.post('/api/users', ctrl.addUser)
app.put('/api/users/:id', ctrl.updateUser)

app.listen(PORT, ()=> console.log(`listening on ${PORT}`))