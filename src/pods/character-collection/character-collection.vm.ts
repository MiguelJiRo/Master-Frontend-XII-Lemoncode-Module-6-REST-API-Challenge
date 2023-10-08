export interface CharacterEntityVm {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

export interface DataEntityVm {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
