// Write your function here:
const howOld = (age, year) => {
  const d = new Date();
  const currYear = d.getFullYear();
  if (year > currYear) {
    return `You will be ${age + (year - currYear) } in the year ${year}`;
  } else if (year < currYear - age) {
    return `The year ${year} was ${(currYear - age) - year} years before you were born`;
  } else {
    return `You were ${year - (currYear - age)} in the year ${year}`;
  }
}

// Once your function is written, write function calls to test your code!
console.log(howOld(46,1960))