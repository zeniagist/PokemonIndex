// declare variables
let pokemonList = [
  { name: 'Jigglypuff', height: 0.5, types: ['Fairy'] },
  { name: 'Eevee', height: 0.3, types: ['Field'] },
  { name: 'Snorlax', height: 2.1, types: ['Monster'] }
];

for (let i = 0; i < pokemonList.length; i++) {
  // print name and height
  document.write(
    pokemonList[i].name + " (height: " + pokemonList[i].height + ")"
  );
  // print message if height is past threshold
  if(pokemonList[i].height >= 1){
    document.write(" - Wow, that's big!");
  }
  document.write("<br>");
}