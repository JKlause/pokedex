import Component from '../Component.js';

class Search extends Component {

    renderHTML() {
        return /*HTML*/`
            <form id="search-form">
                <select id="search-type">
                    <option value="name">Name</option>
                    <option value="type">Type</option>
                    <option value="attack">Minimum Attack Points</option>
                    <option value="defence">Minimum Defense Points</option>
                </select>
                <input id="user-search" name="user-search" input="text"></input>
        `;
    }
}

export default Search;