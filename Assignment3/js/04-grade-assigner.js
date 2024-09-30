let userInput = Number(prompt("Please enter a number between 1 and 100:"));

if(userInput>=1 &&userInput<=100){
    if (userInput<=60){
        document.write('</h>'+"You received F."+'</h>');
    } else if (userInput>=70 && userInput<=79){
        document.write('</h>'+"You received a C."+'</h>');
      } else if (userInput>=80 && userInput<=89){
        document.write('</h>'+"You received a B."+'</h>');
        } else if (userInput>=90 && userInput<=100){
           document.write('</h>'+"You received an A."+'</h>');
          } 
} else {
    document.write('</h>'+"Invalid input. Please enter a number between 1 and 100."+'</h>');
  }