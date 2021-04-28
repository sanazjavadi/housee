/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import  { DataPicker } from './index';

import { IDataPicker } from './DataPicker';

// eslint-disable-next-line arrow-parens
const Template: Story<IDataPicker.IProps> = (args) => <DataPicker {...args} />;

export const DataPickerStory = Template.bind({});

export default {
  title: 'Components/DataPicker',
  component: DataPicker,
} as Meta;


DataPickerStory.args = {
    /* the args you need here will depend on your component */
}