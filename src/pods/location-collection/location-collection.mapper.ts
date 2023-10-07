import * as apiModel from "pods/location-collection/api";
import * as apiCollectionModel from "./api";
import * as viewModel from "./location-collection.vm";

export const mapFromApiToVm = (
  location: apiModel.Location
): viewModel.LocationEntityVm => ({
  id: location.id,
  name: location.name,
  type: location.type,
  dimension: location.dimension,
  residents: location.residents,
  url: location.url,
  created: location.created,
});

export const mapDataLocationFromApiToVm = (
  data: apiCollectionModel.FetchLocationListResponse
): viewModel.DataEntityVm => ({
  count: data.info.count,
  next: data.info.next,
  pages: data.info.pages,
  prev: data.info.prev,
});
