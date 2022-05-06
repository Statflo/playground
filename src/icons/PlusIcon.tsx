import * as React from "react"
import { SVGProps } from "react"

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M1.5 24h45M24 1.5v45" strokeWidth={3} />
    </g>
  </svg>
)

export default PlusIcon
