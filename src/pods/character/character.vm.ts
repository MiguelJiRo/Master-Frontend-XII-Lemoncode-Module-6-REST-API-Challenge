export interface Character {
  bestSentences: string,
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
}

export const createEmptyCharacter = (): Character => ({
  bestSentences: '',
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: '',
  location: '',
  image: '',
});
