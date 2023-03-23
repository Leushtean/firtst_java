// let js = 'amazing';
// console.log(40+8+23-10);

// console.log('Nicolae');
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Variable name conventions

// let jonas_matilda = "JM";
// let $function = 27;
// let person = "Nicolae";
// let PI = 3.1415;

// let myFirstJob = 'Coder';
// let myCurrentJob = 'Programmer';
// console.log(myCurrentJob);

// //--=-=-=-=--=-=--=-=----=--=-=-=-=-=-=-=-=-=-=

// let country = 'Moldova';
// let continent = 'Europe';
// let population = '3 million';

// console.log(country);
// console.log(continent);
// console.log(population);

// // -=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-= D-A-T-A- T-Y-P-E

// let isIsland = 'USA';

// let = isIsland = country;
// console.log(isIsland);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof javascriptIsFunnny);
// console.log(typeof 23);
// console.log(typeof "Nicolae");

// javascriptIsFun = "YES!";
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 2023;
// console.log(typeof year);

// year = "Year";
// console.log(typeof year);

// isIsland = true;
// isIsland = "Moldova";
// console.log(isIsland);
// console.log(typeof isIsland);

// let population;
// population = 30000000;
// console.log(population);
// console.log(typeof population);

// country = true;
// country = "Moldova";
// console.log(country);
// console.log(typeof country);

// let lanquage;
// console.log(lanquage);
// console.log(typeof lanquage);

// let lanquageRo;
// console.log(lanquageRo);
// console.log(typeof lanquageRo);

//-=-=-=-=-=-=-=--=-=-=-=- L=E=T C=O=N=S=T V=A=R

// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1234;

// var job = 'programmer';
// job = 'teacher';

// lastName ='Tepordei';
// console.log(lastName);

//-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=- B A S I C   O P E R A T O R

//Math operators

// const now = new Date().getFullYear();
// const color = "red";
// const ageNicolae = now - 1975;
// const ageRodica = now - 2018;
// console.log(ageNicolae, ageRodica, color);

// console.log(ageNicolae * 2, ageRodica / 10, 2 ** 3);
// //2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Nicolae";
// const lastName = "Tepordei";
// console.log(firstName + " " + lastName);

//Asignment operators

// let x = 10 + 5; //15
// x += 10; // x = x+10     (10+15=25)
// x *= 4; //x = x*4 = 100  (25*4=100)
// x++; // x = x+1          (100+1=101)
// x--; //x = x-1           (101-1=100)
// x--; //x = x-1           (100-1=99)
// console.log(x);

//Comparison operators

// console.log(ageNicolae > ageRodica);
// console.log(ageRodica >= 18);

// const isFullAge = ageRodica >= 18;

// console.log(now - 1991 > now - 2018);

// let message = 'Hello';

// message = 'Noroc';
// alert (message);

// let $ =1;
// let _ =2;

// $ = 5;
// _ = 5;

// alert($ + _);

// let num = 5;
// num = '"5"';
// alert(num);

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=- O P E R A T O R   P R E C E D E N C E

// const now = 2023;
// const ageNicolae = now - 1975;
// const ageRodica = now - 1986;
// console.log(now - 1975 > now - 1986);

// let x, y;
// x = y = 25-10-5;
// console.log(x, y);

// const averageAge = (ageNicolae + ageRodica) / 2
// console.log(ageNicolae, ageRodica, averageAge);

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=- C o d i n g C h a l l e n g e # 1 -=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//////////////////////////////////////////////////////////////////
//  Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:

§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.





// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- S T R I N G S  A N D  T E M P L A T E  L I T E R A L S =-=-=-=-=-=-=-=-=

//  Strings and Template Literals

const firstName = 'Nicolae';
const job = 'teacher';
const birthYear = 1975;
const year = new Date().getFullYear();

const nicolae = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old, ' + job + '!';
console.log(nicolae);


const nicolaeNew = `I'm ${firstName}, a ${year - birthYear} years old, ${job}!`;
console.log(nicolaeNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=TAKING DECISIONS: IF / ELSE STATEMENTS=-=-=-=

///////////////////////////////////Taking Decisions: if / else Statements

const age = 16;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log(`Sarah can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years!`);
}

