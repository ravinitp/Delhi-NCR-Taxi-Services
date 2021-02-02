define(['dart_sdk', 'packages/CabBookFlutterTemplate/utils/flutter_page_indicator', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/animation', 'packages/CabBookFlutterTemplate/utils/transformer_page_view', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web_ui/ui', 'packages/flutter_web/material'], (function load__packages__CabBookFlutterTemplate__utils__flutter_swiper(dart_sdk, packages__CabBookFlutterTemplate__utils__flutter_page_indicator, packages__flutter_web__src__animation__animation, packages__flutter_web__animation, packages__CabBookFlutterTemplate__utils__transformer_page_view, packages__flutter_web__src__foundation__assertions, packages__flutter_web_ui__ui, packages__flutter_web__material) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const flutter_page_indicator = packages__CabBookFlutterTemplate__utils__flutter_page_indicator.utils__flutter_page_indicator;
  const curves = packages__flutter_web__src__animation__animation.src__animation__curves;
  const basic_types = packages__flutter_web__src__animation__animation.src__painting__basic_types;
  const alignment$ = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const tween = packages__flutter_web__src__animation__animation.src__animation__tween;
  const drag_details = packages__flutter_web__src__animation__animation.src__gestures__drag_details;
  const animation = packages__flutter_web__src__animation__animation.src__animation__animation;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const scroll_physics = packages__flutter_web__animation.src__widgets__scroll_physics;
  const gesture_detector = packages__flutter_web__animation.src__widgets__gesture_detector;
  const proxy_box = packages__flutter_web__animation.src__rendering__proxy_box;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const notification_listener = packages__flutter_web__animation.src__widgets__notification_listener;
  const scroll_notification = packages__flutter_web__animation.src__widgets__scroll_notification;
  const container = packages__flutter_web__animation.src__widgets__container;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const animation_controller = packages__flutter_web__animation.src__animation__animation_controller;
  const binding = packages__flutter_web__animation.src__widgets__binding;
  const transitions = packages__flutter_web__animation.src__widgets__transitions;
  const ticker_provider = packages__flutter_web__animation.src__widgets__ticker_provider;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const text = packages__flutter_web__animation.src__widgets__text;
  const page_view = packages__flutter_web__animation.src__widgets__page_view;
  const transformer_page_view = packages__CabBookFlutterTemplate__utils__transformer_page_view.utils__transformer_page_view;
  const key = packages__flutter_web__src__foundation__assertions.src__foundation__key;
  const ui = packages__flutter_web_ui__ui.ui;
  const theme = packages__flutter_web__material.src__material__theme;
  var flutter_swiper = Object.create(dart.library);
  var $toString = dartx.toString;
  var $_get = dartx._get;
  var $length = dartx.length;
  var $add = dartx.add;
  var $modulo = dartx['%'];
  var $abs = dartx.abs;
  var SwiperLayoutL = () => (SwiperLayoutL = dart.constFn(dart.legacy(flutter_swiper.SwiperLayout)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var BuildContextL = () => (BuildContextL = dart.constFn(dart.legacy(framework.BuildContext)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var BuildContextLAndintLToWidgetL = () => (BuildContextLAndintLToWidgetL = dart.constFn(dart.fnType(WidgetL(), [BuildContextL(), intL()])))();
  var SwiperL = () => (SwiperL = dart.constFn(dart.legacy(flutter_swiper.Swiper)))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var ScrollNotificationL = () => (ScrollNotificationL = dart.constFn(dart.legacy(scroll_notification.ScrollNotification)))();
  var NotificationListenerOfScrollNotificationL = () => (NotificationListenerOfScrollNotificationL = dart.constFn(notification_listener.NotificationListener$(ScrollNotificationL())))();
  var ScrollStartNotificationL = () => (ScrollStartNotificationL = dart.constFn(dart.legacy(scroll_notification.ScrollStartNotification)))();
  var ScrollEndNotificationL = () => (ScrollEndNotificationL = dart.constFn(dart.legacy(scroll_notification.ScrollEndNotification)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ScrollNotificationLToboolL = () => (ScrollNotificationLToboolL = dart.constFn(dart.fnType(boolL(), [ScrollNotificationL()])))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  var SwiperPaginationL = () => (SwiperPaginationL = dart.constFn(dart.legacy(flutter_swiper.SwiperPagination)))();
  var _TinderSwiperL = () => (_TinderSwiperL = dart.constFn(dart.legacy(flutter_swiper._TinderSwiper)))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var JSArrayOfdoubleL = () => (JSArrayOfdoubleL = dart.constFn(_interceptors.JSArray$(doubleL())))();
  var ValueKeyOfintL = () => (ValueKeyOfintL = dart.constFn(key.ValueKey$(intL())))();
  var TweenOfdoubleL = () => (TweenOfdoubleL = dart.constFn(tween.Tween$(doubleL())))();
  var _StackSwiperL = () => (_StackSwiperL = dart.constFn(dart.legacy(flutter_swiper._StackSwiper)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var ValueKeyOfStringL = () => (ValueKeyOfStringL = dart.constFn(key.ValueKey$(StringL())))();
  var TransformBuilderL = () => (TransformBuilderL = dart.constFn(dart.legacy(flutter_swiper.TransformBuilder)))();
  var JSArrayOfTransformBuilderL = () => (JSArrayOfTransformBuilderL = dart.constFn(_interceptors.JSArray$(TransformBuilderL())))();
  var _CustomLayoutSwiperL = () => (_CustomLayoutSwiperL = dart.constFn(dart.legacy(flutter_swiper._CustomLayoutSwiper)))();
  const CT = Object.create(null);
  var L1 = "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart";
  var L0 = "package:CabBookFlutterTemplate/utils/flutter_swiper.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: flutter_swiper.SwiperLayout.prototype,
        [_name$]: "SwiperLayout.DEFAULT",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: flutter_swiper.SwiperLayout.prototype,
        [_name$]: "SwiperLayout.STACK",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: flutter_swiper.SwiperLayout.prototype,
        [_name$]: "SwiperLayout.TINDER",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: flutter_swiper.SwiperLayout.prototype,
        [_name$]: "SwiperLayout.CUSTOM",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], SwiperLayoutL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: flutter_page_indicator.PageIndicatorLayout.prototype,
        [_name]: "PageIndicatorLayout.NONE",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.25,
        [Cubic_b]: 0.1,
        [Cubic_a]: 0.25
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name$0]: "Axis.horizontal",
        index: 0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 7,
        [_Location_line]: 389,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 390,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 393,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11, C12 || CT.C12], _LocationL());
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 388,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "loop",
        [_Location_column]: 9,
        [_Location_line]: 474,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemWidth",
        [_Location_column]: 9,
        [_Location_line]: 475,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemHeight",
        [_Location_column]: 9,
        [_Location_line]: 476,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 9,
        [_Location_line]: 477,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 9,
        [_Location_line]: 478,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "index",
        [_Location_column]: 9,
        [_Location_line]: 479,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "curve",
        [_Location_column]: 9,
        [_Location_line]: 480,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 9,
        [_Location_line]: 481,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onIndexChanged",
        [_Location_column]: 9,
        [_Location_line]: 482,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 483,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 9,
        [_Location_line]: 484,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25], _LocationL());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 473,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pageController",
        [_Location_column]: 9,
        [_Location_line]: 494,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "loop",
        [_Location_column]: 9,
        [_Location_line]: 495,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 9,
        [_Location_line]: 496,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 9,
        [_Location_line]: 497,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "transformer",
        [_Location_column]: 9,
        [_Location_line]: 498,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "viewportFraction",
        [_Location_column]: 9,
        [_Location_line]: 499,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "index",
        [_Location_column]: 9,
        [_Location_line]: 500,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 9,
        [_Location_line]: 501,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 9,
        [_Location_line]: 502,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPageChanged",
        [_Location_column]: 9,
        [_Location_line]: 503,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "curve",
        [_Location_column]: 9,
        [_Location_line]: 504,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 9,
        [_Location_line]: 505,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 506,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40], _LocationL());
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 493,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 510,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onNotification",
        [_Location_column]: 11,
        [_Location_line]: 511,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44], _LocationL());
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C42 || CT.C42,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 509,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "loop",
        [_Location_column]: 9,
        [_Location_line]: 529,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemWidth",
        [_Location_column]: 9,
        [_Location_line]: 530,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemHeight",
        [_Location_column]: 9,
        [_Location_line]: 531,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 9,
        [_Location_line]: 532,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 9,
        [_Location_line]: 533,
        [_Location_file]: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "index",
        [_Location_column]: 9,
        [_Location_line]: 534,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "curve",
        [_Location_column]: 9,
        [_Location_line]: 535,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 9,
        [_Location_line]: 536,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onIndexChanged",
        [_Location_column]: 9,
        [_Location_line]: 537,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 538,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 9,
        [_Location_line]: 539,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48, C49 || CT.C49, C50 || CT.C50, C51 || CT.C51, C52 || CT.C52, C53 || CT.C53, C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C57 || CT.C57], _LocationL());
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C46 || CT.C46,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 528,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "loop",
        [_Location_column]: 9,
        [_Location_line]: 543,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "option",
        [_Location_column]: 9,
        [_Location_line]: 544,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemWidth",
        [_Location_column]: 9,
        [_Location_line]: 545,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemHeight",
        [_Location_column]: 9,
        [_Location_line]: 546,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 9,
        [_Location_line]: 547,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 9,
        [_Location_line]: 548,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "index",
        [_Location_column]: 9,
        [_Location_line]: 549,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "curve",
        [_Location_column]: 9,
        [_Location_line]: 550,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "duration",
        [_Location_column]: 9,
        [_Location_line]: 551,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onIndexChanged",
        [_Location_column]: 9,
        [_Location_line]: 552,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 553,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 9,
        [_Location_line]: 554,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60, C61 || CT.C61, C62 || CT.C62, C63 || CT.C63, C64 || CT.C64, C65 || CT.C65, C66 || CT.C66, C67 || CT.C67, C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71], _LocationL());
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 542,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C73() {
      return C73 = dart.constList([], _LocationL());
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 557,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 55,
        [_Location_line]: 611,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76], _LocationL());
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C75 || CT.C75,
        [_Location_name]: null,
        [_Location_column]: 49,
        [_Location_line]: 611,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 621,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79], _LocationL());
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 620,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 635,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82], _LocationL());
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 635,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 7,
        [_Location_line]: 639,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 640,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86], _LocationL());
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 638,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 644,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 645,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 7,
        [_Location_line]: 646,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90, C91 || CT.C91], _LocationL());
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 643,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 843,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 844,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 845,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95, C96 || CT.C96], _LocationL());
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 842,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 13,
        [_Location_line]: 840,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 841,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 842,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99, C100 || CT.C100, C101 || CT.C101], _LocationL());
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 839,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 11,
        [_Location_line]: 837,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "offset",
        [_Location_column]: 11,
        [_Location_line]: 838,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 839,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105, C106 || CT.C106], _LocationL());
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 836,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 9,
        [_Location_line]: 835,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 836,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110], _LocationL());
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 834,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 7,
        [_Location_line]: 833,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 834,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113, C114 || CT.C114], _LocationL());
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 832,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 1518,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117], _LocationL());
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 1517,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 1544,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120], _LocationL());
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 1543,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 1543,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123], _LocationL());
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 1542,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 7,
        [_Location_line]: 1538,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPanStart",
        [_Location_column]: 7,
        [_Location_line]: 1539,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPanEnd",
        [_Location_column]: 7,
        [_Location_line]: 1540,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPanUpdate",
        [_Location_column]: 7,
        [_Location_line]: 1541,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 1542,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.constList([C126 || CT.C126, C127 || CT.C127, C128 || CT.C128, C129 || CT.C129, C130 || CT.C130], _LocationL());
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C125 || CT.C125,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 1537,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 1553,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 9,
        [_Location_line]: 1556,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 42,
        [_Location_line]: 1556,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.constList([C134 || CT.C134, C135 || CT.C135], _LocationL());
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C133 || CT.C133,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 1555,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 917,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 918,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 919,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138, C139 || CT.C139, C140 || CT.C140], _LocationL());
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 916,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 11,
        [_Location_line]: 914,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 11,
        [_Location_line]: 915,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 916,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.constList([C143 || CT.C143, C144 || CT.C144, C145 || CT.C145], _LocationL());
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C142 || CT.C142,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 913,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 911,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "offset",
        [_Location_column]: 9,
        [_Location_line]: 912,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 913,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148, C149 || CT.C149, C150 || CT.C150], _LocationL());
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 910,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 7,
        [_Location_line]: 909,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 910,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.constList([C153 || CT.C153, C154 || CT.C154], _LocationL());
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C152 || CT.C152,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 908,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 9,
        [_Location_line]: 944,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 945,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.constList([C157 || CT.C157, C158 || CT.C158], _LocationL());
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C156 || CT.C156,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 943,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 9,
        [_Location_line]: 953,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 954,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.constList([C161 || CT.C161, C162 || CT.C162], _LocationL());
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C160 || CT.C160,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 952,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: true,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58848
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: true,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 58849
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 5,
        [EdgeInsets__right]: 5,
        [EdgeInsets__top]: 5,
        [EdgeInsets__left]: 5
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 17,
        [_Location_line]: 1008,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "semanticLabel",
        [_Location_column]: 17,
        [_Location_line]: 1009,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 17,
        [_Location_line]: 1010,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 17,
        [_Location_line]: 1011,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.constList([C168 || CT.C168, C169 || CT.C169, C170 || CT.C170, C171 || CT.C171], _LocationL());
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C167 || CT.C167,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 1007,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "quarterTurns",
        [_Location_column]: 15,
        [_Location_line]: 1006,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 1007,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.constList([C174 || CT.C174, C175 || CT.C175], _LocationL());
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C173 || CT.C173,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 1005,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 1004,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 1005,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.constList([C178 || CT.C178, C179 || CT.C179], _LocationL());
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C177 || CT.C177,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 1003,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "behavior",
        [_Location_column]: 7,
        [_Location_line]: 995,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 7,
        [_Location_line]: 996,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 1003,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.constList([C182 || CT.C182, C183 || CT.C183, C184 || CT.C184], _LocationL());
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C181 || CT.C181,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 994,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 1037,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 1038,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 1039,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.constList([C187 || CT.C187, C188 || CT.C188, C189 || CT.C189], _LocationL());
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C186 || CT.C186,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 1036,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 1046,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 1047,
        [_Location_file]: null
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 1048,
        [_Location_file]: null
      });
    },
    get C191() {
      return C191 = dart.constList([C192 || CT.C192, C193 || CT.C193, C194 || CT.C194], _LocationL());
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C191 || CT.C191,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 1045,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 1056,
        [_Location_file]: null
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 1057,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 1058,
        [_Location_file]: null
      });
    },
    get C196() {
      return C196 = dart.constList([C197 || CT.C197, C198 || CT.C198, C199 || CT.C199], _LocationL());
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C196 || CT.C196,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 1055,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 40,
        [_Location_line]: 1137,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 1138,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.constList([C202 || CT.C202, C203 || CT.C203], _LocationL());
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C201 || CT.C201,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 1136,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 1141,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 1142,
        [_Location_file]: null
      });
    },
    get C205() {
      return C205 = dart.constList([C206 || CT.C206, C207 || CT.C207], _LocationL());
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C205 || CT.C205,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 1140,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 34,
        [_Location_line]: 1145,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 1146,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.constList([C210 || CT.C210, C211 || CT.C211], _LocationL());
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C209 || CT.C209,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 1144,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 1133,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 1134,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 1135,
        [_Location_file]: null
      });
    },
    get C213() {
      return C213 = dart.constList([C214 || CT.C214, C215 || CT.C215, C216 || CT.C216], _LocationL());
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C213 || CT.C213,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 1132,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 40,
        [_Location_line]: 1156,
        [_Location_file]: null
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 1157,
        [_Location_file]: null
      });
    },
    get C218() {
      return C218 = dart.constList([C219 || CT.C219, C220 || CT.C220], _LocationL());
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C218 || CT.C218,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 1155,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 1160,
        [_Location_file]: null
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 1161,
        [_Location_file]: null
      });
    },
    get C222() {
      return C222 = dart.constList([C223 || CT.C223, C224 || CT.C224], _LocationL());
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C222 || CT.C222,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 1159,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 1152,
        [_Location_file]: null
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 1153,
        [_Location_file]: null
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 1154,
        [_Location_file]: null
      });
    },
    get C226() {
      return C226 = dart.constList([C227 || CT.C227, C228 || CT.C228, C229 || CT.C229], _LocationL());
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C226 || CT.C226,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 1151,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: ui.Size.prototype,
        [OffsetBase__dy]: 2,
        [OffsetBase__dx]: 10
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 1218,
        [_Location_file]: null
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 11,
        [_Location_line]: 1219,
        [_Location_file]: null
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 11,
        [_Location_line]: 1220,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.constList([C233 || CT.C233, C234 || CT.C234, C235 || CT.C235], _LocationL());
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C232 || CT.C232,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 1217,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 1215,
        [_Location_file]: null
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 1216,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 1217,
        [_Location_file]: null
      });
    },
    get C237() {
      return C237 = dart.constList([C238 || CT.C238, C239 || CT.C239, C240 || CT.C240], _LocationL());
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C237 || CT.C237,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 1214,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 1227,
        [_Location_file]: null
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 1228,
        [_Location_file]: null
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 1229,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.constList([C243 || CT.C243, C244 || CT.C244, C245 || CT.C245], _LocationL());
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C242 || CT.C242,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 1226,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 1233,
        [_Location_file]: null
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 1234,
        [_Location_file]: null
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 1235,
        [_Location_file]: null
      });
    },
    get C247() {
      return C247 = dart.constList([C248 || CT.C248, C249 || CT.C249, C250 || CT.C250], _LocationL());
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C247 || CT.C247,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 1232,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "count",
        [_Location_column]: 9,
        [_Location_line]: 1285,
        [_Location_file]: null
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 1286,
        [_Location_file]: null
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "layout",
        [_Location_column]: 9,
        [_Location_line]: 1287,
        [_Location_file]: null
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 9,
        [_Location_line]: 1288,
        [_Location_file]: null
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "activeColor",
        [_Location_column]: 9,
        [_Location_line]: 1289,
        [_Location_file]: null
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 9,
        [_Location_line]: 1290,
        [_Location_file]: null
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "space",
        [_Location_column]: 9,
        [_Location_line]: 1291,
        [_Location_file]: null
      });
    },
    get C252() {
      return C252 = dart.constList([C253 || CT.C253, C254 || CT.C254, C255 || CT.C255, C256 || CT.C256, C257 || CT.C257, C258 || CT.C258, C259 || CT.C259], _LocationL());
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C252 || CT.C252,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 1284,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 1307,
        [_Location_file]: null
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 1308,
        [_Location_file]: null
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 1309,
        [_Location_file]: null
      });
    },
    get C261() {
      return C261 = dart.constList([C262 || CT.C262, C263 || CT.C263, C264 || CT.C264], _LocationL());
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C261 || CT.C261,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 1306,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 1306,
        [_Location_file]: null
      });
    },
    get C266() {
      return C266 = dart.constList([C267 || CT.C267], _LocationL());
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C266 || CT.C266,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 1305,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 1303,
        [_Location_file]: null
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 9,
        [_Location_line]: 1304,
        [_Location_file]: null
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 1305,
        [_Location_file]: null
      });
    },
    get C269() {
      return C269 = dart.constList([C270 || CT.C270, C271 || CT.C271, C272 || CT.C272], _LocationL());
    },
    get C268() {
      return C268 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C269 || CT.C269,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 1302,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 1317,
        [_Location_file]: null
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 1318,
        [_Location_file]: null
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 1319,
        [_Location_file]: null
      });
    },
    get C274() {
      return C274 = dart.constList([C275 || CT.C275, C276 || CT.C276, C277 || CT.C277], _LocationL());
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C274 || CT.C274,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 1316,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 1323,
        [_Location_file]: null
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 1324,
        [_Location_file]: null
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 1325,
        [_Location_file]: null
      });
    },
    get C279() {
      return C279 = dart.constList([C280 || CT.C280, C281 || CT.C281, C282 || CT.C282], _LocationL());
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C279 || CT.C279,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 1322,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 10,
        [EdgeInsets__right]: 10,
        [EdgeInsets__top]: 10,
        [EdgeInsets__left]: 10
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: flutter_swiper.DotSwiperPaginationBuilder.prototype,
        [key$2]: null,
        [space$0]: 3,
        [size$1]: 10,
        [activeSize$0]: 10,
        [color$2]: null,
        [activeColor$1]: null
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 1378,
        [_Location_file]: null
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 1379,
        [_Location_file]: null
      });
    },
    get C286() {
      return C286 = dart.constList([C287 || CT.C287, C288 || CT.C288], _LocationL());
    },
    get C285() {
      return C285 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C286 || CT.C286,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 1377,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 1383,
        [_Location_file]: null
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 9,
        [_Location_line]: 1384,
        [_Location_file]: null
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 1385,
        [_Location_file]: null
      });
    },
    get C290() {
      return C290 = dart.constList([C291 || CT.C291, C292 || CT.C292, C293 || CT.C293], _LocationL());
    },
    get C289() {
      return C289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C290 || CT.C290,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 1382,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C294() {
      return C294 = dart.const({
        __proto__: flutter_swiper.FractionPaginationBuilder.prototype,
        [key$0]: null,
        [activeFontSize$]: 35,
        [fontSize$]: 20,
        [activeColor$]: null,
        [color$0]: null
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: flutter_swiper.RectSwiperPaginationBuilder.prototype,
        [key$1]: null,
        [space$]: 3,
        [size$0]: C230 || CT.C230,
        [activeSize$]: C230 || CT.C230,
        [color$1]: null,
        [activeColor$0]: null
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: alignment$.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 32,
        [_Location_line]: 1730,
        [_Location_file]: null
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 42,
        [_Location_line]: 1730,
        [_Location_file]: null
      });
    },
    get C298() {
      return C298 = dart.constList([C299 || CT.C299, C300 || CT.C300], _LocationL());
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C298 || CT.C298,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 1730,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 7,
        [_Location_line]: 1740,
        [_Location_file]: null
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 1741,
        [_Location_file]: null
      });
    },
    get C302() {
      return C302 = dart.constList([C303 || CT.C303, C304 || CT.C304], _LocationL());
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C302 || CT.C302,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 1739,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "angle",
        [_Location_column]: 7,
        [_Location_line]: 1752,
        [_Location_file]: null
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 1753,
        [_Location_file]: null
      });
    },
    get C306() {
      return C306 = dart.constList([C307 || CT.C307, C308 || CT.C308], _LocationL());
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C306 || CT.C306,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 1751,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C311() {
      return C311 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "offset",
        [_Location_column]: 7,
        [_Location_line]: 1765,
        [_Location_file]: null
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 1766,
        [_Location_file]: null
      });
    },
    get C310() {
      return C310 = dart.constList([C311 || CT.C311, C312 || CT.C312], _LocationL());
    },
    get C309() {
      return C309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C310 || CT.C310,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 1764,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    },
    get C315() {
      return C315 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 9,
        [_Location_line]: 1859,
        [_Location_file]: null
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 9,
        [_Location_line]: 1860,
        [_Location_file]: null
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 1861,
        [_Location_file]: null
      });
    },
    get C314() {
      return C314 = dart.constList([C315 || CT.C315, C316 || CT.C316, C317 || CT.C317], _LocationL());
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C314 || CT.C314,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 1858,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_swiper.dart"
      });
    }
  }, false);
  var _name$ = dart.privateName(flutter_swiper, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  flutter_swiper.SwiperLayout = class SwiperLayout extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (flutter_swiper.SwiperLayout.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = flutter_swiper.SwiperLayout.prototype;
  dart.addTypeTests(flutter_swiper.SwiperLayout);
  dart.addTypeCaches(flutter_swiper.SwiperLayout);
  dart.setMethodSignature(flutter_swiper.SwiperLayout, () => ({
    __proto__: dart.getMethods(flutter_swiper.SwiperLayout.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(flutter_swiper.SwiperLayout, L0);
  dart.setFieldSignature(flutter_swiper.SwiperLayout, () => ({
    __proto__: dart.getFields(flutter_swiper.SwiperLayout.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(flutter_swiper.SwiperLayout, ['toString']);
  flutter_swiper.SwiperLayout.DEFAULT = C0 || CT.C0;
  flutter_swiper.SwiperLayout.STACK = C1 || CT.C1;
  flutter_swiper.SwiperLayout.TINDER = C2 || CT.C2;
  flutter_swiper.SwiperLayout.CUSTOM = C3 || CT.C3;
  flutter_swiper.SwiperLayout.values = C4 || CT.C4;
  var _name = dart.privateName(flutter_page_indicator, "_name");
  var C5;
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  var C6;
  var _name$0 = dart.privateName(basic_types, "_name");
  var C7;
  var outer$ = dart.privateName(flutter_swiper, "Swiper.outer");
  var itemHeight$ = dart.privateName(flutter_swiper, "Swiper.itemHeight");
  var itemWidth$ = dart.privateName(flutter_swiper, "Swiper.itemWidth");
  var containerHeight$ = dart.privateName(flutter_swiper, "Swiper.containerHeight");
  var containerWidth$ = dart.privateName(flutter_swiper, "Swiper.containerWidth");
  var itemBuilder$ = dart.privateName(flutter_swiper, "Swiper.itemBuilder");
  var transformer$ = dart.privateName(flutter_swiper, "Swiper.transformer");
  var itemCount$ = dart.privateName(flutter_swiper, "Swiper.itemCount");
  var onIndexChanged$ = dart.privateName(flutter_swiper, "Swiper.onIndexChanged");
  var autoplay$ = dart.privateName(flutter_swiper, "Swiper.autoplay");
  var autoplayDelay$ = dart.privateName(flutter_swiper, "Swiper.autoplayDelay");
  var autoplayDisableOnInteraction$ = dart.privateName(flutter_swiper, "Swiper.autoplayDisableOnInteraction");
  var duration$ = dart.privateName(flutter_swiper, "Swiper.duration");
  var scrollDirection$ = dart.privateName(flutter_swiper, "Swiper.scrollDirection");
  var curve$ = dart.privateName(flutter_swiper, "Swiper.curve");
  var loop$ = dart.privateName(flutter_swiper, "Swiper.loop");
  var index$ = dart.privateName(flutter_swiper, "Swiper.index");
  var onTap$ = dart.privateName(flutter_swiper, "Swiper.onTap");
  var pagination$ = dart.privateName(flutter_swiper, "Swiper.pagination");
  var control$ = dart.privateName(flutter_swiper, "Swiper.control");
  var plugins$ = dart.privateName(flutter_swiper, "Swiper.plugins");
  var controller$ = dart.privateName(flutter_swiper, "Swiper.controller");
  var physics$ = dart.privateName(flutter_swiper, "Swiper.physics");
  var viewportFraction$ = dart.privateName(flutter_swiper, "Swiper.viewportFraction");
  var layout$ = dart.privateName(flutter_swiper, "Swiper.layout");
  var customLayoutOption$ = dart.privateName(flutter_swiper, "Swiper.customLayoutOption");
  var scale$ = dart.privateName(flutter_swiper, "Swiper.scale");
  var fade$ = dart.privateName(flutter_swiper, "Swiper.fade");
  var indicatorLayout$ = dart.privateName(flutter_swiper, "Swiper.indicatorLayout");
  flutter_swiper.Swiper = class Swiper extends framework.StatefulWidget {
    get outer() {
      return this[outer$];
    }
    set outer(value) {
      super.outer = value;
    }
    get itemHeight() {
      return this[itemHeight$];
    }
    set itemHeight(value) {
      super.itemHeight = value;
    }
    get itemWidth() {
      return this[itemWidth$];
    }
    set itemWidth(value) {
      super.itemWidth = value;
    }
    get containerHeight() {
      return this[containerHeight$];
    }
    set containerHeight(value) {
      super.containerHeight = value;
    }
    get containerWidth() {
      return this[containerWidth$];
    }
    set containerWidth(value) {
      super.containerWidth = value;
    }
    get itemBuilder() {
      return this[itemBuilder$];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get transformer() {
      return this[transformer$];
    }
    set transformer(value) {
      super.transformer = value;
    }
    get itemCount() {
      return this[itemCount$];
    }
    set itemCount(value) {
      super.itemCount = value;
    }
    get onIndexChanged() {
      return this[onIndexChanged$];
    }
    set onIndexChanged(value) {
      super.onIndexChanged = value;
    }
    get autoplay() {
      return this[autoplay$];
    }
    set autoplay(value) {
      super.autoplay = value;
    }
    get autoplayDelay() {
      return this[autoplayDelay$];
    }
    set autoplayDelay(value) {
      super.autoplayDelay = value;
    }
    get autoplayDisableOnInteraction() {
      return this[autoplayDisableOnInteraction$];
    }
    set autoplayDisableOnInteraction(value) {
      super.autoplayDisableOnInteraction = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get scrollDirection() {
      return this[scrollDirection$];
    }
    set scrollDirection(value) {
      super.scrollDirection = value;
    }
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      super.curve = value;
    }
    get loop() {
      return this[loop$];
    }
    set loop(value) {
      super.loop = value;
    }
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get pagination() {
      return this[pagination$];
    }
    set pagination(value) {
      super.pagination = value;
    }
    get control() {
      return this[control$];
    }
    set control(value) {
      super.control = value;
    }
    get plugins() {
      return this[plugins$];
    }
    set plugins(value) {
      super.plugins = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get physics() {
      return this[physics$];
    }
    set physics(value) {
      super.physics = value;
    }
    get viewportFraction() {
      return this[viewportFraction$];
    }
    set viewportFraction(value) {
      super.viewportFraction = value;
    }
    get layout() {
      return this[layout$];
    }
    set layout(value) {
      super.layout = value;
    }
    get customLayoutOption() {
      return this[customLayoutOption$];
    }
    set customLayoutOption(value) {
      super.customLayoutOption = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get fade() {
      return this[fade$];
    }
    set fade(value) {
      super.fade = value;
    }
    get indicatorLayout() {
      return this[indicatorLayout$];
    }
    set indicatorLayout(value) {
      super.indicatorLayout = value;
    }
    static children(opts) {
      let children = opts && 'children' in opts ? opts.children : null;
      let autoplay = opts && 'autoplay' in opts ? opts.autoplay : false;
      let transformer = opts && 'transformer' in opts ? opts.transformer : null;
      let autoplayDelay = opts && 'autoplayDelay' in opts ? opts.autoplayDelay : 3000;
      let reverse = opts && 'reverse' in opts ? opts.reverse : false;
      let autoplayDisableOnInteraction = opts && 'autoplayDisableOnInteraction' in opts ? opts.autoplayDisableOnInteraction : true;
      let duration = opts && 'duration' in opts ? opts.duration : 300;
      let onIndexChanged = opts && 'onIndexChanged' in opts ? opts.onIndexChanged : null;
      let index = opts && 'index' in opts ? opts.index : null;
      let onTap = opts && 'onTap' in opts ? opts.onTap : null;
      let loop = opts && 'loop' in opts ? opts.loop : true;
      let curve = opts && 'curve' in opts ? opts.curve : C6 || CT.C6;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C7 || CT.C7;
      let pagination = opts && 'pagination' in opts ? opts.pagination : null;
      let control = opts && 'control' in opts ? opts.control : null;
      let plugins = opts && 'plugins' in opts ? opts.plugins : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let key = opts && 'key' in opts ? opts.key : null;
      let customLayoutOption = opts && 'customLayoutOption' in opts ? opts.customLayoutOption : null;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let containerHeight = opts && 'containerHeight' in opts ? opts.containerHeight : null;
      let containerWidth = opts && 'containerWidth' in opts ? opts.containerWidth : null;
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
      let itemHeight = opts && 'itemHeight' in opts ? opts.itemHeight : null;
      let itemWidth = opts && 'itemWidth' in opts ? opts.itemWidth : null;
      let outer = opts && 'outer' in opts ? opts.outer : false;
      let scale = opts && 'scale' in opts ? opts.scale : 1;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(children != null)) dart.assertFailed("children must not be null", L1, 191, 12, "children != null");
      return new flutter_swiper.Swiper.new({transformer: transformer, customLayoutOption: customLayoutOption, containerHeight: containerHeight, containerWidth: containerWidth, viewportFraction: viewportFraction, itemHeight: itemHeight, itemWidth: itemWidth, outer: outer, scale: scale, autoplay: autoplay, autoplayDelay: autoplayDelay, autoplayDisableOnInteraction: autoplayDisableOnInteraction, duration: duration, onIndexChanged: onIndexChanged, index: index, onTap: onTap, curve: curve, scrollDirection: scrollDirection, pagination: pagination, control: control, controller: controller, loop: loop, plugins: plugins, physics: physics, key: key, itemBuilder: dart.fn((context, index) => children[$_get](index), BuildContextLAndintLToWidgetL()), itemCount: children[$length], $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    static list(opts) {
      let transformer = opts && 'transformer' in opts ? opts.transformer : null;
      let list = opts && 'list' in opts ? opts.list : null;
      let customLayoutOption = opts && 'customLayoutOption' in opts ? opts.customLayoutOption : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let autoplay = opts && 'autoplay' in opts ? opts.autoplay : false;
      let autoplayDelay = opts && 'autoplayDelay' in opts ? opts.autoplayDelay : 3000;
      let reverse = opts && 'reverse' in opts ? opts.reverse : false;
      let autoplayDisableOnInteraction = opts && 'autoplayDisableOnInteraction' in opts ? opts.autoplayDisableOnInteraction : true;
      let duration = opts && 'duration' in opts ? opts.duration : 300;
      let onIndexChanged = opts && 'onIndexChanged' in opts ? opts.onIndexChanged : null;
      let index = opts && 'index' in opts ? opts.index : null;
      let onTap = opts && 'onTap' in opts ? opts.onTap : null;
      let loop = opts && 'loop' in opts ? opts.loop : true;
      let curve = opts && 'curve' in opts ? opts.curve : C6 || CT.C6;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C7 || CT.C7;
      let pagination = opts && 'pagination' in opts ? opts.pagination : null;
      let control = opts && 'control' in opts ? opts.control : null;
      let plugins = opts && 'plugins' in opts ? opts.plugins : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let key = opts && 'key' in opts ? opts.key : null;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let containerHeight = opts && 'containerHeight' in opts ? opts.containerHeight : null;
      let containerWidth = opts && 'containerWidth' in opts ? opts.containerWidth : null;
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
      let itemHeight = opts && 'itemHeight' in opts ? opts.itemHeight : null;
      let itemWidth = opts && 'itemWidth' in opts ? opts.itemWidth : null;
      let outer = opts && 'outer' in opts ? opts.outer : false;
      let scale = opts && 'scale' in opts ? opts.scale : 1;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      return new flutter_swiper.Swiper.new({transformer: transformer, customLayoutOption: customLayoutOption, containerHeight: containerHeight, containerWidth: containerWidth, viewportFraction: viewportFraction, itemHeight: itemHeight, itemWidth: itemWidth, outer: outer, scale: scale, autoplay: autoplay, autoplayDelay: autoplayDelay, autoplayDisableOnInteraction: autoplayDisableOnInteraction, duration: duration, onIndexChanged: onIndexChanged, index: index, onTap: onTap, curve: curve, key: key, scrollDirection: scrollDirection, pagination: pagination, control: control, controller: controller, loop: loop, plugins: plugins, physics: physics, itemBuilder: dart.fn((context, index) => builder(context, list[$_get](index), index), BuildContextLAndintLToWidgetL()), itemCount: list[$length], $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    createState() {
      return new flutter_swiper._SwiperState.new();
    }
  };
  (flutter_swiper.Swiper.new = function(opts) {
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let indicatorLayout = opts && 'indicatorLayout' in opts ? opts.indicatorLayout : C5 || CT.C5;
    let transformer = opts && 'transformer' in opts ? opts.transformer : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let autoplay = opts && 'autoplay' in opts ? opts.autoplay : false;
    let layout = opts && 'layout' in opts ? opts.layout : C0 || CT.C0;
    let autoplayDelay = opts && 'autoplayDelay' in opts ? opts.autoplayDelay : 3000;
    let autoplayDisableOnInteraction = opts && 'autoplayDisableOnInteraction' in opts ? opts.autoplayDisableOnInteraction : true;
    let duration = opts && 'duration' in opts ? opts.duration : 300;
    let onIndexChanged = opts && 'onIndexChanged' in opts ? opts.onIndexChanged : null;
    let index = opts && 'index' in opts ? opts.index : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let control = opts && 'control' in opts ? opts.control : null;
    let loop = opts && 'loop' in opts ? opts.loop : true;
    let curve = opts && 'curve' in opts ? opts.curve : C6 || CT.C6;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C7 || CT.C7;
    let pagination = opts && 'pagination' in opts ? opts.pagination : null;
    let plugins = opts && 'plugins' in opts ? opts.plugins : null;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let customLayoutOption = opts && 'customLayoutOption' in opts ? opts.customLayoutOption : null;
    let containerHeight = opts && 'containerHeight' in opts ? opts.containerHeight : null;
    let containerWidth = opts && 'containerWidth' in opts ? opts.containerWidth : null;
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
    let itemHeight = opts && 'itemHeight' in opts ? opts.itemHeight : null;
    let itemWidth = opts && 'itemWidth' in opts ? opts.itemWidth : null;
    let outer = opts && 'outer' in opts ? opts.outer : false;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    let fade = opts && 'fade' in opts ? opts.fade : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[itemBuilder$] = itemBuilder;
    this[indicatorLayout$] = indicatorLayout;
    this[transformer$] = transformer;
    this[itemCount$] = itemCount;
    this[autoplay$] = autoplay;
    this[layout$] = layout;
    this[autoplayDelay$] = autoplayDelay;
    this[autoplayDisableOnInteraction$] = autoplayDisableOnInteraction;
    this[duration$] = duration;
    this[onIndexChanged$] = onIndexChanged;
    this[index$] = index;
    this[onTap$] = onTap;
    this[control$] = control;
    this[loop$] = loop;
    this[curve$] = curve;
    this[scrollDirection$] = scrollDirection;
    this[pagination$] = pagination;
    this[plugins$] = plugins;
    this[physics$] = physics;
    this[controller$] = controller;
    this[customLayoutOption$] = customLayoutOption;
    this[containerHeight$] = containerHeight;
    this[containerWidth$] = containerWidth;
    this[viewportFraction$] = viewportFraction;
    this[itemHeight$] = itemHeight;
    this[itemWidth$] = itemWidth;
    this[outer$] = outer;
    this[scale$] = scale;
    this[fade$] = fade;
    if (!(itemBuilder != null || transformer != null)) dart.assertFailed("itemBuilder and transformItemBuilder must not be both null", L1, 149, 16, "itemBuilder != null || transformer != null");
    if (!(!dart.test(loop) || dart.test(loop) && layout == flutter_swiper.SwiperLayout.DEFAULT && (indicatorLayout == flutter_page_indicator.PageIndicatorLayout.SCALE || indicatorLayout == flutter_page_indicator.PageIndicatorLayout.COLOR || indicatorLayout == flutter_page_indicator.PageIndicatorLayout.NONE) || dart.test(loop) && layout != flutter_swiper.SwiperLayout.DEFAULT)) dart.assertFailed("Only support `PageIndicatorLayout.SCALE` and `PageIndicatorLayout.COLOR`when layout==SwiperLayout.DEFAULT in loop mode", L1, 152, 13, "!loop ||\n                ((loop &&\n                        layout == SwiperLayout.DEFAULT &&\n                        (indicatorLayout == PageIndicatorLayout.SCALE ||\n                            indicatorLayout == PageIndicatorLayout.COLOR ||\n                            indicatorLayout == PageIndicatorLayout.NONE)) ||\n                    (loop && layout != SwiperLayout.DEFAULT))");
    flutter_swiper.Swiper.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = flutter_swiper.Swiper.prototype;
  dart.addTypeTests(flutter_swiper.Swiper);
  dart.addTypeCaches(flutter_swiper.Swiper);
  dart.setMethodSignature(flutter_swiper.Swiper, () => ({
    __proto__: dart.getMethods(flutter_swiper.Swiper.__proto__),
    createState: dart.fnType(dart.legacy(framework.State$(dart.legacy(framework.StatefulWidget))), [])
  }));
  dart.setLibraryUri(flutter_swiper.Swiper, L0);
  dart.setFieldSignature(flutter_swiper.Swiper, () => ({
    __proto__: dart.getFields(flutter_swiper.Swiper.__proto__),
    outer: dart.finalFieldType(dart.legacy(core.bool)),
    itemHeight: dart.finalFieldType(dart.legacy(core.double)),
    itemWidth: dart.finalFieldType(dart.legacy(core.double)),
    containerHeight: dart.finalFieldType(dart.legacy(core.double)),
    containerWidth: dart.finalFieldType(dart.legacy(core.double)),
    itemBuilder: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(core.int)]))),
    transformer: dart.finalFieldType(dart.legacy(transformer_page_view.PageTransformer)),
    itemCount: dart.finalFieldType(dart.legacy(core.int)),
    onIndexChanged: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(core.int)]))),
    autoplay: dart.finalFieldType(dart.legacy(core.bool)),
    autoplayDelay: dart.finalFieldType(dart.legacy(core.int)),
    autoplayDisableOnInteraction: dart.finalFieldType(dart.legacy(core.bool)),
    duration: dart.finalFieldType(dart.legacy(core.int)),
    scrollDirection: dart.finalFieldType(dart.legacy(basic_types.Axis)),
    curve: dart.finalFieldType(dart.legacy(curves.Curve)),
    loop: dart.finalFieldType(dart.legacy(core.bool)),
    index: dart.finalFieldType(dart.legacy(core.int)),
    onTap: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(core.int)]))),
    pagination: dart.finalFieldType(dart.legacy(flutter_swiper.SwiperPlugin)),
    control: dart.finalFieldType(dart.legacy(flutter_swiper.SwiperPlugin)),
    plugins: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(flutter_swiper.SwiperPlugin)))),
    controller: dart.finalFieldType(dart.legacy(flutter_swiper.SwiperController)),
    physics: dart.finalFieldType(dart.legacy(scroll_physics.ScrollPhysics)),
    viewportFraction: dart.finalFieldType(dart.legacy(core.double)),
    layout: dart.finalFieldType(dart.legacy(flutter_swiper.SwiperLayout)),
    customLayoutOption: dart.finalFieldType(dart.legacy(flutter_swiper.CustomLayoutOption)),
    scale: dart.finalFieldType(dart.legacy(core.double)),
    fade: dart.finalFieldType(dart.legacy(core.double)),
    indicatorLayout: dart.finalFieldType(dart.legacy(flutter_page_indicator.PageIndicatorLayout))
  }));
  var _timer = dart.privateName(flutter_swiper, "_timer");
  var _controller = dart.privateName(flutter_swiper, "_controller");
  var _onController = dart.privateName(flutter_swiper, "_onController");
  var _handleAutoplay = dart.privateName(flutter_swiper, "_handleAutoplay");
  var _startAutoplay = dart.privateName(flutter_swiper, "_startAutoplay");
  var _stopAutoplay = dart.privateName(flutter_swiper, "_stopAutoplay");
  var _autoplayEnabled = dart.privateName(flutter_swiper, "_autoplayEnabled");
  var _onTimer = dart.privateName(flutter_swiper, "_onTimer");
  flutter_swiper._SwiperTimerMixin = class _SwiperTimerMixin extends framework.State$(dart.legacy(flutter_swiper.Swiper)) {
    initState() {
      this[_controller] = this.widget.controller;
      if (this[_controller] == null) {
        this[_controller] = new flutter_swiper.SwiperController.new();
      }
      this[_controller].addListener(dart.bind(this, _onController));
      this[_handleAutoplay]();
      super.initState();
    }
    [_onController]() {
      switch (this[_controller].event) {
        case 2:
        {
          {
            if (this[_timer] == null) {
              this[_startAutoplay]();
            }
          }
          break;
        }
        case 3:
        {
          {
            if (this[_timer] != null) {
              this[_stopAutoplay]();
            }
          }
          break;
        }
      }
    }
    didUpdateWidget(oldWidget) {
      SwiperL().as(oldWidget);
      if (!dart.equals(this[_controller], oldWidget.controller)) {
        if (oldWidget.controller != null) {
          oldWidget.controller.removeListener(dart.bind(this, _onController));
          this[_controller] = oldWidget.controller;
          this[_controller].addListener(dart.bind(this, _onController));
        }
      }
      this[_handleAutoplay]();
      super.didUpdateWidget(oldWidget);
    }
    dispose() {
      if (this[_controller] != null) {
        this[_controller].removeListener(dart.bind(this, _onController));
      }
      this[_stopAutoplay]();
      super.dispose();
    }
    [_autoplayEnabled]() {
      let t0;
      t0 = this[_controller].autoplay;
      return t0 == null ? this.widget.autoplay : t0;
    }
    [_handleAutoplay]() {
      if (dart.test(this[_autoplayEnabled]()) && this[_timer] != null) return;
      this[_stopAutoplay]();
      if (dart.test(this[_autoplayEnabled]())) {
        this[_startAutoplay]();
      }
    }
    [_startAutoplay]() {
      if (!(this[_timer] == null)) dart.assertFailed("Timer must be stopped before start!", L1, 365, 12, "_timer == null");
      this[_timer] = async.Timer.periodic(new core.Duration.new({milliseconds: this.widget.autoplayDelay}), dart.bind(this, _onTimer));
    }
    [_onTimer](timer) {
      this[_controller].next({animation: true});
    }
    [_stopAutoplay]() {
      if (this[_timer] != null) {
        this[_timer].cancel();
        this[_timer] = null;
      }
    }
  };
  (flutter_swiper._SwiperTimerMixin.new = function() {
    this[_timer] = null;
    this[_controller] = null;
    flutter_swiper._SwiperTimerMixin.__proto__.new.call(this);
    ;
  }).prototype = flutter_swiper._SwiperTimerMixin.prototype;
  dart.addTypeTests(flutter_swiper._SwiperTimerMixin);
  dart.addTypeCaches(flutter_swiper._SwiperTimerMixin);
  dart.setMethodSignature(flutter_swiper._SwiperTimerMixin, () => ({
    __proto__: dart.getMethods(flutter_swiper._SwiperTimerMixin.__proto__),
    [_onController]: dart.fnType(dart.void, []),
    [_autoplayEnabled]: dart.fnType(dart.legacy(core.bool), []),
    [_handleAutoplay]: dart.fnType(dart.void, []),
    [_startAutoplay]: dart.fnType(dart.void, []),
    [_onTimer]: dart.fnType(dart.void, [dart.legacy(async.Timer)]),
    [_stopAutoplay]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(flutter_swiper._SwiperTimerMixin, L0);
  dart.setFieldSignature(flutter_swiper._SwiperTimerMixin, () => ({
    __proto__: dart.getFields(flutter_swiper._SwiperTimerMixin.__proto__),
    [_timer]: dart.fieldType(dart.legacy(async.Timer)),
    [_controller]: dart.fieldType(dart.legacy(flutter_swiper.SwiperController))
  }));
  var _activeIndex = dart.privateName(flutter_swiper, "_activeIndex");
  var _pageController = dart.privateName(flutter_swiper, "_pageController");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C10;
  var C11;
  var C12;
  var C9;
  var C8;
  var _wrapTap = dart.privateName(flutter_swiper, "_wrapTap");
  var _isPageViewLayout = dart.privateName(flutter_swiper, "_isPageViewLayout");
  var _getReverse = dart.privateName(flutter_swiper, "_getReverse");
  var _onIndexChanged = dart.privateName(flutter_swiper, "_onIndexChanged");
  var C15;
  var C16;
  var C17;
  var C18;
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  var C24;
  var C25;
  var C14;
  var C13;
  var C28;
  var C29;
  var C30;
  var C31;
  var C32;
  var C33;
  var C34;
  var C35;
  var C36;
  var C37;
  var C38;
  var C39;
  var C40;
  var C27;
  var C26;
  var C43;
  var C44;
  var C42;
  var C41;
  var C47;
  var C48;
  var C49;
  var C50;
  var C51;
  var C52;
  var C53;
  var C54;
  var C55;
  var C56;
  var C57;
  var C46;
  var C45;
  var C60;
  var C61;
  var C62;
  var C63;
  var C64;
  var C65;
  var C66;
  var C67;
  var C68;
  var C69;
  var C70;
  var C71;
  var C59;
  var C58;
  var C73;
  var C72;
  var _buildSwiper = dart.privateName(flutter_swiper, "_buildSwiper");
  var _ensureConfig = dart.privateName(flutter_swiper, "_ensureConfig");
  var _ensureListForStack = dart.privateName(flutter_swiper, "_ensureListForStack");
  var C76;
  var C75;
  var C74;
  var _buildOuterPagination = dart.privateName(flutter_swiper, "_buildOuterPagination");
  var C79;
  var C78;
  var C77;
  var C82;
  var C81;
  var C80;
  var C85;
  var C86;
  var C84;
  var C83;
  var C89;
  var C90;
  var C91;
  var C88;
  var C87;
  flutter_swiper._SwiperState = class _SwiperState extends flutter_swiper._SwiperTimerMixin {
    [_wrapTap](context, index) {
      let t2, t1, t0;
      return new gesture_detector.GestureDetector.new({behavior: proxy_box.HitTestBehavior.opaque, onTap: dart.fn(() => {
          let t1, t0;
          t0 = this.widget;
          t1 = index;
          t0.onTap(t1);
        }, VoidToNullN()), child: (t0 = this.widget, t1 = context, t2 = index, t0.itemBuilder(t1, t2)), $creationLocationd_0dea112b090073317d4: C8 || CT.C8});
    }
    initState() {
      let t0;
      this[_activeIndex] = (t0 = this.widget.index, t0 == null ? 0 : t0);
      if (dart.test(this[_isPageViewLayout]())) {
        this[_pageController] = new transformer_page_view.TransformerPageController.new({initialPage: this.widget.index, loop: this.widget.loop, itemCount: this.widget.itemCount, reverse: this.widget.transformer == null ? false : this.widget.transformer.reverse, viewportFraction: this.widget.viewportFraction});
      }
      super.initState();
    }
    [_isPageViewLayout]() {
      return this.widget.layout == null || this.widget.layout == flutter_swiper.SwiperLayout.DEFAULT;
    }
    didChangeDependencies() {
      super.didChangeDependencies();
    }
    [_getReverse](widget) {
      return widget.transformer == null ? false : widget.transformer.reverse;
    }
    didUpdateWidget(oldWidget) {
      SwiperL().as(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (dart.test(this[_isPageViewLayout]())) {
        if (this[_pageController] == null || this.widget.index != oldWidget.index || !dart.equals(this.widget.loop, oldWidget.loop) || this.widget.itemCount != oldWidget.itemCount || this.widget.viewportFraction != oldWidget.viewportFraction || !dart.equals(this[_getReverse](this.widget), this[_getReverse](oldWidget))) {
          this[_pageController] = new transformer_page_view.TransformerPageController.new({initialPage: this.widget.index, loop: this.widget.loop, itemCount: this.widget.itemCount, reverse: this[_getReverse](this.widget), viewportFraction: this.widget.viewportFraction});
        }
      } else {
        async.scheduleMicrotask(dart.fn(() => {
          if (this[_pageController] != null) {
            this[_pageController].dispose();
            this[_pageController] = null;
          }
        }, VoidToNullN()));
      }
      if (this.widget.index != null && this.widget.index != this[_activeIndex]) {
        this[_activeIndex] = this.widget.index;
      }
    }
    [_onIndexChanged](index) {
      let t1, t0;
      this.setState(dart.fn(() => {
        this[_activeIndex] = index;
      }, VoidToNullN()));
      if (this.widget.onIndexChanged != null) {
        t0 = this.widget;
        t1 = index;
        t0.onIndexChanged(t1);
      }
    }
    [_buildSwiper]() {
      let itemBuilder = null;
      if (this.widget.onTap != null) {
        itemBuilder = dart.bind(this, _wrapTap);
      } else {
        itemBuilder = this.widget.itemBuilder;
      }
      if (this.widget.layout == flutter_swiper.SwiperLayout.STACK) {
        return new flutter_swiper._StackSwiper.new({loop: this.widget.loop, itemWidth: this.widget.itemWidth, itemHeight: this.widget.itemHeight, itemCount: this.widget.itemCount, itemBuilder: itemBuilder, index: this[_activeIndex], curve: this.widget.curve, duration: this.widget.duration, onIndexChanged: dart.bind(this, _onIndexChanged), controller: this[_controller], scrollDirection: this.widget.scrollDirection, $creationLocationd_0dea112b090073317d4: C13 || CT.C13});
      } else if (dart.test(this[_isPageViewLayout]())) {
        let transformer = this.widget.transformer;
        if (this.widget.scale != null || this.widget.fade != null) {
          transformer = new flutter_swiper.ScaleAndFadeTransformer.new({scale: this.widget.scale, fade: this.widget.fade});
        }
        let child = new transformer_page_view.TransformerPageView.new({pageController: this[_pageController], loop: this.widget.loop, itemCount: this.widget.itemCount, itemBuilder: itemBuilder, transformer: transformer, viewportFraction: this.widget.viewportFraction, index: this[_activeIndex], duration: new core.Duration.new({milliseconds: this.widget.duration}), scrollDirection: this.widget.scrollDirection, onPageChanged: dart.bind(this, _onIndexChanged), curve: this.widget.curve, physics: this.widget.physics, controller: this[_controller], $creationLocationd_0dea112b090073317d4: C26 || CT.C26});
        if (dart.test(this.widget.autoplayDisableOnInteraction) && dart.test(this.widget.autoplay)) {
          return new (NotificationListenerOfScrollNotificationL()).new({child: child, onNotification: dart.fn(notification => {
              if (ScrollStartNotificationL().is(notification)) {
                if (notification.dragDetails != null) {
                  if (this[_timer] != null) this[_stopAutoplay]();
                }
              } else if (ScrollEndNotificationL().is(notification)) {
                if (this[_timer] == null) this[_startAutoplay]();
              }
              return false;
            }, ScrollNotificationLToboolL()), $creationLocationd_0dea112b090073317d4: C41 || CT.C41});
        }
        return child;
      } else if (this.widget.layout == flutter_swiper.SwiperLayout.TINDER) {
        return new flutter_swiper._TinderSwiper.new({loop: this.widget.loop, itemWidth: this.widget.itemWidth, itemHeight: this.widget.itemHeight, itemCount: this.widget.itemCount, itemBuilder: itemBuilder, index: this[_activeIndex], curve: this.widget.curve, duration: this.widget.duration, onIndexChanged: dart.bind(this, _onIndexChanged), controller: this[_controller], scrollDirection: this.widget.scrollDirection, $creationLocationd_0dea112b090073317d4: C45 || CT.C45});
      } else if (this.widget.layout == flutter_swiper.SwiperLayout.CUSTOM) {
        return new flutter_swiper._CustomLayoutSwiper.new({loop: this.widget.loop, option: this.widget.customLayoutOption, itemWidth: this.widget.itemWidth, itemHeight: this.widget.itemHeight, itemCount: this.widget.itemCount, itemBuilder: itemBuilder, index: this[_activeIndex], curve: this.widget.curve, duration: this.widget.duration, onIndexChanged: dart.bind(this, _onIndexChanged), controller: this[_controller], scrollDirection: this.widget.scrollDirection, $creationLocationd_0dea112b090073317d4: C58 || CT.C58});
      } else {
        return new container.Container.new({$creationLocationd_0dea112b090073317d4: C72 || CT.C72});
      }
    }
    [_ensureConfig](config) {
      if (config == null) {
        config = new flutter_swiper.SwiperPluginConfig.new({outer: this.widget.outer, itemCount: this.widget.itemCount, layout: this.widget.layout, indicatorLayout: this.widget.indicatorLayout, pageController: this[_pageController], activeIndex: this[_activeIndex], scrollDirection: this.widget.scrollDirection, controller: this[_controller], loop: this.widget.loop});
      }
      return config;
    }
    [_ensureListForStack](swiper, listForStack, widget) {
      if (listForStack == null) {
        listForStack = JSArrayOfWidgetL().of([swiper, widget]);
      } else {
        listForStack[$add](widget);
      }
      return listForStack;
    }
    build(context) {
      let swiper = this[_buildSwiper]();
      let listForStack = null;
      let config = null;
      if (this.widget.control != null) {
        config = this[_ensureConfig](config);
        listForStack = this[_ensureListForStack](swiper, listForStack, this.widget.control.build(context, config));
      }
      if (this.widget.plugins != null) {
        config = this[_ensureConfig](config);
        for (let plugin of this.widget.plugins) {
          listForStack = this[_ensureListForStack](swiper, listForStack, plugin.build(context, config));
        }
      }
      if (this.widget.pagination != null) {
        config = this[_ensureConfig](config);
        if (dart.test(this.widget.outer)) {
          return this[_buildOuterPagination](SwiperPaginationL().as(this.widget.pagination), listForStack == null ? swiper : new basic.Stack.new({children: listForStack, $creationLocationd_0dea112b090073317d4: C74 || CT.C74}), config);
        } else {
          listForStack = this[_ensureListForStack](swiper, listForStack, this.widget.pagination.build(context, config));
        }
      }
      if (listForStack != null) {
        return new basic.Stack.new({children: listForStack, $creationLocationd_0dea112b090073317d4: C77 || CT.C77});
      }
      return swiper;
    }
    [_buildOuterPagination](pagination, swiper, config) {
      let list = JSArrayOfWidgetL().of([]);
      if (this.widget.containerHeight != null || this.widget.containerWidth != null) {
        list[$add](swiper);
      } else {
        list[$add](new basic.Expanded.new({child: swiper, $creationLocationd_0dea112b090073317d4: C80 || CT.C80}));
      }
      list[$add](new basic.Align.new({alignment: alignment$.Alignment.center, child: pagination.build(this.context, config), $creationLocationd_0dea112b090073317d4: C83 || CT.C83}));
      return new basic.Column.new({children: list, crossAxisAlignment: flex.CrossAxisAlignment.stretch, mainAxisSize: flex.MainAxisSize.min, $creationLocationd_0dea112b090073317d4: C87 || CT.C87});
    }
  };
  (flutter_swiper._SwiperState.new = function() {
    this[_activeIndex] = null;
    this[_pageController] = null;
    flutter_swiper._SwiperState.__proto__.new.call(this);
    ;
  }).prototype = flutter_swiper._SwiperState.prototype;
  dart.addTypeTests(flutter_swiper._SwiperState);
  dart.addTypeCaches(flutter_swiper._SwiperState);
  dart.setMethodSignature(flutter_swiper._SwiperState, () => ({
    __proto__: dart.getMethods(flutter_swiper._SwiperState.__proto__),
    [_wrapTap]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(core.int)]),
    [_isPageViewLayout]: dart.fnType(dart.legacy(core.bool), []),
    [_getReverse]: dart.fnType(dart.legacy(core.bool), [dart.legacy(flutter_swiper.Swiper)]),
    [_onIndexChanged]: dart.fnType(dart.void, [dart.legacy(core.int)]),
    [_buildSwiper]: dart.fnType(dart.legacy(framework.Widget), []),
    [_ensureConfig]: dart.fnType(dart.legacy(flutter_swiper.SwiperPluginConfig), [dart.legacy(flutter_swiper.SwiperPluginConfig)]),
    [_ensureListForStack]: dart.fnType(dart.legacy(core.List$(dart.legacy(framework.Widget))), [dart.legacy(framework.Widget), dart.legacy(core.List$(dart.legacy(framework.Widget))), dart.legacy(framework.Widget)]),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_buildOuterPagination]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(flutter_swiper.SwiperPagination), dart.legacy(framework.Widget), dart.legacy(flutter_swiper.SwiperPluginConfig)])
  }));
  dart.setLibraryUri(flutter_swiper._SwiperState, L0);
  dart.setFieldSignature(flutter_swiper._SwiperState, () => ({
    __proto__: dart.getFields(flutter_swiper._SwiperState.__proto__),
    [_activeIndex]: dart.fieldType(dart.legacy(core.int)),
    [_pageController]: dart.fieldType(dart.legacy(transformer_page_view.TransformerPageController))
  }));
  flutter_swiper._SubSwiper = class _SubSwiper extends framework.StatefulWidget {
    getCorrectIndex(indexNeedsFix) {
      if (this.itemCount === 0) return 0;
      let value = indexNeedsFix[$modulo](this.itemCount);
      if (value < 0) {
        value = value + dart.notNull(this.itemCount);
      }
      return value;
    }
  };
  (flutter_swiper._SubSwiper.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let loop = opts && 'loop' in opts ? opts.loop : null;
    let itemHeight = opts && 'itemHeight' in opts ? opts.itemHeight : null;
    let itemWidth = opts && 'itemWidth' in opts ? opts.itemWidth : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let curve = opts && 'curve' in opts ? opts.curve : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let index = opts && 'index' in opts ? opts.index : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C7 || CT.C7;
    let onIndexChanged = opts && 'onIndexChanged' in opts ? opts.onIndexChanged : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.loop = loop;
    this.itemHeight = itemHeight;
    this.itemWidth = itemWidth;
    this.duration = duration;
    this.curve = curve;
    this.itemBuilder = itemBuilder;
    this.controller = controller;
    this.index = index;
    this.itemCount = itemCount;
    this.scrollDirection = scrollDirection;
    this.onIndexChanged = onIndexChanged;
    flutter_swiper._SubSwiper.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = flutter_swiper._SubSwiper.prototype;
  dart.addTypeTests(flutter_swiper._SubSwiper);
  dart.addTypeCaches(flutter_swiper._SubSwiper);
  dart.setMethodSignature(flutter_swiper._SubSwiper, () => ({
    __proto__: dart.getMethods(flutter_swiper._SubSwiper.__proto__),
    getCorrectIndex: dart.fnType(dart.legacy(core.int), [dart.legacy(core.int)])
  }));
  dart.setLibraryUri(flutter_swiper._SubSwiper, L0);
  dart.setFieldSignature(flutter_swiper._SubSwiper, () => ({
    __proto__: dart.getFields(flutter_swiper._SubSwiper.__proto__),
    itemBuilder: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(core.int)]))),
    itemCount: dart.finalFieldType(dart.legacy(core.int)),
    index: dart.finalFieldType(dart.legacy(core.int)),
    onIndexChanged: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(core.int)]))),
    controller: dart.finalFieldType(dart.legacy(flutter_swiper.SwiperController)),
    duration: dart.finalFieldType(dart.legacy(core.int)),
    curve: dart.finalFieldType(dart.legacy(curves.Curve)),
    itemWidth: dart.finalFieldType(dart.legacy(core.double)),
    itemHeight: dart.finalFieldType(dart.legacy(core.double)),
    loop: dart.finalFieldType(dart.legacy(core.bool)),
    scrollDirection: dart.finalFieldType(dart.legacy(basic_types.Axis))
  }));
  flutter_swiper._TinderSwiper = class _TinderSwiper extends flutter_swiper._SubSwiper {
    createState() {
      return new flutter_swiper._TinderState.new();
    }
  };
  (flutter_swiper._TinderSwiper.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let curve = opts && 'curve' in opts ? opts.curve : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let onIndexChanged = opts && 'onIndexChanged' in opts ? opts.onIndexChanged : null;
    let itemHeight = opts && 'itemHeight' in opts ? opts.itemHeight : null;
    let itemWidth = opts && 'itemWidth' in opts ? opts.itemWidth : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let index = opts && 'index' in opts ? opts.index : null;
    let loop = opts && 'loop' in opts ? opts.loop : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    if (!(itemWidth != null && itemHeight != null)) dart.assertFailed(null, L1, 706, 16, "itemWidth != null && itemHeight != null");
    flutter_swiper._TinderSwiper.__proto__.new.call(this, {loop: loop, key: key, itemWidth: itemWidth, itemHeight: itemHeight, itemBuilder: itemBuilder, curve: curve, duration: duration, controller: controller, index: index, onIndexChanged: onIndexChanged, itemCount: itemCount, scrollDirection: scrollDirection, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = flutter_swiper._TinderSwiper.prototype;
  dart.addTypeTests(flutter_swiper._TinderSwiper);
  dart.addTypeCaches(flutter_swiper._TinderSwiper);
  dart.setMethodSignature(flutter_swiper._TinderSwiper, () => ({
    __proto__: dart.getMethods(flutter_swiper._TinderSwiper.__proto__),
    createState: dart.fnType(dart.legacy(framework.State$(dart.legacy(framework.StatefulWidget))), [])
  }));
  dart.setLibraryUri(flutter_swiper._TinderSwiper, L0);
  flutter_swiper._StackSwiper = class _StackSwiper extends flutter_swiper._SubSwiper {
    createState() {
      return new flutter_swiper._StackViewState.new();
    }
  };
  (flutter_swiper._StackSwiper.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let curve = opts && 'curve' in opts ? opts.curve : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let onIndexChanged = opts && 'onIndexChanged' in opts ? opts.onIndexChanged : null;
    let itemHeight = opts && 'itemHeight' in opts ? opts.itemHeight : null;
    let itemWidth = opts && 'itemWidth' in opts ? opts.itemWidth : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let index = opts && 'index' in opts ? opts.index : null;
    let loop = opts && 'loop' in opts ? opts.loop : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    flutter_swiper._StackSwiper.__proto__.new.call(this, {loop: loop, key: key, itemWidth: itemWidth, itemHeight: itemHeight, itemBuilder: itemBuilder, curve: curve, duration: duration, controller: controller, index: index, onIndexChanged: onIndexChanged, itemCount: itemCount, scrollDirection: scrollDirection, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = flutter_swiper._StackSwiper.prototype;
  dart.addTypeTests(flutter_swiper._StackSwiper);
  dart.addTypeCaches(flutter_swiper._StackSwiper);
  dart.setMethodSignature(flutter_swiper._StackSwiper, () => ({
    __proto__: dart.getMethods(flutter_swiper._StackSwiper.__proto__),
    createState: dart.fnType(dart.legacy(framework.State$(dart.legacy(framework.StatefulWidget))), [])
  }));
  dart.setLibraryUri(flutter_swiper._StackSwiper, L0);
  var _updateValues = dart.privateName(flutter_swiper, "_updateValues");
  var _startIndex = dart.privateName(flutter_swiper, "_startIndex");
  var _animationCount = dart.privateName(flutter_swiper, "_animationCount");
  var _swiperWidth = dart.privateName(flutter_swiper, "_swiperWidth");
  var _swiperHeight = dart.privateName(flutter_swiper, "_swiperHeight");
  var _currentIndex = dart.privateName(flutter_swiper, "_currentIndex");
  var C94;
  var C95;
  var C96;
  var C93;
  var C92;
  var C99;
  var C100;
  var C101;
  var C98;
  var C97;
  var C104;
  var C105;
  var C106;
  var C103;
  var C102;
  var C109;
  var C110;
  var C108;
  var C107;
  var C113;
  var C114;
  var C112;
  var C111;
  var _buildItem = dart.privateName(flutter_swiper, "_buildItem");
  var _animation = dart.privateName(flutter_swiper, "_animation");
  var _animationController = dart.privateName(flutter_swiper, "_animationController");
  var _currentValue = dart.privateName(flutter_swiper, "_currentValue");
  var _currentPos = dart.privateName(flutter_swiper, "_currentPos");
  var _lockScroll = dart.privateName(flutter_swiper, "_lockScroll");
  var _createAnimationController = dart.privateName(flutter_swiper, "_createAnimationController");
  var _getSize = dart.privateName(flutter_swiper, "_getSize");
  var _ensureIndex = dart.privateName(flutter_swiper, "_ensureIndex");
  var C117;
  var C116;
  var C115;
  var _buildContainer = dart.privateName(flutter_swiper, "_buildContainer");
  var _onPanStart = dart.privateName(flutter_swiper, "_onPanStart");
  var _onPanEnd = dart.privateName(flutter_swiper, "_onPanEnd");
  var _onPanUpdate = dart.privateName(flutter_swiper, "_onPanUpdate");
  var C120;
  var C119;
  var C118;
  var C123;
  var C122;
  var C121;
  var C126;
  var C127;
  var C128;
  var C129;
  var C130;
  var C125;
  var C124;
  var _buildAnimation = dart.privateName(flutter_swiper, "_buildAnimation");
  var C131;
  var C134;
  var C135;
  var C133;
  var C132;
  var _move = dart.privateName(flutter_swiper, "_move");
  var _nextIndex = dart.privateName(flutter_swiper, "_nextIndex");
  var _prevIndex = dart.privateName(flutter_swiper, "_prevIndex");
  const _is__CustomLayoutStateBase_default = Symbol('_is__CustomLayoutStateBase_default');
  flutter_swiper._CustomLayoutStateBase$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    const State_SingleTickerProviderStateMixin$36 = class State_SingleTickerProviderStateMixin extends framework.State$(dart.legacy(T)) {};
    (State_SingleTickerProviderStateMixin$36.new = function() {
      ticker_provider.SingleTickerProviderStateMixin$(dart.legacy(T))[dart.mixinNew].call(this);
      State_SingleTickerProviderStateMixin$36.__proto__.new.call(this);
    }).prototype = State_SingleTickerProviderStateMixin$36.prototype;
    dart.applyMixin(State_SingleTickerProviderStateMixin$36, ticker_provider.SingleTickerProviderStateMixin$(dart.legacy(T)));
    class _CustomLayoutStateBase extends State_SingleTickerProviderStateMixin$36 {
      initState() {
        if (this.widget.itemWidth == null) {
          dart.throw(core.Exception.new("==============\n\nwidget.itemWith must not be null when use stack layout.\n========\n"));
        }
        this[_createAnimationController]();
        this.widget.controller.addListener(dart.bind(this, _onController));
        super.initState();
      }
      [_createAnimationController]() {
        this[_animationController] = new animation_controller.AnimationController.new({vsync: this, value: 0.5});
        let tween = new (TweenOfdoubleL()).new({begin: 0.0, end: 1.0});
        this[_animation] = tween.animate(this[_animationController]);
      }
      didChangeDependencies() {
        binding.WidgetsBinding.instance.addPostFrameCallback(dart.bind(this, _getSize));
        super.didChangeDependencies();
      }
      [_getSize](_) {
        this.afterRender();
      }
      afterRender() {
        let renderObject = this.context.findRenderObject();
        let size = renderObject.paintBounds.size;
        this[_swiperWidth] = size.width;
        this[_swiperHeight] = size.height;
        this.setState(dart.fn(() => {
        }, VoidToNullN()));
      }
      didUpdateWidget(oldWidget) {
        TL().as(oldWidget);
        if (!dart.equals(this.widget.controller, oldWidget.controller)) {
          oldWidget.controller.removeListener(dart.bind(this, _onController));
          this.widget.controller.addListener(dart.bind(this, _onController));
        }
        if (!dart.equals(this.widget.loop, oldWidget.loop)) {
          if (!dart.test(this.widget.loop)) {
            this[_currentIndex] = this[_ensureIndex](this[_currentIndex]);
          }
        }
        super.didUpdateWidget(oldWidget);
      }
      [_ensureIndex](index) {
        index = index[$modulo](this.widget.itemCount);
        if (dart.notNull(index) < 0) {
          index = dart.notNull(index) + dart.notNull(this.widget.itemCount);
        }
        return index;
      }
      dispose() {
        let t0;
        this.widget.controller.removeListener(dart.bind(this, _onController));
        t0 = this[_animationController];
        t0 == null ? null : t0.dispose();
        super.dispose();
      }
      [_buildContainer](list) {
        return new basic.Stack.new({children: list, $creationLocationd_0dea112b090073317d4: C115 || CT.C115});
      }
      [_buildAnimation](context, w) {
        let list = JSArrayOfWidgetL().of([]);
        let animationValue = this[_animation].value;
        for (let i = 0; i < dart.notNull(this[_animationCount]); i = i + 1) {
          let realIndex = dart.notNull(this[_currentIndex]) + i + dart.notNull(this[_startIndex]);
          realIndex = realIndex[$modulo](this.widget.itemCount);
          if (realIndex < 0) {
            realIndex = realIndex + dart.notNull(this.widget.itemCount);
          }
          list[$add](this[_buildItem](i, realIndex, animationValue));
        }
        return new gesture_detector.GestureDetector.new({behavior: proxy_box.HitTestBehavior.opaque, onPanStart: dart.bind(this, _onPanStart), onPanEnd: dart.bind(this, _onPanEnd), onPanUpdate: dart.bind(this, _onPanUpdate), child: new basic.ClipRect.new({child: new basic.Center.new({child: this[_buildContainer](list), $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), $creationLocationd_0dea112b090073317d4: C124 || CT.C124});
      }
      build(context) {
        if (this[_animationCount] == null) {
          return new container.Container.new({$creationLocationd_0dea112b090073317d4: C131 || CT.C131});
        }
        return new transitions.AnimatedBuilder.new({animation: this[_animationController], builder: dart.bind(this, _buildAnimation), $creationLocationd_0dea112b090073317d4: C132 || CT.C132});
      }
      [_move](position, opts) {
        let nextIndex = opts && 'nextIndex' in opts ? opts.nextIndex : null;
        return async.async(dart.void, (function* _move() {
          let t1, t0;
          if (dart.test(this[_lockScroll])) return;
          try {
            this[_lockScroll] = true;
            yield this[_animationController].animateTo(position, {duration: new core.Duration.new({milliseconds: this.widget.duration}), curve: this.widget.curve});
            if (nextIndex != null) {
              t0 = this.widget;
              t1 = this.widget.getCorrectIndex(nextIndex);
              t0.onIndexChanged(t1);
            }
          } catch (e$) {
            let e = dart.getThrown(e$);
            core.print(e);
          } finally {
            if (nextIndex != null) {
              try {
                this[_animationController].value = 0.5;
              } catch (e$0) {
                let e = dart.getThrown(e$0);
                core.print(e);
              }
              this[_currentIndex] = nextIndex;
            }
            this[_lockScroll] = false;
          }
        }).bind(this));
      }
      [_nextIndex]() {
        let index = dart.notNull(this[_currentIndex]) + 1;
        if (!dart.test(this.widget.loop) && index >= dart.notNull(this.widget.itemCount) - 1) {
          return dart.notNull(this.widget.itemCount) - 1;
        }
        return index;
      }
      [_prevIndex]() {
        let index = dart.notNull(this[_currentIndex]) - 1;
        if (!dart.test(this.widget.loop) && index < 0) {
          return 0;
        }
        return index;
      }
      [_onController]() {
        switch (this.widget.controller.event) {
          case -1:
          {
            let prevIndex = this[_prevIndex]();
            if (prevIndex == this[_currentIndex]) return;
            this[_move](1.0, {nextIndex: prevIndex});
            break;
          }
          case 1:
          {
            let nextIndex = this[_nextIndex]();
            if (nextIndex == this[_currentIndex]) return;
            this[_move](0.0, {nextIndex: nextIndex});
            break;
          }
          case 0:
          {
            dart.throw(core.Exception.new("Custom layout does not support SwiperControllerEvent.MOVE_INDEX yet!"));
          }
          case 3:
          case 2:
          {
            break;
          }
        }
      }
      [_onPanEnd](details) {
        if (dart.test(this[_lockScroll])) return;
        let velocity = this.widget.scrollDirection == basic_types.Axis.horizontal ? details.velocity.pixelsPerSecond.dx : details.velocity.pixelsPerSecond.dy;
        if (dart.notNull(this[_animationController].value) >= 0.75 || dart.notNull(velocity) > 500.0) {
          if (dart.notNull(this[_currentIndex]) <= 0 && !dart.test(this.widget.loop)) {
            return;
          }
          this[_move](1.0, {nextIndex: dart.notNull(this[_currentIndex]) - 1});
        } else if (dart.notNull(this[_animationController].value) < 0.25 || dart.notNull(velocity) < -500.0) {
          if (dart.notNull(this[_currentIndex]) >= dart.notNull(this.widget.itemCount) - 1 && !dart.test(this.widget.loop)) {
            return;
          }
          this[_move](0.0, {nextIndex: dart.notNull(this[_currentIndex]) + 1});
        } else {
          this[_move](0.5);
        }
      }
      [_onPanStart](details) {
        if (dart.test(this[_lockScroll])) return;
        this[_currentValue] = this[_animationController].value;
        this[_currentPos] = this.widget.scrollDirection == basic_types.Axis.horizontal ? details.globalPosition.dx : details.globalPosition.dy;
      }
      [_onPanUpdate](details) {
        if (dart.test(this[_lockScroll])) return;
        let value = dart.notNull(this[_currentValue]) + (dart.notNull(this.widget.scrollDirection == basic_types.Axis.horizontal ? details.globalPosition.dx : details.globalPosition.dy) - dart.notNull(this[_currentPos])) / dart.notNull(this[_swiperWidth]) / 2;
        if (!dart.test(this.widget.loop)) {
          if (dart.notNull(this[_currentIndex]) >= dart.notNull(this.widget.itemCount) - 1) {
            if (value < 0.5) {
              value = 0.5;
            }
          } else if (dart.notNull(this[_currentIndex]) <= 0) {
            if (value > 0.5) {
              value = 0.5;
            }
          }
        }
        this[_animationController].value = value;
      }
    }
    (_CustomLayoutStateBase.new = function() {
      this[_swiperWidth] = null;
      this[_swiperHeight] = null;
      this[_animation] = null;
      this[_animationController] = null;
      this[_startIndex] = null;
      this[_animationCount] = null;
      this[_currentValue] = null;
      this[_currentPos] = null;
      this[_lockScroll] = false;
      this[_currentIndex] = 0;
      _CustomLayoutStateBase.__proto__.new.call(this);
      ;
    }).prototype = _CustomLayoutStateBase.prototype;
    dart.addTypeTests(_CustomLayoutStateBase);
    _CustomLayoutStateBase.prototype[_is__CustomLayoutStateBase_default] = true;
    dart.addTypeCaches(_CustomLayoutStateBase);
    dart.setMethodSignature(_CustomLayoutStateBase, () => ({
      __proto__: dart.getMethods(_CustomLayoutStateBase.__proto__),
      [_createAnimationController]: dart.fnType(dart.void, []),
      [_getSize]: dart.fnType(dart.void, [dart.dynamic]),
      afterRender: dart.fnType(dart.void, []),
      [_ensureIndex]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.int)]),
      [_buildContainer]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(core.List$(dart.legacy(framework.Widget)))]),
      [_buildAnimation]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(framework.Widget)]),
      build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
      [_move]: dart.fnType(dart.void, [dart.legacy(core.double)], {nextIndex: dart.legacy(core.int)}, {}),
      [_nextIndex]: dart.fnType(dart.legacy(core.int), []),
      [_prevIndex]: dart.fnType(dart.legacy(core.int), []),
      [_onController]: dart.fnType(dart.void, []),
      [_onPanEnd]: dart.fnType(dart.void, [dart.legacy(drag_details.DragEndDetails)]),
      [_onPanStart]: dart.fnType(dart.void, [dart.legacy(drag_details.DragStartDetails)]),
      [_onPanUpdate]: dart.fnType(dart.void, [dart.legacy(drag_details.DragUpdateDetails)])
    }));
    dart.setLibraryUri(_CustomLayoutStateBase, L0);
    dart.setFieldSignature(_CustomLayoutStateBase, () => ({
      __proto__: dart.getFields(_CustomLayoutStateBase.__proto__),
      [_swiperWidth]: dart.fieldType(dart.legacy(core.double)),
      [_swiperHeight]: dart.fieldType(dart.legacy(core.double)),
      [_animation]: dart.fieldType(dart.legacy(animation.Animation$(dart.legacy(core.double)))),
      [_animationController]: dart.fieldType(dart.legacy(animation_controller.AnimationController)),
      [_startIndex]: dart.fieldType(dart.legacy(core.int)),
      [_animationCount]: dart.fieldType(dart.legacy(core.int)),
      [_currentValue]: dart.fieldType(dart.legacy(core.double)),
      [_currentPos]: dart.fieldType(dart.legacy(core.double)),
      [_lockScroll]: dart.fieldType(dart.legacy(core.bool)),
      [_currentIndex]: dart.fieldType(dart.legacy(core.int))
    }));
    return _CustomLayoutStateBase;
  });
  flutter_swiper._CustomLayoutStateBase = flutter_swiper._CustomLayoutStateBase$();
  dart.addTypeTests(flutter_swiper._CustomLayoutStateBase, _is__CustomLayoutStateBase_default);
  flutter_swiper._TinderState = class _TinderState extends flutter_swiper._CustomLayoutStateBase$(dart.legacy(flutter_swiper._TinderSwiper)) {
    getOffsetY(scale) {
      return dart.notNull(this.widget.itemHeight) - dart.notNull(this.widget.itemHeight) * dart.notNull(scale);
    }
    didChangeDependencies() {
      super.didChangeDependencies();
    }
    didUpdateWidget(oldWidget) {
      _TinderSwiperL().as(oldWidget);
      this[_updateValues]();
      super.didUpdateWidget(oldWidget);
    }
    afterRender() {
      super.afterRender();
      this[_startIndex] = -3;
      this[_animationCount] = 5;
      this.opacity = JSArrayOfdoubleL().of([0.0, 0.9, 0.9, 1.0, 0.0, 0.0]);
      this.scales = JSArrayOfdoubleL().of([0.8, 0.8, 0.85, 0.9, 1.0, 1.0, 1.0]);
      this.rotates = JSArrayOfdoubleL().of([0.0, 0.0, 0.0, 0.0, 20.0, 25.0]);
      this[_updateValues]();
    }
    [_updateValues]() {
      if (this.widget.scrollDirection == basic_types.Axis.horizontal) {
        this.offsetsX = JSArrayOfdoubleL().of([0.0, 0.0, 0.0, 0.0, this[_swiperWidth], this[_swiperWidth]]);
        this.offsetsY = JSArrayOfdoubleL().of([0.0, 0.0, -5.0, -10.0, -15.0, -20.0]);
      } else {
        this.offsetsX = JSArrayOfdoubleL().of([0.0, 0.0, 5.0, 10.0, 15.0, 20.0]);
        this.offsetsY = JSArrayOfdoubleL().of([0.0, 0.0, 0.0, 0.0, this[_swiperHeight], this[_swiperHeight]]);
      }
    }
    [_buildItem](i, realIndex, animationValue) {
      let t0, t0$, t2, t1, t0$0;
      let s = flutter_swiper._getValue(this.scales, animationValue, i);
      let f = flutter_swiper._getValue(this.offsetsX, animationValue, i);
      let fy = flutter_swiper._getValue(this.offsetsY, animationValue, i);
      let o = flutter_swiper._getValue(this.opacity, animationValue, i);
      let a = flutter_swiper._getValue(this.rotates, animationValue, i);
      let alignment = this.widget.scrollDirection == basic_types.Axis.horizontal ? alignment$.Alignment.bottomCenter : alignment$.Alignment.centerLeft;
      return new basic.Opacity.new({opacity: o, child: new basic.Transform.rotate({angle: dart.notNull(a) / 180.0, child: new basic.Transform.translate({key: new (ValueKeyOfintL()).new(dart.notNull(this[_currentIndex]) + dart.notNull(i)), offset: new ui.Offset.new(f, fy), child: new basic.Transform.scale({scale: s, alignment: alignment, child: new basic.SizedBox.new({width: (t0 = this.widget.itemWidth, t0 == null ? 1 / 0 : t0), height: (t0$ = this.widget.itemHeight, t0$ == null ? 1 / 0 : t0$), child: (t0$0 = this.widget, t1 = this.context, t2 = realIndex, t0$0.itemBuilder(t1, t2)), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), $creationLocationd_0dea112b090073317d4: C97 || CT.C97}), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), $creationLocationd_0dea112b090073317d4: C111 || CT.C111});
    }
  };
  (flutter_swiper._TinderState.new = function() {
    this.scales = null;
    this.offsetsX = null;
    this.offsetsY = null;
    this.opacity = null;
    this.rotates = null;
    flutter_swiper._TinderState.__proto__.new.call(this);
    ;
  }).prototype = flutter_swiper._TinderState.prototype;
  dart.addTypeTests(flutter_swiper._TinderState);
  dart.addTypeCaches(flutter_swiper._TinderState);
  dart.setMethodSignature(flutter_swiper._TinderState, () => ({
    __proto__: dart.getMethods(flutter_swiper._TinderState.__proto__),
    getOffsetY: dart.fnType(dart.legacy(core.double), [dart.legacy(core.double)]),
    [_updateValues]: dart.fnType(dart.void, []),
    [_buildItem]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.double)])
  }));
  dart.setLibraryUri(flutter_swiper._TinderState, L0);
  dart.setFieldSignature(flutter_swiper._TinderState, () => ({
    __proto__: dart.getFields(flutter_swiper._TinderState.__proto__),
    scales: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.double)))),
    offsetsX: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.double)))),
    offsetsY: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.double)))),
    opacity: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.double)))),
    rotates: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.double))))
  }));
  var C138;
  var C139;
  var C140;
  var C137;
  var C136;
  var C143;
  var C144;
  var C145;
  var C142;
  var C141;
  var C148;
  var C149;
  var C150;
  var C147;
  var C146;
  var C153;
  var C154;
  var C152;
  var C151;
  flutter_swiper._StackViewState = class _StackViewState extends flutter_swiper._CustomLayoutStateBase$(dart.legacy(flutter_swiper._StackSwiper)) {
    didChangeDependencies() {
      super.didChangeDependencies();
    }
    [_updateValues]() {
      if (this.widget.scrollDirection == basic_types.Axis.horizontal) {
        let space = (dart.notNull(this[_swiperWidth]) - dart.notNull(this.widget.itemWidth)) / 2;
        this.offsets = JSArrayOfdoubleL().of([-space, -space / 3 * 2, -space / 3, 0.0, this[_swiperWidth]]);
      } else {
        let space = (dart.notNull(this[_swiperHeight]) - dart.notNull(this.widget.itemHeight)) / 2;
        this.offsets = JSArrayOfdoubleL().of([-space, -space / 3 * 2, -space / 3, 0.0, this[_swiperHeight]]);
      }
    }
    didUpdateWidget(oldWidget) {
      _StackSwiperL().as(oldWidget);
      this[_updateValues]();
      super.didUpdateWidget(oldWidget);
    }
    afterRender() {
      super.afterRender();
      this[_animationCount] = 5;
      this[_startIndex] = -3;
      this.scales = JSArrayOfdoubleL().of([0.7, 0.8, 0.9, 1.0, 1.0]);
      this.opacity = JSArrayOfdoubleL().of([0.0, 0.5, 1.0, 1.0, 1.0]);
      this[_updateValues]();
    }
    [_buildItem](i, realIndex, animationValue) {
      let t2, t2$, t4, t3, t2$0;
      let s = flutter_swiper._getValue(this.scales, animationValue, i);
      let f = flutter_swiper._getValue(this.offsets, animationValue, i);
      let o = flutter_swiper._getValue(this.opacity, animationValue, i);
      let offset = this.widget.scrollDirection == basic_types.Axis.horizontal ? new ui.Offset.new(f, 0.0) : new ui.Offset.new(0.0, f);
      let alignment = this.widget.scrollDirection == basic_types.Axis.horizontal ? alignment$.Alignment.centerLeft : alignment$.Alignment.topCenter;
      return new basic.Opacity.new({opacity: o, child: new basic.Transform.translate({key: new (ValueKeyOfintL()).new(dart.notNull(this[_currentIndex]) + dart.notNull(i)), offset: offset, child: new basic.Transform.scale({scale: s, alignment: alignment, child: new basic.SizedBox.new({width: (t2 = this.widget.itemWidth, t2 == null ? 1 / 0 : t2), height: (t2$ = this.widget.itemHeight, t2$ == null ? 1 / 0 : t2$), child: (t2$0 = this.widget, t3 = this.context, t4 = realIndex, t2$0.itemBuilder(t3, t4)), $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), $creationLocationd_0dea112b090073317d4: C141 || CT.C141}), $creationLocationd_0dea112b090073317d4: C146 || CT.C146}), $creationLocationd_0dea112b090073317d4: C151 || CT.C151});
    }
  };
  (flutter_swiper._StackViewState.new = function() {
    this.scales = null;
    this.offsets = null;
    this.opacity = null;
    flutter_swiper._StackViewState.__proto__.new.call(this);
    ;
  }).prototype = flutter_swiper._StackViewState.prototype;
  dart.addTypeTests(flutter_swiper._StackViewState);
  dart.addTypeCaches(flutter_swiper._StackViewState);
  dart.setMethodSignature(flutter_swiper._StackViewState, () => ({
    __proto__: dart.getMethods(flutter_swiper._StackViewState.__proto__),
    [_updateValues]: dart.fnType(dart.void, []),
    [_buildItem]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.double)])
  }));
  dart.setLibraryUri(flutter_swiper._StackViewState, L0);
  dart.setFieldSignature(flutter_swiper._StackViewState, () => ({
    __proto__: dart.getFields(flutter_swiper._StackViewState.__proto__),
    scales: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.double)))),
    offsets: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.double)))),
    opacity: dart.fieldType(dart.legacy(core.List$(dart.legacy(core.double))))
  }));
  var _fade = dart.privateName(flutter_swiper, "_fade");
  var _scale = dart.privateName(flutter_swiper, "_scale");
  var C157;
  var C158;
  var C156;
  var C155;
  var C161;
  var C162;
  var C160;
  var C159;
  flutter_swiper.ScaleAndFadeTransformer = class ScaleAndFadeTransformer extends transformer_page_view.PageTransformer {
    transform(item, info) {
      let position = info.position;
      let child = item;
      if (this[_scale] != null) {
        let scaleFactor = (1 - position[$abs]()) * (1 - dart.notNull(this[_scale]));
        let scale = dart.notNull(this[_scale]) + scaleFactor;
        child = new basic.Transform.scale({scale: scale, child: item, $creationLocationd_0dea112b090073317d4: C155 || CT.C155});
      }
      if (this[_fade] != null) {
        let fadeFactor = (1 - position[$abs]()) * (1 - dart.notNull(this[_fade]));
        let opacity = dart.notNull(this[_fade]) + fadeFactor;
        child = new basic.Opacity.new({opacity: opacity, child: child, $creationLocationd_0dea112b090073317d4: C159 || CT.C159});
      }
      return child;
    }
  };
  (flutter_swiper.ScaleAndFadeTransformer.new = function(opts) {
    let fade = opts && 'fade' in opts ? opts.fade : 0.3;
    let scale = opts && 'scale' in opts ? opts.scale : 0.8;
    this[_fade] = fade;
    this[_scale] = scale;
    flutter_swiper.ScaleAndFadeTransformer.__proto__.new.call(this);
    ;
  }).prototype = flutter_swiper.ScaleAndFadeTransformer.prototype;
  dart.addTypeTests(flutter_swiper.ScaleAndFadeTransformer);
  dart.addTypeCaches(flutter_swiper.ScaleAndFadeTransformer);
  dart.setMethodSignature(flutter_swiper.ScaleAndFadeTransformer, () => ({
    __proto__: dart.getMethods(flutter_swiper.ScaleAndFadeTransformer.__proto__),
    transform: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.Widget), dart.legacy(transformer_page_view.TransformInfo)])
  }));
  dart.setLibraryUri(flutter_swiper.ScaleAndFadeTransformer, L0);
  dart.setFieldSignature(flutter_swiper.ScaleAndFadeTransformer, () => ({
    __proto__: dart.getFields(flutter_swiper.ScaleAndFadeTransformer.__proto__),
    [_scale]: dart.finalFieldType(dart.legacy(core.double)),
    [_fade]: dart.finalFieldType(dart.legacy(core.double))
  }));
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  var C163;
  var C164;
  var EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  var EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  var EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  var EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  var C165;
  var C168;
  var C169;
  var C170;
  var C171;
  var C167;
  var C166;
  var C174;
  var C175;
  var C173;
  var C172;
  var C178;
  var C179;
  var C177;
  var C176;
  var C182;
  var C183;
  var C184;
  var C181;
  var C180;
  var C187;
  var C188;
  var C189;
  var C186;
  var C185;
  var C192;
  var C193;
  var C194;
  var C191;
  var C190;
  var C197;
  var C198;
  var C199;
  var C196;
  var C195;
  flutter_swiper.SwiperPlugin = class SwiperPlugin extends core.Object {};
  (flutter_swiper.SwiperPlugin.new = function() {
    ;
  }).prototype = flutter_swiper.SwiperPlugin.prototype;
  dart.addTypeTests(flutter_swiper.SwiperPlugin);
  dart.addTypeCaches(flutter_swiper.SwiperPlugin);
  dart.setLibraryUri(flutter_swiper.SwiperPlugin, L0);
  var iconPrevious$ = dart.privateName(flutter_swiper, "SwiperControl.iconPrevious");
  var iconNext$ = dart.privateName(flutter_swiper, "SwiperControl.iconNext");
  var size$ = dart.privateName(flutter_swiper, "SwiperControl.size");
  var color$ = dart.privateName(flutter_swiper, "SwiperControl.color");
  var disableColor$ = dart.privateName(flutter_swiper, "SwiperControl.disableColor");
  var padding$ = dart.privateName(flutter_swiper, "SwiperControl.padding");
  var key$ = dart.privateName(flutter_swiper, "SwiperControl.key");
  flutter_swiper.SwiperControl = class SwiperControl extends flutter_swiper.SwiperPlugin {
    get iconPrevious() {
      return this[iconPrevious$];
    }
    set iconPrevious(value) {
      super.iconPrevious = value;
    }
    get iconNext() {
      return this[iconNext$];
    }
    set iconNext(value) {
      super.iconNext = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get disableColor() {
      return this[disableColor$];
    }
    set disableColor(value) {
      super.disableColor = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    buildButton(config, color, iconDaga, quarterTurns, previous) {
      return new gesture_detector.GestureDetector.new({behavior: proxy_box.HitTestBehavior.opaque, onTap: dart.fn(() => {
          if (dart.test(previous)) {
            config.controller.previous({animation: true});
          } else {
            config.controller.next({animation: true});
          }
        }, VoidToNullN()), child: new basic.Padding.new({padding: this.padding, child: new basic.RotatedBox.new({quarterTurns: quarterTurns, child: new icon.Icon.new(iconDaga, {semanticLabel: dart.test(previous) ? "Previous" : "Next", size: this.size, color: color, $creationLocationd_0dea112b090073317d4: C166 || CT.C166}), $creationLocationd_0dea112b090073317d4: C172 || CT.C172}), $creationLocationd_0dea112b090073317d4: C176 || CT.C176}), $creationLocationd_0dea112b090073317d4: C180 || CT.C180});
    }
    build(context, config) {
      let t2, t2$;
      let themeData = theme.Theme.of(context);
      let color = (t2 = this.color, t2 == null ? themeData.primaryColor : t2);
      let disableColor = (t2$ = this.disableColor, t2$ == null ? themeData.disabledColor : t2$);
      let prevColor = null;
      let nextColor = null;
      if (dart.test(config.loop)) {
        prevColor = nextColor = color;
      } else {
        let next = dart.notNull(config.activeIndex) < dart.notNull(config.itemCount) - 1;
        let prev = dart.notNull(config.activeIndex) > 0;
        prevColor = prev ? color : disableColor;
        nextColor = next ? color : disableColor;
      }
      let child = null;
      if (config.scrollDirection == basic_types.Axis.horizontal) {
        child = new basic.Row.new({key: this.key, mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidgetL().of([this.buildButton(config, prevColor, this.iconPrevious, 0, true), this.buildButton(config, nextColor, this.iconNext, 0, false)]), $creationLocationd_0dea112b090073317d4: C185 || CT.C185});
      } else {
        child = new basic.Column.new({key: this.key, mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidgetL().of([this.buildButton(config, prevColor, this.iconPrevious, -3, true), this.buildButton(config, nextColor, this.iconNext, -3, false)]), $creationLocationd_0dea112b090073317d4: C190 || CT.C190});
      }
      return new container.Container.new({height: 1 / 0, child: child, width: 1 / 0, $creationLocationd_0dea112b090073317d4: C195 || CT.C195});
    }
  };
  (flutter_swiper.SwiperControl.new = function(opts) {
    let iconPrevious = opts && 'iconPrevious' in opts ? opts.iconPrevious : C163 || CT.C163;
    let iconNext = opts && 'iconNext' in opts ? opts.iconNext : C164 || CT.C164;
    let color = opts && 'color' in opts ? opts.color : null;
    let disableColor = opts && 'disableColor' in opts ? opts.disableColor : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let size = opts && 'size' in opts ? opts.size : 30;
    let padding = opts && 'padding' in opts ? opts.padding : C165 || CT.C165;
    this[iconPrevious$] = iconPrevious;
    this[iconNext$] = iconNext;
    this[color$] = color;
    this[disableColor$] = disableColor;
    this[key$] = key;
    this[size$] = size;
    this[padding$] = padding;
    flutter_swiper.SwiperControl.__proto__.new.call(this);
    ;
  }).prototype = flutter_swiper.SwiperControl.prototype;
  dart.addTypeTests(flutter_swiper.SwiperControl);
  dart.addTypeCaches(flutter_swiper.SwiperControl);
  dart.setMethodSignature(flutter_swiper.SwiperControl, () => ({
    __proto__: dart.getMethods(flutter_swiper.SwiperControl.__proto__),
    buildButton: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(flutter_swiper.SwiperPluginConfig), dart.legacy(ui.Color), dart.legacy(icon_data.IconData), dart.legacy(core.int), dart.legacy(core.bool)]),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(flutter_swiper.SwiperPluginConfig)])
  }));
  dart.setLibraryUri(flutter_swiper.SwiperControl, L0);
  dart.setFieldSignature(flutter_swiper.SwiperControl, () => ({
    __proto__: dart.getFields(flutter_swiper.SwiperControl.__proto__),
    iconPrevious: dart.finalFieldType(dart.legacy(icon_data.IconData)),
    iconNext: dart.finalFieldType(dart.legacy(icon_data.IconData)),
    size: dart.finalFieldType(dart.legacy(core.double)),
    color: dart.finalFieldType(dart.legacy(ui.Color)),
    disableColor: dart.finalFieldType(dart.legacy(ui.Color)),
    padding: dart.finalFieldType(dart.legacy(edge_insets.EdgeInsetsGeometry)),
    key: dart.finalFieldType(dart.legacy(key.Key))
  }));
  var config = dart.privateName(flutter_swiper, "SwiperController.config");
  var pos = dart.privateName(flutter_swiper, "SwiperController.pos");
  var index = dart.privateName(flutter_swiper, "SwiperController.index");
  var animation$ = dart.privateName(flutter_swiper, "SwiperController.animation");
  var autoplay = dart.privateName(flutter_swiper, "SwiperController.autoplay");
  flutter_swiper.SwiperController = class SwiperController extends transformer_page_view.IndexController {
    get config() {
      return this[config];
    }
    set config(value) {
      this[config] = value;
    }
    get pos() {
      return this[pos];
    }
    set pos(value) {
      this[pos] = value;
    }
    get index() {
      return this[index];
    }
    set index(value) {
      this[index] = value;
    }
    get animation() {
      return this[animation$];
    }
    set animation(value) {
      this[animation$] = value;
    }
    get autoplay() {
      return this[autoplay];
    }
    set autoplay(value) {
      this[autoplay] = value;
    }
    startAutoplay() {
      this.event = 2;
      this.autoplay = true;
      this.notifyListeners();
    }
    stopAutoplay() {
      this.event = 3;
      this.autoplay = false;
      this.notifyListeners();
    }
  };
  (flutter_swiper.SwiperController.new = function() {
    this[config] = null;
    this[pos] = null;
    this[index] = null;
    this[animation$] = null;
    this[autoplay] = null;
    flutter_swiper.SwiperController.__proto__.new.call(this);
    ;
  }).prototype = flutter_swiper.SwiperController.prototype;
  dart.addTypeTests(flutter_swiper.SwiperController);
  dart.addTypeCaches(flutter_swiper.SwiperController);
  dart.setMethodSignature(flutter_swiper.SwiperController, () => ({
    __proto__: dart.getMethods(flutter_swiper.SwiperController.__proto__),
    startAutoplay: dart.fnType(dart.void, []),
    stopAutoplay: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(flutter_swiper.SwiperController, L0);
  dart.setFieldSignature(flutter_swiper.SwiperController, () => ({
    __proto__: dart.getFields(flutter_swiper.SwiperController.__proto__),
    config: dart.fieldType(dart.legacy(flutter_swiper.SwiperPluginConfig)),
    pos: dart.fieldType(dart.legacy(core.double)),
    index: dart.fieldType(dart.legacy(core.int)),
    animation: dart.fieldType(dart.legacy(core.bool)),
    autoplay: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(flutter_swiper.SwiperController, {
    /*flutter_swiper.SwiperController.START_AUTOPLAY*/get START_AUTOPLAY() {
      return 2;
    },
    /*flutter_swiper.SwiperController.STOP_AUTOPLAY*/get STOP_AUTOPLAY() {
      return 3;
    },
    /*flutter_swiper.SwiperController.SWIPE*/get SWIPE() {
      return 4;
    },
    /*flutter_swiper.SwiperController.BUILD*/get BUILD() {
      return 5;
    }
  }, true);
  var C202;
  var C203;
  var C201;
  var C200;
  var C206;
  var C207;
  var C205;
  var C204;
  var C210;
  var C211;
  var C209;
  var C208;
  var C214;
  var C215;
  var C216;
  var C213;
  var C212;
  var C219;
  var C220;
  var C218;
  var C217;
  var C223;
  var C224;
  var C222;
  var C221;
  var C227;
  var C228;
  var C229;
  var C226;
  var C225;
  var color$0 = dart.privateName(flutter_swiper, "FractionPaginationBuilder.color");
  var activeColor$ = dart.privateName(flutter_swiper, "FractionPaginationBuilder.activeColor");
  var fontSize$ = dart.privateName(flutter_swiper, "FractionPaginationBuilder.fontSize");
  var activeFontSize$ = dart.privateName(flutter_swiper, "FractionPaginationBuilder.activeFontSize");
  var key$0 = dart.privateName(flutter_swiper, "FractionPaginationBuilder.key");
  flutter_swiper.FractionPaginationBuilder = class FractionPaginationBuilder extends flutter_swiper.SwiperPlugin {
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    get activeColor() {
      return this[activeColor$];
    }
    set activeColor(value) {
      super.activeColor = value;
    }
    get fontSize() {
      return this[fontSize$];
    }
    set fontSize(value) {
      super.fontSize = value;
    }
    get activeFontSize() {
      return this[activeFontSize$];
    }
    set activeFontSize(value) {
      super.activeFontSize = value;
    }
    get key() {
      return this[key$0];
    }
    set key(value) {
      super.key = value;
    }
    build(context, config) {
      let t2, t2$;
      let themeData = theme.Theme.of(context);
      let activeColor = (t2 = this.activeColor, t2 == null ? themeData.primaryColor : t2);
      let color = (t2$ = this.color, t2$ == null ? themeData.scaffoldBackgroundColor : t2$);
      if (basic_types.Axis.vertical == config.scrollDirection) {
        return new basic.Column.new({key: this.key, mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidgetL().of([new text.Text.new(dart.str(dart.notNull(config.activeIndex) + 1), {style: new text_style.TextStyle.new({color: activeColor, fontSize: this.activeFontSize}), $creationLocationd_0dea112b090073317d4: C200 || CT.C200}), new text.Text.new("/", {style: new text_style.TextStyle.new({color: color, fontSize: this.fontSize}), $creationLocationd_0dea112b090073317d4: C204 || CT.C204}), new text.Text.new(dart.str(config.itemCount), {style: new text_style.TextStyle.new({color: color, fontSize: this.fontSize}), $creationLocationd_0dea112b090073317d4: C208 || CT.C208})]), $creationLocationd_0dea112b090073317d4: C212 || CT.C212});
      } else {
        return new basic.Row.new({key: this.key, mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidgetL().of([new text.Text.new(dart.str(dart.notNull(config.activeIndex) + 1), {style: new text_style.TextStyle.new({color: activeColor, fontSize: this.activeFontSize}), $creationLocationd_0dea112b090073317d4: C217 || CT.C217}), new text.Text.new(" / " + dart.str(config.itemCount), {style: new text_style.TextStyle.new({color: color, fontSize: this.fontSize}), $creationLocationd_0dea112b090073317d4: C221 || CT.C221})]), $creationLocationd_0dea112b090073317d4: C225 || CT.C225});
      }
    }
  };
  (flutter_swiper.FractionPaginationBuilder.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : 20;
    let key = opts && 'key' in opts ? opts.key : null;
    let activeColor = opts && 'activeColor' in opts ? opts.activeColor : null;
    let activeFontSize = opts && 'activeFontSize' in opts ? opts.activeFontSize : 35;
    this[color$0] = color;
    this[fontSize$] = fontSize;
    this[key$0] = key;
    this[activeColor$] = activeColor;
    this[activeFontSize$] = activeFontSize;
    flutter_swiper.FractionPaginationBuilder.__proto__.new.call(this);
    ;
  }).prototype = flutter_swiper.FractionPaginationBuilder.prototype;
  dart.addTypeTests(flutter_swiper.FractionPaginationBuilder);
  dart.addTypeCaches(flutter_swiper.FractionPaginationBuilder);
  dart.setMethodSignature(flutter_swiper.FractionPaginationBuilder, () => ({
    __proto__: dart.getMethods(flutter_swiper.FractionPaginationBuilder.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(flutter_swiper.SwiperPluginConfig)])
  }));
  dart.setLibraryUri(flutter_swiper.FractionPaginationBuilder, L0);
  dart.setFieldSignature(flutter_swiper.FractionPaginationBuilder, () => ({
    __proto__: dart.getFields(flutter_swiper.FractionPaginationBuilder.__proto__),
    color: dart.finalFieldType(dart.legacy(ui.Color)),
    activeColor: dart.finalFieldType(dart.legacy(ui.Color)),
    fontSize: dart.finalFieldType(dart.legacy(core.double)),
    activeFontSize: dart.finalFieldType(dart.legacy(core.double)),
    key: dart.finalFieldType(dart.legacy(key.Key))
  }));
  var OffsetBase__dy = dart.privateName(ui, "OffsetBase._dy");
  var OffsetBase__dx = dart.privateName(ui, "OffsetBase._dx");
  var C230;
  var C233;
  var C234;
  var C235;
  var C232;
  var C231;
  var C238;
  var C239;
  var C240;
  var C237;
  var C236;
  var C243;
  var C244;
  var C245;
  var C242;
  var C241;
  var C248;
  var C249;
  var C250;
  var C247;
  var C246;
  var activeColor$0 = dart.privateName(flutter_swiper, "RectSwiperPaginationBuilder.activeColor");
  var color$1 = dart.privateName(flutter_swiper, "RectSwiperPaginationBuilder.color");
  var activeSize$ = dart.privateName(flutter_swiper, "RectSwiperPaginationBuilder.activeSize");
  var size$0 = dart.privateName(flutter_swiper, "RectSwiperPaginationBuilder.size");
  var space$ = dart.privateName(flutter_swiper, "RectSwiperPaginationBuilder.space");
  var key$1 = dart.privateName(flutter_swiper, "RectSwiperPaginationBuilder.key");
  flutter_swiper.RectSwiperPaginationBuilder = class RectSwiperPaginationBuilder extends flutter_swiper.SwiperPlugin {
    get activeColor() {
      return this[activeColor$0];
    }
    set activeColor(value) {
      super.activeColor = value;
    }
    get color() {
      return this[color$1];
    }
    set color(value) {
      super.color = value;
    }
    get activeSize() {
      return this[activeSize$];
    }
    set activeSize(value) {
      super.activeSize = value;
    }
    get size() {
      return this[size$0];
    }
    set size(value) {
      super.size = value;
    }
    get space() {
      return this[space$];
    }
    set space(value) {
      super.space = value;
    }
    get key() {
      return this[key$1];
    }
    set key(value) {
      super.key = value;
    }
    build(context, config) {
      let t2, t2$;
      let themeData = theme.Theme.of(context);
      let activeColor = (t2 = this.activeColor, t2 == null ? themeData.primaryColor : t2);
      let color = (t2$ = this.color, t2$ == null ? themeData.scaffoldBackgroundColor : t2$);
      let list = JSArrayOfWidgetL().of([]);
      if (dart.notNull(config.itemCount) > 20) {
        core.print("The itemCount is too big, we suggest use FractionPaginationBuilder instead of DotSwiperPaginationBuilder in this sitituation");
      }
      let itemCount = config.itemCount;
      let activeIndex = config.activeIndex;
      for (let i = 0; i < dart.notNull(itemCount); i = i + 1) {
        let active = i === activeIndex;
        let size = active ? this.activeSize : this.size;
        list[$add](new basic.SizedBox.new({width: size.width, height: size.height, child: new container.Container.new({color: active ? activeColor : color, key: new (ValueKeyOfStringL()).new("pagination_" + dart.str(i)), margin: new edge_insets.EdgeInsets.all(this.space), $creationLocationd_0dea112b090073317d4: C231 || CT.C231}), $creationLocationd_0dea112b090073317d4: C236 || CT.C236}));
      }
      if (config.scrollDirection == basic_types.Axis.vertical) {
        return new basic.Column.new({key: this.key, mainAxisSize: flex.MainAxisSize.min, children: list, $creationLocationd_0dea112b090073317d4: C241 || CT.C241});
      } else {
        return new basic.Row.new({key: this.key, mainAxisSize: flex.MainAxisSize.min, children: list, $creationLocationd_0dea112b090073317d4: C246 || CT.C246});
      }
    }
  };
  (flutter_swiper.RectSwiperPaginationBuilder.new = function(opts) {
    let activeColor = opts && 'activeColor' in opts ? opts.activeColor : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let size = opts && 'size' in opts ? opts.size : C230 || CT.C230;
    let activeSize = opts && 'activeSize' in opts ? opts.activeSize : C230 || CT.C230;
    let space = opts && 'space' in opts ? opts.space : 3;
    this[activeColor$0] = activeColor;
    this[color$1] = color;
    this[key$1] = key;
    this[size$0] = size;
    this[activeSize$] = activeSize;
    this[space$] = space;
    flutter_swiper.RectSwiperPaginationBuilder.__proto__.new.call(this);
    ;
  }).prototype = flutter_swiper.RectSwiperPaginationBuilder.prototype;
  dart.addTypeTests(flutter_swiper.RectSwiperPaginationBuilder);
  dart.addTypeCaches(flutter_swiper.RectSwiperPaginationBuilder);
  dart.setMethodSignature(flutter_swiper.RectSwiperPaginationBuilder, () => ({
    __proto__: dart.getMethods(flutter_swiper.RectSwiperPaginationBuilder.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(flutter_swiper.SwiperPluginConfig)])
  }));
  dart.setLibraryUri(flutter_swiper.RectSwiperPaginationBuilder, L0);
  dart.setFieldSignature(flutter_swiper.RectSwiperPaginationBuilder, () => ({
    __proto__: dart.getFields(flutter_swiper.RectSwiperPaginationBuilder.__proto__),
    activeColor: dart.finalFieldType(dart.legacy(ui.Color)),
    color: dart.finalFieldType(dart.legacy(ui.Color)),
    activeSize: dart.finalFieldType(dart.legacy(ui.Size)),
    size: dart.finalFieldType(dart.legacy(ui.Size)),
    space: dart.finalFieldType(dart.legacy(core.double)),
    key: dart.finalFieldType(dart.legacy(key.Key))
  }));
  var C253;
  var C254;
  var C255;
  var C256;
  var C257;
  var C258;
  var C259;
  var C252;
  var C251;
  var C262;
  var C263;
  var C264;
  var C261;
  var C260;
  var C267;
  var C266;
  var C265;
  var C270;
  var C271;
  var C272;
  var C269;
  var C268;
  var C275;
  var C276;
  var C277;
  var C274;
  var C273;
  var C280;
  var C281;
  var C282;
  var C279;
  var C278;
  var activeColor$1 = dart.privateName(flutter_swiper, "DotSwiperPaginationBuilder.activeColor");
  var color$2 = dart.privateName(flutter_swiper, "DotSwiperPaginationBuilder.color");
  var activeSize$0 = dart.privateName(flutter_swiper, "DotSwiperPaginationBuilder.activeSize");
  var size$1 = dart.privateName(flutter_swiper, "DotSwiperPaginationBuilder.size");
  var space$0 = dart.privateName(flutter_swiper, "DotSwiperPaginationBuilder.space");
  var key$2 = dart.privateName(flutter_swiper, "DotSwiperPaginationBuilder.key");
  flutter_swiper.DotSwiperPaginationBuilder = class DotSwiperPaginationBuilder extends flutter_swiper.SwiperPlugin {
    get activeColor() {
      return this[activeColor$1];
    }
    set activeColor(value) {
      super.activeColor = value;
    }
    get color() {
      return this[color$2];
    }
    set color(value) {
      super.color = value;
    }
    get activeSize() {
      return this[activeSize$0];
    }
    set activeSize(value) {
      super.activeSize = value;
    }
    get size() {
      return this[size$1];
    }
    set size(value) {
      super.size = value;
    }
    get space() {
      return this[space$0];
    }
    set space(value) {
      super.space = value;
    }
    get key() {
      return this[key$2];
    }
    set key(value) {
      super.key = value;
    }
    build(context, config) {
      let t2, t2$;
      if (dart.notNull(config.itemCount) > 20) {
        core.print("The itemCount is too big, we suggest use FractionPaginationBuilder instead of DotSwiperPaginationBuilder in this sitituation");
      }
      let activeColor = this.activeColor;
      let color = this.color;
      if (activeColor == null || color == null) {
        let themeData = theme.Theme.of(context);
        activeColor = (t2 = this.activeColor, t2 == null ? themeData.primaryColor : t2);
        color = (t2$ = this.color, t2$ == null ? themeData.scaffoldBackgroundColor : t2$);
      }
      if (config.indicatorLayout != flutter_page_indicator.PageIndicatorLayout.NONE && config.layout == flutter_swiper.SwiperLayout.DEFAULT) {
        return new flutter_page_indicator.PageIndicator.new({count: config.itemCount, controller: config.pageController, layout: config.indicatorLayout, size: this.size, activeColor: activeColor, color: color, space: this.space, $creationLocationd_0dea112b090073317d4: C251 || CT.C251});
      }
      let list = JSArrayOfWidgetL().of([]);
      let itemCount = config.itemCount;
      let activeIndex = config.activeIndex;
      for (let i = 0; i < dart.notNull(itemCount); i = i + 1) {
        let active = i === activeIndex;
        list[$add](new container.Container.new({key: new (ValueKeyOfStringL()).new("pagination_" + dart.str(i)), margin: new edge_insets.EdgeInsets.all(this.space), child: new basic.ClipOval.new({child: new container.Container.new({color: active ? activeColor : color, width: active ? this.activeSize : this.size, height: active ? this.activeSize : this.size, $creationLocationd_0dea112b090073317d4: C260 || CT.C260}), $creationLocationd_0dea112b090073317d4: C265 || CT.C265}), $creationLocationd_0dea112b090073317d4: C268 || CT.C268}));
      }
      if (config.scrollDirection == basic_types.Axis.vertical) {
        return new basic.Column.new({key: this.key, mainAxisSize: flex.MainAxisSize.min, children: list, $creationLocationd_0dea112b090073317d4: C273 || CT.C273});
      } else {
        return new basic.Row.new({key: this.key, mainAxisSize: flex.MainAxisSize.min, children: list, $creationLocationd_0dea112b090073317d4: C278 || CT.C278});
      }
    }
  };
  (flutter_swiper.DotSwiperPaginationBuilder.new = function(opts) {
    let activeColor = opts && 'activeColor' in opts ? opts.activeColor : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let size = opts && 'size' in opts ? opts.size : 10;
    let activeSize = opts && 'activeSize' in opts ? opts.activeSize : 10;
    let space = opts && 'space' in opts ? opts.space : 3;
    this[activeColor$1] = activeColor;
    this[color$2] = color;
    this[key$2] = key;
    this[size$1] = size;
    this[activeSize$0] = activeSize;
    this[space$0] = space;
    flutter_swiper.DotSwiperPaginationBuilder.__proto__.new.call(this);
    ;
  }).prototype = flutter_swiper.DotSwiperPaginationBuilder.prototype;
  dart.addTypeTests(flutter_swiper.DotSwiperPaginationBuilder);
  dart.addTypeCaches(flutter_swiper.DotSwiperPaginationBuilder);
  dart.setMethodSignature(flutter_swiper.DotSwiperPaginationBuilder, () => ({
    __proto__: dart.getMethods(flutter_swiper.DotSwiperPaginationBuilder.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(flutter_swiper.SwiperPluginConfig)])
  }));
  dart.setLibraryUri(flutter_swiper.DotSwiperPaginationBuilder, L0);
  dart.setFieldSignature(flutter_swiper.DotSwiperPaginationBuilder, () => ({
    __proto__: dart.getFields(flutter_swiper.DotSwiperPaginationBuilder.__proto__),
    activeColor: dart.finalFieldType(dart.legacy(ui.Color)),
    color: dart.finalFieldType(dart.legacy(ui.Color)),
    activeSize: dart.finalFieldType(dart.legacy(core.double)),
    size: dart.finalFieldType(dart.legacy(core.double)),
    space: dart.finalFieldType(dart.legacy(core.double)),
    key: dart.finalFieldType(dart.legacy(key.Key))
  }));
  var builder$ = dart.privateName(flutter_swiper, "SwiperCustomPagination.builder");
  flutter_swiper.SwiperCustomPagination = class SwiperCustomPagination extends flutter_swiper.SwiperPlugin {
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    build(context, config) {
      let t3, t2;
      t2 = context;
      t3 = config;
      return this.builder(t2, t3);
    }
  };
  (flutter_swiper.SwiperCustomPagination.new = function(opts) {
    let builder = opts && 'builder' in opts ? opts.builder : null;
    this[builder$] = builder;
    if (!(builder != null)) dart.assertFailed(null, L1, 1337, 61, "builder != null");
    flutter_swiper.SwiperCustomPagination.__proto__.new.call(this);
    ;
  }).prototype = flutter_swiper.SwiperCustomPagination.prototype;
  dart.addTypeTests(flutter_swiper.SwiperCustomPagination);
  dart.addTypeCaches(flutter_swiper.SwiperCustomPagination);
  dart.setMethodSignature(flutter_swiper.SwiperCustomPagination, () => ({
    __proto__: dart.getMethods(flutter_swiper.SwiperCustomPagination.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(flutter_swiper.SwiperPluginConfig)])
  }));
  dart.setLibraryUri(flutter_swiper.SwiperCustomPagination, L0);
  dart.setFieldSignature(flutter_swiper.SwiperCustomPagination, () => ({
    __proto__: dart.getFields(flutter_swiper.SwiperCustomPagination.__proto__),
    builder: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(flutter_swiper.SwiperPluginConfig)])))
  }));
  var C283;
  var C284;
  var C287;
  var C288;
  var C286;
  var C285;
  var C291;
  var C292;
  var C293;
  var C290;
  var C289;
  var alignment$0 = dart.privateName(flutter_swiper, "SwiperPagination.alignment");
  var margin$ = dart.privateName(flutter_swiper, "SwiperPagination.margin");
  var builder$0 = dart.privateName(flutter_swiper, "SwiperPagination.builder");
  var key$3 = dart.privateName(flutter_swiper, "SwiperPagination.key");
  var C294;
  var C295;
  flutter_swiper.SwiperPagination = class SwiperPagination extends flutter_swiper.SwiperPlugin {
    get alignment() {
      return this[alignment$0];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get margin() {
      return this[margin$];
    }
    set margin(value) {
      super.margin = value;
    }
    get builder() {
      return this[builder$0];
    }
    set builder(value) {
      super.builder = value;
    }
    get key() {
      return this[key$3];
    }
    set key(value) {
      super.key = value;
    }
    build(context, config) {
      let t2;
      let alignment = (t2 = this.alignment, t2 == null ? config.scrollDirection == basic_types.Axis.horizontal ? alignment$.Alignment.bottomCenter : alignment$.Alignment.centerRight : t2);
      let child = new container.Container.new({margin: this.margin, child: this.builder.build(context, config), $creationLocationd_0dea112b090073317d4: C285 || CT.C285});
      if (!dart.test(config.outer)) {
        child = new basic.Align.new({key: this.key, alignment: alignment, child: child, $creationLocationd_0dea112b090073317d4: C289 || CT.C289});
      }
      return child;
    }
  };
  (flutter_swiper.SwiperPagination.new = function(opts) {
    let alignment = opts && 'alignment' in opts ? opts.alignment : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let margin = opts && 'margin' in opts ? opts.margin : C283 || CT.C283;
    let builder = opts && 'builder' in opts ? opts.builder : C284 || CT.C284;
    this[alignment$0] = alignment;
    this[key$3] = key;
    this[margin$] = margin;
    this[builder$0] = builder;
    flutter_swiper.SwiperPagination.__proto__.new.call(this);
    ;
  }).prototype = flutter_swiper.SwiperPagination.prototype;
  dart.addTypeTests(flutter_swiper.SwiperPagination);
  dart.addTypeCaches(flutter_swiper.SwiperPagination);
  dart.setMethodSignature(flutter_swiper.SwiperPagination, () => ({
    __proto__: dart.getMethods(flutter_swiper.SwiperPagination.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(flutter_swiper.SwiperPluginConfig)])
  }));
  dart.setLibraryUri(flutter_swiper.SwiperPagination, L0);
  dart.setFieldSignature(flutter_swiper.SwiperPagination, () => ({
    __proto__: dart.getFields(flutter_swiper.SwiperPagination.__proto__),
    alignment: dart.finalFieldType(dart.legacy(alignment$.Alignment)),
    margin: dart.finalFieldType(dart.legacy(edge_insets.EdgeInsetsGeometry)),
    builder: dart.finalFieldType(dart.legacy(flutter_swiper.SwiperPlugin)),
    key: dart.finalFieldType(dart.legacy(key.Key))
  }));
  dart.defineLazy(flutter_swiper.SwiperPagination, {
    /*flutter_swiper.SwiperPagination.dots*/get dots() {
      return C284 || CT.C284;
    },
    /*flutter_swiper.SwiperPagination.fraction*/get fraction() {
      return C294 || CT.C294;
    },
    /*flutter_swiper.SwiperPagination.rect*/get rect() {
      return C295 || CT.C295;
    }
  }, true);
  var activeIndex$ = dart.privateName(flutter_swiper, "SwiperPluginConfig.activeIndex");
  var itemCount$0 = dart.privateName(flutter_swiper, "SwiperPluginConfig.itemCount");
  var indicatorLayout$0 = dart.privateName(flutter_swiper, "SwiperPluginConfig.indicatorLayout");
  var scrollDirection$0 = dart.privateName(flutter_swiper, "SwiperPluginConfig.scrollDirection");
  var loop$0 = dart.privateName(flutter_swiper, "SwiperPluginConfig.loop");
  var outer$0 = dart.privateName(flutter_swiper, "SwiperPluginConfig.outer");
  var pageController$ = dart.privateName(flutter_swiper, "SwiperPluginConfig.pageController");
  var controller$0 = dart.privateName(flutter_swiper, "SwiperPluginConfig.controller");
  var layout$0 = dart.privateName(flutter_swiper, "SwiperPluginConfig.layout");
  flutter_swiper.SwiperPluginConfig = class SwiperPluginConfig extends core.Object {
    get activeIndex() {
      return this[activeIndex$];
    }
    set activeIndex(value) {
      super.activeIndex = value;
    }
    get itemCount() {
      return this[itemCount$0];
    }
    set itemCount(value) {
      super.itemCount = value;
    }
    get indicatorLayout() {
      return this[indicatorLayout$0];
    }
    set indicatorLayout(value) {
      super.indicatorLayout = value;
    }
    get scrollDirection() {
      return this[scrollDirection$0];
    }
    set scrollDirection(value) {
      super.scrollDirection = value;
    }
    get loop() {
      return this[loop$0];
    }
    set loop(value) {
      super.loop = value;
    }
    get outer() {
      return this[outer$0];
    }
    set outer(value) {
      super.outer = value;
    }
    get pageController() {
      return this[pageController$];
    }
    set pageController(value) {
      super.pageController = value;
    }
    get controller() {
      return this[controller$0];
    }
    set controller(value) {
      super.controller = value;
    }
    get layout() {
      return this[layout$0];
    }
    set layout(value) {
      super.layout = value;
    }
  };
  (flutter_swiper.SwiperPluginConfig.new = function(opts) {
    let activeIndex = opts && 'activeIndex' in opts ? opts.activeIndex : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let indicatorLayout = opts && 'indicatorLayout' in opts ? opts.indicatorLayout : null;
    let outer = opts && 'outer' in opts ? opts.outer : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let pageController = opts && 'pageController' in opts ? opts.pageController : null;
    let layout = opts && 'layout' in opts ? opts.layout : null;
    let loop = opts && 'loop' in opts ? opts.loop : null;
    this[activeIndex$] = activeIndex;
    this[itemCount$0] = itemCount;
    this[indicatorLayout$0] = indicatorLayout;
    this[outer$0] = outer;
    this[scrollDirection$0] = scrollDirection;
    this[controller$0] = controller;
    this[pageController$] = pageController;
    this[layout$0] = layout;
    this[loop$0] = loop;
    if (!(scrollDirection != null)) dart.assertFailed(null, L1, 1421, 16, "scrollDirection != null");
    if (!(controller != null)) dart.assertFailed(null, L1, 1422, 16, "controller != null");
    ;
  }).prototype = flutter_swiper.SwiperPluginConfig.prototype;
  dart.addTypeTests(flutter_swiper.SwiperPluginConfig);
  dart.addTypeCaches(flutter_swiper.SwiperPluginConfig);
  dart.setLibraryUri(flutter_swiper.SwiperPluginConfig, L0);
  dart.setFieldSignature(flutter_swiper.SwiperPluginConfig, () => ({
    __proto__: dart.getFields(flutter_swiper.SwiperPluginConfig.__proto__),
    activeIndex: dart.finalFieldType(dart.legacy(core.int)),
    itemCount: dart.finalFieldType(dart.legacy(core.int)),
    indicatorLayout: dart.finalFieldType(dart.legacy(flutter_page_indicator.PageIndicatorLayout)),
    scrollDirection: dart.finalFieldType(dart.legacy(basic_types.Axis)),
    loop: dart.finalFieldType(dart.legacy(core.bool)),
    outer: dart.finalFieldType(dart.legacy(core.bool)),
    pageController: dart.finalFieldType(dart.legacy(page_view.PageController)),
    controller: dart.finalFieldType(dart.legacy(flutter_swiper.SwiperController)),
    layout: dart.finalFieldType(dart.legacy(flutter_swiper.SwiperLayout))
  }));
  var plugin$ = dart.privateName(flutter_swiper, "SwiperPluginView.plugin");
  var config$ = dart.privateName(flutter_swiper, "SwiperPluginView.config");
  flutter_swiper.SwiperPluginView = class SwiperPluginView extends framework.StatelessWidget {
    get plugin() {
      return this[plugin$];
    }
    set plugin(value) {
      super.plugin = value;
    }
    get config() {
      return this[config$];
    }
    set config(value) {
      super.config = value;
    }
    build(context) {
      return this.plugin.build(context, this.config);
    }
  };
  (flutter_swiper.SwiperPluginView.new = function(plugin, config, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[plugin$] = plugin;
    this[config$] = config;
    flutter_swiper.SwiperPluginView.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = flutter_swiper.SwiperPluginView.prototype;
  dart.addTypeTests(flutter_swiper.SwiperPluginView);
  dart.addTypeCaches(flutter_swiper.SwiperPluginView);
  dart.setMethodSignature(flutter_swiper.SwiperPluginView, () => ({
    __proto__: dart.getMethods(flutter_swiper.SwiperPluginView.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(flutter_swiper.SwiperPluginView, L0);
  dart.setFieldSignature(flutter_swiper.SwiperPluginView, () => ({
    __proto__: dart.getFields(flutter_swiper.SwiperPluginView.__proto__),
    plugin: dart.finalFieldType(dart.legacy(flutter_swiper.SwiperPlugin)),
    config: dart.finalFieldType(dart.legacy(flutter_swiper.SwiperPluginConfig))
  }));
  const _is_TransformBuilder_default = Symbol('_is_TransformBuilder_default');
  var values$ = dart.privateName(flutter_swiper, "TransformBuilder.values");
  flutter_swiper.TransformBuilder$ = dart.generic(T => {
    var TL = () => (TL = dart.constFn(dart.legacy(T)))();
    var ListOfTL = () => (ListOfTL = dart.constFn(core.List$(TL())))();
    var ListLOfTL = () => (ListLOfTL = dart.constFn(dart.legacy(ListOfTL())))();
    class TransformBuilder extends core.Object {
      get values() {
        return this[values$];
      }
      set values(value) {
        this[values$] = ListLOfTL().as(value);
      }
    }
    (TransformBuilder.new = function(opts) {
      let values = opts && 'values' in opts ? opts.values : null;
      this[values$] = values;
      ;
    }).prototype = TransformBuilder.prototype;
    dart.addTypeTests(TransformBuilder);
    TransformBuilder.prototype[_is_TransformBuilder_default] = true;
    dart.addTypeCaches(TransformBuilder);
    dart.setLibraryUri(TransformBuilder, L0);
    dart.setFieldSignature(TransformBuilder, () => ({
      __proto__: dart.getFields(TransformBuilder.__proto__),
      values: dart.fieldType(dart.legacy(core.List$(dart.legacy(T))))
    }));
    return TransformBuilder;
  });
  flutter_swiper.TransformBuilder = flutter_swiper.TransformBuilder$();
  dart.addTypeTests(flutter_swiper.TransformBuilder, _is_TransformBuilder_default);
  var Alignment_y = dart.privateName(alignment$, "Alignment.y");
  var Alignment_x = dart.privateName(alignment$, "Alignment.x");
  var C296;
  var C299;
  var C300;
  var C298;
  var C297;
  var alignment$1 = dart.privateName(flutter_swiper, "ScaleTransformBuilder.alignment");
  flutter_swiper.ScaleTransformBuilder = class ScaleTransformBuilder extends flutter_swiper.TransformBuilder$(dart.legacy(core.double)) {
    get alignment() {
      return this[alignment$1];
    }
    set alignment(value) {
      super.alignment = value;
    }
    build(i, animationValue, widget) {
      let s = flutter_swiper._getValue(this.values, animationValue, i);
      return new basic.Transform.scale({scale: s, child: widget, $creationLocationd_0dea112b090073317d4: C297 || CT.C297});
    }
  };
  (flutter_swiper.ScaleTransformBuilder.new = function(opts) {
    let values = opts && 'values' in opts ? opts.values : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C296 || CT.C296;
    this[alignment$1] = alignment;
    flutter_swiper.ScaleTransformBuilder.__proto__.new.call(this, {values: values});
    ;
  }).prototype = flutter_swiper.ScaleTransformBuilder.prototype;
  dart.addTypeTests(flutter_swiper.ScaleTransformBuilder);
  dart.addTypeCaches(flutter_swiper.ScaleTransformBuilder);
  dart.setMethodSignature(flutter_swiper.ScaleTransformBuilder, () => ({
    __proto__: dart.getMethods(flutter_swiper.ScaleTransformBuilder.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(core.int), dart.legacy(core.double), dart.legacy(framework.Widget)])
  }));
  dart.setLibraryUri(flutter_swiper.ScaleTransformBuilder, L0);
  dart.setFieldSignature(flutter_swiper.ScaleTransformBuilder, () => ({
    __proto__: dart.getFields(flutter_swiper.ScaleTransformBuilder.__proto__),
    alignment: dart.finalFieldType(dart.legacy(alignment$.Alignment))
  }));
  var C303;
  var C304;
  var C302;
  var C301;
  flutter_swiper.OpacityTransformBuilder = class OpacityTransformBuilder extends flutter_swiper.TransformBuilder$(dart.legacy(core.double)) {
    build(i, animationValue, widget) {
      let v = flutter_swiper._getValue(this.values, animationValue, i);
      return new basic.Opacity.new({opacity: v, child: widget, $creationLocationd_0dea112b090073317d4: C301 || CT.C301});
    }
  };
  (flutter_swiper.OpacityTransformBuilder.new = function(opts) {
    let values = opts && 'values' in opts ? opts.values : null;
    flutter_swiper.OpacityTransformBuilder.__proto__.new.call(this, {values: values});
    ;
  }).prototype = flutter_swiper.OpacityTransformBuilder.prototype;
  dart.addTypeTests(flutter_swiper.OpacityTransformBuilder);
  dart.addTypeCaches(flutter_swiper.OpacityTransformBuilder);
  dart.setMethodSignature(flutter_swiper.OpacityTransformBuilder, () => ({
    __proto__: dart.getMethods(flutter_swiper.OpacityTransformBuilder.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(core.int), dart.legacy(core.double), dart.legacy(framework.Widget)])
  }));
  dart.setLibraryUri(flutter_swiper.OpacityTransformBuilder, L0);
  var C307;
  var C308;
  var C306;
  var C305;
  flutter_swiper.RotateTransformBuilder = class RotateTransformBuilder extends flutter_swiper.TransformBuilder$(dart.legacy(core.double)) {
    build(i, animationValue, widget) {
      let v = flutter_swiper._getValue(this.values, animationValue, i);
      return new basic.Transform.rotate({angle: v, child: widget, $creationLocationd_0dea112b090073317d4: C305 || CT.C305});
    }
  };
  (flutter_swiper.RotateTransformBuilder.new = function(opts) {
    let values = opts && 'values' in opts ? opts.values : null;
    flutter_swiper.RotateTransformBuilder.__proto__.new.call(this, {values: values});
    ;
  }).prototype = flutter_swiper.RotateTransformBuilder.prototype;
  dart.addTypeTests(flutter_swiper.RotateTransformBuilder);
  dart.addTypeCaches(flutter_swiper.RotateTransformBuilder);
  dart.setMethodSignature(flutter_swiper.RotateTransformBuilder, () => ({
    __proto__: dart.getMethods(flutter_swiper.RotateTransformBuilder.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(core.int), dart.legacy(core.double), dart.legacy(framework.Widget)])
  }));
  dart.setLibraryUri(flutter_swiper.RotateTransformBuilder, L0);
  var C311;
  var C312;
  var C310;
  var C309;
  flutter_swiper.TranslateTransformBuilder = class TranslateTransformBuilder extends flutter_swiper.TransformBuilder$(dart.legacy(ui.Offset)) {
    build(i, animationValue, widget) {
      let s = flutter_swiper._getOffsetValue(this.values, animationValue, i);
      return new basic.Transform.translate({offset: s, child: widget, $creationLocationd_0dea112b090073317d4: C309 || CT.C309});
    }
  };
  (flutter_swiper.TranslateTransformBuilder.new = function(opts) {
    let values = opts && 'values' in opts ? opts.values : null;
    flutter_swiper.TranslateTransformBuilder.__proto__.new.call(this, {values: values});
    ;
  }).prototype = flutter_swiper.TranslateTransformBuilder.prototype;
  dart.addTypeTests(flutter_swiper.TranslateTransformBuilder);
  dart.addTypeCaches(flutter_swiper.TranslateTransformBuilder);
  dart.setMethodSignature(flutter_swiper.TranslateTransformBuilder, () => ({
    __proto__: dart.getMethods(flutter_swiper.TranslateTransformBuilder.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(core.int), dart.legacy(core.double), dart.legacy(framework.Widget)])
  }));
  dart.setLibraryUri(flutter_swiper.TranslateTransformBuilder, L0);
  var builders = dart.privateName(flutter_swiper, "CustomLayoutOption.builders");
  var startIndex$ = dart.privateName(flutter_swiper, "CustomLayoutOption.startIndex");
  var stateCount$ = dart.privateName(flutter_swiper, "CustomLayoutOption.stateCount");
  flutter_swiper.CustomLayoutOption = class CustomLayoutOption extends core.Object {
    get builders() {
      return this[builders];
    }
    set builders(value) {
      super.builders = value;
    }
    get startIndex() {
      return this[startIndex$];
    }
    set startIndex(value) {
      super.startIndex = value;
    }
    get stateCount() {
      return this[stateCount$];
    }
    set stateCount(value) {
      super.stateCount = value;
    }
    addOpacity(values) {
      this.builders[$add](new flutter_swiper.OpacityTransformBuilder.new({values: values}));
      return this;
    }
    addTranslate(values) {
      this.builders[$add](new flutter_swiper.TranslateTransformBuilder.new({values: values}));
      return this;
    }
    addScale(values, alignment) {
      this.builders[$add](new flutter_swiper.ScaleTransformBuilder.new({values: values, alignment: alignment}));
      return this;
    }
    addRotate(values) {
      this.builders[$add](new flutter_swiper.RotateTransformBuilder.new({values: values}));
      return this;
    }
  };
  (flutter_swiper.CustomLayoutOption.new = function(opts) {
    let stateCount = opts && 'stateCount' in opts ? opts.stateCount : null;
    let startIndex = opts && 'startIndex' in opts ? opts.startIndex : null;
    this[builders] = JSArrayOfTransformBuilderL().of([]);
    this[stateCount$] = stateCount;
    this[startIndex$] = startIndex;
    if (!(startIndex != null)) dart.assertFailed(stateCount != null, L1, 1777, 16, "startIndex != null");
    ;
  }).prototype = flutter_swiper.CustomLayoutOption.prototype;
  dart.addTypeTests(flutter_swiper.CustomLayoutOption);
  dart.addTypeCaches(flutter_swiper.CustomLayoutOption);
  dart.setMethodSignature(flutter_swiper.CustomLayoutOption, () => ({
    __proto__: dart.getMethods(flutter_swiper.CustomLayoutOption.__proto__),
    addOpacity: dart.fnType(dart.legacy(flutter_swiper.CustomLayoutOption), [dart.legacy(core.List$(dart.legacy(core.double)))]),
    addTranslate: dart.fnType(dart.legacy(flutter_swiper.CustomLayoutOption), [dart.legacy(core.List$(dart.legacy(ui.Offset)))]),
    addScale: dart.fnType(dart.legacy(flutter_swiper.CustomLayoutOption), [dart.legacy(core.List$(dart.legacy(core.double))), dart.legacy(alignment$.Alignment)]),
    addRotate: dart.fnType(dart.legacy(flutter_swiper.CustomLayoutOption), [dart.legacy(core.List$(dart.legacy(core.double)))])
  }));
  dart.setLibraryUri(flutter_swiper.CustomLayoutOption, L0);
  dart.setFieldSignature(flutter_swiper.CustomLayoutOption, () => ({
    __proto__: dart.getFields(flutter_swiper.CustomLayoutOption.__proto__),
    builders: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(flutter_swiper.TransformBuilder)))),
    startIndex: dart.finalFieldType(dart.legacy(core.int)),
    stateCount: dart.finalFieldType(dart.legacy(core.int))
  }));
  flutter_swiper._CustomLayoutSwiper = class _CustomLayoutSwiper extends flutter_swiper._SubSwiper {
    createState() {
      return new flutter_swiper._CustomLayoutState.new();
    }
  };
  (flutter_swiper._CustomLayoutSwiper.new = function(opts) {
    let option = opts && 'option' in opts ? opts.option : null;
    let itemWidth = opts && 'itemWidth' in opts ? opts.itemWidth : null;
    let loop = opts && 'loop' in opts ? opts.loop : null;
    let itemHeight = opts && 'itemHeight' in opts ? opts.itemHeight : null;
    let onIndexChanged = opts && 'onIndexChanged' in opts ? opts.onIndexChanged : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let curve = opts && 'curve' in opts ? opts.curve : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let index = opts && 'index' in opts ? opts.index : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.option = option;
    if (!(option != null)) dart.assertFailed(null, L1, 1818, 16, "option != null");
    flutter_swiper._CustomLayoutSwiper.__proto__.new.call(this, {loop: loop, onIndexChanged: onIndexChanged, itemWidth: itemWidth, itemHeight: itemHeight, key: key, itemBuilder: itemBuilder, curve: curve, duration: duration, index: index, itemCount: itemCount, controller: controller, scrollDirection: scrollDirection, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = flutter_swiper._CustomLayoutSwiper.prototype;
  dart.addTypeTests(flutter_swiper._CustomLayoutSwiper);
  dart.addTypeCaches(flutter_swiper._CustomLayoutSwiper);
  dart.setMethodSignature(flutter_swiper._CustomLayoutSwiper, () => ({
    __proto__: dart.getMethods(flutter_swiper._CustomLayoutSwiper.__proto__),
    createState: dart.fnType(dart.legacy(framework.State$(dart.legacy(framework.StatefulWidget))), [])
  }));
  dart.setLibraryUri(flutter_swiper._CustomLayoutSwiper, L0);
  dart.setFieldSignature(flutter_swiper._CustomLayoutSwiper, () => ({
    __proto__: dart.getFields(flutter_swiper._CustomLayoutSwiper.__proto__),
    option: dart.finalFieldType(dart.legacy(flutter_swiper.CustomLayoutOption))
  }));
  var C315;
  var C316;
  var C317;
  var C314;
  var C313;
  flutter_swiper._CustomLayoutState = class _CustomLayoutState extends flutter_swiper._CustomLayoutStateBase$(dart.legacy(flutter_swiper._CustomLayoutSwiper)) {
    didChangeDependencies() {
      super.didChangeDependencies();
      this[_startIndex] = this.widget.option.startIndex;
      this[_animationCount] = this.widget.option.stateCount;
    }
    didUpdateWidget(oldWidget) {
      _CustomLayoutSwiperL().as(oldWidget);
      this[_startIndex] = this.widget.option.startIndex;
      this[_animationCount] = this.widget.option.stateCount;
      super.didUpdateWidget(oldWidget);
    }
    [_buildItem](index, realIndex, animationValue) {
      let t2, t2$, t4, t3, t2$0;
      let builders = this.widget.option.builders;
      let child = new basic.SizedBox.new({width: (t2 = this.widget.itemWidth, t2 == null ? 1 / 0 : t2), height: (t2$ = this.widget.itemHeight, t2$ == null ? 1 / 0 : t2$), child: (t2$0 = this.widget, t3 = this.context, t4 = realIndex, t2$0.itemBuilder(t3, t4)), $creationLocationd_0dea112b090073317d4: C313 || CT.C313});
      for (let i = dart.notNull(builders[$length]) - 1; i >= 0; i = i - 1) {
        let builder = builders[$_get](i);
        child = builder.build(index, animationValue, child);
      }
      return child;
    }
  };
  (flutter_swiper._CustomLayoutState.new = function() {
    flutter_swiper._CustomLayoutState.__proto__.new.call(this);
    ;
  }).prototype = flutter_swiper._CustomLayoutState.prototype;
  dart.addTypeTests(flutter_swiper._CustomLayoutState);
  dart.addTypeCaches(flutter_swiper._CustomLayoutState);
  dart.setMethodSignature(flutter_swiper._CustomLayoutState, () => ({
    __proto__: dart.getMethods(flutter_swiper._CustomLayoutState.__proto__),
    [_buildItem]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(core.int), dart.legacy(core.int), dart.legacy(core.double)])
  }));
  dart.setLibraryUri(flutter_swiper._CustomLayoutState, L0);
  flutter_swiper._getValue = function _getValue(values, animationValue, index) {
    let s = values[$_get](index);
    if (dart.notNull(animationValue) >= 0.5) {
      if (dart.notNull(index) < dart.notNull(values[$length]) - 1) {
        s = dart.notNull(s) + (dart.notNull(values[$_get](dart.notNull(index) + 1)) - dart.notNull(s)) * (dart.notNull(animationValue) - 0.5) * 2.0;
      }
    } else {
      if (index !== 0) {
        s = dart.notNull(s) - (dart.notNull(s) - dart.notNull(values[$_get](dart.notNull(index) - 1))) * (0.5 - dart.notNull(animationValue)) * 2.0;
      }
    }
    return s;
  };
  flutter_swiper._getOffsetValue = function _getOffsetValue(values, animationValue, index) {
    let s = values[$_get](index);
    let dx = s.dx;
    let dy = s.dy;
    if (dart.notNull(animationValue) >= 0.5) {
      if (dart.notNull(index) < dart.notNull(values[$length]) - 1) {
        dx = dart.notNull(dx) + (dart.notNull(values[$_get](dart.notNull(index) + 1).dx) - dart.notNull(dx)) * (dart.notNull(animationValue) - 0.5) * 2.0;
        dy = dart.notNull(dy) + (dart.notNull(values[$_get](dart.notNull(index) + 1).dy) - dart.notNull(dy)) * (dart.notNull(animationValue) - 0.5) * 2.0;
      }
    } else {
      if (index !== 0) {
        dx = dart.notNull(dx) - (dart.notNull(dx) - dart.notNull(values[$_get](dart.notNull(index) - 1).dx)) * (0.5 - dart.notNull(animationValue)) * 2.0;
        dy = dart.notNull(dy) - (dart.notNull(dy) - dart.notNull(values[$_get](dart.notNull(index) - 1).dy)) * (0.5 - dart.notNull(animationValue)) * 2.0;
      }
    }
    return new ui.Offset.new(dx, dy);
  };
  dart.defineLazy(flutter_swiper, {
    /*flutter_swiper.kDefaultAutoplayDelayMs*/get kDefaultAutoplayDelayMs() {
      return 3000;
    },
    /*flutter_swiper.kDefaultAutoplayTransactionDuration*/get kDefaultAutoplayTransactionDuration() {
      return 300;
    },
    /*flutter_swiper.kMaxValue*/get kMaxValue() {
      return 2000000000;
    },
    /*flutter_swiper.kMiddleValue*/get kMiddleValue() {
      return 1000000000;
    }
  }, true);
  dart.trackLibraries("packages/CabBookFlutterTemplate/utils/flutter_swiper", {
    "package:CabBookFlutterTemplate/utils/flutter_swiper.dart": flutter_swiper
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flutter_swiper.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwBmD;;qDAA9C;;;;EAA8C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAItC;;;;;;IAGE;;;;;;IAGA;;;;;;IAGA;;;;;;IAEA;;;;;;IAGc;;;;;;IAIL;;;;;;IAGZ;;;;;;IAEc;;;;;;IAGb;;;;;;IAGD;;;;;;IAGC;;;;;;IAGD;;;;;;IAGC;;;;;;IAGC;;;;;;IAGD;;;;;;IAKD;;;;;;IAGQ;;;;;;IAGC;;;;;;IAGA;;;;;;IAGM;;;;;;IAGF;;;;;;IAEH;;;;;;IAGP;;;;;;IAGM;;;;;;IAGM;;;;;;IAGZ;;;;;;IAGA;;;;;;IAEa;;;;;;;UAmDX;UACR;UACW;UACZ;UACC;UACA;UACD;UACc;UACd;UACQ;UACP;UACC;UACD;UACQ;UACA;UACM;UACF;UACb;UACe;UACL;UACP;UACA;UACA;UACA;UACA;UACF;UACE;;AAEP,YAAO,AAAS,QAAD,IAAI,yBAAM;AAEzB,YAAW,6CACM,WAAW,sBACJ,kBAAkB,mBACrB,eAAe,kBAChB,cAAc,oBACZ,gBAAgB,cACtB,UAAU,aACX,SAAS,SACb,KAAK,SACL,KAAK,YACF,QAAQ,iBACH,aAAa,gCACE,4BAA4B,YAChD,QAAQ,kBACF,cAAc,SACvB,KAAK,SACL,KAAK,SACL,KAAK,mBACK,eAAe,cACpB,UAAU,WACb,OAAO,cACJ,UAAU,QAChB,IAAI,WACD,OAAO,WACP,OAAO,OACX,GAAG,eACK,SAAc,SAAa,UAC/B,AAAQ,QAAA,QAAC,KAAK,gDAEZ,AAAS,QAAD;IACzB;;UAGkB;UACX;UACc;UACD;UACb;UACD;UACC;UACA;UACD;UACc;UACd;UACQ;UACP;UACC;UACD;UACQ;UACA;UACM;UACF;UACb;UACU;UACP;UACA;UACA;UACA;UACA;UACF;UACE;;AAEP,YAAW,6CACM,WAAW,sBACJ,kBAAkB,mBACrB,eAAe,kBAChB,cAAc,oBACZ,gBAAgB,cACtB,UAAU,aACX,SAAS,SACb,KAAK,SACL,KAAK,YACF,QAAQ,iBACH,aAAa,gCACE,4BAA4B,YAChD,QAAQ,kBACF,cAAc,SACvB,KAAK,SACL,KAAK,SACL,KAAK,OACP,GAAG,mBACS,eAAe,cACpB,UAAU,WACb,OAAO,cACJ,UAAU,QAChB,IAAI,WACD,OAAO,WACP,OAAO,eACH,SAAc,SAAa,UAC/B,AAAO,OAAA,CAAC,OAAO,EAAE,AAAI,IAAA,QAAC,KAAK,GAAG,KAAK,gDAEjC,AAAK,IAAD;IACrB;;AAIE,YAAW;IACb;;;QA/KO;QACA;QAGA;QACU;QACV;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACD;QACC;QACA;QAGA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;;IAjCA;IACA;IAGA;IACU;IACV;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IAEA;IACA;IAGA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;UACM,AAAoB,WAAT,IAAI,QAAQ,WAAW,IAAI,yBACzC;UAEM,WAAL,IAAI,eACC,IAAI,KACE,AAAO,MAAD,IAAiB,wCACtB,AAAgB,eAAD,IAAwB,oDACpC,AAAgB,eAAD,IAAwB,oDACvC,AAAgB,eAAD,IAAwB,8DAC9C,IAAI,KAAI,MAAM,IAAiB,wDACxC;AACJ,yDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"flutter_swiper.unsound.ddc.js"}');
  // Exports:
  return {
    utils__flutter_swiper: flutter_swiper
  };
}));

//# sourceMappingURL=flutter_swiper.unsound.ddc.js.map
