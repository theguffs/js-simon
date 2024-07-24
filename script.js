let generatedNumbers = [];
let timer; // variabile per il timer

// genera 5 numeri casuali 
function displayRandomNumbers() {
    const numbersDiv = document.getElementById('numbers');
    generatedNumbers = []; // Reset della lista dei numeri
    for (let i = 0; i < 5; i++) {
        generatedNumbers.push(Math.floor(Math.random() * 100) + 1);
    }
    numbersDiv.innerHTML = generatedNumbers.join(', ');
    console.log("Numeri generati:", generatedNumbers);
}

// nasconere i numeri
function hideNumbers() {
    document.getElementById('numbers').innerHTML = '';}

// richiede all'utente di inserire 5 numeri e li confronta con quelli vecchissimi
function promptAndCheckNumbers() {
    let userNumbers = [];
    for (let i = 0; i < 5; i++) {
        userNumbers.push(parseInt(prompt("Inserisci un numero che hai visto:"), 10));
    }
    console.log("Numeri inseriti dall'utente:", userNumbers);

    let correctNumbers = userNumbers.filter(num => generatedNumbers.includes(num));
    console.log(`Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers.join(', ')}`);
}

// avvia il timer e gestsce il tutto
function start() {
    displayRandomNumbers();
    let timeLeft = 30;
    const timerDiv = document.getElementById('timer');
    timerDiv.innerHTML = timeLeft;

    // resetta il timer esistente
    if (timer) {
        clearInterval(timer);
    }

    timer = setInterval(() => {
        timeLeft--;
        timerDiv.innerHTML = timeLeft;


        if (timeLeft <= 0) {
            clearInterval(timer);
            hideNumbers();
            promptAndCheckNumbers();
        }
    }, 1000);
}

// resetta i numeri
function resetNumbers() {
    displayRandomNumbers(); // genera nuovi numeri
    hideNumbers(); // nasconde i numeri vecchi
}



