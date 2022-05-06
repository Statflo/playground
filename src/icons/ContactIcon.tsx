import * as React from "react"
import { SVGProps } from "react"

const ContactIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path
        d="M6.75 15.75a8.25 8.25 0 1 0 16.5 0 8.25 8.25 0 1 0-16.5 0ZM1.5 40.5a13.5 13.5 0 0 1 27 0M28.502 8.832a8.25 8.25 0 1 1-.012 13.828M30 27.334A13.514 13.514 0 0 1 46.5 40.5"
        strokeWidth={3}
      />
    </g>
  </svg>
)

export default ContactIcon
