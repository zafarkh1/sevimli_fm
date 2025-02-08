import { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
  weight?: number;
}
