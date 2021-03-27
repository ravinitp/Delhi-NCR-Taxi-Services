define(['dart_sdk'], (function load__packages__CabBookFlutterTemplate__model__Location(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var Location = Object.create(dart.library);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  const CT = Object.create(null);
  var L0 = "package:CabBookFlutterTemplate/model/Location.dart";
  var locationName$ = dart.privateName(Location, "Location.locationName");
  Location.Location = class Location extends core.Object {
    get locationName() {
      return this[locationName$];
    }
    set locationName(value) {
      this[locationName$] = value;
    }
    toJson() {
      return new (IdentityMapOfStringL$dynamic()).from(["locationName", this.locationName]);
    }
  };
  (Location.Location.new = function(opts) {
    let locationName = opts && 'locationName' in opts ? opts.locationName : null;
    this[locationName$] = locationName;
    ;
  }).prototype = Location.Location.prototype;
  dart.addTypeTests(Location.Location);
  dart.addTypeCaches(Location.Location);
  dart.setMethodSignature(Location.Location, () => ({
    __proto__: dart.getMethods(Location.Location.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [])
  }));
  dart.setLibraryUri(Location.Location, L0);
  dart.setFieldSignature(Location.Location, () => ({
    __proto__: dart.getFields(Location.Location.__proto__),
    locationName: dart.fieldType(dart.legacy(core.String))
  }));
  dart.trackLibraries("packages/CabBookFlutterTemplate/model/Location", {
    "package:CabBookFlutterTemplate/model/Location.dart": Location
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["Location.dart"],"names":[],"mappings":";;;;;;;;;;;;;IACS;;;;;;;AAK0B,wDAC3B,gBAAgB;IACjB;;;QALE;;;EACL","file":"Location.unsound.ddc.js"}');
  // Exports:
  return {
    model__Location: Location
  };
}));

//# sourceMappingURL=Location.unsound.ddc.js.map
