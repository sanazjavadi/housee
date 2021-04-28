/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import  { InputSlider } from './index';

import { IInputSlider } from './InputSlider';

// eslint-disable-next-line arrow-parens
const Template: Story<IInputSlider.IProps> = (args) => <InputSlider {...args} />;

export const InputSliderStory = Template.bind({});

export default {
  title: 'Components/InputSlider',
  component: InputSlider,
} as Meta;


InputSliderStory.args = {
    /* the args you need here will depend on your component */
}