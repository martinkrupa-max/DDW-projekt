//Vytvorenie komponentu card, ktorý je reprezentovaný objektom s nasledujúcou štruktúrou:
let card = {
    //Vlastnosť template - uchováva logickú štruktúru komponentu vo forme stringu (kvazi HTML fragmet zodpovedajúci danému komponentu).
    template: `
    <div class="card">
        <span>{{film.name}}</span>
        <div>{{film.director}}</div>
        <button @click="removeFilm(film.id)">DELETE</button>
    <div>
    `,
    //Vlastnosť props - špecifikuje názvy custom atribútov komponentu.
    //Pozor! Pre využitú notáciu názvou atribútov platí rovnaké pravidlo ako pri notáciach názvov elementov (JS - Camelcase -> HTML - stick-notation)
    //Atribúty sprostredkujú komunikáciu parent -> child.
    props: ["film", "removeFilm"]
}

//Export vyvoreného komponentu.
export default card