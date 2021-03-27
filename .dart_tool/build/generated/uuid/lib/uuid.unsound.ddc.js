define(['dart_sdk', 'packages/convert/convert', 'packages/uuid/uuid_util', 'packages/crypto/crypto'], (function load__packages__uuid__uuid(dart_sdk, packages__convert__convert, packages__uuid__uuid_util, packages__crypto__crypto) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hex$ = packages__convert__convert.src__hex;
  const uuid_util = packages__uuid__uuid_util.uuid_util;
  const sha1 = packages__crypto__crypto.src__sha1;
  var uuid = Object.create(dart.library);
  var $add = dartx.add;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $toLowerCase = dartx.toLowerCase;
  var $substring = dartx.substring;
  var $setRange = dartx.setRange;
  var $codeUnits = dartx.codeUnits;
  var $addAll = dartx.addAll;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var ListOfStringL = () => (ListOfStringL = dart.constFn(core.List$(StringL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var IdentityMapOfStringL$intL = () => (IdentityMapOfStringL$intL = dart.constFn(_js_helper.IdentityMap$(StringL(), intL())))();
  var JSArrayOfintL = () => (JSArrayOfintL = dart.constFn(_interceptors.JSArray$(intL())))();
  var SymbolL = () => (SymbolL = dart.constFn(dart.legacy(core.Symbol)))();
  var MapOfSymbolL$dynamic = () => (MapOfSymbolL$dynamic = dart.constFn(core.Map$(SymbolL(), dart.dynamic)))();
  var MapLOfSymbolL$dynamic = () => (MapLOfSymbolL$dynamic = dart.constFn(dart.legacy(MapOfSymbolL$dynamic())))();
  var ListN = () => (ListN = dart.constFn(dart.nullable(core.List)))();
  var VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  var ListOfintL = () => (ListOfintL = dart.constFn(core.List$(intL())))();
  var ListLOfintL = () => (ListLOfintL = dart.constFn(dart.legacy(ListOfintL())))();
  const CT = Object.create(null);
  var L0 = "package:uuid/uuid.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constMap(SymbolL(), dart.dynamic, []);
    }
  }, false);
  var _seedBytes = dart.privateName(uuid, "_seedBytes");
  var _nodeId = dart.privateName(uuid, "_nodeId");
  var _clockSeq = dart.privateName(uuid, "_clockSeq");
  var _lastMSecs = dart.privateName(uuid, "_lastMSecs");
  var _lastNSecs = dart.privateName(uuid, "_lastNSecs");
  var _globalRNG = dart.privateName(uuid, "_globalRNG");
  var _byteToHex = dart.privateName(uuid, "_byteToHex");
  var _hexToByte = dart.privateName(uuid, "_hexToByte");
  var C0;
  uuid.Uuid = class Uuid extends core.Object {
    parse(uuid, opts) {
      let t0, t0$;
      let buffer = opts && 'buffer' in opts ? opts.buffer : null;
      let offset = opts && 'offset' in opts ? opts.offset : 0;
      let i = offset;
      let ii = 0;
      buffer = buffer != null ? buffer : ListOfintL().new(16);
      let regex = core.RegExp.new("[0-9a-f]{2}");
      for (let match of regex.allMatches(uuid[$toLowerCase]())) {
        if (ii < 16) {
          let hex = uuid[$toLowerCase]()[$substring](match.start, match.end);
          buffer[$_set](dart.notNull(i) + (t0 = ii, ii = t0 + 1, t0), this[_hexToByte][$_get](hex));
        }
      }
      while (ii < 16) {
        buffer[$_set](dart.notNull(i) + (t0$ = ii, ii = t0$ + 1, t0$), 0);
      }
      return buffer;
    }
    unparse(buffer, opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13;
      let offset = opts && 'offset' in opts ? opts.offset : 0;
      let i = offset;
      return dart.str(this[_byteToHex][$_get](buffer[$_get]((t0 = i, i = dart.notNull(t0) + 1, t0)))) + dart.str(this[_byteToHex][$_get](buffer[$_get]((t0$ = i, i = dart.notNull(t0$) + 1, t0$)))) + dart.str(this[_byteToHex][$_get](buffer[$_get]((t0$0 = i, i = dart.notNull(t0$0) + 1, t0$0)))) + dart.str(this[_byteToHex][$_get](buffer[$_get]((t0$1 = i, i = dart.notNull(t0$1) + 1, t0$1)))) + "-" + dart.str(this[_byteToHex][$_get](buffer[$_get]((t0$2 = i, i = dart.notNull(t0$2) + 1, t0$2)))) + dart.str(this[_byteToHex][$_get](buffer[$_get]((t0$3 = i, i = dart.notNull(t0$3) + 1, t0$3)))) + "-" + dart.str(this[_byteToHex][$_get](buffer[$_get]((t0$4 = i, i = dart.notNull(t0$4) + 1, t0$4)))) + dart.str(this[_byteToHex][$_get](buffer[$_get]((t0$5 = i, i = dart.notNull(t0$5) + 1, t0$5)))) + "-" + dart.str(this[_byteToHex][$_get](buffer[$_get]((t0$6 = i, i = dart.notNull(t0$6) + 1, t0$6)))) + dart.str(this[_byteToHex][$_get](buffer[$_get]((t0$7 = i, i = dart.notNull(t0$7) + 1, t0$7)))) + "-" + dart.str(this[_byteToHex][$_get](buffer[$_get]((t0$8 = i, i = dart.notNull(t0$8) + 1, t0$8)))) + dart.str(this[_byteToHex][$_get](buffer[$_get]((t0$9 = i, i = dart.notNull(t0$9) + 1, t0$9)))) + dart.str(this[_byteToHex][$_get](buffer[$_get]((t0$10 = i, i = dart.notNull(t0$10) + 1, t0$10)))) + dart.str(this[_byteToHex][$_get](buffer[$_get]((t0$11 = i, i = dart.notNull(t0$11) + 1, t0$11)))) + dart.str(this[_byteToHex][$_get](buffer[$_get]((t0$12 = i, i = dart.notNull(t0$12) + 1, t0$12)))) + dart.str(this[_byteToHex][$_get](buffer[$_get]((t0$13 = i, i = dart.notNull(t0$13) + 1, t0$13))));
    }
    v1(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7;
      let options = opts && 'options' in opts ? opts.options : null;
      let i = 0;
      let buf = ListOfintL().new(16);
      options = options != null ? options : new (IdentityMapOfStringL$dynamic()).new();
      let clockSeq = options[$_get]("clockSeq") != null ? options[$_get]("clockSeq") : this[_clockSeq];
      let mSecs = options[$_get]("mSecs") != null ? options[$_get]("mSecs") : new core.DateTime.now().millisecondsSinceEpoch;
      let nSecs = options[$_get]("nSecs") != null ? options[$_get]("nSecs") : dart.notNull(this[_lastNSecs]) + 1;
      let dt = dart.dsend(dart.dsend(mSecs, '-', [this[_lastMSecs]]), '+', [dart.dsend(dart.dsend(nSecs, '-', [this[_lastNSecs]]), '/', [10000])]);
      if (dart.dtest(dart.dsend(dt, '<', [0])) && options[$_get]("clockSeq") == null) {
        clockSeq = dart.dsend(dart.dsend(clockSeq, '+', [1]), '&', [16383]);
      }
      if ((dart.dtest(dart.dsend(dt, '<', [0])) || dart.dtest(dart.dsend(mSecs, '>', [this[_lastMSecs]]))) && options[$_get]("nSecs") == null) {
        nSecs = 0;
      }
      if (dart.dtest(dart.dsend(nSecs, '>=', [10000]))) {
        dart.throw(core.Exception.new("uuid.v1(): Can't create more than 10M uuids/sec"));
      }
      this[_lastMSecs] = intL().as(mSecs);
      this[_lastNSecs] = intL().as(nSecs);
      this[_clockSeq] = clockSeq;
      mSecs = dart.dsend(mSecs, '+', [12219292800000]);
      let tl = dart.dsend(dart.dsend(dart.dsend(dart.dsend(mSecs, '&', [268435455]), '*', [10000]), '+', [nSecs]), '%', [4294967296]);
      buf[$_set]((t0 = i, i = t0 + 1, t0), intL().as(dart.dsend(dart.dsend(tl, '>>', [24]), '&', [255])));
      buf[$_set]((t0$ = i, i = t0$ + 1, t0$), intL().as(dart.dsend(dart.dsend(tl, '>>', [16]), '&', [255])));
      buf[$_set]((t0$0 = i, i = t0$0 + 1, t0$0), intL().as(dart.dsend(dart.dsend(tl, '>>', [8]), '&', [255])));
      buf[$_set]((t0$1 = i, i = t0$1 + 1, t0$1), intL().as(dart.dsend(tl, '&', [255])));
      let tmh = dart.dsend(dart.dsend(dart.dsend(dart.dsend(mSecs, '/', [4294967296]), '*', [10000]), 'floor', []), '&', [268435455]);
      buf[$_set]((t0$2 = i, i = t0$2 + 1, t0$2), intL().as(dart.dsend(dart.dsend(tmh, '>>', [8]), '&', [255])));
      buf[$_set]((t0$3 = i, i = t0$3 + 1, t0$3), intL().as(dart.dsend(tmh, '&', [255])));
      buf[$_set]((t0$4 = i, i = t0$4 + 1, t0$4), intL().as(dart.dsend(dart.dsend(dart.dsend(tmh, '>>', [24]), '&', [15]), '|', [16])));
      buf[$_set]((t0$5 = i, i = t0$5 + 1, t0$5), intL().as(dart.dsend(dart.dsend(tmh, '>>', [16]), '&', [255])));
      buf[$_set]((t0$6 = i, i = t0$6 + 1, t0$6), intL().as(dart.dsend(dart.dsend(dart.dsend(clockSeq, '&', [16128]), '>>', [8]), '|', [128])));
      buf[$_set]((t0$7 = i, i = t0$7 + 1, t0$7), intL().as(dart.dsend(clockSeq, '&', [255])));
      let node = options[$_get]("node") != null ? options[$_get]("node") : this[_nodeId];
      for (let n = 0; n < 6; n = n + 1) {
        buf[$_set](i + n, intL().as(dart.dsend(node, '_get', [n])));
      }
      return this.unparse(buf);
    }
    v1buffer(buffer, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let offset = opts && 'offset' in opts ? opts.offset : 0;
      let _buf = this.parse(this.v1({options: options}));
      if (buffer != null) {
        buffer[$setRange](offset, dart.notNull(offset) + 16, _buf);
      }
      return buffer;
    }
    v4(opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      options = options != null ? options : new (IdentityMapOfStringL$dynamic()).new();
      let positionalArgs = options[$_get]("positionalArgs") != null ? options[$_get]("positionalArgs") : [];
      let namedArgs = options[$_get]("namedArgs") != null ? MapLOfSymbolL$dynamic().as(options[$_get]("namedArgs")) : C0 || CT.C0;
      let rng = options[$_get]("rng") != null ? core.Function.apply(core.Function.as(options[$_get]("rng")), ListN().as(positionalArgs), namedArgs) : dart.dsend(this, _globalRNG, []);
      let rnds = options[$_get]("random") != null ? options[$_get]("random") : rng;
      dart.dsend(rnds, '_set', [6, dart.dsend(dart.dsend(dart.dsend(rnds, '_get', [6]), '&', [15]), '|', [64])]);
      dart.dsend(rnds, '_set', [8, dart.dsend(dart.dsend(dart.dsend(rnds, '_get', [8]), '&', [63]), '|', [128])]);
      return this.unparse(ListLOfintL().as(rnds));
    }
    v4buffer(buffer, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let offset = opts && 'offset' in opts ? opts.offset : 0;
      let _buf = this.parse(this.v4({options: options}));
      if (buffer != null) {
        buffer[$setRange](offset, dart.notNull(offset) + 16, _buf);
      }
      return buffer;
    }
    v5(namespace, name, opts) {
      let t0;
      let options = opts && 'options' in opts ? opts.options : null;
      options = options != null ? options : new (IdentityMapOfStringL$dynamic()).new();
      let useRandom = options[$_get]("randomNamespace") != null ? options[$_get]("randomNamespace") : true;
      let blankNS = dart.dtest(useRandom) ? this.v4() : uuid.Uuid.NAMESPACE_NIL;
      namespace = namespace != null ? namespace : blankNS;
      name = name != null ? name : "";
      let bytes = this.parse(namespace);
      let nameBytes = JSArrayOfintL().of([]);
      for (let singleChar of name[$codeUnits]) {
        nameBytes[$add](singleChar);
      }
      let hashBytes = sha1.sha1.convert((t0 = ListOfintL().from(bytes), (() => {
        t0[$addAll](nameBytes);
        return t0;
      })())).bytes;
      hashBytes[$_set](6, dart.dsend(dart.dsend(hashBytes[$_get](6), '&', [15]), '|', [80]));
      hashBytes[$_set](8, dart.dsend(dart.dsend(hashBytes[$_get](8), '&', [63]), '|', [128]));
      return this.unparse(ListLOfintL().as(hashBytes));
    }
    v5buffer(namespace, name, buffer, opts) {
      let options = opts && 'options' in opts ? opts.options : null;
      let offset = opts && 'offset' in opts ? opts.offset : 0;
      let _buf = this.parse(this.v5(namespace, name, {options: options}));
      if (buffer != null) {
        buffer[$setRange](offset, dart.notNull(offset) + 16, _buf);
      }
      return buffer;
    }
  };
  (uuid.Uuid.new = function(opts) {
    let options = opts && 'options' in opts ? opts.options : null;
    this[_seedBytes] = null;
    this[_nodeId] = null;
    this[_clockSeq] = null;
    this[_lastMSecs] = 0;
    this[_lastNSecs] = 0;
    this[_globalRNG] = null;
    this[_byteToHex] = null;
    this[_hexToByte] = null;
    options = options != null ? options : new (IdentityMapOfStringL$dynamic()).new();
    this[_byteToHex] = ListOfStringL().new(256);
    this[_hexToByte] = new (IdentityMapOfStringL$intL()).new();
    for (let i = 0; i < 256; i = i + 1) {
      let hex = JSArrayOfintL().of([]);
      hex[$add](i);
      this[_byteToHex][$_set](i, hex$.hex.encode(hex));
      this[_hexToByte][$_set](this[_byteToHex][$_get](i), i);
    }
    let v1PositionalArgs = options[$_get]("v1rngPositionalArgs") != null ? options[$_get]("v1rngPositionalArgs") : [];
    let v1NamedArgs = options[$_get]("v1rngNamedArgs") != null ? MapLOfSymbolL$dynamic().as(options[$_get]("v1rngNamedArgs")) : C0 || CT.C0;
    this[_seedBytes] = options[$_get]("v1rng") != null ? core.Function.apply(core.Function.as(options[$_get]("v1rng")), ListN().as(v1PositionalArgs), v1NamedArgs) : uuid_util.UuidUtil.mathRNG();
    let gPositionalArgs = options[$_get]("grngPositionalArgs") != null ? options[$_get]("grngPositionalArgs") : [];
    let gNamedArgs = options[$_get]("grngNamedArgs") != null ? MapLOfSymbolL$dynamic().as(options[$_get]("grngNamedArgs")) : C0 || CT.C0;
    this[_globalRNG] = dart.fn(() => options[$_get]("grng") != null ? core.Function.apply(core.Function.as(options[$_get]("grng")), ListN().as(gPositionalArgs), gNamedArgs) : uuid_util.UuidUtil.mathRNG(), VoidTodynamic());
    this[_nodeId] = [dart.dsend(dart.dsend(this[_seedBytes], '_get', [0]), '|', [1]), dart.dsend(this[_seedBytes], '_get', [1]), dart.dsend(this[_seedBytes], '_get', [2]), dart.dsend(this[_seedBytes], '_get', [3]), dart.dsend(this[_seedBytes], '_get', [4]), dart.dsend(this[_seedBytes], '_get', [5])];
    this[_clockSeq] = dart.dsend(dart.dsend(dart.dsend(dart.dsend(this[_seedBytes], '_get', [6]), '<<', [8]), '|', [dart.dsend(this[_seedBytes], '_get', [7])]), '&', [262143]);
  }).prototype = uuid.Uuid.prototype;
  dart.addTypeTests(uuid.Uuid);
  dart.addTypeCaches(uuid.Uuid);
  dart.setMethodSignature(uuid.Uuid, () => ({
    __proto__: dart.getMethods(uuid.Uuid.__proto__),
    parse: dart.fnType(dart.legacy(core.List$(dart.legacy(core.int))), [dart.legacy(core.String)], {buffer: dart.legacy(core.List$(dart.legacy(core.int))), offset: dart.legacy(core.int)}, {}),
    unparse: dart.fnType(dart.legacy(core.String), [dart.legacy(core.List$(dart.legacy(core.int)))], {offset: dart.legacy(core.int)}, {}),
    v1: dart.fnType(dart.legacy(core.String), [], {options: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))}, {}),
    v1buffer: dart.fnType(dart.legacy(core.List$(dart.legacy(core.int))), [dart.legacy(core.List$(dart.legacy(core.int)))], {offset: dart.legacy(core.int), options: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))}, {}),
    v4: dart.fnType(dart.legacy(core.String), [], {options: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))}, {}),
    v4buffer: dart.fnType(dart.legacy(core.List$(dart.legacy(core.int))), [dart.legacy(core.List$(dart.legacy(core.int)))], {offset: dart.legacy(core.int), options: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))}, {}),
    v5: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String), dart.legacy(core.String)], {options: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))}, {}),
    v5buffer: dart.fnType(dart.legacy(core.List$(dart.legacy(core.int))), [dart.legacy(core.String), dart.legacy(core.String), dart.legacy(core.List$(dart.legacy(core.int)))], {offset: dart.legacy(core.int), options: dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))}, {})
  }));
  dart.setLibraryUri(uuid.Uuid, L0);
  dart.setFieldSignature(uuid.Uuid, () => ({
    __proto__: dart.getFields(uuid.Uuid.__proto__),
    [_seedBytes]: dart.fieldType(dart.dynamic),
    [_nodeId]: dart.fieldType(dart.dynamic),
    [_clockSeq]: dart.fieldType(dart.dynamic),
    [_lastMSecs]: dart.fieldType(dart.legacy(core.int)),
    [_lastNSecs]: dart.fieldType(dart.legacy(core.int)),
    [_globalRNG]: dart.fieldType(dart.legacy(core.Function)),
    [_byteToHex]: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    [_hexToByte]: dart.fieldType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.int))))
  }));
  dart.defineLazy(uuid.Uuid, {
    /*uuid.Uuid.NAMESPACE_DNS*/get NAMESPACE_DNS() {
      return "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    },
    /*uuid.Uuid.NAMESPACE_URL*/get NAMESPACE_URL() {
      return "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    },
    /*uuid.Uuid.NAMESPACE_OID*/get NAMESPACE_OID() {
      return "6ba7b812-9dad-11d1-80b4-00c04fd430c8";
    },
    /*uuid.Uuid.NAMESPACE_X500*/get NAMESPACE_X500() {
      return "6ba7b814-9dad-11d1-80b4-00c04fd430c8";
    },
    /*uuid.Uuid.NAMESPACE_NIL*/get NAMESPACE_NIL() {
      return "00000000-0000-0000-0000-000000000000";
    }
  }, true);
  dart.trackLibraries("packages/uuid/uuid", {
    "package:uuid/uuid.dart": uuid
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["uuid.dart"],"names":[],"mappings":"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","file":"uuid.unsound.ddc.js"}');
  // Exports:
  return {
    uuid: uuid
  };
}));

//# sourceMappingURL=uuid.unsound.ddc.js.map