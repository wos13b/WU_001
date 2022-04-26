deslize = window.document.getElementById('img_prime')
deslize.addEventListener('mouseenter', mouse_on)
deslize.addEventListener('mouseout', mouse_off)
deslize.addEventListener('click', mouse_click)




function mouse_on(){

    deslize.innerText = 'mouse_on'

}
function mouse_off(){

    deslize.innerText = 'mouse_off'

}
function mouse_click(){

    deslize.style.background = 'red'
    deslize.innerText = 'click'

}