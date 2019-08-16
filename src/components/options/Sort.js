import Component from '../Component.js';

class Sort extends Component {

    renderHTML() {
        return /*HTML*/`
            <div>
                <h2>Sort The PokeDex</h2>
                <div>
                    <div>
                        <input type="radio" id="sort-name" name="sort-option" checked=true>
                        <label for="sort-name">Pokemon Name</label>
                    </div>
                    <div>
                        <input type="radio" id="sort-type" name="sort-option">
                        <label for="sort-type">Pokemon Type</label>
                    </div>
                    <div>
                        <input type="radio" id="sort-attack" name="sort-option">
                        <label for="sort-attack">Pokemon Attack</label>
                    </div>
                    <div>
                        <input type="radio" id="sort-defence" name="sort-option">
                        <label for="sort-defence">Pokemon Defence</label>
                    </div>
                </div>
            </div>
        `;
    }
}

export default Sort;