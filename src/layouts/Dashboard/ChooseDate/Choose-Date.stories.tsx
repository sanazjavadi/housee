/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import ChooseDate from "./index"

import { IChooseDate } from "./ChooseDate"

// eslint-disable-next-line prettier/prettier
const Template: Story<IChooseDate.IProps> = args => <ChooseDate {...args} />

export const RentMyHome2Story = Template.bind({})

RentMyHome2Story.args = {
  /* the args you need here will depend on your component */
}

export default {
  title: "RequestTour/Layout/RentMyHome2",
  component: ChooseDate,
} as Meta
