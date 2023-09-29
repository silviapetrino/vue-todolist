
// Istruzioni:

// 1. Creare un markup statico in html/css;

// 2. Inizializzare Vue;

// 3. creare un array di oggetti che rappresentano le tasks;

// 4. stampo in pagina gli elementi del ciclo a condizione vi siano 

// 5. altrimenti stampo messaggio "non ci sono task";

// 6. utilizzo il v-model per monitorare il value di un input;

// 7. aggiungo un method che verrà attivato al click del bottone 



Descrizione:
Rifare l’esercizio della to do list fatto in classe.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

- text, una stringa che indica il testo del todo

- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

Bonus:
1- se il todo ha meno di 5 caratteri esporre un messaggio di errore

2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

3- eliminare il todo solo se è stato svolto, altrimenti esporre un messaggio di errore
____________________

