import * as React from "react"

import { render } from "@testing-library/react"

import { AddressInfo } from ".."

describe("<AddressInfo />", () => {
  it("Should render correctly", () => {
    const { container } = render(<AddressInfo />)

    expect(container)
  })
})
