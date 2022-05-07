const b_profile = document.getElementById('btn_profiles')
const b_options = document.getElementById('btn_options')

function click_1(){

    const nave_prf = document.getElementById('navegation_profiles')
    const btn_img_profiles = document.getElementById('btn_img-profiles')
    nave_prf.classList.toggle('active')
    btn_img_profiles.classList.toggle('active')

}
function click_2(){

    const nave_option  = document.getElementById('navegation_options')
    const btn_options = document.getElementById('btn_img-options')
    nave_option.classList.toggle('active')
    btn_options.classList.toggle('active')

}

b_profile.addEventListener('click', click_1)
b_options.addEventListener('click', click_2)

