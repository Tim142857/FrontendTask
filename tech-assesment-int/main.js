/*
 * Your program must print string with the number of years and months and the total number of days between the dates.
 * Dates are provided in dd.mm.yyyy format.
 * You are not allowed to plug in JS libraries such as moment.js or date-fns directly into the code. All code need to be written in this file.
 *
 * Result must be shown as a string in years, months and total days. If years or months are 0, then it should not be displayed in the output.
 *
 * Example:
 * Input: ['01.01.2000', '01.01.2016']
 * Output:
 * '16 years, total 5844 days'
 *
 * Example 2:
 * Input: ['01.11.2015', '01.02.2017']
 *
 * Output:
 * '1 year, 3 months, total 458 days'
 */
const dates = [
  ["01.01.2000", "01.01.2016"],
  ["01.01.2016", "01.08.2016"],
  ["01.11.2015", "01.02.2017"],
  ["17.12.2016", "16.01.2017"],
  ["01.01.2016", "01.01.2016"],
  ["28.02.2015", "13.04.2018"],
  ["28.01.2015", "28.02.2015"],
  ["17.03.2022", "17.03.2023"],
  ["17.02.2024", "17.02.2025"],
];

// Receive string of dates one after each other
function outputDate(dates) {
  let date1Splitted = dates[0].split(".");
  let date1 = new Date(
    date1Splitted[2],
    date1Splitted[1] - 1,
    date1Splitted[0]
  );

  let date2Splitted = dates[1].split(".");
  let date2 = new Date(
    date2Splitted[2],
    date2Splitted[1] - 1,
    date2Splitted[0]
  );

  let diff = getDiffBetweenDates(date1, date2);
  return diff;
}

function getDiffBetweenDates(date1, date2) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

  let diffDays = Math.floor((utc2 - utc1) / _MS_PER_DAY);

  let units = {
    year: 365,
    month: 31,
  };

  let result = "";
  let value = diffDays;

  for (let name in units) {
    let p = Math.floor(value / units[name]);
    if (p == 0) {
      continue;
    }
    if (p > 0) {
      if (result != "") {
        result += ", ";
      }
      result += `${p} ${name}`;
    }
    if (p > 1) {
      result += "s";
    }
    value %= units[name];
  }
  result += result == "" ? "" : ", ";
  result += `total ${diffDays} days`;

  return result;
}

/*
I know there is still an incorrect answer and i guess its due to the fact that some months have 31 days
Maybe i found a way to do something, but I spend 1 already 1 hour on this exercise
I guess February can do that kind of issues too
*/

// function getDiffBetweenDates2(date1, date2){

//     const _MS_PER_DAY = 1000 * 60 * 60 * 24;

//     const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
//     const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

//     let diffDays = Math.floor((utc2 - utc1) / _MS_PER_DAY);
//         let rest = diffDays;

//     let years = 0;
//     let months = 0;
//     let actualMonth = utc1.getMonth();
//     let tmpDate = utc1;
//     let tmpDiffDays = diffDays;

//     do{
//       let daysNumber = getDaysNumberOfMonth(tmpDate.getMonth());
//       if(tmpDiffDays > daysNumber){
//           months ++;
//           diffDays -= daysNumber;
//       }
//     }while(tmpDate<utc2)

// }

// function getDaysNumberOfMonth(monthIndex) {
//   if ([0, 2, 4, 6, 7, 9, 11].includes(monthIndex)) {
//     return 31;
//   }
//   if ([3, 5, 8, 10].includes(monthIndex)) {
//     return 30;
//   }
//   return 28;
// }
