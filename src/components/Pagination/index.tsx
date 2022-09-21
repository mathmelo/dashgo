import { Box, Stack, Text } from '@chakra-ui/react';
import PaginationItem from './PaginationItem';

interface IPaginationProps {
  totalCount: number | undefined;
  itemsPerPage: number;
  current: number;
  onChangePage: (page: number) => void;
}

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => index + 1 + from)
    .filter((item) => item > 0);
}

const siblinsCount = 1;

const Pagination = ({
  current,
  totalCount = 0,
  itemsPerPage,
  onChangePage,
}: IPaginationProps) => {
  const lastPage = Math.ceil(totalCount / itemsPerPage);

  const previousPages = generatePagesArray(
    current - 1 - siblinsCount,
    current - 1,
  );

  const nextPages = generatePagesArray(
    current,
    Math.min(current + siblinsCount, lastPage),
  );

  return (
    <Stack
      direction={['column', 'row']}
      spacing="8"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>{itemsPerPage * (current - 1)}</strong> -{' '}
        <strong>
          {itemsPerPage * current < totalCount
            ? itemsPerPage * current
            : totalCount}
        </strong>{' '}
        de <strong>{totalCount}</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {current - siblinsCount > 1 && (
          <>
            <PaginationItem number={1} onChangePage={onChangePage} />
            {current - siblinsCount > 2 && (
              <Text width="8" color="gray.300" align="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((ppage) => (
            <PaginationItem
              number={ppage}
              key={ppage}
              onChangePage={onChangePage}
            />
          ))}

        <PaginationItem
          isCurrent
          number={current}
          onChangePage={onChangePage}
        />

        {nextPages.length > 0 &&
          nextPages.map((npage) => (
            <PaginationItem
              number={npage}
              key={npage}
              onChangePage={onChangePage}
            />
          ))}

        {current + siblinsCount < lastPage && (
          <>
            {current + siblinsCount < lastPage - 1 && (
              <Text width="8" color="gray.300" align="center">
                ...
              </Text>
            )}
            <PaginationItem number={lastPage} onChangePage={onChangePage} />
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default Pagination;
