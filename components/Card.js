let card = {
    props: ["film", "removeFilm", "toggleFavorite", "isFavorite"],

    template: `
    <div class="movie-card">
        <div class="movie-image">
            <img :src="'./data/images/' + film.filmImage" :alt="film.filmTitle">
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

            <p class="description">{{ film.filmDescription }}</p>

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