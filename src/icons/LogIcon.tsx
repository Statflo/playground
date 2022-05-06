import * as React from "react"
import { SVGProps } from "react"

const LogIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <path
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5px",
      }}
      d="M5.51 10.5h1.5M5.51 14.25h1.5M5.51 18h1.5M10.01 10.5h8.5M10.01 14.25h8.5M10.01 18h8.5"
      transform="scale(2)"
    />
    <g transform="scale(2)">
      <rect
        x={0.75}
        y={2}
        width={22.5}
        height={20}
        rx={1.5}
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5px",
        }}
      />
      <path
        style={{
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5px",
        }}
        d="M.75 6.5h22.5"
      />
    </g>
  </svg>
)

export default LogIcon
