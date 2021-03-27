define(['dart_sdk'], (function load__packages__CabBookFlutterTemplate__utils__FormUtil(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var FormUtil = Object.create(dart.library);
  var $toString = dartx.toString;
  const CT = Object.create(null);
  var L0 = "package:CabBookFlutterTemplate/utils/FormUtil.dart";
  FormUtil.FormUtil = class FormUtil$ extends core.Object {
    static formatDate(date, defaultValue) {
      if (date == null) {
        return defaultValue;
      }
      let day = date.day;
      let month = date.month;
      let year = date.year;
      return dart.notNull(FormUtil.FormUtil._formatInt(day)) + "/" + dart.notNull(FormUtil.FormUtil._formatInt(month)) + "/" + dart.toString(year);
    }
    static _formatInt(value) {
      if (dart.notNull(value) < 10) {
        return "0" + dart.toString(value);
      }
      return dart.toString(value);
    }
  };
  (FormUtil.FormUtil.new = function() {
    ;
  }).prototype = FormUtil.FormUtil.prototype;
  dart.addTypeTests(FormUtil.FormUtil);
  dart.addTypeCaches(FormUtil.FormUtil);
  dart.setLibraryUri(FormUtil.FormUtil, L0);
  dart.trackLibraries("packages/CabBookFlutterTemplate/utils/FormUtil", {
    "package:CabBookFlutterTemplate/utils/FormUtil.dart": FormUtil
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["FormUtil.dart"],"names":[],"mappings":";;;;;;;;;;sBACoC,MAAa;AAC7C,UAAI,AAAK,IAAD,IAAI;AACV,cAAO,aAAY;;AAEjB,gBAAM,AAAK,IAAD;AACV,kBAAQ,AAAK,IAAD;AACZ,iBAAO,AAAK,IAAD;AACf,YAAuB,AAAM,AAAoB,AAAM,cAAhD,6BAAW,GAAG,KAAI,mBAAM,6BAAW,KAAK,KAAI,MAAW,cAAL,IAAI;IAC/D;sBAE6B;AAC3B,UAAU,aAAN,KAAK,IAAG;AACV,cAAO,AAAI,OAAQ,cAAN,KAAK;;AAEpB,YAAa,eAAN,KAAK;IACd;;;;EACF","file":"FormUtil.unsound.ddc.js"}');
  // Exports:
  return {
    utils__FormUtil: FormUtil
  };
}));

//# sourceMappingURL=FormUtil.unsound.ddc.js.map
