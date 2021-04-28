import * as React from "react"

import { render } from "@testing-library/react"

import { DashboarNav } from ".."

describe("<DashboarNav />", () => {
  it("Should render correctly", () => {
    const { container } = render(<DashboarNav />)

    expect(container)
  })
})
