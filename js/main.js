// Dichiarazione variabili

let firstName;
let lastName;
let favColour;
let password;



// Nome dell'utente
firstName = prompt("Inserisci il tuo nome:");
console.log(firstName);

// Cognome dell'utente
lastName = prompt("Inserisci il tuo Cognome:");
console.log(lastName);

// Colore preferito
favColour = prompt("Inserisci il tuo colore preferito:");
console.log(favColour);

// Risultato
password = firstName + lastName + favColour +21;
console.log(password);


document.getElementById("pass").innerHTML = password;
