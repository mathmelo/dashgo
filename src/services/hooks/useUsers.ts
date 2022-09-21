import { useQuery } from '@tanstack/react-query';
import { api } from '../../services/api';

interface DefaultUser {
  id: string;
  name: string;
  email: string;
}

interface User extends DefaultUser {
  created_at: string;
}

interface UserResponse extends DefaultUser {
  createdAt: string;
}

type GetUsersResponseProps = {
  totalCount: number;
  users: UserResponse[];
};

export async function getUsers(
  page: number,
  per_page: number = 20,
): Promise<GetUsersResponseProps> {
  const { data, headers } = await api.get('users', {
    params: {
      page,
      per_page,
    },
  });

  const totalCount = Number(headers['x-total-count']);

  const users = data.users.map((user: User) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });

  return { users, totalCount };
}

/**
 * Hook that returns array of users
 * @param page Current listing page
 * @param per_page Number of users per page. By default: 20
 * @returns Array of users (in 'data' object).
 */
export function useUsers(page: number, per_page?: number) {
  return useQuery(['users', page], () => getUsers(page, per_page), {
    staleTime: 1000 * 60 * 5, // 5 min
  });
}
