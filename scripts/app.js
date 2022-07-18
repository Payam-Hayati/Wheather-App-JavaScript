const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

    console.log(data);
    //const cityDets = data.cityDets;
    //const weather = data.weather;
// destructure properties
//its an easy way to get properties from an object and then store them in a constant of the same name.
/*
from this data object, i want you to get city debts, property and store that  in a constant called city debts
and also for weather
*/
    const { cityDets, weather } = data;

    //update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;


    //update the night/day & icon images
    const iconSrc = `/img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = null;
    if(weather.IsDayTime){
        timeSrc = 'img/day.png';
    }else {
        timeSrc = 'img/night.png';
    }
    time.setAttribute('src', timeSrc);

    //remove 
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

}

const updateCity = async(city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);


    //object shorthand notation
    return {cityDets, weather};

};

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

updateCity(city)
  .then(data => updateUI(data))
  .catch(err => console.log(err));

});