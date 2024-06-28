interface IconsType {
  width?: number;
  height?: number;
  color?: string;
}

const DotsIcon: React.FC<IconsType> = ({
  width = 32,
  height = 32,
  color = '#828D95'
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x={0.5} y={0.5} width={31} height={31} rx={15.5} stroke='#EAECF0' />
    <path
      d='M15.9999 16.6663C16.3681 16.6663 16.6666 16.3679 16.6666 15.9997C16.6666 15.6315 16.3681 15.333 15.9999 15.333C15.6317 15.333 15.3333 15.6315 15.3333 15.9997C15.3333 16.3679 15.6317 16.6663 15.9999 16.6663Z'
      stroke={color}
      strokeWidth={1.33333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M20.6667 16.6663C21.0349 16.6663 21.3333 16.3679 21.3333 15.9997C21.3333 15.6315 21.0349 15.333 20.6667 15.333C20.2985 15.333 20 15.6315 20 15.9997C20 16.3679 20.2985 16.6663 20.6667 16.6663Z'
      stroke={color}
      strokeWidth={1.33333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11.3334 16.6663C11.7016 16.6663 12.0001 16.3679 12.0001 15.9997C12.0001 15.6315 11.7016 15.333 11.3334 15.333C10.9652 15.333 10.6667 15.6315 10.6667 15.9997C10.6667 16.3679 10.9652 16.6663 11.3334 16.6663Z'
      stroke={color}
      strokeWidth={1.33333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default DotsIcon
