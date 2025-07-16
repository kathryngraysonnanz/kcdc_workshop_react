import React from 'react';

import { Button as KendoButton } from '@progress/kendo-react-buttons';

export interface ButtonProps {

  /** What background color to use */
  backgroundColor?: string;
  fillMode?: 'solid' | 'outline' | 'flat' | 'link';
  size?: 'small' | 'medium' | 'large' | 'null';
  label: string;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <KendoButton {...props}>
      {label} 
    </KendoButton>
  );
};
