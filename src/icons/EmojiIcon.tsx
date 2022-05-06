import * as React from "react"
import { SVGProps } from "react"

const EmojiIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    stroke="currentColor"
    {...props}
  >
    <g strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M24 46.5c12.426 0 22.5-10.074 22.5-22.5S36.426 1.5 24 1.5 1.5 11.574 1.5 24 11.574 46.5 24 46.5Z"
        strokeWidth={3}
      />
      <path
        d="M16.5 18.75a.75.75 0 1 1 0-1.5M16.5 18.75a.75.75 0 1 0 0-1.5M31.5 18.75a.75.75 0 0 1 0-1.5M31.5 18.75a.75.75 0 0 0 0-1.5"
        strokeWidth={3}
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M36.096 30a13.506 13.506 0 0 1-19.22 5.479A13.505 13.505 0 0 1 11.896 30"
        strokeWidth={3}
      />
    </g>
  </svg>
)

export default EmojiIcon
