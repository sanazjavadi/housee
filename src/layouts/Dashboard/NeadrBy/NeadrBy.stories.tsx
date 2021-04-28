/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { NeadrBy } from "./index"

import { INeadrBy } from "./NeadrBy"

// eslint-disable-next-line arrow-parens
const Template: Story<INeadrBy.IProps> = args => <NeadrBy {...args} />

export const NeadrByStory = Template.bind({})

export default {
  title: "Components/NeadrBy",
  component: NeadrBy,
} as Meta

NeadrByStory.args = {
  /* the args you need here will depend on your component */
}
