import { getWeather } from "./api.js";
const app = async () => {
    const weather = await getWeather("Buenos-Aires")
}

app();