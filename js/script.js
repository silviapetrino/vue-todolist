
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

    ],

      newTask : {
      text: " ",
      done: false
      },

      error: false,
      
      message: " ",


  }
 },

 methods: {

  addtask() {
    if (this.newTask.text.length <= 5) {
      this.error = true
      this.message = "inserisci almeno 5 lettere"
      setInterval( () => {
        this.message = " "
      }, 2000)
      
    }else {
      this.error = false
      this.tasks.unshift(this.newTask)
    }
  },

  removeTask(index) {
    this.tasks.splice(index, 1)
    },

  undoneTask() {
    this.message = "Errore! Devi ancora svolgere la task.";
    setInterval( () => {
      this.message = " "
    }, 2000)
  } 

  
 }


}).mount("#app")