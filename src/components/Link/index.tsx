/**
 *
 * Link
 *
 */
import React from 'react';
import NextLink from 'next/link';
import { LinkProps } from './Link';

export const Link: React.FunctionComponent<LinkProps> = ({ href, as, children }) => {
  const internal = /^\/(?!\/)/.test(href);

  if (internal) {
    return (
      <NextLink href={href} as={as}>
        <span>{children}</span>
      </NextLink>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Link;
