let pokemonRepository = (function (){
  // declare variables
  let repository = [];
  let pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';

  // Add pokemon to array
  function add(pokemon) { repository.push(pokemon); }    

  // return pokemon list
  function getAll() { return repository; }

  // add styling for pokemon list
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    // change button to pokemon name
    button.innerText = pokemon.name;
    // add class to pokemon button
    button.classList.add("button-class");
    // show details of pokemon name
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
    // create list item button for each pokemon
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
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
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  // show details
  function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        console.log(pokemon);
      });
    }

  // return functions
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };  
}());

// populate pokemon list
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});