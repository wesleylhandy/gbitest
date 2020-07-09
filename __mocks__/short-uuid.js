const shortUuid = jest.requireActual(`short-uuid`)
module.exports = {
  ...shortUuid,
  generate: jest.fn(),
}
