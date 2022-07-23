import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

const Profile = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Matheus Melo</Text>
        <Text color="gray.300" fontSize="small">
          temporary@email.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Matheus Melo"
        src="https://github.com/mathmelo.png"
      />
    </Flex>
  );
};

export default Profile;
