import * as React from "react";
import { SVGProps } from "react";
const BurgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={25}
    fill="none"
    {...props}
  >
    <path fill="#DB3138" d="M10 0h40v3H10zM0 11h40v3H0zM10 22h40v3H10z" />
  </svg>
);
export default BurgerIcon;
