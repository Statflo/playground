import * as React from "react"
import { SVGProps } from "react"

const AnswerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" {...props}>
    <path
      d="M12 1.34C5.66 1.34.5 5.59.5 10.81a8.58 8.58 0 0 0 3.18 6.54l-2.3 4.59a.49.49 0 0 0 .09.57.5.5 0 0 0 .57.1l6.15-2.86a13.44 13.44 0 0 0 3.81.54c6.34 0 11.5-4.25 11.5-9.48S18.34 1.34 12 1.34Z"
      transform="scale(2)"
    />
  </svg>
)

export default AnswerIcon
