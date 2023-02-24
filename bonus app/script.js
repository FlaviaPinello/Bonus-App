// Endpoint che restituisce i 10 utenti in archivio:
// https://jsonplaceholder.typicode.com/users (Installa se già non l’hai fatto l’estensione di
// Google Chrome JSON Formatter che trovi qui).
// Consiglio: Gli utenti (oggetti dell’array) che riceverai NON hanno la proprietà “età”. Ti
// consiglio di fare in modo di creare per ogni oggetto un nuovo campo (puoi utilizzare il map) e
// di chiamarlo “age”. Questo campo dovrà contenere un numero compreso nel range tra 18 e
// 82 anni.
// Layout
// Bisogna prevedere un layout diviso in 3 fasce:
// - La pagina avrà un titolo in alto con testo “Fasce Bonus”;
// - Sotto ci saranno 3 fasce/blocchi:
// - Il primo blocco conterrà il nome, il numero di telefono e l’età di coloro che hanno tra
// i 18 e i 35 anni;
// - Il secondo blocco conterrà il nome, il numero di telefono e l’età di coloro che hanno
// tra i 36 e i 64 anni anni;
// - Il terzo e ultimo blocco conterrà il nome, il numero di telefono e l’età di coloro che
// hanno oltre i 64 anni.
// Riporta per ogni blocco un titolo che ne definisce i contenuti:
// Per esempio il primo blocco potrebbe avere titolo “Utenti con età compresa tra i 18 e i 35
// anni” con sotto gli utenti che rientrano nel blocco.
// Importante: potrebbe succedere che una fascia non abbia nessun utente in quel range di
// età. In quel caso mostrare un semplice messaggio “Nessun utente rientra in questi requisiti
// di età”.
// Extra richiesta
// - Si potrebbe inserire un form per il cambio dell’età di un utente? Attenzione però, se
// viene cambiata l’età di un utente, se questo non rientra più in quella fascia di
// appartenenza bisognerà spostarlo nella sezione dove rientra la sua età.
// Esempio pratico per la richiesta sopra:
// - Al click su una card utente si apre una modal. Qui si potrà modificare l’età tramite un
// input di testo.. Ipotizziamo che l’età presente è 34 anni. Se la cambio in 45 l’utente
// non sarà più visibile sul blocco 18-35 ma sarà visibile su quello 36-64.



import {users} from "./mocks.js";

import { qS, qSA, cE, ageCardGen} from "./utils.js";

const bodyEl= qS ('body');
const youngEl = qS('.young');
const midiEl = qS('.midi');
const oldEl = qS('.old');

const cardListEl = cE('div');


let usersProperties = users.map(user=> {
    let properties = {
      "name": user.name,
      "phone": user.phone,
      "year":user.year,
      "age":"young"
    };
    if (user.year >=18 ){
      properties['age'] = "young";
    }
    if (user.year >= 36){
      properties['age'] = "midi";
    }
    if (user.year >= 64){
        properties['age'] = "old";
      }
      if (user.year <= 17){
        properties['age'] = "Nessun utente rientra in questi requisiti di età";
        alert( "Nessun utente rientra in questi requisiti di età");
      }
    return properties;
   });
   console.log(usersProperties);


   const filteredUsers = usersProperties.filter(user=> user.age === "midi");
   console.log (filteredUsers);

   const filtertwo = usersProperties.filter(user=> user.age === "young");
   console.log (filtertwo);

   
   const filterthree = usersProperties.filter(user=> user.age === "old");
   console.log (filterthree);


    filtertwo.forEach(user =>{
    youngEl.append(ageCardGen(user))
   } );

   filteredUsers.forEach(user =>{
    midiEl.append(ageCardGen(user))
   } );
   filterthree.forEach(user =>{
    oldEl.append(ageCardGen(user))
   } );

bodyEl.appendChild(cardListEl);






