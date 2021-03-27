define(['dart_sdk', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation'], (function load__packages__CabBookFlutterTemplate__utils__transformer_page_view(dart_sdk, packages__flutter_web__src__foundation__assertions, packages__flutter_web_ui__ui, packages__flutter_web__animation, packages__flutter_web__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const change_notifier = packages__flutter_web__src__foundation__assertions.src__foundation__change_notifier;
  const ui = packages__flutter_web_ui__ui.ui;
  const custom_paint = packages__flutter_web__animation.src__rendering__custom_paint;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const image = packages__flutter_web__animation.src__widgets__image;
  const page_view = packages__flutter_web__animation.src__widgets__page_view;
  const scroll_physics = packages__flutter_web__animation.src__widgets__scroll_physics;
  const transitions = packages__flutter_web__animation.src__widgets__transitions;
  const container = packages__flutter_web__animation.src__widgets__container;
  const notification_listener = packages__flutter_web__animation.src__widgets__notification_listener;
  const scroll_notification = packages__flutter_web__animation.src__widgets__scroll_notification;
  const binding = packages__flutter_web__animation.src__widgets__binding;
  const box_fit = packages__flutter_web__src__animation__animation.src__painting__box_fit;
  const fractional_offset = packages__flutter_web__src__animation__animation.src__painting__fractional_offset;
  const basic_types = packages__flutter_web__src__animation__animation.src__painting__basic_types;
  const curves = packages__flutter_web__src__animation__animation.src__animation__curves;
  var transformer_page_view = Object.create(dart.library);
  var $_get = dartx._get;
  var $length = dartx.length;
  var $toInt = dartx.toInt;
  var $abs = dartx.abs;
  var $clamp = dartx.clamp;
  var $modulo = dartx['%'];
  var ColorPainterL = () => (ColorPainterL = dart.constFn(dart.legacy(transformer_page_view.ColorPainter)))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var BuildContextL = () => (BuildContextL = dart.constFn(dart.legacy(framework.BuildContext)))();
  var BuildContextLAndintLToWidgetL = () => (BuildContextLAndintLToWidgetL = dart.constFn(dart.fnType(WidgetL(), [BuildContextL(), intL()])))();
  var BuildContextLAndWidgetLToWidgetL = () => (BuildContextLAndWidgetLToWidgetL = dart.constFn(dart.fnType(WidgetL(), [BuildContextL(), WidgetL()])))();
  var ScrollNotificationL = () => (ScrollNotificationL = dart.constFn(dart.legacy(scroll_notification.ScrollNotification)))();
  var NotificationListenerOfScrollNotificationL = () => (NotificationListenerOfScrollNotificationL = dart.constFn(notification_listener.NotificationListener$(ScrollNotificationL())))();
  var ScrollStartNotificationL = () => (ScrollStartNotificationL = dart.constFn(dart.legacy(scroll_notification.ScrollStartNotification)))();
  var ScrollEndNotificationL = () => (ScrollEndNotificationL = dart.constFn(dart.legacy(scroll_notification.ScrollEndNotification)))();
  var boolL = () => (boolL = dart.constFn(dart.legacy(core.bool)))();
  var ScrollNotificationLToboolL = () => (ScrollNotificationLToboolL = dart.constFn(dart.fnType(boolL(), [ScrollNotificationL()])))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var TransformerPageViewL = () => (TransformerPageViewL = dart.constFn(dart.legacy(transformer_page_view.TransformerPageView)))();
  const CT = Object.create(null);
  var L1 = "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/transformer_page_view.dart";
  var L0 = "package:CabBookFlutterTemplate/utils/transformer_page_view.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 7,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], _LocationL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/transformer_page_view.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "offset",
        [_Location_column]: 9,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], _LocationL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 168,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/transformer_page_view.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "opacity",
        [_Location_column]: 7,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], _LocationL());
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/transformer_page_view.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 29,
        [_Location_line]: 182,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 13,
        [_Location_line]: 183,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], _LocationL());
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 182,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/transformer_page_view.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.25,
        [Cubic_b]: 0.1,
        [Cubic_a]: 0.25
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.horizontal",
        index: 0
      });
    },
    get C20() {
      return C20 = dart.constList([], _LocationL());
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 556,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/transformer_page_view.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 559,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/transformer_page_view.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 9,
        [_Location_line]: 548,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 9,
        [_Location_line]: 549,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], _LocationL());
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 547,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/transformer_page_view.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 7,
        [_Location_line]: 604,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 7,
        [_Location_line]: 605,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPageChanged",
        [_Location_column]: 7,
        [_Location_line]: 606,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 7,
        [_Location_line]: 607,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 7,
        [_Location_line]: 608,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 7,
        [_Location_line]: 609,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pageSnapping",
        [_Location_column]: 7,
        [_Location_line]: 610,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "reverse",
        [_Location_column]: 7,
        [_Location_line]: 611,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35], _LocationL());
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 603,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/transformer_page_view.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onNotification",
        [_Location_column]: 9,
        [_Location_line]: 617,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 630,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38, C39 || CT.C39], _LocationL());
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 616,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/transformer_page_view.dart"
      });
    }
  }, false);
  var _completer = dart.privateName(transformer_page_view, "_completer");
  var index = dart.privateName(transformer_page_view, "IndexController.index");
  var animation = dart.privateName(transformer_page_view, "IndexController.animation");
  var event = dart.privateName(transformer_page_view, "IndexController.event");
  transformer_page_view.IndexController = class IndexController extends change_notifier.ChangeNotifier {
    get index() {
      return this[index];
    }
    set index(value) {
      this[index] = value;
    }
    get animation() {
      return this[animation];
    }
    set animation(value) {
      this[animation] = value;
    }
    get event() {
      return this[event];
    }
    set event(value) {
      this[event] = value;
    }
    move(index, opts) {
      let t0;
      let animation = opts && 'animation' in opts ? opts.animation : true;
      this.animation = (t0 = animation, t0 == null ? true : t0);
      this.index = index;
      this.event = 0;
      this[_completer] = async.Completer.new();
      this.notifyListeners();
      return this[_completer].future;
    }
    next(opts) {
      let t0;
      let animation = opts && 'animation' in opts ? opts.animation : true;
      this.event = 1;
      this.animation = (t0 = animation, t0 == null ? true : t0);
      this[_completer] = async.Completer.new();
      this.notifyListeners();
      return this[_completer].future;
    }
    previous(opts) {
      let t0;
      let animation = opts && 'animation' in opts ? opts.animation : true;
      this.event = -1;
      this.animation = (t0 = animation, t0 == null ? true : t0);
      this[_completer] = async.Completer.new();
      this.notifyListeners();
      return this[_completer].future;
    }
    complete() {
      if (!dart.test(this[_completer].isCompleted)) {
        this[_completer].complete();
      }
    }
  };
  (transformer_page_view.IndexController.new = function() {
    this[_completer] = null;
    this[index] = null;
    this[animation] = null;
    this[event] = null;
    transformer_page_view.IndexController.__proto__.new.call(this);
    ;
  }).prototype = transformer_page_view.IndexController.prototype;
  dart.addTypeTests(transformer_page_view.IndexController);
  dart.addTypeCaches(transformer_page_view.IndexController);
  dart.setMethodSignature(transformer_page_view.IndexController, () => ({
    __proto__: dart.getMethods(transformer_page_view.IndexController.__proto__),
    move: dart.fnType(dart.legacy(async.Future), [dart.legacy(core.int)], {animation: dart.legacy(core.bool)}, {}),
    next: dart.fnType(dart.legacy(async.Future), [], {animation: dart.legacy(core.bool)}, {}),
    previous: dart.fnType(dart.legacy(async.Future), [], {animation: dart.legacy(core.bool)}, {}),
    complete: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(transformer_page_view.IndexController, L0);
  dart.setFieldSignature(transformer_page_view.IndexController, () => ({
    __proto__: dart.getFields(transformer_page_view.IndexController.__proto__),
    [_completer]: dart.fieldType(dart.legacy(async.Completer)),
    index: dart.fieldType(dart.legacy(core.int)),
    animation: dart.fieldType(dart.legacy(core.bool)),
    event: dart.fieldType(dart.legacy(core.int))
  }));
  dart.defineLazy(transformer_page_view.IndexController, {
    /*transformer_page_view.IndexController.NEXT*/get NEXT() {
      return 1;
    },
    /*transformer_page_view.IndexController.PREVIOUS*/get PREVIOUS() {
      return -1;
    },
    /*transformer_page_view.IndexController.MOVE*/get MOVE() {
      return 0;
    }
  }, true);
  var _paint$ = dart.privateName(transformer_page_view, "_paint");
  var info$ = dart.privateName(transformer_page_view, "ColorPainter.info");
  var colors$ = dart.privateName(transformer_page_view, "ColorPainter.colors");
  transformer_page_view.ColorPainter = class ColorPainter extends custom_paint.CustomPainter {
    get info() {
      return this[info$];
    }
    set info(value) {
      super.info = value;
    }
    get colors() {
      return this[colors$];
    }
    set colors(value) {
      super.colors = value;
    }
    paint(canvas, size) {
      let index = this.info.fromIndex;
      this[_paint$].color = this.colors[$_get](index);
      canvas.drawRect(new ui.Rect.fromLTWH(0.0, 0.0, size.width, size.height), this[_paint$]);
      if (dart.test(this.info.done)) {
        return;
      }
      let alpha = null;
      let color = null;
      let opacity = null;
      let position = this.info.position;
      if (dart.test(this.info.forward)) {
        if (dart.notNull(index) < dart.notNull(this.colors[$length]) - 1) {
          color = dart.notNull(this.colors[$_get](dart.notNull(index) + 1).value) & 16777215;
          opacity = dart.notNull(position) <= 0 ? -dart.notNull(position) / dart.notNull(this.info.viewportFraction) : 1 - dart.notNull(position) / dart.notNull(this.info.viewportFraction);
          if (dart.notNull(opacity) > 1) {
            opacity = dart.notNull(opacity) - 1.0;
          }
          if (dart.notNull(opacity) < 0) {
            opacity = dart.notNull(opacity) + 1.0;
          }
          alpha = (255 * dart.notNull(opacity))[$toInt]();
          this[_paint$].color = new ui.Color.new((dart.notNull(alpha) << 24 | dart.notNull(color)) >>> 0);
          canvas.drawRect(new ui.Rect.fromLTWH(0.0, 0.0, size.width, size.height), this[_paint$]);
        }
      } else {
        if (dart.notNull(index) > 0) {
          color = dart.notNull(this.colors[$_get](dart.notNull(index) - 1).value) & 16777215;
          opacity = dart.notNull(position) > 0 ? dart.notNull(position) / dart.notNull(this.info.viewportFraction) : 1 + dart.notNull(position) / dart.notNull(this.info.viewportFraction);
          if (dart.notNull(opacity) > 1) {
            opacity = dart.notNull(opacity) - 1.0;
          }
          if (dart.notNull(opacity) < 0) {
            opacity = dart.notNull(opacity) + 1.0;
          }
          alpha = (255 * dart.notNull(opacity))[$toInt]();
          this[_paint$].color = new ui.Color.new((dart.notNull(alpha) << 24 | dart.notNull(color)) >>> 0);
          canvas.drawRect(new ui.Rect.fromLTWH(0.0, 0.0, size.width, size.height), this[_paint$]);
        }
      }
    }
    shouldRepaint(oldDelegate) {
      ColorPainterL().as(oldDelegate);
      return !dart.equals(oldDelegate.info, this.info);
    }
  };
  (transformer_page_view.ColorPainter.new = function(_paint, info, colors) {
    this[_paint$] = _paint;
    this[info$] = info;
    this[colors$] = colors;
    transformer_page_view.ColorPainter.__proto__.new.call(this);
    ;
  }).prototype = transformer_page_view.ColorPainter.prototype;
  dart.addTypeTests(transformer_page_view.ColorPainter);
  dart.addTypeCaches(transformer_page_view.ColorPainter);
  dart.setMethodSignature(transformer_page_view.ColorPainter, () => ({
    __proto__: dart.getMethods(transformer_page_view.ColorPainter.__proto__),
    paint: dart.fnType(dart.void, [dart.legacy(ui.Canvas), dart.legacy(ui.Size)]),
    shouldRepaint: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(transformer_page_view.ColorPainter, L0);
  dart.setFieldSignature(transformer_page_view.ColorPainter, () => ({
    __proto__: dart.getFields(transformer_page_view.ColorPainter.__proto__),
    [_paint$]: dart.finalFieldType(dart.legacy(ui.Paint)),
    info: dart.finalFieldType(dart.legacy(transformer_page_view.TransformInfo)),
    colors: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(ui.Color))))
  }));
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C2;
  var C3;
  var C1;
  var C0;
  var child$ = dart.privateName(transformer_page_view, "ParallaxColor.child");
  var colors$0 = dart.privateName(transformer_page_view, "ParallaxColor.colors");
  var info$0 = dart.privateName(transformer_page_view, "ParallaxColor.info");
  transformer_page_view.ParallaxColor = class ParallaxColor extends framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get colors() {
      return this[colors$0];
    }
    set colors(value) {
      super.colors = value;
    }
    get info() {
      return this[info$0];
    }
    set info(value) {
      super.info = value;
    }
    createState() {
      return new transformer_page_view._ParallaxColorState.new();
    }
  };
  (transformer_page_view.ParallaxColor.new = function(opts) {
    let colors = opts && 'colors' in opts ? opts.colors : null;
    let info = opts && 'info' in opts ? opts.info : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[colors$0] = colors;
    this[info$0] = info;
    this[child$] = child;
    transformer_page_view.ParallaxColor.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = transformer_page_view.ParallaxColor.prototype;
  dart.addTypeTests(transformer_page_view.ParallaxColor);
  dart.addTypeCaches(transformer_page_view.ParallaxColor);
  dart.setMethodSignature(transformer_page_view.ParallaxColor, () => ({
    __proto__: dart.getMethods(transformer_page_view.ParallaxColor.__proto__),
    createState: dart.fnType(dart.legacy(framework.State$(dart.legacy(framework.StatefulWidget))), [])
  }));
  dart.setLibraryUri(transformer_page_view.ParallaxColor, L0);
  dart.setFieldSignature(transformer_page_view.ParallaxColor, () => ({
    __proto__: dart.getFields(transformer_page_view.ParallaxColor.__proto__),
    child: dart.finalFieldType(dart.legacy(framework.Widget)),
    colors: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(ui.Color)))),
    info: dart.finalFieldType(dart.legacy(transformer_page_view.TransformInfo))
  }));
  transformer_page_view._ParallaxColorState = class _ParallaxColorState extends framework.State$(dart.legacy(transformer_page_view.ParallaxColor)) {
    build(context) {
      return new basic.CustomPaint.new({painter: new transformer_page_view.ColorPainter.new(this.paint, this.widget.info, this.widget.colors), child: this.widget.child, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (transformer_page_view._ParallaxColorState.new = function() {
    this.paint = new ui.Paint.new();
    transformer_page_view._ParallaxColorState.__proto__.new.call(this);
    ;
  }).prototype = transformer_page_view._ParallaxColorState.prototype;
  dart.addTypeTests(transformer_page_view._ParallaxColorState);
  dart.addTypeCaches(transformer_page_view._ParallaxColorState);
  dart.setMethodSignature(transformer_page_view._ParallaxColorState, () => ({
    __proto__: dart.getMethods(transformer_page_view._ParallaxColorState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(transformer_page_view._ParallaxColorState, L0);
  dart.setFieldSignature(transformer_page_view._ParallaxColorState, () => ({
    __proto__: dart.getFields(transformer_page_view._ParallaxColorState.__proto__),
    paint: dart.fieldType(dart.legacy(ui.Paint))
  }));
  var C6;
  var C7;
  var C5;
  var C4;
  var C10;
  var C11;
  var C9;
  var C8;
  var child$0 = dart.privateName(transformer_page_view, "ParallaxContainer.child");
  var position$ = dart.privateName(transformer_page_view, "ParallaxContainer.position");
  var translationFactor$ = dart.privateName(transformer_page_view, "ParallaxContainer.translationFactor");
  var opacityFactor$ = dart.privateName(transformer_page_view, "ParallaxContainer.opacityFactor");
  transformer_page_view.ParallaxContainer = class ParallaxContainer extends framework.StatelessWidget {
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get translationFactor() {
      return this[translationFactor$];
    }
    set translationFactor(value) {
      super.translationFactor = value;
    }
    get opacityFactor() {
      return this[opacityFactor$];
    }
    set opacityFactor(value) {
      super.opacityFactor = value;
    }
    build(context) {
      return new basic.Opacity.new({opacity: (1 - this.position[$abs]())[$clamp](0.0, 1.0) * dart.notNull(this.opacityFactor), child: new basic.Transform.translate({offset: new ui.Offset.new(dart.notNull(this.position) * dart.notNull(this.translationFactor), 0.0), child: this.child, $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8});
    }
  };
  (transformer_page_view.ParallaxContainer.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let position = opts && 'position' in opts ? opts.position : null;
    let translationFactor = opts && 'translationFactor' in opts ? opts.translationFactor : 100;
    let opacityFactor = opts && 'opacityFactor' in opts ? opts.opacityFactor : 1;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$0] = child;
    this[position$] = position;
    this[translationFactor$] = translationFactor;
    this[opacityFactor$] = opacityFactor;
    if (!(position != null)) dart.assertFailed(null, L1, 161, 16, "position != null");
    if (!(translationFactor != null)) dart.assertFailed(null, L1, 162, 16, "translationFactor != null");
    transformer_page_view.ParallaxContainer.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = transformer_page_view.ParallaxContainer.prototype;
  dart.addTypeTests(transformer_page_view.ParallaxContainer);
  dart.addTypeCaches(transformer_page_view.ParallaxContainer);
  dart.setMethodSignature(transformer_page_view.ParallaxContainer, () => ({
    __proto__: dart.getMethods(transformer_page_view.ParallaxContainer.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(transformer_page_view.ParallaxContainer, L0);
  dart.setFieldSignature(transformer_page_view.ParallaxContainer, () => ({
    __proto__: dart.getFields(transformer_page_view.ParallaxContainer.__proto__),
    child: dart.finalFieldType(dart.legacy(framework.Widget)),
    position: dart.finalFieldType(dart.legacy(core.double)),
    translationFactor: dart.finalFieldType(dart.legacy(core.double)),
    opacityFactor: dart.finalFieldType(dart.legacy(core.double))
  }));
  var C14;
  var C15;
  var C16;
  var C13;
  var C12;
  var image$ = dart.privateName(transformer_page_view, "ParallaxImage.image");
  var imageFactor$ = dart.privateName(transformer_page_view, "ParallaxImage.imageFactor");
  transformer_page_view.ParallaxImage = class ParallaxImage extends framework.StatelessWidget {
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get imageFactor() {
      return this[imageFactor$];
    }
    set imageFactor(value) {
      super.imageFactor = value;
    }
    build(context) {
      return this.image;
    }
  };
  (transformer_page_view.ParallaxImage.asset = function(name, opts) {
    let position = opts && 'position' in opts ? opts.position : null;
    let imageFactor = opts && 'imageFactor' in opts ? opts.imageFactor : 0.3;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[imageFactor$] = imageFactor;
    if (!(imageFactor != null)) dart.assertFailed(null, L1, 181, 16, "imageFactor != null");
    this[image$] = new image.Image.asset(name, {fit: box_fit.BoxFit.cover, alignment: new fractional_offset.FractionalOffset.new(0.5 + dart.notNull(position) * dart.notNull(imageFactor), 0.5), $creationLocationd_0dea112b090073317d4: C12 || CT.C12});
    transformer_page_view.ParallaxImage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = transformer_page_view.ParallaxImage.prototype;
  dart.addTypeTests(transformer_page_view.ParallaxImage);
  dart.addTypeCaches(transformer_page_view.ParallaxImage);
  dart.setMethodSignature(transformer_page_view.ParallaxImage, () => ({
    __proto__: dart.getMethods(transformer_page_view.ParallaxImage.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(transformer_page_view.ParallaxImage, L0);
  dart.setFieldSignature(transformer_page_view.ParallaxImage, () => ({
    __proto__: dart.getFields(transformer_page_view.ParallaxImage.__proto__),
    image: dart.finalFieldType(dart.legacy(image.Image)),
    imageFactor: dart.finalFieldType(dart.legacy(core.double))
  }));
  var width$ = dart.privateName(transformer_page_view, "TransformInfo.width");
  var height$ = dart.privateName(transformer_page_view, "TransformInfo.height");
  var position$0 = dart.privateName(transformer_page_view, "TransformInfo.position");
  var index$ = dart.privateName(transformer_page_view, "TransformInfo.index");
  var activeIndex$ = dart.privateName(transformer_page_view, "TransformInfo.activeIndex");
  var fromIndex$ = dart.privateName(transformer_page_view, "TransformInfo.fromIndex");
  var forward$ = dart.privateName(transformer_page_view, "TransformInfo.forward");
  var done$ = dart.privateName(transformer_page_view, "TransformInfo.done");
  var viewportFraction$ = dart.privateName(transformer_page_view, "TransformInfo.viewportFraction");
  var scrollDirection$ = dart.privateName(transformer_page_view, "TransformInfo.scrollDirection");
  transformer_page_view.TransformInfo = class TransformInfo extends core.Object {
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get position() {
      return this[position$0];
    }
    set position(value) {
      super.position = value;
    }
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get activeIndex() {
      return this[activeIndex$];
    }
    set activeIndex(value) {
      super.activeIndex = value;
    }
    get fromIndex() {
      return this[fromIndex$];
    }
    set fromIndex(value) {
      super.fromIndex = value;
    }
    get forward() {
      return this[forward$];
    }
    set forward(value) {
      super.forward = value;
    }
    get done() {
      return this[done$];
    }
    set done(value) {
      super.done = value;
    }
    get viewportFraction() {
      return this[viewportFraction$];
    }
    set viewportFraction(value) {
      super.viewportFraction = value;
    }
    get scrollDirection() {
      return this[scrollDirection$];
    }
    set scrollDirection(value) {
      super.scrollDirection = value;
    }
  };
  (transformer_page_view.TransformInfo.new = function(opts) {
    let index = opts && 'index' in opts ? opts.index : null;
    let position = opts && 'position' in opts ? opts.position : null;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let activeIndex = opts && 'activeIndex' in opts ? opts.activeIndex : null;
    let fromIndex = opts && 'fromIndex' in opts ? opts.fromIndex : null;
    let forward = opts && 'forward' in opts ? opts.forward : null;
    let done = opts && 'done' in opts ? opts.done : null;
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : null;
    this[index$] = index;
    this[position$0] = position;
    this[width$] = width;
    this[height$] = height;
    this[activeIndex$] = activeIndex;
    this[fromIndex$] = fromIndex;
    this[forward$] = forward;
    this[done$] = done;
    this[viewportFraction$] = viewportFraction;
    this[scrollDirection$] = scrollDirection;
    ;
  }).prototype = transformer_page_view.TransformInfo.prototype;
  dart.addTypeTests(transformer_page_view.TransformInfo);
  dart.addTypeCaches(transformer_page_view.TransformInfo);
  dart.setLibraryUri(transformer_page_view.TransformInfo, L0);
  dart.setFieldSignature(transformer_page_view.TransformInfo, () => ({
    __proto__: dart.getFields(transformer_page_view.TransformInfo.__proto__),
    width: dart.finalFieldType(dart.legacy(core.double)),
    height: dart.finalFieldType(dart.legacy(core.double)),
    position: dart.finalFieldType(dart.legacy(core.double)),
    index: dart.finalFieldType(dart.legacy(core.int)),
    activeIndex: dart.finalFieldType(dart.legacy(core.int)),
    fromIndex: dart.finalFieldType(dart.legacy(core.int)),
    forward: dart.finalFieldType(dart.legacy(core.bool)),
    done: dart.finalFieldType(dart.legacy(core.bool)),
    viewportFraction: dart.finalFieldType(dart.legacy(core.double)),
    scrollDirection: dart.finalFieldType(dart.legacy(basic_types.Axis))
  }));
  var reverse$ = dart.privateName(transformer_page_view, "PageTransformer.reverse");
  transformer_page_view.PageTransformer = class PageTransformer extends core.Object {
    get reverse() {
      return this[reverse$];
    }
    set reverse(value) {
      super.reverse = value;
    }
  };
  (transformer_page_view.PageTransformer.new = function(opts) {
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    this[reverse$] = reverse;
    ;
  }).prototype = transformer_page_view.PageTransformer.prototype;
  dart.addTypeTests(transformer_page_view.PageTransformer);
  dart.addTypeCaches(transformer_page_view.PageTransformer);
  dart.setLibraryUri(transformer_page_view.PageTransformer, L0);
  dart.setFieldSignature(transformer_page_view.PageTransformer, () => ({
    __proto__: dart.getFields(transformer_page_view.PageTransformer.__proto__),
    reverse: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var builder$ = dart.privateName(transformer_page_view, "PageTransformerBuilder.builder");
  transformer_page_view.PageTransformerBuilder = class PageTransformerBuilder extends transformer_page_view.PageTransformer {
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    transform(child, info) {
      let t1, t0;
      t0 = child;
      t1 = info;
      return this.builder(t0, t1);
    }
  };
  (transformer_page_view.PageTransformerBuilder.new = function(opts) {
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    this[builder$] = builder;
    if (!(builder != null)) dart.assertFailed(null, L1, 277, 16, "builder != null");
    transformer_page_view.PageTransformerBuilder.__proto__.new.call(this, {reverse: reverse});
    ;
  }).prototype = transformer_page_view.PageTransformerBuilder.prototype;
  dart.addTypeTests(transformer_page_view.PageTransformerBuilder);
  dart.addTypeCaches(transformer_page_view.PageTransformerBuilder);
  dart.setMethodSignature(transformer_page_view.PageTransformerBuilder, () => ({
    __proto__: dart.getMethods(transformer_page_view.PageTransformerBuilder.__proto__),
    transform: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.Widget), dart.legacy(transformer_page_view.TransformInfo)])
  }));
  dart.setLibraryUri(transformer_page_view.PageTransformerBuilder, L0);
  dart.setFieldSignature(transformer_page_view.PageTransformerBuilder, () => ({
    __proto__: dart.getFields(transformer_page_view.PageTransformerBuilder.__proto__),
    builder: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.Widget), dart.legacy(transformer_page_view.TransformInfo)])))
  }));
  var loop$ = dart.privateName(transformer_page_view, "TransformerPageController.loop");
  var itemCount$ = dart.privateName(transformer_page_view, "TransformerPageController.itemCount");
  var reverse$0 = dart.privateName(transformer_page_view, "TransformerPageController.reverse");
  transformer_page_view.TransformerPageController = class TransformerPageController extends page_view.PageController {
    get loop() {
      return this[loop$];
    }
    set loop(value) {
      super.loop = value;
    }
    get itemCount() {
      return this[itemCount$];
    }
    set itemCount(value) {
      super.itemCount = value;
    }
    get reverse() {
      return this[reverse$0];
    }
    set reverse(value) {
      super.reverse = value;
    }
    getRenderIndexFromRealIndex(index) {
      return intL().as(transformer_page_view.TransformerPageController._getRenderIndexFromRealIndex(index, this.loop, this.itemCount, this.reverse));
    }
    getRealItemCount() {
      if (this.itemCount === 0) return 0;
      return dart.test(this.loop) ? dart.notNull(this.itemCount) + 2000000000 : this.itemCount;
    }
    static _getRenderIndexFromRealIndex(index, loop, itemCount, reverse) {
      if (itemCount === 0) return 0;
      let renderIndex = null;
      if (dart.test(loop)) {
        renderIndex = dart.asNullableInt(dart.notNull(index) - 1000000000);
        renderIndex = renderIndex[$modulo](itemCount);
        if (dart.notNull(renderIndex) < 0) {
          renderIndex = dart.notNull(renderIndex) + dart.notNull(itemCount);
        }
      } else {
        renderIndex = dart.asNullableInt(index);
      }
      if (dart.test(reverse)) {
        renderIndex = dart.notNull(itemCount) - dart.notNull(renderIndex) - 1;
      }
      return renderIndex;
    }
    get realPage() {
      let page = null;
      if (this.position.maxScrollExtent == null || this.position.minScrollExtent == null) {
        page = 0.0;
      } else {
        page = super.page;
      }
      return page;
    }
    static _getRenderPageFromRealPage(page, loop, itemCount, reverse) {
      let renderPage = null;
      if (dart.test(loop)) {
        renderPage = dart.notNull(page) - 1000000000;
        renderPage = renderPage[$modulo](itemCount);
        if (dart.notNull(renderPage) < 0) {
          renderPage = dart.notNull(renderPage) + dart.notNull(itemCount);
        }
      } else {
        renderPage = page;
      }
      if (dart.test(reverse)) {
        renderPage = dart.notNull(itemCount) - dart.notNull(renderPage) - 1;
      }
      return renderPage;
    }
    get page() {
      return doubleL().as(dart.test(this.loop) ? transformer_page_view.TransformerPageController._getRenderPageFromRealPage(this.realPage, this.loop, this.itemCount, this.reverse) : this.realPage);
    }
    getRealIndexFromRenderIndex(index) {
      return transformer_page_view.TransformerPageController._getRealIndexFromRenderIndex(index, this.loop, this.itemCount, this.reverse);
    }
    static _getRealIndexFromRenderIndex(index, loop, itemCount, reverse) {
      let result = dart.asNullableInt(dart.test(reverse) ? dart.notNull(itemCount) - dart.notNull(index) - 1 : index);
      if (dart.test(loop)) {
        result = dart.notNull(result) + 1000000000;
      }
      return result;
    }
  };
  (transformer_page_view.TransformerPageController.new = function(opts) {
    let t0;
    let initialPage = opts && 'initialPage' in opts ? opts.initialPage : 0;
    let keepPage = opts && 'keepPage' in opts ? opts.keepPage : true;
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
    let loop = opts && 'loop' in opts ? opts.loop : false;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    this[loop$] = loop;
    this[itemCount$] = itemCount;
    this[reverse$0] = reverse;
    transformer_page_view.TransformerPageController.__proto__.new.call(this, {initialPage: transformer_page_view.TransformerPageController._getRealIndexFromRenderIndex((t0 = initialPage, t0 == null ? 0 : t0), loop, itemCount, reverse), keepPage: keepPage, viewportFraction: viewportFraction});
    ;
  }).prototype = transformer_page_view.TransformerPageController.prototype;
  dart.addTypeTests(transformer_page_view.TransformerPageController);
  dart.addTypeCaches(transformer_page_view.TransformerPageController);
  dart.setMethodSignature(transformer_page_view.TransformerPageController, () => ({
    __proto__: dart.getMethods(transformer_page_view.TransformerPageController.__proto__),
    getRenderIndexFromRealIndex: dart.fnType(dart.legacy(core.int), [dart.legacy(core.num)]),
    getRealItemCount: dart.fnType(dart.legacy(core.int), []),
    getRealIndexFromRenderIndex: dart.fnType(dart.legacy(core.int), [dart.legacy(core.num)])
  }));
  dart.setGetterSignature(transformer_page_view.TransformerPageController, () => ({
    __proto__: dart.getGetters(transformer_page_view.TransformerPageController.__proto__),
    realPage: dart.legacy(core.double)
  }));
  dart.setLibraryUri(transformer_page_view.TransformerPageController, L0);
  dart.setFieldSignature(transformer_page_view.TransformerPageController, () => ({
    __proto__: dart.getFields(transformer_page_view.TransformerPageController.__proto__),
    loop: dart.finalFieldType(dart.legacy(core.bool)),
    itemCount: dart.finalFieldType(dart.legacy(core.int)),
    reverse: dart.finalFieldType(dart.legacy(core.bool))
  }));
  var Cubic_d = dart.privateName(curves, "Cubic.d");
  var Cubic_c = dart.privateName(curves, "Cubic.c");
  var Cubic_b = dart.privateName(curves, "Cubic.b");
  var Cubic_a = dart.privateName(curves, "Cubic.a");
  var C17;
  var _name = dart.privateName(basic_types, "_name");
  var C18;
  var transformer$ = dart.privateName(transformer_page_view, "TransformerPageView.transformer");
  var scrollDirection$0 = dart.privateName(transformer_page_view, "TransformerPageView.scrollDirection");
  var physics$ = dart.privateName(transformer_page_view, "TransformerPageView.physics");
  var pageSnapping$ = dart.privateName(transformer_page_view, "TransformerPageView.pageSnapping");
  var onPageChanged$ = dart.privateName(transformer_page_view, "TransformerPageView.onPageChanged");
  var itemBuilder$ = dart.privateName(transformer_page_view, "TransformerPageView.itemBuilder");
  var controller$ = dart.privateName(transformer_page_view, "TransformerPageView.controller");
  var duration$ = dart.privateName(transformer_page_view, "TransformerPageView.duration");
  var curve$ = dart.privateName(transformer_page_view, "TransformerPageView.curve");
  var pageController$ = dart.privateName(transformer_page_view, "TransformerPageView.pageController");
  var loop$0 = dart.privateName(transformer_page_view, "TransformerPageView.loop");
  var itemCount$0 = dart.privateName(transformer_page_view, "TransformerPageView.itemCount");
  var viewportFraction$0 = dart.privateName(transformer_page_view, "TransformerPageView.viewportFraction");
  var index$0 = dart.privateName(transformer_page_view, "TransformerPageView.index");
  transformer_page_view.TransformerPageView = class TransformerPageView extends framework.StatefulWidget {
    get transformer() {
      return this[transformer$];
    }
    set transformer(value) {
      super.transformer = value;
    }
    get scrollDirection() {
      return this[scrollDirection$0];
    }
    set scrollDirection(value) {
      super.scrollDirection = value;
    }
    get physics() {
      return this[physics$];
    }
    set physics(value) {
      super.physics = value;
    }
    get pageSnapping() {
      return this[pageSnapping$];
    }
    set pageSnapping(value) {
      super.pageSnapping = value;
    }
    get onPageChanged() {
      return this[onPageChanged$];
    }
    set onPageChanged(value) {
      super.onPageChanged = value;
    }
    get itemBuilder() {
      return this[itemBuilder$];
    }
    set itemBuilder(value) {
      super.itemBuilder = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      super.curve = value;
    }
    get pageController() {
      return this[pageController$];
    }
    set pageController(value) {
      super.pageController = value;
    }
    get loop() {
      return this[loop$0];
    }
    set loop(value) {
      super.loop = value;
    }
    get itemCount() {
      return this[itemCount$0];
    }
    set itemCount(value) {
      super.itemCount = value;
    }
    get viewportFraction() {
      return this[viewportFraction$0];
    }
    set viewportFraction(value) {
      super.viewportFraction = value;
    }
    get index() {
      return this[index$0];
    }
    set index(value) {
      super.index = value;
    }
    static children(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let index = opts && 'index' in opts ? opts.index : null;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : C17 || CT.C17;
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
      let loop = opts && 'loop' in opts ? opts.loop : false;
      let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C18 || CT.C18;
      let physics = opts && 'physics' in opts ? opts.physics : null;
      let pageSnapping = opts && 'pageSnapping' in opts ? opts.pageSnapping : true;
      let onPageChanged = opts && 'onPageChanged' in opts ? opts.onPageChanged : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let transformer = opts && 'transformer' in opts ? opts.transformer : null;
      let children = opts && 'children' in opts ? opts.children : null;
      let pageController = opts && 'pageController' in opts ? opts.pageController : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(children != null)) dart.assertFailed(null, L1, 479, 12, "children != null");
      return new transformer_page_view.TransformerPageView.new({itemCount: children[$length], itemBuilder: dart.fn((context, index) => children[$_get](index), BuildContextLAndintLToWidgetL()), pageController: pageController, transformer: transformer, pageSnapping: pageSnapping, key: key, index: index, duration: duration, curve: curve, viewportFraction: viewportFraction, scrollDirection: scrollDirection, physics: physics, onPageChanged: onPageChanged, controller: controller, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    }
    createState() {
      return new transformer_page_view._TransformerPageViewState.new();
    }
    static getRealIndexFromRenderIndex(opts) {
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let index = opts && 'index' in opts ? opts.index : null;
      let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
      let loop = opts && 'loop' in opts ? opts.loop : null;
      let initPage = dart.test(reverse) ? dart.notNull(itemCount) - dart.notNull(index) - 1 : index;
      if (dart.test(loop)) {
        initPage = dart.notNull(initPage) + 1000000000;
      }
      return initPage;
    }
    static createPageController(opts) {
      let reverse = opts && 'reverse' in opts ? opts.reverse : null;
      let index = opts && 'index' in opts ? opts.index : null;
      let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
      let loop = opts && 'loop' in opts ? opts.loop : null;
      let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : null;
      return new page_view.PageController.new({initialPage: transformer_page_view.TransformerPageView.getRealIndexFromRenderIndex({reverse: reverse, index: index, itemCount: itemCount, loop: loop}), viewportFraction: viewportFraction});
    }
  };
  (transformer_page_view.TransformerPageView.new = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let index = opts && 'index' in opts ? opts.index : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let curve = opts && 'curve' in opts ? opts.curve : C17 || CT.C17;
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 1;
    let loop = opts && 'loop' in opts ? opts.loop : false;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C18 || CT.C18;
    let physics = opts && 'physics' in opts ? opts.physics : null;
    let pageSnapping = opts && 'pageSnapping' in opts ? opts.pageSnapping : true;
    let onPageChanged = opts && 'onPageChanged' in opts ? opts.onPageChanged : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let transformer = opts && 'transformer' in opts ? opts.transformer : null;
    let itemBuilder = opts && 'itemBuilder' in opts ? opts.itemBuilder : null;
    let pageController = opts && 'pageController' in opts ? opts.pageController : null;
    let itemCount = opts && 'itemCount' in opts ? opts.itemCount : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[index$0] = index;
    this[curve$] = curve;
    this[viewportFraction$0] = viewportFraction;
    this[loop$0] = loop;
    this[scrollDirection$0] = scrollDirection;
    this[physics$] = physics;
    this[pageSnapping$] = pageSnapping;
    this[onPageChanged$] = onPageChanged;
    this[controller$] = controller;
    this[transformer$] = transformer;
    this[itemBuilder$] = itemBuilder;
    this[pageController$] = pageController;
    this[itemCount$0] = itemCount;
    if (!(itemCount != null)) dart.assertFailed(null, L1, 458, 16, "itemCount != null");
    if (!(itemCount === 0 || itemBuilder != null || transformer != null)) dart.assertFailed(null, L1, 459, 16, "itemCount == 0 || itemBuilder != null || transformer != null");
    this[duration$] = (t0 = duration, t0 == null ? new core.Duration.new({milliseconds: 300}) : t0);
    transformer_page_view.TransformerPageView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = transformer_page_view.TransformerPageView.prototype;
  dart.addTypeTests(transformer_page_view.TransformerPageView);
  dart.addTypeCaches(transformer_page_view.TransformerPageView);
  dart.setMethodSignature(transformer_page_view.TransformerPageView, () => ({
    __proto__: dart.getMethods(transformer_page_view.TransformerPageView.__proto__),
    createState: dart.fnType(dart.legacy(framework.State$(dart.legacy(framework.StatefulWidget))), [])
  }));
  dart.setLibraryUri(transformer_page_view.TransformerPageView, L0);
  dart.setFieldSignature(transformer_page_view.TransformerPageView, () => ({
    __proto__: dart.getFields(transformer_page_view.TransformerPageView.__proto__),
    transformer: dart.finalFieldType(dart.legacy(transformer_page_view.PageTransformer)),
    scrollDirection: dart.finalFieldType(dart.legacy(basic_types.Axis)),
    physics: dart.finalFieldType(dart.legacy(scroll_physics.ScrollPhysics)),
    pageSnapping: dart.finalFieldType(dart.legacy(core.bool)),
    onPageChanged: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(core.int)]))),
    itemBuilder: dart.finalFieldType(dart.legacy(dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(core.int)]))),
    controller: dart.finalFieldType(dart.legacy(transformer_page_view.IndexController)),
    duration: dart.finalFieldType(dart.legacy(core.Duration)),
    curve: dart.finalFieldType(dart.legacy(curves.Curve)),
    pageController: dart.finalFieldType(dart.legacy(transformer_page_view.TransformerPageController)),
    loop: dart.finalFieldType(dart.legacy(core.bool)),
    itemCount: dart.finalFieldType(dart.legacy(core.int)),
    viewportFraction: dart.finalFieldType(dart.legacy(core.double)),
    index: dart.finalFieldType(dart.legacy(core.int))
  }));
  var _size = dart.privateName(transformer_page_view, "_size");
  var _activeIndex = dart.privateName(transformer_page_view, "_activeIndex");
  var _currentPixels = dart.privateName(transformer_page_view, "_currentPixels");
  var _done = dart.privateName(transformer_page_view, "_done");
  var _fromIndex = dart.privateName(transformer_page_view, "_fromIndex");
  var _transformer = dart.privateName(transformer_page_view, "_transformer");
  var _pageController = dart.privateName(transformer_page_view, "_pageController");
  var _controller = dart.privateName(transformer_page_view, "_controller");
  var _buildItemNormal = dart.privateName(transformer_page_view, "_buildItemNormal");
  var C20;
  var C19;
  var C21;
  var C24;
  var C25;
  var C23;
  var C22;
  var _buildItem = dart.privateName(transformer_page_view, "_buildItem");
  var _calcCurrentPixels = dart.privateName(transformer_page_view, "_calcCurrentPixels");
  var _onIndexChanged = dart.privateName(transformer_page_view, "_onIndexChanged");
  var C28;
  var C29;
  var C30;
  var C31;
  var C32;
  var C33;
  var C34;
  var C35;
  var C27;
  var C26;
  var C38;
  var C39;
  var C37;
  var C36;
  var _onGetSize = dart.privateName(transformer_page_view, "_onGetSize");
  var _calcNextIndex = dart.privateName(transformer_page_view, "_calcNextIndex");
  transformer_page_view._TransformerPageViewState = class _TransformerPageViewState extends framework.State$(dart.legacy(transformer_page_view.TransformerPageView)) {
    [_buildItemNormal](context, index) {
      let t2, t1, t0;
      let renderIndex = this[_pageController].getRenderIndexFromRealIndex(index);
      let child = (t0 = this.widget, t1 = context, t2 = renderIndex, t0.itemBuilder(t1, t2));
      return child;
    }
    [_buildItem](context, index) {
      return new transitions.AnimatedBuilder.new({animation: this[_pageController], builder: dart.fn((c, w) => {
          let t2, t1, t0, t0$;
          let renderIndex = this[_pageController].getRenderIndexFromRealIndex(index);
          let child = null;
          if (this.widget.itemBuilder != null) {
            child = (t0 = this.widget, t1 = context, t2 = renderIndex, t0.itemBuilder(t1, t2));
          }
          if (child == null) {
            child = new container.Container.new({$creationLocationd_0dea112b090073317d4: C19 || CT.C19});
          }
          if (this[_size] == null) {
            t0$ = child;
            return t0$ == null ? new container.Container.new({$creationLocationd_0dea112b090073317d4: C21 || CT.C21}) : t0$;
          }
          let position = null;
          let page = this[_pageController].realPage;
          if (dart.test(this[_transformer].reverse)) {
            position = dart.notNull(page) - dart.notNull(index);
          } else {
            position = dart.notNull(index) - dart.notNull(page);
          }
          position = dart.notNull(position) * dart.notNull(this.widget.viewportFraction);
          let info = new transformer_page_view.TransformInfo.new({index: renderIndex, width: this[_size].width, height: this[_size].height, position: position[$clamp](-1.0, 1.0), activeIndex: this[_pageController].getRenderIndexFromRealIndex(this[_activeIndex]), fromIndex: this[_fromIndex], forward: dart.notNull(this[_pageController].position.pixels) - dart.notNull(this[_currentPixels]) >= 0, done: this[_done], scrollDirection: this.widget.scrollDirection, viewportFraction: this.widget.viewportFraction});
          return this[_transformer].transform(child, info);
        }, BuildContextLAndWidgetLToWidgetL()), $creationLocationd_0dea112b090073317d4: C22 || CT.C22});
    }
    [_calcCurrentPixels]() {
      this[_currentPixels] = dart.notNull(this[_pageController].getRenderIndexFromRealIndex(this[_activeIndex])) * dart.notNull(this[_pageController].position.viewportDimension) * dart.notNull(this.widget.viewportFraction);
      return this[_currentPixels];
    }
    build(context) {
      let builder = this[_transformer] == null ? dart.bind(this, _buildItemNormal) : dart.bind(this, _buildItem);
      let child = new page_view.PageView.builder({itemBuilder: builder, itemCount: this[_pageController].getRealItemCount(), onPageChanged: dart.bind(this, _onIndexChanged), controller: this[_pageController], scrollDirection: this.widget.scrollDirection, physics: this.widget.physics, pageSnapping: this.widget.pageSnapping, reverse: this[_pageController].reverse, $creationLocationd_0dea112b090073317d4: C26 || CT.C26});
      if (this[_transformer] == null) {
        return child;
      }
      return new (NotificationListenerOfScrollNotificationL()).new({onNotification: dart.fn(notification => {
          if (ScrollStartNotificationL().is(notification)) {
            this[_calcCurrentPixels]();
            this[_done] = false;
            this[_fromIndex] = this[_activeIndex];
          } else if (ScrollEndNotificationL().is(notification)) {
            this[_calcCurrentPixels]();
            this[_fromIndex] = this[_activeIndex];
            this[_done] = true;
          }
          return false;
        }, ScrollNotificationLToboolL()), child: child, $creationLocationd_0dea112b090073317d4: C36 || CT.C36});
    }
    [_onIndexChanged](index) {
      let t1, t0;
      this[_activeIndex] = index;
      if (this.widget.onPageChanged != null) {
        t0 = this.widget;
        t1 = this[_pageController].getRenderIndexFromRealIndex(index);
        t0.onPageChanged(t1);
      }
    }
    [_onGetSize](_) {
      let size = null;
      if (this.context == null) {
        this.onGetSize(size);
        return;
      }
      let renderObject = this.context.findRenderObject();
      if (renderObject != null) {
        let bounds = renderObject.paintBounds;
        if (bounds != null) {
          size = bounds.size;
        }
      }
      this[_calcCurrentPixels]();
      this.onGetSize(size);
    }
    onGetSize(size) {
      if (dart.test(this.mounted)) {
        this.setState(dart.fn(() => {
          this[_size] = size;
        }, VoidToNullN()));
      }
    }
    initState() {
      this[_transformer] = this.widget.transformer;
      this[_pageController] = this.widget.pageController;
      if (this[_pageController] == null) {
        this[_pageController] = new transformer_page_view.TransformerPageController.new({initialPage: this.widget.index, itemCount: this.widget.itemCount, loop: this.widget.loop, reverse: this.widget.transformer == null ? false : this.widget.transformer.reverse});
      }
      this[_fromIndex] = this[_activeIndex] = this[_pageController].initialPage;
      this[_controller] = this.getNotifier();
      if (this[_controller] != null) {
        this[_controller].addListener(dart.bind(this, 'onChangeNotifier'));
      }
      super.initState();
    }
    didUpdateWidget(oldWidget) {
      let t0;
      TransformerPageViewL().as(oldWidget);
      this[_transformer] = this.widget.transformer;
      let index = (t0 = this.widget.index, t0 == null ? 0 : t0);
      let created = false;
      if (!dart.equals(this[_pageController], this.widget.pageController)) {
        if (this.widget.pageController != null) {
          this[_pageController] = this.widget.pageController;
        } else {
          created = true;
          this[_pageController] = new transformer_page_view.TransformerPageController.new({initialPage: this.widget.index, itemCount: this.widget.itemCount, loop: this.widget.loop, reverse: this.widget.transformer == null ? false : this.widget.transformer.reverse});
        }
      }
      if (this[_pageController].getRenderIndexFromRealIndex(this[_activeIndex]) != index) {
        this[_fromIndex] = this[_activeIndex] = this[_pageController].initialPage;
        if (!created) {
          let initPage = this[_pageController].getRealIndexFromRenderIndex(index);
          this[_pageController].animateToPage(initPage, {duration: this.widget.duration, curve: this.widget.curve});
        }
      }
      if (this[_transformer] != null) binding.WidgetsBinding.instance.addPostFrameCallback(dart.bind(this, _onGetSize));
      if (!dart.equals(this[_controller], this.getNotifier())) {
        if (this[_controller] != null) {
          this[_controller].removeListener(dart.bind(this, 'onChangeNotifier'));
        }
        this[_controller] = this.getNotifier();
        if (this[_controller] != null) {
          this[_controller].addListener(dart.bind(this, 'onChangeNotifier'));
        }
      }
      super.didUpdateWidget(oldWidget);
    }
    didChangeDependencies() {
      if (this[_transformer] != null) binding.WidgetsBinding.instance.addPostFrameCallback(dart.bind(this, _onGetSize));
      super.didChangeDependencies();
    }
    getNotifier() {
      return this.widget.controller;
    }
    [_calcNextIndex](next) {
      let currentIndex = this[_activeIndex];
      if (dart.test(this[_pageController].reverse)) {
        if (dart.test(next)) {
          currentIndex = dart.notNull(currentIndex) - 1;
        } else {
          currentIndex = dart.notNull(currentIndex) + 1;
        }
      } else {
        if (dart.test(next)) {
          currentIndex = dart.notNull(currentIndex) + 1;
        } else {
          currentIndex = dart.notNull(currentIndex) - 1;
        }
      }
      if (!dart.test(this[_pageController].loop)) {
        if (dart.notNull(currentIndex) >= dart.notNull(this[_pageController].itemCount)) {
          currentIndex = 0;
        } else if (dart.notNull(currentIndex) < 0) {
          currentIndex = dart.notNull(this[_pageController].itemCount) - 1;
        }
      }
      return currentIndex;
    }
    onChangeNotifier() {
      let t0;
      let event = this.widget.controller.event;
      let index = null;
      switch (event) {
        case 0:
        {
          {
            index = this[_pageController].getRealIndexFromRenderIndex(this.widget.controller.index);
          }
          break;
        }
        case -1:
        case 1:
        {
          {
            index = this[_calcNextIndex](event === 1);
          }
          break;
        }
        default:
        {
          return;
        }
      }
      if (dart.test(this.widget.controller.animation)) {
        this[_pageController].animateToPage(index, {duration: this.widget.duration, curve: (t0 = this.widget.curve, t0 == null ? curves.Curves.ease : t0)}).whenComplete(dart.bind(this.widget.controller, 'complete'));
      } else {
        this[_pageController].jumpToPage(index);
        this.widget.controller.complete();
      }
    }
    dispose() {
      super.dispose();
      if (this[_controller] != null) {
        this[_controller].removeListener(dart.bind(this, 'onChangeNotifier'));
      }
    }
  };
  (transformer_page_view._TransformerPageViewState.new = function() {
    this[_size] = null;
    this[_activeIndex] = null;
    this[_currentPixels] = null;
    this[_done] = false;
    this[_fromIndex] = null;
    this[_transformer] = null;
    this[_pageController] = null;
    this[_controller] = null;
    transformer_page_view._TransformerPageViewState.__proto__.new.call(this);
    ;
  }).prototype = transformer_page_view._TransformerPageViewState.prototype;
  dart.addTypeTests(transformer_page_view._TransformerPageViewState);
  dart.addTypeCaches(transformer_page_view._TransformerPageViewState);
  dart.setMethodSignature(transformer_page_view._TransformerPageViewState, () => ({
    __proto__: dart.getMethods(transformer_page_view._TransformerPageViewState.__proto__),
    [_buildItemNormal]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(core.int)]),
    [_buildItem]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(core.int)]),
    [_calcCurrentPixels]: dart.fnType(dart.legacy(core.double), []),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_onIndexChanged]: dart.fnType(dart.void, [dart.legacy(core.int)]),
    [_onGetSize]: dart.fnType(dart.void, [dart.dynamic]),
    onGetSize: dart.fnType(dart.void, [dart.legacy(ui.Size)]),
    getNotifier: dart.fnType(dart.legacy(change_notifier.ChangeNotifier), []),
    [_calcNextIndex]: dart.fnType(dart.legacy(core.int), [dart.legacy(core.bool)]),
    onChangeNotifier: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(transformer_page_view._TransformerPageViewState, L0);
  dart.setFieldSignature(transformer_page_view._TransformerPageViewState, () => ({
    __proto__: dart.getFields(transformer_page_view._TransformerPageViewState.__proto__),
    [_size]: dart.fieldType(dart.legacy(ui.Size)),
    [_activeIndex]: dart.fieldType(dart.legacy(core.int)),
    [_currentPixels]: dart.fieldType(dart.legacy(core.double)),
    [_done]: dart.fieldType(dart.legacy(core.bool)),
    [_fromIndex]: dart.fieldType(dart.legacy(core.int)),
    [_transformer]: dart.fieldType(dart.legacy(transformer_page_view.PageTransformer)),
    [_pageController]: dart.fieldType(dart.legacy(transformer_page_view.TransformerPageController)),
    [_controller]: dart.fieldType(dart.legacy(change_notifier.ChangeNotifier))
  }));
  dart.defineLazy(transformer_page_view, {
    /*transformer_page_view.kMaxValue*/get kMaxValue() {
      return 2000000000;
    },
    /*transformer_page_view.kMiddleValue*/get kMiddleValue() {
      return 1000000000;
    },
    /*transformer_page_view.kDefaultTransactionDuration*/get kDefaultTransactionDuration() {
      return 300;
    }
  }, true);
  dart.trackLibraries("packages/CabBookFlutterTemplate/utils/transformer_page_view", {
    "package:CabBookFlutterTemplate/utils/transformer_page_view.dart": transformer_page_view
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["transformer_page_view.dart"],"names":[],"mappings":"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","file":"transformer_page_view.unsound.ddc.js"}');
  // Exports:
  return {
    utils__transformer_page_view: transformer_page_view
  };
}));

//# sourceMappingURL=transformer_page_view.unsound.ddc.js.map
