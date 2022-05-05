const b_menu = document.getElementById('btn_menu')

function click(){

    const nav = document.getElementById('navegation')
    nav.classList.toggle('active')

}


b_menu.addEventListener('click', click)

