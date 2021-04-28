import * as React from "react"

import { render } from "@testing-library/react"

import { Description } from ".."

describe("<Description />", () => {
  it("Should render correctly", () => {
    const { container } = render(<Description />)

    expect(container)
  })
})
