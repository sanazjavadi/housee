import * as React from "react"

import { render } from "@testing-library/react"

import { NeadrBy } from ".."

describe("<NeadrBy />", () => {
  it("Should render correctly", () => {
    const { container } = render(<NeadrBy />)

    expect(container)
  })
})
