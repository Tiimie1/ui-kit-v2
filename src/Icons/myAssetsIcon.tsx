import React from 'react';

interface MyAssetsIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const MyAssetsIcon: React.FC<MyAssetsIconProps> = ({ width = 20, height = 20, color = 'black' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none">
    <path d="M8.30033 4.4397H8.30033V4.44199V6.02533C8.30033 6.84979 8.08382 7.39723 7.74052 7.74052C7.39723 8.08382 6.84979 8.30033 6.02533 8.30033H4.44199C3.61752 8.30033 3.07009 8.08382 2.7268 7.74052C2.3835 7.39723 2.16699 6.84979 2.16699 6.02533V4.44199C2.16699 3.61753 2.38349 3.07038 2.72744 2.72719C3.07158 2.38382 3.62111 2.16699 4.45033 2.16699H6.03366C6.85831 2.16699 7.40537 2.38358 7.74742 2.7264C8.08927 3.06902 8.30411 3.61566 8.30033 4.4397Z" stroke={color} style={{stroke: color, strokeOpacity: 1}}/>
    <path d="M13.9752 2.16699H15.5585C16.383 2.16699 16.9304 2.3835 17.2737 2.7268C17.617 3.07009 17.8335 3.61752 17.8335 4.44199V6.02533C17.8335 6.84979 17.617 7.39723 17.2737 7.74052C16.9304 8.08382 16.383 8.30033 15.5585 8.30033H13.9752C13.1507 8.30033 12.6033 8.08382 12.26 7.74052C11.9167 7.39723 11.7002 6.84979 11.7002 6.02533V4.44199C11.7002 3.61752 11.9167 3.07009 12.26 2.7268C12.6033 2.3835 13.1507 2.16699 13.9752 2.16699Z" stroke={color} style={{stroke: color, strokeOpacity: 1}}/>
    <path d="M13.9752 11.6924H15.5585C16.383 11.6924 16.9304 11.9089 17.2737 12.2522C17.617 12.5955 17.8335 13.1429 17.8335 13.9674V15.5507C17.8335 16.3752 17.617 16.9226 17.2737 17.2659C16.9304 17.6092 16.383 17.8257 15.5585 17.8257H13.9752C13.1507 17.8257 12.6033 17.6092 12.26 17.2659C11.9167 16.9226 11.7002 16.3752 11.7002 15.5507V13.9674C11.7002 13.1429 11.9167 12.5955 12.26 12.2522C12.6033 11.9089 13.1507 11.6924 13.9752 11.6924Z" stroke={color} style={{stroke: color, strokeOpacity: 1}}/>
    <path d="M8.30033 13.9734H8.30033V13.9757V15.559C8.30033 16.3835 8.08382 16.931 7.74052 17.2742C7.39723 17.6175 6.84979 17.834 6.02533 17.834H4.44199C3.61753 17.834 3.07038 17.6176 2.72719 17.2736C2.38382 16.9295 2.16699 16.3799 2.16699 15.5507V13.9674C2.16699 13.1429 2.38349 12.5958 2.72744 12.2526C3.07158 11.9092 3.62111 11.6924 4.45033 11.6924H6.03366C6.8583 11.6924 7.40508 11.909 7.74703 12.2524C8.08896 12.5959 8.30412 13.1446 8.30033 13.9734Z" stroke={color} style={{stroke: color, strokeOpacity: 1}}/>
  </svg>
);

export default MyAssetsIcon;
