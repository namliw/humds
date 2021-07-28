import React from 'react';
import { Meta } from '@storybook/react';
import { tokens } from './index.css';

export default {
  title: 'Tokens/Typography',
} as Meta;

export const Typography = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span style={{ font: tokens.font.pageTitle }}>Page Title</span>
    <span style={{ font: tokens.font.sectionTitle }}>Section Title</span>
    <span style={{ font: tokens.font.contentTitle }}>Content Title</span>
    <span style={{ font: tokens.font.content }}>Content</span>
  </div>
);
