const key = "uKD9HcmUjDX7GsLf5DOJLFYtLvn9avYy";

const getcity = async (city) => {
  const baseurl =
    "http://dataservice.accuweather.com/locations/v1/cities/search";

  const queryparameter = `?apikey=${key}&q=${city}`;

  const response = await fetch(baseurl + queryparameter);
  const data = await response.json();

  return data[0];
};

const getweather = async (locationid) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";

  const query = `${locationid}?apikey=${key}`;

  const response = await fetch(base + query);
  const weatherdata = await response.json();

  return weatherdata[0];
};

// getcity('delhi').then(data => {
//     return getweather(data.Key);
// }).then(weatherdata => {
//     console.log(weatherdata)
// })
// .catch(err => console.log(err));
