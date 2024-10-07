console.log("Welcom to tic tac teo");
let gamestop=false;

let turn="X";

//function
const changeturn=()=>{
   if(turn=="X"){
   return "O";
   }else{
   return "X";
   }
}

//check win
const win=()=>{
   let boxtext=document.getElementsByClassName('boxtext')
let wins=[
   [0,1,2, -11, -5, 90],
   [3,4,5, -11, 5, 90],
   [6,7,8, -11, 15, 90],
   [0,3,6, -21, 5, 0],
   [1,4,7, -11, 5, 0],
   [2,5,8, -1, 4, 0],
   [0,4,8, -11, 5.5, 135],
   [2,4,6, -11, 5.5, 45],
]
wins.forEach(e=>{
   if((boxtext[e[0]].innerText==boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText==boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText!="")){
      document.querySelector('.info').innerText=boxtext[e[0]].innerText  + " won "
      gamestop=true
      document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="35vh";
      document.querySelector(".line").style.transform=`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      document.querySelector('.line').style.height="300px";
   }
})
}

//game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
   let boxtext=element.querySelector('.boxtext')
   element.addEventListener('click',()=>{
      if(boxtext.innerText==''){ 
         boxtext.innerText=turn;
         turn = changeturn();
         win();
         if(!gamestop){
         document.getElementsByClassName("info")[0].innerText = " turn for  " + turn;
         }
      }
      })
})


  //reset button
  reset.addEventListener('click',()=>{
   let boxtext=document.querySelectorAll('.boxtext');
   Array.from(boxtext).forEach(element=>{
      element.innerText = "";
      document.querySelector('.line').style.height="0px";
      document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0vh";
   });
   turn="X";
   gamestop=false;
   if(!gamestop){
      document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
      }
  })
