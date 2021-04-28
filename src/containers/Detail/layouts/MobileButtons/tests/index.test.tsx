import * as React from "react"

import { render } from "@testing-library/react"

import { MobileButtons } from ".."

describe("<MobileButtons />", () => {
  it("Should render correctly", () => {
    const { container } = render(<MobileButtons />)

    expect(container)
  })
})
