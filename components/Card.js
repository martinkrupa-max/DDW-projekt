let card = {
    props: ["film", "removeFilm", "toggleFavorite", "isFavorite"],

    data() {
        return {
            expanded: false
        }
    },

    template: `
    <div class="movie-card">
        <div class="movie-image">
        <router-link :to="'/movie/' + film.filmTitle">
            <img :src="'./data/images/' + film.filmImage">
        </router-link>
            <span class="certificate">{{ film.filmCertificate }}</span>
        </div>

        <div class="movie-content">
            <div class="movie-header">
                <h2 class="title">{{ film.filmTitle }}</h2>
                <span class="release-year">{{ getYear(film.releaseDate) }}</span>
            </div>

            <div class="rating">
                <span class="stars">{{ "★".repeat(Number(film.stars)) }}</span>
            </div>

            <p class="description">
                {{ expanded 
                    ? film.filmDescription 
                    : film.filmDescription.slice(0, 120) + "..." }}
            </p>

            <button
                v-if="film.filmDescription.length > 120"
                @click="expanded = !expanded"
                class="btn-toggle-desc">
                {{ expanded ? "Show less" : "Show more" }}
            </button>

            <div class="movie-footer">
                <span class="price">€{{ film.filmPrice }}</span>

                <button
                    @click="toggleFavorite(film.filmTitle)"
                    class="btn-favorite">
                    {{ isFavorite(film.filmTitle) ? "★ Remove favorite" : "☆ Add favorite" }}
                </button>

                <button
                    v-if="removeFilm"
                    @click="removeFilm(film.filmTitle)"
                    class="btn-remove">
                    X
                </button>
            </div>
        </div>
    </div>
    `,

    methods: {
        getYear(dateString) {
            if (!dateString) return ""
            return new Date(dateString).getFullYear()
        }
    }
}

export default card