import Component from '../Component.js';
import Header from './Header.js';

class App extends Component {
    onRender(dom) {
        const header = new Header();
        const headerDom = header.renderDOM();
        dom.prepend(headerDom);
    }

    renderHTML() {
        return /*HTML*/`
            <div>
                <main>
                    <section id="search-by"></section>
                    <section id="sort-by"></section>
                    <section id="pokedex-list"></section>
                </main>
            </div>
        `;
    }
}
export default App;