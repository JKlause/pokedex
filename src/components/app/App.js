import Component from '../Component.js';
import Header from './Header.js';
import PokedexList from '../pokedex/PokedexList.js';
import Search from '../options/Search.js';
import Sort from '../options/Sort.js';
import { getPokemon } from '../../services/pokemon-api.js';
import Paging from '../options/Paging.js';
import hashStorage from '../../services/hash-storage.js';



class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDom = header.renderDOM();
        dom.prepend(headerDom);

        const searchField = new Search();
        const searchFieldDOM = searchField.renderDOM();
        const searchBySection = dom.querySelector('#search-by');
        searchBySection.appendChild(searchFieldDOM);
            
        const sortField = new Sort();
        const sortFieldDOM = sortField.renderDOM();
        const sortBySection = dom.querySelector('#sort-by');
        sortBySection.appendChild(sortFieldDOM);

        const paging = new Paging();
        searchBySection.appendChild(paging.renderDOM());

        const pokedexList = new PokedexList({ pokemon: [] });
        const pokedexListDOM = pokedexList.renderDOM();
        const pokedexOnPage = dom.querySelector('#pokedex-list');
        pokedexOnPage.appendChild(pokedexListDOM);

        function loadPokemon() {
            const options = hashStorage.get();
            getPokemon(options)
                .then(pokemonList => {
                    const pokemon = pokemonList.results;
                    const totalCount = pokemonList.count;
                    pokedexList.update({ pokemon: pokemon });
                    paging.update({
                        totalCount: totalCount,
                        currentPage: +options.page
                    });
                });
        }
        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();
        });
    }
        

    renderHTML() {
        return /*HTML*/`
            <div>
                    <section id="search-by"></section>
                    <section id="sort-by"></section>
                    <section id="pokedex-list"></section>
            </div>
        `;
    }
}
export default App;