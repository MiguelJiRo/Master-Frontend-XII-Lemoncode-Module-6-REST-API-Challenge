import * as React from "react";
import { useCharacterCollection } from "./character-collection.hook";
import { CharacterCollectionComponent } from "./character-collection.component";
import { linkRoutes } from "core/router";
import { useNavigate } from "react-router-dom";
import { PaginationComponent } from "common/components/pagination";
import { SearchComponent } from "common/components/search";
import Button from "@mui/material/Button";

export const CharacterCollectionContainer = () => {
  const navigate = useNavigate();
  const { characterCollection, dataCollection, loadCharacterCollection } =
    useCharacterCollection();
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    loadCharacterCollection(1);
  }, []);

  React.useEffect(() => {
    loadCharacterCollection(1, searchValue);
  }, [searchValue]);

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleCharacterDetail = (id: number) => {
    navigate(linkRoutes.characterDetail(id.toString()));
  };

  const handleEdit = (id: number) => {
    navigate(linkRoutes.editCharacter(id.toString()));
  };

  const handleChangePage = (page: number) => {
    loadCharacterCollection(page);
  };

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.5rem",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateCharacter}
        >
          Add Character
        </Button>
        <SearchComponent onChange={handleSearch} />
      </header>
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onDetail={handleCharacterDetail}
        onEdit={handleEdit}
      />
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.5rem",
        }}
      >
        <PaginationComponent
          totalPages={dataCollection.pages}
          onChangePage={handleChangePage}
        />
      </footer>
    </>
  );
};
