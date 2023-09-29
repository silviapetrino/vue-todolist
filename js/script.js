
// Istruzioni:

// 1. Creare un markup statico in html/css;

// 2. Inizializzare Vue;

// 3. creare un array di oggetti che rappresentano le tasks;



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
 }


}).mount("#app")