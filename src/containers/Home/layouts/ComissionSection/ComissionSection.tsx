// YourComponent.stories.js

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';
import ComissionSection from './index';

import { IComissionSection } from './Comission';

// This default export determines where you story goes in the story list
export default {
  title: 'ComissionSection Component',
  component: ComissionSection,
} as Meta;

const Template: Story<IComissionSection.IProps> = (args) => <ComissionSection {...args} />;

export const ComissionSectionStory = Template.bind({});

ComissionSectionStory.args = {
  /* the args you need here will depend on your component */
};
