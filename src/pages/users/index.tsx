import Link from 'next/link';
import { useState } from 'react';

import { Flex, Box, Icon, Heading, Button, Spinner } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Pagination from '../../components/Pagination';
import UserTableList from '../../components/UserTableList';

import { useUsers } from '../../services/hooks/useUsers';

const UserList = () => {
  const [pagination, setPage] = useState({ page: 1, per_page: 10 });
  const { data, isLoading, error, isFetching } = useUsers(
    pagination.page,
    pagination.per_page,
  );

  const handleChangePagination = (pageToChange: number) => {
    setPage({ page: pageToChange, per_page: 10 });
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              )}
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

          {isLoading ? (
            <Flex justify="center" align="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">Falha ao obter dados de usuário</Flex>
          ) : (
            <>
              <UserTableList users={data?.users} />
              <Pagination
                itemsPerPage={pagination.per_page}
                current={pagination.page}
                totalCount={data?.totalCount}
                onChangePage={handleChangePagination}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default UserList;
