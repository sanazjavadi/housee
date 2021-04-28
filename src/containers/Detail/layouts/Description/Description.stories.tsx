/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Description } from "./index"

import { IDescription } from "./Description"

// eslint-disable-next-line arrow-parens
const Template: Story<IDescription.IProps> = args => <Description {...args} />

export const DescriptionStory = Template.bind({})

export default {
  title: "Components/Description",
  component: Description,
} as Meta

DescriptionStory.args = {
  /* the args you need here will depend on your component */
}
