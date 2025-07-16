import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './Card';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    style: {maxWidth: '300px'}} 
  }; 

export const Horizontal: Story = {
args: {
  orientation: 'horizontal',
  style: {maxWidth: '600px'}
  }
}; 