import { DateTimePicker as KendoDateTimePicker } from "@progress/kendo-react-dateinputs";

export interface DateTimePickerProps {
  adaptive?: boolean; 
  adaptiveSubtitle?: string; 
  adaptiveTitle?: string; 
  allowCaretMode?: boolean; 
  ariaDescribedBy?: string; 
  ariaLabelledBy?: string; 
  autoCorrectParts?: boolean; 
  autoFill?: boolean; 
  autoFocus?: boolean; 
  autoSwitchParts?: boolean; 
  cancelButton?: boolean; 
  defaultShow?: boolean;
  defaultValue?: Date; 
  disabled?: boolean; 
  enableMouseWheel?: boolean; 
  fillMode?: 'flat' | 'outline' | 'solid'; 
  focusedDate?: Date; 
  format?: string; 
  label?: string; 
  max?: Date;
  maxTime?: Date; 
  min?: Date;
  minTime?: Date;
  name?: string; 
  placeholder?: string; 
  required?: boolean; 
  rounded?: 'small' | 'medium' | 'full' | 'large'; 
  show?: boolean; 
  size?: 'small' | 'medium' | 'large'; 
  title?: string; 
  twoYearDigitMax?: number; 
  valid?: boolean; 
  validationMessage?: string; 
  validityStyles?: boolean; 
  value?: Date; 
  weekNumber?: boolean; 
  width?: string; 
}

/** Primary UI component for user interaction */
export const DateTimePicker = ({
  ...props
}: DateTimePickerProps) => {
  return (
   <KendoDateTimePicker {...props} />
  );
};
