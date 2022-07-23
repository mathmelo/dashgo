import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';
import Logo from './Logo';
import NotificationNav from './NotificationNav';
import Profile from './Profile';

import SearchBar from './SearchBar';

const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      <SearchBar />
      <NotificationNav />
      <Profile />
    </Flex>
  );
};

export default Header;
