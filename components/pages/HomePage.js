//komponent sluziaci ako stranka Home
const HomePage = {
    template: `
    <div>
        s<div class="movie-grid">
            <card v-for="film in getFilteredFilms()" :key="film.filmTitle" :film="film" :remove-film="removeFilmByTitle" :toggle-favorite="toggleFavorite" :is-favorite="isFavorite">
            </card>
        </div>
    </div>
    `
}

export default HomePage;