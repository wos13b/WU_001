deslize = window.document.getElementById('img_prime')
somar = document.getElementById('somar')
res = document.getElementById('res')
/*deslize.addEventListener('mouseenter', mouse_on)
deslize.addEventListener('mouseout', mouse_off)
deslize.addEventListener('click', mouse_click)*/
somar.addEventListener('click', sm_click)
res = document.getElementById('res')



/*function mouse_on(){

    deslize.innerText = 'mouse_on'

}
function mouse_off(){

    deslize.innerText = 'mouse_off'

}
function mouse_click(){

    deslize.style.background = 'red'
    deslize.innerText = 'click'

}*/
function sm_click(){

    var n2 = Number(window.document.getElementById('sm1').value)
    var n1 = Number(window.document.getElementById('sm2').value)
    var s = n1 + n2
    res.innerHTML = s

}

