import { ElementType, ReactNode } from 'react';
import {
  Icon,
  Link,
  Text,
  LinkProps as ChackraLinkProps,
} from '@chakra-ui/react';

interface INavLinkProps extends ChackraLinkProps {
  icon: ElementType;
  children: ReactNode;
}

const NavLink = ({ icon, children }: INavLinkProps) => {
  return (
    <Link display="flex" alignItems="center">
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
};

export default NavLink;
