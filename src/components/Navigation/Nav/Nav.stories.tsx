import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Nav } from './Nav';
import { NavItem } from '../NavItem';

export default {
  title: 'Navigation/Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>;

export const Explorer: ComponentStory<typeof Nav> = () => (
  <Nav>
    <NavItem text="child 1" />
    <NavItem text="child 2" />
    <NavItem text="child 3" />
    <NavItem text="child 4" />
  </Nav>
);

export const ActiveItem: ComponentStory<typeof Nav> = () => (
  <Nav>
    <NavItem text="child 1" />
    <NavItem text="child 2" isActive />
    <NavItem text="child 3" />
    <NavItem text="child 4" />
  </Nav>
);
