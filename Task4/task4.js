const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");

button1.addEventListener("click", function1);
button2.addEventListener("click", function2);
button3.addEventListener("click", function3);
button4.addEventListener("click", function4);
button5.addEventListener("click", function5);

function function1() {
    const array = [];

    for (let i = 0; i <= 100; i++) {
        array.push(i);
    }

    for (let j = 0; j < array.length; j++) {
        if (array[j] % 3 === 0) {
            array.splice(j, 1);
            j--;
        }
    }

    console.log(array);
}
function function2() {
    const array2 = [];

    for (let i = 0; i < 100; i++) {
        array2.push(i);
    }

    for (let j = 100; j < 150; j++) {
       array2.push(j);   
    }

    console.log(array2);
}

function function3() {
    const array2 = [];

    for (let i = 0; i < 100; i++) {
        array2.push(i+3);}



    console.log(array2);
}
function function4() {
    const array2 = [];

    for (let i = 0; i < 100; i++) {
        array2.push(i);
    }

    for (let j = 20; j < 40; j++) {
        console.log(array2[j]);
    }

    
}
 function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

function function5() {
    const array2 = [];

    for (let i = 0; i < 100; i++) {
        array2.push(i);
    }
    shuffleArray(array2);

   
    console.log(array2);
    array2.reverse();
    console.log(array2);
}
