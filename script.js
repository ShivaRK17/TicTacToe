console.log("Hello boiz");
let click = new Audio('click.wav')
let turn = 'X';

let gameover = false;
const changeturn = ()=>{ //to change turn constantly
    if(turn=='X'){
        return '0';
    }
    else{
        return 'X'
    }
}
// let player = prompt("What is Your name?\nYour Turn is "+turn)
// changeturn();
// let player2 = prompt("What is Your name?\nYour Turn is "+changeturn(turn))
// changeturn()

// function checkplayer(demo){
//     if(demo===turn){
//         return player;
//     }
//     else if(demo!==turn){
//         return player2;
//     }
// }


let play = document.getElementById('play')
play.addEventListener('click',()=>{
    document.querySelector('.start').style.visibility='hidden'
})


//function to check if you won
const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    let boxes=[0,1,2,3,4,5,6,7,8]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            gameover=true
            count=0
            document.querySelector('.turn').innerText = boxtext[e[0]].innerText + " Won";
            document.querySelector('.won').style.visibility="visible"
            document.querySelector('.won').style.background="url('minions.jpg')"
            document.querySelector('.won').innerText = boxtext[e[0]].innerText + " Won!\n";
            let boxtexts = document.querySelectorAll('.boxtext');
            Array.from(boxtexts).forEach(Element =>{
                Element.innerText="";
            })
        }
    })



    // boxes.forEach(e=>{
    //     if(( boxtext[e].innerText !="")){
    //         gameover=true
    //         document.querySelector('.turn').innerText = "Draw!";
    //         document.querySelector('.won').style.visibility="visible"
    //         document.querySelector('.won').innerText =" Draw!";
    //         let boxtexts = document.querySelectorAll('.boxtext');
    //         Array.from(boxtexts).forEach(Element =>{
    //             Element.innerText="";
    //         })
    //     }
    // })
}

//gamelogic
let count=0;


let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(Element =>{
    let boxtext = Element.querySelector('.boxtext')
    Element.addEventListener('click', ()=>{
        click.play()
        if (boxtext.innerText==='') {
            boxtext.innerText=turn;
            turn = changeturn()
            checkwin()
            count++;
            drawing();
            console.log(count);
            if(!gameover){
                document.getElementsByClassName('turn')[0].innerText="Turn for " + turn;
            }
        }
    })
})

const drawing=()=>{
if (count===9) {
    gameover=true
    document.querySelector('.turn').innerText = "Draw!";
    document.querySelector('.won').style.visibility="visible"
    document.querySelector('.won').style.background="url('draw.jpeg')"
    document.querySelector('.won').innerText =" Draw!";
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(Element =>{
        Element.innerText="";
    })
    count=0;
}
}

reset = document.getElementById('reset')

reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(Element =>{
        Element.innerText=""; 
        document.querySelector('.won').style.visibility="hidden"
        count=0;
        changeturn();
        document.getElementsByClassName('turn')[0].innerText="Turn for " + turn;
        gameover = false
    })
})
// reset.addEventListener('click',()=>{
//     document.querySelectorAll('.boxtext').innerText="";
// })
