import * as React from "react"
import { SVGProps } from "react"

const AddContactIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path
        d="M22.5 34.5a12 12 0 1 0 24 0 12 12 0 1 0-24 0ZM34.5 28.5v12M28.5 34.5h12M1.5 34.5a13.506 13.506 0 0 1 18.8-12.416M6.75 9.75a8.25 8.25 0 1 0 16.5 0 8.25 8.25 0 1 0-16.5 0Z"
        strokeWidth={3}
      />
    </g>
  </svg>
)

export default AddContactIcon
