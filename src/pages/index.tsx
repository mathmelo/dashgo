import type { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, Flex, Stack } from '@chakra-ui/react';
import { Input } from '../components/Form/Input';

interface IHandleSignInProps {
  email: string;
  password: string;
}

const schema = yup
  .object()
  .shape({
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: yup.string().required('Senha obrigatória'),
  })
  .required();

const SignIn: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IHandleSignInProps>({
    resolver: yupResolver(schema),
  });

  const handleSignIn: SubmitHandler<IHandleSignInProps> = (values) => {
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            label="Email"
            error={errors.email}
            {...register('email')}
          />
          <Input
            type="password"
            label="Senha"
            error={errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
