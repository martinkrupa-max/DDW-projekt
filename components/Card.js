let card = {
    props: ["film", "removeFilm"],

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
                <button class="btn-buy">Rent Movie</button>
                <button @click="removeFilm(film.filmTitle)" class="btn-remove">X</button>
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