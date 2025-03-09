document.addEventListener('DOMContentLoaded', function() {
  document.body.style.zoom = "90%";

  const personagem = document.querySelectorAll('[data-tab-item]');
  const resumo = document.querySelectorAll('[data-tab-resume]');
  const buttons = document.querySelectorAll('[data-tab-button]');
  const questions = document.querySelectorAll('[data-faq-question]');


  // Seção de personagens. programação das abas
  for (let i = 0; i < personagem.length; i++) {
    personagem[i].addEventListener('click', function() {
      const personaAlvo = this.dataset.tabItem;
      const resumo = document.querySelector(`[data-tab-resume="${personaAlvo}"]`);
      escondeOsResumos();
      resumo.classList.add('personagens__resume__content--is-active');
      removePersonagemAtivo();
      this.classList.add('personagens__lista__content--is-active');
    });
  }

  // Seção de temporadas. programação das abas
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(botao){
      const abaAlvo = botao.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
      escondeTodasAsAbas();
      aba.classList.add('temporadas__list__content--is-active');
      removeBotaoAtivo();
      botao.target.classList.add('temporadas__tabs__button--is-active');
    });
  }

  // Seção FAQ, accordion
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', abreOuFechaResposta)
    
  }
});

function removePersonagemAtivo() {
  const personagem = document.querySelectorAll('[data-tab-item]');

  for (let i = 0; i < personagem.length; i++) {
    personagem[i].classList.remove('personagens__lista__content--is-active');
  }
}

function escondeOsResumos() {
  const tabsResumes = document.querySelectorAll('[data-tab-resume]');

  for (let i = 0; i < tabsResumes.length; i++) {
    tabsResumes[i].classList.remove('personagens__resume__content--is-active');
  }
}

function removeBotaoAtivo() {
  const buttons = document.querySelectorAll('[data-tab-button]');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('temporadas__tabs__button--is-active');
  }
}

function escondeTodasAsAbas() {
  const tabsConatiner = document.querySelectorAll('[data-tab-id]');

  for (let i = 0; i < tabsConatiner.length; i++) {
    tabsConatiner[i].classList.remove('temporadas__list__content--is-active');
  }
}

function abreOuFechaResposta(element){
  const classe = 'faq__questions__item--is-open';
  const elementoPai = element.target.parentNode

  elementoPai.classList.toggle(classe)
}