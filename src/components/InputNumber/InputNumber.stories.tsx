/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { InputNumber } from "./index"

import { IInputNumber } from "./InputNumber"

// eslint-disable-next-line arrow-parens
const Template: Story<IInputNumber.IProps> = args => <InputNumber {...args} />

export const InputNumberStory = Template.bind({})

export default {
  title: "Components/InputNumber",
  component: InputNumber,
} as Meta

InputNumberStory.args = {
  /* the args you need here will depend on your component */
}
