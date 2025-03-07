document.addEventListener('DOMContentLoaded', function() {
  const personagem = document.querySelectorAll('[data-tab-item]');
  const resumoPersonagem = document.querySelectorAll('[data-tab-resume]');

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

