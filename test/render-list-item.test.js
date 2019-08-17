import PokedexCard from '../src/components/pokedex/PokedexCard.js';

QUnit.module('Render PokedexCard');
const test = QUnit.test;

test('renders html from data', assert => {

    const pokemon = {
        pokemon: 'pikachu',
        url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
        type_1: 'Electric',
        type_2: 'NA',
        ability_1: 'static',
        ability_2: 'NA',
        ability_hidden: 'lightning-rod',
        attack: '55',
        defense: '40',
        color_1: '#F8D030',
        color_2: 'NA',
        egg_group_1: 'ground'
    };
    
    const expected = /*html*/`
    <li>
        <h3 id="li-name">pikachu</h3>
        <div id="type-section">
            <p id="li-type-1" style="background-color:#F8D030">Electric</p>
            <p id="li-type-2" style="background-color:NA">NA</p>
        </div>
        <img id="li-image" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="pikachu">
        <div id="card-info">
            <p id="egg-group">ground</p>
            <div>
                <p>static | NA | lightning-rod</p>
            </div>
            <div>
                <p>Attack: 55 pts | Defence: 40 pts</p>
            </div>
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