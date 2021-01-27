let pokemonRepository = (function (){
  // declare variables
  let pokemonList = [
    { name: 'Jigglypuff', height: 0.5, types: ['Fairy'] },
    { name: 'Eevee', height: 0.3, types: ['Field'] },
    { name: 'Snorlax', height: 2.1, types: ['Monster'] }
  ];

  pokemonList.forEach(function(pokemon){
    // print name and height
    document.write(pokemon.name + " (height: " + pokemon.height + ")");
    // print message if height is past threshold
    if(pokemon.height >= 1){
      document.write(" - Wow, that's big!");
    }
    document.write("<br>");
  });
}());