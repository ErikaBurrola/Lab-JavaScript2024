let greeting = prompt("What langugage would you like to translate \'Hello Word'\: Spanish (es), English (en), Franch (fr), Chinese(ch)");
let translation="";

 switch (greeting.trim()){
    case "es":
     translation = "Hello World translate in Spanish: Hola Mundo";
     break;
    case "fr": 
     translation = "Hello World translate in franch: Bonjour le monde";
     break;
    case "ch":
     translation = "Hello World translate in Chinese: 你好世界";
     break;
   default:
     translation = "Hello World";
    
}

console.log(translation)
document.write('</h>'+translation+'</h>')