import { FetchCharacterListResponse } from './character-collection.api-model';
import { Character} from "pods/character/api";

const url = `/api/character`;

export const getCharacterCollection = async (): Promise<Character[]> => {
  try {
    return await fetch(url).then(
      response => response.json()
    ).catch((error) => {
      console.error("Error fetching members: ", error);
    });
  } catch (error) {
    console.error("Error fetching character/s: ", error);
  }
}
