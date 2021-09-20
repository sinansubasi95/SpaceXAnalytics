import React from 'react';
import { LogoT } from '../../types';

export const Logo = ({ src }: LogoT) => {
  return <img className="w-auto h-3.5" alt="SpaceX Analytics" src={src} />;
};
