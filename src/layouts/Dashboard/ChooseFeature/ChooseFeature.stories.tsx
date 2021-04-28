/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import ChooseFeature from "./index"

import { IChooseFeature } from "./ChooseFeature"

// eslint-disable-next-line prettier/prettier
const Template: Story<IChooseFeature.IProps> = args => <ChooseFeature {...args} />

export const ChooseFeatureStory = Template.bind({})

ChooseFeatureStory.args = {
  /* the args you need here will depend on your component */
}

export default {
  title: "ChooseFeature",
  component: ChooseFeature,
} as Meta
