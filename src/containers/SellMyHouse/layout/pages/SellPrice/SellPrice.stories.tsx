/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { SellPrice } from "./index"

import { ISellPrice } from "./SellPrice"

// eslint-disable-next-line arrow-parens
const Template: Story<ISellPrice.IProps> = args => <SellPrice {...args} />

export const SellPriceStory = Template.bind({})

export default {
  title: "Components/SellPrice",
  component: SellPrice,
} as Meta

SellPriceStory.args = {
  /* the args you need here will depend on your component */
}
