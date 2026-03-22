//GLOBÁLNY STAV
//- slúži na zdieľanie jednej informácie medzi viacerými komponentmi alebo stránkami aplikácie bez nutnosti jej neustáleho odovzdávania cez props alebo emitovania udalostí. Tento prístup výrazne zjednodušuje architektúru aplikácie a robí kód prehľadnejším a ľahšie udržiavateľným.
//- g.s. štandardne umiestňujeme do samostatného priečinka composables, ktorý obsahuje opakovane použiteľnú logiku aplikácie. Názov súboru (skriptu) má štandardne tvar:
//                  use<NazovGlobalnehoStavu>
//- napr. usePersons.js, useAuth.js, useSettings.js.

//Každý globálny stav (composable) typicky obsahuje:

const {reactive} = Vue

//Pre inicializáciu globalneho stavu sa často používajú dáta fetchnuté zo servera. V našom prípade dáta ne-fetch-ujeme ide o tzv. MOCK DATA (tzv. Fake it till you make it prístup) 
const initialValue = [
            {
                id: 1,
                className: "III.C",
                teacher: "Novak",
                students: [
                    {
                        firstName: "Samo",
                        lastName: "Paly"
                    },
                    {
                        firstName: "Jakub",
                        lastName: "Paly"
                    },
                    {
                        firstName: "Lukáš",
                        lastName: "Paly"
                    }
                ]
            },
        {
                id: 2,
                className: "III.D",
                teacher: "Fekete",
                students: [
                    {
                        firstName: "Samo",
                        lastName: "Paly"
                    },
                    {
                        firstName: "Jakub",
                        lastName: "Paly"
                    },
                    {
                        firstName: "Lukáš",
                        lastName: "Paly"
                    }
                ]
            }
        ]

//Vytvorenie samotného stavu, najčastejšie pomocou ref() alebo reactive()
const classes = reactive(initialValue)

//Definovanie funkcií na modifikáciu stavu, ako:
//deletePersonById – odstráni záznam osoby na základe ID
//addNewPerson – pridá nový záznam osoby
function addStudent(student,classId){
    const idx = classes.findIndex(item=>item.id==classId)
    classes[idx].students.push(student)
}

//Definovanie funkcie s názvom use<NázovStavu>, ktorej návratovou hodnotou je objekt obsahujúci:
//- samotný globálny stav
//- funkcie na jeho čítanie alebo modifikáciu
function useClasses(){
    return {
        classes,
        addStudent
    }
}

//Na záver sa táto funkcia exportuje
export default useClasses

//Použitie globálneho stavu v komponentoch
//V komponente, kde chceme globálny stav použiť, stačí:
//- Importovať funkciu use<NázovStavu>
//- Zavolať ju
//- Pomocou dekonštrukcie si vybrať len tie časti (stav alebo funkcie), ktoré aktuálne potrebujeme