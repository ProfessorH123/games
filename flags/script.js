const FLAGS = 
    [
        {
          source: "../flags/flag/algeria.png",
          reponce: "algeria",
        },
        {
          source: "../flags/flag/argentina.png",
          reponce: "argentina",
        },
        {
          source: "../flags/flag/austria.png",
          reponce: "austria",
        },
        {
          source: "../flags/flag/brazil.png",
          reponce: "brazil",
        },
        {
          source: "../flags/flag/france.png",
          reponce: "france",
        },
        {
          source: "../flags/flag/germany.png",
          reponce: "germany",
        },
        {
          source: "../flags/flag/india.png",
          reponce: "india",
        },
        {
          source: "../flags/flag/kazakhstan.png",
          reponce: "kazakhstan",
        },        {
          source: "../flags/flag/leichtenstein.png",
          reponce: "leichtenstein",
        },
        {
          source: "../flags/flag/malawi.png",
          reponce: "malawi",
        },
        {
          source: "../flags/flag/moroco.png",
          reponce: "moroco",
        },
        {
          source: "../flags/flag/muritania.png",
          reponce: "mauritania",
        },
        {
          source: "../flags/flag/palau.png",
          reponce: "palau",
        },
        {
          source: "../flags/flag/palestine.png",
          reponce: "palestine",
        },
        {
          source: "../flags/flag/panama.png",
          reponce: "panama",
        },
        {
          source: "../flags/flag/russia.png",
          reponce: "russia",
        },
        {
          source: "../flags/flag/somalia.png",
          reponce: "somalia",
        },
        {
          source: "../flags/flag/spain.png",
          reponce: "spain",
        },
        {
          source: "../flags/flag/trinand.png",
          reponce: "trinand",
        },
        {
          source: "../flags/flag/tunisia.png",
          reponce: "tunisia",
        },
        {
          source: "../flags/flag/turkey.png",
          reponce: "turkey",
        },
        {
          source: "../flags/flag/ucraine.png",
          reponce: "ucraine",
        }
    ];
// Audio
var music = new Audio('../flags/wolf-blood.mp3');
function musique()
{
    music.play()
}

// time cout down
let time = 10
setInterval(()=>
{
    time --;
    if(time >= 0)
        {
            document.querySelector(".timer").innerHTML = time;
        }
if(time === 0)
{
    GetRandomFlag()
}    

}, 1000);

// variables
var hidden = document.querySelector(".hidden");
var inpArea = document.querySelector(".inputs");
var I = document.querySelector(".image");
var btn = document.querySelector("button");
var WIN = []
var answer;
// Events
document.addEventListener("keydown" , () => {hidden.focus()})
btn.addEventListener("click" , GetRandomFlag)
hidden.addEventListener("input", PlayGame);
hidden.addEventListener("input", musique);
hidden.addEventListener("keyup", (event) => {
  if (event.keyCode === 32) {
      GetRandomFlag();
  }
});
document.getElementById("clear").addEventListener("click" , ()=>{localStorage.clear()})

// random flag
function GetRandomFlag()
{
    restart()
    
    let R = FLAGS[Math.floor(Math.random() * FLAGS.length)];
    // get the length of answer
    answer = R.reponce;
    let im = R.source;
    I.innerHTML = `<img src ="${im}" >`
      // creaet inputs
  let inputs = "";
  for (let i = 0; i < answer.length; i++) {
    inputs += `<input type="text" disabled class ="square"></input>`;
  }
  inpArea.innerHTML = inputs;
}
GetRandomFlag()

function PlayGame(c)
{
    let char = c.target.value.toLowerCase();
    if(answer.includes(char))
    {
        for (let i = 0; i < answer.length; i++)
        {
          //  add char in poisiton and cheack poisiton is found or no
          if (answer[i] === char && !inpArea.querySelectorAll("input")[i].value)
          {
            inpArea.querySelectorAll("input")[i].value = char;
            WIN.push(char);
          }
        }
    }
    hidden.value = "";
  // winner
  if (WIN.length === answer.length)
  {
    document.querySelector(".timer").classList.add('r');
    document.querySelector(".timer").innerHTML = `you win`
    if (localStorage.score) {
        localStorage.score = Number(localStorage.score)+1;
      } else {
        localStorage.score = 1;
      }
    document.querySelector("span").innerHTML = `Score : ${localStorage.score}<br>`
    WIN = [];
    time =""
}
}
// Restart
function restart() {
    time =11;
}