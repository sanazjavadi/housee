/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Slider } from './index';

import { ISlider } from './Slider';

// eslint-disable-next-line arrow-parens
const Template: Story<ISlider.IProps> = (args) => <Slider {...args} />;

export const SliderStory = Template.bind({});

export default {
  title: 'Components/Slider',
  component: Slider,
} as Meta;

SliderStory.args = {
  /* the args you need here will depend on your component */
};
