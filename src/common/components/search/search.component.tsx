import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDebounce } from 'use-debounce';

interface Props {
    searchValue: string;
    onChange: (value: string) => void;
  }

export const SearchComponent: React.FunctionComponent<Props> = (props) => {
    const { searchValue, onChange } = props;
    const [lastSearch, setLastSearch] = React.useState('Search');
    const [debouncedFilter] = useDebounce(searchValue, 500);

    const handleSearch = (event: any) => {
        setLastSearch(event.target.value);
    };

    React.useEffect(() => {
        onChange(lastSearch);
    }, [debouncedFilter])

    return (
        <>
            <TextField
              label="Search"
              placeholder={lastSearch}
              multiline
              onChange={(e) => {
                handleSearch(e.target.value);
                setLastSearch(e.target.value)
              }}
              value={searchValue}
            />
            <IconButton onClick={handleSearch} title="">
              <SearchIcon />
            </IconButton>
        </>
      );
};