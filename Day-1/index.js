// alert and window.alert pops an alert to the page with given message

/*
slice() --> slice string with index given in as parameter. Slice begin and end index
substring() -->  work same as slice first parameter cant be higher than second. if so js automaticly correct with this method.
substr() --> Taking 2 parameter first index of starting point second how many character will it take. Usage a.substr(0,5)
concat() --> Includes multiple variables to one. Usage a.concat(b,c,d)
repeat() --> Repeats the variable with given parameter. Usage a.repeat(2)
String() --> Converts the variable to absolute String. Usage String(a) or a.String()
Number() --> Same as String() converts type to absolute Number
valueOf() --> Same as = adds exact content to given var. Usage a=b.valueOf()
indexof() --> Returns first index of given parameter if not returns -1
lastindexof() --> Returns last index of given parameter if not returns -1
search() --> Returns first indexof given parameter. Usage "thisisapen".search(/is/)
includes() --> Returns true or false based on given parameter


*/
var alertMsg = "    Welcome to my page    ";
window.alert(alertMsg.trim());
var outputMsg="Hello World";
document.writeln(outputMsg);
document.writeln("with JavaScript");
document.getElementById("second").innerHTML="Hello World with inner html method";
document.writeln("<br />"+eval("outputMsg"));
var time = new Date()
document.writeln("<br />"+eval("time"));
