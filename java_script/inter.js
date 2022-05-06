const b_profile = document.getElementById('btn_menu')
const b_options = document.getElementById('btn_options')

function click_1(){

    const nav = document.getElementById('navegation')
    const btn_img_profiles = document.getElementById('btn_img-profiles')
    nav.classList.toggle('active')
    btn_img_profiles.classList.toggle('active')

}
function click_2(){

    const btn_img_options = document.getElementById('btn_img-options')
    btn_img_options.classList.toggle('active')


}

b_profile.addEventListener('click', click_1)
b_options.addEventListener('click', click_2)

