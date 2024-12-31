import { animation } from "./assets/animation.js";

animation()  // animation call


/**
 *  Internal Game Logic
 */

const enterBtn = document.querySelector("#enterBtn");
const userInput = document.querySelector("#userInput");

let numberArray = [];

// Responses
const firstResponse = document.querySelector("#firstResponse");
const secondResponse = document.querySelector("#secondResponse");
const thirdResponse = document.querySelector("#thirdResponse");
const fourthResponse = document.querySelector("#fourthResponse");
const fifthResponse = document.querySelector("#fifthResponse");
const finalResult = document.querySelector("#finalResult");

function computedNumber(userResponse) {
  return 99 - userResponse;
}

enterBtn.addEventListener("click", () => {
  let userResponse = Number(userInput.value);
  console.log(userResponse);

  if (userResponse < 100 && userResponse > 9) {
    if (numberArray.length == 0) {
      numberArray.push(userResponse);
      firstResponse.innerText = numberArray[0];

      setTimeout(() => {
        finalResult.innerText = 200 + numberArray[0] - 2;
      }, 500);
    } else if (numberArray.length == 1) {
      numberArray.push(userResponse);
      secondResponse.innerText = numberArray[1];

      setTimeout(() => {
        numberArray.push(computedNumber(userResponse));
        thirdResponse.innerText = numberArray[2];
      }, 500);
    } else if (numberArray.length == 3) {
      numberArray.push(userResponse);
      fourthResponse.innerText = numberArray[3];

      setTimeout(() => {
        numberArray.push(computedNumber(userResponse));
        fifthResponse.innerText = numberArray[4];
      }, 500);
    }
  } else {
    alert("PLEASE ENTER APPROPRIATE NUMBER!");
  }

  console.log(numberArray);

  userInput.value = 0;

  setTimeout(() => {
    if (numberArray.length == 5) {
      restartBtn.style.display = "flex";
    }
  }, 3000);
});

const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", () => {
  location.reload();
});
