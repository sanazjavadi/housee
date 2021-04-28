/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { DetailOccordion } from './index';

import { IDetailOccordion } from './DetailOccordion';

// eslint-disable-next-line arrow-parens
const Template: Story<IDetailOccordion.IProps> = (args) => <DetailOccordion {...args} />;

export const DetailOccordionStory = Template.bind({});

export default {
  title: 'Components/DetailOccordion',
  component: DetailOccordion,
} as Meta;

DetailOccordionStory.args = {
  /* the args you need here will depend on your component */
};
