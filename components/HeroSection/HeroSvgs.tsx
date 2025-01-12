import { FC, SVGProps } from "react";

export const VectorGradiant: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1365"
    height="1137"
    viewBox="0 0 1365 1137"
    fill="none"
    style={{ pointerEvents: "none" }}
    {...props}
  >
    <g filter="url(#filter0_f_1169_1664)">
      <path
        d="M160 982C303.837 660.913 817.084 299.915 1385 160M1385 160C817.084 299.915 405.743 660.913 261.906 982M1385 160C817.084 299.915 510.834 660.913 366.997 982M1385 160C817.084 299.915 622.294 660.913 478.458 982"
        stroke="url(#paint0_linear_1169_1664)"
        strokeWidth="20"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_1169_1664"
        x="0.873047"
        y="0.290344"
        width="1536.52"
        height="1135.8"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="75"
          result="effect1_foregroundBlur_1169_1664"
        />
      </filter>
      <linearGradient
        id="paint0_linear_1169_1664"
        x1="1392.96"
        y1="159.552"
        x2="496.76"
        y2="1133.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1C1AFD" />
        <stop offset="1" stopColor="#C800D9" />
      </linearGradient>
    </defs>
  </svg>
);
