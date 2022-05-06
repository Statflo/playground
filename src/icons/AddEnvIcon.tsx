import * as React from "react"
import { SVGProps } from "react"

const AddEnvIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
    <path
      d="M8.25 19.41a8.42 8.42 0 0 1-4.81-1.85C1.88 16 .12 10.42 3.44 7.1 7.25 3.29 19.13 0 20.09.91c.48.48-.13 3.74-1.34 7.34M7.87 13.13.75 20.25"
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
      d="M23.25 15.75a7.68 7.68 0 0 1-6 7.5 7.68 7.68 0 0 1-6-7.5V13.5a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5ZM17.25 15v4.5M15 17.25h4.5"
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

export default AddEnvIcon
