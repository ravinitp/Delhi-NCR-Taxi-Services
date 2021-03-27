define(['dart_sdk'], (function load__packages__CabBookFlutterTemplate__model__DateTimeString(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var DateTimeString = Object.create(dart.library);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  const CT = Object.create(null);
  var L0 = "package:CabBookFlutterTemplate/model/DateTimeString.dart";
  var date$ = dart.privateName(DateTimeString, "DateTimeString.date");
  var time$ = dart.privateName(DateTimeString, "DateTimeString.time");
  DateTimeString.DateTimeString = class DateTimeString extends core.Object {
    get date() {
      return this[date$];
    }
    set date(value) {
      this[date$] = value;
    }
    get time() {
      return this[time$];
    }
    set time(value) {
      this[time$] = value;
    }
    toJson() {
      return new (IdentityMapOfStringL$dynamic()).from(["dateTimeString", dart.notNull(this.date) + " " + dart.notNull(this.time)]);
    }
  };
  (DateTimeString.DateTimeString.new = function(opts) {
    let date = opts && 'date' in opts ? opts.date : null;
    let time = opts && 'time' in opts ? opts.time : null;
    this[date$] = date;
    this[time$] = time;
    ;
  }).prototype = DateTimeString.DateTimeString.prototype;
  dart.addTypeTests(DateTimeString.DateTimeString);
  dart.addTypeCaches(DateTimeString.DateTimeString);
  dart.setMethodSignature(DateTimeString.DateTimeString, () => ({
    __proto__: dart.getMethods(DateTimeString.DateTimeString.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [])
  }));
  dart.setLibraryUri(DateTimeString.DateTimeString, L0);
  dart.setFieldSignature(DateTimeString.DateTimeString, () => ({
    __proto__: dart.getFields(DateTimeString.DateTimeString.__proto__),
    date: dart.fieldType(dart.legacy(core.String)),
    time: dart.fieldType(dart.legacy(core.String))
  }));
  dart.trackLibraries("packages/CabBookFlutterTemplate/model/DateTimeString", {
    "package:CabBookFlutterTemplate/model/DateTimeString.dart": DateTimeString
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["DateTimeString.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IACS;;;;;;IACA;;;;;;;AAO0B,wDAC3B,kBAAuB,AAAM,aAAX,aAAO,mBAAM;IAChC;;;QANE;QACA;IADA;IACA;;EACL","file":"DateTimeString.unsound.ddc.js"}');
  // Exports:
  return {
    model__DateTimeString: DateTimeString
  };
}));

//# sourceMappingURL=DateTimeString.unsound.ddc.js.map
