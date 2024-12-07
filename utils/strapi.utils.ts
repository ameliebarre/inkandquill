import axios from "axios";

const BASE_URL = process.env.STRAPI_URL || "http://127.0.0.1:1337/api";

export async function fetchDataFromStrapi<T>(route: string): Promise<T> {
  const url = `${BASE_URL}/${route}`;

  try {
    const response = await axios.get(url);

    return response.data.data as T;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(`Axios error: ${error.message}`);
    } else {
      console.error(`Unexpected error: ${error}`);
    }
    throw new Error(`Could not fetch data from ${url}`);
  }
}
