import * as React from "react";
import { LocationEntityVm, DataEntityVm } from "./location-collection.vm";
import { getLocationCollection } from "./api";
import {
  mapFromApiToVm,
  mapDataLocationFromApiToVm,
} from "./location-collection.mapper";
import { mapToCollection } from "common/mappers";

export const useLocationCollection = () => {
  const [locationCollection, setLocationCollection] = React.useState<
    LocationEntityVm[]
  >([]);

  const [dataCollection, setDataCollection] = React.useState<DataEntityVm>({
    count: 1,
    next: "",
    pages: 1,
    prev: "",
  });

  const loadLocationCollection = (page: number, search?: string) => {
    getLocationCollection(page, search)
      .then((result) => {
        setLocationCollection(mapToCollection(result.results, mapFromApiToVm));
        setDataCollection(mapDataLocationFromApiToVm(result));
      })
      .catch((error) => {
        setLocationCollection([]);
      });
  };

  return { locationCollection, dataCollection, loadLocationCollection };
};
