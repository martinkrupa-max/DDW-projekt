const { reactive } = Vue

// globálny stav pre filmy
const films = reactive([])
const favoriteTitles = reactive([])

// pomocný flag, aby sme nenačítavali rovnaké dáta stále dokola
let isLoaded = false

// načítanie filmov zo súboru films.json
async function fetchFilms() {
    try {
        const response = await fetch("./data/films.json")

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }

        const data = await response.json()

        // vymažeme staré dáta a vložíme nové
        films.splice(0, films.length, ...data)
        isLoaded = true
    } catch (error) {
        console.error("Chyba pri načítaní filmov:", error)
    }
}

// načíta filmy iba raz
async function ensureFilmsLoaded() {
    if (!isLoaded) {
        await fetchFilms()
    }
}

// pridanie nového filmu
function addFilm(newFilm) {
    films.push(newFilm)
}



// odstránenie filmu podľa názvu
function removeFilmByTitle(title) {
    const idx = films.findIndex(item => item.filmTitle === title)

    if (idx !== -1) {
        films.splice(idx, 1)
    }
    removeFromFavorites(title)
}

function addToFavorites(title) {
    if (!favoriteTitles.includes(title)) {
        favoriteTitles.push(title)
    }
}

function removeFromFavorites(title) {
    const index = favoriteTitles.findIndex(item => item === title)

    if (index !== -1) {
        favoriteTitles.splice(index, 1)
    }
}

function toggleFavorite(title) {
    if (favoriteTitles.includes(title)) {
        removeFromFavorites(title)
    } else {
        addToFavorites(title)
    }
}

function isFavorite(title) {
    return favoriteTitles.includes(title)
}

function getFavoriteFilms() {
    return films.filter(film => favoriteTitles.includes(film.filmTitle))
}

// nájdenie jedného filmu podľa názvu
function getFilmByTitle(title) {
    return films.find(item => item.filmTitle === title)
}

// úprava filmu podľa pôvodného názvu
function updateFilmByTitle(title, updatedFilm) {
    const idx = films.findIndex(item => item.filmTitle === title)

    if (idx !== -1) {
        films[idx] = {
            ...films[idx],
            ...updatedFilm
        }
    }
}

// composable funkcia
function useFilms() {
    return {
        films,
        fetchFilms,
        ensureFilmsLoaded,
        addFilm,
        removeFilmByTitle,
        toggleFavorite,
        isFavorite,
        getFavoriteFilms,
        getFilmByTitle,
        updateFilmByTitle
    }
}

export default useFilms