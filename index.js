//accesso al documento
//document.getElementById("count").innerText = 5

// bottone
let incrementt = 0
function increment() {
    incrementt += 1
    document.getElementById("count").innerText = incrementt //innerText restituisce il testo senza formattazione
}
let welcome 
welcome = document.getElementById("ciao")
welcome.textContent = "CONTEGGIO: " //textContent restituisce il testo con spazi e caratteri speciali come scritto lì
function save() {
    welcome.textContent = welcome.textContent + incrementt + " - "
    document.getElementById("count").innerText = 0
}
