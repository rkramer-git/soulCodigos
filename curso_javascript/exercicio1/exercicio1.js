//Problema: 
//  Crie um código que receba 3 valores do comprimento de um triângulo e depois 
//  mostre um alert informando se o triângulo é equilátero, isóceles ou escaleno.
function detectaTipoTriangulo() {

    const lados = [];

    lados[0] = parseFloat(prompt('digite o tamanho do 1º lado...'))
    lados[1] = parseFloat(prompt('digite o tamanho do 2º lado...'))
    lados[2] = parseFloat(prompt('digite o tamanho do 3º lado...'))

    let A_ehigual_B = Boolean(lados[0] === lados[1])
    let B_ehigual_C = Boolean(lados[1] === lados[2])
    let A_ehigual_C = Boolean(lados[0] === lados[2])

    if (A_ehigual_B && B_ehigual_C)//se a=b e b=c, logo a=c, se todos os lados são iguais, entao eh equilatero
    {
        alert("é equilatero")
    }
    else if (!A_ehigual_B && !B_ehigual_C && !A_ehigual_C) // nenhum lado igual
    {
        alert("é escaleno")
    }
    else {
        alert("é isósceles")
    }

}

// Problema: 
// Faça um script que leia três números inteiros e mostre o maior deles.
function maiorNumero() {

    const numeros = [];

    numeros[0] = parseFloat(prompt('digite o 1º número...'))
    numeros[1] = parseFloat(prompt('digite o 2º número...'))
    numeros[2] = parseFloat(prompt('digite o 3º número...'))

    var max = Math.max(...numeros);

    alert(`o numero maximo eh: ${max}`)

}

//Problema: 
// Crie duas variáveis e peça para que o usuário digite dois números inteiros pelo prompt. 
// Após receber os valores nas variáveis, inverta os valores dentro das variáveis, 
//      ou seja, o valor da variável x vai para a variável y e o valor da variável y vai para a variável x. 
// Mostre o antes das variáveis e seu depois.
function inversor() {

    let num1 = bkpNum1 = parseInt(prompt('digite o 1º número...'))
    let num2 = bkpNum2 = parseInt(prompt('digite o 2º número...'))

    var b = num2;
    num2 = num1;
    num1 = b;

    alert(`antes... 1º número: ${bkpNum1} e o 2º número: ${bkpNum2} \n\nagora... 1º número: ${num1} e o 2º número: ${num2}`)
}