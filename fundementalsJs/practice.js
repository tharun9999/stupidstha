//values and variables
/*const country = "india";
const continet = "Asia";
const population = "128 billion";

console.log(`In ${country} has ${population} and one of the continet in ${continet}`)

//data types

const isIsland = true;
let language;
language = "english"
console.log(`in this country have any island ${isIsland}
 and population is  ${population} if language is ${language}`);
*/

//coding challange

/*
const marksWeight = 78;
const marksHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const marksBmi = (marksWeight / marksHeight) ** 2;
const johnBmi = (johnWeight / johnHeight) ** 2;

const markHigherBMI = (marksBmi > johnBmi)


console.log(markHigherBMI === true ? `Mark has a higher BMI than John` : `John has a higher BMI than Mark`);
*/

//switch case and else if practice question--

/*
const language = prompt("Enter a language");

switch (language) {
    case "chinese" || "mandarin":
        console.log('Most number of native places speak this language');
        break;
    case "spanish":
        console.log("2nd place in number of native place");
        break;
    case "english":
        console.log('3rd place of native speak this language');
        break;
    case "hindi":
        console.log('Number 4');
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log('Great Language to : D');
}

if (language == "chinese" || language == "mandarin") {
    console.log("Most number of native places speak this");

} else if (language === "spanish") {
    console.log("2nd place in number of native place");
} else if (language === "english") {
    console.log("3rd place of native speak");
}
else if (language === "hindi") {
    console.log("Number 4");

} else if (language = "arabic") {
    console.log("5th most spoken language");
} else {
    console.log("Great Language to :D");
}

*/

const bill = Number(prompt("enter the bill value"))
let tip;
tip = Number(prompt("enter a tip value"));
const tipValue = (bill * tip) / 100;
switch (bill) {
    case bill > 50 & bill <= 300:
        console.log(`The bill was ${bill} , the tip was ${tipValue} and the total value ${bill + tipValue}`);
        break;
    case bill > 301:
        console.log(`The bill was ${bill} , the tip was ${tipValue} and the total value ${bill + tipValue}`);
        break;

    default:
        console.log(`the tip value is 20 percent`);
}


if (bill > 50 && bill <= 300) {
    tip = Number(prompt("enter a tip value"))
    const tipValu = (bill * tip) / 100
    console.log(`The bill was ${bill} , the tip was ${tipValu} and the total value ${bill + tipValu}`);
}
else {
    tip = Number(prompt("enter a tip value"))
    const tipValu = (bill * tip) / 100
    console.log(`The bill was ${bill} , the tip was ${tipValu} and the total value ${bill + tipValu}`);
}

const tipItem = Number(prompt("Enter the terninary tip ammount"));
const valueOfTheTip = (bill * tipItem) / 100

console.log(`The bill was ${bill}, the tip was ${valueOfTheTip} and the total value ${bill + valueOfTheTip} `)

