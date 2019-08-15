import Component from '../Component.js';

class Sort extends Component {

    renderHTML() {
        return /*HTML*/`
            <div>
                <div>
                    <label for="sort-name">Pokemon Name</label>
                    <input type="radio" id="sort-name" name="sort-name" checked=true>
                </div>
                <div>
                    <label for="sort-type">Pokemon Type</label>
                    <input type="radio" id="sort-type" name="sort-type">
                </div>
                <div>
                    <label for="sort-attack">Pokemon Attack</label>
                    <input type="radio" id="sort-attack" name="sort-attack">
                </div>
                <div>
                    <label for="sort-defence">Pokemon Defence</label>
                    <input type="radio" id="sort-defence" name="sort-defence">
                </div>
            </div>
        `;
    }
}

export default Sort;