const goals = [8, 1, 1, 3, 2, -1, 5];

let maxGoals=0;
let bestMatch=1;
//let minGoals=1;
let weakMatches=[];
let allSeasonGoals=0;
let autoDefeat='нет';

// let increaseGoals=goals.map((item)=>{
//     return item;
// });
// increaseGoals=increaseGoals.sort( (a, b) => a - b );
//console.log('goals',goals);
//console.log('increase',increaseGoals);
let increaseGoals=[...goals].sort( (a, b) => a - b );
let minGoals=increaseGoals.find(item => Number(item)>0);

for (let i=0;i<goals.length;i++) {
    if (goals[i]>maxGoals) {
        maxGoals=goals[i];
        bestMatch=i+1;
    }
    if (goals[i]===minGoals) {
        weakMatches.push(i+1);
    }
    if (goals[i]>0) {allSeasonGoals=allSeasonGoals+goals[i]}

    if (goals[i]<0) {autoDefeat='да'}
}

let averageOfGoals=Math.round(allSeasonGoals/goals.length);

alert(`Самый результативный матч был под номером ${bestMatch}. В нем было забито ${maxGoals} гол(ов).`);
alert(`Самые нерезультативные матчи были под номерами ${weakMatches}. 
В каждом из них было забито по ${minGoals} мячу(а).`);
alert(`Общее количество голов за сезон равно ${allSeasonGoals}`);
alert(`Были автоматические поражения: ${autoDefeat}`);
alert(`Среднее количество голов за матч равно ${averageOfGoals}`);
alert(`Количество голов в матчах в порядке возрастания: ${increaseGoals}`);

//another
// const goals = [8, 1, 1, 3, 2, -1, 5];

// let maxNumberOfGoals = goals[0];
// let maxNumberOfGoalsIndex = 0;

// let minNumberOfGoals = goals[0];

// goals.forEach((goalNumber, index) => {
//   if (goalNumber > maxNumberOfGoals) {
//     maxNumberOfGoals = goalNumber;
//     maxNumberOfGoalsIndex = index;
//   }
//   if (goalNumber < minNumberOfGoals && goalNumber >= 0) {
//     minNumberOfGoals = goalNumber;
//   }
// });

// const matchesWithMinNumberOfGoals = goals
//   .map((goalNumber, index) =>
//     goalNumber === minNumberOfGoals ? index + 1 : -1
//   )
//   .filter((goalNumber) => goalNumber > 0)
//   .join(", ");

// alert(
//   `Самый результативный матч был под номером ${
//     maxNumberOfGoalsIndex + 1
//   }. В нем было забито ${maxNumberOfGoals} гол(ов).`
// );
// alert(
//   `Самые не результативные матчи были под номерами ${matchesWithMinNumberOfGoals}. В каждом из них было забито ${minNumberOfGoals} мяча(у).`
// );

// const numberOfGoalsPerSeason = goals.reduce((acc, goalNumber) => {
//   return goalNumber >= 0 ? acc + goalNumber : acc;
// }, 0);

// alert(`Общее количество голов за сезон равно ${numberOfGoalsPerSeason}`);

// const wereAutomaticLoses = goals.some((goalNumber) => goalNumber < 0);
// if (wereAutomaticLoses) {
//   alert("Были автоматические поражения: да");
// } else {
//   alert("Были автоматические поражения: нет");
// }

// const averageNumberOfGoalsPerMatch = numberOfGoalsPerSeason / goals.length;

// alert(`Среднее количество голов за матч равно ${averageNumberOfGoalsPerMatch}`);

// const ascendingOrderGoals = [...goals].sort((a, b) => a - b);

// alert(ascendingOrderGoals.join(", "));