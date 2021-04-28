import * as React from "react"

import { render } from "@testing-library/react"

import { RentalListing } from ".."

describe("<RentalListing />", () => {
  it("Should render correctly", () => {
    const { container } = render(<RentalListing />)

    expect(container)
  })
})
