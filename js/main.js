// // PALINDROMA
// const userRequest = prompt(
//   "Inserisci una parola per scoprire se è palindroma."
// );
// let reverseWord = "";
// console.log(userRequest);

// function isPalindrome() {
//   for (let i = userRequest.length - 1; i >= 0; i--) {
//     // console.log(userRequest[i]);
//     reverseWord += userRequest[i];
//     console.log(reverseWord);
//   }
//   if (userRequest === reverseWord) {
//     console.log("La parola è palindroma");
//   } else {
//     console.log("La parola non è palindroma");
//   }
// }

// isPalindrome();

// PARI E DISPARI

const userChoice = prompt("Scegli pari o dispari");
const userNumber = parseInt(prompt("Scegli un numero pari o dispari da 1 a 5"));
if (
  (userChoice !== "pari" && userChoice !== "dispari") ||
  isNaN(userNumber) ||
  userNumber < 1 ||
  userNumber > 5
) {
  console.log("Scelta non valida");
} else {
  function randomNumber() {
    const myNumber = Math.floor(Math.random() * 5) + 1;
    console.log(myNumber);
    let sum = myNumber + userNumber;
    console.log(sum);
    if (sum % 2 === 0 && userChoice === "pari") {
      console.log("Hai vinto");
    } else if (sum % 2 !== 0 && userChoice === "dispari") {
      console.log("Hai vinto");
    } else {
      console.log("Hai perso");
    }
  }

  randomNumber();
}
