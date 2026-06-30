let nome = "Maria";
let idade = 25;
let salario = 2000;
let experiencia = true;

let emprestimo = (idade >= 18) && (salario >= 2000) && (experiencia === true) ? "Emprestimo aprovado" : "Emprestimo negador";

console.log(nome + ": " + emprestimo);
