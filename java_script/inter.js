result = document.getElementById('resultado')
result.addEventListener('click', sm_click)



function sm_click(){

    test = document.getElementById('A')
    n = Number(window.document.getElementById('sm1').value)
    if (n > 0){

        test.innerText = 'positivo'

    }
    else{

        test.innerText = 'negativo'

    }
    

}

