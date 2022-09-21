import type { User } from './index';

import {
  Tr,
  Td,
  Box,
  Text,
  Button,
  Icon,
  Checkbox,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';
import { queryClient } from '../../services/queryClient';
import { api } from '../../services/api';

const TableItem = ({ createdAt, email, name, id }: User) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const handlePrefetchUser = async (userId: string) =>
    await queryClient.prefetchQuery(
      ['user', userId],
      async () => {
        const response = await api.get(`users/${userId}`);

        return response.data;
      },
      {
        staleTime: 1000 * 60 * 5, // 5 min
      },
    );

  return (
    <Tr>
      <Td px={['4', '4', '6']}>
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(id)}>
            <Text fontWeight="bold">{name}</Text>
          </Link>
          <Text fontSize="sm" color="gray.300">
            {email}
          </Text>
        </Box>
      </Td>
      {isWideVersion && <Td>{createdAt}</Td>}
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
