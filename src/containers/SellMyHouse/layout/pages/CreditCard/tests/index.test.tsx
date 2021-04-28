import * as React from "react"

import { render } from "@testing-library/react"

import { CreditCard } from ".."

describe("<CreditCard />", () => {
  it("Should render correctly", () => {
    const { container } = render(<CreditCard />)

    expect(container)
  })
})
