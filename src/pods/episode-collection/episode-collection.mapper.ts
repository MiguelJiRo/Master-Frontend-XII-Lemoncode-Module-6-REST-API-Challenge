import * as apiModel from "pods/episode-collection/api";
import * as apiCollectionModel from "./api";
import * as viewModel from "./episode-collection.vm";

export const mapFromApiToVm = (
  episode: apiModel.Episode
): viewModel.EpisodeEntityVm => ({
  id: episode.id,
  name: episode.name,
  air_date: episode.air_date,
  characters: episode.characters,
  url: episode.url,
  created: episode.created,
});

export const mapDataEpisodeFromApiToVm = (
  data: apiCollectionModel.FetchEpisodeListResponse
): viewModel.DataEntityVm => ({
  count: data.info.count,
  next: data.info.next,
  pages: data.info.pages,
  prev: data.info.prev,
});
