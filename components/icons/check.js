import React from 'react';

export const CheckIcon = props => {
  const {width = '14', height = '11'} = props;

  return (
    <svg width={width} height={height} viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2"/>
    </svg>
  );
};
