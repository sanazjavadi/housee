/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { DashboarNav } from "./index"

import { IDashboarNav } from "./DashboarNav"

// eslint-disable-next-line arrow-parens
const Template: Story<IDashboarNav.IProps> = args => <DashboarNav {...args} />

export const DashboarNavStory = Template.bind({})

export default {
  title: "Components/DashboarNav",
  component: DashboarNav,
} as Meta

DashboarNavStory.args = {
  /* the args you need here will depend on your component */
}
