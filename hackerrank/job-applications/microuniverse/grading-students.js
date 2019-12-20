function gradingStudents(grades) {
    // Write your code here
    const roundedGrades = grades.map(element => {
        const nextMultipleOf5 = 5 * (Math.floor(element / 5) + 1);
        if (nextMultipleOf5 - element < 3 && nextMultipleOf5 >= 40) {
            return nextMultipleOf5;
        } else {
            return element;
        };
    });
    return roundedGrades;
};

console.log(gradingStudents([73, 67, 38, 33])); //[75, 67, 40, 33]
console.log(gradingStudents([20, 39, 78, 89, 100])); // [20, 40, 80, 90, 100]