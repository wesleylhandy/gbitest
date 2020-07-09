import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { rem } from "polished"
import BackgroundImage from "gatsby-background-image"
import sharpImageObject from "./sharp-image-proptypes"

import Content from "./content"

const VisualCol = styled.div`
  position: relative;

  @media ${(props) => props.theme.smallUp} {
    width: 50%;
  }

  @media ${(props) => props.theme.smallDown} {
    width: 100%;
    display: none;
  }
`

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 100%;
  background-position: ${(props) => props.isExpandedPosition};
`

const ContentCol = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;

  @media ${(props) => props.theme.smallUp} {
    width: 50%;
  }

  @media ${(props) => props.theme.smallDown} {
    width: 100%;
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;

  &:not(:last-of-type) {
    @media ${(props) => props.theme.smallDown} {
      border-bottom: 1px solid ${(props) => props.theme.colorBlack};
    }
  }

  ${(props) =>
    props.isEven != true &&
    css`
      ${ContentCol} {
        order: 2;
      }
    `}
`

const IdContainer = styled.div`
  position: absolute;
  left: 0;
  width: 1px;
  height: 1px;

  @media ${(props) => props.theme.largeUp} {
    top: ${rem(-102)};
  }

  @media ${(props) => props.theme.largeDown} {
    top: ${rem(-59)};
  }
`

const Product = (props) => {
  return (
    <Container isEven={props.isEven}>
      <IdContainer id={props.subtitle.split(`—`).join(``)} />

      <ContentCol>
        <Content {...props} />
      </ContentCol>

      <VisualCol>
        <BackgroundContainer>
          <StyledBackgroundImage
            isExpandedPosition={
              props.blobs.length > 0 ? `top center` : `center`
            }
            fluid={props.image.childImageSharp.fluid}
            key={props.blobs.length > 0 ? `expandable` : `notexpandable`}
            data-testid={`BackgroundImage`}
          />
        </BackgroundContainer>
      </VisualCol>
    </Container>
  )
}

Product.propTypes = {
  isEven: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  shortDescription: PropTypes.string,
  image: sharpImageObject,
  blobs: PropTypes.array.isRequired,
}

export default Product
