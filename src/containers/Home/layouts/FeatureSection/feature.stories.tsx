// YourComponent.stories.js

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Story, Meta } from '@storybook/react/types-6-0';
import FeatureSection from './index';

import { IFeatureSection } from './Feature';

// This default export determines where you story goes in the story list
export default {
  title: 'FeatureSection Component',
  component: FeatureSection,
} as Meta;

const Template: Story<IFeatureSection.IProps> = (args) => <FeatureSection {...args} />;

export const FeatureSections = Template.bind({});

FeatureSections.args = {
  /* the args you need here will depend on your component */
};
