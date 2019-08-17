import Component from '../Component.js';

class PokedexCard extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;
        return /*html*/`
            <li>
                <h3 id="li-name">${pokemon.pokemon}</h3>
                <div id="type-section">
                    <p id="li-type-1" style="background-color:${pokemon.color_1}">${pokemon.type_1}</p>
                    <p id="li-type-2" style="background-color:${pokemon.color_2}">${pokemon.type_2}</p>
                </div>
                <img id="li-image" src="${pokemon.url_image}" alt="${pokemon.pokemon}">
                <div id="card-info">
                    <p id="egg-group">${pokemon.egg_group_1}</p>
                    <div>
                        <p>${pokemon.ability_1} | ${pokemon.ability_2} | ${pokemon.ability_hidden}</p>
                    </div>
                    <div>
                        <p>Attack: ${pokemon.attack} pts | Defence: ${pokemon.defense} pts</p>
                    </div>
                </div>
            </li>
        `;
    }
}

export default PokedexCard;