import * as React from "react"

import { render } from "@testing-library/react"

import { MobileForm } from ".."

describe("<MobileForm />", () => {
  it("Should render correctly", () => {
    const { container } = render(<MobileForm />)

    expect(container)
  })
})
