

const carousels = document.querySelectorAll('.track');

document.querySelectorAll('.carousel').forEach(carousel =>{
    carousel.addEventListener('mouseenter', () =>  {
        carousels.forEach(track => track.style.animationPlayState='paused');
    });


    carousel.addEventListener('mouseleave', () => {
        carousels.forEach(track => track.style.animationPlayState='running');
    });
});

alert("Hello, please hover any image to stop the automatic slide show. Thanks!");