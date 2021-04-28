/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { ChooseDate2 } from "./index"

import { IChooseDate2 } from "./ChooseDate2"

// eslint-disable-next-line arrow-parens
const Template: Story<IChooseDate2.IProps> = args => <ChooseDate2 {...args} />

export const ChooseDate2Story = Template.bind({})

export default {
  title: "Components/ChooseDate2",
  component: ChooseDate2,
} as Meta

ChooseDate2Story.args = {
  /* the args you need here will depend on your component */
}
