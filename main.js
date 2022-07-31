const sections = document.querySelectorAll('section');
const navb = document.querySelectorAll('nav .container ul li');

window.addEventListener('scroll', ()=> {
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop)-100){
            current = section.getAttribute('id');
        }
    })
    console.log(current)

    navb.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
})