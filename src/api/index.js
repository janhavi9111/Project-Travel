import axios from 'axios';



// const options = 
  

export const getPlacesData = async (type,sw, ne) => {
  const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
    try {
        const {data:{data}} = await axios.get(URL ,{
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': '3921a1e35cmsh18229ed2a48ce86p1501d3jsnd9418cad6499'
            }
          });
            return data;
    }catch(error) {
console.log(error);
    }
}

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: { lat:lat, lon: lng },
        headers: {
          'x-rapidapi-key': '3921a1e35cmsh18229ed2a48ce86p1501d3jsnd9418cad6499',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};