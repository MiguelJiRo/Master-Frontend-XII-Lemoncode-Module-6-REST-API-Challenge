import { Character} from "pods/character/api";

export interface FetchCharacterListResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  },
  results: Character[];
}