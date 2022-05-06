import React from 'react';
import { Rings } from 'react-loader-spinner';

interface Props {
  children: React.ReactNode;
}

export default function Loader({ children }: Props) {
  return (
    <div className="flex flex-1 items-center justify-center flex-col py-20 space-y-4">
      <Rings color="hsl(229.3, 63.6%, 56.9%)" height={75} width={75} />
      <p className="text-sm font-medium text-main-l2">{children}</p>
    </div>
  );
}
