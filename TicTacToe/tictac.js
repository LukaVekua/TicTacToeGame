let boxes = document.getElementsByTagName("div");

let blocks = [];

for (let box of boxes){
    blocks.push(box);
    if(box.className=="rows"||box.className=="container"){
        blocks.pop(box);
    }
}

let counter = 0;

let spaceX = {};
let spaceO = {};

let TicTacToe = (block) =>{

    if((counter%2==0 || counter ==0) && block.target.innerText ==""){ 
        block.target.innerText = "X";
        block.target.style.color= "red";
        let qi = block.target.id;
        spaceX[`${qi}`] = "X";
        counter++;
    }

    else if(counter%2!=0 && block.target.innerText==""){
        block.target.innerText = "O";
        block.target.style.color= "blue";
        let qiO = block.target.id;
        spaceO[`${qiO}`] = "O";
        counter++;
   }

    else{
        alert("უკვე შევსებულია შეეშვი");
    }


    let winnerX = false;
    let winnerY = false;


    if(spaceX.hasOwnProperty('0')&& spaceX.hasOwnProperty('1') && 
    spaceX.hasOwnProperty('2') ||
    spaceX.hasOwnProperty('0') &&  spaceX.hasOwnProperty('3') &&
    spaceX.hasOwnProperty('6')  ||
    spaceX.hasOwnProperty('2') &&  spaceX.hasOwnProperty('5') &&
    spaceX.hasOwnProperty('8') ||
    spaceX.hasOwnProperty('6') &&  spaceX.hasOwnProperty('7') &&
    spaceX.hasOwnProperty('8') ||
    spaceX.hasOwnProperty('1') &&  spaceX.hasOwnProperty('4') &&
    spaceX.hasOwnProperty('7') ||
    spaceX.hasOwnProperty('0') &&  spaceX.hasOwnProperty('4') &&
    spaceX.hasOwnProperty('8') ||
    spaceX.hasOwnProperty('2') &&  spaceX.hasOwnProperty('4') &&
    spaceX.hasOwnProperty('6') ||
    spaceX.hasOwnProperty('3') &&  spaceX.hasOwnProperty('4') &&
    spaceX.hasOwnProperty('5') 
    )
    {
        winnerX = true;

        setTimeout(function() {
            alert("X-მა მოიგო");
            location.reload();
        },100)

    }


    if(spaceO.hasOwnProperty('0')&& spaceO.hasOwnProperty('1') && 
    spaceO.hasOwnProperty('2') ||
    spaceO.hasOwnProperty('0') &&  spaceO.hasOwnProperty('3') &&
    spaceO.hasOwnProperty('6')  ||
    spaceO.hasOwnProperty('2') &&  spaceO.hasOwnProperty('5') &&
    spaceO.hasOwnProperty('8') ||
    spaceO.hasOwnProperty('6') &&  spaceO.hasOwnProperty('7') &&
    spaceO.hasOwnProperty('8') ||
    spaceO.hasOwnProperty('1') &&  spaceO.hasOwnProperty('4') &&
    spaceO.hasOwnProperty('7') ||
    spaceO.hasOwnProperty('0') &&  spaceO.hasOwnProperty('4') &&
    spaceO.hasOwnProperty('8') ||
    spaceO.hasOwnProperty('2') &&  spaceO.hasOwnProperty('4') &&
    spaceO.hasOwnProperty('6') ||
    spaceO.hasOwnProperty('3') &&  spaceO.hasOwnProperty('4') &&
    spaceO.hasOwnProperty('5')  
    )
    {
        winnerY = true;

        setTimeout(function() {
            alert("O-მა მოიგო");
            location.reload();
        },100)
    }

    
    if((Object.keys(spaceX).length == 4 && Object.keys(spaceO).length ==5) ||
        (Object.keys(spaceX).length == 5 && Object.keys(spaceO).length ==4) && 
        winnerX!=true && winnerY!=true
    )
    {
        setTimeout(function() {
            alert("ფრეაა!!!");
            location.reload();
        },100)
    }

}



for (let block of blocks){
    block.addEventListener('click',TicTacToe);
}
