export default async (req, res) => {
  const weather = await $fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
  );

  return weather;
};
