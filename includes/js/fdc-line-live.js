/**
 * This is the section of the script that runs the
 * first part of the scenario. It creates random
 * variables for every part of the functions below.
 * Keep in mind that it will return true 5 psi above
 * and below the answer. This will solve for a FDC or
 * standpipe scenario

 Notes:
 Wait for the HTML because you can create a conditional that chooses whether or not you are suppling the standpipe with two 2.5" or 3" lines or if you are supplying with one 4" or 5" line. Also need to look and see if we can run the standpipe with just one 2.5" or 3" line.
 Make a random fucntion that will spit out which side the FDC is located on the building.
 Need to find out if elevation is 5psi per floor or 10 psi per floor for the standpipe.
 */

 // This will select a random coefficient for the supply line to the FDC
 var coefficientFDC = [2, .8, .2, .08];
 var getRandomCoefficientFDC = function () {
 var result = coefficientFDC[Math.floor(Math.random() * 4)];
 return result;
 };
 var randCoefFDC = getRandomCoefficientFDC();

// This adds the HTML for the coefficient of the hose chosen
 if (randCoefFDC == 2) {
	 document.querySelector(".scene-FDC-hose").innerHTML = "two 2.5 inch lines";
 } if (randCoefFDC == .8) {
	 document.querySelector(".scene-FDC-hose").innerHTML = "two 3 inch lines";
 } if (randCoefFDC == .2) {
	 document.querySelector(".scene-FDC-hose").innerHTML = "a 4 inch line";
 } if (randCoefFDC == .08) {
	 document.querySelector(".scene-FDC-hose").innerHTML = "a 5 inch line";
 };

 // This will select a hose length for the supply line to the FDC
 var hoseLengthFDC = [100, 200, 300];
 var getRandomLengthFDC = function () {
 var result = hoseLengthFDC[Math.floor(Math.random() * 3)];
 return result;
 };
 var randLengthFDC = getRandomLengthFDC();

 if (randLengthFDC == 100) {
	 document.querySelector(".scene-FDC-size").innerHTML = "100";
 } if (randLengthFDC == 200) {
	 document.querySelector(".scene-FDC-size").innerHTML = "200";
 } if (randLengthFDC == 300) {
	 document.querySelector(".scene-FDC-size").innerHTML = "300";
 };

  //Object for hose line firction loss coefficient
  var coefficient = [15.5, 2];
  var getRandomCoefficient = function () {
  var result = coefficient[Math.floor(Math.random() * 2)];
  return result;
  };
  var randCoef = getRandomCoefficient();

  // selecting a random hose length for firstion loss 100-150ft
  var hoseLength = [100, 150];
  var getRandomLength = function () {
  var result = hoseLength[Math.floor(Math.random() * 2)];
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
  	document.querySelector(".scene-nozzle").innerHTML = " which has a smooth-bore nozzle on it";
  } if (randNozzle == 100) {
  	document.querySelector(".scene-nozzle").innerHTML = " which has a fog nozzle on it";
  } if (randNozzle == 75) {
    document.querySelector(".scene-nozzle").innerHTML = " which has an automatic fog nozzle on it";
  };

  //Outputs the the hose diameter based on the random coefficient in the HTML
  if (randCoef == 15.5) {
  	document.querySelector(".scene-hose").innerHTML = "1.75 inch";
  } if (randCoef == 2) {
  	document.querySelector(".scene-hose").innerHTML = "2.5 inch";
  };

  //This will give us certain GPMs for handlines, depending on the nozzles and coefficients
  if (randNozzle == 100 && randCoef == 15.5) {
      var gpm = [125];
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
      var gpm = [250];
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
      var gpm = [200, 251, 300];
      var getRandomGPM = function () {
      var result = gpm[Math.floor(Math.random() * 3)];
      return result;
    }
  };
  	var randGPM = getRandomGPM();

    if (randGPM == 200) {
      document.querySelector(".scene-tip").innerHTML = "This smooth bore nozzle has a 1 inch tip on it. ";
    } if (randGPM == 251) {
      document.querySelector(".scene-tip").innerHTML = "This smooth bore nozzle has a 1 1/8 inch tip on it. ";
    } if (randGPM == 300) {
      document.querySelector(".scene-tip").innerHTML = "This smooth bore nozzle has a 1.25 inch tip on it. ";
    };

  //Outputs a random elevation from 2-6 stories WE NEED TO WORK ON THIS
    var elevation = [10, 20, 30, 40, 50];
  	var getRandomElevation = function () {
  	var result = elevation[Math.floor(Math.random() * 5)];
  	return result;
  };
  	var randElevation = getRandomElevation();

  //Turns the random elevation into a "story" for the HTML NEED TO WORK ON THE HTML OUTPUT
  if (randElevation === 10) {
  	document.querySelector(".scene-elevation").innerHTML = "second floor C/D corner";
  } if (randElevation === 20) {
  	document.querySelector(".scene-elevation").innerHTML = "third floor on the B side";
  } if (randElevation === 30) {
  	document.querySelector(".scene-elevation").innerHTML = "fourth floor in the A/B corner";
  } if (randElevation === 40) {
  	document.querySelector(".scene-elevation").innerHTML = "fifth floor on the A side";
  } if (randElevation === 50) {
  	document.querySelector(".scene-elevation").innerHTML = "sixth floor on the D side";
  };

	// This solves for the friction loss in the supply line to the FDC
	function totalFrictionFDC() {
		var start = randGPM / 100;
    var first = Math.pow(start, 2);
  	var second = randCoefFDC * first;
  	var third = randLengthFDC / 100;
		var result = third * second;
    return Math.round(result);
	};

	var frictionFDC = totalFrictionFDC();

	//the final answer, This runs all the variables
  function totalFriction() {
    var start = randGPM / 100;
    var first = Math.pow(start, 2);
  	var second = randCoef * first;
  	var third = randLength / 100;
  	var result = third * second + randNozzle + randElevation + frictionFDC;
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
	document.querySelector(".scene-nozzle-2").innerHTML = " which has a smooth-bore nozzle on it";
} if (randNozzle2 == 100) {
	document.querySelector(".scene-nozzle-2").innerHTML = " which has a fog nozzle on it";
} if (randNozzle2 == 75) {
  document.querySelector(".scene-nozzle-2").innerHTML = " which has an automatic fog nozzle on it";
};

//Outputs the the hose diameter based on the random coefficient in the HTML
if (randCoef2 == 15.5) {
	document.querySelector(".scene-hose-2").innerHTML = "1.75 inch";
} if (randCoef2 == 2) {
	document.querySelector(".scene-hose-2").innerHTML = "2.5 inch";
};

//This will give us certain GPMs for handlines, and different ones for supply lines
if (randNozzle2 == 100 && randCoef2 == 15.5) {
    var gpm2 = [125];
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
    var gpm2 = [250];
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
    var gpm2 = [200, 251, 300];
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
	var result = third * second + randNozzle2;
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
document.querySelector(".scene-5-2").innerHTML = randLength2;
