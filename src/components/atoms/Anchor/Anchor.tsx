import React from 'react';

interface IAnchorProps {}

const Anchor: React.FC<IAnchorProps> = ({ children }) => {
  return (
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
      "
    >
      {children}
    </a>
  );
};

export default Anchor;
