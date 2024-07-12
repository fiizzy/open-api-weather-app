import { WeatherOverviewInterface } from "@/interfaces/WeatherOverviewInterface";
import {
  DEFAULT_ERROR,
  NETWORK_ERROR,
  UNEXPECTED_ERROR,
} from "@/util/constants";
import { analyzeStatusCode } from "@/util/statusError";

const route = "/overview";
const lon = "43.4345";
const lat = "34.532";

// This method is design to bubble error back up to the UI to display user friendly error
export const getWeatherOverview = async () => {
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
    if (error instanceof TypeError) {
      console.error("Network error or invalid JSON:", error);
      throw new Error(NETWORK_ERROR);
    } else if (error instanceof Error) {
      console.error("An error occurred:", error.message);
      throw new Error(DEFAULT_ERROR);
    } else {
      console.error("An unexpected error occurred:", error);
      throw new Error(UNEXPECTED_ERROR);
    }
  }
};
