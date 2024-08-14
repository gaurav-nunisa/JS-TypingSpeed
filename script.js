let atEnd; // DEPRECIATED
let count = 0 //WORDS COUNT PRESSED
let sentence = "The wild brown fox jumps over the lazy dog"; //SENTENCE
let copysentence = sentence
let indexNum = 0; //INDEX FOR IDENTIFYING THE LETTER USED FOR COMAPRING WITH THE KEY PRESSED
const displayText = document.getElementById("display-text")//DISPLAYING THE SENTENCE PARAGRAPH
const WPMText = document.getElementById("WPM")

function WPM(wordsTyped, timeTaken) {
  return Math.floor((wordsTyped * 12) / timeTaken);
   
}


//CODE FOR TIMER AND CALCULATING WPM AND ASSIGNING IT TO TEXTCONTENT
const startTimer = new Date()
function updateTime(textCount){
  const currentTime = new Date()
  elapsedtime = Math.floor((currentTime - startTimer) / 1000)

  timertext.textContent = "Time in Seconds : "+elapsedtime;

  const wpm = WPM(textCount,elapsedtime)
  WPMText.textContent = "Word Per Minute : "+wpm
} 


const setIntervalID = setInterval(() => updateTime(count), 1000)


//CODE FOR HIGHLIGHTING
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
//CODE FOR TYPING AND CHECKING IF THE CORRECT KEY IS BEING PRESSED,CALULATING INDEX STOPPING TIMER AND RETURINING COUNT  
var typedCheck = document.addEventListener("keydown", (event) => {
  if (event.key == "shift" || event.key == "CapsLock") {
    indexNum = indexNum;
  }
  
  if(indexNum == sentence.length-1){
    indexNum = indexNum
    clearInterval(setIntervalID)
    
  }
  if (indexNum > 0) {
    //atEnd = false;
  } else if(event.key === sentence[sentence.length - 1] && indexNum === sentence.length - 1){
     //atEnd = true
   }


  console.log(event.key + " : " + indexNum);

  if (event.key === sentence[indexNum]) {
    isWrong = false;
    indexNum++;
    count++
    console.log("this is count" + count)
  } else {
    isWrong = true;
    console.log("Wrong letter, please press " + sentence[indexNum]);
  }
  updateDisplay();
  return count



  // timer(atEnd);
});

//CODE FOR CHECKING VALUES
function checkbutton() {
  console.log(count)
}
//CODE FOR TIMER PARAGRAPH
let timertext = document.getElementById("timertext");
updateDisplay();





