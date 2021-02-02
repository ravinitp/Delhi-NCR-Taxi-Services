define(['dart_sdk', 'packages/flutter_web/animation'], (function load__packages__CabBookFlutterTemplate__utils__responsive_layout(dart_sdk, packages__flutter_web__animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  var responsive_layout = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/responsive_layout.dart";
  var L1 = "package:CabBookFlutterTemplate/utils/responsive_layout.dart";
  var largeChild$ = dart.privateName(responsive_layout, "ResponsiveLayout.largeChild");
  var mediumChild$ = dart.privateName(responsive_layout, "ResponsiveLayout.mediumChild");
  var smallChild$ = dart.privateName(responsive_layout, "ResponsiveLayout.smallChild");
  var largeBreakPoint$ = dart.privateName(responsive_layout, "ResponsiveLayout.largeBreakPoint");
  var mediumBreakPoint$ = dart.privateName(responsive_layout, "ResponsiveLayout.mediumBreakPoint");
  responsive_layout.ResponsiveLayout = class ResponsiveLayout extends framework.StatelessWidget {
    get largeChild() {
      return this[largeChild$];
    }
    set largeChild(value) {
      super.largeChild = value;
    }
    get mediumChild() {
      return this[mediumChild$];
    }
    set mediumChild(value) {
      super.mediumChild = value;
    }
    get smallChild() {
      return this[smallChild$];
    }
    set smallChild(value) {
      super.smallChild = value;
    }
    get largeBreakPoint() {
      return this[largeBreakPoint$];
    }
    set largeBreakPoint(value) {
      super.largeBreakPoint = value;
    }
    get mediumBreakPoint() {
      return this[mediumBreakPoint$];
    }
    set mediumBreakPoint(value) {
      super.mediumBreakPoint = value;
    }
    build(context) {
      let t0, t0$, t0$0;
      let smallestWidth = media_query.MediaQuery.of(context).size.shortestSide;
      if (dart.notNull(smallestWidth) >= dart.notNull(this.largeBreakPoint)) {
        return this.largeChild;
      } else if (dart.notNull(smallestWidth) >= dart.notNull(this.mediumBreakPoint)) {
        t0 = this.mediumChild;
        return t0 == null ? this.largeChild : t0;
      } else {
        t0$0 = (t0$ = this.smallChild, t0$ == null ? this.mediumChild : t0$);
        return t0$0 == null ? this.largeChild : t0$0;
      }
    }
  };
  (responsive_layout.ResponsiveLayout.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let largeChild = opts && 'largeChild' in opts ? opts.largeChild : null;
    let mediumChild = opts && 'mediumChild' in opts ? opts.mediumChild : null;
    let smallChild = opts && 'smallChild' in opts ? opts.smallChild : null;
    let largeBreakPoint = opts && 'largeBreakPoint' in opts ? opts.largeBreakPoint : 1200;
    let mediumBreakPoint = opts && 'mediumBreakPoint' in opts ? opts.mediumBreakPoint : 800;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[largeChild$] = largeChild;
    this[mediumChild$] = mediumChild;
    this[smallChild$] = smallChild;
    this[largeBreakPoint$] = largeBreakPoint;
    this[mediumBreakPoint$] = mediumBreakPoint;
    if (!(largeChild != null)) dart.assertFailed(null, L0, 12, 16, "largeChild != null");
    responsive_layout.ResponsiveLayout.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = responsive_layout.ResponsiveLayout.prototype;
  dart.addTypeTests(responsive_layout.ResponsiveLayout);
  dart.addTypeCaches(responsive_layout.ResponsiveLayout);
  dart.setMethodSignature(responsive_layout.ResponsiveLayout, () => ({
    __proto__: dart.getMethods(responsive_layout.ResponsiveLayout.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(responsive_layout.ResponsiveLayout, L1);
  dart.setFieldSignature(responsive_layout.ResponsiveLayout, () => ({
    __proto__: dart.getFields(responsive_layout.ResponsiveLayout.__proto__),
    largeChild: dart.finalFieldType(dart.legacy(framework.Widget)),
    mediumChild: dart.finalFieldType(dart.legacy(framework.Widget)),
    smallChild: dart.finalFieldType(dart.legacy(framework.Widget)),
    largeBreakPoint: dart.finalFieldType(dart.legacy(core.double)),
    mediumBreakPoint: dart.finalFieldType(dart.legacy(core.double))
  }));
  dart.trackLibraries("packages/CabBookFlutterTemplate/utils/responsive_layout", {
    "package:CabBookFlutterTemplate/utils/responsive_layout.dart": responsive_layout
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["responsive_layout.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IAee;;;;;;IAGA;;;;;;IAGA;;;;;;IAEA;;;;;;IAEA;;;;;;UAGa;;AAClB,0BAA2B,AAAY,AAAK,0BAAd,OAAO;AAC3C,UAAkB,aAAd,aAAa,kBAAI;AACnB,cAAO;YACF,KAAkB,aAAd,aAAa,kBAAI;AAC1B,aAAO;4BAAe;;AAEtB,gBAAkB,8BAAX,OAAc;uBAAH,OAAkB;;IAExC;;;QAhCM;QACW;QACV;QACA;QACA;QACA;;IAJU;IACV;IACA;IACA;IACA;UACM,AAAW,UAAD,IAAI;AACrB,sEAAW,GAAG;;EAAC","file":"responsive_layout.unsound.ddc.js"}');
  // Exports:
  return {
    utils__responsive_layout: responsive_layout
  };
}));

//# sourceMappingURL=responsive_layout.unsound.ddc.js.map
