

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







  fetch('https://api.open-meteo.com/v1/forecast?latitude=21.17&longitude=-86.85&current_weather=true')
  .then(res => res.json())
  .then(data => {
     const weatherDiv = document.querySelector('#weather');
     const temp= data.current_weather.temperature;
     weatherDiv.textContent = `Cacun:  ${temp}°C`;

  });