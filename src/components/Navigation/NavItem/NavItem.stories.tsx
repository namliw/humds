import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavItem } from './NavItem';

export default {
  title: 'Navigation/NavItem',
  component: NavItem,
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => <NavItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'NavItem text',
  href: '',
};
