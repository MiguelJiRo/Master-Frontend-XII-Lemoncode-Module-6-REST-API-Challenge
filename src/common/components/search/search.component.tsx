import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useDebounce } from "use-debounce";

interface Props {
  onChange: (value: string) => void;
}

export const SearchComponent: React.FunctionComponent<Props> = (props) => {
  const { onChange } = props;
  const [lastSearch, setLastSearch] = React.useState("");
  const [debouncedFilter] = useDebounce(lastSearch, 500);

  const handleSearch = (event: any) => {
    console.log("search value =>", event.target.value);
    setLastSearch(event.target.value);
  };

  React.useEffect(() => {
    onChange(lastSearch);
  }, [debouncedFilter]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          label="Search something..."
          placeholder={lastSearch}
          multiline
          onChange={handleSearch}
          value={lastSearch}
        />
        <IconButton onClick={handleSearch} title="">
          <SearchIcon />
        </IconButton>
      </div>
    </>
  );
};
