export const getWeather = async (city) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=77d1eddd46e7efea64f86d108830b40b`
        );
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}