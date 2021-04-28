/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { SellPremium } from "./index"

import { ISellPremium } from "./SellPremium"

// eslint-disable-next-line arrow-parens
const Template: Story<ISellPremium.IProps> = args => <SellPremium {...args} />

export const SellPremiumStory = Template.bind({})

export default {
  title: "Components/SellPremium",
  component: SellPremium,
} as Meta

SellPremiumStory.args = {
  /* the args you need here will depend on your component */
}
