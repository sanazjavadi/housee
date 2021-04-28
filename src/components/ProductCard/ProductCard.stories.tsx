/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ProductCard } from './index';

import { IProductCard } from './ProductCard';

// eslint-disable-next-line prettier/prettier
const Template: Story<IProductCard.IProps> = (args) => <ProductCard {...args} />;

export const ProductCardStory = Template.bind({});

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
} as Meta;

ProductCardStory.args = {
  /* the args you need here will depend on your component */
  cardDetails: {
    img:
      'https://media.gettyimages.com/photos/skyscrapers-of-los-angeles-skylinearchitectureurbancityscape-picture-id478821794?s=612x612',
    city: '2545 Medlow Ave',
    address: 'South Park - Los Angeles, CA 90017',
    price: 334000,
    sqft: 1100,
    bed: 3,
    bt: 2,
  },
};
