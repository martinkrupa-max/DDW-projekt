// 1. Najprv naimportuj dáta (ak máš nastavený bundler ako Vite/Webpack)
// Ak nemáš importy, vlož si sem: const movieData = [... tvoj JSON ...];
import Card from './Card.js'; // Predpokladáme, že Card je v tom istom priečinku

const CardList = {
    // 1. Priznáme komponent Card, aby sme ho mohli použiť v template
    components: {
        Card
    },
    // Používame spätné úvodzovky (backticks) pre viacriadkový string
    template: `
    <div class="movie-grid">
        <Card 
            v-for="movie in movies" 
            :key="movie.filmTitle" 
            :film="movie"
            :remove-film="removeMovie"
        />
    </div>
    `,
    props: ['movies'],
    setup(props, { emit }) {
        // Tu môžeš definovať funkciu na vymazanie, ak ju potrebuješ
        const removeMovie = (title) => {
            console.log("Mažem film:", title);
            // Tu by išla logika na odstránenie z poľa, ak by si chcel
        };

        return {
            removeMovie
        };
    }
};


export default CardList