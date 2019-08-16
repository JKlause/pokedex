import Component from '../Component.js';

class PokedexCard extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;
        return /*html*/`
            <li style="background-color:${pokemon.color_1}>
                <h3 id="li-name">${pokemon.pokemon.toUpperCase()}</h3>
                <img id="li-image" src="${pokemon.url_image}" alt="${pokemon.pokemon.toUpperCase()}">
                <div id="li-data">
                    <p id="li-type-1">Type: ${pokemon.type_1}</p>
                    <p id="li-type-2">Type: ${pokemon.type_2}</p>
                    <p id="li-attack">Attack Points: ${pokemon.attack} points</p>
                    <p id="li-defence">Defence Points: ${pokemon.defense} points</p>
                </div>
            </li>
        `;
    }
}

export default PokedexCard;