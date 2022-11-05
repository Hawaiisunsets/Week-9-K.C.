// let company = {
//     name: `Starbucks`,
//     yearlyRevenue: 1000000,
//     ceo: `Bob`,
//     numberOfEmployees: 10,
//     managers: [`John`, `Steve`, `Tony`, `Me`]
// }

let company = {
    name: `Starbucks`,
    yearlyRevenue: 1000000,
    ceo: `Bob`,
    numberOfEmployees: 10,
    managers: [
        {
            name: `John`,
            salary: 75000,
            isSenior: false
        },
        {
            name: `Steve`,
            salary: 90000,
            isSenior: false
        },
        {
            name: `Tony`,
            salary: 140000,
            isSenior: true
        },
    ]
}

if (company[`yearlyRevenue`] >= 1000000){
    // console.log(`Congratulation! ${company[`name`]} ${company[`ceo`]} ${company[`numberOfEmployees`]}`);
    // Same as below
    console.log(company[`name`]);
    console.log(company[`ceo`]);
    console.log(company[`numberOfEmployees`]);
} else {
    console.log(`Keep trying!`);
}

// length is infinite number is you need to add more manager names

let counter = 0;
while (counter < company[`managers`].length){
    console.log(company[`managers`][counter][`name`]);
    console.log(company[`managers`][counter][`salary`]);
    if (company[`managers`][counter][`isSenior`] === true){
        console.log(`You won the manager game!`);
    }
    counter = counter +1;
}

for (let counter = 0; counter < company[`managers`].length; counter++){
    console.log(company[`managers`][counter][`name`]);
    console.log(company[`managers`][counter][`salary`]);
}