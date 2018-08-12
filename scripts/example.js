//Object for hose line firction loss coefficient
var coefficient = [15.5, 2, .8, .2, .08];
var getRandomCoefficient = function () {
var result = coefficient[Math.floor(Math.random() * 5)];
return result;
};
var randCoef = getRandomCoefficient();

// selecting a random hose length for firstion loss 100-350ft
var hoseLength = [100, 150, 200, 250, 300, 350];
var getRandomLength = function () {
var result = hoseLength[Math.floor(Math.random() * 5)];
return result;
};
var randLength = getRandomLength();

//get a random GPM for the equation 50-200 GPM
/*var gpm = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140];
var getRandomGPM = function () {
var result = gpm[Math.floor(Math.random() * 10)];
return result;
};
var randGPM = getRandomGPM();*/

// selects random nozzle for handlines
var getRandomNozzle = function () {
	if (randCoef == 15.5 || randCoef == 2) {
		var nozzle = [50, 100, 80];
		var result = nozzle[Math.floor(Math.random() * 3)];
		return result;
		} else {
			return 0;
		}
	};
var randNozzle = getRandomNozzle();

if (randNozzle == 50) {
	document.querySelector(".scene-nozzle").innerHTML = " It has a Smooth-bore Nozzle on it";
} if (randNozzle == 100) {
	document.querySelector(".scene-nozzle").innerHTML = " It has a Fog Nozzle on it";
} if (randNozzle == 80) {
	document.querySelector(".scene-nozzle").innerHTML = " It has a Master Stream ground monitor on it";
};


//Outputs the the hose diameter based on the random coefficient in the HTML
if (randCoef == 15.5) {
	document.querySelector(".scene-hose").innerHTML = "1.5 inch";
} if (randCoef == 2) {
	document.querySelector(".scene-hose").innerHTML = "2.5 inch";
} if (randCoef == .8) {
	document.querySelector(".scene-hose").innerHTML = "3 inch";
} if (randCoef == .2) {
	document.querySelector(".scene-hose").innerHTML = "4 inch";
} if (randCoef == .08) {
	document.querySelector(".scene-hose").innerHTML = "5 inch";
};

//This will give us certain GPMs for handlines, and different ones for supply lines
if (randCoef == .2 || randCoef == .08) {
	var gpm = [200, 300, 400, 500, 600, 700, 800];
	var getRandomGPM = function () {
	var result = gpm[Math.floor(Math.random() * 7)];
	return result;
	}
} else {
	var gpm = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140];
	var getRandomGPM = function () {
	var result = gpm[Math.floor(Math.random() * 10)];
	return result;
		}

};
	var randGPM = getRandomGPM();



//the final answer, This runs all the variables
function totalFriction() {
  var first = randGPM * 2 / 100;
	var second = randCoef * first;
	var third = randLength / 100;
	var result = third * second + randNozzle;
  return Math.round(result);
};

//output of the values for the HTML
document.querySelector(".scene-1").innerHTML = randCoef;
document.querySelector(".scene-2").innerHTML = randGPM;
document.querySelector(".scene-3").innerHTML = randLength;
document.querySelector(".scene-4").innerHTML = totalFriction();
document.querySelector(".scene-5").innerHTML = randLength;
document.querySelector(".scene-6").innerHTML = randNozzle;


/*100, 10, 1, 100, 5*/

/*function getRandomGPM(min, max) {
  var rand = Math.random() * (20 - 10) + 10;
  var round = Math.round(rand);
  return round * 10;
};*/
/*(getRandomCoefficient() * ((getRandomGPM() * 2) / 100)) * getRandomLength() / 100;*/

/*function FrictionLossCoefficient(one_inch, two_inch, three_inch, four_hose, five_hose) {
	this.one_inch = one_inch;
	this.two_inch = two_inch;
	this.three_inch = three_inch;
  this.four_hose = four_hose;
  this.five_hose = five_hose;
};
var flhose = new FrictionLossCoefficient(15.5, 2, .8, .2, .08);

var getWork = function () {
var result = FrictionLossCoefficient[Math.floor(Math.random() * 5)];
return result;
};
console.log(getWork());*/

//The old way of doing it
/*//Sets up the object frame
function Result(nozzelPressure, elevation, appliance, hoseLength, frictionLoss, enginePressure) {
	this.nozzelPressure = nozzelPressure;
	this.elevation = elevation;
	this.appliance = appliance;
  this.hoseLength = hoseLength;
	this.frictionLoss = frictionLoss;
  this.enginePressure = enginePressure;
};

//finds friction loss in length of hose
var scene = new Result();
function frictionLossTest() {
  return scene.hoseLength /100;
};

//assigns values to the array above
scene.nozzelPressure = getRandom();
scene.elevation = 10;
scene.appliance = 1;
scene.hoseLength = 100;
scene.frictionLoss = 5;

//gets a random number for the array to use above
function getRandom(min, max) {
  var rand = Math.random() * (20 - 5) + 10;
  var round = Math.round(rand);
  return round * 10;
};

//output to see what is going on
/*console.log(Object.values(scene));*/
/*function final() {
  return scene.nozzelPressure + scene.elevation + scene.appliance;
};
/*console.log(final());*/
