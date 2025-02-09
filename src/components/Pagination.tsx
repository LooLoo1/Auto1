import { Button, Box } from '@mui/material';

type PaginationProps = {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ currentPage, onPageChange }: PaginationProps) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
      <Button
        variant="outlined"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Previous
      </Button>
      <Button
        variant="outlined"
        onClick={() => onPageChange(currentPage + 1)}
        sx={{ marginLeft: 2 }}
      >
        Next
      </Button>
    </Box>
  );
};