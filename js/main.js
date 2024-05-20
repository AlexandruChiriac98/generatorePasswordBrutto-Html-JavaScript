const nome = prompt('inserisci nome');
const cognome = prompt('inserisci cognome');
const colorePreferito = prompt('inserisci colore preferito');
const annoNascita = prompt('inserisci anno di nascita');
const annoCorrente = 2024;

const nomeCompleto = nome + ' ' + cognome;
const eta = annoCorrente - annoNascita;
const password = nome + cognome + colorePreferito + eta;

console.log('Ciao, come va? ' + nomeCompleto)
console.log('Questa è la tua password: ' + password)

const h2nomeUtente = document.getElementById('nome-utente');
h2nomeUtente.innerHTML = nomeCompleto;
const h3shyttiPassword = document.getElementById('shitty-password')
h3shyttiPassword.innerHTML = password;