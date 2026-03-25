import card from "./components/card.js"
import filterBar from "./components/filterBar.js"
import useFilms from "./composables/useFilms.js"
import navbar from "./components/navbar.js"
import HomePage from "./components/pages/HomePage.js"
import FavMoviesPage from "./components/pages/FavMoviesPage.js"
import AboutPage from "./components/pages/AboutPage.js"

const { createApp, reactive, onMounted } = Vue
const { createRouter, createWebHashHistory } = VueRouter

const App = ({
    components: {
        card,
        filterBar,
        navbar
    },

    setup() {
        const { films, fetchFilms, ensureFilmsLoaded, addFilm, removeFilmByTitle, toggleFavorite, isFavorite } = useFilms()

        const filters = reactive({
            search: "",
            certificates: [],
            stars: "",
            sortBy: "default"
        })

        function updateFilters(newFilters) {
            filters.search = newFilters.search
            filters.certificates = [...newFilters.certificates]
            filters.stars = newFilters.stars
            filters.sortBy = newFilters.sortBy
        }

        function resetFilters() {
            filters.search = ""
            filters.certificates = []
            filters.stars = ""
            filters.sortBy = "default"
        }

        function getCertificates() {
            return [...new Set(films.map(film => film.filmCertificate))]
        }

        function getFilteredFilms() {
            let result = [...films]

            if (filters.search.trim() !== "") {
                result = result.filter(film =>
                    film.filmTitle.toLowerCase().includes(filters.search.toLowerCase())
                )
            }

            if (filters.certificates.length > 0) {
                result = result.filter(film =>
                    filters.certificates.includes(film.filmCertificate)
                )
            }

            if (filters.stars !== "") {
                result = result.filter(film =>
                    Number(film.stars) === Number(filters.stars)
                )
            }

            if (filters.sortBy === "title-asc") {
                result.sort((a, b) => a.filmTitle.localeCompare(b.filmTitle))
            }

            if (filters.sortBy === "title-desc") {
                result.sort((a, b) => b.filmTitle.localeCompare(a.filmTitle))
            }

            if (filters.sortBy === "price-asc") {
                result.sort((a, b) => Number(a.filmPrice) - Number(b.filmPrice))
            }

            if (filters.sortBy === "price-desc") {
                result.sort((a, b) => Number(b.filmPrice) - Number(a.filmPrice))
            }

            if (filters.sortBy === "year-asc") {
                result.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate))
            }

            if (filters.sortBy === "year-desc") {
                result.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
            }

            return result
        }

        onMounted(fetchFilms)

        return {
            films,
            filters,
            ensureFilmsLoaded,
            addFilm,
            updateFilters,
            resetFilters,
            getCertificates,
            getFilteredFilms,
            removeFilmByTitle,
            toggleFavorite,
            isFavorite

        }
    }





})

const routes = [{
        path: "/",
        component: HomePage
    },
    {
        path: "/favorites",
        component: FavMoviesPage
    },
    {
        path: "/about",
        component: AboutPage
    },
    // {
    //     path: "/movie/:title",
    //     component: MovieDetailPage
    // }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


createApp(App).use(router).mount("#app")