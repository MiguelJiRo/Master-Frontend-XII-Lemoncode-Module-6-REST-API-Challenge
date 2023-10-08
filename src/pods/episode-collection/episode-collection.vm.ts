export interface EpisodeEntityVm {
  id: number;
  name: string;
  air_date: string;
  characters: string[];
  url: string;
  created: string;
}

export interface DataEntityVm {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
