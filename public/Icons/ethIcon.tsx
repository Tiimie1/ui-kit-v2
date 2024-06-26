import { IconsType } from "@/types";

const EthIcon: React.FC<IconsType> = ({
  width = 48,
  height = 48,
  color = "#627EEA",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_2947_23227)">
      <path
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
        fill={color}
      />
      <path
        d="M24.7471 6V19.305L35.9926 24.33L24.7471 6Z"
        fill="#ffffff"
        fillOpacity="0.602"
      />
      <path
        d="M24.747 6L13.5 24.33L24.747 19.305V6Z"
        fill="#ffffff"
        fillOpacity="1"
      />
      <path
        d="M24.7471 32.9518V41.9923L36.0001 26.4238L24.7471 32.9518Z"
        fill="#ffffff"
        fillOpacity="0.602"
      />
      <path
        d="M24.747 41.9923V32.9503L13.5 26.4238L24.747 41.9923Z"
        fill="#ffffff"
        fillOpacity="1"
      />
      <path
        d="M24.7471 30.8591L35.9926 24.3296L24.7471 19.3076V30.8591Z"
        fill="#ffffff"
        fillOpacity="0.2"
      />
      <path
        d="M13.5 24.3296L24.747 30.8591V19.3076L13.5 24.3296Z"
        fill="#ffffff"
        fillOpacity="0.602"
      />
    </g>
    <defs>
      <clipPath id="clip0_2947_23227">
        <rect width="48" height="48" />
      </clipPath>
    </defs>
  </svg>
);

export default EthIcon;
