// const fetch = require('node-fetch');

// 2 default params are passed with serverless functions!
// We'll use those for passing a region
// 1. event 2. context
// These are variables attached to serverless functions that we get information on. We can then use them inside our serverless functions.

exports.handler = async function (event, context) {
  const eventBody = JSON.parse(event.body);
  const POKE_API = `https://pokeapi.co/api/v2/pokedex/` + eventBody.region;

  // this will pass the body of our request, in this case the region. And the method too.
  console.log(event);

  const response = await fetch(POKE_API);
  const data = await response.json();

  // every serverless function returns an object
  return {
    statusCode: 200,
    body: JSON.stringify({ pokemon: data.pokemon_entries }),
  };
};
