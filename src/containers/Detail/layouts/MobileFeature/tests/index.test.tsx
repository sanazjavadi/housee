import * as React from "react"

import { render } from "@testing-library/react"

import { MobileFeature } from ".."

describe("<MobileFeature />", () => {
  it("Should render correctly", () => {
    const { container } = render(<MobileFeature />)

    expect(container)
  })
})
