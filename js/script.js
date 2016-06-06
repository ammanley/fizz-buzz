
for (var x = 1; x <= 100; x += 1) {
  document.write("Number: " + x);
  if (x % 3 == 0 && x % 5 == 0) 
  	document.write("Result:FizzBuzz");
  else if (x % 3 == 0) 
    document.write("Result: Fizz");
  else if (x % 5 == 0)
    document.write(" Result:Buzz");
  else
    document.write("Result: " + x);
  document.write("------");
}

console.log("This file is loading")

