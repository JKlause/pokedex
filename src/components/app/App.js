import Component from '../Component.js';
import Header from './Header.js';
import PokedexList from '../pokedex/PokedexList.js';
import Search from '../options/Search.js';
import Sort from '../options/Sort.js';
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
        
        const searchField = new Search();
        const searchFieldDOM = searchField.renderDOM();
        const searchBySection = dom.querySelector('#search-by');
        searchBySection.appendChild(searchFieldDOM);
            
        const sortField = new Sort();
        const sortFieldDOM = sortField.renderDOM();
        const sortBySection = dom.querySelector('#sort-by');
        sortBySection.appendChild(sortFieldDOM);
    }

    renderHTML() {
        return /*HTML*/`
            <div>
                <main>
                    <section></section>
                        <h2>Search The PokeDex</h2>
                        <div id="search-by"></div>
                    <section></section>
                        <h2>Sort The PokeDex</h2>
                        <div id="sort-by"></div>
                    <section id="pokedex-list"></section>
                </main>
            </div>
        `;
    }
}
export default App;