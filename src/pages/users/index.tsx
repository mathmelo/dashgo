import { NextPage } from 'next';
import { RiAddLine } from 'react-icons/ri';
import { Flex, Box, Icon, Heading, Button } from '@chakra-ui/react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Pagination from '../../components/Pagination';
import UserTableList from '../../components/UserTableList';
import Link from 'next/link';

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

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>

          <UserTableList />

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
};

export default UserList;
