const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    Swal.fire({
        title:"Sabia que ibas a decir que si bb",
        html:'<p>"💟"</p>'
        
    })
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})