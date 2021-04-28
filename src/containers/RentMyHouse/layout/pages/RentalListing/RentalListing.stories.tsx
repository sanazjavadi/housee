/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { RentalListing } from "./index"

import { IRentalListing } from "./RentalListing"

// eslint-disable-next-line arrow-parens
const Template: Story<IRentalListing.IProps> = args => <RentalListing {...args} />

export const RentalListingStory = Template.bind({})

export default {
  title: "Components/RentalListing",
  component: RentalListing,
} as Meta

RentalListingStory.args = {
  /* the args you need here will depend on your component */
}
