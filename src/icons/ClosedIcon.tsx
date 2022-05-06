import * as React from "react"
import { SVGProps } from "react"

const ClosedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" {...props}>
    <path
      d="M17.5 9.5a7.94 7.94 0 0 1 4 1.08.27.27 0 0 0 .23 0 .24.24 0 0 0 .14-.18A7.33 7.33 0 0 0 22 9c0-5-4.93-9-11-9S0 4 0 9a8.06 8.06 0 0 0 2.66 5.85L1 19.33a.5.5 0 0 0 .66.63l5.83-2.43a12.47 12.47 0 0 0 1.7.34.24.24 0 0 0 .2-.06.22.22 0 0 0 .08-.2v-.11a8 8 0 0 1 8.03-8Z"
      transform="scale(2)"
    />
    <path
      d="M17.5 11a6.5 6.5 0 1 0 6.5 6.5 6.51 6.51 0 0 0-6.5-6.5Zm-3.39 6.68a.74.74 0 0 1 1.06 0l1.5 1.5 2.9-3.88a.75.75 0 1 1 1.2.91l-2.9 3.87a1.5 1.5 0 0 1-2.26.16l-1.5-1.5a.74.74 0 0 1 0-1.06Z"
      transform="scale(2)"
    />
  </svg>
)

export default ClosedIcon
