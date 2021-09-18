import React from 'react';
import { LogoT } from '../../types';

export const Logo = ({ src }: LogoT) => {
  return <img className="w-auto h-3.5 mb-3" alt="SpaceX Analytics" src={src} />;
};
