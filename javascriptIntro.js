/*

Javascript	runs in the browser, Case sensitive language.
Interpreted Language, Does not need compilation. Runs line by line.

Main Uses:
Form validation - checking the forms for errors 
Pop up ads - usually opens automatically depending on user action
Dynamic pages - (Static pages meaning content is fixed) User can modify the 
content of the site at runtime. 

Syntax of javascript:
<script type = “text/javascript”> code here </script>
<script language=“javascript”>  code here </script>

we can use javascript code in <head> tag or <body> tag,
we can write the javascript code in external file and extension be .js
<script type=“text/javascript” src=“path of the javascript file”></script>


History of javascript
in 1994 invented by Brendon Eich at netscape, known as livescript or mocha.


Printing Statement:
document.write(“welcome”);	//welcome
we can use all html tags and css properties but we should use them inside the document.write

Comments:
User understanding purpose. They don’t get printed in the output.
// single line comment
/* */ multi line comment

example:
<html><head>
<script type=“text/javascript”>
document.write(“<h2>Welcome</h2>”);
document.write(“<font size=9> color=blue>  how re u? </font>”);
</script></head>
<body>
<script language=“javascript”>
document.write(“<img src=11.jpg>”);
</script></body></html>




Variables  Used to store the data. 

Datatypes:
int 	numbers
float 	decimal values
char 	single character ‘ ’
string	collection of characters, word
boolean	true or false
NULL	empty

example:
<html><head>
<script type=“text/javascript”>
//variable declaration
var a = 10;
var c = ‘@’;
var name = “David”;
</script></head>
<body>
<script language=“javascript”>
document.write(“  printing values of variables:  ” + a  + “ ” + c  + “ ”+ name);
</script></body></html>

Prompt Box
prompt(“enter input”);  gets string input from User
parseInt(prompt(“enter input”);  convert string input to int
var a = prompt(“Enter your gender”).toLowerCase();	//convert user input to lower case 									
                                    //and assign it to variable a


Loops		Used for repeated execution of statements or group of statements.
	Steps: Initialization, condition checking, statements and updating (++ or - -)

While Loop:
initialization; while(condition) {  statement; updating;  } 

DoWhile Loop:
initialization; do {  statements; updating;  } while(condition);

For Loop:
for(initialization;  condition; updating;)  {  statements;  }

Nested Loop: 
for(initialization; condition; updating; ) { 
	for(initialization;  condition; updating;) { statements; } 
}
<script type="text/javascript">

//example1 Loop:   while() {};
var t=1;
while(t<5)  {
	document.write("<br>output: while Loop: " + t);
	t++;
}

//example2 Loop:   do {} while();
var d=5;
do {
	document.write("<br>output: do{} while() Loop: " + d);
	d++;
} while (d<10);

//example3 Loop:   for() {};
for(k=1; k<=4; k++) {
	document.write("<br>outpur: for Loop: " + k);
}
 
//example4 Loop: Nested  for() {  for() { }  };
var i,j;
for(i=1; i<=5; i++) {
	for(j=1; j<=i; j++) {
		document.write(j + "j: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	}
	document.write("<br>");
}

</script>



*/
