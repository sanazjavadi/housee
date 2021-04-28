import * as React from "react"

import { render } from "@testing-library/react"

import { OpenHouse } from ".."

describe("<OpenHouse />", () => {
  it("Should render correctly", () => {
    const { container } = render(<OpenHouse />)

    expect(container)
  })
})
