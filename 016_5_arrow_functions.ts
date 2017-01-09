var fullName = (first, last) => {
	return first + " " + last;
}

console.log(fullName('Jordan', 'Hudgens'));

var gradeGenerater = (grade: number) : string => {
	if (grade < 60) {
		return 'F'
	} else if (grade >= 60 && grade < 70) {
			return 'D'
	} else if (grade >= 70 && grade < 80) {
			return 'C'
	} else if (grade >= 80 && grade < 90) {
			return 'B'
	} else {
		return 'A'
	}
}

console.log(gradeGenerater(45));
console.log(gradeGenerater(100));
console.log(gradeGenerater(80));