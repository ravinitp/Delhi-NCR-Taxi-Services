define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/CabBookFlutterTemplate/home'], (function load__web__main(dart_sdk, packages__flutter_web_ui__ui, packages__CabBookFlutterTemplate__home) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui = packages__flutter_web_ui__ui.ui;
  const home = packages__CabBookFlutterTemplate__home.home;
  var main = Object.create(dart.library);
  const CT = Object.create(null);
  main.main = function main$() {
    return async.async(dart.dynamic, function* main() {
      yield ui.webOnlyInitializePlatform();
      home.main();
    });
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;AAOI;AACkC,MAApC,MAAM;AACI,MAAV;IACF","file":"main.unsound.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
}));

//# sourceMappingURL=main.unsound.ddc.js.map
