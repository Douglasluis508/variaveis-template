
// const nome = prompt ('Digite seu nome')
// let idade =Number(prompt('Digite sua idade'))
// let presenca = confirm(prompt('Confirme sua presença'))
// console.log(typeof nome, typeof idade , typeof presenca)


// const checarPresenca = ()=>{
//     const nome = prompt ('Digite seu nome')
// let idade =Number(prompt('Digite sua idade'))
// let presenca = confirm(prompt('Confirme sua presença'))
// console.log(`Estudante ${nome} tem ${idade} anos. Presença:${presenca}.`)
// return(nome,idade,presenca)
// }
// checarPresenca()

const celular =prompt('Qual o modelo do seu celular?')
const tempo =Number(prompt('Há quanto tempo você tem ele?'))
const troca =confirm(prompt('Você pretende trocar?'))
console.log(typeof celular, typeof tempo, typeof troca)


const perguntarObjeto = ()=>{
const celular =prompt('Qual o modelo do seu celular?')
const tempo =Number(prompt('Há quanto tempo você tem ele?'))
const troca =confirm(prompt('Você pretende trocar?'))
console.log(`Qual modelo do seu celular? ${celular}, Há quanto tempo você tem ele ${tempo} anos. Prentende trocar? ${troca}`)
return(celular, tempo, troca)
}
perguntarObjeto()