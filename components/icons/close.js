import React from 'react';

export const CloseIcon = props => {
  const {width = '20', height = '20'} = props;

  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5147 1.51472L18.4853 18.4853" stroke="white" strokeLinecap="square"/>
      <path d="M1.5147 18.4853L18.4853 1.51472" stroke="white" strokeLinecap="square"/>
    </svg>
  );
};
