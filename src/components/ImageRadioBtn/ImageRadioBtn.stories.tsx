/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { ImageRadioBtn } from "./index"

import { IImageRadioBtn } from "./ImageRadioBtn"

// eslint-disable-next-line arrow-parens
const Template: Story<IImageRadioBtn.IProps> = args => <ImageRadioBtn {...args} />

export const ImageRadioBtnStory = Template.bind({})

export default {
  title: "Components/ImageRadioBtn",
  component: ImageRadioBtn,
} as Meta

ImageRadioBtnStory.args = {
  /* the args you need here will depend on your component */
}
