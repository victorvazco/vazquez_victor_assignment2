
//Victor Vazquez
//SDI 1408
//Project 2
//Deliverable 2
// This project is my code taken from the flowchart provided



//Global Variables
var name = "Lee";
var number = 5;
var truth = true;



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
            returned = 'Levels uploaded';
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



//String Function




//Main Code

var ask = prompt("What is your username?",""); //Prompt

var callGreet = greetU(ask);//Procedure

var decideAsk = confirm("Do you want to pay extra?");

var callDecide = decideU(decideAsk);

console.log(callDecide + ask);



