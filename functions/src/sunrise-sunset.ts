import axios from "axios";
import {SunriseSunsetData, SunriseSunsetResponse} from "./types";

const sunriseSunsetClient = axios.create({
  baseURL: "https://api.sunrise-sunset.org/json",
});

export const getSunriseSunset = async (
  lat: number,
  lng: number,
  date: string,
): Promise<SunriseSunsetResponse<SunriseSunsetData>> => {
  const {data} = await sunriseSunsetClient.request({
    method: "get",
    params: {lat, lng, date, formatted: 1},
  });

  return data;
};
