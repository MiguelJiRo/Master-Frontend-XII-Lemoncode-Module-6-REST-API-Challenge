import * as React from 'react';
import { CharacterEntityVm, DataEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm, mapDataCharactersFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const [dataCollection, setDataCollection] = React.useState<DataEntityVm>({
    count: 1,
    next: '',
    pages: 1,
    prev: '',
  });

  const loadCharacterCollection = (page: number) => {
    getCharacterCollection(page).then((result) =>
    {
      setCharacterCollection(mapToCollection(result.results, mapFromApiToVm));
      setDataCollection(mapDataCharactersFromApiToVm(result));
    }).catch(
      error => {
        setCharacterCollection([]);
      }
    );
  };

  return { characterCollection, dataCollection, loadCharacterCollection };
};
