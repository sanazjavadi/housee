/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import ChooseCall from "./index"

import { IChooseCall } from "./ChooseCall"

// eslint-disable-next-line prettier/prettier
const Template: Story<IChooseCall.IProps> = args => <ChooseCall {...args} />

export const ChooseCallStory = Template.bind({})

ChooseCall.args = {
  /* the args you need here will depend on your component */
}

export default {
  title: "RequestTour/Layout/ChooseCall",
  component: ChooseCall,
} as Meta
