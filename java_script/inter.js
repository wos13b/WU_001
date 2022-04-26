deslize = window.document.getElementById('img_prime')
deslize.addEventListener('mouseenter', mouse_on)
deslize.addEventListener('mouseout', mouse_off)


function mouse_on(){

    deslize = window.document.getElementById('img_prime')
    deslize.innerText = 'mouse_on'

}
function mouse_off(){

    deslize = window.document.getElementById('img_prime')
    deslize.innerText = 'mouse_off'

}