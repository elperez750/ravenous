import { NextResponse } from "next/server";
import axios from "axios";

const FOURSQUARE_API_KEY = process.env.FOURSQUARE_API_KEY;

export async function GET(request: Request) {
  try {
    const response = await axios.get("https://api.foursquare.com/v3/places/search", {
      headers: {
        Authorization: FOURSQUARE_API_KEY,
      },
      params: {
        query: "lowes",
        ll: "47.8626,-121.8165",
        radius: 50000, // Example radius in meters
      },
    });

    return NextResponse.json(response.data.results);
  } catch (error) {
    console.error("Error fetching data from Foursquare:", error);
    return new NextResponse("Failed to fetch data from Foursquare", { status: 500 });
  }
}
