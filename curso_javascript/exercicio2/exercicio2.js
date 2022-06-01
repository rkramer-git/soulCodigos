// Crie um programa que pergunta quantos números o usuário deseja digitar armazene esses números em um array 
// depois mostre a soma total deles, a média deles, mostre cada valor em uma potência de 2 e faça a raíz quadrada e cúbica de cada um.
function calculaNumeros() {

    const numeros = [];
    let qtNumeros = parseInt(prompt('quantos numeros deseja calcular?'))
    let i = 0

    //percorro a matriz
    for (; i <= qtNumeros - 1; i++) {

        numeros[i] = parseFloat(prompt('digite um numero'))

        // melhor usar regex pra validar a entrada
        if (!/^[0-9]+$/.test(numeros[i])) {
            alert('numero invalido')
            i--
        }
    }

    const soma = numeros.reduce((a, b) => a + b, 0) // valor default: 0
    const media = numeros.reduce((a, b) => a + b, 0) / numeros.length // valor default: 0
    const pot2 = numeros.map(x => x ** 2);
    const raiz2 = numeros.map(x => Math.sqrt(x).toFixed(2));
    const raiz3 = numeros.map(x => Math.cbrt(x).toFixed(2));

    alert(`\n numeros digitados: ${numeros}\n soma: ${soma} | media: ${media}\n potencia de 2: ${pot2}\n raiz 2: ${raiz2}\n raiz 3: ${raiz3}`)
}


function lCaselUCaseSoletrando() {

    let texto = prompt('digite um texto...')

    alert(`\n MAIUSCULAS: ${texto.toUpperCase("")}\n\n minusculas: ${texto.toLowerCase("")}\n\n Soletrando: ${texto.split("")}`)
}

function binarioParaDecimal() {

    let texto = prompt('digite uma sequencia binária.')


    let decimal = 0, i = 0
    const mtzElementos = texto.split("");

    //percorro a mtzElementos ate o penultimo elemento
    while (i < texto.length - 1) {

        decimal = decimal | mtzElementos[i++];    //faco um OU do elemento
        decimal = decimal << 1;             //desloco
    }

    decimal = decimal | mtzElementos[i]; //faco um OU no ultimo elemento

    alert(`Decimal: ${decimal}`)
}