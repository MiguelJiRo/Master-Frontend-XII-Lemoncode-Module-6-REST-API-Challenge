import * as React from "react";
import { useLocationCollection } from "./location-collection.hook";
import { LocationCollectionComponent } from "./location-collection.component";
import { linkRoutes } from "core/router";
import { useNavigate } from "react-router-dom";
import { PaginationComponent } from "common/components/pagination";
import { SearchComponent } from "common/components/search";
import Button from "@mui/material/Button";

export const LocationCollectionContainer = () => {
  const navigate = useNavigate();
  const { loadLocationCollection, dataCollection, locationCollection } =
    useLocationCollection();
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    loadLocationCollection(1);
  }, []);

  React.useEffect(() => {
    loadLocationCollection(1, searchValue);
  }, [searchValue]);

  const handleChangePage = (page: number) => {
    loadLocationCollection(page);
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
        <SearchComponent onChange={handleSearch} />
      </header>
      <LocationCollectionComponent locationCollection={locationCollection} />
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
