import React from 'react';

export const ArrowIcon = props => {
  const {width = '13', height = '8'} = props;

  return (
    <svg width={width} height={height} viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L6.54557 6.54557L12.0911 1" stroke="white" stroke-width="2"/>
    </svg>
  );
};
