for(let i = 5; i > 0; i--){ 
    console.log(i);
}

console.log("Exemplo com Incremento da variável i");
 
for(let i = 0; i < 5; i++){ 
    console.log(i);
}

console.log("Podemos usar o FOR para buscar valores em VETORES/ARRAYS");

let marcas = ["Asus","LG","Acer","Dell"];
let t = marcas.length; 

for(let x = 0; x < t; x++ ) {
    console.log(marcas[x]);
}

console.log("--- Estrutura de Repetição While ---");
  let control = 0;    
  while(control < 6){     
   console.log(`${control} - Javascript`);    
   console.log();  
   control++;   
  }

 let modelos = ["LG","Samsung","Microsoft","Apple","Acer"];

 let cont = 0;

 while(cont < modelos.length){
  console.log(cont+ '-' +modelos[cont]);
  cont++;
 }


console.log("--- Estrutura de Repetição DO WHILE ---");


do {
  console.log("Executado pelo menos uma vez");
}while(false)

console.log("--- Estrutura de Repetição FOR IN ---");


let objeto = {1:"C", 2:"Python", 3:"C++", 4: "C#", 5:"PHP"};

   for(let prop in objeto) {
      console.log("Linguagem: "+ prop +" - "+objeto[prop]);
   }
   

console.log("--- Percorrer Objetos ---");
  const pessoa = {
nome:"yasmim",
idade:20,
peso:65,
altura:1.7
  }
 
   for(let atributo in pessoa){ 
    console.log(pessoa[atributo]);
    }

console.log("--- For In para Interar Vetores ---");

let marcas2 = ["LG","Samsung","Microsoft","Apple","Acer"];

   for(let element in marcas2) {
      console.log("Index: "+element+" - "+marcas2[element]);
   } 


console.log("--- Estrutura de reptição For Of ---");


let cursos = ["Sistemas de Informação","Ciências da Computação","Análise de Sistemas","Engenharia de Software"];

for(let curso of cursos){
    console.log("Faculdade: - "+ curso);
}

let valoresFixos = [10, 20, 30];

for (const value of valoresFixos) {
  console.log(value); 
}


console.log("--- Usando FOR OF para Arrays de Objetos ---");

  const infoPessoa = [ 
  {nome: "Robison", idade: 18, altura:1.8},
  {nome: "William", idade: 28, altura:1.6},
  {nome: "Janaina", idade: 19, altura:1.5},
  {nome: "Carla", idade: 25, altura:1.9},
  {nome: "Maíra", idade: 32, altura:1.4},
         ];

    for(let funcionario of infoPessoa){
    console.log(funcionario.nome+" - "+funcionario.idade+" - "+funcionario.altura);
} 
console.log("--- Estrutura de Repetição ForEach ---");


let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

function tabuadaDe2(item) {  
    console.log(item*2);
}

numeros.forEach(tabuadaDe2); 
let valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

function somar(item, indice) {
    total += item; 
    console.log("Posição:" + indice + " - Soma = " + total);
}


numeros.forEach(somar); 



let modelPhones = ["A31","MotoOne","A51","A72","Redmi"];

modelPhones.forEach(function(item,indice){ 
   console.log(indice+" = "+ item); 
});
