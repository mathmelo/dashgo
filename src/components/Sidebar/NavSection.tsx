import { ReactNode } from 'react';
import { Stack, Box, Text } from '@chakra-ui/react';

interface INavSectionProps {
  title: string;
  children: ReactNode;
}

const NavSection = ({ title, children }: INavSectionProps) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
};

export default NavSection;
