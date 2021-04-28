/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Feature } from './index';

import { IFeature } from './Feature';

// eslint-disable-next-line arrow-parens
const Template: Story<IFeature.IProps> = (args) => <Feature {...args} />;

export const FeatureStory = Template.bind({});

export default {
  title: 'Components/Feature',
  component: Feature,
} as Meta;

FeatureStory.args = {
  /* the args you need here will depend on your component */
};
