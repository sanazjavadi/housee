/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import EnterAddress from "./index"

import { IEnterAddress } from "./EnterAddress"

// eslint-disable-next-line prettier/prettier
const Template: Story<IEnterAddress.IProps> = args => <EnterAddress {...args} />

export const EnterAddressStory = Template.bind({})

EnterAddressStory.args = {
  /* the args you need here will depend on your component */
}

export default {
  title: "RequestTour/Layout/EnterAddress",
  component: EnterAddress,
} as Meta
