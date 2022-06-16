// 2°  Dado a sequência de Fibonacci...)

function fibonacci(valor){
    let t1 = 0;
    let t2 = 1;
    let proximo = 1;

    for(let i = 0; i < valor; i++){
        console.log(proximo)
        t1 = t2 + proximo;
        t2 = proximo;
        proximo = t1;
    }
    
    if (proximo = t1 + t2){
        console.log('pertence a sequencia');
    } else{
        console.log('não pertence a sequencia');
    }
}
fibonacci(10);



//------------------------------------------------------------------------------------



// 3° Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:

let valorfatuaramento = [
{
    "dia": 1,
    "valor": 22174.1664
},
{
    "dia": 2,
    "valor": 24537.6698
},
{
    "dia": 3,
    "valor": 26139.6134
},
{
    "dia": 4,
    "valor": 0.0
},
{
    "dia": 5,
    "valor": 0.0
},
{
    "dia": 6,
    "valor": 26742.6612
},
{
    "dia": 7,
    "valor": 0.0
},
{
    "dia": 8,
    "valor": 42889.2258
},
{
    "dia": 9,
    "valor": 46251.174
},
{
    "dia": 10,
    "valor": 11191.4722
}]

const menorValor = Math.min(...valorfatuaramento.map(({
    valor 
}) => valor));
console.log('o menor valor em um dia do mês foi', menorValor);

const maiorValor = Math.max(...valorfatuaramento.map(({
    valor 
}) => valor));
console.log('o maior valor em um dia do mês foi', maiorValor)




//------------------------------------------------------------------



//4° Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

 let sp = 67.836;
 let rj = 36.678;
 let mg = 29.229;
 let es = 27.165;
 let outros = 19.849;
 
 const total = (sp+rj+mg+es+outros);

console.log('Valor total do faturamento mensal', total.toFixed(3));

let percentualSP = ((sp/total)*100);
let percentualRJ = ((rj/total)*100);
let percentualMG = ((mg/total)*100);
let percentualES = ((es/total)*100);
let percentualOUT = ((outros/total)*100);


console.log('o percentual de sp é',percentualSP.toFixed(2));
console.log('o percentual de rj é',percentualRJ.toFixed(2));
console.log('o percentual de mg é',percentualMG.toFixed(2));
console.log('o percentual de es é',percentualES.toFixed(2));
console.log('o percentual de outros é',percentualOUT.toFixed(2));


//-------------------------------------------------------------




//5° Escreva um programa que inverta os caracteres de um string.

arr = ['b','r','a','s','i','l','e','i','r','o']

console.log(arr[9]+arr[8]+arr[7]+arr[6]+arr[5]+arr[4]+arr[3]+arr[2]+arr[1]+arr[0]);






