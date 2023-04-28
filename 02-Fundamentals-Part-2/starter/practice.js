//Country Question
const country = "Japan";
const population = 100;
const language = "Japanese";
const numNeighbours = 0;
const island = true;
capitalCity = "Tokyo";

console.log("========");

//Compare your country's population and the world's average
if (population > 33) {
  console.log(
    `${country}'s population is ${population - 33} million above the average.`
  );
} else if (population < 33) {
  console.log(
    `Japan's population is ${33 - population} million below the average.`
  );
} else {
  console.log("${country}'s population is same as the average.");
}

console.log("========");

//How many neighbour country does your country have?
if (numNeighbours > 1) {
  console.log(`There are ${numNeighbours} neighbouring countries.`);
} else if (numNeighbours === 1) {
  console.log("Only one borders");
} else {
  console.log("No border");
}

console.log("========");

//Which country does Sarah want to live in?
if (language === "English" && population < 50 && !island) {
  console.log(`You should live in ${country}!`);
} else {
  console.log(`${country} does not meet your criteria.`);
}

console.log("========");

//Which language is spoken the most?
switch (language) {
  case "Chinese":
    console.log("MOST number of native speakers");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

console.log("========");

//Ternary Operator
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average.`
);

console.log("========");

function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capitalcity is ${capitalCity}.`
  );
}
describeCountry(country, population, capitalCity);

console.log("========");

function percentageOfWorld1(population) {
  const percentage = (population / 7900) * 100;
  console.log(
    `${country} has ${population} million people, so it's about ${percentage}% of the world population`
  );
}
percentageOfWorld1(population);

const percentageOfWorld2 = function (population) {
  const percentage = (population / 7900) * 100;
  console.log(
    `${country} has ${population} million people, so it's about ${percentage}% of the world population`
  );
};
percentageOfWorld2(population);

const percentageOfWorld3 = (population) => {
  const percentage = (population / 7900) * 100;
  console.log(
    `${country} has ${population} million people, so it's about ${percentage}% of the world population`
  );
};
percentageOfWorld3(population);

console.log("========");
