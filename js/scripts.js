let pokemonRepository = (function (){
  // declare variables
  let repository = [
    { name: 'Jigglypuff', height: 0.5, types: ['Fairy'] },
    { name: 'Eevee', height: 0.3, types: ['Field'] },
    { name: 'Snorlax', height: 2.1, types: ['Monster'] }
  ];
  // Add pokemon to array
  function add(pokemon) { repository.push(pokemon); }  
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
    button.addEventListener('click', function showDetails() {
      console.log(pokemon.name);
    });
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }
  // return pokemon list
  function getAll() { return repository; }
  // return functions
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };  

}());

// add pokemon to pokemon list
pokemonRepository.add({ name: 'Pikachu', height: 0.4, types: ['Field', 'Fairy'] });
// populate pokemon list
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});