import { ReactNode } from "react";

export interface SvgIconProps {
  href?: string;
  children?: ReactNode;
  className?: string;
}

export const ArrowSvg = ({ className }: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="current"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h13M12 5l7 7-7 7" />
  </svg>
);
