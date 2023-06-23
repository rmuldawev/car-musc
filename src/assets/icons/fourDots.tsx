import * as React from "react";
import { SVGProps } from "react";
const FourDots = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // xmlns="http://www.w3.org/2000/svg"
    width={147}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#DB3138"
      d="M0 8 7.071.929 14.142 8l-7.07 7.071zM44.071 8 51.142.929 58.213 8l-7.07 7.071zM88.142 8 95.213.93 102.284 8l-7.07 7.071zM132.213 8l7.071-7.071L146.355 8l-7.07 7.071z"
    />
  </svg>
);
export default FourDots;
