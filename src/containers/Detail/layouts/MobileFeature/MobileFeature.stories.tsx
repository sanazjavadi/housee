/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { MobileFeature } from "./index"

import { IMobileFeature } from "./MobileFeature"

// eslint-disable-next-line arrow-parens
const Template: Story<IMobileFeature.IProps> = args => <MobileFeature {...args} />

export const MobileFeatureStory = Template.bind({})

export default {
  title: "Components/MobileFeature",
  component: MobileFeature,
} as Meta

MobileFeatureStory.args = {
  /* the args you need here will depend on your component */
}
