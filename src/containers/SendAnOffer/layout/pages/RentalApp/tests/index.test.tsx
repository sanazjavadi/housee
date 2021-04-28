import * as React from "react"

import { render } from "@testing-library/react"

import { RentalApp } from ".."

describe("<RentalApp />", () => {
  it("Should render correctly", () => {
    const { container } = render(<RentalApp />)

    expect(container)
  })
})
