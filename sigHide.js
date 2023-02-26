// typedoc --plugin path/to/this/file.js
const { Converter, ReflectionKind, UnknownType } = require("typedoc")

exports.load = function(app) {
  app.converter.on(Converter.EVENT_CREATE_SIGNATURE, (ctx, sig) => {
    // Without this will replace constructor signatures, get/set signatures, index signatures
    if (sig.kind === ReflectionKind.CallSignature) {
      // sig.type = new UnknownType("whatever you want to show up")
      sig.type = undefined
    }
  })
}