const theme1 =document.getElementById('theme1');
const  theme2=document.getElementById('theme2')
const themeball= document.querySelector('.themeball')


theme2.addEventListener('click', ()=>{
    console.log('you clicked me')
themeball.classList.toggle('.theme2')
    
})