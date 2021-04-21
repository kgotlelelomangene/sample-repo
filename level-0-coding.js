//Task 0.1
console.log("Task 0.1");

var x = 0;
var y = 1;

console.log("The value of x : " + x);
console.log("The value of y : " + y);

x = x + 3;
y = y + x;

console.log("The value of x : " + x);
console.log("The value of y : " + y);


//Task 0.2
console.log("\nTask 0.2 ");

var x = 1 + 1 * 2;
var y = (1 + 1) * 2;
var z = 1 + ( 1 * 2 );
var a = 1 + 1 * 2 / 2;
var b = (1 + 1 * 2 ) /  2;

console.log("The value of x : " + x);
console.log("The value of y : " + y);
console.log("The value of z : " + z);
console.log("The value of a : " + a);
console.log("The value of b : " + b);

//Task 0.3
console.log("\nTask 0.3 ");

function hello(str){
    console.log("Hello " + str);
}

hello("Kgotlelelo");

//Task 0.4
console.log("\nTask 0.4 ");

function evenOrOdd(int){
    if(int%2 == 0 ){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
        
}

evenOrOdd(12);

//Task 0.5
console.log("\nTask 0.5 ");

function areaOfATriangle(sideA ,sideB ,sideC ){

    var semiP;
    var area;
    
    semiP = (sideA + sideB + sideC) / 2;
    area = Math.floor(Math.sqrt(semiP * ((semiP - sideA)*(semiP - sideB)*(semiP - sideC))));

    return console.log(area);
}
areaOfATriangle(10,12,15);


//Task 0.6
console.log("\nTask 0.6 ");

function maximumNum(num1, num2, num3){

    if(num1 > num2 && num1 > num3){
        console.log(num1 + " is the maximum number");
    }
    else if(num2 > num1 && num2 > num3){
        console.log(num2 + " is the maximum number");
    }
    else if(num3 > num1 && num3 > num2){
        console.log(num3 + " is the maximum number");
    }
}

maximumNum(9,72,8);


//Task 0.7
console.log("\nTask 0.7 ");

function celsiusToFahrenheit(num){
  var fahrenheit = (num * (9/5)) + 32;

  console.log(num + "*C is equivalent to " + fahrenheit + "*F");

}
celsiusToFahrenheit(10);


function fahrenheitToCelsius(num){
    var celsius = (num - 32) * (5/9);

  console.log(num + "*F is equivalent to " + celsius + "*C");

}
fahrenheitToCelsius(50);




//Task 0.8
console.log("\nTask 0.8 ");

function hoursAndMinutes(num){
    var hours = Math.floor(num/60);
    var minutes = Math.floor(num%60);

    console.log(num +  " has " + hours + " hour(s), " + minutes + " minute(s)");
}

hoursAndMinutes(71);


//Task 0.9
console.log("\nTask 0.9 ");

function vowels(str){

    var vowel = str.match(/[aeiou]/gi);
    vowel.forEach(x => {console.log(x) });;

}

vowels("We learn");


//Task 0.10
console.log("\nTask 0.10 ");

function commonCharacters(str1, str2){

    var common = "";

    var arr1 = str1.split("");
    var arr2 = str2.split("");

    for (let i = 0; i < arr1.length; i++) {
        var index = arr2.indexOf(arr1[i]);
        if (index !== -1) {
            arr2.splice(index, 1);
             
            common = common + " " + arr1[i];
            
        }
    }

    return console.log("Common letters: " + common);

}

commonCharacters("house","computers");



