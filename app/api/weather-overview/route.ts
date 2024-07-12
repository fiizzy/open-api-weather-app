import { NextResponse } from "next/server";
/*
This endpoint is setup only for security reasons. This ensures that we
avoid exposing our environment variables to the browser and instead keep everything on the server
*/
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
  return NextResponse.json(result, { status: response.status });
}
