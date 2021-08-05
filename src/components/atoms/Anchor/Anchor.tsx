import React from 'react';
import Link from 'next/link';

interface IAnchorProps {
  className: string;
  href: string;
}

const Anchor: React.FC<IAnchorProps> = ({ children, className, href }) => {
  if (className) {
    return (
      <Link href={href}>
        <a className={className}>{children}</a>
      </Link>
    );
  }

  return (
    <Link href={href}>
      <a
        className="
          border-transparent
          text-gray-600
          hover:bg-gray-50
          hover:text-gray-900
          group
          flex
          items-center
          px-3
          py-2
          text-sm
          font-medium
          border-r-4
          active:bg-indigo-50
          active:border-indigo-600
          active:text-indigo-600
        "
      >
        {children}
      </a>
    </Link>
  );
};

export default Anchor;
