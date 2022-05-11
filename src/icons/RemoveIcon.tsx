import * as React from "react"
import { SVGProps } from "react"

const RemoveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M9 39 39 9M9 9l30 30" strokeWidth={3} />
    </g>
  </svg>
)

export default RemoveIcon
