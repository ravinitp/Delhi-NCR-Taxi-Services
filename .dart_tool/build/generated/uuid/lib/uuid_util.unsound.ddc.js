define(['dart_sdk'], (function load__packages__uuid__uuid_util(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var uuid_util = Object.create(dart.library);
  var $_set = dartx._set;
  var $shuffle = dartx.shuffle;
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  const CT = Object.create(null);
  var L0 = "package:uuid/uuid_util.dart";
  uuid_util.UuidUtil = class UuidUtil extends core.Object {
    static mathRNG(opts) {
      let seed = opts && 'seed' in opts ? opts.seed : -1;
      let b = ListOfintL().new(16);
      let rand = seed === -1 ? math.Random.new() : math.Random.new(seed);
      for (let i = 0; i < 16; i = i + 1) {
        b[$_set](i, rand.nextInt(256));
      }
      seed === -1 ? b[$shuffle]() : b[$shuffle](math.Random.new(seed));
      return b;
    }
    static cryptoRNG() {
      let b = ListOfintL().new(16);
      let rand = math.Random.secure();
      for (let i = 0; i < 16; i = i + 1) {
        b[$_set](i, rand.nextInt(256));
      }
      return b;
    }
  };
  (uuid_util.UuidUtil.new = function() {
    ;
  }).prototype = uuid_util.UuidUtil.prototype;
  dart.addTypeTests(uuid_util.UuidUtil);
  dart.addTypeCaches(uuid_util.UuidUtil);
  dart.setLibraryUri(uuid_util.UuidUtil, L0);
  dart.trackLibraries("packages/uuid/uuid_util", {
    "package:uuid/uuid_util.dart": uuid_util
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["uuid_util.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;UAMgC;AACxB,cAAI,iBAAU;AAEd,iBAAQ,AAAK,IAAD,KAAI,CAAC,IAAK,oBAAW,gBAAO,IAAI;AAChD,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,IAAI,IAAA,AAAC,CAAA;AACC,QAAxB,AAAC,CAAA,QAAC,CAAC,EAAI,AAAK,IAAD,SAAS;;AAG8B,MAAnD,AAAK,IAAD,KAAI,CAAC,IAAK,AAAE,CAAD,eAAa,AAAE,CAAD,WAAS,gBAAO,IAAI;AAElD,YAAO,EAAC;IACV;;AAIM,cAAI,iBAAU;AACd,iBAAc;AAClB,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,IAAI,IAAA,AAAC,CAAA;AACC,QAAxB,AAAC,CAAA,QAAC,CAAC,EAAI,AAAK,IAAD,SAAS;;AAEtB,YAAO,EAAC;IACV;;;;EACF","file":"uuid_util.unsound.ddc.js"}');
  // Exports:
  return {
    uuid_util: uuid_util
  };
}));

//# sourceMappingURL=uuid_util.unsound.ddc.js.map
