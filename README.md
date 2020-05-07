# UI_pattern

https://dakom0.github.io/UI_pattern/

-----

This is a Pokemon slider UI. This site allows a user to slide through each pokemon entry to learn more about each Pokemon.

The data is receoved from the Pokémon API, and where the information can be modeled to whatever keys you want from each object.

To get a Pokemon's information, the fetched data will be in the form: https://pokeapi.co/api/v2/pokemon/ {dex number}
Where dex number is the Pokemons specific ID.

Each time an arrow is clicked, the data from the API is:

- The Pokemon's sprite.
- The Pokemon's ID.
- The Pokemon's information.

An example of a response from a fetch for a Pokemon is:

      "flavor_text": "Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun’s rays,\nthe seed grows progressively larger.",
      "language": {
        "name": "en",
        "url": "https://pokeapi.co/api/v2/language/9/"
      }
    "name": "bulbasaur",
    "order": 1,
    "species": {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
    },
    "sprites": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    }
     