import card from "../card.js"
import useFilms from "../../composables/useFilms.js"

const { onMounted } = Vue

let FavMoviesPage = {
    components: {
        card
    },

    template: `
    <section class="fav-page">
        <h1>Favorite Movies</h1>

        <p v-if="getFavoriteFilms().length === 0">
            You have no favorite movies yet.
        </p>

        <div v-else class="movie-grid">
            <card
                v-for="film in getFavoriteFilms()"
                :key="film.filmTitle"
                :film="film"
                :toggle-favorite="toggleFavorite"
                :is-favorite="isFavorite">
            </card>
        </div>
    </section>
    `,

    setup() {
        const {
            films,
            fetchFilms,
            getFavoriteFilms,
            toggleFavorite,
            isFavorite
        } = useFilms()

        onMounted(fetchFilms)

        return {
            films,
            getFavoriteFilms,
            toggleFavorite,
            isFavorite
        }
    }
}

export default FavMoviesPage