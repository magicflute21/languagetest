const words = document.querySelectorAll('.drag');
const dropspans = document.querySelectorAll('.drop');
const button = document.getElementById('check');

// check function variables
const dragcontainer = document.getElementById('dragcontainer');
const alertbox = document.getElementById('alertbox');
const message = document.getElementById('message');

const startposition = document.querySelectorAll('.startposition');


// drag listeners

for(const word of words){
    word.addEventListener('dragstart', dragStart);
}

// drag functions

function dragStart(e){
    e.dataTransfer.setData("text/plain", e.target.id);
}



for(const drop of dropspans){
    drop.addEventListener('dragover', dragOver);
    drop.addEventListener('drop', function(){
        dragDrop(event, this);
    }, false);
}


function dragOver(e) {
    // w/o preventDefault, the drop event won't fire
    e.preventDefault();
}


function dragDrop(ev, el) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text"); 
    
    if(ev.target.classList.contains('destination')){
        ev.target.style.height = '19px';        
    } 

    if(el.childElementCount < 1){
        el.appendChild(document.getElementById(data));
    }

}


// check button functions

button.addEventListener('click', check);

const drop1 = document.getElementById('drop1');
const drop2 = document.getElementById('drop2');
const drop3 = document.getElementById('drop3');

const drag1 = document.getElementById('drag1');
const drag2 = document.getElementById('drag2');
const drag3 = document.getElementById('drag3');
const destination = document.querySelectorAll('.destination');


function insertMessage(bu){
    message.innerHTML = bu;
}

function check(){

    alertbox.style.height = '110px';
    message.style.display = 'block';

if(destination[0].firstElementChild === null || destination[1].firstElementChild === null || destination[2].firstElementChild === null){
    insertMessage('Please fill all the blanks');
}

else if(drop1.firstElementChild.id == 'drag3' && drop2.firstElementChild.id == 'drag1'){
    insertMessage("That's correct!");
}
else {
    insertMessage('Try again!');
    fadeOut();
}


const buttonTxt = document.getElementById('buttonTxt');
var opacity = Number(window.getComputedStyle(buttonTxt).getPropertyValue("opacity"));


function fadeOut(){
    var k = setInterval(function(){
        
        if(opacity >= 0.1){
            opacity -= .1;
            buttonTxt.style.opacity = opacity;
        }
        else {
            clearInterval(k);
            fadeIn();
            button.removeEventListener('click', check);
        }
    }, 30);
}

function fadeIn(){
    buttonTxt.innerHTML = "again";
    var h = setInterval(function(){

        if (opacity == 1){
            clearInterval(h);
        }
        else {
            opacity += .1;
            buttonTxt.style.opacity = opacity;
            button.addEventListener('click', refresh);
        }
    }, 30)
}

// vajutades nuppu 'again' käivitub funktsioon refresh

function refresh() {

    alertbox.style.height = '0px';
    message.style.display = 'none';

    button.removeEventListener('click', refresh);
    button.addEventListener('click', check);
    buttonTxt.innerHTML = "check";

    // words would go back to their original places:
    drag11.appendChild(drag1);
    drag22.appendChild(drag2);
    drag33.appendChild(drag3);
}
}




// document.getElementById('button').onclick = function(){alert('hello world');}
// niimoodi saab ka anda evente nupule. Noded on objektid. property onclick saab value function

// document.getElementById('drag1').addEventListener('click', function() {alert('hello world')});