import Component from '../Component.js';
import Header from './Header.js';
import PokedexList from '../pokedex/PokedexList.js';
const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';




class App extends Component {
    onRender(dom) {
        let props;
        const header = new Header();
        const headerDom = header.renderDOM();
        dom.prepend(headerDom);

        fetch(URL)
            .then(response => response.json())
            .then(pokemonList => {
                props = { pokemon: pokemonList };
                const pokedexList = new PokedexList(props);
                const pokedexListDOM = pokedexList.renderDOM();
                dom.appendChild(pokedexListDOM);
            })
            .catch(err => {
                console.error('fetch error:', err);
            });

     
    }

    renderHTML() {
        return /*HTML*/`
            <div>
                <main>
                    <section id="search-by"></section>
                    <section id="sort-by"></section>
                    <section id="pokedex-list"></section>
                </main>
            </div>
        `;
    }
}
export default App;