// exercicio 4.4.2.1

/*function verificaPalindrome(palavra) {
    let arrayLetras = palavra.split('');
    let isPalindrome = true;
    for (let index in arrayLetras) {
      if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
        isPalindrome = false;
      }
    }
    return isPalindrome;
  }

  
console.log(verificaPalindrome('arara'));*/


//exercicio 4.4.2.2
/*
function maiorNumero(numeros){
    let maiorDOSNumeros = 0;
    for(let index in numeros){
        if(numeros[maiorDOSNumeros] < numeros[index]) {
            maiorDOSNumeros = index;
            }
        }
        return maiorDOSNumeros;
    }
console.log(maiorNumero([2, 3, 6, 7, 10, 1,11,12,-3,88,1000]));
*/

// exercicio 4.4.2.3
/*
function menorValor (numeros){
    let indexMenor = 0;
    for (let index in numeros){
        if(numeros[indexMenor] > numeros[index]){
            indexMenor = index;
        }
        
    }
   return indexMenor;
}
console.log(menorValor([3,4,5,6,3,1,5,4,5,5,6,66,]))
*/

//exercicio 4.4.2.4
/*
function maiorPalavra(nome){
    let maiorPalavra = nome[0];
    for (let index in nome){
        if (maiorPalavra.length < nome[index].length){
            maiorPalavra = nome[index];
        }
    }
    return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
*/

// exercicio 4.4.2.5
/*
----------------------------------------------------Duvidas -----------------------------------------------------------------------------------
function maisRepeitdo(numeros){
}
*/

// exercicio 4.4.2.6
/*
function somaDETodos(numeros){
    let total = 0
    for( let index = 1; index <= numeros ; index += 1){
        total = total + index;

    }
    return total;
}
console.log(somaDETodos(1000123456789));
*/

// exercicio 4.4.2.7
//---------------------------------------------------- Duvida--------------------------------------------------------------------------
