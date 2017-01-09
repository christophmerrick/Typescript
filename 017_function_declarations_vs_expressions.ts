// function declaration

function fulllName(first : string, last : string) : string {
	return first + " " + last;
}


 // function expression

 var otherFullName : (first : string, last : string) => string;

 otherFullName = function(first : string, last : string) {
 	return first + " " + last;
 }

 var thirdFullName : ( first : string, last : string) => string = function(first : string, last : string) {
 	return first + " " + last;
 }

 console.log(fulllName('Jordan', 'Hudgens'));
 console.log(otherFullName('Jordan', 'Hudgens'));
 console.log(thirdFullName('Jordan', 'Hudgens'));