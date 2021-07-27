import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Img580x387 from '../../assets/img/img-580x387.jpg';
import { PictoCard } from '.';

export default {
  title: 'Molecules/PictoCard',
  component: PictoCard,
} as ComponentMeta<typeof PictoCard>;

const Template: ComponentStory<typeof PictoCard> = (args) => <PictoCard {...args} />;

export const Explorer = Template.bind({});
Explorer.args = {
  imgSrc: Img580x387,
  imgAlt: 'Image 580x387',
  children: 'Button label',
};

export const BasePictoCard = Template.bind({});
BasePictoCard.args = {
  imgSrc: Img580x387,
  imgAlt: 'Image 580x387',
  children: 'Button label',
};
