"use client";
import { Button } from "@mui/material";
import { DisplayContainer } from "./DisplayContainer";
import { LocationContainer } from "./LocationContainer";
import { getWeatherOverview } from "@/services/homeService";
import { useContext } from "react";
import { HomeContext } from "@/context/HomeContext";

/**
 * Represents the home component which is the starting point of our component tree.
 *
 * @param {Object} props - The properties passed to the component.
 * @returns {JSX.Element}.
 */

export const HomeComponent = () => {
  const { isLoading, error, fetchWeatherOverview, weatherOverview } =
    useContext(HomeContext);

  const handleClick = () => {
    fetchWeatherOverview();
  };
  return (
    <div className="flex flex-col items-center justify-center w-[30%] max-w-3xl">
      <h1 className="text-2xl ">home</h1>
      <h1 className="text-gray-500">By Fisayo Obilaja</h1>
      <div className="flex flex-row gap-x-2 mb-4 mt-16 w-full">
        <LocationContainer
          title="Longitude"
          value={weatherOverview?.lon ?? 0}
        />
        <LocationContainer title="Latitude" value={weatherOverview?.lat ?? 0} />
      </div>
      <DisplayContainer
        date={weatherOverview?.date ?? Date.now().toString()}
        body={weatherOverview?.weather_overview ?? "No data yet"}
      />
      <Button
        variant="contained"
        className="mt-4 w-full bg-white text-black"
        onClick={handleClick}
      >
        Randomize Location
      </Button>
    </div>
  );
};
