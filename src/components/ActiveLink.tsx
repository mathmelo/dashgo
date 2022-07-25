import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react';

interface IActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

const ActiveLink = ({
  children,
  shouldMatchExactHref = false,
  ...rest
}: IActiveLinkProps) => {
  const { asPath } = useRouter();
  let isActive = false;

  if (shouldMatchExactHref) {
    if (rest.href === asPath || rest.as === asPath) {
      isActive = true;
    }
  } else {
    if (
      asPath.startsWith(String(rest.href)) ||
      asPath.startsWith(String(rest.as))
    ) {
      isActive = true;
    }
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  );
};

export default ActiveLink;
