/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { AddressInfo } from "./index"

import { IAddressInfo } from "./AddressInfo"

// eslint-disable-next-line arrow-parens
const Template: Story<IAddressInfo.IProps> = args => <AddressInfo {...args} />

export const AddressInfoStory = Template.bind({})

export default {
  title: "Components/AddressInfo",
  component: AddressInfo,
} as Meta

AddressInfoStory.args = {
  /* the args you need here will depend on your component */
}
