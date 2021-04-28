/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Media } from "./index"

import { IMedia } from "./Media"

// eslint-disable-next-line arrow-parens
const Template: Story<IMedia.IProps> = args => <Media {...args} />

export const MediaStory = Template.bind({})

export default {
  title: "Components/Media",
  component: Media,
} as Meta

MediaStory.args = {
  /* the args you need here will depend on your component */
}
