import {
  FormControl,
  FormLabel,
  Input as FormInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface IInputProps extends ChakraInputProps {
  name: string;
  label: string;
}

const Input = ({ name, label, ...props }: IInputProps) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <FormInput
        name={name}
        id={name}
        {...props}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{ bgColor: 'gray.900' }}
        size="lg"
      />
    </FormControl>
  );
};

export default Input;
