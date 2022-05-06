import * as React from "react"
import { SVGProps } from "react"

const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <g stroke="currentColor" strokeWidth={1.5}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M28.5 33H27a3 3 0 0 1-3-3v-7.5a1.5 1.5 0 0 0-1.5-1.5H21"
        strokeWidth={3}
      />
      <path
        d="M23.25 15a.75.75 0 0 1 0-1.5M23.25 15a.75.75 0 0 0 0-1.5"
        strokeWidth={3}
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M24 46.5c12.426 0 22.5-10.074 22.5-22.5S36.426 1.5 24 1.5 1.5 11.574 1.5 24 11.574 46.5 24 46.5Z"
        strokeWidth={3}
      />
    </g>
  </svg>
)

export default InfoIcon
