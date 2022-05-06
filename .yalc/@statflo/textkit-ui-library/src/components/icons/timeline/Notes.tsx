import * as React from 'react';

interface Props {
  width?: number;
  height?: number;
  className?: string;
}

function Notes({ width = 16, height = 16, className }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#prefix__clip0)" fill="currentColor">
        <path d="M7.596 11.933a.166.166 0 00-.133-.263H1.5a.166.166 0 01-.168-.17V3.167A.167.167 0 011.5 3h1a.167.167 0 01.167.167v.166a.667.667 0 101.333 0v-.166A.167.167 0 014.167 3h1a.167.167 0 01.166.167v.166a.667.667 0 001.334 0v-.166A.167.167 0 016.833 3h1A.167.167 0 018 3.167v.166a.667.667 0 001.333 0v-.166A.167.167 0 019.5 3h.667a.166.166 0 01.166.167v5.545a.167.167 0 00.285.118l1-1a.167.167 0 00.049-.118V3a1.333 1.333 0 00-1.334-1.333H9.5a.166.166 0 01-.167-.167V.667A.667.667 0 108 .667V1.5a.166.166 0 01-.167.167h-1a.166.166 0 01-.166-.167V.667a.667.667 0 00-1.334 0V1.5a.166.166 0 01-.166.167h-1A.166.166 0 014 1.5V.667a.667.667 0 00-1.333 0V1.5a.166.166 0 01-.167.167H1.333A1.333 1.333 0 000 3v8.667A1.333 1.333 0 001.333 13h5.421a.165.165 0 00.133-.07l.709-.997zM15.357 7.727a1.807 1.807 0 00-2.404.182l-4.387 4.387a.167.167 0 000 .236l2.234 2.235a.166.166 0 00.236 0l4.453-4.452a1.748 1.748 0 00-.132-2.588zM8.04 13.42a.166.166 0 00-.28.086L7.34 15.6a.333.333 0 00.394.393l2.095-.419a.167.167 0 00.086-.281L8.04 13.42z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Notes;