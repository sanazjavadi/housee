/* eslint-disable arrow-parens */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Map from './index';

import { IMap } from './Map';

const Template: Story<IMap.IProps> = (args) => <Map {...args} />;

export const MapStory = Template.bind({});

export default {
  title: 'Components/Map',
  component: Map,
} as Meta;
MapStory.args = {
  /* the args you need here will depend on your component */
};
