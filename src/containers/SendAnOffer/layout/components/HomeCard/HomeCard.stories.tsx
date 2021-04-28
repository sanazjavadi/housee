/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { HomeCard } from "./index"

import { IHomeCard } from "./HomeCard"

// eslint-disable-next-line arrow-parens
const Template: Story<IHomeCard.IProps> = args => <HomeCard {...args} />

export const HomeCardStory = Template.bind({})

export default {
  title: "Components/HomeCard",
  component: HomeCard,
} as Meta

HomeCardStory.args = {
  /* the args you need here will depend on your component */
}
