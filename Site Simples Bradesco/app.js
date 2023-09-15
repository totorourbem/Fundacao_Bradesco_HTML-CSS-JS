'use strict' /*nmarcação de uso estrito, deixa o js mais seguuro contra erros mais comuns */

const switcher = document.querySelector('.btn');


/* Aqui querySelector obtem a referência de onde está o botão em document*/

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    
    var className = document.body.className;
    if(className == 'light-theme') {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});

/*Aqui, Ele adicioona uma 'escuta', que aguarda um click de maouse para ativar uma função
 essa função lista a classe lista do 'body' do 'document' e Toggle (alterna0 para o que está entre parenteses
    
Já o laço if busca saber qual a classe atual de body, e nomeia o bortão (com text contex) no oposto para mostrar a mudança
*/
