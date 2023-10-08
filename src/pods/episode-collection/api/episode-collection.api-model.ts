export interface Episode {
  id: number;
  name: string;
  air_date: string;
  characters: string[];
  url: string;
  created: string;
}

export interface FetchEpisodeListResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Episode[];
}
