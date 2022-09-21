import { Button } from '@chakra-ui/react';

interface IPaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onChangePage: (page: number) => void;
}

const PaginationItem = ({
  isCurrent = false,
  number,
  onChangePage,
}: IPaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: 'pink.500',
          cursor: 'default',
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: 'gray.500',
      }}
      onClick={() => onChangePage(number)}
    >
      {number}
    </Button>
  );
};

export default PaginationItem;
