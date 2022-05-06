import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function CheckboxGroup({ children }: Props) {
  return <div className="w-full space-y-1">{children}</div>;
}
