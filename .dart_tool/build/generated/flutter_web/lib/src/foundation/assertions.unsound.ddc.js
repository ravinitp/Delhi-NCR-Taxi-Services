define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/io', 'packages/typed_data/src/typed_buffer'], (function load__packages__flutter_web__src__foundation__assertions(dart_sdk, packages__flutter_web_ui__ui, packages__flutter_web__io, packages__typed_data__src__typed_buffer) {
  'use strict';
  const core = dart_sdk.core;
  const developer = dart_sdk.developer;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui = packages__flutter_web_ui__ui.ui;
  const io = packages__flutter_web__io.io;
  const typed_buffer = packages__typed_data__src__typed_buffer.src__typed_buffer;
  var bitfield = Object.create(dart.library);
  var binding = Object.create(dart.library);
  var print = Object.create(dart.library);
  var platform = Object.create(dart.library);
  var debug = Object.create(dart.library);
  var assertions = Object.create(dart.library);
  var diagnostics$ = Object.create(dart.library);
  var constants = Object.create(dart.library);
  var basic_types = Object.create(dart.library);
  var synchronous_future = Object.create(dart.library);
  var unicode = Object.create(dart.library);
  var key = Object.create(dart.library);
  var profile = Object.create(dart.library);
  var collections = Object.create(dart.library);
  var licenses = Object.create(dart.library);
  var observer_list = Object.create(dart.library);
  var change_notifier = Object.create(dart.library);
  var isolates = Object.create(dart.library);
  var node = Object.create(dart.library);
  var serialization = Object.create(dart.library);
  var $leftShift = dartx['<<'];
  var $containsKey = dartx.containsKey;
  var $_get = dartx._get;
  var $substring = dartx.substring;
  var $toString = dartx.toString;
  var $_set = dartx._set;
  var $split = dartx.split;
  var $expand = dartx.expand;
  var $join = dartx.join;
  var $isNotEmpty = dartx.isNotEmpty;
  var $trimLeft = dartx.trimLeft;
  var $matchAsPrefix = dartx.matchAsPrefix;
  var $times = dartx['*'];
  var $toStringAsPrecision = dartx.toStringAsPrecision;
  var $toStringAsFixed = dartx.toStringAsFixed;
  var $isEmpty = dartx.isEmpty;
  var $runtimeType = dartx.runtimeType;
  var $endsWith = dartx.endsWith;
  var $entries = dartx.entries;
  var $length = dartx.length;
  var $add = dartx.add;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $last = dartx.last;
  var $contains = dartx.contains;
  var $lastIndexOf = dartx.lastIndexOf;
  var $indexOf = dartx.indexOf;
  var $trimRight = dartx.trimRight;
  var $firstWhere = dartx.firstWhere;
  var $startsWith = dartx.startsWith;
  var $take = dartx.take;
  var $forEach = dartx.forEach;
  var $first = dartx.first;
  var $where = dartx.where;
  var $skip = dartx.skip;
  var $single = dartx.single;
  var $sort = dartx.sort;
  var $clear = dartx.clear;
  var $toUpperCase = dartx.toUpperCase;
  var $replaceAll = dartx.replaceAll;
  var $clamp = dartx.clamp;
  var $_equals = dartx._equals;
  var $hashCode = dartx.hashCode;
  var $toUnsigned = dartx.toUnsigned;
  var $toRadixString = dartx.toRadixString;
  var $padLeft = dartx.padLeft;
  var $iterator = dartx.iterator;
  var $takeWhile = dartx.takeWhile;
  var $skipWhile = dartx.skipWhile;
  var $truncate = dartx.truncate;
  var $remove = dartx.remove;
  var $buffer = dartx.buffer;
  var $asUint8List = dartx.asUint8List;
  var $setUint16 = dartx.setUint16;
  var $setUint32 = dartx.setUint32;
  var $setInt32 = dartx.setInt32;
  var $setInt64 = dartx.setInt64;
  var $setFloat64 = dartx.setFloat64;
  var $offsetInBytes = dartx.offsetInBytes;
  var $modulo = dartx['%'];
  var $asByteData = dartx.asByteData;
  var $lengthInBytes = dartx.lengthInBytes;
  var $getUint8 = dartx.getUint8;
  var $getUint16 = dartx.getUint16;
  var $getUint32 = dartx.getUint32;
  var $getInt32 = dartx.getInt32;
  var $getInt64 = dartx.getInt64;
  var $getFloat64 = dartx.getFloat64;
  var $asInt32List = dartx.asInt32List;
  var $asInt64List = dartx.asInt64List;
  var $asFloat64List = dartx.asFloat64List;
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$StringL = () => (IdentityMapOfStringL$StringL = dart.constFn(_js_helper.IdentityMap$(StringL(), StringL())))();
  var VoidToboolL = () => (VoidToboolL = dart.constFn(dart.fnType(boolL(), [])))();
  var FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  var FutureLOfvoid = () => (FutureLOfvoid = dart.constFn(dart.legacy(FutureOfvoid())))();
  var VoidToFutureLOfvoid = () => (VoidToFutureLOfvoid = dart.constFn(dart.fnType(FutureLOfvoid(), [])))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  var MapOfStringL$dynamic = () => (MapOfStringL$dynamic = dart.constFn(core.Map$(StringL(), dart.dynamic)))();
  var MapLOfStringL$dynamic = () => (MapLOfStringL$dynamic = dart.constFn(dart.legacy(MapOfStringL$dynamic())))();
  var FutureOfMapLOfStringL$dynamic = () => (FutureOfMapLOfStringL$dynamic = dart.constFn(async.Future$(MapLOfStringL$dynamic())))();
  var FutureLOfMapLOfStringL$dynamic = () => (FutureLOfMapLOfStringL$dynamic = dart.constFn(dart.legacy(FutureOfMapLOfStringL$dynamic())))();
  var MapOfStringL$StringL = () => (MapOfStringL$StringL = dart.constFn(core.Map$(StringL(), StringL())))();
  var MapLOfStringL$StringL = () => (MapLOfStringL$StringL = dart.constFn(dart.legacy(MapOfStringL$StringL())))();
  var MapLOfStringL$StringLToFutureLOfMapLOfStringL$dynamic = () => (MapLOfStringL$StringLToFutureLOfMapLOfStringL$dynamic = dart.constFn(dart.fnType(FutureLOfMapLOfStringL$dynamic(), [MapLOfStringL$StringL()])))();
  var TargetPlatformL = () => (TargetPlatformL = dart.constFn(dart.legacy(platform.TargetPlatform)))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var ServiceExtensionResponseL = () => (ServiceExtensionResponseL = dart.constFn(dart.legacy(developer.ServiceExtensionResponse)))();
  var FutureOfServiceExtensionResponseL = () => (FutureOfServiceExtensionResponseL = dart.constFn(async.Future$(ServiceExtensionResponseL())))();
  var FutureLOfServiceExtensionResponseL = () => (FutureLOfServiceExtensionResponseL = dart.constFn(dart.legacy(FutureOfServiceExtensionResponseL())))();
  var StringLAndMapLOfStringL$StringLToFutureLOfServiceExtensionResponseL = () => (StringLAndMapLOfStringL$StringLToFutureLOfServiceExtensionResponseL = dart.constFn(dart.fnType(FutureLOfServiceExtensionResponseL(), [StringL(), MapLOfStringL$StringL()])))();
  var _WordWrapParseModeL = () => (_WordWrapParseModeL = dart.constFn(dart.legacy(print._WordWrapParseMode)))();
  var IterableOfStringL = () => (IterableOfStringL = dart.constFn(core.Iterable$(StringL())))();
  var IterableLOfStringL = () => (IterableLOfStringL = dart.constFn(dart.legacy(IterableOfStringL())))();
  var StringLToIterableLOfStringL = () => (StringLToIterableLOfStringL = dart.constFn(dart.fnType(IterableLOfStringL(), [StringL()])))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  var SyncIterableOfStringL = () => (SyncIterableOfStringL = dart.constFn(_js_helper.SyncIterable$(StringL())))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var StringL__Tovoid = () => (StringL__Tovoid = dart.constFn(dart.fnType(dart.void, [StringL()], {wrapWidth: intL()}, {})))();
  var ListQueueOfStringL = () => (ListQueueOfStringL = dart.constFn(collection.ListQueue$(StringL())))();
  var ObjectL = () => (ObjectL = dart.constFn(dart.legacy(core.Object)))();
  var JSArrayOfObjectL = () => (JSArrayOfObjectL = dart.constFn(_interceptors.JSArray$(ObjectL())))();
  var DiagnosticableL = () => (DiagnosticableL = dart.constFn(dart.legacy(diagnostics$.Diagnosticable)))();
  var DiagnosticsNodeL = () => (DiagnosticsNodeL = dart.constFn(dart.legacy(diagnostics$.DiagnosticsNode)))();
  var numL = () => (numL = dart.constFn(dart.legacy(core.num)))();
  var DiagnosticableTreeL = () => (DiagnosticableTreeL = dart.constFn(dart.legacy(diagnostics$.DiagnosticableTree)))();
  var DiagnosticsPropertyOfvoid = () => (DiagnosticsPropertyOfvoid = dart.constFn(diagnostics$.DiagnosticsProperty$(dart.void)))();
  var IdentityMapOfStringL$ObjectL = () => (IdentityMapOfStringL$ObjectL = dart.constFn(_js_helper.IdentityMap$(StringL(), ObjectL())))();
  var MapOfStringL$ObjectL = () => (MapOfStringL$ObjectL = dart.constFn(core.Map$(StringL(), ObjectL())))();
  var MapLOfStringL$ObjectL = () => (MapLOfStringL$ObjectL = dart.constFn(dart.legacy(MapOfStringL$ObjectL())))();
  var DiagnosticsNodeLToMapLOfStringL$ObjectL = () => (DiagnosticsNodeLToMapLOfStringL$ObjectL = dart.constFn(dart.fnType(MapLOfStringL$ObjectL(), [DiagnosticsNodeL()])))();
  var AssertionErrorL = () => (AssertionErrorL = dart.constFn(dart.legacy(core.AssertionError)))();
  var ErrorL = () => (ErrorL = dart.constFn(dart.legacy(core.Error)))();
  var ExceptionL = () => (ExceptionL = dart.constFn(dart.legacy(core.Exception)))();
  var FlutterErrorL = () => (FlutterErrorL = dart.constFn(dart.legacy(assertions.FlutterError)))();
  var VoidToStringL = () => (VoidToStringL = dart.constFn(dart.fnType(StringL(), [])))();
  var DiagnosticsNodeLToboolL = () => (DiagnosticsNodeLToboolL = dart.constFn(dart.fnType(boolL(), [DiagnosticsNodeL()])))();
  var NullThrownErrorL = () => (NullThrownErrorL = dart.constFn(dart.legacy(core.NullThrownError)))();
  var DiagnosticableNodeOfDiagnosticableL = () => (DiagnosticableNodeOfDiagnosticableL = dart.constFn(diagnostics$.DiagnosticableNode$(DiagnosticableL())))();
  var IterableOfDiagnosticsNodeL = () => (IterableOfDiagnosticsNodeL = dart.constFn(core.Iterable$(DiagnosticsNodeL())))();
  var IterableLOfDiagnosticsNodeL = () => (IterableLOfDiagnosticsNodeL = dart.constFn(dart.legacy(IterableOfDiagnosticsNodeL())))();
  var IterableLOfDiagnosticsNodeLToIterableLOfDiagnosticsNodeL = () => (IterableLOfDiagnosticsNodeLToIterableLOfDiagnosticsNodeL = dart.constFn(dart.fnType(IterableLOfDiagnosticsNodeL(), [IterableLOfDiagnosticsNodeL()])))();
  var IterableLOfDiagnosticsNodeLToLIterableLOfDiagnosticsNodeL = () => (IterableLOfDiagnosticsNodeLToLIterableLOfDiagnosticsNodeL = dart.constFn(dart.legacy(IterableLOfDiagnosticsNodeLToIterableLOfDiagnosticsNodeL())))();
  var JSArrayOfIterableLOfDiagnosticsNodeLToLIterableLOfDiagnosticsNodeL = () => (JSArrayOfIterableLOfDiagnosticsNodeLToLIterableLOfDiagnosticsNodeL = dart.constFn(_interceptors.JSArray$(IterableLOfDiagnosticsNodeLToLIterableLOfDiagnosticsNodeL())))();
  var JSArrayOfDiagnosticsNodeL = () => (JSArrayOfDiagnosticsNodeL = dart.constFn(_interceptors.JSArray$(DiagnosticsNodeL())))();
  var DiagnosticsPropertyOfFlutterErrorL = () => (DiagnosticsPropertyOfFlutterErrorL = dart.constFn(diagnostics$.DiagnosticsProperty$(FlutterErrorL())))();
  var DiagnosticsPropertyOfDiagnosticsNodeL = () => (DiagnosticsPropertyOfDiagnosticsNodeL = dart.constFn(diagnostics$.DiagnosticsProperty$(DiagnosticsNodeL())))();
  var ErrorDescriptionL = () => (ErrorDescriptionL = dart.constFn(dart.legacy(assertions.ErrorDescription)))();
  var StringLToErrorDescriptionL = () => (StringLToErrorDescriptionL = dart.constFn(dart.fnType(ErrorDescriptionL(), [StringL()])))();
  var LinkedHashSetOfStringL = () => (LinkedHashSetOfStringL = dart.constFn(collection.LinkedHashSet$(StringL())))();
  var DiagnosticsNodeLToStringL = () => (DiagnosticsNodeLToStringL = dart.constFn(dart.fnType(StringL(), [DiagnosticsNodeL()])))();
  var FlutterErrorDetailsL = () => (FlutterErrorDetailsL = dart.constFn(dart.legacy(assertions.FlutterErrorDetails)))();
  var FlutterErrorDetailsL__Tovoid = () => (FlutterErrorDetailsL__Tovoid = dart.constFn(dart.fnType(dart.void, [FlutterErrorDetailsL()], {forceReport: boolL()}, {})))();
  var IterableLOfStringLToIterableLOfStringL = () => (IterableLOfStringLToIterableLOfStringL = dart.constFn(dart.fnType(IterableLOfStringL(), [IterableLOfStringL()])))();
  var StringLToDiagnosticsNodeL = () => (StringLToDiagnosticsNodeL = dart.constFn(dart.fnType(DiagnosticsNodeL(), [StringL()])))();
  var DiagnosticLevelL = () => (DiagnosticLevelL = dart.constFn(dart.legacy(diagnostics$.DiagnosticLevel)))();
  var DiagnosticsTreeStyleL = () => (DiagnosticsTreeStyleL = dart.constFn(dart.legacy(diagnostics$.DiagnosticsTreeStyle)))();
  var _WordWrapParseModeL$ = () => (_WordWrapParseModeL$ = dart.constFn(dart.legacy(diagnostics$._WordWrapParseMode)))();
  var JSArrayOfintL = () => (JSArrayOfintL = dart.constFn(_interceptors.JSArray$(intL())))();
  var intLToboolL = () => (intLToboolL = dart.constFn(dart.fnType(boolL(), [intL()])))();
  var DiagnosticsNodeLTovoid = () => (DiagnosticsNodeLTovoid = dart.constFn(dart.fnType(dart.void, [DiagnosticsNodeL()])))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  var VoidToLdynamic = () => (VoidToLdynamic = dart.constFn(dart.legacy(VoidTodynamic())))();
  var FutureL = () => (FutureL = dart.constFn(dart.legacy(async.Future)))();
  var _LicenseEntryWithLineBreaksParserStateL = () => (_LicenseEntryWithLineBreaksParserStateL = dart.constFn(dart.legacy(licenses._LicenseEntryWithLineBreaksParserState)))();
  var LicenseParagraphL = () => (LicenseParagraphL = dart.constFn(dart.legacy(licenses.LicenseParagraph)))();
  var VoidToLicenseParagraphL = () => (VoidToLicenseParagraphL = dart.constFn(dart.fnType(LicenseParagraphL(), [])))();
  var SyncIterableOfLicenseParagraphL = () => (SyncIterableOfLicenseParagraphL = dart.constFn(_js_helper.SyncIterable$(LicenseParagraphL())))();
  var LicenseEntryL = () => (LicenseEntryL = dart.constFn(dart.legacy(licenses.LicenseEntry)))();
  var StreamOfLicenseEntryL = () => (StreamOfLicenseEntryL = dart.constFn(async.Stream$(LicenseEntryL())))();
  var StreamLOfLicenseEntryL = () => (StreamLOfLicenseEntryL = dart.constFn(dart.legacy(StreamOfLicenseEntryL())))();
  var VoidToStreamLOfLicenseEntryL = () => (VoidToStreamLOfLicenseEntryL = dart.constFn(dart.fnType(StreamLOfLicenseEntryL(), [])))();
  var VoidToLStreamLOfLicenseEntryL = () => (VoidToLStreamLOfLicenseEntryL = dart.constFn(dart.legacy(VoidToStreamLOfLicenseEntryL())))();
  var JSArrayOfVoidToLStreamLOfLicenseEntryL = () => (JSArrayOfVoidToLStreamLOfLicenseEntryL = dart.constFn(_interceptors.JSArray$(VoidToLStreamLOfLicenseEntryL())))();
  var _AsyncStarImplOfLicenseEntryL = () => (_AsyncStarImplOfLicenseEntryL = dart.constFn(async._AsyncStarImpl$(LicenseEntryL())))();
  var VoidToLvoid = () => (VoidToLvoid = dart.constFn(dart.legacy(VoidTovoid())))();
  var ObserverListOfVoidToLvoid = () => (ObserverListOfVoidToLvoid = dart.constFn(observer_list.ObserverList$(VoidToLvoid())))();
  var ListOfVoidToLvoid = () => (ListOfVoidToLvoid = dart.constFn(core.List$(VoidToLvoid())))();
  var ChangeNotifierL = () => (ChangeNotifierL = dart.constFn(dart.legacy(change_notifier.ChangeNotifier)))();
  var DiagnosticsPropertyOfChangeNotifierL = () => (DiagnosticsPropertyOfChangeNotifierL = dart.constFn(diagnostics$.DiagnosticsProperty$(ChangeNotifierL())))();
  var SyncIterableOfDiagnosticsNodeL = () => (SyncIterableOfDiagnosticsNodeL = dart.constFn(_js_helper.SyncIterable$(DiagnosticsNodeL())))();
  var VoidToIterableLOfDiagnosticsNodeL = () => (VoidToIterableLOfDiagnosticsNodeL = dart.constFn(dart.fnType(IterableLOfDiagnosticsNodeL(), [])))();
  var AbstractNodeL = () => (AbstractNodeL = dart.constFn(dart.legacy(node.AbstractNode)))();
  const CT = Object.create(null);
  var L3 = "package:flutter_web/src/foundation/binding.dart";
  var L14 = "package:flutter_web/src/foundation/synchronous_future.dart";
  var L18 = "org-dartlang-app:///packages/flutter_web/src/foundation/licenses.dart";
  var L1 = "package:flutter_web/src/foundation/bitfield.dart";
  var L25 = "org-dartlang-app:///packages/flutter_web/src/foundation/serialization.dart";
  var L16 = "package:flutter_web/src/foundation/key.dart";
  var L19 = "package:flutter_web/src/foundation/observer_list.dart";
  var L4 = "package:flutter_web/src/foundation/print.dart";
  var L11 = "package:flutter_web/src/foundation/assertions.dart";
  var L22 = "org-dartlang-app:///packages/flutter_web/src/foundation/node.dart";
  var L17 = "package:flutter_web/src/foundation/licenses.dart";
  var L9 = "org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart";
  var L24 = "package:flutter_web/src/foundation/serialization.dart";
  var L2 = "org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart";
  var L7 = "org-dartlang-app:///packages/flutter_web/src/foundation/debug.dart";
  var L5 = "org-dartlang-app:///packages/flutter_web/src/foundation/print.dart";
  var L0 = "org-dartlang-app:///packages/flutter_web/src/foundation/bitfield.dart";
  var L6 = "package:flutter_web/src/foundation/platform.dart";
  var L8 = "org-dartlang-app:///packages/flutter_web/src/foundation/assertions.dart";
  var L20 = "package:flutter_web/src/foundation/change_notifier.dart";
  var L23 = "package:flutter_web/src/foundation/node.dart";
  var L21 = "org-dartlang-app:///packages/flutter_web/src/foundation/change_notifier.dart";
  var L12 = "package:flutter_web/src/foundation/basic_types.dart";
  var L13 = "org-dartlang-app:///packages/flutter_web/src/foundation/basic_types.dart";
  var L10 = "package:flutter_web/src/foundation/diagnostics.dart";
  var L15 = "package:flutter_web/src/foundation/unicode.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(binding._exitApplication, VoidToFutureLOfvoid());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: print._WordWrapParseMode.prototype,
        [_name$]: "_WordWrapParseMode.inSpace",
        index: 0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: print._WordWrapParseMode.prototype,
        [_name$]: "_WordWrapParseMode.inWord",
        index: 1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: print._WordWrapParseMode.prototype,
        [_name$]: "_WordWrapParseMode.atBreak",
        index: 2
      });
    },
    get C4() {
      return C4 = dart.constList([C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], _WordWrapParseModeL());
    },
    get C5() {
      return C5 = dart.fn(print._debugPrintTask, VoidTovoid());
    },
    get C6() {
      return C6 = dart.fn(print.debugPrintThrottled, StringL__Tovoid());
    },
    get C7() {
      return C7 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 1000000
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$0]: "TargetPlatform.android",
        index: 0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$0]: "TargetPlatform.fuchsia",
        index: 1
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$0]: "TargetPlatform.iOS",
        index: 2
      });
    },
    get C11() {
      return C11 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], TargetPlatformL());
    },
    get C12() {
      return C12 = dart.constMap(StringL(), StringL(), ["mode", "basic"]);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$1]: "DiagnosticsTreeStyle.flat",
        index: 7
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$1]: "DiagnosticLevel.info",
        index: 3
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: diagnostics$._NoDefaultValue.prototype
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$1]: "DiagnosticsTreeStyle.singleLine",
        index: 8
      });
    },
    get C17() {
      return C17 = dart.constList([], DiagnosticsNodeL());
    },
    get C18() {
      return C18 = dart.constList([], MapLOfStringL$ObjectL());
    },
    get C19() {
      return C19 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$1]: "DiagnosticsTreeStyle.none",
        index: 0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$1]: "DiagnosticsTreeStyle.dense",
        index: 3
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$1]: "DiagnosticsTreeStyle.sparse",
        index: 1
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$1]: "DiagnosticsTreeStyle.offstage",
        index: 2
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$1]: "DiagnosticsTreeStyle.whitespace",
        index: 6
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$1]: "DiagnosticsTreeStyle.transition",
        index: 4
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$1]: "DiagnosticsTreeStyle.errorProperty",
        index: 9
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$1]: "DiagnosticsTreeStyle.shallow",
        index: 10
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$1]: "DiagnosticsTreeStyle.error",
        index: 5
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: diagnostics$.DiagnosticsTreeStyle.prototype,
        [_name$1]: "DiagnosticsTreeStyle.truncateChildren",
        index: 11
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$1]: "DiagnosticLevel.debug",
        index: 2
      });
    },
    get C30() {
      return C30 = dart.constList(["dart:async-patch", "dart:async", "package:stack_trace"], StringL());
    },
    get C31() {
      return C31 = dart.constList(["_AssertionError", "_FakeAsync", "_FrameCallbackEntry"], StringL());
    },
    get C32() {
      return C32 = dart.fn(assertions.FlutterError.dumpErrorToConsole, FlutterErrorDetailsL__Tovoid());
    },
    get C33() {
      return C33 = dart.fn(assertions.FlutterError.defaultStackFilter, IterableLOfStringLToIterableLOfStringL());
    },
    get C34() {
      return C34 = dart.fn(assertions.DiagnosticsStackTrace._createStackFrame, StringLToDiagnosticsNodeL());
    },
    get C35() {
      return C35 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$1]: "DiagnosticLevel.hidden",
        index: 0
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$1]: "DiagnosticLevel.fine",
        index: 1
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$1]: "DiagnosticLevel.warning",
        index: 4
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$1]: "DiagnosticLevel.hint",
        index: 5
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$1]: "DiagnosticLevel.summary",
        index: 6
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$1]: "DiagnosticLevel.error",
        index: 7
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: diagnostics$.DiagnosticLevel.prototype,
        [_name$1]: "DiagnosticLevel.off",
        index: 8
      });
    },
    get C42() {
      return C42 = dart.constList([C35 || CT.C35, C36 || CT.C36, C29 || CT.C29, C14 || CT.C14, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40, C41 || CT.C41], DiagnosticLevelL());
    },
    get C43() {
      return C43 = dart.constList([C19 || CT.C19, C21 || CT.C21, C22 || CT.C22, C20 || CT.C20, C24 || CT.C24, C27 || CT.C27, C23 || CT.C23, C13 || CT.C13, C16 || CT.C16, C25 || CT.C25, C26 || CT.C26, C28 || CT.C28], DiagnosticsTreeStyleL());
    },
    get C44() {
      return C44 = dart.const({
        __proto__: diagnostics$._WordWrapParseMode.prototype,
        [_name$1]: "_WordWrapParseMode.inSpace",
        index: 0
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: diagnostics$._WordWrapParseMode.prototype,
        [_name$1]: "_WordWrapParseMode.inWord",
        index: 1
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: diagnostics$._WordWrapParseMode.prototype,
        [_name$1]: "_WordWrapParseMode.atBreak",
        index: 2
      });
    },
    get C47() {
      return C47 = dart.constList([C44 || CT.C44, C45 || CT.C45, C46 || CT.C46], _WordWrapParseModeL$());
    },
    get C48() {
      return C48 = dart.constMap(StringL(), ObjectL(), []);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: licenses._LicenseEntryWithLineBreaksParserState.prototype,
        [_name$2]: "_LicenseEntryWithLineBreaksParserState.beforeParagraph",
        index: 0
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: licenses._LicenseEntryWithLineBreaksParserState.prototype,
        [_name$2]: "_LicenseEntryWithLineBreaksParserState.inParagraph",
        index: 1
      });
    },
    get C51() {
      return C51 = dart.constList([C49 || CT.C49, C50 || CT.C50], _LicenseEntryWithLineBreaksParserStateL());
    }
  }, false);
  var _length$ = dart.privateName(bitfield, "_length");
  var _bits = dart.privateName(bitfield, "_bits");
  const _is_BitField_default = Symbol('_is_BitField_default');
  bitfield.BitField$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class BitField extends core.Object {
      _get(index) {
        TL().as(index);
        if (!dart.test(boolL().as(dart.dsend(dart.dload(index, 'index'), '<', [this[_length$]])))) dart.assertFailed(null, L0, 50, 12, "index.index < _length");
        return (dart.notNull(this[_bits]) & (1)[$leftShift](core.int.as(dart.dload(index, 'index')))) >>> 0 > 0;
      }
      _set(index, value$) {
        let value = value$;
        TL().as(index);
        if (!dart.test(boolL().as(dart.dsend(dart.dload(index, 'index'), '<', [this[_length$]])))) dart.assertFailed(null, L0, 59, 12, "index.index < _length");
        if (dart.test(value))
          this[_bits] = (dart.notNull(this[_bits]) | (1)[$leftShift](core.int.as(dart.dload(index, 'index')))) >>> 0;
        else
          this[_bits] = (dart.notNull(this[_bits]) & ~(1)[$leftShift](core.int.as(dart.dload(index, 'index'))) >>> 0) >>> 0;
        return value$;
      }
      reset(value = false) {
        this[_bits] = dart.test(value) ? -1 : 0;
      }
    }
    (BitField.new = function(_length) {
      this[_length$] = _length;
      if (!(dart.notNull(_length) <= 62)) dart.assertFailed(null, L0, 28, 16, "_length <= _smiBits");
      this[_bits] = 0;
      ;
    }).prototype = BitField.prototype;
    (BitField.filled = function(_length, value) {
      this[_length$] = _length;
      if (!(dart.notNull(_length) <= 62)) dart.assertFailed(null, L0, 38, 16, "_length <= _smiBits");
      this[_bits] = dart.test(value) ? -1 : 0;
      ;
    }).prototype = BitField.prototype;
    dart.addTypeTests(BitField);
    BitField.prototype[_is_BitField_default] = true;
    dart.addTypeCaches(BitField);
    dart.setMethodSignature(BitField, () => ({
      __proto__: dart.getMethods(BitField.__proto__),
      _get: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      _set: dart.fnType(dart.void, [dart.legacy(core.Object), dart.legacy(core.bool)]),
      reset: dart.fnType(dart.void, [], [dart.legacy(core.bool)])
    }));
    dart.setLibraryUri(BitField, L1);
    dart.setFieldSignature(BitField, () => ({
      __proto__: dart.getFields(BitField.__proto__),
      [_length$]: dart.finalFieldType(dart.legacy(core.int)),
      [_bits]: dart.fieldType(dart.legacy(core.int))
    }));
    return BitField;
  });
  bitfield.BitField = bitfield.BitField$();
  dart.defineLazy(bitfield.BitField, {
    /*bitfield.BitField._smiBits*/get _smiBits() {
      return 62;
    },
    /*bitfield.BitField._allZeros*/get _allZeros() {
      return 0;
    },
    /*bitfield.BitField._allOnes*/get _allOnes() {
      return -1;
    }
  }, true);
  dart.addTypeTests(bitfield.BitField, _is_BitField_default);
  dart.defineLazy(bitfield, {
    /*bitfield.kMaxUnsignedSMI*/get kMaxUnsignedSMI() {
      return -1;
    }
  }, true);
  var _lockCount = dart.privateName(binding, "_lockCount");
  var C0;
  var _postExtensionStateChangedEvent = dart.privateName(binding, "_postExtensionStateChangedEvent");
  binding.BindingBase = class BindingBase extends core.Object {
    get window() {
      return ui.window;
    }
    initInstances() {
      if (!!dart.test(binding.BindingBase._debugInitialized)) dart.assertFailed(null, L2, 101, 12, "!_debugInitialized");
      if (!dart.test(dart.fn(() => {
        binding.BindingBase._debugInitialized = true;
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L2, 102, 12, "() { _debugInitialized = true; return true; }()");
    }
    initServiceExtensions() {
      if (!!dart.test(binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed(null, L2, 126, 12, "!_debugServiceExtensionsRegistered");
      if (!dart.test(dart.fn(() => {
        this.registerSignalServiceExtension({name: "reassemble", callback: dart.bind(this, 'reassembleApplication')});
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L2, 128, 12, "() {\n      registerSignalServiceExtension(\n        name: 'reassemble',\n        callback: reassembleApplication,\n      );\n      return true;\n    }()");
      if (!false && !true) {
        this.registerSignalServiceExtension({name: "exit", callback: C0 || CT.C0});
        this.registerServiceExtension({name: "saveCompilationTrace", callback: dart.fn(parameters => async.async(MapLOfStringL$dynamic(), function*() {
            return new (IdentityMapOfStringL$dynamic()).from(["value", ui.saveCompilationTrace()]);
          }), MapLOfStringL$StringLToFutureLOfMapLOfStringL$dynamic())});
      }
      if (!dart.test(dart.fn(() => {
        if (true) return true;
        this.registerServiceExtension({name: "platformOverride", callback: dart.fn(parameters => async.async(MapLOfStringL$dynamic(), (function*() {
            if (dart.test(parameters[$containsKey]("value"))) {
              switch (parameters[$_get]("value")) {
                case "android":
                {
                  platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.android;
                  break;
                }
                case "iOS":
                {
                  platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.iOS;
                  break;
                }
                case "fuchsia":
                {
                  platform.debugDefaultTargetPlatformOverride = platform.TargetPlatform.fuchsia;
                  break;
                }
                case "default":
                default:
                {
                  platform.debugDefaultTargetPlatformOverride = null;
                }
              }
              this[_postExtensionStateChangedEvent]("platformOverride", dart.toString(platform.defaultTargetPlatform)[$substring]((dart.str(dart.wrapType(TargetPlatformL())) + ".").length));
              yield this.reassembleApplication();
            }
            return new (IdentityMapOfStringL$dynamic()).from(["value", dart.toString(platform.defaultTargetPlatform)[$substring]((dart.str(dart.wrapType(TargetPlatformL())) + ".").length)]);
          }).bind(this)), MapLOfStringL$StringLToFutureLOfMapLOfStringL$dynamic())});
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L2, 151, 12, "() {\n      // TODO(flutter_web): reenable after cupertino widgets supported on web.\n      if (ui.isWeb) return true;\n      const String platformOverrideExtensionName = 'platformOverride';\n      registerServiceExtension(\n        name: platformOverrideExtensionName,\n        callback: (Map<String, String> parameters) async {\n          if (parameters.containsKey('value')) {\n            switch (parameters['value']) {\n              case 'android':\n                debugDefaultTargetPlatformOverride = TargetPlatform.android;\n                break;\n              case 'iOS':\n                debugDefaultTargetPlatformOverride = TargetPlatform.iOS;\n                break;\n              case 'fuchsia':\n                debugDefaultTargetPlatformOverride = TargetPlatform.fuchsia;\n                break;\n              case 'default':\n              default:\n                debugDefaultTargetPlatformOverride = null;\n            }\n            _postExtensionStateChangedEvent(\n              platformOverrideExtensionName,\n              defaultTargetPlatform.toString().substring('$TargetPlatform.'.length),\n            );\n            await reassembleApplication();\n          }\n          return <String, dynamic>{\n            'value': defaultTargetPlatform\n                     .toString()\n                     .substring('$TargetPlatform.'.length),\n          };\n        },\n      );\n      return true;\n    }()");
      if (!dart.test(dart.fn(() => {
        binding.BindingBase._debugServiceExtensionsRegistered = true;
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L2, 188, 12, "() { _debugServiceExtensionsRegistered = true; return true; }()");
    }
    get locked() {
      return dart.notNull(this[_lockCount]) > 0;
    }
    lockEvents(callback) {
      developer.Timeline.startSync("Lock events");
      if (!(callback != null)) dart.assertFailed(null, L2, 214, 12, "callback != null");
      this[_lockCount] = dart.notNull(this[_lockCount]) + 1;
      let future = callback();
      if (!(future != null)) dart.assertFailed("The lockEvents() callback returned null; it should return a Future<void> that completes when the lock is to expire.", L2, 217, 12, "future != null");
      future.whenComplete(dart.fn(() => {
        this[_lockCount] = dart.notNull(this[_lockCount]) - 1;
        if (!dart.test(this.locked)) {
          developer.Timeline.finishSync();
          this.unlocked();
        }
      }, VoidToNullN()));
      return future;
    }
    unlocked() {
      if (!!dart.test(this.locked)) dart.assertFailed(null, L2, 234, 12, "!locked");
    }
    reassembleApplication() {
      return this.lockEvents(dart.bind(this, 'performReassemble'));
    }
    performReassemble() {
      assertions.FlutterError.resetErrorCount();
      return FutureOfvoid().value();
    }
    registerSignalServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (!(name != null)) dart.assertFailed(null, L2, 288, 12, "name != null");
      if (!(callback != null)) dart.assertFailed(null, L2, 289, 12, "callback != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapLOfStringL$dynamic(), function*() {
          yield callback();
          return new (IdentityMapOfStringL$dynamic()).new();
        }), MapLOfStringL$StringLToFutureLOfMapLOfStringL$dynamic())});
    }
    registerBoolServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name != null)) dart.assertFailed(null, L2, 319, 12, "name != null");
      if (!(getter != null)) dart.assertFailed(null, L2, 320, 12, "getter != null");
      if (!(setter != null)) dart.assertFailed(null, L2, 321, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapLOfStringL$dynamic(), (function*() {
          if (dart.test(parameters[$containsKey]("enabled"))) {
            yield setter(parameters[$_get]("enabled") === "true");
            this[_postExtensionStateChangedEvent](name, dart.test(yield getter()) ? "true" : "false");
          }
          return new (IdentityMapOfStringL$dynamic()).from(["enabled", dart.test(yield getter()) ? "true" : "false"]);
        }).bind(this)), MapLOfStringL$StringLToFutureLOfMapLOfStringL$dynamic())});
    }
    registerNumericServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name != null)) dart.assertFailed(null, L2, 353, 12, "name != null");
      if (!(getter != null)) dart.assertFailed(null, L2, 354, 12, "getter != null");
      if (!(setter != null)) dart.assertFailed(null, L2, 355, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapLOfStringL$dynamic(), (function*() {
          if (dart.test(parameters[$containsKey](name))) {
            yield setter(core.double.parse(parameters[$_get](name)));
            this[_postExtensionStateChangedEvent](name, dart.toString(yield getter()));
          }
          return new (IdentityMapOfStringL$dynamic()).from([name, dart.toString(yield getter())]);
        }).bind(this)), MapLOfStringL$StringLToFutureLOfMapLOfStringL$dynamic())});
    }
    [_postExtensionStateChangedEvent](name, value) {
      this.postEvent("Flutter.ServiceExtensionStateChanged", new (IdentityMapOfStringL$dynamic()).from(["extension", "ext.flutter." + dart.str(name), "value", value]));
    }
    postEvent(eventKind, eventData) {
      developer.postEvent(eventKind, eventData);
    }
    registerStringServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name != null)) dart.assertFailed(null, L2, 415, 12, "name != null");
      if (!(getter != null)) dart.assertFailed(null, L2, 416, 12, "getter != null");
      if (!(setter != null)) dart.assertFailed(null, L2, 417, 12, "setter != null");
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapLOfStringL$dynamic(), (function*() {
          if (dart.test(parameters[$containsKey]("value"))) {
            yield setter(parameters[$_get]("value"));
            this[_postExtensionStateChangedEvent](name, yield getter());
          }
          return new (IdentityMapOfStringL$dynamic()).from(["value", (yield getter())]);
        }).bind(this)), MapLOfStringL$StringLToFutureLOfMapLOfStringL$dynamic())});
    }
    registerServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (!(name != null)) dart.assertFailed(null, L2, 486, 12, "name != null");
      if (!(callback != null)) dart.assertFailed(null, L2, 487, 12, "callback != null");
      let methodName = "ext.flutter." + dart.str(name);
      developer.registerExtension(methodName, dart.fn((method, parameters) => async.async(ServiceExtensionResponseL(), function*() {
        if (!(method === methodName)) dart.assertFailed(null, L2, 490, 14, "method == methodName");
        if (!dart.test(dart.fn(() => {
          if (dart.test(debug.debugInstrumentationEnabled)) print.debugPrint("service extension method received: " + dart.str(method) + "(" + dart.str(parameters) + ")");
          return true;
        }, VoidToboolL())())) dart.assertFailed(null, L2, 491, 14, "() {\n        if (debugInstrumentationEnabled)\n          debugPrint('service extension method received: $method($parameters)');\n        return true;\n      }()");
        yield debug.debugInstrumentAction(dart.void, "Wait for outer event loop", dart.fn(() => FutureOfvoid().delayed(core.Duration.zero), VoidToFutureLOfvoid()));
        let caughtException = null;
        let caughtStack = null;
        let result = null;
        try {
          result = (yield callback(parameters));
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          caughtException = exception;
          caughtStack = stack;
        }
        if (caughtException == null) {
          result[$_set]("type", "_extensionType");
          result[$_set]("method", method);
          return new developer.ServiceExtensionResponse.result(convert.json.encode(result));
        } else {
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: caughtException, stack: caughtStack, context: new assertions.ErrorDescription.new("during a service extension callback for \"" + dart.str(method) + "\"")}));
          return new developer.ServiceExtensionResponse.error(-32000, convert.json.encode(new (IdentityMapOfStringL$StringL()).from(["exception", dart.toString(caughtException), "stack", dart.toString(caughtStack), "method", method])));
        }
      }), StringLAndMapLOfStringL$StringLToFutureLOfServiceExtensionResponseL()));
    }
    toString() {
      return "<" + dart.str(this.runtimeType) + ">";
    }
  };
  (binding.BindingBase.new = function() {
    this[_lockCount] = 0;
    developer.Timeline.startSync("Framework initialization");
    if (!!dart.test(binding.BindingBase._debugInitialized)) dart.assertFailed(null, L2, 56, 12, "!_debugInitialized");
    this.initInstances();
    if (!dart.test(binding.BindingBase._debugInitialized)) dart.assertFailed(null, L2, 58, 12, "_debugInitialized");
    if (!!dart.test(binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed(null, L2, 60, 12, "!_debugServiceExtensionsRegistered");
    this.initServiceExtensions();
    if (!dart.test(binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed(null, L2, 62, 12, "_debugServiceExtensionsRegistered");
    developer.postEvent("Flutter.FrameworkInitialization", new (IdentityMapOfStringL$StringL()).new());
    developer.Timeline.finishSync();
  }).prototype = binding.BindingBase.prototype;
  dart.addTypeTests(binding.BindingBase);
  dart.addTypeCaches(binding.BindingBase);
  dart.setMethodSignature(binding.BindingBase, () => ({
    __proto__: dart.getMethods(binding.BindingBase.__proto__),
    initInstances: dart.fnType(dart.void, []),
    initServiceExtensions: dart.fnType(dart.void, []),
    lockEvents: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(dart.fnType(dart.legacy(async.Future$(dart.void)), []))]),
    unlocked: dart.fnType(dart.void, []),
    reassembleApplication: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    performReassemble: dart.fnType(dart.legacy(async.Future$(dart.void)), []),
    registerSignalServiceExtension: dart.fnType(dart.void, [], {callback: dart.legacy(dart.fnType(dart.legacy(async.Future$(dart.void)), [])), name: dart.legacy(core.String)}, {}),
    registerBoolServiceExtension: dart.fnType(dart.void, [], {getter: dart.legacy(dart.fnType(dart.legacy(async.Future$(dart.legacy(core.bool))), [])), name: dart.legacy(core.String), setter: dart.legacy(dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.bool)]))}, {}),
    registerNumericServiceExtension: dart.fnType(dart.void, [], {getter: dart.legacy(dart.fnType(dart.legacy(async.Future$(dart.legacy(core.double))), [])), name: dart.legacy(core.String), setter: dart.legacy(dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.double)]))}, {}),
    [_postExtensionStateChangedEvent]: dart.fnType(dart.void, [dart.legacy(core.String), dart.dynamic]),
    postEvent: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic))]),
    registerStringServiceExtension: dart.fnType(dart.void, [], {getter: dart.legacy(dart.fnType(dart.legacy(async.Future$(dart.legacy(core.String))), [])), name: dart.legacy(core.String), setter: dart.legacy(dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(core.String)]))}, {}),
    registerServiceExtension: dart.fnType(dart.void, [], {callback: dart.legacy(dart.fnType(dart.legacy(async.Future$(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)))), [dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.String)))])), name: dart.legacy(core.String)}, {}),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(binding.BindingBase, () => ({
    __proto__: dart.getGetters(binding.BindingBase.__proto__),
    window: dart.legacy(ui.Window),
    locked: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(binding.BindingBase, L3);
  dart.setFieldSignature(binding.BindingBase, () => ({
    __proto__: dart.getFields(binding.BindingBase.__proto__),
    [_lockCount]: dart.fieldType(dart.legacy(core.int))
  }));
  dart.defineExtensionMethods(binding.BindingBase, ['toString']);
  dart.defineLazy(binding.BindingBase, {
    /*binding.BindingBase._debugInitialized*/get _debugInitialized() {
      return false;
    },
    set _debugInitialized(_) {},
    /*binding.BindingBase._debugServiceExtensionsRegistered*/get _debugServiceExtensionsRegistered() {
      return false;
    },
    set _debugServiceExtensionsRegistered(_) {}
  }, true);
  binding._exitApplication = function _exitApplication() {
    return async.async(dart.void, function* _exitApplication() {
      io.exit(0);
    });
  };
  var _name$ = dart.privateName(print, "_name");
  var C1;
  var C2;
  var C3;
  var C4;
  print._WordWrapParseMode = class _WordWrapParseMode extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (print._WordWrapParseMode.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = print._WordWrapParseMode.prototype;
  dart.addTypeTests(print._WordWrapParseMode);
  dart.addTypeCaches(print._WordWrapParseMode);
  dart.setMethodSignature(print._WordWrapParseMode, () => ({
    __proto__: dart.getMethods(print._WordWrapParseMode.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(print._WordWrapParseMode, L4);
  dart.setFieldSignature(print._WordWrapParseMode, () => ({
    __proto__: dart.getFields(print._WordWrapParseMode.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(print._WordWrapParseMode, ['toString']);
  print._WordWrapParseMode.inSpace = C1 || CT.C1;
  print._WordWrapParseMode.inWord = C2 || CT.C2;
  print._WordWrapParseMode.atBreak = C3 || CT.C3;
  print._WordWrapParseMode.values = C4 || CT.C4;
  var C5;
  print.debugPrintSynchronously = function debugPrintSynchronously(message, opts) {
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    if (wrapWidth != null) {
      core.print(message[$split]("\n")[$expand](StringL(), dart.fn(line => print.debugWordWrap(line, wrapWidth), StringLToIterableLOfStringL()))[$join]("\n"));
    } else {
      core.print(message);
    }
  };
  print.debugPrintThrottled = function debugPrintThrottled(message, opts) {
    let t1, t1$;
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    let messageLines = (t1$ = (t1 = message, t1 == null ? null : t1[$split]("\n")), t1$ == null ? JSArrayOfStringL().of(["null"]) : t1$);
    if (wrapWidth != null) {
      print._debugPrintBuffer.addAll(messageLines[$expand](StringL(), dart.fn(line => print.debugWordWrap(line, wrapWidth), StringLToIterableLOfStringL())));
    } else {
      print._debugPrintBuffer.addAll(messageLines);
    }
    if (!dart.test(print._debugPrintScheduled)) print._debugPrintTask();
  };
  print._debugPrintTask = function _debugPrintTask() {
    let t1;
    print._debugPrintScheduled = false;
    if (dart.test(print._debugPrintStopwatch.elapsed['>'](print._kDebugPrintPauseTime))) {
      print._debugPrintStopwatch.stop();
      print._debugPrintStopwatch.reset();
      print._debugPrintedCharacters = 0;
    }
    while (dart.notNull(print._debugPrintedCharacters) < 12288 && dart.test(print._debugPrintBuffer[$isNotEmpty])) {
      let line = print._debugPrintBuffer.removeFirst();
      print._debugPrintedCharacters = dart.notNull(print._debugPrintedCharacters) + line.length;
      core.print(line);
    }
    if (dart.test(print._debugPrintBuffer[$isNotEmpty])) {
      print._debugPrintScheduled = true;
      print._debugPrintedCharacters = 0;
      async.Timer.new(print._kDebugPrintPauseTime, C5 || CT.C5);
      print._debugPrintCompleter == null ? print._debugPrintCompleter = CompleterOfvoid().new() : null;
    } else {
      print._debugPrintStopwatch.start();
      t1 = print._debugPrintCompleter;
      t1 == null ? null : t1.complete();
      print._debugPrintCompleter = null;
    }
  };
  print.debugWordWrap = function debugWordWrap(message, width, opts) {
    let wrapIndent = opts && 'wrapIndent' in opts ? opts.wrapIndent : "";
    return new (SyncIterableOfStringL()).new(function* debugWordWrap() {
      if (message.length < dart.notNull(width) || message[$trimLeft]()[$_get](0) === "#") {
        yield message;
        return;
      }
      let prefixMatch = print._indentPattern[$matchAsPrefix](message);
      let prefix = dart.notNull(wrapIndent) + " "[$times](prefixMatch.group(0).length);
      let start = 0;
      let startForLengthCalculations = 0;
      let addPrefix = false;
      let index = prefix.length;
      let mode = print._WordWrapParseMode.inSpace;
      let lastWordStart = null;
      let lastWordEnd = null;
      while (true) {
        switch (mode) {
          case C1 || CT.C1:
          {
            while (index < message.length && message[$_get](index) === " ")
              index = index + 1;
            lastWordStart = index;
            mode = print._WordWrapParseMode.inWord;
            break;
          }
          case C2 || CT.C2:
          {
            while (index < message.length && message[$_get](index) !== " ")
              index = index + 1;
            mode = print._WordWrapParseMode.atBreak;
            break;
          }
          case C3 || CT.C3:
          {
            if (index - startForLengthCalculations > dart.notNull(width) || index === message.length) {
              if (index - startForLengthCalculations <= dart.notNull(width) || lastWordEnd == null) {
                lastWordEnd = index;
              }
              if (addPrefix) {
                yield prefix + message[$substring](start, lastWordEnd);
              } else {
                yield message[$substring](start, lastWordEnd);
                addPrefix = true;
              }
              if (dart.notNull(lastWordEnd) >= message.length) return;
              if (lastWordEnd === index) {
                while (index < message.length && message[$_get](index) === " ")
                  index = index + 1;
                start = index;
                mode = print._WordWrapParseMode.inWord;
              } else {
                if (!(dart.notNull(lastWordStart) > dart.notNull(lastWordEnd))) dart.assertFailed(null, L5, 161, 20, "lastWordStart > lastWordEnd");
                start = lastWordStart;
                mode = print._WordWrapParseMode.atBreak;
              }
              startForLengthCalculations = dart.notNull(start) - prefix.length;
              if (!addPrefix) dart.assertFailed(null, L5, 166, 18, "addPrefix");
              lastWordEnd = null;
            } else {
              lastWordEnd = index;
              mode = print._WordWrapParseMode.inSpace;
            }
            break;
          }
        }
      }
    });
  };
  dart.copyProperties(print, {
    get debugPrintDone() {
      let t1, t1$;
      t1$ = (t1 = print._debugPrintCompleter, t1 == null ? null : t1.future);
      return t1$ == null ? FutureOfvoid().value() : t1$;
    }
  });
  var C6;
  var Duration__duration = dart.privateName(core, "Duration._duration");
  var C7;
  dart.defineLazy(print, {
    /*print.debugPrint*/get debugPrint() {
      return C6 || CT.C6;
    },
    set debugPrint(_) {},
    /*print._debugPrintedCharacters*/get _debugPrintedCharacters() {
      return 0;
    },
    set _debugPrintedCharacters(_) {},
    /*print._kDebugPrintCapacity*/get _kDebugPrintCapacity() {
      return 12288;
    },
    /*print._kDebugPrintPauseTime*/get _kDebugPrintPauseTime() {
      return C7 || CT.C7;
    },
    /*print._debugPrintBuffer*/get _debugPrintBuffer() {
      return new (ListQueueOfStringL()).new();
    },
    /*print._debugPrintStopwatch*/get _debugPrintStopwatch() {
      return new core.Stopwatch.new();
    },
    /*print._debugPrintCompleter*/get _debugPrintCompleter() {
      return null;
    },
    set _debugPrintCompleter(_) {},
    /*print._debugPrintScheduled*/get _debugPrintScheduled() {
      return false;
    },
    set _debugPrintScheduled(_) {},
    /*print._indentPattern*/get _indentPattern() {
      return core.RegExp.new("^ *(?:[-+*] |[0-9]+[.):] )?");
    }
  }, true);
  var _name$0 = dart.privateName(platform, "_name");
  var C8;
  var C9;
  var C10;
  var C11;
  platform.TargetPlatform = class TargetPlatform extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (platform.TargetPlatform.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = platform.TargetPlatform.prototype;
  dart.addTypeTests(platform.TargetPlatform);
  dart.addTypeCaches(platform.TargetPlatform);
  dart.setMethodSignature(platform.TargetPlatform, () => ({
    __proto__: dart.getMethods(platform.TargetPlatform.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(platform.TargetPlatform, L6);
  dart.setFieldSignature(platform.TargetPlatform, () => ({
    __proto__: dart.getFields(platform.TargetPlatform.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$0]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(platform.TargetPlatform, ['toString']);
  platform.TargetPlatform.android = C8 || CT.C8;
  platform.TargetPlatform.fuchsia = C9 || CT.C9;
  platform.TargetPlatform.iOS = C10 || CT.C10;
  platform.TargetPlatform.values = C11 || CT.C11;
  dart.copyProperties(platform, {
    get defaultTargetPlatform() {
      if (platform.debugDefaultTargetPlatformOverride != null) return platform.debugDefaultTargetPlatformOverride;
      return platform.TargetPlatform.android;
    }
  });
  dart.defineLazy(platform, {
    /*platform.debugDefaultTargetPlatformOverride*/get debugDefaultTargetPlatformOverride() {
      return null;
    },
    set debugDefaultTargetPlatformOverride(_) {}
  }, true);
  debug.debugAssertAllFoundationVarsUnset = function debugAssertAllFoundationVarsUnset(reason, opts) {
    let debugPrintOverride = opts && 'debugPrintOverride' in opts ? opts.debugPrintOverride : C6 || CT.C6;
    if (!dart.test(dart.fn(() => {
      if (!dart.equals(print.debugPrint, debugPrintOverride) || platform.debugDefaultTargetPlatformOverride != null || debug.debugDoublePrecision != null) dart.throw(assertions.FlutterError.new(reason));
      return true;
    }, VoidToboolL())())) dart.assertFailed(null, L7, 25, 10, "() {\n    if (debugPrint != debugPrintOverride ||\n        debugDefaultTargetPlatformOverride != null ||\n        debugDoublePrecision != null)\n      throw FlutterError(reason);\n    return true;\n  }()");
    return true;
  };
  debug.debugInstrumentAction = function debugInstrumentAction(T, description, action) {
    let t1;
    let instrument = false;
    if (!dart.test(dart.fn(() => {
      instrument = debug.debugInstrumentationEnabled;
      return true;
    }, VoidToboolL())())) dart.assertFailed(null, L7, 55, 10, "() { instrument = debugInstrumentationEnabled; return true; }()");
    if (dart.test(instrument)) {
      let stopwatch = (t1 = new core.Stopwatch.new(), (() => {
        t1.start();
        return t1;
      })());
      return action().whenComplete(dart.fn(() => {
        stopwatch.stop();
        print.debugPrint("Action \"" + dart.str(description) + "\" took " + dart.str(stopwatch.elapsed));
      }, VoidToNullN()));
    } else {
      return action();
    }
  };
  debug.debugFormatDouble = function debugFormatDouble(value) {
    if (value == null) {
      return "null";
    }
    if (debug.debugDoublePrecision != null) {
      return value[$toStringAsPrecision](debug.debugDoublePrecision);
    }
    return value[$toStringAsFixed](1);
  };
  var C12;
  dart.defineLazy(debug, {
    /*debug.debugInstrumentationEnabled*/get debugInstrumentationEnabled() {
      return false;
    },
    set debugInstrumentationEnabled(_) {},
    /*debug.timelineWhitelistArguments*/get timelineWhitelistArguments() {
      return C12 || CT.C12;
    },
    /*debug.debugDoublePrecision*/get debugDoublePrecision() {
      return null;
    },
    set debugDoublePrecision(_) {}
  }, true);
  var _name$1 = dart.privateName(diagnostics$, "_name");
  var C13;
  var C14;
  var C15;
  var C16;
  var _exception = dart.privateName(diagnostics$, "_exception");
  var _description = dart.privateName(diagnostics$, "_description");
  var _valueComputed = dart.privateName(diagnostics$, "_valueComputed");
  var _value = dart.privateName(diagnostics$, "_value");
  var _computeValue = dart.privateName(diagnostics$, "_computeValue");
  var _defaultLevel = dart.privateName(diagnostics$, "_defaultLevel");
  var _addTooltip = dart.privateName(diagnostics$, "_addTooltip");
  var _maybeCacheValue = dart.privateName(diagnostics$, "_maybeCacheValue");
  var C17;
  var _separator = dart.privateName(diagnostics$, "_separator");
  var C18;
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  var C24;
  var C25;
  var C26;
  var C27;
  var C28;
  var C29;
  var name$ = dart.privateName(diagnostics$, "DiagnosticsNode.name");
  var showSeparator$ = dart.privateName(diagnostics$, "DiagnosticsNode.showSeparator");
  var showName$ = dart.privateName(diagnostics$, "DiagnosticsNode.showName");
  var linePrefix$ = dart.privateName(diagnostics$, "DiagnosticsNode.linePrefix");
  var style$ = dart.privateName(diagnostics$, "DiagnosticsNode.style");
  diagnostics$.DiagnosticsNode = class DiagnosticsNode extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get showSeparator() {
      return this[showSeparator$];
    }
    set showSeparator(value) {
      super.showSeparator = value;
    }
    get showName() {
      return this[showName$];
    }
    set showName(value) {
      super.showName = value;
    }
    get linePrefix() {
      return this[linePrefix$];
    }
    set linePrefix(value) {
      super.linePrefix = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    static message(message, opts) {
      let style = opts && 'style' in opts ? opts.style : C16 || CT.C16;
      let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      if (!(style != null)) dart.assertFailed(null, L9, 1435, 12, "style != null");
      if (!(level != null)) dart.assertFailed(null, L9, 1436, 12, "level != null");
      return new (DiagnosticsPropertyOfvoid()).new("", null, {description: message, style: style, showName: false, allowWrap: allowWrap, level: level});
    }
    isFiltered(minLevel) {
      return false || dart.notNull(this.level.index) < dart.notNull(minLevel.index);
    }
    get level() {
      return false ? diagnostics$.DiagnosticLevel.hidden : diagnostics$.DiagnosticLevel.info;
    }
    get emptyBodyDescription() {
      return null;
    }
    get allowWrap() {
      return false;
    }
    get allowNameWrap() {
      return false;
    }
    get allowTruncate() {
      return false;
    }
    get [_separator]() {
      return dart.test(this.showSeparator) ? ":" : "";
    }
    toJsonMap(delegate) {
      let t3;
      if (false) {
        return new (IdentityMapOfStringL$ObjectL()).new();
      }
      let hasChildren = this.getChildren()[$isNotEmpty];
      return (() => {
        let t2 = new (IdentityMapOfStringL$ObjectL()).new();
        t2[$_set]("description", this.toDescription());
        t2[$_set]("type", dart.toString(this.runtimeType));
        if (this.name != null) t2[$_set]("name", this.name);
        if (!dart.test(this.showSeparator)) t2[$_set]("showSeparator", this.showSeparator);
        if (this.level != diagnostics$.DiagnosticLevel.info) t2[$_set]("level", diagnostics$.describeEnum(this.level));
        if (dart.equals(this.showName, false)) t2[$_set]("showName", this.showName);
        if (this.emptyBodyDescription != null) t2[$_set]("emptyBodyDescription", this.emptyBodyDescription);
        if (this.style != diagnostics$.DiagnosticsTreeStyle.sparse) t2[$_set]("style", diagnostics$.describeEnum(this.style));
        if (dart.test(this.allowTruncate)) t2[$_set]("allowTruncate", this.allowTruncate);
        if (dart.test(hasChildren)) t2[$_set]("hasChildren", hasChildren);
        if (dart.equals((t3 = this.linePrefix, t3 == null ? null : t3[$isNotEmpty]), true)) t2[$_set]("linePrefix", this.linePrefix);
        if (!dart.test(this.allowWrap)) t2[$_set]("allowWrap", this.allowWrap);
        if (dart.test(this.allowNameWrap)) t2[$_set]("allowNameWrap", this.allowNameWrap);
        for (let t3$ of delegate.additionalNodeProperties(this)[$entries])
          t2[$_set](t3$.key, t3$.value);
        if (dart.test(delegate.includeProperties)) t2[$_set]("properties", diagnostics$.DiagnosticsNode.toJsonList(delegate.filterProperties(this.getProperties(), this), this, delegate));
        if (dart.notNull(delegate.subtreeDepth) > 0) t2[$_set]("children", diagnostics$.DiagnosticsNode.toJsonList(delegate.filterChildren(this.getChildren(), this), this, delegate));
        return t2;
      })();
    }
    static toJsonList(nodes, parent, delegate) {
      let truncated = false;
      if (nodes == null) return C18 || CT.C18;
      let originalNodeCount = nodes[$length];
      nodes = delegate.truncateNodesList(nodes, parent);
      if (nodes[$length] != originalNodeCount) {
        nodes[$add](diagnostics$.DiagnosticsNode.message("..."));
        truncated = true;
      }
      let json = nodes[$map](MapLOfStringL$ObjectL(), dart.fn(node => node.toJsonMap(delegate.delegateForNode(node)), DiagnosticsNodeLToMapLOfStringL$ObjectL()))[$toList]();
      if (truncated) json[$last][$_set]("truncated", true);
      return json;
    }
    toString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C14 || CT.C14;
      if (false) {
        return super[$toString]();
      }
      if (!(this.style != null)) dart.assertFailed(null, L9, 1631, 12, "style != null");
      if (!(minLevel != null)) dart.assertFailed(null, L9, 1632, 12, "minLevel != null");
      if (dart.test(diagnostics$._isSingleLine(this.style))) return this.toStringDeep({parentConfiguration: parentConfiguration, minLevel: minLevel});
      let description = this.toDescription({parentConfiguration: parentConfiguration});
      if (this.name == null || this.name[$isEmpty] || !dart.test(this.showName)) return description;
      return description[$contains]("\n") ? dart.str(this.name) + dart.str(this[_separator]) + "\n" + dart.str(description) : dart.str(this.name) + dart.str(this[_separator]) + " " + dart.str(description);
    }
    get textTreeConfiguration() {
      if (!(this.style != null)) dart.assertFailed(null, L9, 1649, 12, "style != null");
      switch (this.style) {
        case C19 || CT.C19:
        {
          return null;
        }
        case C20 || CT.C20:
        {
          return diagnostics$.denseTextConfiguration;
        }
        case C21 || CT.C21:
        {
          return diagnostics$.sparseTextConfiguration;
        }
        case C22 || CT.C22:
        {
          return diagnostics$.dashedTextConfiguration;
        }
        case C23 || CT.C23:
        {
          return diagnostics$.whitespaceTextConfiguration;
        }
        case C24 || CT.C24:
        {
          return diagnostics$.transitionTextConfiguration;
        }
        case C16 || CT.C16:
        {
          return diagnostics$.singleLineTextConfiguration;
        }
        case C25 || CT.C25:
        {
          return diagnostics$.errorPropertyTextConfiguration;
        }
        case C26 || CT.C26:
        {
          return diagnostics$.shallowTextConfiguration;
        }
        case C27 || CT.C27:
        {
          return diagnostics$.errorTextConfiguration;
        }
        case C28 || CT.C28:
        {
          return diagnostics$.whitespaceTextConfiguration;
        }
        case C13 || CT.C13:
        {
          return diagnostics$.flatTextConfiguration;
        }
      }
      return null;
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C29 || CT.C29;
      if (false) {
        return "";
      }
      return new diagnostics$.TextTreeRenderer.new({minLevel: minLevel, wrapWidth: 65, wrapWidthProperties: 65}).render(this, {prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, parentConfiguration: parentConfiguration});
    }
  };
  (diagnostics$.DiagnosticsNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
    this[name$] = name;
    this[style$] = style;
    this[showName$] = showName;
    this[showSeparator$] = showSeparator;
    this[linePrefix$] = linePrefix;
    if (!(showName != null)) dart.assertFailed(null, L9, 1408, 15, "showName != null");
    if (!(showSeparator != null)) dart.assertFailed(null, L9, 1409, 15, "showSeparator != null");
    if (!(name == null || !name[$endsWith](":"))) dart.assertFailed("Names of diagnostic nodes must not end with colons.\n" + "name:\n" + "  \"" + dart.str(name) + "\"", L9, 1414, 10, "name == null || !name.endsWith(':')");
    ;
  }).prototype = diagnostics$.DiagnosticsNode.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticsNode);
  dart.addTypeCaches(diagnostics$.DiagnosticsNode);
  dart.setMethodSignature(diagnostics$.DiagnosticsNode, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticsNode.__proto__),
    isFiltered: dart.fnType(dart.legacy(core.bool), [dart.legacy(diagnostics$.DiagnosticLevel)]),
    toJsonMap: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [dart.legacy(diagnostics$.DiagnosticsSerializationDelegate)]),
    toString: dart.fnType(dart.legacy(core.String), [], {minLevel: dart.legacy(diagnostics$.DiagnosticLevel), parentConfiguration: dart.legacy(diagnostics$.TextTreeConfiguration)}, {}),
    [$toString]: dart.fnType(dart.legacy(core.String), [], {minLevel: dart.legacy(diagnostics$.DiagnosticLevel), parentConfiguration: dart.legacy(diagnostics$.TextTreeConfiguration)}, {}),
    toStringDeep: dart.fnType(dart.legacy(core.String), [], {minLevel: dart.legacy(diagnostics$.DiagnosticLevel), parentConfiguration: dart.legacy(diagnostics$.TextTreeConfiguration), prefixLineOne: dart.legacy(core.String), prefixOtherLines: dart.legacy(core.String)}, {})
  }));
  dart.setGetterSignature(diagnostics$.DiagnosticsNode, () => ({
    __proto__: dart.getGetters(diagnostics$.DiagnosticsNode.__proto__),
    level: dart.legacy(diagnostics$.DiagnosticLevel),
    emptyBodyDescription: dart.legacy(core.String),
    allowWrap: dart.legacy(core.bool),
    allowNameWrap: dart.legacy(core.bool),
    allowTruncate: dart.legacy(core.bool),
    [_separator]: dart.legacy(core.String),
    textTreeConfiguration: dart.legacy(diagnostics$.TextTreeConfiguration)
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticsNode, L10);
  dart.setFieldSignature(diagnostics$.DiagnosticsNode, () => ({
    __proto__: dart.getFields(diagnostics$.DiagnosticsNode.__proto__),
    name: dart.finalFieldType(dart.legacy(core.String)),
    showSeparator: dart.finalFieldType(dart.legacy(core.bool)),
    showName: dart.finalFieldType(dart.legacy(core.bool)),
    linePrefix: dart.finalFieldType(dart.legacy(core.String)),
    style: dart.finalFieldType(dart.legacy(diagnostics$.DiagnosticsTreeStyle))
  }));
  dart.defineExtensionMethods(diagnostics$.DiagnosticsNode, ['toString']);
  const _is_DiagnosticsProperty_default = Symbol('_is_DiagnosticsProperty_default');
  var expandableValue$ = dart.privateName(diagnostics$, "DiagnosticsProperty.expandableValue");
  var allowWrap$ = dart.privateName(diagnostics$, "DiagnosticsProperty.allowWrap");
  var allowNameWrap$ = dart.privateName(diagnostics$, "DiagnosticsProperty.allowNameWrap");
  var ifNull$ = dart.privateName(diagnostics$, "DiagnosticsProperty.ifNull");
  var ifEmpty$ = dart.privateName(diagnostics$, "DiagnosticsProperty.ifEmpty");
  var tooltip$ = dart.privateName(diagnostics$, "DiagnosticsProperty.tooltip");
  var missingIfNull$ = dart.privateName(diagnostics$, "DiagnosticsProperty.missingIfNull");
  var defaultValue$ = dart.privateName(diagnostics$, "DiagnosticsProperty.defaultValue");
  diagnostics$.DiagnosticsProperty$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class DiagnosticsProperty extends diagnostics$.DiagnosticsNode {
      get expandableValue() {
        return this[expandableValue$];
      }
      set expandableValue(value) {
        super.expandableValue = value;
      }
      get allowWrap() {
        return this[allowWrap$];
      }
      set allowWrap(value) {
        super.allowWrap = value;
      }
      get allowNameWrap() {
        return this[allowNameWrap$];
      }
      set allowNameWrap(value) {
        super.allowNameWrap = value;
      }
      get ifNull() {
        return this[ifNull$];
      }
      set ifNull(value) {
        super.ifNull = value;
      }
      get ifEmpty() {
        return this[ifEmpty$];
      }
      set ifEmpty(value) {
        super.ifEmpty = value;
      }
      get tooltip() {
        return this[tooltip$];
      }
      set tooltip(value) {
        super.tooltip = value;
      }
      get missingIfNull() {
        return this[missingIfNull$];
      }
      set missingIfNull(value) {
        super.missingIfNull = value;
      }
      get defaultValue() {
        return this[defaultValue$];
      }
      set defaultValue(value) {
        super.defaultValue = value;
      }
      toJsonMap(delegate) {
        let v = this.value;
        let properties = null;
        if (dart.test(delegate.expandPropertyValues) && dart.test(delegate.includeProperties) && DiagnosticableL().is(v) && dart.test(this.getProperties()[$isEmpty])) {
          delegate = delegate.copyWith({subtreeDepth: 0, includeProperties: false});
          properties = diagnostics$.DiagnosticsNode.toJsonList(delegate.filterProperties(v.toDiagnosticsNode().getProperties(), this), this, delegate);
        }
        let json = super.toJsonMap(delegate);
        if (properties != null) {
          json[$_set]("properties", properties);
        }
        if (!dart.equals(this.defaultValue, diagnostics$.kNoDefaultValue)) json[$_set]("defaultValue", dart.toString(this.defaultValue));
        if (this.ifEmpty != null) json[$_set]("ifEmpty", this.ifEmpty);
        if (this.ifNull != null) json[$_set]("ifNull", this.ifNull);
        if (this.tooltip != null) json[$_set]("tooltip", this.tooltip);
        json[$_set]("missingIfNull", this.missingIfNull);
        if (this.exception != null) json[$_set]("exception", dart.toString(this.exception));
        json[$_set]("propertyType", dart.toString(this.propertyType));
        json[$_set]("defaultLevel", diagnostics$.describeEnum(this[_defaultLevel]));
        if (DiagnosticableL().is(this.value) || DiagnosticsNodeL().is(this.value)) json[$_set]("isDiagnosticableValue", true);
        if (numL().is(this.value) || StringL().is(this.value) || boolL().is(this.value) || this.value == null) json[$_set]("value", this.value);
        return json;
      }
      valueToString(opts) {
        let t1;
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        let v = this.value;
        t1 = DiagnosticableTreeL().is(v) ? v.toStringShort() : dart.toString(v);
        return t1 == null ? "" : t1;
      }
      toDescription(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this[_description] != null) return this[_addTooltip](this[_description]);
        if (this.exception != null) return "EXCEPTION (" + dart.str(dart.runtimeType(this.exception)) + ")";
        if (this.ifNull != null && this.value == null) return this[_addTooltip](this.ifNull);
        let result = this.valueToString({parentConfiguration: parentConfiguration});
        if (result[$isEmpty] && this.ifEmpty != null) result = this.ifEmpty;
        return this[_addTooltip](result);
      }
      [_addTooltip](text) {
        if (!(text != null)) dart.assertFailed(null, L9, 2618, 12, "text != null");
        return this.tooltip == null ? text : dart.str(text) + " (" + dart.str(this.tooltip) + ")";
      }
      get propertyType() {
        return dart.wrapType(TL());
      }
      get value() {
        this[_maybeCacheValue]();
        return this[_value];
      }
      get exception() {
        this[_maybeCacheValue]();
        return this[_exception];
      }
      [_maybeCacheValue]() {
        if (dart.test(this[_valueComputed])) return;
        this[_valueComputed] = true;
        if (!(this[_computeValue] != null)) dart.assertFailed(null, L9, 2688, 12, "_computeValue != null");
        try {
          this[_value] = this[_computeValue]();
        } catch (e) {
          let exception = dart.getThrown(e);
          this[_exception] = exception;
          this[_value] = null;
        }
      }
      get level() {
        if (this[_defaultLevel] == diagnostics$.DiagnosticLevel.hidden) return this[_defaultLevel];
        if (this.exception != null) return diagnostics$.DiagnosticLevel.error;
        if (this.value == null && dart.test(this.missingIfNull)) return diagnostics$.DiagnosticLevel.warning;
        if (!dart.equals(this.defaultValue, diagnostics$.kNoDefaultValue) && dart.equals(this.value, this.defaultValue)) return diagnostics$.DiagnosticLevel.fine;
        return this[_defaultLevel];
      }
      getProperties() {
        if (dart.test(this.expandableValue)) {
          let object = this.value;
          if (DiagnosticsNodeL().is(object)) {
            return object.getProperties();
          }
          if (DiagnosticableL().is(object)) {
            return object.toDiagnosticsNode({style: this.style}).getProperties();
          }
        }
        return C17 || CT.C17;
      }
      getChildren() {
        if (dart.test(this.expandableValue)) {
          let object = this.value;
          if (DiagnosticsNodeL().is(object)) {
            return object.getChildren();
          }
          if (DiagnosticableL().is(object)) {
            return object.toDiagnosticsNode({style: this.style}).getChildren();
          }
        }
        return C17 || CT.C17;
      }
    }
    (DiagnosticsProperty.new = function(name, value, opts) {
      let t1;
      let description = opts && 'description' in opts ? opts.description : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C15 || CT.C15;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let missingIfNull = opts && 'missingIfNull' in opts ? opts.missingIfNull : false;
      let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
      let expandableValue = opts && 'expandableValue' in opts ? opts.expandableValue : false;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      let allowNameWrap = opts && 'allowNameWrap' in opts ? opts.allowNameWrap : true;
      let style = opts && 'style' in opts ? opts.style : C16 || CT.C16;
      let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
      this[_exception] = null;
      this[ifEmpty$] = ifEmpty;
      this[defaultValue$] = defaultValue;
      this[tooltip$] = tooltip;
      this[missingIfNull$] = missingIfNull;
      this[expandableValue$] = expandableValue;
      this[allowWrap$] = allowWrap;
      this[allowNameWrap$] = allowNameWrap;
      if (!(showName != null)) dart.assertFailed(null, L9, 2460, 15, "showName != null");
      if (!(showSeparator != null)) dart.assertFailed(null, L9, 2461, 15, "showSeparator != null");
      if (!(style != null)) dart.assertFailed(null, L9, 2462, 15, "style != null");
      if (!(level != null)) dart.assertFailed(null, L9, 2463, 15, "level != null");
      this[_description] = description;
      this[_valueComputed] = true;
      this[_value] = value;
      this[_computeValue] = null;
      this[ifNull$] = (t1 = ifNull, t1 == null ? dart.test(missingIfNull) ? "MISSING" : null : t1);
      this[_defaultLevel] = level;
      DiagnosticsProperty.__proto__.new.call(this, {name: name, showName: showName, showSeparator: showSeparator, style: style, linePrefix: linePrefix});
      ;
    }).prototype = DiagnosticsProperty.prototype;
    (DiagnosticsProperty.lazy = function(name, computeValue, opts) {
      let t1;
      let description = opts && 'description' in opts ? opts.description : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C15 || CT.C15;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let missingIfNull = opts && 'missingIfNull' in opts ? opts.missingIfNull : false;
      let expandableValue = opts && 'expandableValue' in opts ? opts.expandableValue : false;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : true;
      let allowNameWrap = opts && 'allowNameWrap' in opts ? opts.allowNameWrap : true;
      let style = opts && 'style' in opts ? opts.style : C16 || CT.C16;
      let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
      this[_exception] = null;
      this[ifEmpty$] = ifEmpty;
      this[defaultValue$] = defaultValue;
      this[tooltip$] = tooltip;
      this[missingIfNull$] = missingIfNull;
      this[expandableValue$] = expandableValue;
      this[allowWrap$] = allowWrap;
      this[allowNameWrap$] = allowNameWrap;
      if (!(showName != null)) dart.assertFailed(null, L9, 2506, 15, "showName != null");
      if (!(showSeparator != null)) dart.assertFailed(null, L9, 2507, 15, "showSeparator != null");
      if (!(dart.equals(defaultValue, diagnostics$.kNoDefaultValue) || TL().is(defaultValue))) dart.assertFailed(null, L9, 2508, 15, "defaultValue == kNoDefaultValue || defaultValue is T");
      if (!(missingIfNull != null)) dart.assertFailed(null, L9, 2509, 15, "missingIfNull != null");
      if (!(style != null)) dart.assertFailed(null, L9, 2510, 15, "style != null");
      if (!(level != null)) dart.assertFailed(null, L9, 2511, 15, "level != null");
      this[_description] = description;
      this[_valueComputed] = false;
      this[_value] = null;
      this[_computeValue] = computeValue;
      this[_defaultLevel] = level;
      this[ifNull$] = (t1 = ifNull, t1 == null ? dart.test(missingIfNull) ? "MISSING" : null : t1);
      DiagnosticsProperty.__proto__.new.call(this, {name: name, showName: showName, showSeparator: showSeparator, style: style});
      ;
    }).prototype = DiagnosticsProperty.prototype;
    dart.addTypeTests(DiagnosticsProperty);
    DiagnosticsProperty.prototype[_is_DiagnosticsProperty_default] = true;
    dart.addTypeCaches(DiagnosticsProperty);
    dart.setMethodSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getMethods(DiagnosticsProperty.__proto__),
      valueToString: dart.fnType(dart.legacy(core.String), [], {parentConfiguration: dart.legacy(diagnostics$.TextTreeConfiguration)}, {}),
      toDescription: dart.fnType(dart.legacy(core.String), [], {parentConfiguration: dart.legacy(diagnostics$.TextTreeConfiguration)}, {}),
      [_addTooltip]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.String)]),
      [_maybeCacheValue]: dart.fnType(dart.void, []),
      getProperties: dart.fnType(dart.legacy(core.List$(dart.legacy(diagnostics$.DiagnosticsNode))), []),
      getChildren: dart.fnType(dart.legacy(core.List$(dart.legacy(diagnostics$.DiagnosticsNode))), [])
    }));
    dart.setGetterSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getGetters(DiagnosticsProperty.__proto__),
      propertyType: dart.legacy(core.Type),
      value: dart.legacy(T),
      exception: dart.legacy(core.Object)
    }));
    dart.setLibraryUri(DiagnosticsProperty, L10);
    dart.setFieldSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getFields(DiagnosticsProperty.__proto__),
      [_description]: dart.finalFieldType(dart.legacy(core.String)),
      expandableValue: dart.finalFieldType(dart.legacy(core.bool)),
      allowWrap: dart.finalFieldType(dart.legacy(core.bool)),
      allowNameWrap: dart.finalFieldType(dart.legacy(core.bool)),
      ifNull: dart.finalFieldType(dart.legacy(core.String)),
      ifEmpty: dart.finalFieldType(dart.legacy(core.String)),
      tooltip: dart.finalFieldType(dart.legacy(core.String)),
      missingIfNull: dart.finalFieldType(dart.legacy(core.bool)),
      [_value]: dart.fieldType(dart.legacy(T)),
      [_valueComputed]: dart.fieldType(dart.legacy(core.bool)),
      [_exception]: dart.fieldType(dart.legacy(core.Object)),
      defaultValue: dart.finalFieldType(dart.legacy(core.Object)),
      [_defaultLevel]: dart.finalFieldType(dart.legacy(diagnostics$.DiagnosticLevel)),
      [_computeValue]: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(T), [])))
    }));
    return DiagnosticsProperty;
  });
  diagnostics$.DiagnosticsProperty = diagnostics$.DiagnosticsProperty$();
  dart.addTypeTests(diagnostics$.DiagnosticsProperty, _is_DiagnosticsProperty_default);
  assertions._ErrorDiagnostic = class _ErrorDiagnostic extends diagnostics$.DiagnosticsProperty$(dart.legacy(core.List$(dart.legacy(core.Object)))) {
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      return this.value[$join]("");
    }
  };
  (assertions._ErrorDiagnostic.new = function(message, opts) {
    let style = opts && 'style' in opts ? opts.style : C13 || CT.C13;
    let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
    if (!(message != null)) dart.assertFailed(null, L8, 31, 17, "message != null");
    assertions._ErrorDiagnostic.__proto__.new.call(this, null, JSArrayOfObjectL().of([message]), {showName: false, showSeparator: false, defaultValue: null, style: style, level: level});
    ;
  }).prototype = assertions._ErrorDiagnostic.prototype;
  (assertions._ErrorDiagnostic._fromParts = function(messageParts, opts) {
    let style = opts && 'style' in opts ? opts.style : C13 || CT.C13;
    let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
    if (!(messageParts != null)) dart.assertFailed(null, L8, 71, 15, "messageParts != null");
    assertions._ErrorDiagnostic.__proto__.new.call(this, null, messageParts, {showName: false, showSeparator: false, defaultValue: null, style: style, level: level});
    ;
  }).prototype = assertions._ErrorDiagnostic.prototype;
  dart.addTypeTests(assertions._ErrorDiagnostic);
  dart.addTypeCaches(assertions._ErrorDiagnostic);
  dart.setLibraryUri(assertions._ErrorDiagnostic, L11);
  assertions.ErrorDescription = class ErrorDescription extends assertions._ErrorDiagnostic {};
  (assertions.ErrorDescription.new = function(message) {
    assertions.ErrorDescription.__proto__.new.call(this, message, {level: diagnostics$.DiagnosticLevel.info});
    ;
  }).prototype = assertions.ErrorDescription.prototype;
  (assertions.ErrorDescription._fromParts = function(messageParts) {
    assertions.ErrorDescription.__proto__._fromParts.call(this, messageParts, {level: diagnostics$.DiagnosticLevel.info});
    ;
  }).prototype = assertions.ErrorDescription.prototype;
  dart.addTypeTests(assertions.ErrorDescription);
  dart.addTypeCaches(assertions.ErrorDescription);
  dart.setLibraryUri(assertions.ErrorDescription, L11);
  assertions.ErrorSummary = class ErrorSummary extends assertions._ErrorDiagnostic {};
  (assertions.ErrorSummary.new = function(message) {
    assertions.ErrorSummary.__proto__.new.call(this, message, {level: diagnostics$.DiagnosticLevel.summary});
    ;
  }).prototype = assertions.ErrorSummary.prototype;
  (assertions.ErrorSummary._fromParts = function(messageParts) {
    assertions.ErrorSummary.__proto__._fromParts.call(this, messageParts, {level: diagnostics$.DiagnosticLevel.summary});
    ;
  }).prototype = assertions.ErrorSummary.prototype;
  dart.addTypeTests(assertions.ErrorSummary);
  dart.addTypeCaches(assertions.ErrorSummary);
  dart.setLibraryUri(assertions.ErrorSummary, L11);
  assertions.ErrorHint = class ErrorHint extends assertions._ErrorDiagnostic {};
  (assertions.ErrorHint.new = function(message) {
    assertions.ErrorHint.__proto__.new.call(this, message, {level: diagnostics$.DiagnosticLevel.hint});
    ;
  }).prototype = assertions.ErrorHint.prototype;
  (assertions.ErrorHint._fromParts = function(messageParts) {
    assertions.ErrorHint.__proto__._fromParts.call(this, messageParts, {level: diagnostics$.DiagnosticLevel.hint});
    ;
  }).prototype = assertions.ErrorHint.prototype;
  dart.addTypeTests(assertions.ErrorHint);
  dart.addTypeCaches(assertions.ErrorHint);
  dart.setLibraryUri(assertions.ErrorHint, L11);
  assertions.ErrorSpacer = class ErrorSpacer extends diagnostics$.DiagnosticsProperty$(dart.void) {};
  (assertions.ErrorSpacer.new = function() {
    assertions.ErrorSpacer.__proto__.new.call(this, "", null, {description: "", showName: false});
    ;
  }).prototype = assertions.ErrorSpacer.prototype;
  dart.addTypeTests(assertions.ErrorSpacer);
  dart.addTypeCaches(assertions.ErrorSpacer);
  dart.setLibraryUri(assertions.ErrorSpacer, L11);
  var _exceptionToDiagnosticable = dart.privateName(assertions, "_exceptionToDiagnosticable");
  diagnostics$.DiagnosticableMixin = class DiagnosticableMixin extends core.Object {};
  diagnostics$.DiagnosticableMixin[dart.mixinOn] = Object => {
    class DiagnosticableMixin extends Object {
      toStringShort() {
        return diagnostics$.describeIdentity(this);
      }
      toString(opts) {
        let t4;
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C29 || CT.C29;
        let fullString = null;
        if (!dart.test(dart.fn(() => {
          fullString = this.toDiagnosticsNode({style: diagnostics$.DiagnosticsTreeStyle.singleLine}).toString({minLevel: minLevel});
          return true;
        }, VoidToboolL())())) dart.assertFailed(null, L9, 2988, 12, "() {\n      fullString = toDiagnosticsNode(style: DiagnosticsTreeStyle.singleLine).toString(minLevel: minLevel);\n      return true;\n    }()");
        t4 = fullString;
        return t4 == null ? this.toStringShort() : t4;
      }
      toDiagnosticsNode(opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let style = opts && 'style' in opts ? opts.style : null;
        return new (DiagnosticableNodeOfDiagnosticableL()).new({name: name, value: DiagnosticableL().as(this), style: style});
      }
      debugFillProperties(properties) {
      }
    }
    dart.defineExtensionMethods(DiagnosticableMixin, ['toString']);
    return DiagnosticableMixin;
  };
  (diagnostics$.DiagnosticableMixin[dart.mixinNew] = function() {
  }).prototype = diagnostics$.DiagnosticableMixin.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticableMixin);
  dart.addTypeCaches(diagnostics$.DiagnosticableMixin);
  diagnostics$.DiagnosticableMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(diagnostics$.DiagnosticableMixin, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticableMixin.__proto__),
    toStringShort: dart.fnType(dart.legacy(core.String), []),
    toString: dart.fnType(dart.legacy(core.String), [], {minLevel: dart.legacy(diagnostics$.DiagnosticLevel)}, {}),
    [$toString]: dart.fnType(dart.legacy(core.String), [], {minLevel: dart.legacy(diagnostics$.DiagnosticLevel)}, {}),
    toDiagnosticsNode: dart.fnType(dart.legacy(diagnostics$.DiagnosticsNode), [], {name: dart.legacy(core.String), style: dart.legacy(diagnostics$.DiagnosticsTreeStyle)}, {}),
    debugFillProperties: dart.fnType(dart.void, [dart.legacy(diagnostics$.DiagnosticPropertiesBuilder)])
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticableMixin, L10);
  const Object_DiagnosticableMixin$36 = class Object_DiagnosticableMixin extends core.Object {};
  (Object_DiagnosticableMixin$36.new = function() {
  }).prototype = Object_DiagnosticableMixin$36.prototype;
  dart.applyMixin(Object_DiagnosticableMixin$36, diagnostics$.DiagnosticableMixin);
  diagnostics$.Diagnosticable = class Diagnosticable extends Object_DiagnosticableMixin$36 {};
  (diagnostics$.Diagnosticable.new = function() {
    ;
  }).prototype = diagnostics$.Diagnosticable.prototype;
  dart.addTypeTests(diagnostics$.Diagnosticable);
  dart.addTypeCaches(diagnostics$.Diagnosticable);
  dart.setLibraryUri(diagnostics$.Diagnosticable, L10);
  var exception$ = dart.privateName(assertions, "FlutterErrorDetails.exception");
  var stack$ = dart.privateName(assertions, "FlutterErrorDetails.stack");
  var library$ = dart.privateName(assertions, "FlutterErrorDetails.library");
  var context$ = dart.privateName(assertions, "FlutterErrorDetails.context");
  var stackFilter$ = dart.privateName(assertions, "FlutterErrorDetails.stackFilter");
  var informationCollector$ = dart.privateName(assertions, "FlutterErrorDetails.informationCollector");
  var silent$ = dart.privateName(assertions, "FlutterErrorDetails.silent");
  assertions.FlutterErrorDetails = class FlutterErrorDetails extends diagnostics$.Diagnosticable {
    get exception() {
      return this[exception$];
    }
    set exception(value) {
      super.exception = value;
    }
    get stack() {
      return this[stack$];
    }
    set stack(value) {
      super.stack = value;
    }
    get library() {
      return this[library$];
    }
    set library(value) {
      super.library = value;
    }
    get context() {
      return this[context$];
    }
    set context(value) {
      super.context = value;
    }
    get stackFilter() {
      return this[stackFilter$];
    }
    set stackFilter(value) {
      super.stackFilter = value;
    }
    get informationCollector() {
      return this[informationCollector$];
    }
    set informationCollector(value) {
      super.informationCollector = value;
    }
    get silent() {
      return this[silent$];
    }
    set silent(value) {
      super.silent = value;
    }
    exceptionAsString() {
      let longMessage = null;
      if (AssertionErrorL().is(this.exception)) {
        let message = dart.dload(this.exception, 'message');
        let fullMessage = dart.toString(this.exception);
        if (StringL().is(message) && message != fullMessage) {
          if (fullMessage.length > message.length) {
            let position = fullMessage[$lastIndexOf](message);
            if (position === fullMessage.length - message.length && position > 2 && fullMessage[$substring](position - 2, position) === ": ") {
              let body = fullMessage[$substring](0, position - 2);
              let splitPoint = body[$indexOf](" Failed assertion:");
              if (splitPoint >= 0) {
                body = dart.str(body[$substring](0, splitPoint)) + "\n" + dart.str(body[$substring](splitPoint + 1));
              }
              longMessage = dart.str(message[$trimRight]()) + "\n" + body;
            }
          }
        }
        longMessage == null ? longMessage = fullMessage : null;
      } else if (StringL().is(this.exception)) {
        longMessage = StringL().as(this.exception);
      } else if (ErrorL().is(this.exception) || ExceptionL().is(this.exception)) {
        longMessage = dart.toString(this.exception);
      } else {
        longMessage = "  " + dart.str(dart.toString(this.exception));
      }
      longMessage = longMessage[$trimRight]();
      if (longMessage[$isEmpty]) longMessage = "  <no message available>";
      return longMessage;
    }
    [_exceptionToDiagnosticable]() {
      if (FlutterErrorL().is(this.exception)) {
        return DiagnosticableL().as(this.exception);
      }
      if (AssertionErrorL().is(this.exception) && FlutterErrorL().is(dart.dload(this.exception, 'message'))) {
        return DiagnosticableL().as(dart.dload(this.exception, 'message'));
      }
      return null;
    }
    get summary() {
      let t4;
      const formatException = () => {
        return this.exceptionAsString()[$split]("\n")[$_get](0)[$trimLeft]();
      };
      dart.fn(formatException, VoidToStringL());
      if (false) {
        return diagnostics$.DiagnosticsNode.message(formatException());
      }
      let diagnosticable = this[_exceptionToDiagnosticable]();
      let summary = null;
      if (diagnosticable != null) {
        let builder = new diagnostics$.DiagnosticPropertiesBuilder.new();
        this.debugFillProperties(builder);
        summary = builder.properties[$firstWhere](dart.fn(node => node.level == diagnostics$.DiagnosticLevel.summary, DiagnosticsNodeLToboolL()), {orElse: dart.fn(() => null, VoidToNullN())});
      }
      t4 = summary;
      return t4 == null ? new assertions.ErrorSummary.new(dart.str(formatException())) : t4;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      let verb = new assertions.ErrorDescription.new("thrown" + dart.str(this.context != null ? new assertions.ErrorDescription.new(" " + dart.str(this.context)) : ""));
      let diagnosticable = this[_exceptionToDiagnosticable]();
      if (NullThrownErrorL().is(this.exception)) {
        properties.add(new assertions.ErrorDescription.new("The null value was " + dart.str(verb) + "."));
      } else if (numL().is(this.exception)) {
        properties.add(new assertions.ErrorDescription.new("The number " + dart.str(this.exception) + " was " + dart.str(verb) + "."));
      } else {
        let errorName = null;
        if (AssertionErrorL().is(this.exception)) {
          errorName = new assertions.ErrorDescription.new("assertion");
        } else if (StringL().is(this.exception)) {
          errorName = new assertions.ErrorDescription.new("message");
        } else if (ErrorL().is(this.exception) || ExceptionL().is(this.exception)) {
          errorName = new assertions.ErrorDescription.new(dart.str(dart.runtimeType(this.exception)));
        } else {
          errorName = new assertions.ErrorDescription.new(dart.str(dart.runtimeType(this.exception)) + " object");
        }
        properties.add(new assertions.ErrorDescription.new("The following " + dart.str(errorName) + " was " + dart.str(verb) + ":"));
        if (diagnosticable != null) {
          diagnosticable.debugFillProperties(properties);
        } else {
          let prefix = dart.str(dart.runtimeType(this.exception)) + ": ";
          let message = this.exceptionAsString();
          if (message[$startsWith](prefix)) message = message[$substring](prefix.length);
          properties.add(new assertions.ErrorDescription.new(dart.str(message)));
        }
      }
      let stackLines = this.stack != null ? dart.toString(this.stack)[$trimRight]()[$split]("\n") : null;
      if (AssertionErrorL().is(this.exception) && diagnosticable == null) {
        let ourFault = true;
        if (stackLines != null) {
          let stackList = stackLines[$take](2)[$toList]();
          if (dart.notNull(stackList[$length]) >= 2) {
            let throwPattern = core.RegExp.new("^#0 +_AssertionError._throwNew \\(dart:.+\\)$");
            let assertPattern = core.RegExp.new("^#1 +[^(]+ \\((.+?):([0-9]+)(?::[0-9]+)?\\)$");
            if (dart.test(throwPattern.hasMatch(stackList[$_get](0)))) {
              let assertMatch = assertPattern.firstMatch(stackList[$_get](1));
              if (assertMatch != null) {
                if (!(assertMatch.groupCount === 2)) dart.assertFailed(null, L8, 433, 22, "assertMatch.groupCount == 2");
                let ourLibraryPattern = core.RegExp.new("^package:flutter/");
                ourFault = ourLibraryPattern.hasMatch(assertMatch.group(1));
              }
            }
          }
        }
        if (dart.test(ourFault)) {
          properties.add(new assertions.ErrorSpacer.new());
          properties.add(new assertions.ErrorHint.new("Either the assertion indicates an error in the framework itself, or we should " + "provide substantially more information in this error message to help you determine " + "and fix the underlying cause.\n" + "In either case, please report this assertion by filing a bug on GitHub:\n" + "  https://github.com/flutter/flutter/issues/new?template=BUG.md"));
        }
      }
      if (this.stack != null) {
        properties.add(new assertions.ErrorSpacer.new());
        properties.add(new assertions.DiagnosticsStackTrace.new("When the exception was thrown, this was the stack", this.stack, {stackFilter: this.stackFilter}));
      }
      if (this.informationCollector != null) {
        properties.add(new assertions.ErrorSpacer.new());
        this.informationCollector()[$forEach](dart.bind(properties, 'add'));
      }
    }
    toStringShort() {
      return this.library != null ? "Exception caught by " + dart.str(this.library) : "Exception caught";
    }
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C29 || CT.C29;
      return this.toDiagnosticsNode({style: diagnostics$.DiagnosticsTreeStyle.error}).toStringDeep({minLevel: minLevel});
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new assertions._FlutterErrorDetailsNode.new({name: name, value: this, style: style});
    }
  };
  (assertions.FlutterErrorDetails.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : "Flutter framework";
    let context = opts && 'context' in opts ? opts.context : null;
    let stackFilter = opts && 'stackFilter' in opts ? opts.stackFilter : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    this[exception$] = exception;
    this[stack$] = stack;
    this[library$] = library;
    this[context$] = context;
    this[stackFilter$] = stackFilter;
    this[informationCollector$] = informationCollector;
    this[silent$] = silent;
    assertions.FlutterErrorDetails.__proto__.new.call(this);
    ;
  }).prototype = assertions.FlutterErrorDetails.prototype;
  dart.addTypeTests(assertions.FlutterErrorDetails);
  dart.addTypeCaches(assertions.FlutterErrorDetails);
  dart.setMethodSignature(assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getMethods(assertions.FlutterErrorDetails.__proto__),
    exceptionAsString: dart.fnType(dart.legacy(core.String), []),
    [_exceptionToDiagnosticable]: dart.fnType(dart.legacy(diagnostics$.Diagnosticable), [])
  }));
  dart.setGetterSignature(assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getGetters(assertions.FlutterErrorDetails.__proto__),
    summary: dart.legacy(diagnostics$.DiagnosticsNode)
  }));
  dart.setLibraryUri(assertions.FlutterErrorDetails, L11);
  dart.setFieldSignature(assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getFields(assertions.FlutterErrorDetails.__proto__),
    exception: dart.finalFieldType(dart.dynamic),
    stack: dart.finalFieldType(dart.legacy(core.StackTrace)),
    library: dart.finalFieldType(dart.legacy(core.String)),
    context: dart.finalFieldType(dart.legacy(diagnostics$.DiagnosticsNode)),
    stackFilter: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.Iterable$(dart.legacy(core.String))), [dart.legacy(core.Iterable$(dart.legacy(core.String)))]))),
    informationCollector: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(core.Iterable$(dart.legacy(diagnostics$.DiagnosticsNode))), []))),
    silent: dart.finalFieldType(dart.legacy(core.bool))
  }));
  dart.defineExtensionMethods(assertions.FlutterErrorDetails, ['toString']);
  dart.defineLazy(assertions.FlutterErrorDetails, {
    /*assertions.FlutterErrorDetails.propertiesTransformers*/get propertiesTransformers() {
      return JSArrayOfIterableLOfDiagnosticsNodeLToLIterableLOfDiagnosticsNodeL().of([]);
    }
  }, true);
  var C30;
  var C31;
  diagnostics$.DiagnosticableTreeMixin = class DiagnosticableTreeMixin extends core.Object {};
  diagnostics$.DiagnosticableTreeMixin[dart.mixinOn] = Object => {
    class DiagnosticableTreeMixin extends Object {
      toString(opts) {
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C29 || CT.C29;
        return this.toDiagnosticsNode({style: diagnostics$.DiagnosticsTreeStyle.singleLine}).toString({minLevel: minLevel});
      }
      toStringShallow(opts) {
        let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C29 || CT.C29;
        if (false) {
          return this.toString();
        }
        let result = new core.StringBuffer.new();
        result.write(this.toStringShort());
        result.write(joiner);
        let builder = new diagnostics$.DiagnosticPropertiesBuilder.new();
        this.debugFillProperties(builder);
        result.write(builder.properties[$where](dart.fn(n => !dart.test(n.isFiltered(minLevel)), DiagnosticsNodeLToboolL()))[$join](joiner));
        return result.toString();
      }
      toStringDeep(opts) {
        let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
        let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C29 || CT.C29;
        return this.toDiagnosticsNode().toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
      }
      toStringShort() {
        return diagnostics$.describeIdentity(this);
      }
      toDiagnosticsNode(opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let style = opts && 'style' in opts ? opts.style : null;
        return new diagnostics$.DiagnosticableTreeNode.new({name: name, value: this, style: style});
      }
      debugDescribeChildren() {
        return C17 || CT.C17;
      }
      debugFillProperties(properties) {
      }
    }
    dart.defineExtensionMethods(DiagnosticableTreeMixin, ['toString']);
    return DiagnosticableTreeMixin;
  };
  (diagnostics$.DiagnosticableTreeMixin[dart.mixinNew] = function() {
  }).prototype = diagnostics$.DiagnosticableTreeMixin.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticableTreeMixin);
  dart.addTypeCaches(diagnostics$.DiagnosticableTreeMixin);
  diagnostics$.DiagnosticableTreeMixin[dart.implements] = () => [diagnostics$.DiagnosticableTree, core.Object];
  dart.setMethodSignature(diagnostics$.DiagnosticableTreeMixin, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticableTreeMixin.__proto__),
    toString: dart.fnType(dart.legacy(core.String), [], {minLevel: dart.legacy(diagnostics$.DiagnosticLevel)}, {}),
    [$toString]: dart.fnType(dart.legacy(core.String), [], {minLevel: dart.legacy(diagnostics$.DiagnosticLevel)}, {}),
    toStringShallow: dart.fnType(dart.legacy(core.String), [], {joiner: dart.legacy(core.String), minLevel: dart.legacy(diagnostics$.DiagnosticLevel)}, {}),
    toStringDeep: dart.fnType(dart.legacy(core.String), [], {minLevel: dart.legacy(diagnostics$.DiagnosticLevel), prefixLineOne: dart.legacy(core.String), prefixOtherLines: dart.legacy(core.String)}, {}),
    toStringShort: dart.fnType(dart.legacy(core.String), []),
    toDiagnosticsNode: dart.fnType(dart.legacy(diagnostics$.DiagnosticsNode), [], {name: dart.legacy(core.String), style: dart.legacy(diagnostics$.DiagnosticsTreeStyle)}, {}),
    debugDescribeChildren: dart.fnType(dart.legacy(core.List$(dart.legacy(diagnostics$.DiagnosticsNode))), []),
    debugFillProperties: dart.fnType(dart.void, [dart.legacy(diagnostics$.DiagnosticPropertiesBuilder)])
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticableTreeMixin, L10);
  var diagnostics$0 = dart.privateName(assertions, "FlutterError.diagnostics");
  var C32;
  const Error_DiagnosticableTreeMixin$36 = class Error_DiagnosticableTreeMixin extends core.Error {};
  (Error_DiagnosticableTreeMixin$36.new = function() {
    Error_DiagnosticableTreeMixin$36.__proto__.new.call(this);
  }).prototype = Error_DiagnosticableTreeMixin$36.prototype;
  dart.applyMixin(Error_DiagnosticableTreeMixin$36, diagnostics$.DiagnosticableTreeMixin);
  assertions.FlutterError = class FlutterError extends Error_DiagnosticableTreeMixin$36 {
    get diagnostics() {
      return this[diagnostics$0];
    }
    set diagnostics(value) {
      super.diagnostics = value;
    }
    static new(message) {
      let lines = message[$split]("\n");
      return new assertions.FlutterError.fromParts((() => {
        let t4 = JSArrayOfDiagnosticsNodeL().of([]);
        t4[$add](new assertions.ErrorSummary.new(lines[$first]));
        for (let t5 of lines[$skip](1)[$map](DiagnosticsNodeL(), dart.fn(line => new assertions.ErrorDescription.new(line), StringLToErrorDescriptionL())))
          t4[$add](t5);
        return t4;
      })());
    }
    get message() {
      return this.toString();
    }
    static resetErrorCount() {
      assertions.FlutterError._errorCount = 0;
    }
    static dumpErrorToConsole(details, opts) {
      let forceReport = opts && 'forceReport' in opts ? opts.forceReport : false;
      if (!(details != null)) dart.assertFailed(null, L8, 632, 12, "details != null");
      if (!(details.exception != null)) dart.assertFailed(null, L8, 633, 12, "details.exception != null");
      let reportError = !dart.equals(details.silent, true);
      if (!dart.test(dart.fn(() => {
        reportError = true;
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L8, 635, 12, "() {\n      // In checked mode, we ignore the \"silent\" flag.\n      reportError = true;\n      return true;\n    }()");
      if (!reportError && !dart.test(forceReport)) return;
      if (assertions.FlutterError._errorCount === 0 || dart.test(forceReport)) {
        print.debugPrint(new diagnostics$.TextTreeRenderer.new({wrapWidth: 100, wrapWidthProperties: 100, maxDescendentsTruncatableNode: 5}).render(details.toDiagnosticsNode({style: diagnostics$.DiagnosticsTreeStyle.error}))[$trimRight]());
      } else {
        print.debugPrint("Another exception was thrown: " + dart.str(details.summary));
      }
      assertions.FlutterError._errorCount = dart.notNull(assertions.FlutterError._errorCount) + 1;
    }
    static defaultStackFilter(frames) {
      let t6;
      let filteredPackages = C30 || CT.C30;
      let filteredClasses = C31 || CT.C31;
      let stackParser = core.RegExp.new("^#[0-9]+ +([^.]+).* \\(([^/\\\\]*)[/\\\\].+:[0-9]+(?::[0-9]+)?\\)$");
      let packageParser = core.RegExp.new("^([^:]+):(.+)$");
      let result = JSArrayOfStringL().of([]);
      let skipped = JSArrayOfStringL().of([]);
      for (let line of frames) {
        let match = stackParser.firstMatch(line);
        if (match != null) {
          if (!(match.groupCount === 2)) dart.assertFailed(null, L8, 685, 16, "match.groupCount == 2");
          if (dart.test(filteredPackages[$contains](match.group(2)))) {
            let packageMatch = packageParser.firstMatch(match.group(2));
            if (packageMatch != null && packageMatch.group(1) === "package") {
              skipped[$add]("package " + dart.str(packageMatch.group(2)));
            } else {
              skipped[$add]("package " + dart.str(match.group(2)));
            }
            continue;
          }
          if (dart.test(filteredClasses[$contains](match.group(1)))) {
            skipped[$add]("class " + dart.str(match.group(1)));
            continue;
          }
        }
        result[$add](line);
      }
      if (skipped[$length] === 1) {
        result[$add]("(elided one frame from " + dart.str(skipped[$single]) + ")");
      } else if (dart.notNull(skipped[$length]) > 1) {
        let where = (t6 = LinkedHashSetOfStringL().from(skipped)[$toList](), (() => {
          t6[$sort]();
          return t6;
        })());
        if (dart.notNull(where[$length]) > 1) where[$_set](dart.notNull(where[$length]) - 1, "and " + dart.str(where[$last]));
        if (dart.notNull(where[$length]) > 2) {
          result[$add]("(elided " + dart.str(skipped[$length]) + " frames from " + dart.str(where[$join](", ")) + ")");
        } else {
          result[$add]("(elided " + dart.str(skipped[$length]) + " frames from " + dart.str(where[$join](" ")) + ")");
        }
      }
      return result;
    }
    debugFillProperties(properties) {
      let t6;
      t6 = this.diagnostics;
      t6 == null ? null : t6[$forEach](dart.bind(properties, 'add'));
    }
    toStringShort() {
      return "FlutterError";
    }
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C29 || CT.C29;
      let renderer = new diagnostics$.TextTreeRenderer.new({wrapWidth: 4000000000});
      return this.diagnostics[$map](StringL(), dart.fn(node => renderer.render(node)[$trimRight](), DiagnosticsNodeLToStringL()))[$join]("\n");
    }
    static reportError(details) {
      if (!(details != null)) dart.assertFailed(null, L8, 734, 12, "details != null");
      if (!(details.exception != null)) dart.assertFailed(null, L8, 735, 12, "details.exception != null");
      if (assertions.FlutterError.onError != null) assertions.FlutterError.onError(details);
    }
  };
  (assertions.FlutterError.fromParts = function(diagnostics) {
    this[diagnostics$0] = diagnostics;
    if (!dart.test(diagnostics[$isNotEmpty])) dart.assertFailed(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNodeL().of([new assertions.ErrorSummary.new("Empty FlutterError")])), L8, 523, 53, "diagnostics.isNotEmpty");
    assertions.FlutterError.__proto__.new.call(this);
    if (!(this.diagnostics[$first].level == diagnostics$.DiagnosticLevel.summary)) dart.assertFailed(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNodeL().of([new assertions.ErrorSummary.new("FlutterError is missing a summary."), new assertions.ErrorDescription.new("All FlutterError objects should start with a short (one line) " + "summary description of the problem that was detected."), new (DiagnosticsPropertyOfFlutterErrorL()).new("Malformed", this, {expandableValue: true, showSeparator: false, style: diagnostics$.DiagnosticsTreeStyle.whitespace}), new assertions.ErrorDescription.new("\nThis error should still help you solve your problem, " + "however please also report this malformed error in the " + "framework by filing a bug on GitHub:\n" + "  https://github.com/flutter/flutter/issues/new?template=BUG.md")])), L8, 525, 7, "diagnostics.first.level == DiagnosticLevel.summary");
    if (!dart.test(dart.fn(() => {
      let summaries = this.diagnostics[$where](dart.fn(node => node.level == diagnostics$.DiagnosticLevel.summary, DiagnosticsNodeLToboolL()));
      if (dart.notNull(summaries[$length]) > 1) {
        let message = JSArrayOfDiagnosticsNodeL().of([new assertions.ErrorSummary.new("FlutterError contained multiple error summaries."), new assertions.ErrorDescription.new("All FlutterError objects should have only a single short " + "(one line) summary description of the problem that was " + "detected.")]);
        message[$add](new (DiagnosticsPropertyOfFlutterErrorL()).new("Malformed", this, {expandableValue: true, showSeparator: false, style: diagnostics$.DiagnosticsTreeStyle.whitespace}));
        message[$add](new assertions.ErrorDescription.new("\nThe malformed error has " + dart.str(summaries[$length]) + " summaries."));
        let i = 1;
        for (let summary of summaries) {
          message[$add](new (DiagnosticsPropertyOfDiagnosticsNodeL()).new("Summary " + dart.str(i), summary, {expandableValue: true}));
          i = i + 1;
        }
        message[$add](new assertions.ErrorDescription.new("\nThis error should still help you solve your problem, " + "however please also report this malformed error in the " + "framework by filing a bug on GitHub:\n" + "  https://github.com/flutter/flutter/issues/new?template=BUG.md"));
        dart.throw(new assertions.FlutterError.fromParts(message));
      }
      return true;
    }, VoidToboolL())())) dart.assertFailed(null, L8, 541, 12, "() {\n      final Iterable<DiagnosticsNode> summaries = diagnostics.where((DiagnosticsNode node) => node.level == DiagnosticLevel.summary);\n      if (summaries.length > 1) {\n        final List<DiagnosticsNode> message = <DiagnosticsNode>[\n          ErrorSummary('FlutterError contained multiple error summaries.'),\n          ErrorDescription(\n            'All FlutterError objects should have only a single short '\n            '(one line) summary description of the problem that was '\n            'detected.'\n          ),\n        ];\n        message.add(DiagnosticsProperty<FlutterError>('Malformed', this, expandableValue: true, showSeparator: false, style: DiagnosticsTreeStyle.whitespace));\n        message.add(ErrorDescription('\\nThe malformed error has ${summaries.length} summaries.'));\n        int i = 1;\n        for (DiagnosticsNode summary in summaries) {\n          message.add(DiagnosticsProperty<DiagnosticsNode>('Summary $i', summary, expandableValue : true));\n          i += 1;\n        }\n        message.add(ErrorDescription(\n          '\\nThis error should still help you solve your problem, '\n          'however please also report this malformed error in the '\n          'framework by filing a bug on GitHub:\\n'\n          '  https://github.com/flutter/flutter/issues/new?template=BUG.md'\n        ));\n        throw FlutterError.fromParts(message);\n      }\n      return true;\n    }()");
  }).prototype = assertions.FlutterError.prototype;
  dart.addTypeTests(assertions.FlutterError);
  dart.addTypeCaches(assertions.FlutterError);
  assertions.FlutterError[dart.implements] = () => [core.AssertionError];
  dart.setGetterSignature(assertions.FlutterError, () => ({
    __proto__: dart.getGetters(assertions.FlutterError.__proto__),
    message: dart.legacy(core.String)
  }));
  dart.setLibraryUri(assertions.FlutterError, L11);
  dart.setFieldSignature(assertions.FlutterError, () => ({
    __proto__: dart.getFields(assertions.FlutterError.__proto__),
    diagnostics: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(diagnostics$.DiagnosticsNode))))
  }));
  dart.defineExtensionMethods(assertions.FlutterError, ['toString']);
  dart.defineLazy(assertions.FlutterError, {
    /*assertions.FlutterError.onError*/get onError() {
      return C32 || CT.C32;
    },
    set onError(_) {},
    /*assertions.FlutterError._errorCount*/get _errorCount() {
      return 0;
    },
    set _errorCount(_) {},
    /*assertions.FlutterError.wrapWidth*/get wrapWidth() {
      return 100;
    }
  }, true);
  var C33;
  var C34;
  var _children = dart.privateName(diagnostics$, "_children");
  var _properties = dart.privateName(diagnostics$, "_properties");
  var level$ = dart.privateName(diagnostics$, "DiagnosticsBlock.level");
  var value$ = dart.privateName(diagnostics$, "DiagnosticsBlock.value");
  var allowTruncate$ = dart.privateName(diagnostics$, "DiagnosticsBlock.allowTruncate");
  diagnostics$.DiagnosticsBlock = class DiagnosticsBlock extends diagnostics$.DiagnosticsNode {
    get level() {
      return this[level$];
    }
    set level(value) {
      super.level = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get allowTruncate() {
      return this[allowTruncate$];
    }
    set allowTruncate(value) {
      super.allowTruncate = value;
    }
    getChildren() {
      return this[_children];
    }
    getProperties() {
      return this[_properties];
    }
    toDescription(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      return this[_description];
    }
  };
  (diagnostics$.DiagnosticsBlock.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : C23 || CT.C23;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    let linePrefix = opts && 'linePrefix' in opts ? opts.linePrefix : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
    let allowTruncate = opts && 'allowTruncate' in opts ? opts.allowTruncate : false;
    let children = opts && 'children' in opts ? opts.children : C17 || CT.C17;
    let properties = opts && 'properties' in opts ? opts.properties : C17 || CT.C17;
    this[value$] = value;
    this[level$] = level;
    this[allowTruncate$] = allowTruncate;
    this[_description] = description;
    this[_children] = children;
    this[_properties] = properties;
    diagnostics$.DiagnosticsBlock.__proto__.new.call(this, {name: name, style: style, showName: dart.test(showName) && name != null, showSeparator: showSeparator, linePrefix: linePrefix});
    ;
  }).prototype = diagnostics$.DiagnosticsBlock.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticsBlock);
  dart.addTypeCaches(diagnostics$.DiagnosticsBlock);
  dart.setMethodSignature(diagnostics$.DiagnosticsBlock, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticsBlock.__proto__),
    getChildren: dart.fnType(dart.legacy(core.List$(dart.legacy(diagnostics$.DiagnosticsNode))), []),
    getProperties: dart.fnType(dart.legacy(core.List$(dart.legacy(diagnostics$.DiagnosticsNode))), []),
    toDescription: dart.fnType(dart.legacy(core.String), [], {parentConfiguration: dart.legacy(diagnostics$.TextTreeConfiguration)}, {})
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticsBlock, L10);
  dart.setFieldSignature(diagnostics$.DiagnosticsBlock, () => ({
    __proto__: dart.getFields(diagnostics$.DiagnosticsBlock.__proto__),
    [_children]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(diagnostics$.DiagnosticsNode)))),
    [_properties]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(diagnostics$.DiagnosticsNode)))),
    level: dart.finalFieldType(dart.legacy(diagnostics$.DiagnosticLevel)),
    [_description]: dart.finalFieldType(dart.legacy(core.String)),
    value: dart.finalFieldType(dart.legacy(core.Object)),
    allowTruncate: dart.finalFieldType(dart.legacy(core.bool))
  }));
  assertions.DiagnosticsStackTrace = class DiagnosticsStackTrace extends diagnostics$.DiagnosticsBlock {
    static _createStackFrame(frame) {
      return diagnostics$.DiagnosticsNode.message(frame, {allowWrap: false});
    }
  };
  (assertions.DiagnosticsStackTrace.new = function(name, stack, opts) {
    let t6;
    let stackFilter = opts && 'stackFilter' in opts ? opts.stackFilter : null;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    assertions.DiagnosticsStackTrace.__proto__.new.call(this, {name: name, value: stack, properties: (t6 = stackFilter, t6 == null ? C33 || CT.C33 : t6)(dart.toString(stack)[$trimRight]()[$split]("\n"))[$map](DiagnosticsNodeL(), C34 || CT.C34)[$toList](), style: diagnostics$.DiagnosticsTreeStyle.flat, showSeparator: showSeparator, allowTruncate: true});
    ;
  }).prototype = assertions.DiagnosticsStackTrace.prototype;
  (assertions.DiagnosticsStackTrace.singleFrame = function(name, opts) {
    let frame = opts && 'frame' in opts ? opts.frame : null;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    assertions.DiagnosticsStackTrace.__proto__.new.call(this, {name: name, properties: JSArrayOfDiagnosticsNodeL().of([assertions.DiagnosticsStackTrace._createStackFrame(frame)]), style: diagnostics$.DiagnosticsTreeStyle.whitespace, showSeparator: showSeparator});
    ;
  }).prototype = assertions.DiagnosticsStackTrace.prototype;
  dart.addTypeTests(assertions.DiagnosticsStackTrace);
  dart.addTypeCaches(assertions.DiagnosticsStackTrace);
  dart.setLibraryUri(assertions.DiagnosticsStackTrace, L11);
  var _cachedBuilder = dart.privateName(diagnostics$, "_cachedBuilder");
  const _is_DiagnosticableNode_default = Symbol('_is_DiagnosticableNode_default');
  var value$0 = dart.privateName(diagnostics$, "DiagnosticableNode.value");
  diagnostics$.DiagnosticableNode$ = dart.generic(T => {
    class DiagnosticableNode extends diagnostics$.DiagnosticsNode {
      get value() {
        return this[value$0];
      }
      set value(value) {
        super.value = value;
      }
      get builder() {
        let t6;
        if (false) return null;
        if (this[_cachedBuilder] == null) {
          this[_cachedBuilder] = new diagnostics$.DiagnosticPropertiesBuilder.new();
          t6 = this.value;
          t6 == null ? null : t6.debugFillProperties(this[_cachedBuilder]);
        }
        return this[_cachedBuilder];
      }
      get style() {
        let t6;
        return false ? diagnostics$.DiagnosticsTreeStyle.none : (t6 = super.style, t6 == null ? this.builder.defaultDiagnosticsTreeStyle : t6);
      }
      get emptyBodyDescription() {
        return false ? "" : this.builder.emptyBodyDescription;
      }
      getProperties() {
        return false ? C17 || CT.C17 : this.builder.properties;
      }
      getChildren() {
        return C17 || CT.C17;
      }
      toDescription(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (false) {
          return "";
        }
        return this.value.toStringShort();
      }
    }
    (DiagnosticableNode.new = function(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let style = opts && 'style' in opts ? opts.style : null;
      this[_cachedBuilder] = null;
      this[value$0] = value;
      if (!(value != null)) dart.assertFailed(null, L9, 2775, 15, "value != null");
      DiagnosticableNode.__proto__.new.call(this, {name: name, style: style});
      ;
    }).prototype = DiagnosticableNode.prototype;
    dart.addTypeTests(DiagnosticableNode);
    DiagnosticableNode.prototype[_is_DiagnosticableNode_default] = true;
    dart.addTypeCaches(DiagnosticableNode);
    dart.setMethodSignature(DiagnosticableNode, () => ({
      __proto__: dart.getMethods(DiagnosticableNode.__proto__),
      getProperties: dart.fnType(dart.legacy(core.List$(dart.legacy(diagnostics$.DiagnosticsNode))), []),
      getChildren: dart.fnType(dart.legacy(core.List$(dart.legacy(diagnostics$.DiagnosticsNode))), []),
      toDescription: dart.fnType(dart.legacy(core.String), [], {parentConfiguration: dart.legacy(diagnostics$.TextTreeConfiguration)}, {})
    }));
    dart.setGetterSignature(DiagnosticableNode, () => ({
      __proto__: dart.getGetters(DiagnosticableNode.__proto__),
      builder: dart.legacy(diagnostics$.DiagnosticPropertiesBuilder),
      style: dart.legacy(diagnostics$.DiagnosticsTreeStyle)
    }));
    dart.setLibraryUri(DiagnosticableNode, L10);
    dart.setFieldSignature(DiagnosticableNode, () => ({
      __proto__: dart.getFields(DiagnosticableNode.__proto__),
      value: dart.finalFieldType(dart.legacy(T)),
      [_cachedBuilder]: dart.fieldType(dart.legacy(diagnostics$.DiagnosticPropertiesBuilder))
    }));
    return DiagnosticableNode;
  });
  diagnostics$.DiagnosticableNode = diagnostics$.DiagnosticableNode$();
  dart.addTypeTests(diagnostics$.DiagnosticableNode, _is_DiagnosticableNode_default);
  assertions._FlutterErrorDetailsNode = class _FlutterErrorDetailsNode extends diagnostics$.DiagnosticableNode$(dart.legacy(assertions.FlutterErrorDetails)) {
    get builder() {
      let builder = super.builder;
      if (builder == null) {
        return null;
      }
      let properties = builder.properties;
      for (let transformer of assertions.FlutterErrorDetails.propertiesTransformers) {
        properties = transformer(properties);
      }
      return new diagnostics$.DiagnosticPropertiesBuilder.fromProperties(properties[$toList]());
    }
  };
  (assertions._FlutterErrorDetailsNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let style = opts && 'style' in opts ? opts.style : null;
    assertions._FlutterErrorDetailsNode.__proto__.new.call(this, {name: name, value: value, style: style});
    ;
  }).prototype = assertions._FlutterErrorDetailsNode.prototype;
  dart.addTypeTests(assertions._FlutterErrorDetailsNode);
  dart.addTypeCaches(assertions._FlutterErrorDetailsNode);
  dart.setLibraryUri(assertions._FlutterErrorDetailsNode, L11);
  assertions.debugPrintStack = function debugPrintStack(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let maxFrames = opts && 'maxFrames' in opts ? opts.maxFrames : null;
    if (label != null) print.debugPrint(label);
    let lines = dart.toString(core.StackTrace.current)[$trimRight]()[$split]("\n");
    if (true) {
      lines = lines[$skip](1);
    }
    if (maxFrames != null) lines = lines[$take](maxFrames);
    print.debugPrint(assertions.FlutterError.defaultStackFilter(lines)[$join]("\n"));
  };
  var C35;
  var C36;
  var C37;
  var C38;
  var C39;
  var C40;
  var C41;
  var C42;
  diagnostics$.DiagnosticLevel = class DiagnosticLevel extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (diagnostics$.DiagnosticLevel.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = diagnostics$.DiagnosticLevel.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticLevel);
  dart.addTypeCaches(diagnostics$.DiagnosticLevel);
  dart.setMethodSignature(diagnostics$.DiagnosticLevel, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticLevel.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticLevel, L10);
  dart.setFieldSignature(diagnostics$.DiagnosticLevel, () => ({
    __proto__: dart.getFields(diagnostics$.DiagnosticLevel.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$1]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(diagnostics$.DiagnosticLevel, ['toString']);
  diagnostics$.DiagnosticLevel.hidden = C35 || CT.C35;
  diagnostics$.DiagnosticLevel.fine = C36 || CT.C36;
  diagnostics$.DiagnosticLevel.debug = C29 || CT.C29;
  diagnostics$.DiagnosticLevel.info = C14 || CT.C14;
  diagnostics$.DiagnosticLevel.warning = C37 || CT.C37;
  diagnostics$.DiagnosticLevel.hint = C38 || CT.C38;
  diagnostics$.DiagnosticLevel.summary = C39 || CT.C39;
  diagnostics$.DiagnosticLevel.error = C40 || CT.C40;
  diagnostics$.DiagnosticLevel.off = C41 || CT.C41;
  diagnostics$.DiagnosticLevel.values = C42 || CT.C42;
  var C43;
  diagnostics$.DiagnosticsTreeStyle = class DiagnosticsTreeStyle extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (diagnostics$.DiagnosticsTreeStyle.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = diagnostics$.DiagnosticsTreeStyle.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticsTreeStyle);
  dart.addTypeCaches(diagnostics$.DiagnosticsTreeStyle);
  dart.setMethodSignature(diagnostics$.DiagnosticsTreeStyle, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticsTreeStyle.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticsTreeStyle, L10);
  dart.setFieldSignature(diagnostics$.DiagnosticsTreeStyle, () => ({
    __proto__: dart.getFields(diagnostics$.DiagnosticsTreeStyle.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$1]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(diagnostics$.DiagnosticsTreeStyle, ['toString']);
  diagnostics$.DiagnosticsTreeStyle.none = C19 || CT.C19;
  diagnostics$.DiagnosticsTreeStyle.sparse = C21 || CT.C21;
  diagnostics$.DiagnosticsTreeStyle.offstage = C22 || CT.C22;
  diagnostics$.DiagnosticsTreeStyle.dense = C20 || CT.C20;
  diagnostics$.DiagnosticsTreeStyle.transition = C24 || CT.C24;
  diagnostics$.DiagnosticsTreeStyle.error = C27 || CT.C27;
  diagnostics$.DiagnosticsTreeStyle.whitespace = C23 || CT.C23;
  diagnostics$.DiagnosticsTreeStyle.flat = C13 || CT.C13;
  diagnostics$.DiagnosticsTreeStyle.singleLine = C16 || CT.C16;
  diagnostics$.DiagnosticsTreeStyle.errorProperty = C25 || CT.C25;
  diagnostics$.DiagnosticsTreeStyle.shallow = C26 || CT.C26;
  diagnostics$.DiagnosticsTreeStyle.truncateChildren = C28 || CT.C28;
  diagnostics$.DiagnosticsTreeStyle.values = C43 || CT.C43;
  var prefixLineOne$ = dart.privateName(diagnostics$, "TextTreeConfiguration.prefixLineOne");
  var suffixLineOne$ = dart.privateName(diagnostics$, "TextTreeConfiguration.suffixLineOne");
  var prefixOtherLines$ = dart.privateName(diagnostics$, "TextTreeConfiguration.prefixOtherLines");
  var prefixLastChildLineOne$ = dart.privateName(diagnostics$, "TextTreeConfiguration.prefixLastChildLineOne");
  var prefixOtherLinesRootNode$ = dart.privateName(diagnostics$, "TextTreeConfiguration.prefixOtherLinesRootNode");
  var propertyPrefixIfChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.propertyPrefixIfChildren");
  var propertyPrefixNoChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.propertyPrefixNoChildren");
  var linkCharacter$ = dart.privateName(diagnostics$, "TextTreeConfiguration.linkCharacter");
  var childLinkSpace = dart.privateName(diagnostics$, "TextTreeConfiguration.childLinkSpace");
  var lineBreak$ = dart.privateName(diagnostics$, "TextTreeConfiguration.lineBreak");
  var lineBreakProperties$ = dart.privateName(diagnostics$, "TextTreeConfiguration.lineBreakProperties");
  var beforeName$ = dart.privateName(diagnostics$, "TextTreeConfiguration.beforeName");
  var afterName$ = dart.privateName(diagnostics$, "TextTreeConfiguration.afterName");
  var afterDescriptionIfBody$ = dart.privateName(diagnostics$, "TextTreeConfiguration.afterDescriptionIfBody");
  var afterDescription$ = dart.privateName(diagnostics$, "TextTreeConfiguration.afterDescription");
  var beforeProperties$ = dart.privateName(diagnostics$, "TextTreeConfiguration.beforeProperties");
  var afterProperties$ = dart.privateName(diagnostics$, "TextTreeConfiguration.afterProperties");
  var mandatoryAfterProperties$ = dart.privateName(diagnostics$, "TextTreeConfiguration.mandatoryAfterProperties");
  var propertySeparator$ = dart.privateName(diagnostics$, "TextTreeConfiguration.propertySeparator");
  var bodyIndent$ = dart.privateName(diagnostics$, "TextTreeConfiguration.bodyIndent");
  var showChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.showChildren");
  var addBlankLineIfNoChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.addBlankLineIfNoChildren");
  var isNameOnOwnLine$ = dart.privateName(diagnostics$, "TextTreeConfiguration.isNameOnOwnLine");
  var footer$ = dart.privateName(diagnostics$, "TextTreeConfiguration.footer");
  var manditoryFooter$ = dart.privateName(diagnostics$, "TextTreeConfiguration.manditoryFooter");
  var isBlankLineBetweenPropertiesAndChildren$ = dart.privateName(diagnostics$, "TextTreeConfiguration.isBlankLineBetweenPropertiesAndChildren");
  diagnostics$.TextTreeConfiguration = class TextTreeConfiguration extends core.Object {
    get prefixLineOne() {
      return this[prefixLineOne$];
    }
    set prefixLineOne(value) {
      super.prefixLineOne = value;
    }
    get suffixLineOne() {
      return this[suffixLineOne$];
    }
    set suffixLineOne(value) {
      super.suffixLineOne = value;
    }
    get prefixOtherLines() {
      return this[prefixOtherLines$];
    }
    set prefixOtherLines(value) {
      super.prefixOtherLines = value;
    }
    get prefixLastChildLineOne() {
      return this[prefixLastChildLineOne$];
    }
    set prefixLastChildLineOne(value) {
      super.prefixLastChildLineOne = value;
    }
    get prefixOtherLinesRootNode() {
      return this[prefixOtherLinesRootNode$];
    }
    set prefixOtherLinesRootNode(value) {
      super.prefixOtherLinesRootNode = value;
    }
    get propertyPrefixIfChildren() {
      return this[propertyPrefixIfChildren$];
    }
    set propertyPrefixIfChildren(value) {
      super.propertyPrefixIfChildren = value;
    }
    get propertyPrefixNoChildren() {
      return this[propertyPrefixNoChildren$];
    }
    set propertyPrefixNoChildren(value) {
      super.propertyPrefixNoChildren = value;
    }
    get linkCharacter() {
      return this[linkCharacter$];
    }
    set linkCharacter(value) {
      super.linkCharacter = value;
    }
    get childLinkSpace() {
      return this[childLinkSpace];
    }
    set childLinkSpace(value) {
      super.childLinkSpace = value;
    }
    get lineBreak() {
      return this[lineBreak$];
    }
    set lineBreak(value) {
      super.lineBreak = value;
    }
    get lineBreakProperties() {
      return this[lineBreakProperties$];
    }
    set lineBreakProperties(value) {
      super.lineBreakProperties = value;
    }
    get beforeName() {
      return this[beforeName$];
    }
    set beforeName(value) {
      super.beforeName = value;
    }
    get afterName() {
      return this[afterName$];
    }
    set afterName(value) {
      super.afterName = value;
    }
    get afterDescriptionIfBody() {
      return this[afterDescriptionIfBody$];
    }
    set afterDescriptionIfBody(value) {
      super.afterDescriptionIfBody = value;
    }
    get afterDescription() {
      return this[afterDescription$];
    }
    set afterDescription(value) {
      super.afterDescription = value;
    }
    get beforeProperties() {
      return this[beforeProperties$];
    }
    set beforeProperties(value) {
      super.beforeProperties = value;
    }
    get afterProperties() {
      return this[afterProperties$];
    }
    set afterProperties(value) {
      super.afterProperties = value;
    }
    get mandatoryAfterProperties() {
      return this[mandatoryAfterProperties$];
    }
    set mandatoryAfterProperties(value) {
      super.mandatoryAfterProperties = value;
    }
    get propertySeparator() {
      return this[propertySeparator$];
    }
    set propertySeparator(value) {
      super.propertySeparator = value;
    }
    get bodyIndent() {
      return this[bodyIndent$];
    }
    set bodyIndent(value) {
      super.bodyIndent = value;
    }
    get showChildren() {
      return this[showChildren$];
    }
    set showChildren(value) {
      super.showChildren = value;
    }
    get addBlankLineIfNoChildren() {
      return this[addBlankLineIfNoChildren$];
    }
    set addBlankLineIfNoChildren(value) {
      super.addBlankLineIfNoChildren = value;
    }
    get isNameOnOwnLine() {
      return this[isNameOnOwnLine$];
    }
    set isNameOnOwnLine(value) {
      super.isNameOnOwnLine = value;
    }
    get footer() {
      return this[footer$];
    }
    set footer(value) {
      super.footer = value;
    }
    get manditoryFooter() {
      return this[manditoryFooter$];
    }
    set manditoryFooter(value) {
      super.manditoryFooter = value;
    }
    get isBlankLineBetweenPropertiesAndChildren() {
      return this[isBlankLineBetweenPropertiesAndChildren$];
    }
    set isBlankLineBetweenPropertiesAndChildren(value) {
      super.isBlankLineBetweenPropertiesAndChildren = value;
    }
  };
  (diagnostics$.TextTreeConfiguration.new = function(opts) {
    let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : null;
    let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
    let prefixLastChildLineOne = opts && 'prefixLastChildLineOne' in opts ? opts.prefixLastChildLineOne : null;
    let prefixOtherLinesRootNode = opts && 'prefixOtherLinesRootNode' in opts ? opts.prefixOtherLinesRootNode : null;
    let linkCharacter = opts && 'linkCharacter' in opts ? opts.linkCharacter : null;
    let propertyPrefixIfChildren = opts && 'propertyPrefixIfChildren' in opts ? opts.propertyPrefixIfChildren : null;
    let propertyPrefixNoChildren = opts && 'propertyPrefixNoChildren' in opts ? opts.propertyPrefixNoChildren : null;
    let lineBreak = opts && 'lineBreak' in opts ? opts.lineBreak : "\n";
    let lineBreakProperties = opts && 'lineBreakProperties' in opts ? opts.lineBreakProperties : true;
    let afterName = opts && 'afterName' in opts ? opts.afterName : ":";
    let afterDescriptionIfBody = opts && 'afterDescriptionIfBody' in opts ? opts.afterDescriptionIfBody : "";
    let afterDescription = opts && 'afterDescription' in opts ? opts.afterDescription : "";
    let beforeProperties = opts && 'beforeProperties' in opts ? opts.beforeProperties : "";
    let afterProperties = opts && 'afterProperties' in opts ? opts.afterProperties : "";
    let mandatoryAfterProperties = opts && 'mandatoryAfterProperties' in opts ? opts.mandatoryAfterProperties : "";
    let propertySeparator = opts && 'propertySeparator' in opts ? opts.propertySeparator : "";
    let bodyIndent = opts && 'bodyIndent' in opts ? opts.bodyIndent : "";
    let footer = opts && 'footer' in opts ? opts.footer : "";
    let showChildren = opts && 'showChildren' in opts ? opts.showChildren : true;
    let addBlankLineIfNoChildren = opts && 'addBlankLineIfNoChildren' in opts ? opts.addBlankLineIfNoChildren : true;
    let isNameOnOwnLine = opts && 'isNameOnOwnLine' in opts ? opts.isNameOnOwnLine : false;
    let isBlankLineBetweenPropertiesAndChildren = opts && 'isBlankLineBetweenPropertiesAndChildren' in opts ? opts.isBlankLineBetweenPropertiesAndChildren : true;
    let beforeName = opts && 'beforeName' in opts ? opts.beforeName : "";
    let suffixLineOne = opts && 'suffixLineOne' in opts ? opts.suffixLineOne : "";
    let manditoryFooter = opts && 'manditoryFooter' in opts ? opts.manditoryFooter : "";
    this[prefixLineOne$] = prefixLineOne;
    this[prefixOtherLines$] = prefixOtherLines;
    this[prefixLastChildLineOne$] = prefixLastChildLineOne;
    this[prefixOtherLinesRootNode$] = prefixOtherLinesRootNode;
    this[linkCharacter$] = linkCharacter;
    this[propertyPrefixIfChildren$] = propertyPrefixIfChildren;
    this[propertyPrefixNoChildren$] = propertyPrefixNoChildren;
    this[lineBreak$] = lineBreak;
    this[lineBreakProperties$] = lineBreakProperties;
    this[afterName$] = afterName;
    this[afterDescriptionIfBody$] = afterDescriptionIfBody;
    this[afterDescription$] = afterDescription;
    this[beforeProperties$] = beforeProperties;
    this[afterProperties$] = afterProperties;
    this[mandatoryAfterProperties$] = mandatoryAfterProperties;
    this[propertySeparator$] = propertySeparator;
    this[bodyIndent$] = bodyIndent;
    this[footer$] = footer;
    this[showChildren$] = showChildren;
    this[addBlankLineIfNoChildren$] = addBlankLineIfNoChildren;
    this[isNameOnOwnLine$] = isNameOnOwnLine;
    this[isBlankLineBetweenPropertiesAndChildren$] = isBlankLineBetweenPropertiesAndChildren;
    this[beforeName$] = beforeName;
    this[suffixLineOne$] = suffixLineOne;
    this[manditoryFooter$] = manditoryFooter;
    if (!(prefixLineOne != null)) dart.assertFailed(null, L9, 218, 15, "prefixLineOne != null");
    if (!(prefixOtherLines != null)) dart.assertFailed(null, L9, 219, 15, "prefixOtherLines != null");
    if (!(prefixLastChildLineOne != null)) dart.assertFailed(null, L9, 220, 15, "prefixLastChildLineOne != null");
    if (!(prefixOtherLinesRootNode != null)) dart.assertFailed(null, L9, 221, 15, "prefixOtherLinesRootNode != null");
    if (!(linkCharacter != null)) dart.assertFailed(null, L9, 222, 15, "linkCharacter != null");
    if (!(propertyPrefixIfChildren != null)) dart.assertFailed(null, L9, 223, 15, "propertyPrefixIfChildren != null");
    if (!(propertyPrefixNoChildren != null)) dart.assertFailed(null, L9, 224, 15, "propertyPrefixNoChildren != null");
    if (!(lineBreak != null)) dart.assertFailed(null, L9, 225, 15, "lineBreak != null");
    if (!(lineBreakProperties != null)) dart.assertFailed(null, L9, 226, 15, "lineBreakProperties != null");
    if (!(afterName != null)) dart.assertFailed(null, L9, 227, 15, "afterName != null");
    if (!(afterDescriptionIfBody != null)) dart.assertFailed(null, L9, 228, 15, "afterDescriptionIfBody != null");
    if (!(afterDescription != null)) dart.assertFailed(null, L9, 229, 15, "afterDescription != null");
    if (!(beforeProperties != null)) dart.assertFailed(null, L9, 230, 15, "beforeProperties != null");
    if (!(afterProperties != null)) dart.assertFailed(null, L9, 231, 15, "afterProperties != null");
    if (!(propertySeparator != null)) dart.assertFailed(null, L9, 232, 15, "propertySeparator != null");
    if (!(bodyIndent != null)) dart.assertFailed(null, L9, 233, 15, "bodyIndent != null");
    if (!(footer != null)) dart.assertFailed(null, L9, 234, 15, "footer != null");
    if (!(showChildren != null)) dart.assertFailed(null, L9, 235, 15, "showChildren != null");
    if (!(addBlankLineIfNoChildren != null)) dart.assertFailed(null, L9, 236, 15, "addBlankLineIfNoChildren != null");
    if (!(isNameOnOwnLine != null)) dart.assertFailed(null, L9, 237, 15, "isNameOnOwnLine != null");
    if (!(isBlankLineBetweenPropertiesAndChildren != null)) dart.assertFailed(null, L9, 238, 15, "isBlankLineBetweenPropertiesAndChildren != null");
    this[childLinkSpace] = " "[$times](linkCharacter.length);
    ;
  }).prototype = diagnostics$.TextTreeConfiguration.prototype;
  dart.addTypeTests(diagnostics$.TextTreeConfiguration);
  dart.addTypeCaches(diagnostics$.TextTreeConfiguration);
  dart.setLibraryUri(diagnostics$.TextTreeConfiguration, L10);
  dart.setFieldSignature(diagnostics$.TextTreeConfiguration, () => ({
    __proto__: dart.getFields(diagnostics$.TextTreeConfiguration.__proto__),
    prefixLineOne: dart.finalFieldType(dart.legacy(core.String)),
    suffixLineOne: dart.finalFieldType(dart.legacy(core.String)),
    prefixOtherLines: dart.finalFieldType(dart.legacy(core.String)),
    prefixLastChildLineOne: dart.finalFieldType(dart.legacy(core.String)),
    prefixOtherLinesRootNode: dart.finalFieldType(dart.legacy(core.String)),
    propertyPrefixIfChildren: dart.finalFieldType(dart.legacy(core.String)),
    propertyPrefixNoChildren: dart.finalFieldType(dart.legacy(core.String)),
    linkCharacter: dart.finalFieldType(dart.legacy(core.String)),
    childLinkSpace: dart.finalFieldType(dart.legacy(core.String)),
    lineBreak: dart.finalFieldType(dart.legacy(core.String)),
    lineBreakProperties: dart.finalFieldType(dart.legacy(core.bool)),
    beforeName: dart.finalFieldType(dart.legacy(core.String)),
    afterName: dart.finalFieldType(dart.legacy(core.String)),
    afterDescriptionIfBody: dart.finalFieldType(dart.legacy(core.String)),
    afterDescription: dart.finalFieldType(dart.legacy(core.String)),
    beforeProperties: dart.finalFieldType(dart.legacy(core.String)),
    afterProperties: dart.finalFieldType(dart.legacy(core.String)),
    mandatoryAfterProperties: dart.finalFieldType(dart.legacy(core.String)),
    propertySeparator: dart.finalFieldType(dart.legacy(core.String)),
    bodyIndent: dart.finalFieldType(dart.legacy(core.String)),
    showChildren: dart.finalFieldType(dart.legacy(core.bool)),
    addBlankLineIfNoChildren: dart.finalFieldType(dart.legacy(core.bool)),
    isNameOnOwnLine: dart.finalFieldType(dart.legacy(core.bool)),
    footer: dart.finalFieldType(dart.legacy(core.String)),
    manditoryFooter: dart.finalFieldType(dart.legacy(core.String)),
    isBlankLineBetweenPropertiesAndChildren: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var C44;
  var C45;
  var C46;
  var C47;
  diagnostics$._WordWrapParseMode = class _WordWrapParseMode extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (diagnostics$._WordWrapParseMode.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = diagnostics$._WordWrapParseMode.prototype;
  dart.addTypeTests(diagnostics$._WordWrapParseMode);
  dart.addTypeCaches(diagnostics$._WordWrapParseMode);
  dart.setMethodSignature(diagnostics$._WordWrapParseMode, () => ({
    __proto__: dart.getMethods(diagnostics$._WordWrapParseMode.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(diagnostics$._WordWrapParseMode, L10);
  dart.setFieldSignature(diagnostics$._WordWrapParseMode, () => ({
    __proto__: dart.getFields(diagnostics$._WordWrapParseMode.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$1]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(diagnostics$._WordWrapParseMode, ['toString']);
  diagnostics$._WordWrapParseMode.inSpace = C44 || CT.C44;
  diagnostics$._WordWrapParseMode.inWord = C45 || CT.C45;
  diagnostics$._WordWrapParseMode.atBreak = C46 || CT.C46;
  diagnostics$._WordWrapParseMode.values = C47 || CT.C47;
  var _nextPrefixOtherLines = dart.privateName(diagnostics$, "_nextPrefixOtherLines");
  var _buffer = dart.privateName(diagnostics$, "_buffer");
  var _currentLine = dart.privateName(diagnostics$, "_currentLine");
  var _wrappableRanges = dart.privateName(diagnostics$, "_wrappableRanges");
  var _numLines = dart.privateName(diagnostics$, "_numLines");
  var _prefixOtherLines = dart.privateName(diagnostics$, "_prefixOtherLines");
  var _getCurrentPrefix = dart.privateName(diagnostics$, "_getCurrentPrefix");
  var _writeLine = dart.privateName(diagnostics$, "_writeLine");
  var _finalizeLine = dart.privateName(diagnostics$, "_finalizeLine");
  var _updatePrefix = dart.privateName(diagnostics$, "_updatePrefix");
  diagnostics$._PrefixedStringBuilder = class _PrefixedStringBuilder extends core.Object {
    get prefixOtherLines() {
      let t6;
      t6 = this[_nextPrefixOtherLines];
      return t6 == null ? this[_prefixOtherLines] : t6;
    }
    set prefixOtherLines(prefix) {
      this[_prefixOtherLines] = prefix;
      this[_nextPrefixOtherLines] = null;
    }
    incrementPrefixOtherLines(suffix, opts) {
      let updateCurrentLine = opts && 'updateCurrentLine' in opts ? opts.updateCurrentLine : null;
      if (dart.test(this[_currentLine].isEmpty) || dart.test(updateCurrentLine)) {
        this[_prefixOtherLines] = dart.notNull(this.prefixOtherLines) + dart.notNull(suffix);
        this[_nextPrefixOtherLines] = null;
      } else {
        this[_nextPrefixOtherLines] = dart.notNull(this.prefixOtherLines) + dart.notNull(suffix);
      }
    }
    get requiresMultipleLines() {
      return dart.notNull(this[_numLines]) > 1 || this[_numLines] === 1 && dart.test(this[_currentLine].isNotEmpty) || dart.notNull(this[_currentLine].length) + this[_getCurrentPrefix](true).length > dart.notNull(this.wrapWidth);
    }
    get isCurrentLineEmpty() {
      return this[_currentLine].isEmpty;
    }
    [_finalizeLine](addTrailingLineBreak) {
      let firstLine = this[_buffer].isEmpty;
      let text = dart.toString(this[_currentLine]);
      this[_currentLine].clear();
      if (dart.test(this[_wrappableRanges][$isEmpty])) {
        this[_writeLine](text, {includeLineBreak: addTrailingLineBreak, firstLine: firstLine});
        return;
      }
      let lines = diagnostics$._PrefixedStringBuilder._wordWrapLine(text, this[_wrappableRanges], this.wrapWidth, {startOffset: dart.test(firstLine) ? this.prefixLineOne.length : this[_prefixOtherLines].length, otherLineOffset: dart.test(firstLine) ? this[_prefixOtherLines].length : this[_prefixOtherLines].length});
      let i = 0;
      let length = lines[$length];
      for (let line of lines) {
        i = i + 1;
        this[_writeLine](line, {includeLineBreak: dart.test(addTrailingLineBreak) || i < dart.notNull(length), firstLine: firstLine});
      }
      this[_wrappableRanges][$clear]();
    }
    static _wordWrapLine(message, wrapRanges, width, opts) {
      let startOffset = opts && 'startOffset' in opts ? opts.startOffset : 0;
      let otherLineOffset = opts && 'otherLineOffset' in opts ? opts.otherLineOffset : 0;
      return new (SyncIterableOfStringL()).new(function* _wordWrapLine() {
        if (message.length + dart.notNull(startOffset) < dart.notNull(width)) {
          yield message;
          return;
        }
        let startForLengthCalculations = -dart.notNull(startOffset);
        let addPrefix = false;
        let index = 0;
        let mode = diagnostics$._WordWrapParseMode.inSpace;
        let lastWordStart = null;
        let lastWordEnd = null;
        let start = 0;
        let currentChunk = 0;
        function noWrap(index) {
          while (true) {
            if (currentChunk >= dart.notNull(wrapRanges[$length])) return true;
            if (dart.notNull(index) < dart.notNull(wrapRanges[$_get](currentChunk + 1))) break;
            currentChunk = currentChunk + 2;
          }
          return dart.notNull(index) < dart.notNull(wrapRanges[$_get](currentChunk));
        }
        dart.fn(noWrap, intLToboolL());
        while (true) {
          switch (mode) {
            case C44 || CT.C44:
            {
              while (index < message.length && message[$_get](index) === " ")
                index = index + 1;
              lastWordStart = index;
              mode = diagnostics$._WordWrapParseMode.inWord;
              break;
            }
            case C45 || CT.C45:
            {
              while (index < message.length && (message[$_get](index) !== " " || dart.test(noWrap(index))))
                index = index + 1;
              mode = diagnostics$._WordWrapParseMode.atBreak;
              break;
            }
            case C46 || CT.C46:
            {
              if (index - startForLengthCalculations > dart.notNull(width) || index === message.length) {
                if (index - startForLengthCalculations <= dart.notNull(width) || lastWordEnd == null) {
                  lastWordEnd = index;
                }
                let line = message[$substring](start, lastWordEnd);
                yield line;
                addPrefix = true;
                if (dart.notNull(lastWordEnd) >= message.length) return;
                if (lastWordEnd === index) {
                  while (index < message.length && message[$_get](index) === " ")
                    index = index + 1;
                  start = index;
                  mode = diagnostics$._WordWrapParseMode.inWord;
                } else {
                  if (!(dart.notNull(lastWordStart) > dart.notNull(lastWordEnd))) dart.assertFailed(null, L9, 935, 22, "lastWordStart > lastWordEnd");
                  start = lastWordStart;
                  mode = diagnostics$._WordWrapParseMode.atBreak;
                }
                startForLengthCalculations = dart.notNull(start) - dart.notNull(otherLineOffset);
                if (!addPrefix) dart.assertFailed(null, L9, 940, 20, "addPrefix");
                lastWordEnd = null;
              } else {
                lastWordEnd = index;
                mode = diagnostics$._WordWrapParseMode.inSpace;
              }
              break;
            }
          }
        }
      });
    }
    write(s, opts) {
      let t6;
      let allowWrap = opts && 'allowWrap' in opts ? opts.allowWrap : false;
      if (s[$isEmpty]) return;
      let lines = s[$split]("\n");
      for (let i = 0; i < dart.notNull(lines[$length]); i = i + 1) {
        if (i > 0) {
          this[_finalizeLine](true);
          this[_updatePrefix]();
        }
        let line = lines[$_get](i);
        if (line[$isNotEmpty]) {
          if (dart.test(allowWrap) && this.wrapWidth != null) {
            let wrapStart = this[_currentLine].length;
            let wrapEnd = dart.notNull(wrapStart) + line.length;
            if (dart.test(this[_wrappableRanges][$isNotEmpty]) && this[_wrappableRanges][$last] == wrapStart) {
              this[_wrappableRanges][$last] = wrapEnd;
            } else {
              t6 = this[_wrappableRanges];
              (() => {
                t6[$add](wrapStart);
                t6[$add](wrapEnd);
                return t6;
              })();
            }
          }
          this[_currentLine].write(line);
        }
      }
    }
    [_updatePrefix]() {
      if (this[_nextPrefixOtherLines] != null) {
        this[_prefixOtherLines] = this[_nextPrefixOtherLines];
        this[_nextPrefixOtherLines] = null;
      }
    }
    [_writeLine](line, opts) {
      let includeLineBreak = opts && 'includeLineBreak' in opts ? opts.includeLineBreak : null;
      let firstLine = opts && 'firstLine' in opts ? opts.firstLine : null;
      line = dart.str(this[_getCurrentPrefix](firstLine)) + dart.str(line);
      this[_buffer].write(line[$trimRight]());
      if (dart.test(includeLineBreak)) this[_buffer].write("\n");
      this[_numLines] = dart.notNull(this[_numLines]) + 1;
    }
    [_getCurrentPrefix](firstLine) {
      return dart.test(this[_buffer].isEmpty) ? this.prefixLineOne : dart.test(firstLine) ? this[_prefixOtherLines] : this[_prefixOtherLines];
    }
    writeRawLines(lines) {
      if (lines[$isEmpty]) return;
      if (dart.test(this[_currentLine].isNotEmpty)) {
        this[_finalizeLine](true);
      }
      if (!dart.test(this[_currentLine].isEmpty)) dart.assertFailed(null, L9, 1016, 13, "_currentLine.isEmpty");
      this[_buffer].write(lines);
      if (!lines[$endsWith]("\n")) this[_buffer].write("\n");
      this[_numLines] = dart.notNull(this[_numLines]) + 1;
      this[_updatePrefix]();
    }
    writeStretched(text, targetLineLength) {
      this.write(text);
      let currentLineLength = dart.notNull(this[_currentLine].length) + this[_getCurrentPrefix](this[_buffer].isEmpty).length;
      if (!(dart.notNull(this[_currentLine].length) > 0)) dart.assertFailed(null, L9, 1029, 13, "_currentLine.length > 0");
      let targetLength = dart.notNull(targetLineLength) - currentLineLength;
      if (targetLength > 0) {
        if (!text[$isNotEmpty]) dart.assertFailed(null, L9, 1032, 14, "text.isNotEmpty");
        let lastChar = text[$_get](text.length - 1);
        if (!(lastChar !== "\n")) dart.assertFailed(null, L9, 1034, 14, "lastChar != '\\n'");
        this[_currentLine].write(lastChar[$times](targetLength));
      }
      this[_wrappableRanges][$clear]();
    }
    build() {
      if (dart.test(this[_currentLine].isNotEmpty)) this[_finalizeLine](false);
      return dart.toString(this[_buffer]);
    }
  };
  (diagnostics$._PrefixedStringBuilder.new = function(opts) {
    let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : null;
    let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    this[_nextPrefixOtherLines] = null;
    this[_buffer] = new core.StringBuffer.new();
    this[_currentLine] = new core.StringBuffer.new();
    this[_wrappableRanges] = JSArrayOfintL().of([]);
    this[_numLines] = 0;
    this.prefixLineOne = prefixLineOne;
    this.wrapWidth = wrapWidth;
    this[_prefixOtherLines] = prefixOtherLines;
    ;
  }).prototype = diagnostics$._PrefixedStringBuilder.prototype;
  dart.addTypeTests(diagnostics$._PrefixedStringBuilder);
  dart.addTypeCaches(diagnostics$._PrefixedStringBuilder);
  dart.setMethodSignature(diagnostics$._PrefixedStringBuilder, () => ({
    __proto__: dart.getMethods(diagnostics$._PrefixedStringBuilder.__proto__),
    incrementPrefixOtherLines: dart.fnType(dart.void, [dart.legacy(core.String)], {updateCurrentLine: dart.legacy(core.bool)}, {}),
    [_finalizeLine]: dart.fnType(dart.void, [dart.legacy(core.bool)]),
    write: dart.fnType(dart.void, [dart.legacy(core.String)], {allowWrap: dart.legacy(core.bool)}, {}),
    [_updatePrefix]: dart.fnType(dart.void, []),
    [_writeLine]: dart.fnType(dart.void, [dart.legacy(core.String)], {firstLine: dart.legacy(core.bool), includeLineBreak: dart.legacy(core.bool)}, {}),
    [_getCurrentPrefix]: dart.fnType(dart.legacy(core.String), [dart.legacy(core.bool)]),
    writeRawLines: dart.fnType(dart.void, [dart.legacy(core.String)]),
    writeStretched: dart.fnType(dart.void, [dart.legacy(core.String), dart.legacy(core.int)]),
    build: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setGetterSignature(diagnostics$._PrefixedStringBuilder, () => ({
    __proto__: dart.getGetters(diagnostics$._PrefixedStringBuilder.__proto__),
    prefixOtherLines: dart.legacy(core.String),
    requiresMultipleLines: dart.legacy(core.bool),
    isCurrentLineEmpty: dart.legacy(core.bool)
  }));
  dart.setSetterSignature(diagnostics$._PrefixedStringBuilder, () => ({
    __proto__: dart.getSetters(diagnostics$._PrefixedStringBuilder.__proto__),
    prefixOtherLines: dart.legacy(core.String)
  }));
  dart.setLibraryUri(diagnostics$._PrefixedStringBuilder, L10);
  dart.setFieldSignature(diagnostics$._PrefixedStringBuilder, () => ({
    __proto__: dart.getFields(diagnostics$._PrefixedStringBuilder.__proto__),
    prefixLineOne: dart.finalFieldType(dart.legacy(core.String)),
    [_prefixOtherLines]: dart.fieldType(dart.legacy(core.String)),
    [_nextPrefixOtherLines]: dart.fieldType(dart.legacy(core.String)),
    wrapWidth: dart.finalFieldType(dart.legacy(core.int)),
    [_buffer]: dart.finalFieldType(dart.legacy(core.StringBuffer)),
    [_currentLine]: dart.finalFieldType(dart.legacy(core.StringBuffer)),
    [_wrappableRanges]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.int)))),
    [_numLines]: dart.fieldType(dart.legacy(core.int))
  }));
  diagnostics$._NoDefaultValue = class _NoDefaultValue extends core.Object {};
  (diagnostics$._NoDefaultValue.new = function() {
    ;
  }).prototype = diagnostics$._NoDefaultValue.prototype;
  dart.addTypeTests(diagnostics$._NoDefaultValue);
  dart.addTypeCaches(diagnostics$._NoDefaultValue);
  dart.setLibraryUri(diagnostics$._NoDefaultValue, L10);
  var _minLevel = dart.privateName(diagnostics$, "_minLevel");
  var _wrapWidth = dart.privateName(diagnostics$, "_wrapWidth");
  var _wrapWidthProperties = dart.privateName(diagnostics$, "_wrapWidthProperties");
  var _maxDescendentsTruncatableNode = dart.privateName(diagnostics$, "_maxDescendentsTruncatableNode");
  var _childTextConfiguration = dart.privateName(diagnostics$, "_childTextConfiguration");
  diagnostics$.TextTreeRenderer = class TextTreeRenderer extends core.Object {
    [_childTextConfiguration](child, textStyle) {
      let t6;
      let childStyle = (t6 = child, t6 == null ? null : t6.style);
      return dart.test(diagnostics$._isSingleLine(childStyle)) || childStyle == diagnostics$.DiagnosticsTreeStyle.errorProperty ? textStyle : child.textTreeConfiguration;
    }
    render(node, opts) {
      let t6, t6$, t6$0;
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (false) {
        return "";
      }
      let isSingleLine = dart.test(diagnostics$._isSingleLine(node.style)) && !dart.equals((t6 = parentConfiguration, t6 == null ? null : t6.lineBreakProperties), true);
      prefixOtherLines == null ? prefixOtherLines = prefixLineOne : null;
      if (node.linePrefix != null) {
        prefixLineOne = dart.notNull(prefixLineOne) + dart.notNull(node.linePrefix);
        prefixOtherLines = dart.notNull(prefixOtherLines) + dart.notNull(node.linePrefix);
      }
      let config = node.textTreeConfiguration;
      if (prefixOtherLines[$isEmpty]) prefixOtherLines = dart.notNull(prefixOtherLines) + dart.notNull(config.prefixOtherLinesRootNode);
      if (node.style == diagnostics$.DiagnosticsTreeStyle.truncateChildren) {
        let descendants = JSArrayOfStringL().of([]);
        let depth = 0;
        let lines = 0;
        function visitor(node) {
          for (let child of node.getChildren()) {
            if (lines < 25) {
              depth = depth + 1;
              descendants[$add](dart.str(prefixOtherLines) + dart.str("  "[$times](depth)) + dart.str(child));
              if (depth < 5) visitor(child);
              depth = depth - 1;
            } else if (lines === 25) {
              descendants[$add](dart.str(prefixOtherLines) + "  ...(descendants list truncated after " + dart.str(lines) + " lines)");
            }
            lines = lines + 1;
          }
        }
        dart.fn(visitor, DiagnosticsNodeLTovoid());
        visitor(node);
        let information = new core.StringBuffer.new(prefixLineOne);
        if (lines > 1) {
          information.writeln("This " + dart.str(node.name) + " had the following descendants (showing up to depth " + dart.str(5) + "):");
        } else if (descendants[$length] === 1) {
          information.writeln("This " + dart.str(node.name) + " had the following child:");
        } else {
          information.writeln("This " + dart.str(node.name) + " has no descendants.");
        }
        information.writeAll(descendants, "\n");
        return information.toString();
      }
      let builder = new diagnostics$._PrefixedStringBuilder.new({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, wrapWidth: math.max(intL(), this[_wrapWidth], prefixOtherLines.length + dart.notNull(this[_wrapWidthProperties]))});
      let children = node.getChildren();
      let description = node.toDescription({parentConfiguration: parentConfiguration});
      if (config.beforeName[$isNotEmpty]) {
        builder.write(config.beforeName);
      }
      let wrapName = !isSingleLine && dart.test(node.allowNameWrap);
      let wrapDescription = !isSingleLine && dart.test(node.allowWrap);
      let uppercaseTitle = node.style == diagnostics$.DiagnosticsTreeStyle.error;
      let name = node.name;
      if (uppercaseTitle) {
        name = (t6$ = name, t6$ == null ? null : t6$[$toUpperCase]());
      }
      if (description == null || description[$isEmpty]) {
        if (dart.test(node.showName) && name != null) builder.write(name, {allowWrap: wrapName});
      } else {
        let includeName = false;
        if (name != null && name[$isNotEmpty] && dart.test(node.showName)) {
          includeName = true;
          builder.write(name, {allowWrap: wrapName});
          if (dart.test(node.showSeparator)) builder.write(config.afterName, {allowWrap: wrapName});
          builder.write(dart.test(config.isNameOnOwnLine) || description[$contains]("\n") ? "\n" : " ", {allowWrap: wrapName});
        }
        if (!isSingleLine && dart.test(builder.requiresMultipleLines) && !dart.test(builder.isCurrentLineEmpty)) {
          builder.write("\n");
        }
        if (includeName) {
          builder.incrementPrefixOtherLines(dart.test(children[$isEmpty]) ? config.propertyPrefixNoChildren : config.propertyPrefixIfChildren, {updateCurrentLine: true});
        }
        if (uppercaseTitle) {
          description = description[$toUpperCase]();
        }
        builder.write(description[$trimRight](), {allowWrap: wrapDescription});
        if (!includeName) {
          builder.incrementPrefixOtherLines(dart.test(children[$isEmpty]) ? config.propertyPrefixNoChildren : config.propertyPrefixIfChildren, {updateCurrentLine: false});
        }
      }
      if (config.suffixLineOne[$isNotEmpty]) {
        builder.writeStretched(config.suffixLineOne, builder.wrapWidth);
      }
      let propertiesIterable = node.getProperties()[$where](dart.fn(n => !dart.test(n.isFiltered(this[_minLevel])), DiagnosticsNodeLToboolL()));
      let properties = null;
      if (dart.notNull(this[_maxDescendentsTruncatableNode]) >= 0 && dart.test(node.allowTruncate)) {
        if (dart.notNull(propertiesIterable[$length]) < dart.notNull(this[_maxDescendentsTruncatableNode])) {
          properties = propertiesIterable[$take](this[_maxDescendentsTruncatableNode])[$toList]();
          properties[$add](diagnostics$.DiagnosticsNode.message("..."));
        } else {
          properties = propertiesIterable[$toList]();
        }
        if (dart.notNull(this[_maxDescendentsTruncatableNode]) < dart.notNull(children[$length])) {
          children = children[$take](this[_maxDescendentsTruncatableNode])[$toList]();
          children[$add](diagnostics$.DiagnosticsNode.message("..."));
        }
      } else {
        properties = propertiesIterable[$toList]();
      }
      if ((dart.test(properties[$isNotEmpty]) || dart.test(children[$isNotEmpty]) || node.emptyBodyDescription != null) && (dart.test(node.showSeparator) || dart.equals((t6$0 = description, t6$0 == null ? null : t6$0[$isNotEmpty]), true))) {
        builder.write(config.afterDescriptionIfBody);
      }
      if (dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      if (dart.test(properties[$isNotEmpty])) builder.write(config.beforeProperties);
      builder.incrementPrefixOtherLines(config.bodyIndent, {updateCurrentLine: false});
      if (node.emptyBodyDescription != null && dart.test(properties[$isEmpty]) && dart.test(children[$isEmpty]) && prefixLineOne[$isNotEmpty]) {
        builder.write(node.emptyBodyDescription);
        if (dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      }
      for (let i = 0; i < dart.notNull(properties[$length]); i = i + 1) {
        let property = properties[$_get](i);
        if (i > 0) builder.write(config.propertySeparator);
        let propertyStyle = property.textTreeConfiguration;
        if (dart.test(diagnostics$._isSingleLine(property.style))) {
          let propertyRender = this.render(property, {prefixLineOne: dart.str(propertyStyle.prefixLineOne), prefixOtherLines: dart.str(propertyStyle.childLinkSpace) + dart.str(propertyStyle.prefixOtherLines), parentConfiguration: config});
          let propertyLines = propertyRender[$split]("\n");
          if (propertyLines[$length] === 1 && !dart.test(config.lineBreakProperties)) {
            builder.write(propertyLines[$first]);
          } else {
            builder.write(propertyRender, {allowWrap: false});
            if (!propertyRender[$endsWith]("\n")) builder.write("\n");
          }
        } else {
          let propertyRender = this.render(property, {prefixLineOne: dart.str(builder.prefixOtherLines) + dart.str(propertyStyle.prefixLineOne), prefixOtherLines: dart.str(builder.prefixOtherLines) + dart.str(propertyStyle.childLinkSpace) + dart.str(propertyStyle.prefixOtherLines), parentConfiguration: config});
          builder.writeRawLines(propertyRender);
        }
      }
      if (dart.test(properties[$isNotEmpty])) builder.write(config.afterProperties);
      builder.write(config.mandatoryAfterProperties);
      if (!dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      let prefixChildren = dart.str(config.bodyIndent);
      let prefixChildrenRaw = dart.str(prefixOtherLines) + prefixChildren;
      if (dart.test(children[$isEmpty]) && dart.test(config.addBlankLineIfNoChildren) && dart.test(builder.requiresMultipleLines) && builder.prefixOtherLines[$trimRight]()[$isNotEmpty]) {
        builder.write(config.lineBreak);
      }
      if (dart.test(children[$isNotEmpty]) && dart.test(config.showChildren)) {
        if (dart.test(config.isBlankLineBetweenPropertiesAndChildren) && dart.test(properties[$isNotEmpty]) && dart.test(children[$first].textTreeConfiguration.isBlankLineBetweenPropertiesAndChildren)) {
          builder.write(config.lineBreak);
        }
        builder.prefixOtherLines = prefixOtherLines;
        for (let i = 0; i < dart.notNull(children[$length]); i = i + 1) {
          let child = children[$_get](i);
          if (!(child != null)) dart.assertFailed(null, L9, 1333, 16, "child != null");
          let childConfig = this[_childTextConfiguration](child, config);
          if (i === dart.notNull(children[$length]) - 1) {
            let lastChildPrefixLineOne = prefixChildrenRaw + dart.str(childConfig.prefixLastChildLineOne);
            let childPrefixOtherLines = prefixChildrenRaw + dart.str(childConfig.childLinkSpace) + dart.str(childConfig.prefixOtherLines);
            builder.writeRawLines(this.render(child, {prefixLineOne: lastChildPrefixLineOne, prefixOtherLines: childPrefixOtherLines, parentConfiguration: config}));
            if (childConfig.footer[$isNotEmpty]) {
              builder.prefixOtherLines = prefixChildrenRaw;
              builder.write(dart.str(childConfig.childLinkSpace) + dart.str(childConfig.footer));
              if (childConfig.manditoryFooter[$isNotEmpty]) {
                builder.writeStretched(childConfig.manditoryFooter, math.max(intL(), builder.wrapWidth, dart.notNull(this[_wrapWidthProperties]) + childPrefixOtherLines.length));
              }
              builder.write(config.lineBreak);
            }
          } else {
            let nextChildStyle = this[_childTextConfiguration](children[$_get](i + 1), config);
            let childPrefixLineOne = prefixChildrenRaw + dart.str(childConfig.prefixLineOne);
            let childPrefixOtherLines = prefixChildrenRaw + dart.str(nextChildStyle.linkCharacter) + dart.str(childConfig.prefixOtherLines);
            builder.writeRawLines(this.render(child, {prefixLineOne: childPrefixLineOne, prefixOtherLines: childPrefixOtherLines, parentConfiguration: config}));
            if (childConfig.footer[$isNotEmpty]) {
              builder.prefixOtherLines = prefixChildrenRaw;
              builder.write(dart.str(childConfig.linkCharacter) + dart.str(childConfig.footer));
              if (childConfig.manditoryFooter[$isNotEmpty]) {
                builder.writeStretched(childConfig.manditoryFooter, math.max(intL(), builder.wrapWidth, dart.notNull(this[_wrapWidthProperties]) + childPrefixOtherLines.length));
              }
              builder.write(config.lineBreak);
            }
          }
        }
      }
      if (parentConfiguration == null && config.manditoryFooter[$isNotEmpty]) {
        builder.writeStretched(config.manditoryFooter, builder.wrapWidth);
        builder.write(config.lineBreak);
      }
      return builder.build();
    }
  };
  (diagnostics$.TextTreeRenderer.new = function(opts) {
    let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C29 || CT.C29;
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : 100;
    let wrapWidthProperties = opts && 'wrapWidthProperties' in opts ? opts.wrapWidthProperties : 65;
    let maxDescendentsTruncatableNode = opts && 'maxDescendentsTruncatableNode' in opts ? opts.maxDescendentsTruncatableNode : -1;
    if (!(minLevel != null)) dart.assertFailed(null, L9, 1083, 15, "minLevel != null");
    this[_minLevel] = minLevel;
    this[_wrapWidth] = wrapWidth;
    this[_wrapWidthProperties] = wrapWidthProperties;
    this[_maxDescendentsTruncatableNode] = maxDescendentsTruncatableNode;
    ;
  }).prototype = diagnostics$.TextTreeRenderer.prototype;
  dart.addTypeTests(diagnostics$.TextTreeRenderer);
  dart.addTypeCaches(diagnostics$.TextTreeRenderer);
  dart.setMethodSignature(diagnostics$.TextTreeRenderer, () => ({
    __proto__: dart.getMethods(diagnostics$.TextTreeRenderer.__proto__),
    [_childTextConfiguration]: dart.fnType(dart.legacy(diagnostics$.TextTreeConfiguration), [dart.legacy(diagnostics$.DiagnosticsNode), dart.legacy(diagnostics$.TextTreeConfiguration)]),
    render: dart.fnType(dart.legacy(core.String), [dart.legacy(diagnostics$.DiagnosticsNode)], {parentConfiguration: dart.legacy(diagnostics$.TextTreeConfiguration), prefixLineOne: dart.legacy(core.String), prefixOtherLines: dart.legacy(core.String)}, {})
  }));
  dart.setLibraryUri(diagnostics$.TextTreeRenderer, L10);
  dart.setFieldSignature(diagnostics$.TextTreeRenderer, () => ({
    __proto__: dart.getFields(diagnostics$.TextTreeRenderer.__proto__),
    [_wrapWidth]: dart.finalFieldType(dart.legacy(core.int)),
    [_wrapWidthProperties]: dart.finalFieldType(dart.legacy(core.int)),
    [_minLevel]: dart.finalFieldType(dart.legacy(diagnostics$.DiagnosticLevel)),
    [_maxDescendentsTruncatableNode]: dart.finalFieldType(dart.legacy(core.int))
  }));
  diagnostics$.MessageProperty = class MessageProperty extends diagnostics$.DiagnosticsProperty$(dart.void) {};
  (diagnostics$.MessageProperty.new = function(name, message, opts) {
    let style = opts && 'style' in opts ? opts.style : C16 || CT.C16;
    let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
    if (!(name != null)) dart.assertFailed(null, L9, 1761, 15, "name != null");
    if (!(message != null)) dart.assertFailed(null, L9, 1762, 15, "message != null");
    if (!(style != null)) dart.assertFailed(null, L9, 1763, 15, "style != null");
    if (!(level != null)) dart.assertFailed(null, L9, 1764, 15, "level != null");
    diagnostics$.MessageProperty.__proto__.new.call(this, name, null, {description: message, style: style, level: level});
    ;
  }).prototype = diagnostics$.MessageProperty.prototype;
  dart.addTypeTests(diagnostics$.MessageProperty);
  dart.addTypeCaches(diagnostics$.MessageProperty);
  dart.setLibraryUri(diagnostics$.MessageProperty, L10);
  var quoted$ = dart.privateName(diagnostics$, "StringProperty.quoted");
  diagnostics$.StringProperty = class StringProperty extends diagnostics$.DiagnosticsProperty$(dart.legacy(core.String)) {
    get quoted() {
      return this[quoted$];
    }
    set quoted(value) {
      super.quoted = value;
    }
    toJsonMap(delegate) {
      let json = super.toJsonMap(delegate);
      json[$_set]("quoted", this.quoted);
      return json;
    }
    valueToString(opts) {
      let t6;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let text = (t6 = this[_description], t6 == null ? this.value : t6);
      if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties) && text != null) {
        text = text[$replaceAll]("\n", "\\n");
      }
      if (dart.test(this.quoted) && text != null) {
        if (this.ifEmpty != null && text[$isEmpty]) return this.ifEmpty;
        return "\"" + dart.str(text) + "\"";
      }
      return dart.toString(text);
    }
  };
  (diagnostics$.StringProperty.new = function(name, value, opts) {
    let description = opts && 'description' in opts ? opts.description : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C15 || CT.C15;
    let quoted = opts && 'quoted' in opts ? opts.quoted : true;
    let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
    let style = opts && 'style' in opts ? opts.style : C16 || CT.C16;
    let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
    this[quoted$] = quoted;
    if (!(showName != null)) dart.assertFailed(null, L9, 1789, 15, "showName != null");
    if (!(quoted != null)) dart.assertFailed(null, L9, 1790, 15, "quoted != null");
    if (!(style != null)) dart.assertFailed(null, L9, 1791, 15, "style != null");
    if (!(level != null)) dart.assertFailed(null, L9, 1792, 15, "level != null");
    diagnostics$.StringProperty.__proto__.new.call(this, name, value, {description: description, defaultValue: defaultValue, tooltip: tooltip, showName: showName, ifEmpty: ifEmpty, style: style, level: level});
    ;
  }).prototype = diagnostics$.StringProperty.prototype;
  dart.addTypeTests(diagnostics$.StringProperty);
  dart.addTypeCaches(diagnostics$.StringProperty);
  dart.setLibraryUri(diagnostics$.StringProperty, L10);
  dart.setFieldSignature(diagnostics$.StringProperty, () => ({
    __proto__: dart.getFields(diagnostics$.StringProperty.__proto__),
    quoted: dart.finalFieldType(dart.legacy(core.bool))
  }));
  const _is__NumProperty_default = Symbol('_is__NumProperty_default');
  var unit$ = dart.privateName(diagnostics$, "_NumProperty.unit");
  diagnostics$._NumProperty$ = dart.generic(T => {
    class _NumProperty extends diagnostics$.DiagnosticsProperty$(dart.legacy(T)) {
      get unit() {
        return this[unit$];
      }
      set unit(value) {
        super.unit = value;
      }
      toJsonMap(delegate) {
        let json = super.toJsonMap(delegate);
        if (this.unit != null) json[$_set]("unit", this.unit);
        json[$_set]("numberToString", this.numberToString());
        return json;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        return this.unit != null ? dart.str(this.numberToString()) + dart.str(this.unit) : this.numberToString();
      }
    }
    (_NumProperty.new = function(name, value, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C15 || CT.C15;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let style = opts && 'style' in opts ? opts.style : C16 || CT.C16;
      let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
      this[unit$] = unit;
      _NumProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, showName: showName, defaultValue: defaultValue, tooltip: tooltip, level: level, style: style});
      ;
    }).prototype = _NumProperty.prototype;
    (_NumProperty.lazy = function(name, computeValue, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C15 || CT.C15;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let style = opts && 'style' in opts ? opts.style : C16 || CT.C16;
      let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
      this[unit$] = unit;
      _NumProperty.__proto__.lazy.call(this, name, computeValue, {ifNull: ifNull, showName: showName, defaultValue: defaultValue, tooltip: tooltip, style: style, level: level});
      ;
    }).prototype = _NumProperty.prototype;
    dart.addTypeTests(_NumProperty);
    _NumProperty.prototype[_is__NumProperty_default] = true;
    dart.addTypeCaches(_NumProperty);
    dart.setLibraryUri(_NumProperty, L10);
    dart.setFieldSignature(_NumProperty, () => ({
      __proto__: dart.getFields(_NumProperty.__proto__),
      unit: dart.finalFieldType(dart.legacy(core.String))
    }));
    return _NumProperty;
  });
  diagnostics$._NumProperty = diagnostics$._NumProperty$();
  dart.addTypeTests(diagnostics$._NumProperty, _is__NumProperty_default);
  diagnostics$.DoubleProperty = class DoubleProperty extends diagnostics$._NumProperty$(dart.legacy(core.double)) {
    numberToString() {
      return debug.debugFormatDouble(this.value);
    }
  };
  (diagnostics$.DoubleProperty.new = function(name, value, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C15 || CT.C15;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let style = opts && 'style' in opts ? opts.style : C16 || CT.C16;
    let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
    if (!(showName != null)) dart.assertFailed(null, L9, 1926, 15, "showName != null");
    if (!(style != null)) dart.assertFailed(null, L9, 1927, 15, "style != null");
    if (!(level != null)) dart.assertFailed(null, L9, 1928, 15, "level != null");
    diagnostics$.DoubleProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, unit: unit, tooltip: tooltip, defaultValue: defaultValue, showName: showName, style: style, level: level});
    ;
  }).prototype = diagnostics$.DoubleProperty.prototype;
  (diagnostics$.DoubleProperty.lazy = function(name, computeValue, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C15 || CT.C15;
    let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
    if (!(showName != null)) dart.assertFailed(null, L9, 1956, 15, "showName != null");
    if (!(level != null)) dart.assertFailed(null, L9, 1957, 15, "level != null");
    diagnostics$.DoubleProperty.__proto__.lazy.call(this, name, computeValue, {showName: showName, ifNull: ifNull, unit: unit, tooltip: tooltip, defaultValue: defaultValue, level: level});
    ;
  }).prototype = diagnostics$.DoubleProperty.prototype;
  dart.addTypeTests(diagnostics$.DoubleProperty);
  dart.addTypeCaches(diagnostics$.DoubleProperty);
  dart.setMethodSignature(diagnostics$.DoubleProperty, () => ({
    __proto__: dart.getMethods(diagnostics$.DoubleProperty.__proto__),
    numberToString: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(diagnostics$.DoubleProperty, L10);
  diagnostics$.IntProperty = class IntProperty extends diagnostics$._NumProperty$(dart.legacy(core.int)) {
    numberToString() {
      return dart.toString(this.value);
    }
  };
  (diagnostics$.IntProperty.new = function(name, value, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C15 || CT.C15;
    let style = opts && 'style' in opts ? opts.style : C16 || CT.C16;
    let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
    if (!(showName != null)) dart.assertFailed(null, L9, 1989, 15, "showName != null");
    if (!(level != null)) dart.assertFailed(null, L9, 1990, 15, "level != null");
    if (!(style != null)) dart.assertFailed(null, L9, 1991, 15, "style != null");
    diagnostics$.IntProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, showName: showName, unit: unit, defaultValue: defaultValue, level: level});
    ;
  }).prototype = diagnostics$.IntProperty.prototype;
  dart.addTypeTests(diagnostics$.IntProperty);
  dart.addTypeCaches(diagnostics$.IntProperty);
  dart.setMethodSignature(diagnostics$.IntProperty, () => ({
    __proto__: dart.getMethods(diagnostics$.IntProperty.__proto__),
    numberToString: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(diagnostics$.IntProperty, L10);
  diagnostics$.PercentProperty = class PercentProperty extends diagnostics$.DoubleProperty {
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (this.value == null) return dart.toString(this.value);
      return this.unit != null ? dart.str(this.numberToString()) + " " + dart.str(this.unit) : this.numberToString();
    }
    numberToString() {
      if (this.value == null) return dart.toString(this.value);
      return dart.str((this.value[$clamp](0.0, 1.0) * 100.0)[$toStringAsFixed](1)) + "%";
    }
  };
  (diagnostics$.PercentProperty.new = function(name, fraction, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
    if (!(showName != null)) dart.assertFailed(null, L9, 2025, 15, "showName != null");
    if (!(level != null)) dart.assertFailed(null, L9, 2026, 15, "level != null");
    diagnostics$.PercentProperty.__proto__.new.call(this, name, fraction, {ifNull: ifNull, showName: showName, tooltip: tooltip, unit: unit, level: level});
    ;
  }).prototype = diagnostics$.PercentProperty.prototype;
  dart.addTypeTests(diagnostics$.PercentProperty);
  dart.addTypeCaches(diagnostics$.PercentProperty);
  dart.setLibraryUri(diagnostics$.PercentProperty, L10);
  var ifTrue$ = dart.privateName(diagnostics$, "FlagProperty.ifTrue");
  var ifFalse$ = dart.privateName(diagnostics$, "FlagProperty.ifFalse");
  diagnostics$.FlagProperty = class FlagProperty extends diagnostics$.DiagnosticsProperty$(dart.legacy(core.bool)) {
    get ifTrue() {
      return this[ifTrue$];
    }
    set ifTrue(value) {
      super.ifTrue = value;
    }
    get ifFalse() {
      return this[ifFalse$];
    }
    set ifFalse(value) {
      super.ifFalse = value;
    }
    toJsonMap(delegate) {
      let json = super.toJsonMap(delegate);
      if (this.ifTrue != null) json[$_set]("ifTrue", this.ifTrue);
      if (this.ifFalse != null) json[$_set]("ifFalse", this.ifFalse);
      return json;
    }
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (dart.equals(this.value, true)) {
        if (this.ifTrue != null) return this.ifTrue;
      } else if (dart.equals(this.value, false)) {
        if (this.ifFalse != null) return this.ifFalse;
      }
      return super.valueToString({parentConfiguration: parentConfiguration});
    }
    get showName() {
      if (this.value == null || dart.equals(this.value, true) && this.ifTrue == null || dart.equals(this.value, false) && this.ifFalse == null) {
        return true;
      }
      return super.showName;
    }
    get level() {
      if (dart.equals(this.value, true)) {
        if (this.ifTrue == null) return diagnostics$.DiagnosticLevel.hidden;
      }
      if (dart.equals(this.value, false)) {
        if (this.ifFalse == null) return diagnostics$.DiagnosticLevel.hidden;
      }
      return super.level;
    }
  };
  (diagnostics$.FlagProperty.new = function(name, opts) {
    let value = opts && 'value' in opts ? opts.value : null;
    let ifTrue = opts && 'ifTrue' in opts ? opts.ifTrue : null;
    let ifFalse = opts && 'ifFalse' in opts ? opts.ifFalse : null;
    let showName = opts && 'showName' in opts ? opts.showName : false;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
    let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
    this[ifTrue$] = ifTrue;
    this[ifFalse$] = ifFalse;
    if (!(showName != null)) dart.assertFailed(null, L9, 2106, 15, "showName != null");
    if (!(level != null)) dart.assertFailed(null, L9, 2107, 15, "level != null");
    if (!(ifTrue != null || ifFalse != null)) dart.assertFailed(null, L9, 2108, 15, "ifTrue != null || ifFalse != null");
    diagnostics$.FlagProperty.__proto__.new.call(this, name, value, {showName: showName, defaultValue: defaultValue, level: level});
    ;
  }).prototype = diagnostics$.FlagProperty.prototype;
  dart.addTypeTests(diagnostics$.FlagProperty);
  dart.addTypeCaches(diagnostics$.FlagProperty);
  dart.setGetterSignature(diagnostics$.FlagProperty, () => ({
    __proto__: dart.getGetters(diagnostics$.FlagProperty.__proto__),
    showName: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(diagnostics$.FlagProperty, L10);
  dart.setFieldSignature(diagnostics$.FlagProperty, () => ({
    __proto__: dart.getFields(diagnostics$.FlagProperty.__proto__),
    ifTrue: dart.finalFieldType(dart.legacy(core.String)),
    ifFalse: dart.finalFieldType(dart.legacy(core.String))
  }));
  const _is_IterableProperty_default = Symbol('_is_IterableProperty_default');
  diagnostics$.IterableProperty$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var TLToStringL = () => (TLToStringL = dart.constFn(dart.fnType(StringL(), [TL()])))();
    class IterableProperty extends diagnostics$.DiagnosticsProperty$(dart.legacy(core.Iterable$(dart.legacy(T)))) {
      valueToString(opts) {
        let t6;
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        if (dart.test(this.value[$isEmpty])) {
          t6 = this.ifEmpty;
          return t6 == null ? "[]" : t6;
        }
        let formattedValues = this.value[$map](StringL(), dart.fn(v => {
          if (dart.wrapType(TL())[$_equals](dart.wrapType(doubleL())) && doubleL().is(v)) {
            return debug.debugFormatDouble(v);
          } else {
            return dart.toString(v);
          }
        }, TLToStringL()));
        if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties)) {
          return "[" + dart.str(formattedValues[$join](", ")) + "]";
        }
        return formattedValues[$join](dart.test(diagnostics$._isSingleLine(this.style)) ? ", " : "\n");
      }
      get level() {
        if (this.ifEmpty == null && this.value != null && dart.test(this.value[$isEmpty]) && super.level != diagnostics$.DiagnosticLevel.hidden) return diagnostics$.DiagnosticLevel.fine;
        return super.level;
      }
      toJsonMap(delegate) {
        let json = super.toJsonMap(delegate);
        if (this.value != null) {
          json[$_set]("values", this.value[$map](StringL(), dart.fn(value => dart.toString(value), TLToStringL()))[$toList]());
        }
        return json;
      }
    }
    (IterableProperty.new = function(name, value, opts) {
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C15 || CT.C15;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : "[]";
      let style = opts && 'style' in opts ? opts.style : C16 || CT.C16;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
      if (!(style != null)) dart.assertFailed(null, L9, 2204, 15, "style != null");
      if (!(showName != null)) dart.assertFailed(null, L9, 2205, 15, "showName != null");
      if (!(showSeparator != null)) dart.assertFailed(null, L9, 2206, 15, "showSeparator != null");
      if (!(level != null)) dart.assertFailed(null, L9, 2207, 15, "level != null");
      IterableProperty.__proto__.new.call(this, name, value, {defaultValue: defaultValue, ifNull: ifNull, ifEmpty: ifEmpty, style: style, showName: showName, showSeparator: showSeparator, level: level});
      ;
    }).prototype = IterableProperty.prototype;
    dart.addTypeTests(IterableProperty);
    IterableProperty.prototype[_is_IterableProperty_default] = true;
    dart.addTypeCaches(IterableProperty);
    dart.setLibraryUri(IterableProperty, L10);
    return IterableProperty;
  });
  diagnostics$.IterableProperty = diagnostics$.IterableProperty$();
  dart.addTypeTests(diagnostics$.IterableProperty, _is_IterableProperty_default);
  const _is_EnumProperty_default = Symbol('_is_EnumProperty_default');
  diagnostics$.EnumProperty$ = dart.generic(T => {
    class EnumProperty extends diagnostics$.DiagnosticsProperty$(dart.legacy(T)) {
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        return diagnostics$.describeEnum(this.value);
      }
    }
    (EnumProperty.new = function(name, value, opts) {
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : C15 || CT.C15;
      let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
      if (!(level != null)) dart.assertFailed(null, L9, 2287, 15, "level != null");
      EnumProperty.__proto__.new.call(this, name, value, {defaultValue: defaultValue, level: level});
      ;
    }).prototype = EnumProperty.prototype;
    dart.addTypeTests(EnumProperty);
    EnumProperty.prototype[_is_EnumProperty_default] = true;
    dart.addTypeCaches(EnumProperty);
    dart.setLibraryUri(EnumProperty, L10);
    return EnumProperty;
  });
  diagnostics$.EnumProperty = diagnostics$.EnumProperty$();
  dart.addTypeTests(diagnostics$.EnumProperty, _is_EnumProperty_default);
  const _is_ObjectFlagProperty_default = Symbol('_is_ObjectFlagProperty_default');
  var ifPresent$ = dart.privateName(diagnostics$, "ObjectFlagProperty.ifPresent");
  diagnostics$.ObjectFlagProperty$ = dart.generic(T => {
    class ObjectFlagProperty extends diagnostics$.DiagnosticsProperty$(dart.legacy(T)) {
      get ifPresent() {
        return this[ifPresent$];
      }
      set ifPresent(value) {
        super.ifPresent = value;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value != null) {
          if (this.ifPresent != null) return this.ifPresent;
        } else {
          if (this.ifNull != null) return this.ifNull;
        }
        return super.valueToString({parentConfiguration: parentConfiguration});
      }
      get showName() {
        if (this.value != null && this.ifPresent == null || this.value == null && this.ifNull == null) {
          return true;
        }
        return super.showName;
      }
      get level() {
        if (this.value != null) {
          if (this.ifPresent == null) return diagnostics$.DiagnosticLevel.hidden;
        } else {
          if (this.ifNull == null) return diagnostics$.DiagnosticLevel.hidden;
        }
        return super.level;
      }
      toJsonMap(delegate) {
        let json = super.toJsonMap(delegate);
        if (this.ifPresent != null) json[$_set]("ifPresent", this.ifPresent);
        return json;
      }
    }
    (ObjectFlagProperty.new = function(name, value, opts) {
      let ifPresent = opts && 'ifPresent' in opts ? opts.ifPresent : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let showName = opts && 'showName' in opts ? opts.showName : false;
      let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
      this[ifPresent$] = ifPresent;
      if (!(ifPresent != null || ifNull != null)) dart.assertFailed(null, L9, 2335, 15, "ifPresent != null || ifNull != null");
      if (!(showName != null)) dart.assertFailed(null, L9, 2336, 15, "showName != null");
      if (!(level != null)) dart.assertFailed(null, L9, 2337, 15, "level != null");
      ObjectFlagProperty.__proto__.new.call(this, name, value, {showName: showName, ifNull: ifNull, level: level});
      ;
    }).prototype = ObjectFlagProperty.prototype;
    (ObjectFlagProperty.has = function(name, value, opts) {
      let level = opts && 'level' in opts ? opts.level : C14 || CT.C14;
      if (!(name != null)) dart.assertFailed(null, L9, 2356, 15, "name != null");
      if (!(level != null)) dart.assertFailed(null, L9, 2357, 15, "level != null");
      this[ifPresent$] = "has " + dart.str(name);
      ObjectFlagProperty.__proto__.new.call(this, name, value, {showName: false, level: level});
      ;
    }).prototype = ObjectFlagProperty.prototype;
    dart.addTypeTests(ObjectFlagProperty);
    ObjectFlagProperty.prototype[_is_ObjectFlagProperty_default] = true;
    dart.addTypeCaches(ObjectFlagProperty);
    dart.setGetterSignature(ObjectFlagProperty, () => ({
      __proto__: dart.getGetters(ObjectFlagProperty.__proto__),
      showName: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(ObjectFlagProperty, L10);
    dart.setFieldSignature(ObjectFlagProperty, () => ({
      __proto__: dart.getFields(ObjectFlagProperty.__proto__),
      ifPresent: dart.finalFieldType(dart.legacy(core.String))
    }));
    return ObjectFlagProperty;
  });
  diagnostics$.ObjectFlagProperty = diagnostics$.ObjectFlagProperty$();
  dart.addTypeTests(diagnostics$.ObjectFlagProperty, _is_ObjectFlagProperty_default);
  diagnostics$.DiagnosticableTree = class DiagnosticableTree extends diagnostics$.Diagnosticable {
    toStringShallow(opts) {
      let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C29 || CT.C29;
      if (false) {
        return this.toString();
      }
      let result = new core.StringBuffer.new();
      result.write(this.toString());
      result.write(joiner);
      let builder = new diagnostics$.DiagnosticPropertiesBuilder.new();
      this.debugFillProperties(builder);
      result.write(builder.properties[$where](dart.fn(n => !dart.test(n.isFiltered(minLevel)), DiagnosticsNodeLToboolL()))[$join](joiner));
      return result.toString();
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C29 || CT.C29;
      return this.toDiagnosticsNode().toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
    }
    toStringShort() {
      return diagnostics$.describeIdentity(this);
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new diagnostics$.DiagnosticableTreeNode.new({name: name, value: this, style: style});
    }
    debugDescribeChildren() {
      return C17 || CT.C17;
    }
  };
  (diagnostics$.DiagnosticableTree.new = function() {
    diagnostics$.DiagnosticableTree.__proto__.new.call(this);
    ;
  }).prototype = diagnostics$.DiagnosticableTree.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticableTree);
  dart.addTypeCaches(diagnostics$.DiagnosticableTree);
  dart.setMethodSignature(diagnostics$.DiagnosticableTree, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticableTree.__proto__),
    toStringShallow: dart.fnType(dart.legacy(core.String), [], {joiner: dart.legacy(core.String), minLevel: dart.legacy(diagnostics$.DiagnosticLevel)}, {}),
    toStringDeep: dart.fnType(dart.legacy(core.String), [], {minLevel: dart.legacy(diagnostics$.DiagnosticLevel), prefixLineOne: dart.legacy(core.String), prefixOtherLines: dart.legacy(core.String)}, {}),
    debugDescribeChildren: dart.fnType(dart.legacy(core.List$(dart.legacy(diagnostics$.DiagnosticsNode))), [])
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticableTree, L10);
  diagnostics$.DiagnosticableTreeNode = class DiagnosticableTreeNode extends diagnostics$.DiagnosticableNode$(dart.legacy(diagnostics$.DiagnosticableTree)) {
    getChildren() {
      if (this.value != null) return this.value.debugDescribeChildren();
      return C17 || CT.C17;
    }
  };
  (diagnostics$.DiagnosticableTreeNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let style = opts && 'style' in opts ? opts.style : null;
    diagnostics$.DiagnosticableTreeNode.__proto__.new.call(this, {name: name, value: value, style: style});
    ;
  }).prototype = diagnostics$.DiagnosticableTreeNode.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticableTreeNode);
  dart.addTypeCaches(diagnostics$.DiagnosticableTreeNode);
  dart.setLibraryUri(diagnostics$.DiagnosticableTreeNode, L10);
  var properties$ = dart.privateName(diagnostics$, "DiagnosticPropertiesBuilder.properties");
  var defaultDiagnosticsTreeStyle = dart.privateName(diagnostics$, "DiagnosticPropertiesBuilder.defaultDiagnosticsTreeStyle");
  var emptyBodyDescription = dart.privateName(diagnostics$, "DiagnosticPropertiesBuilder.emptyBodyDescription");
  diagnostics$.DiagnosticPropertiesBuilder = class DiagnosticPropertiesBuilder extends core.Object {
    get properties() {
      return this[properties$];
    }
    set properties(value) {
      super.properties = value;
    }
    get defaultDiagnosticsTreeStyle() {
      return this[defaultDiagnosticsTreeStyle];
    }
    set defaultDiagnosticsTreeStyle(value) {
      this[defaultDiagnosticsTreeStyle] = value;
    }
    get emptyBodyDescription() {
      return this[emptyBodyDescription];
    }
    set emptyBodyDescription(value) {
      this[emptyBodyDescription] = value;
    }
    add(property) {
      if (!false) {
        this.properties[$add](property);
      }
    }
  };
  (diagnostics$.DiagnosticPropertiesBuilder.new = function() {
    this[defaultDiagnosticsTreeStyle] = diagnostics$.DiagnosticsTreeStyle.sparse;
    this[emptyBodyDescription] = null;
    this[properties$] = JSArrayOfDiagnosticsNodeL().of([]);
    ;
  }).prototype = diagnostics$.DiagnosticPropertiesBuilder.prototype;
  (diagnostics$.DiagnosticPropertiesBuilder.fromProperties = function(properties) {
    this[defaultDiagnosticsTreeStyle] = diagnostics$.DiagnosticsTreeStyle.sparse;
    this[emptyBodyDescription] = null;
    this[properties$] = properties;
    ;
  }).prototype = diagnostics$.DiagnosticPropertiesBuilder.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticPropertiesBuilder);
  dart.addTypeCaches(diagnostics$.DiagnosticPropertiesBuilder);
  dart.setMethodSignature(diagnostics$.DiagnosticPropertiesBuilder, () => ({
    __proto__: dart.getMethods(diagnostics$.DiagnosticPropertiesBuilder.__proto__),
    add: dart.fnType(dart.void, [dart.legacy(diagnostics$.DiagnosticsNode)])
  }));
  dart.setLibraryUri(diagnostics$.DiagnosticPropertiesBuilder, L10);
  dart.setFieldSignature(diagnostics$.DiagnosticPropertiesBuilder, () => ({
    __proto__: dart.getFields(diagnostics$.DiagnosticPropertiesBuilder.__proto__),
    properties: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(diagnostics$.DiagnosticsNode)))),
    defaultDiagnosticsTreeStyle: dart.fieldType(dart.legacy(diagnostics$.DiagnosticsTreeStyle)),
    emptyBodyDescription: dart.fieldType(dart.legacy(core.String))
  }));
  diagnostics$.DiagnosticsSerializationDelegate = class DiagnosticsSerializationDelegate extends core.Object {};
  (diagnostics$.DiagnosticsSerializationDelegate[dart.mixinNew] = function() {
  }).prototype = diagnostics$.DiagnosticsSerializationDelegate.prototype;
  dart.addTypeTests(diagnostics$.DiagnosticsSerializationDelegate);
  dart.addTypeCaches(diagnostics$.DiagnosticsSerializationDelegate);
  dart.setLibraryUri(diagnostics$.DiagnosticsSerializationDelegate, L10);
  var C48;
  var includeProperties$ = dart.privateName(diagnostics$, "_DefaultDiagnosticsSerializationDelegate.includeProperties");
  var subtreeDepth$ = dart.privateName(diagnostics$, "_DefaultDiagnosticsSerializationDelegate.subtreeDepth");
  diagnostics$._DefaultDiagnosticsSerializationDelegate = class _DefaultDiagnosticsSerializationDelegate extends core.Object {
    get includeProperties() {
      return this[includeProperties$];
    }
    set includeProperties(value) {
      super.includeProperties = value;
    }
    get subtreeDepth() {
      return this[subtreeDepth$];
    }
    set subtreeDepth(value) {
      super.subtreeDepth = value;
    }
    additionalNodeProperties(node) {
      return C48 || CT.C48;
    }
    delegateForNode(node) {
      return dart.notNull(this.subtreeDepth) > 0 ? this.copyWith({subtreeDepth: dart.notNull(this.subtreeDepth) - 1}) : this;
    }
    get expandPropertyValues() {
      return false;
    }
    filterChildren(nodes, owner) {
      return nodes;
    }
    filterProperties(nodes, owner) {
      return nodes;
    }
    truncateNodesList(nodes, owner) {
      return nodes;
    }
    copyWith(opts) {
      let t6, t6$;
      let subtreeDepth = opts && 'subtreeDepth' in opts ? opts.subtreeDepth : null;
      let includeProperties = opts && 'includeProperties' in opts ? opts.includeProperties : null;
      return new diagnostics$._DefaultDiagnosticsSerializationDelegate.new({subtreeDepth: (t6 = subtreeDepth, t6 == null ? this.subtreeDepth : t6), includeProperties: (t6$ = includeProperties, t6$ == null ? this.includeProperties : t6$)});
    }
  };
  (diagnostics$._DefaultDiagnosticsSerializationDelegate.new = function(opts) {
    let includeProperties = opts && 'includeProperties' in opts ? opts.includeProperties : false;
    let subtreeDepth = opts && 'subtreeDepth' in opts ? opts.subtreeDepth : 0;
    this[includeProperties$] = includeProperties;
    this[subtreeDepth$] = subtreeDepth;
    ;
  }).prototype = diagnostics$._DefaultDiagnosticsSerializationDelegate.prototype;
  dart.addTypeTests(diagnostics$._DefaultDiagnosticsSerializationDelegate);
  dart.addTypeCaches(diagnostics$._DefaultDiagnosticsSerializationDelegate);
  diagnostics$._DefaultDiagnosticsSerializationDelegate[dart.implements] = () => [diagnostics$.DiagnosticsSerializationDelegate];
  dart.setMethodSignature(diagnostics$._DefaultDiagnosticsSerializationDelegate, () => ({
    __proto__: dart.getMethods(diagnostics$._DefaultDiagnosticsSerializationDelegate.__proto__),
    additionalNodeProperties: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.legacy(core.Object))), [dart.legacy(diagnostics$.DiagnosticsNode)]),
    delegateForNode: dart.fnType(dart.legacy(diagnostics$.DiagnosticsSerializationDelegate), [dart.legacy(diagnostics$.DiagnosticsNode)]),
    filterChildren: dart.fnType(dart.legacy(core.List$(dart.legacy(diagnostics$.DiagnosticsNode))), [dart.legacy(core.List$(dart.legacy(diagnostics$.DiagnosticsNode))), dart.legacy(diagnostics$.DiagnosticsNode)]),
    filterProperties: dart.fnType(dart.legacy(core.List$(dart.legacy(diagnostics$.DiagnosticsNode))), [dart.legacy(core.List$(dart.legacy(diagnostics$.DiagnosticsNode))), dart.legacy(diagnostics$.DiagnosticsNode)]),
    truncateNodesList: dart.fnType(dart.legacy(core.List$(dart.legacy(diagnostics$.DiagnosticsNode))), [dart.legacy(core.List$(dart.legacy(diagnostics$.DiagnosticsNode))), dart.legacy(diagnostics$.DiagnosticsNode)]),
    copyWith: dart.fnType(dart.legacy(diagnostics$.DiagnosticsSerializationDelegate), [], {includeProperties: dart.legacy(core.bool), subtreeDepth: dart.legacy(core.int)}, {})
  }));
  dart.setGetterSignature(diagnostics$._DefaultDiagnosticsSerializationDelegate, () => ({
    __proto__: dart.getGetters(diagnostics$._DefaultDiagnosticsSerializationDelegate.__proto__),
    expandPropertyValues: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(diagnostics$._DefaultDiagnosticsSerializationDelegate, L10);
  dart.setFieldSignature(diagnostics$._DefaultDiagnosticsSerializationDelegate, () => ({
    __proto__: dart.getFields(diagnostics$._DefaultDiagnosticsSerializationDelegate.__proto__),
    includeProperties: dart.finalFieldType(dart.legacy(core.bool)),
    subtreeDepth: dart.finalFieldType(dart.legacy(core.int))
  }));
  diagnostics$._isSingleLine = function _isSingleLine(style) {
    return style == diagnostics$.DiagnosticsTreeStyle.singleLine;
  };
  diagnostics$.shortHash = function shortHash(object) {
    return dart.hashCode(object)[$toUnsigned](20)[$toRadixString](16)[$padLeft](5, "0");
  };
  diagnostics$.describeIdentity = function describeIdentity(object) {
    return dart.str(dart.runtimeType(object)) + "#" + dart.str(diagnostics$.shortHash(object));
  };
  diagnostics$.describeEnum = function describeEnum(enumEntry) {
    let description = dart.toString(enumEntry);
    let indexOfDot = description[$indexOf](".");
    if (!(indexOfDot !== -1 && indexOfDot < description.length - 1)) dart.assertFailed(null, L9, 2883, 10, "indexOfDot != -1 && indexOfDot < description.length - 1");
    return description[$substring](indexOfDot + 1);
  };
  dart.defineLazy(diagnostics$, {
    /*diagnostics$.sparseTextConfiguration*/get sparseTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "├─", prefixOtherLines: " ", prefixLastChildLineOne: "└─", linkCharacter: "│", propertyPrefixIfChildren: "│ ", propertyPrefixNoChildren: "  ", prefixOtherLinesRootNode: " "});
    },
    /*diagnostics$.dashedTextConfiguration*/get dashedTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "╎╌", prefixLastChildLineOne: "└╌", prefixOtherLines: " ", linkCharacter: "╎", propertyPrefixIfChildren: "│ ", propertyPrefixNoChildren: "  ", prefixOtherLinesRootNode: " "});
    },
    /*diagnostics$.denseTextConfiguration*/get denseTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", lineBreakProperties: false, prefixLineOne: "├", prefixOtherLines: "", prefixLastChildLineOne: "└", linkCharacter: "│", propertyPrefixIfChildren: "│", propertyPrefixNoChildren: " ", prefixOtherLinesRootNode: "", addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.transitionTextConfiguration*/get transitionTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "╞═╦══ ", prefixLastChildLineOne: "╘═╦══ ", prefixOtherLines: " ║ ", footer: " ╚═══════════", linkCharacter: "│", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", prefixOtherLinesRootNode: "", afterName: " ═══", afterDescriptionIfBody: ":", bodyIndent: "  ", isNameOnOwnLine: true, addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.errorTextConfiguration*/get errorTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "╞═╦", prefixLastChildLineOne: "╘═╦", prefixOtherLines: " ║ ", footer: " ╚═══════════", linkCharacter: "│", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", prefixOtherLinesRootNode: "", beforeName: "══╡ ", suffixLineOne: " ╞══", manditoryFooter: "═════", addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.whitespaceTextConfiguration*/get whitespaceTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: " ", prefixOtherLinesRootNode: "  ", bodyIndent: "", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: " ", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.flatTextConfiguration*/get flatTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: "", prefixOtherLinesRootNode: "", bodyIndent: "", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: "", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*diagnostics$.singleLineTextConfiguration*/get singleLineTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", prefixLineOne: "", prefixOtherLines: "", prefixLastChildLineOne: "", lineBreak: "", lineBreakProperties: false, addBlankLineIfNoChildren: false, showChildren: false, propertyPrefixIfChildren: "  ", propertyPrefixNoChildren: "  ", linkCharacter: "", prefixOtherLinesRootNode: ""});
    },
    /*diagnostics$.errorPropertyTextConfiguration*/get errorPropertyTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", prefixLineOne: "", prefixOtherLines: "", prefixLastChildLineOne: "", lineBreak: "\n", lineBreakProperties: false, addBlankLineIfNoChildren: false, showChildren: false, propertyPrefixIfChildren: "  ", propertyPrefixNoChildren: "  ", linkCharacter: "", prefixOtherLinesRootNode: "", afterName: ":", isNameOnOwnLine: true});
    },
    /*diagnostics$.shallowTextConfiguration*/get shallowTextConfiguration() {
      return new diagnostics$.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: " ", prefixOtherLinesRootNode: "  ", bodyIndent: "", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: " ", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false, showChildren: false});
    },
    /*diagnostics$.kNoDefaultValue*/get kNoDefaultValue() {
      return C15 || CT.C15;
    }
  }, true);
  dart.defineLazy(constants, {
    /*constants.kReleaseMode*/get kReleaseMode() {
      return false;
    },
    /*constants.kProfileMode*/get kProfileMode() {
      return false;
    },
    /*constants.kDebugMode*/get kDebugMode() {
      return true;
    },
    /*constants.precisionErrorTolerance*/get precisionErrorTolerance() {
      return 1e-10;
    },
    /*constants.kIsWeb*/get kIsWeb() {
      return true;
    }
  }, true);
  var _results = dart.privateName(basic_types, "_results");
  var _prefillIterator$ = dart.privateName(basic_types, "_prefillIterator");
  var _precacheEntireList = dart.privateName(basic_types, "_precacheEntireList");
  var _fillNext = dart.privateName(basic_types, "_fillNext");
  const _is_CachingIterable_default = Symbol('_is_CachingIterable_default');
  basic_types.CachingIterable$ = dart.generic(E => {
    var EL = () => (EL = dart.constFn(dart.legacy(E)))();
    var JSArrayOfEL = () => (JSArrayOfEL = dart.constFn(_interceptors.JSArray$(EL())))();
    var _LazyListIteratorOfEL = () => (_LazyListIteratorOfEL = dart.constFn(basic_types._LazyListIterator$(EL())))();
    var CachingIterableOfEL = () => (CachingIterableOfEL = dart.constFn(basic_types.CachingIterable$(EL())))();
    var ListOfEL = () => (ListOfEL = dart.constFn(core.List$(EL())))();
    class CachingIterable extends collection.IterableBase$(dart.legacy(E)) {
      get iterator() {
        return new (_LazyListIteratorOfEL()).new(this);
      }
      map(T, f) {
        return new (basic_types.CachingIterable$(dart.legacy(T))).new(super[$map](dart.legacy(T), f)[$iterator]);
      }
      where(test) {
        return new (CachingIterableOfEL()).new(super[$where](test)[$iterator]);
      }
      expand(T, f) {
        return new (basic_types.CachingIterable$(dart.legacy(T))).new(super[$expand](dart.legacy(T), f)[$iterator]);
      }
      take(count) {
        return new (CachingIterableOfEL()).new(super[$take](count)[$iterator]);
      }
      takeWhile(test) {
        return new (CachingIterableOfEL()).new(super[$takeWhile](test)[$iterator]);
      }
      skip(count) {
        return new (CachingIterableOfEL()).new(super[$skip](count)[$iterator]);
      }
      skipWhile(test) {
        return new (CachingIterableOfEL()).new(super[$skipWhile](test)[$iterator]);
      }
      get length() {
        this[_precacheEntireList]();
        return this[_results][$length];
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        this[_precacheEntireList]();
        return ListOfEL().from(this[_results], {growable: growable});
      }
      [_precacheEntireList]() {
        while (dart.test(this[_fillNext]())) {
        }
      }
      [_fillNext]() {
        if (!dart.test(this[_prefillIterator$].moveNext())) return false;
        this[_results][$add](this[_prefillIterator$].current);
        return true;
      }
    }
    (CachingIterable.new = function(_prefillIterator) {
      this[_results] = JSArrayOfEL().of([]);
      this[_prefillIterator$] = _prefillIterator;
      CachingIterable.__proto__.new.call(this);
      ;
    }).prototype = CachingIterable.prototype;
    dart.addTypeTests(CachingIterable);
    CachingIterable.prototype[_is_CachingIterable_default] = true;
    dart.addTypeCaches(CachingIterable);
    dart.setMethodSignature(CachingIterable, () => ({
      __proto__: dart.getMethods(CachingIterable.__proto__),
      map: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(E)]))]]),
      [$map]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(T), [dart.legacy(E)]))]]),
      where: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$where]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      expand: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(E)]))]]),
      [$expand]: dart.gFnType(T => [dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.legacy(core.Iterable$(dart.legacy(T))), [dart.legacy(E)]))]]),
      take: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      [$take]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      takeWhile: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$takeWhile]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      skip: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      [$skip]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(core.int)]),
      skipWhile: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      [$skipWhile]: dart.fnType(dart.legacy(core.Iterable$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.legacy(E)]))]),
      toList: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [], {growable: dart.legacy(core.bool)}, {}),
      [$toList]: dart.fnType(dart.legacy(core.List$(dart.legacy(E))), [], {growable: dart.legacy(core.bool)}, {}),
      [_precacheEntireList]: dart.fnType(dart.void, []),
      [_fillNext]: dart.fnType(dart.legacy(core.bool), [])
    }));
    dart.setGetterSignature(CachingIterable, () => ({
      __proto__: dart.getGetters(CachingIterable.__proto__),
      iterator: dart.legacy(core.Iterator$(dart.legacy(E))),
      [$iterator]: dart.legacy(core.Iterator$(dart.legacy(E))),
      length: dart.legacy(core.int),
      [$length]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(CachingIterable, L12);
    dart.setFieldSignature(CachingIterable, () => ({
      __proto__: dart.getFields(CachingIterable.__proto__),
      [_prefillIterator$]: dart.finalFieldType(dart.legacy(core.Iterator$(dart.legacy(E)))),
      [_results]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(E))))
    }));
    dart.defineExtensionMethods(CachingIterable, [
      'map',
      'where',
      'expand',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'toList'
    ]);
    dart.defineExtensionAccessors(CachingIterable, ['iterator', 'length']);
    return CachingIterable;
  });
  basic_types.CachingIterable = basic_types.CachingIterable$();
  dart.addTypeTests(basic_types.CachingIterable, _is_CachingIterable_default);
  var _owner$ = dart.privateName(basic_types, "_owner");
  var _index = dart.privateName(basic_types, "_index");
  const _is__LazyListIterator_default = Symbol('_is__LazyListIterator_default');
  basic_types._LazyListIterator$ = dart.generic(E => {
    class _LazyListIterator extends core.Object {
      get current() {
        if (!(dart.notNull(this[_index]) >= 0)) dart.assertFailed(null, L13, 203, 12, "_index >= 0");
        if (dart.notNull(this[_index]) < 0 || this[_index] == this[_owner$][_results][$length]) return null;
        return this[_owner$][_results][$_get](this[_index]);
      }
      moveNext() {
        if (dart.notNull(this[_index]) >= dart.notNull(this[_owner$][_results][$length])) return false;
        this[_index] = dart.notNull(this[_index]) + 1;
        if (this[_index] == this[_owner$][_results][$length]) return this[_owner$][_fillNext]();
        return true;
      }
    }
    (_LazyListIterator.new = function(_owner) {
      this[_owner$] = _owner;
      this[_index] = -1;
      ;
    }).prototype = _LazyListIterator.prototype;
    dart.addTypeTests(_LazyListIterator);
    _LazyListIterator.prototype[_is__LazyListIterator_default] = true;
    dart.addTypeCaches(_LazyListIterator);
    _LazyListIterator[dart.implements] = () => [core.Iterator$(dart.legacy(E))];
    dart.setMethodSignature(_LazyListIterator, () => ({
      __proto__: dart.getMethods(_LazyListIterator.__proto__),
      moveNext: dart.fnType(dart.legacy(core.bool), [])
    }));
    dart.setGetterSignature(_LazyListIterator, () => ({
      __proto__: dart.getGetters(_LazyListIterator.__proto__),
      current: dart.legacy(E)
    }));
    dart.setLibraryUri(_LazyListIterator, L12);
    dart.setFieldSignature(_LazyListIterator, () => ({
      __proto__: dart.getFields(_LazyListIterator.__proto__),
      [_owner$]: dart.finalFieldType(dart.legacy(basic_types.CachingIterable$(dart.legacy(E)))),
      [_index]: dart.fieldType(dart.legacy(core.int))
    }));
    return _LazyListIterator;
  });
  basic_types._LazyListIterator = basic_types._LazyListIterator$();
  dart.addTypeTests(basic_types._LazyListIterator, _is__LazyListIterator_default);
  const _is_Factory_default = Symbol('_is_Factory_default');
  var constructor$ = dart.privateName(basic_types, "Factory.constructor");
  basic_types.Factory$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class Factory extends core.Object {
      get _constructor() {
        return this[constructor$];
      }
      set _constructor(value) {
        super._constructor = value;
      }
      get type() {
        return dart.wrapType(TL());
      }
      toString() {
        return "Factory(type: " + dart.str(this.type) + ")";
      }
    }
    (Factory.new = function(constructor) {
      this[constructor$] = constructor;
      if (!(constructor != null)) dart.assertFailed(null, L13, 222, 44, "constructor != null");
      ;
    }).prototype = Factory.prototype;
    dart.addTypeTests(Factory);
    Factory.prototype[_is_Factory_default] = true;
    dart.addTypeCaches(Factory);
    dart.setMethodSignature(Factory, () => ({
      __proto__: dart.getMethods(Factory.__proto__),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setGetterSignature(Factory, () => ({
      __proto__: dart.getGetters(Factory.__proto__),
      type: dart.legacy(core.Type)
    }));
    dart.setLibraryUri(Factory, L12);
    dart.setFieldSignature(Factory, () => ({
      __proto__: dart.getFields(Factory.__proto__),
      _constructor: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(T), [])))
    }));
    dart.defineExtensionMethods(Factory, ['toString']);
    return Factory;
  });
  basic_types.Factory = basic_types.Factory$();
  dart.addTypeTests(basic_types.Factory, _is_Factory_default);
  var _value$ = dart.privateName(synchronous_future, "_value");
  const _is_SynchronousFuture_default = Symbol('_is_SynchronousFuture_default');
  synchronous_future.SynchronousFuture$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var StreamControllerOfTL = () => (StreamControllerOfTL = dart.constFn(async.StreamController$(TL())))();
    var CompleterOfTL = () => (CompleterOfTL = dart.constFn(async.Completer$(TL())))();
    var FutureOfTL = () => (FutureOfTL = dart.constFn(async.Future$(TL())))();
    var FutureOrOfTL = () => (FutureOrOfTL = dart.constFn(async.FutureOr$(TL())))();
    var VoidToFutureOrOfTL = () => (VoidToFutureOrOfTL = dart.constFn(dart.fnType(FutureOrOfTL(), [])))();
    var VoidToNFutureOrOfTL = () => (VoidToNFutureOrOfTL = dart.constFn(dart.nullable(VoidToFutureOrOfTL())))();
    var dynamicToTL = () => (dynamicToTL = dart.constFn(dart.fnType(TL(), [dart.dynamic])))();
    class SynchronousFuture extends core.Object {
      asStream() {
        let controller = StreamControllerOfTL().new();
        controller.add(this[_value$]);
        controller.close();
        return controller.stream;
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return CompleterOfTL().new().future;
      }
      then(E, f, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let result = f(this[_value$]);
        if (dart.legacy(async.Future$(dart.legacy(E))).is(result)) return result;
        return new (synchronous_future.SynchronousFuture$(dart.legacy(E))).new(dart.legacy(E).as(result));
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        VoidToLdynamic().as(onTimeout);
        return FutureOfTL().value(this[_value$]).timeout(timeLimit, {onTimeout: VoidToNFutureOrOfTL().as(onTimeout)});
      }
      whenComplete(action) {
        try {
          let result = action();
          if (FutureL().is(result)) return result.then(TL(), dart.fn(value => this[_value$], dynamicToTL()));
          return this;
        } catch (e$) {
          let e = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          return FutureOfTL().error(e, stack);
        }
      }
    }
    (SynchronousFuture.new = function(_value) {
      this[_value$] = _value;
      ;
    }).prototype = SynchronousFuture.prototype;
    SynchronousFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(SynchronousFuture);
    SynchronousFuture.prototype[_is_SynchronousFuture_default] = true;
    dart.addTypeCaches(SynchronousFuture);
    SynchronousFuture[dart.implements] = () => [async.Future$(dart.legacy(T))];
    dart.setMethodSignature(SynchronousFuture, () => ({
      __proto__: dart.getMethods(SynchronousFuture.__proto__),
      asStream: dart.fnType(dart.legacy(async.Stream$(dart.legacy(T))), []),
      catchError: dart.fnType(dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(core.Function)], {test: dart.legacy(dart.fnType(dart.legacy(core.bool), [dart.dynamic]))}, {}),
      then: dart.gFnType(E => [dart.legacy(async.Future$(dart.legacy(E))), [dart.legacy(dart.fnType(dart.dynamic, [dart.legacy(T)]))], {onError: dart.legacy(core.Function)}, {}]),
      timeout: dart.fnType(dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(core.Duration)], {onTimeout: dart.legacy(core.Object)}, {}),
      whenComplete: dart.fnType(dart.legacy(async.Future$(dart.legacy(T))), [dart.legacy(dart.fnType(dart.dynamic, []))])
    }));
    dart.setLibraryUri(SynchronousFuture, L14);
    dart.setFieldSignature(SynchronousFuture, () => ({
      __proto__: dart.getFields(SynchronousFuture.__proto__),
      [_value$]: dart.finalFieldType(dart.legacy(T))
    }));
    return SynchronousFuture;
  });
  synchronous_future.SynchronousFuture = synchronous_future.SynchronousFuture$();
  dart.addTypeTests(synchronous_future.SynchronousFuture, _is_SynchronousFuture_default);
  unicode.Unicode = class Unicode extends core.Object {};
  (unicode.Unicode.__ = function() {
    ;
  }).prototype = unicode.Unicode.prototype;
  dart.addTypeTests(unicode.Unicode);
  dart.addTypeCaches(unicode.Unicode);
  dart.setLibraryUri(unicode.Unicode, L15);
  dart.defineLazy(unicode.Unicode, {
    /*unicode.Unicode.LRE*/get LRE() {
      return "‪";
    },
    /*unicode.Unicode.RLE*/get RLE() {
      return "‫";
    },
    /*unicode.Unicode.PDF*/get PDF() {
      return "‬";
    },
    /*unicode.Unicode.LRO*/get LRO() {
      return "‭";
    },
    /*unicode.Unicode.RLO*/get RLO() {
      return "‮";
    },
    /*unicode.Unicode.LRI*/get LRI() {
      return "⁦";
    },
    /*unicode.Unicode.RLI*/get RLI() {
      return "⁧";
    },
    /*unicode.Unicode.FSI*/get FSI() {
      return "⁨";
    },
    /*unicode.Unicode.PDI*/get PDI() {
      return "⁩";
    },
    /*unicode.Unicode.LRM*/get LRM() {
      return "‎";
    },
    /*unicode.Unicode.RLM*/get RLM() {
      return "‏";
    },
    /*unicode.Unicode.ALM*/get ALM() {
      return "؜";
    }
  }, true);
  key.Key = class Key extends core.Object {};
  (key.Key.empty = function() {
    ;
  }).prototype = key.Key.prototype;
  dart.addTypeTests(key.Key);
  dart.addTypeCaches(key.Key);
  dart.setLibraryUri(key.Key, L16);
  key.LocalKey = class LocalKey extends key.Key {};
  (key.LocalKey.new = function() {
    key.LocalKey.__proto__.empty.call(this);
    ;
  }).prototype = key.LocalKey.prototype;
  dart.addTypeTests(key.LocalKey);
  dart.addTypeCaches(key.LocalKey);
  dart.setLibraryUri(key.LocalKey, L16);
  const _is_ValueKey_default = Symbol('_is_ValueKey_default');
  var value$1 = dart.privateName(key, "ValueKey.value");
  key.ValueKey$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ValueKeyOfTL = () => (ValueKeyOfTL = dart.constFn(key.ValueKey$(TL())))();
    var ValueKeyLOfTL = () => (ValueKeyLOfTL = dart.constFn(dart.legacy(ValueKeyOfTL())))();
    var _TypeLiteralOfValueKeyLOfTL = () => (_TypeLiteralOfValueKeyLOfTL = dart.constFn(key._TypeLiteral$(ValueKeyLOfTL())))();
    class ValueKey extends key.LocalKey {
      get value() {
        return this[value$1];
      }
      set value(value) {
        super.value = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (!dart.equals(dart.runtimeType(other), this.runtimeType)) return false;
        let typedOther = ValueKeyLOfTL().as(other);
        return dart.equals(this.value, typedOther.value);
      }
      get hashCode() {
        return ui.hashValues(this.runtimeType, this.value);
      }
      toString() {
        let valueString = dart.wrapType(TL())[$_equals](dart.wrapType(StringL())) ? "<'" + dart.str(this.value) + "'>" : "<" + dart.str(this.value) + ">";
        if (dart.equals(this.runtimeType, new (_TypeLiteralOfValueKeyLOfTL()).new().type)) return "[" + valueString + "]";
        return "[" + dart.str(dart.wrapType(TL())) + " " + valueString + "]";
      }
    }
    (ValueKey.new = function(value) {
      this[value$1] = value;
      ValueKey.__proto__.new.call(this);
      ;
    }).prototype = ValueKey.prototype;
    dart.addTypeTests(ValueKey);
    ValueKey.prototype[_is_ValueKey_default] = true;
    dart.addTypeCaches(ValueKey);
    dart.setMethodSignature(ValueKey, () => ({
      __proto__: dart.getMethods(ValueKey.__proto__),
      _equals: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      [$_equals]: dart.fnType(dart.legacy(core.bool), [dart.dynamic]),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setGetterSignature(ValueKey, () => ({
      __proto__: dart.getGetters(ValueKey.__proto__),
      hashCode: dart.legacy(core.int),
      [$hashCode]: dart.legacy(core.int)
    }));
    dart.setLibraryUri(ValueKey, L16);
    dart.setFieldSignature(ValueKey, () => ({
      __proto__: dart.getFields(ValueKey.__proto__),
      value: dart.finalFieldType(dart.legacy(T))
    }));
    dart.defineExtensionMethods(ValueKey, ['_equals', 'toString']);
    dart.defineExtensionAccessors(ValueKey, ['hashCode']);
    return ValueKey;
  });
  key.ValueKey = key.ValueKey$();
  dart.addTypeTests(key.ValueKey, _is_ValueKey_default);
  const _is__TypeLiteral_default = Symbol('_is__TypeLiteral_default');
  key._TypeLiteral$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class _TypeLiteral extends core.Object {
      get type() {
        return dart.wrapType(TL());
      }
    }
    (_TypeLiteral.new = function() {
      ;
    }).prototype = _TypeLiteral.prototype;
    dart.addTypeTests(_TypeLiteral);
    _TypeLiteral.prototype[_is__TypeLiteral_default] = true;
    dart.addTypeCaches(_TypeLiteral);
    dart.setGetterSignature(_TypeLiteral, () => ({
      __proto__: dart.getGetters(_TypeLiteral.__proto__),
      type: dart.legacy(core.Type)
    }));
    dart.setLibraryUri(_TypeLiteral, L16);
    return _TypeLiteral;
  });
  key._TypeLiteral = key._TypeLiteral$();
  dart.addTypeTests(key._TypeLiteral, _is__TypeLiteral_default);
  profile.profile = function profile$($function) {
    if (false) return;
    $function();
  };
  dart.defineLazy(profile, {
    /*profile._kReleaseMode*/get _kReleaseMode() {
      return false;
    }
  }, true);
  collections.setEquals = function setEquals(T, a, b) {
    if (a == null) return b == null;
    if (b == null || a[$length] != b[$length]) return false;
    for (let value of a) {
      if (!dart.test(b.contains(value))) return false;
    }
    return true;
  };
  collections.listEquals = function listEquals(T, a, b) {
    if (a == null) return b == null;
    if (b == null || a[$length] != b[$length]) return false;
    for (let index = 0; index < dart.notNull(a[$length]); index = index + 1) {
      if (!dart.equals(a[$_get](index), b[$_get](index))) return false;
    }
    return true;
  };
  var text$ = dart.privateName(licenses, "LicenseParagraph.text");
  var indent$ = dart.privateName(licenses, "LicenseParagraph.indent");
  licenses.LicenseParagraph = class LicenseParagraph extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get indent() {
      return this[indent$];
    }
    set indent(value) {
      super.indent = value;
    }
  };
  (licenses.LicenseParagraph.new = function(text, indent) {
    this[text$] = text;
    this[indent$] = indent;
    ;
  }).prototype = licenses.LicenseParagraph.prototype;
  dart.addTypeTests(licenses.LicenseParagraph);
  dart.addTypeCaches(licenses.LicenseParagraph);
  dart.setLibraryUri(licenses.LicenseParagraph, L17);
  dart.setFieldSignature(licenses.LicenseParagraph, () => ({
    __proto__: dart.getFields(licenses.LicenseParagraph.__proto__),
    text: dart.finalFieldType(dart.legacy(core.String)),
    indent: dart.finalFieldType(dart.legacy(core.int))
  }));
  dart.defineLazy(licenses.LicenseParagraph, {
    /*licenses.LicenseParagraph.centeredIndent*/get centeredIndent() {
      return -1;
    }
  }, true);
  licenses.LicenseEntry = class LicenseEntry extends core.Object {};
  (licenses.LicenseEntry.new = function() {
    ;
  }).prototype = licenses.LicenseEntry.prototype;
  dart.addTypeTests(licenses.LicenseEntry);
  dart.addTypeCaches(licenses.LicenseEntry);
  dart.setLibraryUri(licenses.LicenseEntry, L17);
  var _name$2 = dart.privateName(licenses, "_name");
  var C49;
  var C50;
  var C51;
  licenses._LicenseEntryWithLineBreaksParserState = class _LicenseEntryWithLineBreaksParserState extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (licenses._LicenseEntryWithLineBreaksParserState.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = licenses._LicenseEntryWithLineBreaksParserState.prototype;
  dart.addTypeTests(licenses._LicenseEntryWithLineBreaksParserState);
  dart.addTypeCaches(licenses._LicenseEntryWithLineBreaksParserState);
  dart.setMethodSignature(licenses._LicenseEntryWithLineBreaksParserState, () => ({
    __proto__: dart.getMethods(licenses._LicenseEntryWithLineBreaksParserState.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(licenses._LicenseEntryWithLineBreaksParserState, L17);
  dart.setFieldSignature(licenses._LicenseEntryWithLineBreaksParserState, () => ({
    __proto__: dart.getFields(licenses._LicenseEntryWithLineBreaksParserState.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$2]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(licenses._LicenseEntryWithLineBreaksParserState, ['toString']);
  licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph = C49 || CT.C49;
  licenses._LicenseEntryWithLineBreaksParserState.inParagraph = C50 || CT.C50;
  licenses._LicenseEntryWithLineBreaksParserState.values = C51 || CT.C51;
  var packages$ = dart.privateName(licenses, "LicenseEntryWithLineBreaks.packages");
  var text$0 = dart.privateName(licenses, "LicenseEntryWithLineBreaks.text");
  licenses.LicenseEntryWithLineBreaks = class LicenseEntryWithLineBreaks extends licenses.LicenseEntry {
    get packages() {
      return this[packages$];
    }
    set packages(value) {
      super.packages = value;
    }
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    get paragraphs() {
      return new (SyncIterableOfLicenseParagraphL()).new((function* paragraphs() {
        let lineStart = 0;
        let currentPosition = 0;
        let lastLineIndent = 0;
        let currentLineIndent = 0;
        let currentParagraphIndentation = null;
        let state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
        let lines = JSArrayOfStringL().of([]);
        const addLine = () => {
          if (!(lineStart < currentPosition)) dart.assertFailed(null, L18, 152, 14, "lineStart < currentPosition");
          lines[$add](this.text[$substring](lineStart, currentPosition));
        };
        dart.fn(addLine, VoidTovoid());
        function getParagraph() {
          if (!dart.test(lines[$isNotEmpty])) dart.assertFailed(null, L18, 157, 14, "lines.isNotEmpty");
          if (!(currentParagraphIndentation != null)) dart.assertFailed(null, L18, 158, 14, "currentParagraphIndentation != null");
          let result = new licenses.LicenseParagraph.new(lines[$join](" "), currentParagraphIndentation);
          if (!(result.text[$trimLeft]() === result.text)) dart.assertFailed(null, L18, 161, 14, "result.text.trimLeft() == result.text");
          if (!result.text[$isNotEmpty]) dart.assertFailed(null, L18, 162, 14, "result.text.isNotEmpty");
          lines[$clear]();
          return result;
        }
        dart.fn(getParagraph, VoidToLicenseParagraphL());
        while (currentPosition < this.text.length) {
          switch (state) {
            case C49 || CT.C49:
            {
              if (!(lineStart === currentPosition)) dart.assertFailed(null, L18, 170, 18, "lineStart == currentPosition");
              let labelState = this.text[$_get](currentPosition);
              SL0:
                while (true) {
                  switch (labelState) {
                    case " ":
                    {
                      lineStart = currentPosition + 1;
                      currentLineIndent = currentLineIndent + 1;
                      state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                      break SL0;
                    }
                    case "\t":
                    {
                      lineStart = currentPosition + 1;
                      currentLineIndent = currentLineIndent + 8;
                      state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                      break SL0;
                    }
                    case "\n":
                    case "\f":
                    {
                      if (dart.test(lines[$isNotEmpty])) {
                        yield getParagraph();
                      }
                      lastLineIndent = 0;
                      currentLineIndent = 0;
                      currentParagraphIndentation = null;
                      lineStart = currentPosition + 1;
                      state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                      break SL0;
                    }
                    case "[":
                    {
                      currentLineIndent = currentLineIndent + 1;
                      labelState = Symbol('_default');
                      continue SL0;
                    }
                    default:
                    {
                      if (dart.test(lines[$isNotEmpty]) && currentLineIndent > lastLineIndent) {
                        yield getParagraph();
                        currentParagraphIndentation = null;
                      }
                      if (currentParagraphIndentation == null) {
                        if (currentLineIndent > 10)
                          currentParagraphIndentation = -1;
                        else
                          currentParagraphIndentation = (currentLineIndent / 3)[$truncate]();
                      }
                      state = licenses._LicenseEntryWithLineBreaksParserState.inParagraph;
                      break SL0;
                    }
                  }
                  break;
                }
              break;
            }
            case C50 || CT.C50:
            {
              switch (this.text[$_get](currentPosition)) {
                case "\n":
                {
                  addLine();
                  lastLineIndent = currentLineIndent;
                  currentLineIndent = 0;
                  lineStart = currentPosition + 1;
                  state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                case "\f":
                {
                  addLine();
                  yield getParagraph();
                  lastLineIndent = 0;
                  currentLineIndent = 0;
                  currentParagraphIndentation = null;
                  lineStart = currentPosition + 1;
                  state = licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                default:
                {
                  state = licenses._LicenseEntryWithLineBreaksParserState.inParagraph;
                }
              }
              break;
            }
          }
          currentPosition = currentPosition + 1;
        }
        switch (state) {
          case C49 || CT.C49:
          {
            if (dart.test(lines[$isNotEmpty])) {
              yield getParagraph();
            }
            break;
          }
          case C50 || CT.C50:
          {
            addLine();
            yield getParagraph();
            break;
          }
        }
      }).bind(this));
    }
  };
  (licenses.LicenseEntryWithLineBreaks.new = function(packages, text) {
    this[packages$] = packages;
    this[text$0] = text;
    licenses.LicenseEntryWithLineBreaks.__proto__.new.call(this);
    ;
  }).prototype = licenses.LicenseEntryWithLineBreaks.prototype;
  dart.addTypeTests(licenses.LicenseEntryWithLineBreaks);
  dart.addTypeCaches(licenses.LicenseEntryWithLineBreaks);
  dart.setGetterSignature(licenses.LicenseEntryWithLineBreaks, () => ({
    __proto__: dart.getGetters(licenses.LicenseEntryWithLineBreaks.__proto__),
    paragraphs: dart.legacy(core.Iterable$(dart.legacy(licenses.LicenseParagraph)))
  }));
  dart.setLibraryUri(licenses.LicenseEntryWithLineBreaks, L17);
  dart.setFieldSignature(licenses.LicenseEntryWithLineBreaks, () => ({
    __proto__: dart.getFields(licenses.LicenseEntryWithLineBreaks.__proto__),
    packages: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    text: dart.finalFieldType(dart.legacy(core.String))
  }));
  licenses.LicenseRegistry = class LicenseRegistry extends core.Object {
    static addLicense(collector) {
      licenses.LicenseRegistry._collectors == null ? licenses.LicenseRegistry._collectors = JSArrayOfVoidToLStreamLOfLicenseEntryL().of([]) : null;
      licenses.LicenseRegistry._collectors[$add](collector);
    }
    static get licenses() {
      return new (_AsyncStarImplOfLicenseEntryL()).new(function* licenses$(stream) {
        if (licenses.LicenseRegistry._collectors == null) return;
        for (let collector of licenses.LicenseRegistry._collectors) {
          if (stream.addStream(collector())) return;
          yield;
        }
      }).stream;
    }
  };
  (licenses.LicenseRegistry.__ = function() {
    ;
  }).prototype = licenses.LicenseRegistry.prototype;
  dart.addTypeTests(licenses.LicenseRegistry);
  dart.addTypeCaches(licenses.LicenseRegistry);
  dart.setLibraryUri(licenses.LicenseRegistry, L17);
  dart.defineLazy(licenses.LicenseRegistry, {
    /*licenses.LicenseRegistry._collectors*/get _collectors() {
      return null;
    },
    set _collectors(_) {}
  }, true);
  var _list = dart.privateName(observer_list, "_list");
  var _isDirty = dart.privateName(observer_list, "_isDirty");
  var _set = dart.privateName(observer_list, "_set");
  const _is_ObserverList_default = Symbol('_is_ObserverList_default');
  observer_list.ObserverList$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var JSArrayOfTL = () => (JSArrayOfTL = dart.constFn(_interceptors.JSArray$(TL())))();
    var HashSetOfTL = () => (HashSetOfTL = dart.constFn(collection.HashSet$(TL())))();
    class ObserverList extends core.Iterable$(dart.legacy(T)) {
      add(item) {
        TL().as(item);
        this[_isDirty] = true;
        this[_list][$add](item);
      }
      remove(item) {
        TL().as(item);
        this[_isDirty] = true;
        return this[_list][$remove](item);
      }
      contains(element) {
        if (dart.notNull(this[_list][$length]) < 15) {
          return this[_list][$contains](element);
        }
        if (dart.test(this[_isDirty])) {
          if (this[_set] == null) {
            this[_set] = HashSetOfTL().from(this[_list]);
          } else {
            this[_set].clear();
            this[_set].addAll(this[_list]);
          }
          this[_isDirty] = false;
        }
        return this[_set].contains(element);
      }
      get iterator() {
        return this[_list][$iterator];
      }
      get isEmpty() {
        return this[_list][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list][$isNotEmpty];
      }
    }
    (ObserverList.new = function() {
      this[_list] = JSArrayOfTL().of([]);
      this[_isDirty] = false;
      this[_set] = null;
      ObserverList.__proto__.new.call(this);
      ;
    }).prototype = ObserverList.prototype;
    dart.addTypeTests(ObserverList);
    ObserverList.prototype[_is_ObserverList_default] = true;
    dart.addTypeCaches(ObserverList);
    dart.setMethodSignature(ObserverList, () => ({
      __proto__: dart.getMethods(ObserverList.__proto__),
      add: dart.fnType(dart.void, [dart.legacy(core.Object)]),
      remove: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      contains: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)]),
      [$contains]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)])
    }));
    dart.setGetterSignature(ObserverList, () => ({
      __proto__: dart.getGetters(ObserverList.__proto__),
      iterator: dart.legacy(core.Iterator$(dart.legacy(T))),
      [$iterator]: dart.legacy(core.Iterator$(dart.legacy(T))),
      isEmpty: dart.legacy(core.bool),
      [$isEmpty]: dart.legacy(core.bool),
      isNotEmpty: dart.legacy(core.bool),
      [$isNotEmpty]: dart.legacy(core.bool)
    }));
    dart.setLibraryUri(ObserverList, L19);
    dart.setFieldSignature(ObserverList, () => ({
      __proto__: dart.getFields(ObserverList.__proto__),
      [_list]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(T)))),
      [_isDirty]: dart.fieldType(dart.legacy(core.bool)),
      [_set]: dart.fieldType(dart.legacy(collection.HashSet$(dart.legacy(T))))
    }));
    dart.defineExtensionMethods(ObserverList, ['contains']);
    dart.defineExtensionAccessors(ObserverList, ['iterator', 'isEmpty', 'isNotEmpty']);
    return ObserverList;
  });
  observer_list.ObserverList = observer_list.ObserverList$();
  dart.addTypeTests(observer_list.ObserverList, _is_ObserverList_default);
  change_notifier.Listenable = class Listenable extends core.Object {};
  (change_notifier.Listenable.new = function() {
    ;
  }).prototype = change_notifier.Listenable.prototype;
  dart.addTypeTests(change_notifier.Listenable);
  dart.addTypeCaches(change_notifier.Listenable);
  dart.setLibraryUri(change_notifier.Listenable, L20);
  const _is_ValueListenable_default = Symbol('_is_ValueListenable_default');
  change_notifier.ValueListenable$ = dart.generic(T => {
    class ValueListenable extends change_notifier.Listenable {}
    (ValueListenable.new = function() {
      ValueListenable.__proto__.new.call(this);
      ;
    }).prototype = ValueListenable.prototype;
    dart.addTypeTests(ValueListenable);
    ValueListenable.prototype[_is_ValueListenable_default] = true;
    dart.addTypeCaches(ValueListenable);
    dart.setLibraryUri(ValueListenable, L20);
    return ValueListenable;
  });
  change_notifier.ValueListenable = change_notifier.ValueListenable$();
  dart.addTypeTests(change_notifier.ValueListenable, _is_ValueListenable_default);
  var _listeners = dart.privateName(change_notifier, "_listeners");
  var _debugAssertNotDisposed = dart.privateName(change_notifier, "_debugAssertNotDisposed");
  change_notifier.ChangeNotifier = class ChangeNotifier extends core.Object {
    [_debugAssertNotDisposed]() {
      if (!dart.test(dart.fn(() => {
        if (this[_listeners] == null) {
          dart.throw(assertions.FlutterError.new("A " + dart.str(this.runtimeType) + " was used after being disposed.\n" + "Once you have called dispose() on a " + dart.str(this.runtimeType) + ", it can no longer be used."));
        }
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L21, 104, 12, "() {\n      if (_listeners == null) {\n        throw FlutterError(\n          'A $runtimeType was used after being disposed.\\n'\n          'Once you have called dispose() on a $runtimeType, it can no longer be used.'\n        );\n      }\n      return true;\n    }()");
      return true;
    }
    get hasListeners() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L21, 133, 12, "_debugAssertNotDisposed()");
      return this[_listeners].isNotEmpty;
    }
    addListener(listener) {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L21, 142, 12, "_debugAssertNotDisposed()");
      this[_listeners].add(listener);
    }
    removeListener(listener) {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L21, 167, 12, "_debugAssertNotDisposed()");
      this[_listeners].remove(listener);
    }
    dispose() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L21, 179, 12, "_debugAssertNotDisposed()");
      this[_listeners] = null;
    }
    notifyListeners() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed(null, L21, 201, 12, "_debugAssertNotDisposed()");
      if (this[_listeners] != null) {
        let localListeners = ListOfVoidToLvoid().from(this[_listeners]);
        for (let listener of localListeners) {
          try {
            if (dart.test(this[_listeners].contains(listener))) listener();
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "foundation library", context: new assertions.ErrorDescription.new("while dispatching notifications for " + dart.str(this.runtimeType)), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNodeL()).new((function*() {
                yield new (DiagnosticsPropertyOfChangeNotifierL()).new("The " + dart.str(this.runtimeType) + " sending notification was", this, {style: diagnostics$.DiagnosticsTreeStyle.errorProperty});
              }).bind(this)), VoidToIterableLOfDiagnosticsNodeL())}));
          }
        }
      }
    }
  };
  (change_notifier.ChangeNotifier.new = function() {
    this[_listeners] = new (ObserverListOfVoidToLvoid()).new();
    ;
  }).prototype = change_notifier.ChangeNotifier.prototype;
  dart.addTypeTests(change_notifier.ChangeNotifier);
  dart.addTypeCaches(change_notifier.ChangeNotifier);
  change_notifier.ChangeNotifier[dart.implements] = () => [change_notifier.Listenable];
  dart.setMethodSignature(change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getMethods(change_notifier.ChangeNotifier.__proto__),
    [_debugAssertNotDisposed]: dart.fnType(dart.legacy(core.bool), []),
    addListener: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, []))]),
    removeListener: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, []))]),
    dispose: dart.fnType(dart.void, []),
    notifyListeners: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getGetters(change_notifier.ChangeNotifier.__proto__),
    hasListeners: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(change_notifier.ChangeNotifier, L20);
  dart.setFieldSignature(change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getFields(change_notifier.ChangeNotifier.__proto__),
    [_listeners]: dart.fieldType(dart.legacy(observer_list.ObserverList$(dart.legacy(dart.fnType(dart.void, [])))))
  }));
  var _children$ = dart.privateName(change_notifier, "_children");
  change_notifier._MergingListenable = class _MergingListenable extends change_notifier.Listenable {
    addListener(listener) {
      let t8;
      for (let child of this[_children$]) {
        t8 = child;
        t8 == null ? null : t8.addListener(listener);
      }
    }
    removeListener(listener) {
      let t8;
      for (let child of this[_children$]) {
        t8 = child;
        t8 == null ? null : t8.removeListener(listener);
      }
    }
    toString() {
      return "Listenable.merge([" + dart.str(this[_children$][$join](", ")) + "])";
    }
  };
  (change_notifier._MergingListenable.new = function(_children) {
    this[_children$] = _children;
    change_notifier._MergingListenable.__proto__.new.call(this);
    ;
  }).prototype = change_notifier._MergingListenable.prototype;
  dart.addTypeTests(change_notifier._MergingListenable);
  dart.addTypeCaches(change_notifier._MergingListenable);
  dart.setMethodSignature(change_notifier._MergingListenable, () => ({
    __proto__: dart.getMethods(change_notifier._MergingListenable.__proto__),
    addListener: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, []))]),
    removeListener: dart.fnType(dart.void, [dart.legacy(dart.fnType(dart.void, []))]),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(change_notifier._MergingListenable, L20);
  dart.setFieldSignature(change_notifier._MergingListenable, () => ({
    __proto__: dart.getFields(change_notifier._MergingListenable.__proto__),
    [_children$]: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(change_notifier.Listenable))))
  }));
  dart.defineExtensionMethods(change_notifier._MergingListenable, ['toString']);
  var _value$0 = dart.privateName(change_notifier, "_value");
  const _is_ValueNotifier_default = Symbol('_is_ValueNotifier_default');
  change_notifier.ValueNotifier$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    class ValueNotifier extends change_notifier.ChangeNotifier {
      get value() {
        return this[_value$0];
      }
      set value(newValue) {
        TL().as(newValue);
        if (dart.equals(this[_value$0], newValue)) return;
        this[_value$0] = newValue;
        this.notifyListeners();
      }
      toString() {
        return dart.str(diagnostics$.describeIdentity(this)) + "(" + dart.str(this.value) + ")";
      }
    }
    (ValueNotifier.new = function(_value) {
      this[_value$0] = _value;
      ValueNotifier.__proto__.new.call(this);
      ;
    }).prototype = ValueNotifier.prototype;
    dart.addTypeTests(ValueNotifier);
    ValueNotifier.prototype[_is_ValueNotifier_default] = true;
    dart.addTypeCaches(ValueNotifier);
    ValueNotifier[dart.implements] = () => [change_notifier.ValueListenable$(dart.legacy(T))];
    dart.setMethodSignature(ValueNotifier, () => ({
      __proto__: dart.getMethods(ValueNotifier.__proto__),
      toString: dart.fnType(dart.legacy(core.String), []),
      [$toString]: dart.fnType(dart.legacy(core.String), [])
    }));
    dart.setGetterSignature(ValueNotifier, () => ({
      __proto__: dart.getGetters(ValueNotifier.__proto__),
      value: dart.legacy(T)
    }));
    dart.setSetterSignature(ValueNotifier, () => ({
      __proto__: dart.getSetters(ValueNotifier.__proto__),
      value: dart.legacy(core.Object)
    }));
    dart.setLibraryUri(ValueNotifier, L20);
    dart.setFieldSignature(ValueNotifier, () => ({
      __proto__: dart.getFields(ValueNotifier.__proto__),
      [_value$0]: dart.fieldType(dart.legacy(T))
    }));
    dart.defineExtensionMethods(ValueNotifier, ['toString']);
    return ValueNotifier;
  });
  change_notifier.ValueNotifier = change_notifier.ValueNotifier$();
  dart.addTypeTests(change_notifier.ValueNotifier, _is_ValueNotifier_default);
  isolates.compute = function compute(Q, R, callback, message, opts) {
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    return async.async(dart.legacy(R), function* compute() {
      return callback(message);
    });
  };
  var _depth = dart.privateName(node, "_depth");
  var _owner = dart.privateName(node, "_owner");
  var _parent = dart.privateName(node, "_parent");
  node.AbstractNode = class AbstractNode extends core.Object {
    get depth() {
      return this[_depth];
    }
    redepthChild(child) {
      if (!dart.equals(child.owner, this.owner)) dart.assertFailed(null, L22, 52, 12, "child.owner == owner");
      if (dart.notNull(child[_depth]) <= dart.notNull(this[_depth])) {
        child[_depth] = dart.notNull(this[_depth]) + 1;
        child.redepthChildren();
      }
    }
    redepthChildren() {
    }
    get owner() {
      return this[_owner];
    }
    get attached() {
      return this[_owner] != null;
    }
    attach(owner) {
      if (!(owner != null)) dart.assertFailed(null, L22, 88, 12, "owner != null");
      if (!(this[_owner] == null)) dart.assertFailed(null, L22, 89, 12, "_owner == null");
      this[_owner] = owner;
    }
    detach() {
      if (!(this[_owner] != null)) dart.assertFailed(null, L22, 102, 12, "_owner != null");
      this[_owner] = null;
      if (!(this.parent == null || dart.equals(this.attached, this.parent.attached))) dart.assertFailed(null, L22, 104, 12, "parent == null || attached == parent.attached");
    }
    get parent() {
      return this[_parent];
    }
    adoptChild(child) {
      AbstractNodeL().as(child);
      if (!(child != null)) dart.assertFailed(null, L22, 117, 12, "child != null");
      if (!(child[_parent] == null)) dart.assertFailed(null, L22, 118, 12, "child._parent == null");
      if (!dart.test(dart.fn(() => {
        let node = this;
        while (node.parent != null)
          node = node.parent;
        if (!!dart.equals(node, child)) dart.assertFailed(null, L22, 122, 14, "node != child");
        return true;
      }, VoidToboolL())())) dart.assertFailed(null, L22, 119, 12, "() {\n      AbstractNode node = this;\n      while (node.parent != null) node = node.parent;\n      assert(node != child); // indicates we are about to create a cycle\n      return true;\n    }()");
      child[_parent] = this;
      if (dart.test(this.attached)) {
        child.attach(this[_owner]);
      }
      this.redepthChild(child);
    }
    dropChild(child) {
      AbstractNodeL().as(child);
      if (!(child != null)) dart.assertFailed(null, L22, 138, 12, "child != null");
      if (!dart.equals(child[_parent], this)) dart.assertFailed(null, L22, 139, 12, "child._parent == this");
      if (!dart.equals(child.attached, this.attached)) dart.assertFailed(null, L22, 140, 12, "child.attached == attached");
      child[_parent] = null;
      if (dart.test(this.attached)) {
        child.detach();
      }
    }
  };
  (node.AbstractNode.new = function() {
    this[_depth] = 0;
    this[_owner] = null;
    this[_parent] = null;
    ;
  }).prototype = node.AbstractNode.prototype;
  dart.addTypeTests(node.AbstractNode);
  dart.addTypeCaches(node.AbstractNode);
  dart.setMethodSignature(node.AbstractNode, () => ({
    __proto__: dart.getMethods(node.AbstractNode.__proto__),
    redepthChild: dart.fnType(dart.void, [dart.legacy(node.AbstractNode)]),
    redepthChildren: dart.fnType(dart.void, []),
    attach: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    detach: dart.fnType(dart.void, []),
    adoptChild: dart.fnType(dart.void, [dart.legacy(core.Object)]),
    dropChild: dart.fnType(dart.void, [dart.legacy(core.Object)])
  }));
  dart.setGetterSignature(node.AbstractNode, () => ({
    __proto__: dart.getGetters(node.AbstractNode.__proto__),
    depth: dart.legacy(core.int),
    owner: dart.legacy(core.Object),
    attached: dart.legacy(core.bool),
    parent: dart.legacy(node.AbstractNode)
  }));
  dart.setLibraryUri(node.AbstractNode, L23);
  dart.setFieldSignature(node.AbstractNode, () => ({
    __proto__: dart.getFields(node.AbstractNode.__proto__),
    [_depth]: dart.fieldType(dart.legacy(core.int)),
    [_owner]: dart.fieldType(dart.legacy(core.Object)),
    [_parent]: dart.fieldType(dart.legacy(node.AbstractNode))
  }));
  var _buffer$ = dart.privateName(serialization, "_buffer");
  var _eightBytes = dart.privateName(serialization, "_eightBytes");
  var _eightBytesAsList = dart.privateName(serialization, "_eightBytesAsList");
  var _alignTo = dart.privateName(serialization, "_alignTo");
  serialization.WriteBuffer = class WriteBuffer extends core.Object {
    putUint8(byte) {
      this[_buffer$].add(byte);
    }
    putUint16(value) {
      this[_eightBytes][$setUint16](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 2);
    }
    putUint32(value) {
      this[_eightBytes][$setUint32](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 4);
    }
    putInt32(value) {
      this[_eightBytes][$setInt32](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 4);
    }
    putInt64(value) {
      this[_eightBytes][$setInt64](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 8);
    }
    putFloat64(value) {
      this[_alignTo](8);
      this[_eightBytes][$setFloat64](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList]);
    }
    putUint8List(list) {
      this[_buffer$].addAll(list);
    }
    putInt32List(list) {
      this[_alignTo](4);
      this[_buffer$].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 4 * dart.notNull(list[$length])));
    }
    putInt64List(list) {
      this[_alignTo](8);
      this[_buffer$].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 8 * dart.notNull(list[$length])));
    }
    putFloat64List(list) {
      this[_alignTo](8);
      this[_buffer$].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 8 * dart.notNull(list[$length])));
    }
    [_alignTo](alignment) {
      let mod = this[_buffer$].length[$modulo](alignment);
      if (mod !== 0) {
        for (let i = 0; i < dart.notNull(alignment) - mod; i = i + 1)
          this[_buffer$].add(0);
      }
    }
    done() {
      let result = this[_buffer$].buffer[$asByteData](0, this[_buffer$].lengthInBytes);
      this[_buffer$] = null;
      return result;
    }
  };
  (serialization.WriteBuffer.new = function() {
    this[_buffer$] = null;
    this[_eightBytes] = null;
    this[_eightBytesAsList] = null;
    this[_buffer$] = new typed_buffer.Uint8Buffer.new();
    this[_eightBytes] = _native_typed_data.NativeByteData.new(8);
    this[_eightBytesAsList] = this[_eightBytes][$buffer][$asUint8List]();
  }).prototype = serialization.WriteBuffer.prototype;
  dart.addTypeTests(serialization.WriteBuffer);
  dart.addTypeCaches(serialization.WriteBuffer);
  dart.setMethodSignature(serialization.WriteBuffer, () => ({
    __proto__: dart.getMethods(serialization.WriteBuffer.__proto__),
    putUint8: dart.fnType(dart.void, [dart.legacy(core.int)]),
    putUint16: dart.fnType(dart.void, [dart.legacy(core.int)]),
    putUint32: dart.fnType(dart.void, [dart.legacy(core.int)]),
    putInt32: dart.fnType(dart.void, [dart.legacy(core.int)]),
    putInt64: dart.fnType(dart.void, [dart.legacy(core.int)]),
    putFloat64: dart.fnType(dart.void, [dart.legacy(core.double)]),
    putUint8List: dart.fnType(dart.void, [dart.legacy(typed_data.Uint8List)]),
    putInt32List: dart.fnType(dart.void, [dart.legacy(typed_data.Int32List)]),
    putInt64List: dart.fnType(dart.void, [dart.legacy(typed_data.Int64List)]),
    putFloat64List: dart.fnType(dart.void, [dart.legacy(typed_data.Float64List)]),
    [_alignTo]: dart.fnType(dart.void, [dart.legacy(core.int)]),
    done: dart.fnType(dart.legacy(typed_data.ByteData), [])
  }));
  dart.setLibraryUri(serialization.WriteBuffer, L24);
  dart.setFieldSignature(serialization.WriteBuffer, () => ({
    __proto__: dart.getFields(serialization.WriteBuffer.__proto__),
    [_buffer$]: dart.fieldType(dart.legacy(typed_buffer.Uint8Buffer)),
    [_eightBytes]: dart.fieldType(dart.legacy(typed_data.ByteData)),
    [_eightBytesAsList]: dart.fieldType(dart.legacy(typed_data.Uint8List))
  }));
  var _position = dart.privateName(serialization, "_position");
  var data$ = dart.privateName(serialization, "ReadBuffer.data");
  serialization.ReadBuffer = class ReadBuffer extends core.Object {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get hasRemaining() {
      return dart.notNull(this[_position]) < dart.notNull(this.data[$lengthInBytes]);
    }
    getUint8() {
      let t8;
      return this.data[$getUint8]((t8 = this[_position], this[_position] = dart.notNull(t8) + 1, t8));
    }
    getUint16() {
      let value = this.data[$getUint16](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 2;
      return value;
    }
    getUint32() {
      let value = this.data[$getUint32](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 4;
      return value;
    }
    getInt32() {
      let value = this.data[$getInt32](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 4;
      return value;
    }
    getInt64() {
      let value = this.data[$getInt64](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 8;
      return value;
    }
    getFloat64() {
      this[_alignTo](8);
      let value = this.data[$getFloat64](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 8;
      return value;
    }
    getUint8List(length) {
      let list = this.data[$buffer][$asUint8List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + dart.notNull(length);
      return list;
    }
    getInt32List(length) {
      this[_alignTo](4);
      let list = this.data[$buffer][$asInt32List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + 4 * dart.notNull(length);
      return list;
    }
    getInt64List(length) {
      this[_alignTo](8);
      let list = this.data[$buffer][$asInt64List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + 8 * dart.notNull(length);
      return list;
    }
    getFloat64List(length) {
      this[_alignTo](8);
      let list = this.data[$buffer][$asFloat64List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + 8 * dart.notNull(length);
      return list;
    }
    [_alignTo](alignment) {
      let mod = this[_position][$modulo](alignment);
      if (mod !== 0) this[_position] = dart.notNull(this[_position]) + (dart.notNull(alignment) - mod);
    }
  };
  (serialization.ReadBuffer.new = function(data) {
    this[_position] = 0;
    this[data$] = data;
    if (!(data != null)) dart.assertFailed(null, L25, 109, 34, "data != null");
    ;
  }).prototype = serialization.ReadBuffer.prototype;
  dart.addTypeTests(serialization.ReadBuffer);
  dart.addTypeCaches(serialization.ReadBuffer);
  dart.setMethodSignature(serialization.ReadBuffer, () => ({
    __proto__: dart.getMethods(serialization.ReadBuffer.__proto__),
    getUint8: dart.fnType(dart.legacy(core.int), []),
    getUint16: dart.fnType(dart.legacy(core.int), []),
    getUint32: dart.fnType(dart.legacy(core.int), []),
    getInt32: dart.fnType(dart.legacy(core.int), []),
    getInt64: dart.fnType(dart.legacy(core.int), []),
    getFloat64: dart.fnType(dart.legacy(core.double), []),
    getUint8List: dart.fnType(dart.legacy(typed_data.Uint8List), [dart.legacy(core.int)]),
    getInt32List: dart.fnType(dart.legacy(typed_data.Int32List), [dart.legacy(core.int)]),
    getInt64List: dart.fnType(dart.legacy(typed_data.Int64List), [dart.legacy(core.int)]),
    getFloat64List: dart.fnType(dart.legacy(typed_data.Float64List), [dart.legacy(core.int)]),
    [_alignTo]: dart.fnType(dart.void, [dart.legacy(core.int)])
  }));
  dart.setGetterSignature(serialization.ReadBuffer, () => ({
    __proto__: dart.getGetters(serialization.ReadBuffer.__proto__),
    hasRemaining: dart.legacy(core.bool)
  }));
  dart.setLibraryUri(serialization.ReadBuffer, L24);
  dart.setFieldSignature(serialization.ReadBuffer, () => ({
    __proto__: dart.getFields(serialization.ReadBuffer.__proto__),
    data: dart.finalFieldType(dart.legacy(typed_data.ByteData)),
    [_position]: dart.fieldType(dart.legacy(core.int))
  }));
  dart.trackLibraries("packages/flutter_web/src/foundation/assertions", {
    "package:flutter_web/src/foundation/bitfield.dart": bitfield,
    "package:flutter_web/src/foundation/binding.dart": binding,
    "package:flutter_web/src/foundation/print.dart": print,
    "package:flutter_web/src/foundation/platform.dart": platform,
    "package:flutter_web/src/foundation/debug.dart": debug,
    "package:flutter_web/src/foundation/assertions.dart": assertions,
    "package:flutter_web/src/foundation/diagnostics.dart": diagnostics$,
    "package:flutter_web/src/foundation/constants.dart": constants,
    "package:flutter_web/src/foundation/basic_types.dart": basic_types,
    "package:flutter_web/src/foundation/synchronous_future.dart": synchronous_future,
    "package:flutter_web/src/foundation/unicode.dart": unicode,
    "package:flutter_web/src/foundation/key.dart": key,
    "package:flutter_web/src/foundation/profile.dart": profile,
    "package:flutter_web/src/foundation/collections.dart": collections,
    "package:flutter_web/src/foundation/licenses.dart": licenses,
    "package:flutter_web/src/foundation/observer_list.dart": observer_list,
    "package:flutter_web/src/foundation/change_notifier.dart": change_notifier,
    "package:flutter_web/src/foundation/isolates.dart": isolates,
    "package:flutter_web/src/foundation/node.dart": node,
    "package:flutter_web/src/foundation/serialization.dart": serialization
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["bitfield.dart","binding.dart","print.dart","platform.dart","debug.dart","diagnostics.dart","assertions.dart","constants.dart","basic_types.dart","synchronous_future.dart","unicode.dart","key.dart","profile.dart","collections.dart","licenses.dart","observer_list.dart","change_notifier.dart","isolates.dart","node.dart","serialization.dart"],"names":[],"mappings":"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","file":"assertions.unsound.ddc.js"}');
  // Exports:
  return {
    src__foundation__bitfield: bitfield,
    src__foundation__binding: binding,
    src__foundation__print: print,
    src__foundation__platform: platform,
    src__foundation__debug: debug,
    src__foundation__assertions: assertions,
    src__foundation__diagnostics: diagnostics$,
    src__foundation__constants: constants,
    src__foundation__basic_types: basic_types,
    src__foundation__synchronous_future: synchronous_future,
    src__foundation__unicode: unicode,
    src__foundation__key: key,
    src__foundation__profile: profile,
    src__foundation__collections: collections,
    src__foundation__licenses: licenses,
    src__foundation__observer_list: observer_list,
    src__foundation__change_notifier: change_notifier,
    src__foundation__isolates: isolates,
    src__foundation__node: node,
    src__foundation__serialization: serialization
  };
}));

//# sourceMappingURL=assertions.unsound.ddc.js.map
