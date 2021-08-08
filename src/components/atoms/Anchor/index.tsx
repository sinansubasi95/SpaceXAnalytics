import React from 'react';
import Link from 'next/link';
import { BaseAnchor } from './style';

interface IAnchorProps {
  href: string;
  className?: string;
}

const Anchor: React.FC<IAnchorProps> = ({ children, href }) => {
  return (
    <Link href={href}>
      <BaseAnchor>{children}</BaseAnchor>
    </Link>
  );
};

export default Anchor;
