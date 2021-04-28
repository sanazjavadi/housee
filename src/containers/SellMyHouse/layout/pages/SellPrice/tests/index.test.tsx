import * as React from "react"

import { render } from "@testing-library/react"

import { SellPrice } from ".."

describe("<SellPrice />", () => {
  it("Should render correctly", () => {
    const { container } = render(<SellPrice />)

    expect(container)
  })
})
