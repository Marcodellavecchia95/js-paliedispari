// PALINDROMA
const userRequest = prompt(
  "Inserisci una parola per scoprire se è palindroma."
);
let reverseWord = "";
console.log(userRequest);

function isPalindrome() {
  for (let i = userRequest.length - 1; i >= 0; i--) {
    // console.log(userRequest[i]);
    reverseWord += userRequest[i];
    console.log(reverseWord);
  }
  if (userRequest === reverseWord) {
    console.log("La parola è palindroma");
  } else {
    console.log("La parola non è palindroma");
  }
}

isPalindrome();
