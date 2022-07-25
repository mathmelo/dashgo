import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';

import Logo from './Logo';
import SearchBar from './SearchBar';
import NotificationNav from './NotificationNav';
import Profile from './Profile';

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

const Header = () => {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="20"
          variant="ghost"
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />
      {isWideVersion && <SearchBar />}
      <NotificationNav />
      <Profile showProfileData={isWideVersion} />
    </Flex>
  );
};

export default Header;
