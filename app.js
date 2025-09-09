// Function declaration
// console.log(Summ());

// function Summ() {
//     return 'Function declaration'
// }
// function Greating(firstName = "Putin") {
//     return `Salom mening ismim ${firstName}`
// }
// console.log(Greating());
// console.log(Greating("Tramp"));
// console.log(Greating("Bunyod"));

// function Summ(a = 1, b = 1) {
//     return a + b
// }
// console.log(Summ(10, Summ(5, 4)));

// Function expration
// const Summ = function () {
//     return 'Function expration'
// }

// console.log(Summ());

// Arrow function - () => {}

// const Arrow = (a, b) => { return a + b }
// console.log(Arrow(3, 4));

const RandomNumber = function (min = 180, max = 255) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// rgb(20, 82, 20);
const RandomColor = function (r = RandomNumber(), g = RandomNumber(), b = RandomNumber()) {
    return `rgb(${r}, ${g}, ${b})`
}

// const colors = ['red', 'yellow', 'green']


// setInterval(() => {
//     document.querySelector('body').style.background = RandomColor()
// }, 1000);
// let i = 0

// setInterval(() => {
//     document.querySelector('body').style.background = colors[i]
//     i++
//     if (i == 3) i = 0
// }, 1000);

console.log(RandomColor());

const lights = document.querySelectorAll('.light');
const timers = document.querySelectorAll('.timer');
const sequence = [
    { index: 0, duration: 5 }, // red (5 sekund)
    { index: 1, duration: 2 }, // yellow (2 sekund)
    { index: 2, duration: 5 }, // green (5 sekund)
    { index: 1, duration: 2 }, // yellow (2 sekund)
];

let step = 0;
let timeLeft = sequence[step].duration;
let intervalId;

function updateLights() {
    lights.forEach((light, i) => {
        light.classList.toggle('active', i === sequence[step].index);
        timers[i].textContent = i === sequence[step].index ? timeLeft : '';
    });
}

function nextStep() {
    step = (step + 1) % sequence.length;
    timeLeft = sequence[step].duration;
    updateLights();
}

function tick() {
    updateLights();
    intervalId = setInterval(() => {
        timeLeft--;
        updateLights();
        if (timeLeft === 0) {
            nextStep();
        }
    }, 1000);
}

tick();