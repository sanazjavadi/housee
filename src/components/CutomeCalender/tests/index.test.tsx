import * as React from "react"

import { render } from "@testing-library/react"

import { CutomeCalender } from ".."

describe("<CutomeCalender />", () => {
  it("Should render correctly", () => {
    const { container } = render(<CutomeCalender />)

    expect(container)
  })
})
