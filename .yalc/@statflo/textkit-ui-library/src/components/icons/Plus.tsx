import * as React from 'react';

interface Props {
  width?: number;
  height?: number;
  className?: string;
}

function Plus({ width = 16, height = 16, className }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 6a.75.75 0 00.75.75h4.375a.125.125 0 01.125.125v4.375a.75.75 0 101.5 0V6.875a.125.125 0 01.125-.125h4.375a.75.75 0 100-1.5H6.875a.125.125 0 01-.125-.125V.75a.75.75 0 00-1.5 0v4.375a.125.125 0 01-.125.125H.75A.75.75 0 000 6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Plus;
