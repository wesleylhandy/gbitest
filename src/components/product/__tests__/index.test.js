import * as React from "react"
import { render } from "@testing-library/react"
import Product from "../index"
import uuid from "short-uuid"

jest.mock(`../content`)
jest.mock(`../../../theme`)

beforeEach(() => {
  uuid.generate.mockImplementation(() => `73WakrfVbNJBaAmhQtEeDv`)
})

describe(`Product`, () => {
  let isEven = false
  const title = `TestTitle`
  const subtitle = `Test-Subtitle`
  const shortDescription = `TestShortDescription`
  const image = {
    childImageSharp: {
      fluid: {
        aspectRatio: 1200,
        src: `test-src`,
        srcSet: `test-src1, test-src2`,
      },
    },
  }
  let blobs = [`TestBlob`]
  it(`renders without error`, () => {
    render(<Product image={image} subtitle={``} blobs={[]} />)
  })
  it(`renders without error when passed props`, () => {
    const { getByTestId, container, rerender } = render(
      <Product
        image={image}
        isEven={isEven}
        subtitle={subtitle}
        title={title}
        shortDescription={shortDescription}
        blobs={blobs}
      />
    )
    const testSubtitle = container.querySelector(
      `[id=${subtitle.split(`—`).join(``)}]`
    )
    const content = getByTestId(`Content`)
    const backgroundImage = getByTestId(`BackgroundImage`)
    expect(backgroundImage).toBeInTheDocument()
    expect(testSubtitle).toBeInTheDocument()
    expect(content).toBeInTheDocument()
    blobs = []
    isEven = true
    rerender(
      <Product
        image={image}
        isEven={isEven}
        subtitle={subtitle}
        title={title}
        shortDescription={shortDescription}
        blobs={blobs}
      />
    )
  })
})
