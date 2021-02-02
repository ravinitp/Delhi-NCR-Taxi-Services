define(['dart_sdk'], (function load__packages__vector_math__hash(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var hash = Object.create(dart.library);
  var $hashCode = dartx.hashCode;
  var $fold = dartx.fold;
  var $rightShift = dartx['>>'];
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var intLAndObjectLTointL = () => (intLAndObjectLTointL = dart.constFn(dart.fnType(intL(), [intL(), ObjectL()])))();
  const CT = Object.create(null);
  hash.hashObjects = function hashObjects(objects) {
    return hash._finish(objects[$fold](intL(), 0, dart.fn((h, i) => hash._combine(h, dart.hashCode(i)), intLAndObjectLTointL())));
  };
  hash._combine = function _combine(hash, value) {
    hash = 536870911 & dart.notNull(hash) + dart.notNull(value);
    hash = 536870911 & dart.notNull(hash) + ((524287 & dart.notNull(hash)) << 10);
    return (dart.notNull(hash) ^ hash[$rightShift](6)) >>> 0;
  };
  hash._finish = function _finish(hash) {
    hash = 536870911 & dart.notNull(hash) + ((67108863 & dart.notNull(hash)) << 3);
    hash = (dart.notNull(hash) ^ hash[$rightShift](11)) >>> 0;
    return 536870911 & dart.notNull(hash) + ((16383 & dart.notNull(hash)) << 15);
  };
  dart.trackLibraries("packages/vector_math/hash", {
    "package:vector_math/hash.dart": hash
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hash.dart"],"names":[],"mappings":";;;;;;;;;;;;;0CAOiC;AAC7B,wBAAQ,AAAQ,OAAD,gBAAW,GAAG,SAAK,GAAU,MAAM,cAAS,CAAC,EAAI,cAAF,CAAC;EAAY;oCAG9D,MAAU;AACS,IAAlC,OAAO,AAAW,YAAQ,aAAL,IAAI,iBAAG,KAAK;AACuB,IAAxD,OAAO,AAAW,YAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,sBAAE,IAAI,MAAK;AACpD,UAAY,eAAL,IAAI,IAAI,AAAK,IAAD,cAAI;EACzB;kCAEgB;AACyC,IAAvD,OAAO,AAAW,YAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,wBAAE,IAAI,MAAK;AAC1B,IAA1B,OAAY,cAAL,IAAI,IAAI,AAAK,IAAD,cAAI;AACvB,UAAO,AAAW,aAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,qBAAE,IAAI,MAAK;EACtD","file":"hash.unsound.ddc.js"}');
  // Exports:
  return {
    hash: hash
  };
}));

//# sourceMappingURL=hash.unsound.ddc.js.map