const birthYear = 2014;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);



//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=C O D I N G   C H A L L E N G E #2=-=-=-=

///////////////////////////////////  Coding Challenge #2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}



//=-=-=-=-=-=-=-=-=-=-=-=-=- T Y P E   C O N V E R S I O N   A N D   C O E R C I O N =-=-=-=-=-=-=-

///////////////////////////////////  Type Conversion and Coercion   ///////

// type conversion
// const inputYear = '1991';
// console.log(Number (inputYear), inputYear);
// console.log(Number (inputYear) + 18);

// console.log(Number ('Nicolae'));
// console.log(typeof NaN);
// console.log(String(23), 23, (Number (inputYear)));

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('I am ' + '23' + ' years old');
// console.log('23' + '10' - 3); // 23 - 10 - 3 = 10 .. minus face in cifre!
// console.log('23' + '3' - 3); // nimic!
// console.log('23' * '10' - 3); // 23 * 10 = 230 +- 3 = 230(227) multiply este aici in cifre!
// console.log('25' / '10' + 5); // 25 / 10 = 7.5 +- 5 = 7.5(-2.5) divide este aici in cifre!

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// console.log('3' + '1' - 30);

//=-=-=-=-=-=-=-=-=-=-=-=-=- T R U T H Y   A N D   F A L S Y   V A L U E S =-=-=-=-=-=-=-

///////////////////////////////////  Truthy and Falsy Values   ///////

// 5 falsy values: 0, '' , undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Nicolae"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;

if (money) {
  console.log("Don`t spend it all!");
} else {
  console.log("Go get a job!");
}

let height;

if (height) console.log("Yeay, height is defined!");
else console.log("Ups. Height is undefined");


console.log("5" == 5); //true
console.log("5" === 5); //false
*/

//=-=-=-=-=-=-=-=-=-=-=-=-=- Equality Operators: == vs. === =-=-=-=-=-=-=-

/////////////////////////////////////  Equality Operators: == vs. === ///////////////////////////////////

// const age = "18";

// if (age === 18) {
//   console.log("You just become an adult! (strict)");
// }
// if (age == 18) {
//   console.log("You just become an adult! (loose)");
// }

// console.log("5" == 5); //true
// console.log("5" === 5); //false

 

// const time = 18;

// if (time < 12) {
//   console.log('Good morning!');
// } else if(time >= 12 && time < 18) {
//   console.log('Good Day!');
// } else {
//   console.log('Good Evening!');
// }



// const favorite = Number(prompt("What`s your favorite number?")) ;

// console.log(favorite);
// // console.log(typeof favorite);

// if (favorite === 23) {
//   console.log('Cool! 23 is my number!')
// } else if(favorite <= 23 && favorite > 10){
//   console.log('Amazing, that`s my number as well!');
// } else if(favorite === 5){
//   console.log('Amazing, that`s my number as well! 55555');
// } else if(favorite === 9){
//   console.log('Number 9, 9 waves in the sthorm');
// }
// else {
//   console.log('Ups! wrong number! try again');
// }

// if (favorite !==23) console.log('Why not 23?');



// =-=-=-=-=-=-=-=-=-=-=-=-=- B O O L E A N   L O G I C === =-=-=-=-=-=-=-
/////////////////////////////////////  Boolean Logic === ///////////////////////////////////


// const hasDriverLicense = true; // A
// const hasGoodVision = true; // B


// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);


// // if(hasDriverLicense && hasGoodVision) {
// //   console.log('Sarah is able to drive!');
// // } else {
// //   console.log('Not, Sarah is not able...');
// // }

// const isTired = true;
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if(hasDriverLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Not, Sarah is not able...');
// }


//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=C O D I N G   C H A L L E N G E  # 3=-=-=-=

///////////////////////////////////  Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(Math.round(scoreDolphins)), (Math.round(scoreDolphins));

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy!!!');
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas team win the trophy!');
} else if (scoreDolphins === scoreKoalas) {
  console.log('Draw!!!');
}