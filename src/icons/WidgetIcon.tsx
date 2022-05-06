import * as React from "react"
import { SVGProps } from "react"

const WidgetIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
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
    <path
      style={{
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5px",
      }}
      d="M4.51 9.75h3v3h-3zM4.51 15.75h3v3h-3zM10.51 9.75h3v3h-3zM10.51 15.75h3v3h-3zM16.51 9.75h3v3h-3zM16.51 15.75h3v3h-3z"
      transform="scale(2)"
    />
  </svg>
)

export default WidgetIcon