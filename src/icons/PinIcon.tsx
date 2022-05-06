import * as React from "react"
import { SVGProps } from "react"

const PinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" {...props}>
    <path
      d="M12 0a8 8 0 0 0-8 8c0 3.51 5 12 7.15 15.52a1 1 0 0 0 1.7 0C15 20 20 11.51 20 8a8 8 0 0 0-8-8Zm0 11.5A3.5 3.5 0 1 1 15.5 8a3.5 3.5 0 0 1-3.5 3.5Z"
      transform="scale(2)"
    />
  </svg>
)

export default PinIcon
