import * as React from "react"
import { SVGProps } from "react"

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path
        d="M2.944 26.714a18.126 18.126 0 1 0 33.364-14.18 18.126 18.126 0 1 0-33.364 14.18ZM32.442 32.44 46.5 46.5"
        strokeWidth={3}
      />
    </g>
  </svg>
)

export default SearchIcon
