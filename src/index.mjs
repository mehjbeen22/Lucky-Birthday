import "./styles.css";
import confetti from 'canvas-confetti';

const DateOFBirth = document.querySelector("#dateOfBirth");
const LuckyNumber = document.querySelector("#Lucky-number");
const Checkbutton = document.querySelector("#check-btn");
const Message = document.querySelector("#lucky-message")



Checkbutton.addEventListener("click", () => {
  const date = DateOFBirth.value;
  const luckySum = calculateSum(date);
  isYourBirthdaylucky(luckySum,LuckyNumber.value)

});

const calculateSum=(date) =>{ 
 const  newDate = date.replaceAll("-","");
 let sum = 0
 for (let i = 0; i < newDate.length; i++){
    sum = sum + Number(newDate[i]);
 }
 return sum;
}

const isYourBirthdaylucky = (luckysum ,luckyNumber)=>{
  if(luckysum % luckyNumber === 0){
    Message.innerHTML = "🥳Congrats Your Birthday is Lucky🥳 ";

  } else {
    Message.innerHTML = "😔Ups Your Birthday is Not lucky😔";
  }
}





// The Confetti Event Triggred

function triggerConfettiTop() {
  confetti({
    particleCount: 250,
    spread: 200,
    origin: { y: 0 },
    disableForReducedMotion: true,
  });
}

// Trigger the confetti effects at regular intervals
setInterval(triggerConfettiTop, 1000);    // Trigger from the top every 3 seconds


