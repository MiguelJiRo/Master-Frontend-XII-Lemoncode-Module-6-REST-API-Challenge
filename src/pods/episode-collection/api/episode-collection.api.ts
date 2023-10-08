import { FetchEpisodeListResponse } from "./episode-collection.api-model";

const url = "https://rickandmortyapi.com/api/episode/?page=";

export const getEpisodeCollection = async (
  page: number,
  search: string
): Promise<FetchEpisodeListResponse> => {
  const fetchSearch = search ? `&name=${search}` : "";
  const fetchUrl = `${url}${page}${fetchSearch}`;
  try {
    return await fetch(fetchUrl)
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching episodes: ", error);
      });
  } catch (error) {
    console.error("Error fetching episode/s: ", error);
  }
};
