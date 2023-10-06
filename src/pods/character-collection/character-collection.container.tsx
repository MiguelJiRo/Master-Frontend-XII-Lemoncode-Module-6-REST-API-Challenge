import * as React from 'react';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { linkRoutes } from 'core/router';
import { useNavigate } from 'react-router-dom';
import { deleteCharacter } from 'pods/character/api';
import { PaginationComponent } from 'common/components/pagination';

export const CharacterCollectionContainer = () => {
  const navigate = useNavigate();
  const { characterCollection, dataCollection, loadCharacterCollection } = useCharacterCollection();

  React.useEffect(() => {
    loadCharacterCollection(1);
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

  const handleChangePage = (page: number) => {
    loadCharacterCollection(page);
  };

  return (
    <>
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onCreateCharacter={handleCreateCharacter}
        onDetail={handleCharacterDetail}
        onEdit={handleEdit}
      />
      <footer>
          <PaginationComponent 
            totalPages={dataCollection.pages} 
            onChangePage={handleChangePage} />
      </footer>
    </>
  );
};
