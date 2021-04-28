/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Notification } from "./index"

import { INotification } from "./Notification"

// eslint-disable-next-line arrow-parens
const Template: Story<INotification.IProps> = args => <Notification {...args} />

export const NotificationStory = Template.bind({})

export default {
  title: "Components/Notification",
  component: Notification,
} as Meta

NotificationStory.args = {
  /* the args you need here will depend on your component */
}
