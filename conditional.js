var light = "White"

if(light == "Green"){
    console.log("Go!");
}
else if(light == "Yellow"){
    console.log("Wait!");
}
else if(light == "Red"){
    console.log("Stop!");
}
else{
    console.log("Invalid light");
}
console.log("Outside if");


//Switch statement
var signal = "White"
switch(signal){
    case "green":
      console.log("Go!");
      break;

    case "yellow":
      console.log("Wait!");
      break;
 
    case "red":
      console.log("Stop!");
      break;

    default:
         console.log("Invalid signal color");
}
