import * as React from 'react';

interface Props {
  width?: number;
  height?: number;
  className?: string;
}

function ContactUpdate({ width = 16, height = 16, className }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 4.44a3 3 0 11-6 0 3 3 0 016 0zm3 8.5c0 3.5-12 3.5-12 0 0-6.187 12-6.124 12 0z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ContactUpdate;
