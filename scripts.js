// BOTÃO MENU

const botaoMenu = document.querySelector('.botao_menu_apertar');
const botaoMenuAberto = document.querySelector('.botao_menu_aberto_apertar');
const menu = document.getElementById('menu_aberto');

function abrirMenu() {
    menu.classList.add('menu-aberto');
    document.querySelector('header').style.display = 'none';
    document.querySelector('main').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
    document.body.style.overflow = 'hidden';
}

function fecharMenu() {
    menu.classList.remove('menu-aberto');
    setTimeout(() => {
        document.querySelector('header').style.display = 'flex';
        document.querySelector('main').style.display = 'block';
        document.querySelector('footer').style.display = 'block';
        document.body.style.overflow = 'auto';
    }, 100);
}


botaoMenu.onclick = function () {
    abrirMenu()
}

botaoMenuAberto.onclick = function () {
    fecharMenu()
}