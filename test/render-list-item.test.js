import PokedexCard from '../src/components/pokedex/PokedexCard.js';

QUnit.module('Render PokedexCard');
const test = QUnit.test;

test('renders html from data', assert => {

    const pokemon = {
        pokemon: 'pikachu',
        url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
        type_1: 'Electric',
        type_2: 'N/A',
        attack: '55',
        defense: '40',
        color_1: '#F8D030'
    };
    
    const expected = /*html*/`
    <li style="background-color:#F8D030">
        <h3 id="li-name">PIKACHU</h3>
        <img id="li-image" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="pikachu">
        <div id="li-data">
            <p id="li-type-1">Type: Electric</p>
            <p id="li-type-2">Type: N/A</p>
            <p id="li-attack">Attack Points: 55 Points</p>
            <p id="li-defence">Defence Points: 40 Points</p>
        </div>
    </li>
`;

    // act
    const props = { pokemon: pokemon };
    const pokedexCard = new PokedexCard(props);
    const html = pokedexCard.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});