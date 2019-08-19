const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export function getPokemon(options) {
    const page = options.page || 1;
    let search = options.search || '';
    let searchBy = options.searchBy || 'pokemon';

    const url = `${URL}?page=${page || 1}&${searchBy}=${search || ''}`;

    return fetch(url)
        .then(response => response.json())
       
        .catch(err => {
        // eslint-disable-next-line no-console
            console.error('fetch error:', err);
        });
        
}