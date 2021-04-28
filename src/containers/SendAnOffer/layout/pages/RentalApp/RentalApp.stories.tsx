/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { RentalApp } from "./index"

import { IRentalApp } from "./RentalApp"

// eslint-disable-next-line arrow-parens
const Template: Story<IRentalApp.IProps> = args => <RentalApp {...args} />

export const RentalAppStory = Template.bind({})

export default {
  title: "Components/RentalApp",
  component: RentalApp,
} as Meta

RentalAppStory.args = {
  /* the args you need here will depend on your component */
}
