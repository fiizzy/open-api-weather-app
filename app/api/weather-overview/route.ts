import { WeatherOverviewInterface } from "@/interfaces/WeatherOverviewInterface";
import { NextResponse } from "next/server";

// This endpoint is setup only for security reasons. This ensures that we
// avoid exposing our environment variables to the browser and instead keep everything on the server
export async function GET(request: Request) {
  //extract query params from
  const { searchParams } = new URL(request.url);
  const route = searchParams.get("route");
  const lon = searchParams.get("lon");
  const lat = searchParams.get("lat");

  const response = await fetch(
    `${process.env.BASE_URL}${route}?lon=${lon}&lat=${lat}&appid=${process.env.API_KEY}`
  );
  const result = await response.json();
  console.log("Response is", result);
  return NextResponse.json(result, { status: response.status });
  // return NextResponse.json(testData, { status: 200 });
}

const testData: WeatherOverviewInterface = {
  lat: 123.343,
  lon: 342.32432,
  tz: "+10",
  date: "27-01-2022",
  units: "metric",
  weatherOverview:
    "Please note that using One Call 3.0 requires a separate subscription to the One Call by Call plan. Learn more here https://openweathermap.org/price. If you have a valid subscription to the One Call by Call plan, but still receive this error, then please see https://openweathermap.org/faq#error401 for more info",
};
