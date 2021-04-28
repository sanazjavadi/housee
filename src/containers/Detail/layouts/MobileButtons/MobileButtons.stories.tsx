/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { MobileButtons } from "./index"

import { IMobileButtons } from "./MobileButtons"

// eslint-disable-next-line arrow-parens
const Template: Story<IMobileButtons.IProps> = args => <MobileButtons {...args} />

export const MobileButtonsStory = Template.bind({})

export default {
  title: "Components/MobileButtons",
  component: MobileButtons,
} as Meta

MobileButtonsStory.args = {
  /* the args you need here will depend on your component */
}
