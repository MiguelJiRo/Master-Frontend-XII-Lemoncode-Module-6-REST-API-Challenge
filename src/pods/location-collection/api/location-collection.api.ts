import {
  FetchLocationListResponse,
  Location,
} from "./location-collection.api-model";

const url = "https://rickandmortyapi.com/api/location/?page=";

export const getLocationCollection = async (
  page: number,
  search: string
): Promise<FetchLocationListResponse> => {
  const fetchSearch = search ? `&name=${search}` : "";
  const fetchUrl = `${url}${page}${fetchSearch}`;
  try {
    return await fetch(fetchUrl)
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching locations: ", error);
      });
  } catch (error) {
    console.error("Error fetching location/s: ", error);
  }
};
