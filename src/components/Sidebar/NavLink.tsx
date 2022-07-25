import { ElementType, ReactNode } from 'react';
import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChackraLinkProps,
} from '@chakra-ui/react';
import ActiveLink from '../ActiveLink';

interface INavLinkProps extends ChackraLinkProps {
  icon: ElementType;
  children: ReactNode;
  href: string;
}

const NavLink = ({ icon, href, children, ...props }: INavLinkProps) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink as="a" display="flex" alignItems="center" {...props}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
};

export default NavLink;
