const AddMoviePage = {
    props: ["addFilm"],

    template: `
    <div class="form-page">
        <h1>Add new movie 🎬</h1>

        <form @submit.prevent="submitForm" class="movie-form">

            <label>Title</label>
            <input v-model="film.filmTitle" required>

            <label>Description</label>
            <textarea v-model="film.filmDescription" required></textarea>

            <label>Release date</label>
            <input type="date" v-model="film.releaseDate" required>

            <label>Certificate</label>
            <select v-model="film.filmCertificate" required>
                <option>G</option>
                <option>PG</option>
                <option>PG-13</option>
                <option>R</option>
                <option>NC-17</option>
            </select>

            <label>Stars (1–5)</label>
            <input type="number" min="1" max="5"
                v-model="film.stars" required>

            <label>Price (€)</label>
            <input type="number" step="0.01"
                v-model="film.filmPrice" required>

            <label>Category</label>
            <input v-model="film.category">

            <label>Image</label>
            <input type="file"
                accept="image/*"
                @change="handleImageUpload">

            <div v-if="preview">
                <p>Preview:</p>
                <img :src="preview" class="preview-img">
            </div>

            <button type="submit" class="btn-submit">
                Add Movie
            </button>

        </form>
    </div>
    `,

    data() {
        return {
            preview: null,

            film: {
                filmTitle: "",
                filmDescription: "",
                releaseDate: "",
                filmCertificate: "",
                stars: 1,
                filmPrice: "",
                category: "",
                filmImage: ""
            }
        }
    },

    methods: {
        handleImageUpload(event) {
            const file = event.target.files[0]

            if (!file) return

            this.film.filmImage = file.name
            this.preview = URL.createObjectURL(file)
        },

        submitForm() {

            if (!this.film.filmTitle) return

            this.addFilm({...this.film })

            alert("Movie added successfully ✅")

            this.resetForm()
        },

        resetForm() {
            this.preview = null

            this.film = {
                filmTitle: "",
                filmDescription: "",
                releaseDate: "",
                filmCertificate: "",
                stars: 1,
                filmPrice: "",
                category: "",
                filmImage: ""
            }
        }
    }
}

export default AddMoviePage