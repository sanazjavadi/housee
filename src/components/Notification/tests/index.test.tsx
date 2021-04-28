import * as React from "react"

import { render } from "@testing-library/react"

import { Notification } from ".."

describe("<Notification />", () => {
  it("Should render correctly", () => {
    const { container } = render(<Notification />)

    expect(container)
  })
})
