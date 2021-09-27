import React from 'react';
import { ILogo } from '../../interfaces/ui';

export const Logo = ({ src }: ILogo) => {
  return <img className="w-auto h-3.5" alt="SpaceX Analytics" src={src} />;
};