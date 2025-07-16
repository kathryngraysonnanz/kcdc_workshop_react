import React from 'react';

import { Button as KendoButton } from '@progress/kendo-react-buttons';

export interface ButtonProps {
  disabled?: boolean; 
  fillMode?: 'solid' | 'outline' | 'flat' | 'link';
  icon?: string; 
  iconClass?: string;
  iconUrl?: string;
  rounded?: 'small'| 'medium' | 'large' | 'full'; 
  selected?: boolean;  
  size?: 'small' | 'medium' | 'large';
  themeColor: 'base' | 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light' | 'inverse'; 
  togglable?: boolean; 
  label: string;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  label,
  ...props
}: ButtonProps) => {
  return (
    <KendoButton {...props}>
      {label} 
    </KendoButton>
  );
};
