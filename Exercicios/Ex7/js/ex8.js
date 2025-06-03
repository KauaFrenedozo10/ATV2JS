function calcularIdade() {
const entrada = document.getElementById("dataNascimento").value;
const resultado = document.getElementById("resultado");

try {
// Expressão regular para DD/MM/YYYY
const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

if (!regex.test(entrada)) {
throw new Error("Formato inválido. Use DD/MM/YYYY.");
}

const [dia, mes, ano] = entrada.split("/").map(Number);
const hoje = new Date();
const nascimento = new Date(ano, mes - 1, dia);

if (nascimento > hoje) {
throw new Error("A data de nascimento não pode ser no futuro.");
}

let idade = hoje.getFullYear() - ano;
const mesAtual = hoje.getMonth() + 1;
const diaAtual = hoje.getDate();

if (mesAtual < mes || (mesAtual === mes && diaAtual < dia)) {
idade--;
}

resultado.textContent = `Sua idade é: ${idade} anos`;
} catch (erro) {
resultado.textContent = `Erro: ${erro.message}`;
}
}function calcularIdade() {
const entrada = document.getElementById("dataNascimento").value;
const resultado = document.getElementById("resultado");

try {
// Expressão regular para DD/MM/YYYY
const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

if (!regex.test(entrada)) {
throw new Error("Formato inválido. Use DD/MM/YYYY.");
}

const [dia, mes, ano] = entrada.split("/").map(Number);
const hoje = new Date();
const nascimento = new Date(ano, mes - 1, dia);

if (nascimento > hoje) {
throw new Error("A data de nascimento não pode ser no futuro.");
}

let idade = hoje.getFullYear() - ano;
const mesAtual = hoje.getMonth() + 1;
const diaAtual = hoje.getDate();

if (mesAtual < mes || (mesAtual === mes && diaAtual < dia)) {
idade--;
}

resultado.textContent = `Sua idade é: ${idade} anos`;
} catch (erro) {
resultado.textContent = `Erro: ${erro.message}`;
}
}function calcularIdade() {
const entrada = document.getElementById("dataNascimento").value;
const resultado = document.getElementById("resultado");

try {
// Expressão regular para DD/MM/YYYY
const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

if (!regex.test(entrada)) {
throw new Error("Formato inválido. Use DD/MM/YYYY.");
}

const [dia, mes, ano] = entrada.split("/").map(Number);
const hoje = new Date();
const nascimento = new Date(ano, mes - 1, dia);

if (nascimento > hoje) {
throw new Error("A data de nascimento não pode ser no futuro.");
}

let idade = hoje.getFullYear() - ano;
const mesAtual = hoje.getMonth() + 1;
const diaAtual = hoje.getDate();

if (mesAtual < mes || (mesAtual === mes && diaAtual < dia)) {
idade--;
}

resultado.textContent = `Sua idade é: ${idade} anos`;
} catch (erro) {
resultado.textContent = `Erro: ${erro.message}`;
}
}