import * as React from "react"
import { SVGProps } from "react"

const FilterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M19.4 23.6V45c0 .8.6 1.4 1.4 1.6 0 0 0 0 0 0h6c.8 0 1.6-.6 1.6-1.6V23.6c9.8-2 17.2-10.4 18-20.4 0-.8-.6-1.6-1.4-1.6 0 0 0 0 0 0H3c-.8 0-1.4.6-1.4 1.6 0 0 0 0 0 0 .6 10 8 18.4 17.8 20.4z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
    />
  </svg>
)

export default FilterIcon
