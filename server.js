const express = require('express')
const PORT = 4001
const ctrl = require('./controllers/controllers')
const swapiCtrl = require('./controllers/swapiCtrl')

const app = express()

app.use(express.json())

app.get('/api/test', ctrl.test)
app.get('/api/users', ctrl.getAllUsers)
app.post('/api/users', ctrl.addUser)
app.put('/api/users/:id', ctrl.updateUser)
app.delete('api/users/:id', ctrl.deleteUser)

//SWAPI endpoints
app.get('/api/swapi', swapiCtrl.getStarWarsPeople)

app.listen(PORT, ()=> console.log(`listening on ${PORT}`))