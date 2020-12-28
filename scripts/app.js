const locationform = document.querySelector('form');
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('.time')
const icon = document.querySelector('.icon')
// const remove = document.querySelector('.remove')


// update ui
const updateUi = (data) => {
   
    const citydata = data.citydata;
    const weather = data.weather;
  
// display ui
if(card.classList.contains('remove')){
  card.classList.remove('remove')
}
    
 details.innerHTML = `
  <h5 class="my-3">${citydata.LocalizedName}</h5>
<p class="my-3">${weather.WeatherText}</p>
<div class="display-4 my-3">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
</div>
  `;

  // update night/day and icon images

  const iconsrc = `img/icons/${weather.WeatherIcon}.svg`;
  
  icon.setAttribute('src', iconsrc);

  let timesrc = null;

  if(weather.IsDayTime){
    timesrc = 'img/day.svg';
  }else{
    timesrc = 'img/night.svg';
  }

  time.setAttribute('src', timesrc);

};

// update city 

const updateCity = async (cityLocation) => {
   
  const citydata = await getcity(cityLocation);
  const weather = await getweather(citydata.Key);

//   return the promise as a object
// return {
//     citydata: citydata,
//     weatherdata: weatherdata
// } or other way -----

return { citydata, weather };

}


// update weather

locationform.addEventListener('submit', e => {
   
    e.preventDefault();

    const cityLocation = locationform.city_name.value.trim();
     locationform.reset();

    //  updateui with new city
 
     updateCity(cityLocation)
     .then(data => updateUi(data))
     .catch(err => console.log(err));

})
