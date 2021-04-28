import * as React from "react"

import { render } from "@testing-library/react"

import { ImageRadioBtn } from ".."

describe("<ImageRadioBtn />", () => {
  it("Should render correctly", () => {
    const { container } = render(<ImageRadioBtn />)

    expect(container)
  })
})
