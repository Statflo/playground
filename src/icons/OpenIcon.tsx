import * as React from "react"
import { SVGProps } from "react"

const OpenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" {...props}>
    <path
      d="M9.32 17c0-3.85 3.63-7 8.09-7a8.68 8.68 0 0 1 5.9 2.21.27.27 0 0 0 .24.06.26.26 0 0 0 .17-.18A8.1 8.1 0 0 0 24 10c0-5.51-5.38-10-12-10S0 4.49 0 10a9 9 0 0 0 2.77 6.38l-1.42 4.73a.5.5 0 0 0 .68.6l5.47-2.44a13.59 13.59 0 0 0 2.09.52.26.26 0 0 0 .24-.1.25.25 0 0 0 0-.25A6.09 6.09 0 0 1 9.32 17Zm.18-4.72H6a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 0 1.5Zm7-4.5H6a.75.75 0 0 1 0-1.5h10.5a.75.75 0 0 1 0 1.5Z"
      transform="scale(2)"
    />
    <path
      d="M17.41 11.5c-3.63 0-6.59 2.45-6.59 5.47 0 3.52 4.08 6.32 8.46 5.23l3.5 1.8a.48.48 0 0 0 .54-.07.49.49 0 0 0 .16-.52l-.9-3A4.92 4.92 0 0 0 24 17c0-3-3-5.5-6.59-5.5Z"
      transform="scale(2)"
    />
  </svg>
)

export default OpenIcon
