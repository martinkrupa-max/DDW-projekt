//Import globalneho stavu
import useClasses from "../../composables/useClasses.js";

const ClassesPage = {
    template: `
    <div>
        <h1>Classes</h1>
        <router-link v-for="(c,idx) of classes" :key="idx" :to="'/classes/'+c.id">{{c.className}}</router-link>
        <router-view/>
        <pre>route path: {{$route.fullPath}}</pre>
    </div>
    `,
    setup(){
        //Volanie funkcie useClasses, navratovou hodnotou ktorej je objekt obsahujúci samotny globalny stav a jeho modifikácie
        //Pomocou dekonštrukcie si z tohto objektu vytiahnem len to čo potrebujem, v tomto prípade len samotný stav keďže v tomto komponente nedochádza k jeho modifikácii
        const {classes} = useClasses()
        
        //Aby som tento globany stav mohol používať v template musím ho expose-nuť
        return{
            classes
        }
    }
}

export default ClassesPage;
