import Component from '../Component.js';
import PokedexCard from './PokedexCard.js';

class PokedexList extends Component {

    onRender(dom) {
        const pokemon = this.props.pokemon;
        pokemon.forEach(pokemon => {
            const props = { pokemon: pokemon };
            const pokedexCard = new PokedexCard(props);
            const pokedexCardDOM = pokedexCard.renderDOM();
            dom.appendChild(pokedexCardDOM);
        });
    }

    renderHTML() {
        return /*HTML*/`
            <ul></ul>
        `;
    }
}

export default PokedexList;