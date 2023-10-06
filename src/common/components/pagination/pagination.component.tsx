import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface Props {
    totalPages: number;
    onChangePage: (page: number) => void;
}

export const PaginationComponent: React.FunctionComponent<Props> = (props) => {
    const { onChangePage, totalPages } = props;
    const [page, setPage] = React.useState(1);

    const handlePageChange = (event: any, value: number) => {
        console.log('handlePageChange', value);
        setPage(value);
        onChangePage(value);
    };

    return (
        <Stack spacing={2}>
          <Pagination count={totalPages} page={page} onChange={handlePageChange} color="primary" showFirstButton showLastButton />
        </Stack>
      );
};