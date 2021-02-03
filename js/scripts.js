let pokemonRepository = (function (){
  // declare variables
  let repository = [];
  let pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
  let modalContainer = document.querySelector("#modal-container");

  // Add pokemon to array
  function add(pokemon) { repository.push(pokemon); }    

  // return pokemon list
  function getAll() { return repository; }

  // add styling for pokemon list
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemon-btn");
    // show details of pokemon name
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
    // create list item button for each pokemon
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }
  
  // show details
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
          console.log(pokemon);          
        });
    }

  // load pokemon list
  function loadList() {
    return fetch(pokemonUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  // load pokemon details
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.other.dream_world.front_default;
      item.height = details.height;
      item.types = [];
      details.types.forEach(function (pokemonType) {
          item.types.push(pokemonType.type.name);
      });
      item.abilities = [];
      details.abilities.forEach(function (pokemonAbility) {
      item.abilities.push(pokemonAbility.ability.name);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }

  // return functions
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };  
}());

// populate pokemon list
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});