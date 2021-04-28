/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { OpenHouse } from "./index"

import { IOpenHouse } from "./OpenHouse"

// eslint-disable-next-line arrow-parens
const Template: Story<IOpenHouse.IProps> = args => <OpenHouse {...args} />

export const OpenHouseStory = Template.bind({})

export default {
  title: "Components/OpenHouse",
  component: OpenHouse,
} as Meta

OpenHouseStory.args = {
  /* the args you need here will depend on your component */
}
