import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Checkbox,
  useBreakpointValue,
} from '@chakra-ui/react';
import TableItem from './TableItem';

const UserTableList = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Table colorScheme="whiteAlpha">
      {/**HEAD */}
      <Thead>
        <Tr>
          <Th px={['4', '4', '6']} color="gray.300" width="8">
            <Checkbox colorScheme="pink" />
          </Th>
          <Th>Usuário</Th>
          {isWideVersion && <Th>Data de cadastro</Th>}
          {isWideVersion && <Th width="8"></Th>}
        </Tr>
      </Thead>
      <Tbody>
        <TableItem isWideVersion={isWideVersion} />
      </Tbody>
    </Table>
  );
};

export default UserTableList;
