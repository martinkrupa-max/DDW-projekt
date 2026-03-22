# Opakovanie

# Materialy
* https://vuejs.org/guide/quick-start.html
* https://router.vuejs.org/guide/
* https://vuejs.org/guide/reusability/composables.html


# Vzorovy priklad
1. Nezabudnite premenovat vsetky jss subory na js.
2. Spustite a preklikaj si stranku. 
3. Prezrite si kod s poznamkami a taktiez prilozenymi linkami.

# Samostatna praca
Keďže som si všimol, že práca s poľom a jeho metódami je pre vás stále pomerne ťažká na opakovanie som si pripravil nasledujúce úlohy. Pri ich riešení mate zakázané používať štandardné iteratívne konštrukcie ako while, for, možete využívať len metódy poľa!

Tu sú dáta
const classes = [
  {
    id: 1,
    name: "1.A",
    teacher: "Ján Novák",
    students: [
      { id: 1, name: "Adam", grade: 2 },
      { id: 2, name: "Beáta", grade: 1 },
      { id: 3, name: "Cyril", grade: 3 }
    ]
  },
  {
    id: 2,
    name: "2.B",
    teacher: "Petra Malá",
    students: [
      { id: 4, name: "Daniel", grade: 1 },
      { id: 5, name: "Eva", grade: 2 }
    ]
  },
  {
    id: 3,
    name: "3.C",
    teacher: "Ján Novák",
    students: [
      { id: 6, name: "Filip", grade: 3 },
      { id: 7, name: "Gabriela", grade: 1 }
    ]
  }
]

1. Vytvor pole, ktoré bude obsahovať iba názvy tried.
2. Vytvor pole objektov v tvare: 
    {   
        className: "1.A", 
        teacher: "Ján Novák"
    }
3. Vytvor pole tried, ktoré učí Ján Novák.
4. Získaj všetkých študentov, ktorí majú známku 1. (Výsledok má byť pole študentov nie tried.)
5. Zisti celkový počet študentov vo všetkých triedach.
6. Vytvor objekt, kde kľúč je meno učiteľa a hodnota je počet tried, ktoré učí.
Výsledok:
    {
        "Ján Novák": 2,
        "Petra Malá": 1
    }
7. Vypočítaj priemernú známku všetkých študentov.
8. Získaj všetkých študentov, zotrieď ich podľa známky vzostupne a vráť len ich mená.
9. Zisti, ktorá trieda má najlepší priemer známok.
