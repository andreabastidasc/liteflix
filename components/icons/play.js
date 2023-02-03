import React from 'react';

export const PlayIcon = props => {
  const {width = '14', height = '16'} = props;

  return (
    <svg width={width} height={height} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11.9423 8.2363L2.625 1.875V14.125L11.9423 8.2363Z" stroke="white"/>
    </svg>
  );
};
