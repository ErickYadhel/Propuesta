const Yesbtn = document.querySelector('#Yesbtn')

Yesbtn.addEventListener('click', function(){

    alert('Sabia que dirias que si asi que escucha y mira esto, para demostrarte mi amor hacia a ti')
    alert('Por cierto me haces muy feliz te amo')
    alert('Te adoro mi reina')
    alert('Eres mi todo')
});


const noBtn = document.querySelector('#noBtn')

noBtn.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top', randomX+'%');
    noBtn.style.setProperty('left', randomY+'%');
    noBtn.style.setProperty('transform', 'translate(-${randomX}%, -${randomY}%)');
})