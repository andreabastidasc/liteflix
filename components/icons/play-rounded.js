import React from 'react';

export const PlayRoundedIcon = props => {
  const {width = '24', height = '16', background = "#242424"} = props;

  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11.5" fill={background} fill-opacity="0.5" stroke="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.9891 12.162L9.6001 7.79993V16.1999L15.9891 12.162Z" stroke="white"/>
    </svg>
  );
};
