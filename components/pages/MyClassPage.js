import useClasses from "../../composables/useClasses.js";

const {ref} = Vue

//komponent sluziaci ako genericka (vyuziva parameter id) stranka MyClass pre každú triedu
const MyClassPage = {
    template: `
    <div>
        <!--pristupenie k parametru id cez cez globalnu premennú $route-->
        <h1>{{classes.find(item=>item.id==$route.params.id).className}}</h1>
        <p>There shoud be some basic information about class {{$route.params.id}}.</p>

        <input type="text" v-model="firstName">
        <input type="text" v-model="lastName">
        <button @click="addStudent({firstName,lastName},$route.params.id)">Add person</button>

        <div class="students-container">
            <div class="student" v-for="item of classes.find(item=>item.id==$route.params.id).students">
                <span class="first-name">{{item.firstName}}</span>
                <span class="last-name">{{ item.lastName}}</span>
            </div>
        </div>
        <pre>route: {{$route}}</pre>
    </div>
    `,
    setup(){
        //Volanie funkcie useClasses, navratovou hodnotou ktorej je objekt obsahujúci samotny globalny stav a jeho modifikačné funkcie
        //Pomocou dekonštrukcie si z tohto objektu vytiahnem len to čo potrebujem, v tomto prípade samotný stav a taktiež jeho modifikačnú funkciu
        const {classes, addStudent} = useClasses()
        const firstName = ref("")
        const lastName = ref("")
        
        //Aby som tento globany stav a jeho modifikačnú funkciu mohol používať v template musím ich expose-nuť
        return {
            classes,
            firstName,
            lastName,
            addStudent
        }
    }
}

export default MyClassPage;