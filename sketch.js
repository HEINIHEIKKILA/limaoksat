//////////////////////////////////////////////////////////////////////
  // Clock : Growing tree clock 
  // By: Beth O'Sullivan 
  // 
  // Criteria: 
  // 4. loading and saving data
  // 5. use of Extenral libraries or Code
  //
  // EXTERNAL CODE -- > from Daniel Shiffman, 
  // fractel tree example Code for: https://youtu.be/0jjeOYMjmDU
  // The chunck of code that I used is the branch function
  //
// //////////////////////////////////////////////////////////////////////////


// GLOBAL VARIABLES:

var angle = 0;  // the angle the little branches will rotate on. 

// varibles for time
var hr; // 0 - 23
var m ; // 0 - 59
var sec; // 0 - 59

var sun;

var r =0;


////////////////////////////////////////////////////////////////////
  // function Preload
  // 4. Loading and saving Data
//////////////////////////////////////////////////////////////////////
function preload (){  
  
  sun = loadImage("Image 10.6.2024 at 12.44.jpg")
  
} // END preload

/////////////////////////////////////////////////////////////////////
  // Function Setup
//////////////////////////////////////////////////////////////////////

function setup() {
  
  createCanvas(600, 600);  // making canvas
  
} // END setup

////////////////////////////////////////////////////////////////////
// Funtion Draw
////////////////////////////////////////////////////////////////////
function draw() { // START Draw
  
  //Assigning the current hours, minutes and seconds data to varibles
  hr = hour();
  mn = minute();
  sec = second();
  
  
  
  
 
  
  // Making the Ground
  fill(160,82,45) // filling with a sinena brown
  noStroke();
  rect (0,590, 600,10) // positioning at the bottom of the canvas
  
  
  // Translating the folowwing branches to be all positioned on top of each other to form 1 tree - in the middle of the canvas
  translate(width/2, height);
   
  // the branches are over from hours behind to seconds on top,
  // colour of stroke is a green gradient and stroke weight is varied inoder
  // Each branch has been placed in the push and pop function, so that the chnages made to that spesific branch don't effect the others.
  
 // HOURS
  push();
  stroke (50,205,50); // stroke colour - light green
  strokeWeight(1.5)  // slightly larger so it can be seen from behind mins & sec
  angle = (hr/24)*2*PI; // as angles is set to radians I needed to divide the angle into 23 equal parts to get the correct angle for the current hour. 
  branch (hr*3+50); // The root length (defined in branch function is being set to hours, I am then multiplying by 3 so that it "grows" quicker  and adding 50px to the length so that it never starts from 0 that way there is always a tree being displayed for the current time. 
  pop();
  
  // MINUTES
  push();
  stroke(34,139,34); //stroke colour - medium green
  strokeWeight(1); // similar to above in hours but slightly smaller as it is layered ontop of the hours branch
  angle = (mn/60)*2*PI; // as angles is set to radians I needed to divide the angle into 59 equal parts to get the correct angle for the current minute.
  branch (mn*3+50); // see HOURS it is exactly the same reason
  pop();
    
  
  // SECONDS
  push();
  stroke(85,107,47); // stroke colour - dark green
  strokeWeight(0.75); // similar to above
  angle = (sec/60)*2*PI; // as angles is set to radians I needed to divide the angle into 59 equal parts to get the correct angle for the current second.
  branch (sec*3+50); // see above
  pop();
  
 
 
} // END Draw


/////////////////////////////////////////////////////////////////////////////
  // Defining Branch function 
  // 5. Use of external libraies or code  --> 
  // Here I have used the main chunk of code from Daniel (Mentioned above) I have changed the variable names for my clarification 
/////////////////////////////////////////////////////////////////////////////
function branch(len_root) { 
  
  line(0, 0, 0, -len_root); // making the inital
  translate(0, -len_root);
  if (len_root > 4) {
    //branch 1
    push();
    rotate(angle);
    branch(len_root * 0.67); 
    //branch(0.5*time);
    pop();
    // branch 2
    push();
    rotate(-angle);
    branch(len_root * 0.67);
    //branch(0.5*time);
    pop();
  }
   
}// end branch function