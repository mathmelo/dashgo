import { NextPage } from 'next';
import Link from 'next/link';
import {
  Flex,
  Box,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button,
} from '@chakra-ui/react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Input } from '../../components/Form/Input';

import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';
import Router from 'next/router';

interface ICreateUserProps {
  email: string;
  name: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup
  .object()
  .shape({
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    name: yup.string().required('Nome obrigatório'),
    password: yup
      .string()
      .required('Senha obrigatória')
      .min(6, 'No mínimo 6 caracteres'),
    password_confirmation: yup
      .string()
      .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
      .required('Confirmação de senha obrigatória'),
  })
  .required();

const CreateUser: NextPage = () => {
  const createUser = useMutation(
    async (user: ICreateUserProps) => {
      const response = await api.post('/users', {
        user: {
          ...user,
          created_at: new Date(),
        },
      });

      return response.data.user;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['users']);
      },
    },
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ICreateUserProps>({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<ICreateUserProps> = async (values) => {
    await createUser.mutateAsync(values);

    Router.push('/users');
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                label="Nome completo"
                error={errors.name}
                {...register('name')}
              />
              <Input
                label="E-mail"
                error={errors.email}
                {...register('email')}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                type="password"
                label="Senha"
                error={errors.password}
                {...register('password')}
              />
              <Input
                type="password"
                label="Confirmar senha"
                error={errors.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" colorScheme="pink" isLoading={isSubmitting}>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUser;
