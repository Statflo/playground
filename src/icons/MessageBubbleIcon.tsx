import * as React from "react"
import { SVGProps } from "react"

const MessageBubbleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path
        d="M25.5 1.5A20.97 20.97 0 0 0 7.666 33.55L1.5 46.5l12.948-6.166A21 21 0 1 0 25.5 1.5ZM16.496 16.5h18M13.496 22.5h24M16.496 28.5h18"
        strokeWidth={3}
      />
    </g>
  </svg>
)

export default MessageBubbleIcon
