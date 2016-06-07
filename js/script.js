function fizzbuzz () {
for (var x = 1; x <= 100; x += 1) {
  if (x % 3 == 0 && x % 5 == 0) 
  	print("FizzBuzz");
  else if (x % 3 == 0) 
    print("Fizz");
  else if (x % 5 == 0)
    print("Buzz");
  else
    print(x);
}
}

var out = document.getElementById("output");

function print(msg) {
  out.innerHTML += (msg) + "<br>";
}

fizzbuzz();

console.log("This JS file is loading")