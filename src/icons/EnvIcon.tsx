import * as React from "react"
import { SVGProps } from "react"

const EnvIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <path
      d="M10.25 21.09a7.53 7.53 0 0 1-7.53-7.53C2.72 2.64 15.86 8.25 22.19 3a.46.46 0 0 1 .48 0 .51.51 0 0 1 .3.38c1.93 11.26-6.4 17.71-12.72 17.71Z"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5px",
      }}
      transform="scale(2)"
    />
    <path
      d="M13.26 11.55a25 25 0 0 0-8.61 4.29l-3.9 3.33"
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5px",
      }}
      transform="scale(2)"
    />
  </svg>
)

export default EnvIcon
