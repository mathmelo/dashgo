import { NextPage } from 'next';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import {
  Flex,
  Box,
  Text,
  Icon,
  Heading,
  Button,
  Checkbox,
  Table,
  Tbody,
  Thead,
  Th,
  Td,
  Tr,
} from '@chakra-ui/react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Pagination from '../../components/Pagination';

const UserList: NextPage = () => {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar Novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            {/**HEAD */}
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                {/**CHECKBOX */}
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                {/**NOME E EMAIL */}
                <Td>
                  <Box>
                    <Text fontWeight="bold">Matheus Melo</Text>
                    <Text fontSize="sm" color="gray.300">
                      temporary@email.com
                    </Text>
                  </Box>
                </Td>
                {/**DATA */}
                <Td>22 de Agosto, 2022</Td>
                {/**EDITAR */}
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
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
};

export default UserList;
