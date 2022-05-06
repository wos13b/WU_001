const b_menu = document.getElementById('btn_menu')

function click(){

    const nav = document.getElementById('navegation')
    const btn_img = document.getElementById('btn_img')
    nav.classList.toggle('active')
    btn_img.classList.toggle('active')

}


b_menu.addEventListener('click', click)

