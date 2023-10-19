let accs = document.querySelectorAll('.elem')

accs.forEach((acc)=>{
    let icon = acc.querySelector('.icon')
    let bttom = acc.querySelector('.bottom')
    
    acc.addEventListener('click',()=>{
        if (icon.classList.contains('active')) {
            icon.classList.remove('active')
            bttom.style.maxHeight = null
        }else{
            icon.classList.add('active')
            bttom.style.maxHeight = bttom.scrollHeight + 'px'
        }

    })

}) 