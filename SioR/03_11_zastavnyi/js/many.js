//Оголосити змінні a,b,c.
// Привести їх до числового типу. Знайти значння дискримінанту. Знайти розвязки квадратного рівняння a*x*x+b*x+c . 
//Використовувати різні формули в залежності від дискримінанту: d=b*b*-4*a*c. Виведіть результат.
let a = +'3';
let b = +'20';
let c = +'5';
let d = Math.pow (b, 2)- 4*a*c; //формула визначення дискримінанту
console.log(d);
let x1 = (-b + Math.sqrt(d))/ 2*a; //перший розвязок рівнняння
console.log(x1);
let x2 = (-b - Math.sqrt(d))/ 2*a; //другий розвязок рівнняння
console.log(x2);

//**) Користувач вводить пароль у prompt(). 
//Використайте розгалуження та властивості рядків щоб переконатися, 
//що пароль містить хоча б 6 симфолів, спец. символ та інші відомі вам правила надійності паролю.
let password = prompt("what password?");
let number = password.includes ("0") || password.includes ("1") || password.includes ("2")|| password.includes ("3")|| password.includes ("4")|| password.includes ("5")|| password.includes ("6")|| password.includes ("7") || password.includes ("8") || password.includes ("9");
let symbol = password.includes ("?") || password.includes ("!") || password.includes ("@")|| password.includes ("$")|| password.includes ("%")|| password.includes ("#");
if (password.length > 6 && number === true && symbol === true){
    console.log("Its write password")
} else{
   alert("It's not good password")
}