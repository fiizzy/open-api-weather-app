import { WeatherOverviewInterface } from "@/interfaces/WeatherOverviewInterface";
import { NETWORK_ERROR, UNEXPECTED_ERROR } from "@/util/constants";
import { generateRandomDecimal } from "@/util/generateRandomDecimal";
import { analyzeStatusCode } from "@/util/statusError";

export const getWeatherOverview = async () => {
  const route = "/overview";
  const lon = generateRandomDecimal().toString();
  const lat = generateRandomDecimal().toString();
  try {
    const queryString = new URLSearchParams({
      route,
      lon,
      lat,
    }).toString();
    const response = await fetch(`/api/weather-overview?${queryString}`);
    analyzeStatusCode(response);
    const data: WeatherOverviewInterface = await response.json();

    return data;
  } catch (error) {
    // This approach allows us to bubble errors back up to the UI to display user friendly errors
    if (error instanceof TypeError) {
      console.error("Network error or invalid JSON:", error);
      throw new Error(NETWORK_ERROR);
    } else if (error instanceof Error) {
      console.error("An error occurred:", error.message);
      throw new Error(error.message);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error(UNEXPECTED_ERROR);
    }
  }
};
