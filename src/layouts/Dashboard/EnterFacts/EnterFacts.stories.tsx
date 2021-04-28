/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import EnterFacts from "./index"

import { IEnterFacts } from "./EnterFacts"

// eslint-disable-next-line prettier/prettier
const Template: Story<IEnterFacts.IProps> = args => <EnterFacts {...args} />

export const RentMyHome2Story = Template.bind({})

EnterFactsStory.args = {
  /* the args you need here will depend on your component */
}

export default {
  title: "RequestTour/Layout/EnterFacts",
  component: EnterFacts,
} as Meta
