import Component from '../Component.js';
import hashStorage from '../../services/hash-storage.js';

class Search extends Component {

    onRender(form) {
        let searchForm = form.querySelector('#search-form');
        searchForm.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(searchForm);
            const search = formData.get('user-search');
            hashStorage.set({
                search: search,
                page: 1
            });
        });
        
        const input = form.querySelector('input');

        window.addEventListener('hashchange', () => {
            input.value = hashStorage.get().search || '';
        });
    }

    renderHTML() {

        const search = hashStorage.get().search || '';
        return /*HTML*/`
            <div>
                <h2>Search The PokeDex</h2>
                <div>
                    <form id="search-form">
                        <h3>Search By</h3>
                        <select id="search-type">
                            <option value="name">Name</option>
                            <option value="type">Type</option>
                            <option value="attack">Min Attack Points</option>
                            <option value="defence">Min Defense Points</option>
                        </select>
                        <input id="user-search" name="user-search" input="${search}"></input>
                        <button>Search the PokeDex</button>
                    </form>
                </div>
            </div>
        `;
    }
}

export default Search;