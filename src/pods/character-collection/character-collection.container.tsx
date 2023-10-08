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

  const handleCharacterDetail = (id: number) => {
    navigate(linkRoutes.characterDetail(id.toString()));
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
          alignItems: "center",
          padding: "0.5rem",
        }}
      >
        <SearchComponent onChange={handleSearch} />
      </header>
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onDetail={handleCharacterDetail}
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
