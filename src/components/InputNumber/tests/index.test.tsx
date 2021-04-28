import * as React from "react"

import { render } from "@testing-library/react"

import { InputNumber } from ".."

describe("<InputNumber />", () => {
  it("Should render correctly", () => {
    const { container } = render(<InputNumber />)

    expect(container)
  })
})
