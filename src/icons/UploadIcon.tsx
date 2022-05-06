import * as React from "react"
import { SVGProps } from "react"

const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path
        d="M24.002 31.5v-24M33.002 16.5l-9-9-9 9M46.502 31.5v3a6 6 0 0 1-6 6h-33a6 6 0 0 1-6-6v-3"
        strokeWidth={3}
      />
    </g>
  </svg>
)

export default UploadIcon
