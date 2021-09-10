import React from 'react';
import { LogoProps } from '../../types';

export const Logo = ({ src }: LogoProps) => {
  return <img className="w-auto h-8" alt="SpaceX Analytics" src={src} />;
};
