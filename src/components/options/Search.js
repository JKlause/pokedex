import Component from '../Component.js';

class Search extends Component {

    renderHTML() {
        return /*HTML*/`
            <div>
                <h2>Search The PokeDex</h2>
                <form id="search-form">
                    <h3>Search By</h3>
                    <select id="search-type">
                        <option value="name">Name</option>
                        <option value="type">Type</option>
                        <option value="attack">Minimum Attack Points</option>
                        <option value="defence">Minimum Defense Points</option>
                    </select>
                    <input id="user-search" name="user-search" input="text"></input>
                    <button>Search the PokeDex</button>
                </form>
            </div>
        `;
    }
}

export default Search;