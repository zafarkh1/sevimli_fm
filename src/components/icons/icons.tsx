import { JSX } from "react";
import { IconProps } from "./type";

export const IconArrowDown = (props: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 9L12 15L18 9" stroke="#E7E7E7" />
  </svg>
);

export const IconArrowUp = (props: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6 15L12 9L18 15" stroke="#E7E7E7" />
  </svg>
);

export const IconMenuBurger = (props: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 12H21M3 6H21M3 18H21"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconMusicPlay = (props: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M98.216 64.2399C101.349 62.2816 101.349 57.7183 98.216 55.7599L32.65 14.7812C29.3198 12.6998 25 15.094 25 19.0212V100.979C25 104.906 29.3198 107.3 32.65 105.219L98.216 64.2399Z"
      fill="white"
    />
  </svg>
);

export const IconMusicPause = (props: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="20" y="15" width="30" height="90" rx="10" fill="white" />
    <rect x="70" y="15" width="30" height="90" rx="10" fill="white" />
  </svg>
);
