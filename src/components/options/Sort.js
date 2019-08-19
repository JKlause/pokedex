import Component from '../Component.js';
import hashStorage from '../../services/hash-storage.js';

class Sort extends Component {
    onRedner(form) {
        let sortForm = form.querySelector('#sort-form');
        sortForm.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(sortForm);
            const sort = formData.get('sort-options');

            hashStorage.set({
                sort: sort
            });
        });

        const input = form.querySelector('input');

        window.addEventListener('hashchange', () => {
            input.value = hashStorage.get().sort || '';
        });

    }
    renderHTML() {
        return /*HTML*/`
            <div>
                <h2>Sort The PokeDex</h2>
                <div>
                    <form id="sort-form">
                        <div>
                            <input type="radio" id="sort-name" name="sort-option" value="pokemon" checked=true>
                            <label for="sort-name">Name</label>
                        </div>
                        <div>
                            <input type="radio" id="sort-type" name="sort-option" value="type">
                            <label for="sort-type">Type</label>
                        </div>
                        <div>
                            <input type="radio" id="sort-eggGroup" name="sort-option" value="eggGroup">
                            <label for="sort-eggGroup">Egg Group</label>
                        </div>
                        <div>
                            <input type="radio" id="sort-attack" name="sort-option" value="attack">
                            <label for="sort-attack">Attack</label>
                        </div>
                        <div>
                            <input type="radio" id="sort-defense" name="sort-option" value="defense">
                            <label for="sort-defence">Defense</label>
                        </div>
                        <button>Sort the PokeDex</button>

                    </form>
                </div>
            </div>
        `;
    }
}

export default Sort;