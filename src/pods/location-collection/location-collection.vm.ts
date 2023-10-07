export interface LocationEntityVm {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface DataEntityVm {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
