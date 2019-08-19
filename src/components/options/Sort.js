import Component from '../Component.js';

class Sort extends Component {

    renderHTML() {
        return /*HTML*/`
            <div>
                <h2>Sort The PokeDex</h2>
                <div>
                    <div>
                        <input type="radio" id="sort-name" name="sort-option" value="pokemon" checked=true>
                        <label for="sort-name">Name</label>
                    </div>
                    <div>
                        <input type="radio" id="sort-type" name="sort-option" value="type">
                        <label for="sort-type">Type</label>
                    </div>
                    <div>
                        <input type="radio" id="sort-eggGroup" name="sort-eggGroup" value="eggGroup">
                        <label for="sort-attack">Egg Group</label>
                    </div>
                    <div>
                        <input type="radio" id="sort-attack" name="sort-option" value="attack">
                        <label for="sort-attack">Attack</label>
                    </div>
                    <div>
                        <input type="radio" id="sort-defense" name="sort-option" value="defense">
                        <label for="sort-defence">Defense</label>
                    </div>
                </div>
            </div>
        `;
    }
}

export default Sort;