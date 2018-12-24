/**
 * This is the section of the script that runs the
 * first part of the scenario. It creates random
 * variables for every part of the functions below.
 * Keep in mind that it will return true 5 psi above
 * and below the answer.

 Notes
 We are going to need to do a supply line with an attack line coming off of it. WE'll need to solve for that, and then add an additional line. We are going to need to set up another function that will watch the GPM's of the line going out and iff ti gets above 350gpms we are then going to add in the FL of the appliance. We are going to have it to where if the required supply line is between 100-250ft we will use 2.5 or 3, and if it is between 4-5 you will get a length of 300-500
 Justification for the higher Hose lengths could be that you have a house that is set back off the road 500+ ft and the first due truck sunk in the sand right at the entrance to the property forcing you to lay in a line from the road.
 */


 //Object for hose line firction loss coefficient
 var randCoef = 15.5;

 // selecting a random hose length for firstion loss 100-350ft
 var hoseLength = [100, 150, 200];
 var getRandomLength = function () {
 var result = hoseLength[Math.floor(Math.random() * 3)];
 return result;
 };
 var randLength = getRandomLength();

 // selects random nozzle for handlines
 var getRandomNozzle = function () {
     var nozzle = [50, 100, 75];
     var result = nozzle[Math.floor(Math.random() * 3)];
     return result;
   };
 var randNozzle = getRandomNozzle();

 if (randNozzle == 50) {
   document.querySelector(".scene-nozzle").innerHTML = "a smooth-bore nozzle on it.";
 } if (randNozzle == 100) {
   document.querySelector(".scene-nozzle").innerHTML = "a fog nozzle on it.";
 } if (randNozzle == 75) {
   document.querySelector(".scene-nozzle").innerHTML = "an automatic fog nozzle on it.";
 };

 //Outputs the the hose diameter based on the random coefficient in the HTML
 if (randCoef == 15.5) {
   document.querySelector(".scene-hose").innerHTML = "1.75 inch";
 } if (randCoef == 2) {
   document.querySelector(".scene-hose").innerHTML = "2.5 inch";
 };
 if (randCoef == 15.5) {
   document.querySelector(".scene-8").innerHTML = "1.75 inch";
 } if (randCoef == 2) {
   document.querySelector(".scene-8").innerHTML = "2.5 inch";
 };

 //This will give us certain GPMs for handlines, and different ones for supply lines
 if (randNozzle == 100) {
     var gpm = [30, 60, 95, 125];
     var getRandomGPM = function () {
     var result = gpm[Math.floor(Math.random() * 4)];
     return result;
   }
 } if (randNozzle == 50) {
     var gpm = [185];
     var getRandomGPM = function () {
     var result = gpm[Math.floor(Math.random() * 1)];
     return result;
   }
 } if (randNozzle == 75) {
     var gpm = [150];
     var getRandomGPM = function () {
     var result = gpm[Math.floor(Math.random() * 1)];
     return result;
   }
 };
   var randGPM = getRandomGPM();

 //Outputs a random elevation from 1-3 stories
   var elevation = [0, 10, 20];
   var getRandomElevation = function () {
   var result = elevation[Math.floor(Math.random() * 3)];
   return result;
 };
   var randElevation = getRandomElevation();

 //Turns the random elevation into a "story" for the HTML
 if (randElevation === 0) {
   document.querySelector(".scene-elevation").innerHTML = "on the first floor";
 } if (randElevation === 10) {
   document.querySelector(".scene-elevation").innerHTML = "on the second floor";
 } if (randElevation === 20) {
   document.querySelector(".scene-elevation").innerHTML = "on the third floor";
 };

 //Object for suplly hose line firction loss coefficient 2.5"- 5"
 var coefficient3 = [2, .8, .2, .08];
 var getRandomCoefficient3 = function () {
 var result = coefficient3[Math.floor(Math.random() * 4)];
 return result;
 };
 var randCoef3 = getRandomCoefficient3();

 if (randCoef3 == 2) {
   document.querySelector(".scene-supply-dia").innerHTML = "2.5 inch";
 } if (randCoef3 == .8) {
   document.querySelector(".scene-supply-dia").innerHTML = "3 inch";
 } if (randCoef3 == .2) {
   document.querySelector(".scene-supply-dia").innerHTML = "4 inch";
 } if (randCoef3 == .08) {
   document.querySelector(".scene-supply-dia").innerHTML = "5 inch";
 };

 // selecting a random hose length for firstion loss 100-300ft
 if (randCoef3 == 2 || randCoef3 == .8) {
     var hoseLength3 = [200, 250, 300];
     var getRandomLength3 = function () {
     var result = hoseLength3[Math.floor(Math.random() * 3)];
     return result;
   }
 } if (randCoef3 == .2 || randCoef3 == .08) {
     var hoseLength3 = [300, 400, 500, 600];
     var getRandomLength3 = function () {
     var result = hoseLength3[Math.floor(Math.random() * 4)];
     return result;
   }
 };

 var randLength3 = getRandomLength3();

 document.querySelector(".scene-supply-hose").innerHTML = randLength3;


 //This solves for the FL of the supply line
 function totalFriction3() {
   var start = randGPM / 100;
   var first = Math.pow(start, 2);
   var second = randCoef3 * first;
   var third = randLength3 / 100;
   var result = third * second;
   return Math.round(result);
 };

 var supplyFL = totalFriction3();

 //the final answer, This runs all the variables
 function totalFriction() {
   var start = randGPM / 100;
   var first = Math.pow(start, 2);
   var second = randCoef * first;
   var third = randLength / 100;
   var result = third * second + randNozzle + randElevation + supplyFL;
   return Math.round(result);
 };

 //get input and check to see if it is true
 function checkMath() {
     var answer, text;

     // Takes the checked value and the answer to see if they are true
     answer = document.getElementById("numb").value;

     // If answer is between 5 psi on either side of totalFriction
     if (answer == totalFriction() ||
         answer == totalFriction() - 5 ||
         answer == totalFriction() + 5 ||
         answer == totalFriction() - 4 ||
         answer == totalFriction() + 4 ||
         answer == totalFriction() - 3 ||
         answer == totalFriction() + 3 ||
         answer == totalFriction() - 2 ||
         answer == totalFriction() + 2 ||
         answer == totalFriction() - 1 ||
         answer == totalFriction() + 1)
          {
         text = "This is the correct PSI";
     } else {
         text = "Nope, remember your training my young padawan!";
     };
     document.getElementById("demo").innerHTML = text;
 };

 //As long as the answer is correct it will show the next scetion of the scenario
 document.querySelector(".sub-but").addEventListener("click", showMore);
 function showMore() {
   if (document.getElementById("demo").innerHTML == "This is the correct PSI") {
     document.querySelector(".more-scene").style.display = "block";
   }
 };

 //output of the values for the HTML
 document.querySelector(".scene-1").innerHTML = randCoef;
 //document.querySelector(".scene-2").innerHTML = randGPM;
 document.querySelector(".scene-3").innerHTML = randLength;
 document.querySelector(".scene-4").innerHTML = totalFriction();
 document.querySelector(".scene-5").innerHTML = randLength;
 document.querySelector(".scene-6").innerHTML = randNozzle;
 document.querySelector(".scene-7").innerHTML = randElevation;
