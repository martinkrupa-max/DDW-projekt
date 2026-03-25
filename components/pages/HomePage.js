import card from "../card.js";
//komponent sluziaci ako stranka Home
const HomePage = {
    props: ["getFilteredFilms", "toggleFavorite", "isFavorite", "removeFilm"],
    components: {
        card
    },
    template: `
    <div>
        <div class="movie-grid">
            <card v-for="film in getFilteredFilms()" :key="film.filmTitle" :film="film" :remove-film="removeFilm" :toggle-favorite="toggleFavorite" :is-favorite="isFavorite">
            </card>
        </div>
    </div>
    `,
}

export default HomePage;