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
  useBreakpointValue,
} from '@chakra-ui/react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Pagination from '../../components/Pagination';
import UserTableList from '../../components/UserTableList';

const UserList: NextPage = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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

          <UserTableList />

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
};

export default UserList;
