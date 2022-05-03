const menu = document.getElementById('Menu')

function click(){

    const nave = document.getElementById('navegation')
    nave.classList.toggle('active')

}

menu.addEventListener('click', click)

