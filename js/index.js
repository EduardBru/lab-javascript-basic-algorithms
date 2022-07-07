// Iteration 1: Names and Input//
function namesAndInput(hacker1){
console.log ("The driver's name is",hacker1,".");
}


// Iteration 2: Conditionals
function conditionals (driver, navigator){
   
    if (navigator.length<driver.length){
        console.log("The driver has the longest name, it has", driver.length ,"characters");
    }
    else if (navigator.length>driver.length){
        console.log("It seems that the navigator has the longest name, it has", navigator.length, "characters");
    }
    else{
        console.log("Wow, you both have equally long names, ", driver.length," characters!")
    }
}
function driverSpaces(driver){
let driverWithSpaces=driver[0].toUpperCase();


for (let i=1; i<driver.length; i++){
   
    driverWithSpaces += " "+ driver[i].toUpperCase();
    
   
}
console.log(driverWithSpaces);
}
function reverseNavigation (navigator){
let navigatorReverse="";
for (let i=navigator.length-1; i>=0; i--){
    
    navigatorReverse=navigatorReverse+navigator[i];
}

    console.log(navigatorReverse);

}
function lexicographicOrder(driver,navigator){
    if (driver==navigator){
        console.log("What?! You both have the same name?");
    }
    else if(driver<navigator){
        console.log ("The driver's name goes first.");
    }
    else {console.log("Yo, the navigator goes first definitely.");}
}
/*- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.

}

// Iteration 3: Loops*/

let hacker1 ="Edu";
const driver="ramon";
const navigator="pepe";

namesAndInput(hacker1);
conditionals(driver,navigator);
driverSpaces(driver);
reverseNavigation(navigator);
lexicographicOrder (driver, navigator);
