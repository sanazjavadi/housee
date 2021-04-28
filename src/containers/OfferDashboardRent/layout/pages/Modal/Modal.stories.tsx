/* eslint-disable import/no-extraneous-dependencies */
import React from "react"
import { Meta, Story } from "@storybook/react/types-6-0"
import { Modal } from "./index"

import { IModal } from "./Modal"

// eslint-disable-next-line arrow-parens
const Template: Story<IModal.IProps> = args => <Modal {...args} />

export const ModalStory = Template.bind({})

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta

ModalStory.args = {
  /* the args you need here will depend on your component */
}
