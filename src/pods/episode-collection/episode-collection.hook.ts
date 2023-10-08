import * as React from "react";
import { EpisodeEntityVm, DataEntityVm } from "./episode-collection.vm";
import { Episode, getEpisodeCollection } from "./api";
import {
  mapFromApiToVm,
  mapDataEpisodeFromApiToVm,
} from "./episode-collection.mapper";
import { mapToCollection } from "common/mappers";

export const useEpisodeCollection = () => {
  const [episodeCollection, setEpisodeCollection] = React.useState<
    EpisodeEntityVm[]
  >([]);

  const [dataCollection, setDataCollection] = React.useState<DataEntityVm>({
    count: 1,
    next: "",
    pages: 1,
    prev: "",
  });

  const loadEpisodeCollection = (page: number, search?: string) => {
    getEpisodeCollection(page, search)
      .then((result) => {
        setEpisodeCollection(mapToCollection(result.results, mapFromApiToVm));
        setDataCollection(mapDataEpisodeFromApiToVm(result));
      })
      .catch((error) => {
        setEpisodeCollection([]);
      });
  };

  return { episodeCollection, dataCollection, loadEpisodeCollection };
};
