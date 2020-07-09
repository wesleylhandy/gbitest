import PropTypes from "prop-types"
// see https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/src/index.js
// see https://github.com/timhagn/gatsby-background-image/blob/master/packages/gatsby-background-image/src/index.js
export const fixedObject = PropTypes.shape({
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  base64: PropTypes.string,
  tracedSVG: PropTypes.string,
  srcWebp: PropTypes.string,
  srcSetWebp: PropTypes.string,
  media: PropTypes.string,
})

export const fluidObject = PropTypes.shape({
  aspectRatio: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  sizes: PropTypes.string,
  base64: PropTypes.string,
  tracedSVG: PropTypes.string,
  srcWebp: PropTypes.string,
  srcSetWebp: PropTypes.string,
  media: PropTypes.string,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
})

const sharpImageObject = PropTypes.shape({
  childImageSharp: PropTypes.oneOfType([
    PropTypes.shape({
      fixed: PropTypes.oneOfType([
        fixedObject,
        PropTypes.arrayOf(fixedObject),
        PropTypes.arrayOf(PropTypes.oneOfType([fixedObject, PropTypes.string])),
      ]),
    }),
    PropTypes.shape({
      fluid: PropTypes.oneOfType([
        fluidObject,
        PropTypes.arrayOf(fluidObject),
        PropTypes.arrayOf(PropTypes.oneOfType([fluidObject, PropTypes.string])),
      ]),
    }),
  ]).isRequired,
}).isRequired

export default sharpImageObject
