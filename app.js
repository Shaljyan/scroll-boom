const boxer = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoom)

checkBoom()

function checkBoom(){
    const oneBot = window.innerHeight / 5 * 4
    boxer.forEach(box => {
    const boxBot = box.getBoundingClientRect().top
    
    if(boxBot < oneBot){
        box.classList.add('show')
    } else{
        box.classList.remove('show')
    }
})
}