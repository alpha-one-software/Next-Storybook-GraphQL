import React from 'react'
import { Badge, uiPlus } from './Badge'
import { PlusProps } from './Badge'

export default {
  component: Badge,
  title: 'Basics/Badge',
  args: {
    label: 'Enabled',
    disabled: false,
  },
  argTypes: {
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const BadgeStory = ({ ...args }) => <Badge {...args} />

export const defaultStatusLabel = BadgeStory.bind({})
defaultStatusLabel.args = {
  label: 'Enabled',
  disabled: false,
}

const uiPlusStory = ({ ...args }: PlusProps) => <uiPlus {...args} />
export const uiPlus = uiPlusStory.bind({})
uiPlus.args = {
  label: 'Plus',
}
