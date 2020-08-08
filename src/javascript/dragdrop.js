const words = document.querySelectorAll('.drag');
const dropspans = document.querySelectorAll('.drop');
const button = document.getElementById('check');

// check function variables
const dragcontainer = document.getElementById('dragcontainer');
const alertbox = document.getElementById('alertbox');
const message = document.getElementById('message');

const startposition = document.querySelectorAll('.startposition');
// static list, NodeList Object

// drag listeners

for(const word of words){
    word.addEventListener('dragstart', dragStart);
    word.addEventListener('dragend', dragEnd);
}

// drag functions

function dragStart(e){
    e.dataTransfer.setData("text/plain", e.target.id);
    // console.log(e.target.id);  
    // saame kätte liigutatava elemendi id
}

function dragEnd(e){
    // this.className = 'drag';
    // console.log('ended dragging');
}

for(const drop of dropspans){
    drop.addEventListener('dragover', dragOver);
    drop.addEventListener('dragenter', dragEnter);
    drop.addEventListener('drop', dragDrop);
}

// forEach is more popular though

function dragOver(e) {
    // w/o preventDefault, the drop event won't fire
    e.preventDefault();
    // console.log('dragover');
}

function dragEnter(){
    // console.log('dragenter');
}

// veel tuleks kuidagi ära keelata see, et mitut sõna ühte lahtrisse visatakse
function dragDrop(e){
    e.preventDefault();
    // getting the id name of the drop target
    var data = e.dataTransfer.getData("text");   
    e.target.appendChild(document.getElementById(data));
    // and clear the drag data cache
    e.dataTransfer.clearData();  

    // change the height of drop destination (with green underlines)
    if(e.target.classList.contains('destination')){
        e.target.style.height = '19px';
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

    // pop up of alert
    alertbox.style.height = '110px';
    message.style.display = 'block';

// ----------------------------------------------------
if(destination[0].firstElementChild === null || destination[1].firstElementChild === null || destination[2].firstElementChild === null){
    console.log('gotta fill all the blanks');
    insertMessage('Please fill all the blanks');
}

else if(drop1.firstElementChild.id == 'drag3' && drop2.firstElementChild.id == 'drag1'){
    console.log("that's correct!");
    insertMessage("That's correct!");
}
else {
    insertMessage('Try again!');
}
}
// algselt proovisin iteratsioonidega, aga praegune lahendus töötab palju paremini
// ----------xxxxxxxxxx---------------xxxxxxxxxx-----------------xxxxxxxx---

    // nii, see töötab nüüd nii nagu vaja.. kas sama asja saaks ümber teha 
    // ka klassikaliseks i for loopiks?

    // for( const dest of destination.values()){
    //     if(dest.firstElementChild === null){

    //         console.log('Please fill all the blanks');
    //         insertMessage('Please fill all the blanks');
    //         // break will break out of for loop
    //         // break;
    //         // return;            
    //     }

    //     console.log('still inside for loop');
    // }

    // console.log('continue');
    // insertMessage('all the blanks are filled');
