import type { Meta, StoryObj } from '@storybook/react-vite';

import { DateTimePicker } from './DateTimePicker';

const meta = {
  title: 'Example/DateTimePicker',
  component: DateTimePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateTimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}; 
