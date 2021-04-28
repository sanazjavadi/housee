import * as React from "react"

import { render } from "@testing-library/react"

import { Modal } from ".."

describe("<Modal />", () => {
  it("Should render correctly", () => {
    const { container } = render(<Modal />)

    expect(container)
  })
})
