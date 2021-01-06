const axios = require('axios');
const URI = 'https://pokeapi.co/api/v2/'

class PokemonService {
    constructor() {
      this.httpInstance = axios.default.create({
        baseURL: URI
      })
    }
  
    getPokemon(prop) {
      return this.httpInstance.get(`/pokemon/${prop}?`)
      .then(_ => _.data)
      .catch(err => console.log(err))
    }
  }
  
  module.exports = new PokemonService()