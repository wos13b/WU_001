deslize = window.document.getElementById('img_prime')
deslize.addEventListener('mouseenter', mouseon)
deslize.addEventListener('mouseout', mouseoff)


function mouseon(){

    deslize.innerText = 'mouse_on'

}
function mouseoff(){

    deslize.innerText = 'mouse_off'

}