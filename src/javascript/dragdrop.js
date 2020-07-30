console.log('dragdrop.js is working');

const words = document.querySelectorAll('.drag');
const dropspans = document.querySelectorAll('.drop');

// console.log(words[0]);

// drag listeners

for(const word of words){
    word.addEventListener('dragstart', dragStart);
    word.addEventListener('dragend', dragEnd);
}

// drag functions

function dragStart(e){
    e.dataTransfer.setData("text/plain", e.target.id);
    console.log(e.target.id);  
    // see et elemendi id kätte saab on juba väga hea!
}

function dragEnd(e){
    this.className = 'drag';
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
    console.log('dragover');
}

function dragEnter(){
    console.log('dragenter');
}

function dragDrop(e){
    e.preventDefault();
    // getting the id name of the drop target
    var data = e.dataTransfer.getData("text");   
    e.target.appendChild(document.getElementById(data));
    // and clear the drag data cache
    e.dataTransfer.clearData();  

    e.target.style.height = '19px';

    // juhhuu!!

    // nii saab ainult manuaalselt valitud sõna sisestada:
    // this.append(words[1]);
}


