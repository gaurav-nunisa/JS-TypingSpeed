let atEnd;
let sentence = "The wild brown fox jumps over the lazy dog";
let count = 0;
let indexNum = 0;
const displayText = document.querySelector("#display-text");
const WPMText = document.getElementById("WPM")

function WPM(wordsTyped, timeTaken) {
  return (wordsTyped * 12) / timeTaken;
   
}

// function timer(status) {
//   setInterval(() => {
//     if (status == false) {
//       count++;
//       timertext.textContent = count;
//     }
//   }, 2000);
//   return count;
// }

const startTimer = new Date()
function updateTime(){
  const currentTime = new Date()
  elapsedtime = Math.floor((currentTime - startTimer) / 1000)
  timertext.textContent = elapsedtime;
  const wpm = WPM(123, elapsedtime)
  WPMText.textContent = wpm
}
setInterval(updateTime, 1000)

function updateDisplay() {
  const sentenceArray = sentence.split("");
  const isWorng = false;

  const HighlightedText = sentenceArray
    .map((chr, index) => {
      if (index === indexNum) {
        if (isWorng) {
          `<span class="red-hl">${chr}</span>`;
        } else {
          return `<span class="highlight">${chr}</span>`;
        }
      }

      return chr;
    })
    .join("");

  displayText.innerHTML = HighlightedText;
}

var typedCheck = document.addEventListener("keydown", (event) => {
  if (event.key == "shift" || event.key == "CapsLock") {
    indexNum = indexNum;
  }
  if (indexNum > 0) {
    atEnd = false;
  } else if(event.key === sentence[sentence.length - 1] && indexNum === sentence.length - 1){
     atEnd = true
   }
  // else if (indexNum === sentence.length) {
  //   atEnd = true;
  // }

  console.log(event.key + " : " + indexNum);

  if (event.key === sentence[indexNum]) {
    isWrong = false;
    indexNum++;
  } else {
    isWrong = true;
    console.log("Wrong letter, please press " + sentence[indexNum]);
  }
  updateDisplay();



  // timer(atEnd);
});

function checkbutton() {
  console.log(elapsedtime);
}
let timertext = document.getElementById("timertext");




