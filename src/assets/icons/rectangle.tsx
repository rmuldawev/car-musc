import * as React from "react";
import { SVGProps } from "react";
const Rectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={110} height={61} fill="none" {...props}>
    <path fill="#DB3138" d="M0 0h110v61H0z" />
  </svg>
);
export default Rectangle;
