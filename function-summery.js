/* 
// Function Declare

function functionName(parameters) {
    block of codes / function body
    return value or variable;
}

// Function call

functionName(parameters) [without return]

const returnedValue = functionName(parameters);
console.log(returnedValue); 
*/

function getAverage(assignment1, assignment2, assignment3) {
	const total = assignment1 + assignment2 + assignment3;
	const average = total / 3;
	return average;
}

const Marks1 = 60;
const Marks2 = 59;
const Marks3 = 60;

const assignmentAvg = getAverage(Marks1, Marks2, Marks3);
console.log("Assignment Marks:", assignmentAvg);
