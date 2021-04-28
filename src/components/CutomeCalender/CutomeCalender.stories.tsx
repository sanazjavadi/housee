/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { CutomeCalender } from "./index"

import { ICutomeCalender } from "./CutomeCalender"

// eslint-disable-next-line arrow-parens
const Template: Story<ICutomeCalender.IProps> = args => <CutomeCalender {...args} />

export const CutomeCalenderStory = Template.bind({})

export default {
  title: "Components/CutomeCalender",
  component: CutomeCalender,
} as Meta

CutomeCalenderStory.args = {
  /* the args you need here will depend on your component */
}
