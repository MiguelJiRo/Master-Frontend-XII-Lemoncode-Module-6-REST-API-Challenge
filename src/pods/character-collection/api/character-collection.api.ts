import { FetchCharacterListResponse } from './character-collection.api-model';
import { Character} from "pods/character/api";

// const url = `/api/character`;
const url = 'https://rickandmortyapi.com/api/character/?page=';

export const getCharacterCollection = async (page: number): Promise<FetchCharacterListResponse> => {
  const fetchUrl = `${url}${page}`;
  try {
    return await fetch(fetchUrl).then(
      response => response.json()
    ).catch((error) => {
      console.error("Error fetching members: ", error);
    });
  } catch (error) {
    console.error("Error fetching character/s: ", error);
  }
}
