/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { NewOffer } from "./index"

import { INewOffer } from "./NewOffer"

// eslint-disable-next-line arrow-parens
const Template: Story<INewOffer.IProps> = args => <NewOffer {...args} />

export const NewOfferStory = Template.bind({})

export default {
  title: "Components/NewOffer",
  component: NewOffer,
} as Meta

NewOfferStory.args = {
  /* the args you need here will depend on your component */
}
