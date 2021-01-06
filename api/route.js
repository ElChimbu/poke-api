const express = require('express');
const PokemonService = require('./pokemon.service')
const app = express();

app.get('/:id', async (req, res) =>{
    const name = req.params.id
    const api = await PokemonService.getPokemon(name)
    return res.status(200).json(api)
})

module.exports = app