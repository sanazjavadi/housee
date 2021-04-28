import * as React from "react"

import { render } from "@testing-library/react"

import { Contract } from ".."

describe("<Contract />", () => {
  it("Should render correctly", () => {
    const { container } = render(<Contract />)

    expect(container)
  })
})
