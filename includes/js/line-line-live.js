/**
 * This is the section of the script that runs the
 * first part of the scenario. It creates random
 * variables for every part of the functions below.
 * Keep in mind that it will return true 5 psi above
 * and below the answer.
 */

 console.log('this is the fucking show');

  //Object for hose line firction loss coefficient
  var coefficient = [15.5, 2];
  var getRandomCoefficient = function () {
  var result = coefficient[Math.floor(Math.random() * 2)];
  return result;
  };
  var randCoef = getRandomCoefficient();

  // selecting a random hose length for firstion loss 100-350ft
  var hoseLength = [100, 150, 200, 250];
  var getRandomLength = function () {
  var result = hoseLength[Math.floor(Math.random() * 4)];
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
  	document.querySelector(".scene-nozzle").innerHTML = " which has a smooth-bore nozzle on it.";
  } if (randNozzle == 100) {
  	document.querySelector(".scene-nozzle").innerHTML = " which has a fog nozzle on it.";
  } if (randNozzle == 75) {
    document.querySelector(".scene-nozzle").innerHTML = " which has an automatic fog nozzle on it.";
  };

  //Outputs the the hose diameter based on the random coefficient in the HTML
  if (randCoef == 15.5) {
  	document.querySelector(".scene-hose").innerHTML = "1.75 inch";
  } if (randCoef == 2) {
  	document.querySelector(".scene-hose").innerHTML = "2.5 inch";
  };

  //This will give us certain GPMs for handlines, and different ones for supply lines
  if (randNozzle == 100 && randCoef == 15.5) {
      var gpm = [30, 60, 95, 125];
    	var getRandomGPM = function () {
    	var result = gpm[Math.floor(Math.random() * 4)];
    	return result;
    }
  } if (randNozzle == 50 && randCoef == 15.5) {
      var gpm = [185];
      var getRandomGPM = function () {
      var result = gpm[Math.floor(Math.random() * 1)];
      return result;
    }
  } if (randNozzle == 75 && randCoef == 15.5) {
      var gpm = [150];
      var getRandomGPM = function () {
      var result = gpm[Math.floor(Math.random() * 1)];
      return result;
    }
  } if (randNozzle == 100 && randCoef == 2) {
      var gpm = [125, 150, 200, 250];
      var getRandomGPM = function () {
      var result = gpm[Math.floor(Math.random() * 4)];
      return result;
    }
  }
  if (randNozzle == 75 && randCoef == 2){
      var gpm = [250];
      var getRandomGPM = function () {
      var result = gpm[Math.floor(Math.random() * 1)];
      return result;
    }
  } if (randNozzle == 50 && randCoef == 2){
      var gpm = [210, 265, 325];
      var getRandomGPM = function () {
      var result = gpm[Math.floor(Math.random() * 3)];
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
  	document.querySelector(".scene-elevation").innerHTML = "single story home with smoke and flames coming from the C/D corner";
  } if (randElevation === 10) {
  	document.querySelector(".scene-elevation").innerHTML = "two story home with smoke and flames coming from the top floor on the B side";
  } if (randElevation === 20) {
  	document.querySelector(".scene-elevation").innerHTML = "three story home with smoke and flames coming from the top floor on the A side";
  };

  //the final answer, This runs all the variables
  function totalFriction() {
    var start = randGPM / 100;
    var first = Math.pow(start, 2);
  	var second = randCoef * first;
  	var third = randLength / 100;
  	var result = third * second + randNozzle + randElevation;
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
document.querySelector(".scene-rand-gpm").innerHTML = randGPM;
document.querySelector(".scene-5").innerHTML = randLength;

/**
 * This is the section of the script that runs the
 * next part of the scenario. It uses new
 * variables for every part of the fuctions except
 * for the elevation variable, which uses the
 * elevation that was chosen above. Keep in mind
 * that it will return true 5 psi above and below
 * the answer.
 */

//Object for hose line firction loss coefficient
var coefficient2 = [15.5, 2];
var getRandomCoefficient2 = function () {
var result = coefficient2[Math.floor(Math.random() * 2)];
return result;
};
var randCoef2 = getRandomCoefficient2();

// selecting a random hose length for firstion loss 100-350ft
var hoseLength2 = [100, 150, 200, 250];
var getRandomLength2 = function () {
var result = hoseLength2[Math.floor(Math.random() * 4)];
return result;
};
var randLength2 = getRandomLength2();

// selects random nozzle for handlines
var getRandomNozzle2 = function () {
		var nozzle2 = [50, 100, 75];
		var result = nozzle2[Math.floor(Math.random() * 3)];
		return result;
  };
var randNozzle2 = getRandomNozzle2();

if (randNozzle2 == 50) {
	document.querySelector(".scene-nozzle-2").innerHTML = " which has a smooth-bore nozzle on it.";
} if (randNozzle2 == 100) {
	document.querySelector(".scene-nozzle-2").innerHTML = " which has a fog nozzle on it.";
} if (randNozzle2 == 75) {
  document.querySelector(".scene-nozzle-2").innerHTML = " which has an automatic fog nozzle on it.";
};

//Outputs the the hose diameter based on the random coefficient in the HTML
if (randCoef2 == 15.5) {
	document.querySelector(".scene-hose-2").innerHTML = "1.75 inch";
} if (randCoef2 == 2) {
	document.querySelector(".scene-hose-2").innerHTML = "2.5 inch";
};

//This will give us certain GPMs for handlines, and different ones for supply lines
if (randNozzle2 == 100 && randCoef2 == 15.5) {
    var gpm2 = [30, 60, 95, 125];
  	var getRandomGPM2 = function () {
  	var result = gpm2[Math.floor(Math.random() * 4)];
  	return result;
  }
} if (randNozzle2 == 50 && randCoef2 == 15.5) {
    var gpm2 = [185];
    var getRandomGPM2 = function () {
    var result = gpm2[Math.floor(Math.random() * 1)];
    return result;
  }
} if (randNozzle2 == 75 && randCoef2 == 15.5) {
    var gpm2 = [150];
    var getRandomGPM2 = function () {
    var result = gpm2[Math.floor(Math.random() * 1)];
    return result;
  }
} if (randNozzle2 == 100 && randCoef2 == 2) {
    var gpm2 = [125, 150, 200, 250];
    var getRandomGPM2 = function () {
    var result = gpm2[Math.floor(Math.random() * 4)];
    return result;
  }
} if (randNozzle2 == 75 && randCoef2 == 2){
    var gpm2 = [250];
    var getRandomGPM2 = function () {
    var result = gpm2[Math.floor(Math.random() * 1)];
    return result;
  }
} if (randNozzle2 == 50 && randCoef2 == 2){
    var gpm2 = [210, 265, 325];
    var getRandomGPM2 = function () {
    var result = gpm2[Math.floor(Math.random() * 3)];
    return result;
  }
};
	var randGPM2 = getRandomGPM2();

//the final answer, This runs all the variables
function totalFriction2() {
  var start = randGPM2 / 100;
  var first = Math.pow(start, 2);
	var second = randCoef2 * first;
	var third = randLength2 / 100;
	var result = third * second + randNozzle2 + randElevation;
  return Math.round(result);
};

//get input and check to see if it is true
function checkMath2() {
    var answer, text;

    // Get the value of the input field with id="numb-2"
    answer = document.getElementById("numb-2").value;

    // Will return true if answer is 5 psi above or below the answer
    if (answer == totalFriction2() ||
        answer == totalFriction2() - 5 ||
        answer == totalFriction2() + 5 ||
        answer == totalFriction2() - 4 ||
        answer == totalFriction2() + 4 ||
        answer == totalFriction2() - 3 ||
        answer == totalFriction2() + 3 ||
        answer == totalFriction2() - 2 ||
        answer == totalFriction2() + 2 ||
        answer == totalFriction2() - 1 ||
        answer == totalFriction2() + 1) {
        text = "This is the correct PSI";
    } else {
        text = "Nope, remember your training my young padawan!";
    };
    document.getElementById("demo-2").innerHTML = text;
};




//output of the values for the HTML

document.querySelector(".scene-rand-gpm-2").innerHTML = randGPM2;
document.querySelector(".scene-5-2").innerHTML = randLength2;
