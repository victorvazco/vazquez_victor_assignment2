
//Victor Vazquez
//SDI 1408
//Project 2
//Deliverable 2
// This project is my code taken from the flowchart provided



//Global Variables
var name = "Lee";
var number = 15;
var truth = true;
var msg1 = "Never give up! ";
var msg2 = "You're awesome!";




//Procedure

var greetU = function(ask){
    
    if (ask === name) {
        
        console.log("Welcome back to The Awesome Game " + ask + "." );
    } else {
        
        console.log("Welcome to The Awesome Game App " + ask + ".");
    }
    
    
};


//Boolean Function

var decideU = function(confirmAnswer){
    
    var cost = 4;
    
    if (confirmAnswer === truth) {
        while (cost>0) {
            console.log("You purchased New level " + cost + ".");
            cost --;
            returned = 'Levels uploaded, ';
        }
        return returned;
    
    } else {
        
        var offer = " levels are waiting for you next time if you pay.";
        cost = 4 + offer;
        
       returned1 = cost; 
    }
    return returned1;
};


//Number Function

var uploadTimer = function(waiting){
    
    if (truth === true) {
    
for (counter = 0; counter < 15; counter++) { // Math being done = addition (++)
   
    console.log("Please wait for  " + counter + " second(s).");
   
    var waitTime = 14;
   
   
    }
    return waitTime;

    } else {
    
    var waitTime = 10;  
        
    }
    
    return waitTime;
    
};

//String Function

var specialMessage = function(messg1,messg2){
    
    var fullMsg = messg1 + " / Share for your free points! / " + messg2;
    
    return fullMsg;
};



//Main Code

var ask = prompt("What is your username?",""); //Prompt

var callGreet = greetU(ask);//Procedure

var decideAsk = confirm("Do you want to pay extra?");

var callDecide = decideU(decideAsk);
console.log(callDecide + ask);

var callTimer = uploadTimer(number);
console.log("Thank you for waiting " + callTimer + " seconds.");

var blabber = specialMessage(msg1,msg2);
console.log("We just want to say: " + blabber );




