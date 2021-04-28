/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Contract } from "./index"

import { IContract } from "./Contract"

// eslint-disable-next-line arrow-parens
const Template: Story<IContract.IProps> = args => <Contract {...args} />

export const ContractStory = Template.bind({})

export default {
  title: "Components/Contract",
  component: Contract,
} as Meta

ContractStory.args = {
  /* the args you need here will depend on your component */
}
