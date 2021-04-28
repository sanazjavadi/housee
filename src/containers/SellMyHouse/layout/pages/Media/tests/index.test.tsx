import * as React from "react"

import { render } from "@testing-library/react"

import { Media } from ".."

describe("<Media />", () => {
  it("Should render correctly", () => {
    const { container } = render(<Media />)

    expect(container)
  })
})
