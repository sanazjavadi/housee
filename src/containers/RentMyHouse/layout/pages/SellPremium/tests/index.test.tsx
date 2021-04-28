import * as React from "react"

import { render } from "@testing-library/react"

import { SellPremium } from ".."

describe("<SellPremium />", () => {
  it("Should render correctly", () => {
    const { container } = render(<SellPremium />)

    expect(container)
  })
})
