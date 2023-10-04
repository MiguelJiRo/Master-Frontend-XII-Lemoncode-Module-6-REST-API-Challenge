import * as React from 'react';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { linkRoutes } from 'core/router';
import { useNavigate } from 'react-router-dom';
import { deleteCharacter } from 'pods/character/api';

export const CharacterCollectionContainer = () => {
  const navigate = useNavigate();
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleCharacterDetail = (id: number) => {
    navigate(linkRoutes.characterDetail(id.toString()));
  }

  const handleEdit = (id: number) => {
    navigate(linkRoutes.editCharacter(id.toString()));
  };

  const handleDelete = async (id: number) => {
    await deleteCharacter(id);
    loadCharacterCollection();
  };

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCreateCharacter={handleCreateCharacter}
      onDetail={handleCharacterDetail}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
