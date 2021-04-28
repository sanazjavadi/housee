import * as React from "react"

import { render } from "@testing-library/react"

import { NewOfferDate } from ".."

describe("<NewOfferDate />", () => {
  it("Should render correctly", () => {
    const { container } = render(<NewOfferDate />)

    expect(container)
  })
})
