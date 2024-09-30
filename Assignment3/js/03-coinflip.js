

let coinFlip = Math.floor(Math.random() * 10) + 1;

let choiceCoinFlip = 'Heads';
if (coinFlip >0 && coinFlip <=5){
    choiceCoinFlip = 'Heads';
    
} else {
    choiceCoinFlip = 'Tails';
}

let choice =  prompt("Please select \'Heads\' or \'Tails'\:");
if( choiceCoinFlip === 'Heads'){
    if(choice === "Heads" ){
        document.write('</h>'+"The flip was heads and you chose heads...you win!"+'</h>');
    } else {
        document.write('</h>'+"The flip was heads but you chose tails..you lose!"+'</h>')
     }
} else if(choiceCoinFlip === "Tails"){
    if(choice === "Heads" ){
       document.write('</h>'+"The flip was tail but you chose heads..you lose!"+'</h>')
    } else if(choice === "Tails"){
            document.write('</h>'+"The flip was tails and you chose tails..you win!"+'</h>')
       }
} 