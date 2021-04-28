import * as React from "react"

import { render } from "@testing-library/react"

import { HomeCard } from ".."

describe("<HomeCard />", () => {
  it("Should render correctly", () => {
    const { container } = render(<HomeCard />)

    expect(container)
  })
})
