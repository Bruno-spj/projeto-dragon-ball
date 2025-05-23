/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover 
a seleção dele 

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover 
a seleção dele 
*/

// OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 

//passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles;
const botoes = document.querySelectorAll(".botao");
console.log(botoes);

// OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem

// passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem");

//passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
botoes.forEach((btn, indice) => {
  btn.addEventListener("click", () => {
    // passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover
    const btnSelecionado = document.querySelector(".botao.selecionado");
    btnSelecionado.classList.remove("selecionado");

    btn.classList.add("selecionado");

     // passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover
     const personagemSelecionado = document.querySelector(".personagem.selecionado")
     personagemSelecionado.classList.remove("selecionado")

    // passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
    personagens[indice].classList.add("selecionado");
   
  });
});






