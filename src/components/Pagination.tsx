import { Box, Typography } from '@mui/material';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  const handleFirstPage = () => onPageChange(1);
  const handlePreviousPage = () => onPageChange(Math.max(1, currentPage - 1));
  const handleNextPage = () => onPageChange(Math.min(totalPages, currentPage + 1));
  const handleLastPage = () => onPageChange(totalPages);
  return (
    <Box display={'flex'} justifyContent="center" marginTop={2} gap={2}>
      <Typography
        role="button"
        color={currentPage === 1 ? 'text.disabled' : 'primary'}
        onClick={handleFirstPage}
        sx={{
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
        }}
      >
        First
      </Typography>
      <Typography
        role="button"
        color={currentPage === 1 ? 'text.disabled' : 'primary'}
        onClick={handlePreviousPage}
        sx={{
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
        }}
      >
        Previous
      </Typography>
      <Typography>
        Page {currentPage} of {totalPages}
      </Typography>
      <Typography
        role="button"
        color={currentPage === totalPages ? 'text.disabled' : 'primary'}
        onClick={handleNextPage}
        sx={{
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
        }}
      >
        Next
      </Typography>
      <Typography
        role="button"
        color={currentPage === totalPages ? 'text.disabled' : 'primary'}
        onClick={handleLastPage}
        sx={{
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
        }}
      >
        Last
      </Typography>
    </Box>
  );
};
