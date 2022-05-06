import * as React from "react"
import { SVGProps } from "react"

const AddWidgetIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path
        d="M43.52 16.506v-12a3 3 0 0 0-3-3h-36a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3h12M1.52 10.506h42"
        strokeWidth={3}
      />
      <path
        d="M22.52 34.506a12 12 0 1 0 24 0 12 12 0 1 0-24 0ZM34.52 28.506v12M28.52 34.506h12"
        strokeWidth={3}
      />
    </g>
  </svg>
)

export default AddWidgetIcon
