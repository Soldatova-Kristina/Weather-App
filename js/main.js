import { getWeather } from "./api.js";
import { createEl, createHeader } from "./layout.js";

const app = async () => {
    const weather = await getWeather("Buenos Aires");
    console.log(weather)
}

app();
createHeader();