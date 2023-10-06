import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';
import { linkRoutes } from 'core/router';
import { PaginationComponent } from 'common/components/pagination';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleSaveCharacter = async (character: Character) => {
    const characterMapper = mapCharacterFromVmToApi(character);
    const result = await api.saveCharacter(characterMapper);
    if(result) {
      navigate(linkRoutes.characterCollection);
    } else {
      alert('error saving character');
    }
  };

  return (
    <>
      <CharacterComponent character={character} onSave={handleSaveCharacter}/>
    </>
  );
};
