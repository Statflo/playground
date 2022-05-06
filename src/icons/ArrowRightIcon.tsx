import * as React from "react"
import { SVGProps } from "react"

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="m11 1.5 21.44 21.44a1.498 1.498 0 0 1 0 2.12L11 46.5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
        />
    </svg>
)

export default ArrowRightIcon
