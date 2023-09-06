const fetch = require('node-fetch');

exports.handler = async function () {
  const POKE_API = 'https://pokeapi.co/api/v2/pokedex/kanto';
  const response = await fetch(POKE_API);
  const data = await response.json();

  // every serverless function returns an object
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
