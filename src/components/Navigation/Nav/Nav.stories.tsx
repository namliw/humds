import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Nav } from './Nav';
import { NavItem } from '../NavItem';

export default {
  title: 'Navigation/Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => (
  <Nav {...args}>
    <NavItem text="child 1" />
    <NavItem text="child 2" />
    <NavItem text="child 3" />
    <NavItem text="child 4" />
  </Nav>
);

export const Explorer = Template.bind({});
Explorer.args = {
};
