import * as React from "react"

import { render } from "@testing-library/react"

import { ChooseDate2 } from ".."

describe("<ChooseDate2 />", () => {
  it("Should render correctly", () => {
    const { container } = render(<ChooseDate2 />)

    expect(container)
  })
})
