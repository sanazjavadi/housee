/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { LinkProps } from './Link';
import { Link } from './index';

// eslint-disable-next-line arrow-parens
const Template: Story<LinkProps> = (args) => <Link {...args} />;

// This default export determines where you story goes in the story list
export default {
  title: 'Link Component',
  component: Link,
} as Meta;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
  as: 'li',
  href: './hamid',
  children: 'click me',
};
