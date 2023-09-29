
// Istruzioni:

// 1. Creare un markup statico in html/css;

// 2. Inizializzare Vue;

// 3. creare un array di oggetti che rappresentano le tasks;

// 4. stampo in pagina gli elementi del ciclo a condizione vi siano 

// 5. altrimenti stampo messaggio "non ci sono task";

// 6. utilizzo il v-model per monitorare il value di un input;

// 7. aggiungo un method che verrà attivato al click del bottone 



const { createApp } = Vue;

createApp ({

 data(){
  return{
    tasks: [
      {
        text: "Esercizi Boolean 0",
        done: false
      },
      {
        text: "Esercizi Boolean 1",
        done: false
      },
      {
        text: "Esercizi Boolean 2",
        done: false
      },
      {
        text: "Esercizi Boolean 3",
        done: false
      }

    ]
  }
 },

 methods: {

 }


}).mount("#app")