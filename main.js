/*Nasa web aplikacia bude mat nasledujucu strukturu:
    - hlavna stanka (HomePage)
    - informacna stanka (AboutPage)
    - stanka s tiedamy (ClassesPage)
        - genericka (vyuziva parametre) podstranka pre jednu triedu (MyClassPage)
*/
//importy komponentov reprezentujucich jednotlive stranky nasej web aplikacie
import HomePage from "./components/pages/HomePage.js"
import AboutPage from "./components/pages/AboutPage.js"
import ClassesPage from "./components/pages/ClassesPage.js"
import MyClassPage from "./components/pages/MyClassPage.js"

import CardList from "./components/CardList.js"

const { createApp, ref, onMounted } = Vue;

//vytvorenie aplikacie
const app = createApp({
    components: { CardList },

    setup() {
        const movies = ref([]); // Reaktívne pole pre filmy

        // Funkcia na načítanie dát
        const fetchMovies = async() => {
            try {
                const response = await fetch('./data/films.json');
                movies.value = await response.json();
            } catch (error) {
                console.error("Chyba pri načítaní filmov:", error);
            }
        };
        onMounted(fetchMovies);
        return { movies }
    }
})

app.mount("#app")

// const { createRouter, createWebHistory } = VueRouter;

// //vytvorenie routes
// const routes = [{
//         path: "/",
//         component: HomePage
//     },
//     {
//         path: "/about",
//         component: AboutPage
//     },
//     {
//         path: "/classes",
//         component: ClassesPage
//     },
//     {
//         path: "/classes/:id", //takto specifikujeme parameter stranky s nazvom id v rámci jej zodpovedajucej cesty (/:nazov_parametra)
//         component: MyClassPage
//     },
// ]

// // const router = createRouter({
// //         history: createWebHistory(),
// //         routes
// //     }) !
// //     app.use(router)