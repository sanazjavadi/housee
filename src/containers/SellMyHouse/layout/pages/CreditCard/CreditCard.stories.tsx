/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { CreditCard } from "./index"

import { ICreditCard } from "./CreditCard"

// eslint-disable-next-line arrow-parens
const Template: Story<ICreditCard.IProps> = args => <CreditCard {...args} />

export const CreditCardStory = Template.bind({})

export default {
  title: "Components/CreditCard",
  component: CreditCard,
} as Meta

CreditCardStory.args = {
  /* the args you need here will depend on your component */
}
