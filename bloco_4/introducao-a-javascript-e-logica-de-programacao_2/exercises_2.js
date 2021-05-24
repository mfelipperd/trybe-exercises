/*let numbers = [5,9,3,19,70,9,100,2,35,27];
for (let numbersIndex = 0; numbersIndex < numbers.length; numbersIndex += 1) {
    console.log(numbers[numbersIndex])
}*/
let numbers = [5,9,3,19,70,9,100];
let soma=0
let media=0
let numeroMaior=0
let numeroImpar=0
for (let numbersIndex = 0; numbersIndex < numbers.length; numbersIndex += 1){
/*
console.log(numbers[numbersIndex])

soma += numbers[numbersIndex];
    media = soma/numbers.length;
if(media>20) {
    console.log("Valor maior que 20")
} else {
    console.log("Valor maior ou igual a 20")  

if(numeroMaior<numbers[numbersIndex]){
    numeroMaior = numbers[numbersIndex]};
}

};
*/
if (numbers[numbersIndex]%2 !=0 ){numeroImpar = numbers[numbersIndex]
} else {
    console.log("nenhum valor impar encontrado")};

console.log(numeroImpar)
}

