import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*HTML*/`
            <header>
                <img src="http://pngimg.com/uploads/pokeball/pokeball_PNG30.png" alt="A Poke Ball">
                <h1>The PokeDex</h1>
            </header>
        `;
    }
}
export default Header;