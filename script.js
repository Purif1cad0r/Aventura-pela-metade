const avanca = document.querySelectorAll('.btn-próximo');

avanca.forEach(button => {
      button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const próximoPasso = 'passo-' + this.getAttribute('data-próximo');


        atual.classList.remove('ativo');
        document.getElementById(próximoPasso). classlist.add('ativo'); 
      })

})