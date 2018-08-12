
var scenes = ["line-line.html", "fdc-line.html", "monitor-line.html", "supply-line-line.html"];
var getRandomScenario = function () {
var result = scenes[Math.floor(Math.random() * 4)];
return result;
};
var randScene = getRandomScenario();

var sceneLink = document.querySelector(".random-link");
sceneLink.setAttribute("href", randScene);
