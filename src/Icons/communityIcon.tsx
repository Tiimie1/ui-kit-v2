interface IconsType {
  width?: number;
  height?: number;
  color?: string;
}

const CommunityIcon: React.FC<IconsType> = ({
  width = 40,
  height = 40,
  color = '#F8F9FC'
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox='0 0 40 40'
    fill='none'
  >
    <rect width='40' height='40' rx='8' fill={color} />
    <path
      d='M11 21.125C11 20.504 11.504 20 12.125 20H14.375C14.996 20 15.5 20.504 15.5 21.125V27.875C15.5 28.496 14.996 29 14.375 29H12.125C11.8266 29 11.5405 28.8815 11.3295 28.6705C11.1185 28.4595 11 28.1734 11 27.875V21.125ZM17.75 16.625C17.75 16.004 18.254 15.5 18.875 15.5H21.125C21.746 15.5 22.25 16.004 22.25 16.625V27.875C22.25 28.496 21.746 29 21.125 29H18.875C18.5766 29 18.2905 28.8815 18.0795 28.6705C17.8685 28.4595 17.75 28.1734 17.75 27.875V16.625ZM24.5 12.125C24.5 11.504 25.004 11 25.625 11H27.875C28.496 11 29 11.504 29 12.125V27.875C29 28.496 28.496 29 27.875 29H25.625C25.3266 29 25.0405 28.8815 24.8295 28.6705C24.6185 28.4595 24.5 28.1734 24.5 27.875V12.125Z'
      stroke='#151515'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default CommunityIcon
