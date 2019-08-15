import Component from '../Component.js';

class Sort extends Component {

    renderHTML() {
        return /*HTML*/`
            <div>
                <h2>Sort The PokeDex</h2>
                <div>
                    <div>
                        <label for="sort-name">Pokemon Name</label>
                        <input type="radio" id="sort-name" name="sort-option" checked=true>
                    </div>
                    <div>
                        <label for="sort-type">Pokemon Type</label>
                        <input type="radio" id="sort-type" name="sort-option">
                    </div>
                    <div>
                        <label for="sort-attack">Pokemon Attack</label>
                        <input type="radio" id="sort-attack" name="sort-option">
                    </div>
                    <div>
                        <label for="sort-defence">Pokemon Defence</label>
                        <input type="radio" id="sort-defence" name="sort-option">
                    </div>
                </div>
            </div>
        `;
    }
}

export default Sort;