/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { NewOfferDate } from "./index"

import { INewOfferDate } from "./NewOfferDate"

// eslint-disable-next-line arrow-parens
const Template: Story<INewOfferDate.IProps> = args => <NewOfferDate {...args} />

export const NewOfferDateStory = Template.bind({})

export default {
  title: "Components/NewOfferDate",
  component: NewOfferDate,
} as Meta

NewOfferDateStory.args = {
  /* the args you need here will depend on your component */
}
