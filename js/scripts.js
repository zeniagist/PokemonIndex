// declare variables
let pokemonList = [
  { name: 'Jigglypuff', height: 0.5, types: ['Fairy'] },
  { name: 'Eevee', height: 0.3, types: ['Field'] },
  { name: 'Snorlax', height: 2.1, types: ['Monster'] }
];

// print name and height
for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + " (height: "+ pokemonList[i].height + ")<br>");
}