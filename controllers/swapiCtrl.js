const axios = require('axios')
let people = null

//use axios to get info to do stuff with 
axios
    .get('https://pokeapi.co/api/v2/pokemon')
    .then(res => {
        people = res.data
    })

    module.exports = {
        getStarWarsPeople: (req, res, next)=>{
        res.status(200).send(people)
        }
    }