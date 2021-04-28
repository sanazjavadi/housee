/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import ChooseMethode from "./index"

import { IChooseMethode } from "./ChooseMethode"

// eslint-disable-next-line prettier/prettier
const Template: Story<IChooseMethode.IProps> = args => <ChooseMethode {...args} />

export const ChooseMethodeStory = Template.bind({})

ChooseMethodeStory.args = {
  /* the args you need here will depend on your component */
}

export default {
  title: "RequestTour/Layout/ChooseMethode",
  component: ChooseMethode,
} as Meta
