// API key from developer.accuweather.com/
const key = 'csWUGW2xus4KtUfzYXZ2CK27RCH7xWR6'; 

// get weather information
const getWeather = async(id) => {

    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
}

// get city information
const getCity = async(city) => {

    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];

}

