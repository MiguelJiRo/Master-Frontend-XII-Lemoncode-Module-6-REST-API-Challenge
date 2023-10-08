import * as React from "react";
import { useEpisodeCollection } from "./episode-collection.hook";
import { EpisodeCollectionComponent } from "./episode-collection.component";
import { linkRoutes } from "core/router";
import { useNavigate } from "react-router-dom";
import { PaginationComponent } from "common/components/pagination";
import { SearchComponent } from "common/components/search";
import Button from "@mui/material/Button";

export const EpisodeCollectionContainer = () => {
  const navigate = useNavigate();
  const { loadEpisodeCollection, dataCollection, episodeCollection } =
    useEpisodeCollection();
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    loadEpisodeCollection(1);
  }, []);

  React.useEffect(() => {
    loadEpisodeCollection(1, searchValue);
  }, [searchValue]);

  const handleChangePage = (page: number) => {
    loadEpisodeCollection(page);
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
      <EpisodeCollectionComponent episodeCollection={episodeCollection} />
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
