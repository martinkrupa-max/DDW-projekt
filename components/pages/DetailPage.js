const DetailPage = {
    props: ["films", "toggleFavorite", "isFavorite"],

    template: `
        <div v-if="film" class="detail-page">
            <div class="detail-header">
                <img 
                    :src="'../../data/images/' + film.filmImage"
                    :alt="film.filmTitle"
                    class="detail-image"
                >

                <div class="detail-info">
                    <h1>{{ film.filmTitle }}</h1>

                    <p><strong>Year:</strong> {{ getYear(film.releaseDate) }}</p>
                    <p><strong>Certificate:</strong> {{ film.filmCertificate }}</p>
                    <p><strong>Price:</strong> €{{ film.filmPrice }}</p>

                    <p class="stars">
                        {{ "★".repeat(Number(film.stars)) }}
                    </p>

                    <button
                        @click="toggleFavorite(film.filmTitle)"
                        class="btn-favorite">
                        {{ isFavorite(film.filmTitle)
                            ? "★ Remove favorite"
                            : "☆ Add favorite"
                        }}
                    </button>
                </div>
            </div>

            <div class="detail-description">
                <h2>Description</h2>
                <p>{{ film.filmDescription }}</p>
            </div>

        </div>

        <div v-else>
            <h2>Film not found</h2>
        </div>
    `,

    setup(props) {
        const route = VueRouter.useRoute()

        const film = props.films.find(f =>
            f.filmTitle === route.params.title
        )

        function getYear(dateString) {
            if (!dateString) return ""
            return new Date(dateString).getFullYear()
        }

        return {
            film,
            getYear
        }
    }
}

export default DetailPage