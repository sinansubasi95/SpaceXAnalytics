import React from 'react';

interface ILogoProps {
  logo: string;
}

const Logo: React.FC<ILogoProps> = ({ logo }) => {
  return (
    <div className="flex-shrink-0 flex items-center px-4">
      <img className="h-8 w-auto" src={logo} alt="Workflow" />
    </div>
    // <Link className="flex items-center text-white" to=".">
    //   <img className="h-8 w-auto" src={logo} alt="Workflow" />
    //   <span className="text-xl text-white font-semibold">Bulletproof React</span>
    // </Link>
  );
};

export default Logo;
