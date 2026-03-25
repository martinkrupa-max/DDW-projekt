const { reactive } = Vue

// globálny stav pre filmy
const films = reactive([])

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
}

// odstránenie filmu podľa indexu
function removeFilmByIndex(index) {
    if (index >= 0 && index < films.length) {
        films.splice(index, 1)
    }
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
        removeFilmByIndex,
        getFilmByTitle,
        updateFilmByTitle
    }
}

export default useFilms