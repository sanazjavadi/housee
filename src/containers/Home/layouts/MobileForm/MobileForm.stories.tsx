/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { MobileForm } from "./index"

import { IMobileForm } from "./MobileForm"

// eslint-disable-next-line arrow-parens
const Template: Story<IMobileForm.IProps> = args => <MobileForm {...args} />

export const MobileFormStory = Template.bind({})

export default {
  title: "Components/MobileForm",
  component: MobileForm,
} as Meta

MobileFormStory.args = {
  /* the args you need here will depend on your component */
}
