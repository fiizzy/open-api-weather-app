import { WeatherOverviewInterface } from "@/interfaces/WeatherOverviewInterface";
import { getWeatherOverview } from "@/services/homeService";
import { ReactNode, createContext, useState } from "react";

interface HomeContextProps {
  isLoading: boolean;
  error?: string | null;
  weatherOverview: WeatherOverviewInterface | null;
  fetchWeatherOverview: () => void;
}

export const HomeContext = createContext<HomeContextProps>({
  isLoading: false,
  weatherOverview: null,
  fetchWeatherOverview: () => {},
});

export const HomeContextProvider = ({ children }: { children: ReactNode }) => {
  const [weatherOverview, setWeatherOverview] =
    useState<null | WeatherOverviewInterface>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");

  const fetchWeatherOverview = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const result = await getWeatherOverview();
      setIsLoading(false);
      setWeatherOverview(result);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <HomeContext.Provider
      value={{ isLoading, error, fetchWeatherOverview, weatherOverview }}
    >
      {children}
    </HomeContext.Provider>
  );
};
