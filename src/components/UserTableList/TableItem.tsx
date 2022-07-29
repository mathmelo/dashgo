import { Tr, Td, Box, Text, Button, Icon, Checkbox } from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';

interface ITableItemProps {
  isWideVersion?: boolean;
}

const TableItem = ({ isWideVersion = true }: ITableItemProps) => {
  return (
    <Tr>
      <Td px={['4', '4', '6']}>
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Text fontWeight="bold">Matheus Melo</Text>
          <Text fontSize="sm" color="gray.300">
            temporary@email.com
          </Text>
        </Box>
      </Td>
      {isWideVersion && <Td>22 de Agosto, 2022</Td>}
      {isWideVersion && (
        <Td>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="blue"
            leftIcon={<Icon as={RiPencilLine} />}
          >
            Editar
          </Button>
        </Td>
      )}
    </Tr>
  );
};

export default TableItem;
