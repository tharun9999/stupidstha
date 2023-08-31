//functions 

'use strict';
//function declaration
/*
function describeCountry(country, population, captialcity) {
    return `${country} has ${population} million people and its captial city is ${captialcity}`;

}

const countryName = prompt("Enter Country Name :");
const countryPopulation = Number(prompt("Enter country population"));
const countryCaptail = prompt(" Enter the captial city name")
const detailsOfCountry = describeCountry(countryName, countryPopulation, countryCaptail)
console.log(detailsOfCountry);
*/

//function declaration && function expression
/*

const calculate = (populationOfCountry, worldPopulation) => {
    // const populationOfCountry = Number(prompt("Enter the country population"));
    return (populationOfCountry / worldPopulation) * 100;
}

function percantageOfWorld1(worldPopulation, country) {
    const populationOfCountry = Number(prompt("Enter the country population"));
    // const caluclateThePopulation = (populationOfCountry / worldPopulation) * 100;
    const caluclateThePopulation = calculate(populationOfCountry, worldPopulation);
    // return `${country} has ${populationOfCountry} million people, so it's about ${caluclateThePopulation}% of the world population`;
    return `${country} : ${caluclateThePopulation}`
}
const percantageOfWorld2 = function (worldPopulation, country) {
    const population = percantageOfWorld1(worldPopulation, country);
    return population;
}

const worldPopulation = Number(prompt("Enter the world population"));
const secondCountry = prompt("Enter the second country name");
const thirdCountry = prompt("Enter the third country name");
const fourthCountry = prompt("Enter the fourth country name")
const countryName = prompt("Enter the country name");
const firstCountryPopulation = percantageOfWorld1(worldPopulation, countryName);
const secondCountryPopulation = percantageOfWorld2(worldPopulation, secondCountry);
const thirdCountryPopulation = percantageOfWorld1(worldPopulation, thirdCountry);
const fourthCountryPopulation = percantageOfWorld2(worldPopulation, fourthCountry)


console.log(firstCountryPopulation);


//Arrays


const population = ['india', 'canada', 'china', 'usa'];
const percentages = [firstCountryPopulation, secondCountryPopulation, thirdCountryPopulation, fourthCountryPopulation]

console.log(population);
console.log(percentages);
*/

/*

//creating a array of elements
const neighbours = new Array("Canada", "India", "China", "Pakistan");

//adding a element in array

neighbours[4] = "USA";
console.log(neighbours);

//removing last ellement in array

neighbours.pop();
console.log(neighbours);

//removing first element in array

neighbours.shift();
console.log(neighbours);


//adding ellements in a last in array


neighbours.push('Afaganistan');
console.log(neighbours);

//adding elements in first array

neighbours.unshift('Srilanka');
console.log(neighbours);



//index of element in array


const indexElement = neighbours.indexOf('India');
console.log(indexElement);

//length of an array

console.log(neighbours.length);

//includes of an array strict case

if (neighbours.includes('Srilanka')) {
    console.log('It is a asia continet')

} else {
    console.log('it is not an asian continent')
}

*/


//coding question

/*

const tipCaluclator = function (elements) {

    if (elements > 50 && elements <= 300) {
        const tip = 15;
        const tipValue = (elements * tip) / 100;
        return elements + tipValue

    }
    else {
        const tip = 20;
        const tipValue = (elements * tip) / 100;
        return elements + tipValue;
    }
}

const data = [125, 555, 44];
const data1 = tipCaluclator(data[0]);
const data2 = tipCaluclator(data[1]);
const data3 = tipCaluclator(data[2]);
const totalBill = new Array(data1, data2, data3);
console.log(totalBill);

*/

//object with dot notation and bracket notation and using function in object we call those function by using this keyword

/*
const myCountry = {
    country: 'india',
    captial: 'delhi',
    language: 'hindi',
    population: 151,
    neighbours: ['pakistan', 'china', 'nepal', 'srilanka'],
    isIsland: true,
    getCountryDetails: function () {
        this.stringValue = `${this.country} has ${this.population} million ${this.language}-speaking people are 18 percent ${this.neighbours.length} neighbouring countries and a captial called ${this.captial}`;
        return this.stringValue;
    },
    checkIsland: function () {
        this.stringValue = `${this.isIsland === true ? 'there is a isaland for this country' : ' there is no island for this country'}`;
        return this.stringValue;
    }
};

console.log(myCountry);

console.log(myCountry.getCountryDetails());

//dot notation

const increasePopulation = myCountry.population += 2;
console.log(increasePopulation);
console.log(`country population ${myCountry.population} has increased two million and now the result is ${increasePopulation}`);

console.log(" ---- ------");

//bracket notation
const decreasePopulation = myCountry['population'] -= 2;
console.log(decreasePopulation);
console.log(`country population is ${myCountry['population']} has decreased two million and now the result is ${decreasePopulation}`);


console.log(myCountry.checkIsland());

*/


//coding question on object method
/*
const markMethod = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcMarkBMI: function () {
        this.data = this.mass / (this.height ** 2);
        return this.data;
    }
}


const johnMethod = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcJohnBMI: function () {
        this.johnData = this.mass / (this.height ** 2);
        return this.johnData;
    }
}

const markData = (markMethod.calcMarkBMI());
const johnData = johnMethod['calcJohnBMI']();


console.log(`${markData < johnData ? `${markMethod.fullName} BMI (${markMethod.calcMarkBMI()}) is higher than ${johnMethod.fullName}
BMI (${johnMethod['calcJohnBMI']()})` : `${markMethod.fullName} BMI (${markMethod.calcMarkBMI()}) is lower than ${johnMethod.fullName}
BMI (${johnMethod['calcJohnBMI']()})`}`)

*/
//for loop
/*
const elections = 50;

for (let eachVoter = 1; eachVoter <= 50; eachVoter++) {
    console.log(`Voter number ${eachVoter} is currently voting..`)
}

*/
//loops in loops
/*
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];


for (let eachArray = 0; eachArray < listOfNeighbours.length; eachArray++) {
    // console.log(listOfNeighbours[eachArray]);
    for (let elementOf = 0; elementOf < listOfNeighbours[eachArray].length; elementOf++) {
        console.log(`Neighbours: ${listOfNeighbours[eachArray][elementOf]} for each country`)
    }
}

*/


//weather Forecasting coding question



const printForecast = function (arr) {
    let a = ``;
    for (let i = 0; i < arr.length; i++) {

        a = a + `...${arr[i]}°C in ${i + 1} days`
    }

    console.log(a);
}

const newArray = new Array(17, 21, 23)

printForecast(newArray)