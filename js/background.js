const BODY = document.getElementsByTagName("body")[0];
const backgroundColors = [ "#FFAFAF", "#FF9999", "#181D31", "#678983", "#C9CBFF", "#FFE3E3", "#93B5C6"];
const chosenBackgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

BODY.style.backgroundColor = chosenBackgroundColor;