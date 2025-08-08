"use client";

import { MY_CONST } from "@tools/my-plugin/const";
import { SVGIconComponent } from "@tools/my-plugin/types";
import React from "react";

const Icon = React.memo(
  React.forwardRef<SVGSVGElement, React.ComponentProps<SVGIconComponent>>((props, ref) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M12 2L2 22h20L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ))
) as SVGIconComponent;

export default function Component() {
  return <div>Component {MY_CONST} <Icon /></div>;
}