import { Button, CircularProgress } from "@mui/material";
import { DisplayContainer } from "./DisplayContainer";
import { LocationContainer } from "./LocationContainer";
import { useContext } from "react";
import { HomeContext } from "@/context/HomeContext";
import { ErrorContainer } from "./ErrorContainer";

// Represents the home component which is the starting point of our component tree.
export const HomeComponent = () => {
  const { isLoading, error, fetchWeatherOverview, weatherOverview } =
    useContext(HomeContext);

  const handleClick = () => {
    fetchWeatherOverview();
  };
  return (
    <div className="flex flex-col items-center justify-center md:w-[40%] w-full">
      <h1 className="text-2xl text-center">OpenAPI Weather Overview</h1>
      <h1 className="text-gray-500 mb-16">By Fisayo Obilaja</h1>
      <ErrorContainer error={error} />
      <div className="flex flex-row gap-x-2 mb-4 mt-2 w-full">
        <LocationContainer
          title="Longitude"
          value={weatherOverview?.lon ?? 0}
        />
        <LocationContainer title="Latitude" value={weatherOverview?.lat ?? 0} />
      </div>
      <DisplayContainer
        date={weatherOverview?.date ?? ""}
        body={weatherOverview?.weather_overview ?? "No data yet"}
      />
      <Button
        variant="contained"
        className="mt-4 w-full bg-white text-black"
        onClick={handleClick}
      >
        {isLoading ? <CircularProgress /> : <p>Randomize Location</p>}
      </Button>
    </div>
  );
};
