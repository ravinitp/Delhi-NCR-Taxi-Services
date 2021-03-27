define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation'], (function load__packages__CabBookFlutterTemplate__utils__flutter_page_indicator(dart_sdk, packages__flutter_web_ui__ui, packages__flutter_web__animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui = packages__flutter_web_ui__ui.ui;
  const custom_paint = packages__flutter_web__animation.src__rendering__custom_paint;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const page_view = packages__flutter_web__animation.src__widgets__page_view;
  var flutter_page_indicator = Object.create(dart.library);
  var $abs = dartx.abs;
  var $floor = dartx.floor;
  var $toString = dartx.toString;
  var BasePainterL = () => (BasePainterL = dart.constFn(dart.legacy(flutter_page_indicator.BasePainter)))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var PageIndicatorL = () => (PageIndicatorL = dart.constFn(dart.legacy(flutter_page_indicator.PageIndicator)))();
  var PageIndicatorLayoutL = () => (PageIndicatorLayoutL = dart.constFn(dart.legacy(flutter_page_indicator.PageIndicatorLayout)))();
  const CT = Object.create(null);
  var L0 = "package:CabBookFlutterTemplate/utils/flutter_page_indicator.dart";
  var L1 = "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_page_indicator.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: flutter_page_indicator.PageIndicatorLayout.prototype,
        [_name$]: "PageIndicatorLayout.NONE",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: flutter_page_indicator.PageIndicatorLayout.prototype,
        [_name$]: "PageIndicatorLayout.SLIDE",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: flutter_page_indicator.PageIndicatorLayout.prototype,
        [_name$]: "PageIndicatorLayout.WARM",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: flutter_page_indicator.PageIndicatorLayout.prototype,
        [_name$]: "PageIndicatorLayout.COLOR",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: flutter_page_indicator.PageIndicatorLayout.prototype,
        [_name$]: "PageIndicatorLayout.SCALE",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: flutter_page_indicator.PageIndicatorLayout.prototype,
        [_name$]: "PageIndicatorLayout.DROP",
        index: 5
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "painter",
        [_Location_column]: 9,
        [_Location_line]: 250,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], _LocationL());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 249,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_page_indicator.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 247,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 248,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], _LocationL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 246,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_page_indicator.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], _LocationL());
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C15 || CT.C15,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 256,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_page_indicator.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 262,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19], _LocationL());
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 261,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/utils/flutter_page_indicator.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 1308622847
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4294967295.0
      });
    },
    get C22() {
      return C22 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], PageIndicatorLayoutL());
    }
  }, false);
  var _paint$ = dart.privateName(flutter_page_indicator, "_paint");
  var _shouldSkip = dart.privateName(flutter_page_indicator, "_shouldSkip");
  var widget$ = dart.privateName(flutter_page_indicator, "BasePainter.widget");
  var page$ = dart.privateName(flutter_page_indicator, "BasePainter.page");
  var index$ = dart.privateName(flutter_page_indicator, "BasePainter.index");
  flutter_page_indicator.BasePainter = class BasePainter extends custom_paint.CustomPainter {
    get widget() {
      return this[widget$];
    }
    set widget(value) {
      super.widget = value;
    }
    get page() {
      return this[page$];
    }
    set page(value) {
      super.page = value;
    }
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    lerp(begin, end, progress) {
      return dart.notNull(begin) + (dart.notNull(end) - dart.notNull(begin)) * dart.notNull(progress);
    }
    [_shouldSkip](index) {
      return false;
    }
    paint(canvas, size) {
      {
        this[_paint$].color = this.widget.color;
        let space = this.widget.space;
        let size = this.widget.size;
        let radius = dart.notNull(size) / 2;
        for (let i = 0, c = this.widget.count; i < dart.notNull(c); i = i + 1) {
          if (dart.test(this[_shouldSkip](i))) {
            continue;
          }
          canvas.drawCircle(new ui.Offset.new(i * (dart.notNull(size) + dart.notNull(space)) + radius, radius), radius, this[_paint$]);
        }
        let page = this.page;
        if (dart.notNull(page) < dart.notNull(this.index)) {
          page = 0.0;
        }
        this[_paint$].color = this.widget.activeColor;
        this.draw(canvas, space, size, radius);
      }
    }
    shouldRepaint(oldDelegate) {
      BasePainterL().as(oldDelegate);
      return oldDelegate.page != this.page;
    }
  };
  (flutter_page_indicator.BasePainter.new = function(widget, page, index, _paint) {
    this[widget$] = widget;
    this[page$] = page;
    this[index$] = index;
    this[_paint$] = _paint;
    flutter_page_indicator.BasePainter.__proto__.new.call(this);
    ;
  }).prototype = flutter_page_indicator.BasePainter.prototype;
  dart.addTypeTests(flutter_page_indicator.BasePainter);
  dart.addTypeCaches(flutter_page_indicator.BasePainter);
  dart.setMethodSignature(flutter_page_indicator.BasePainter, () => ({
    __proto__: dart.getMethods(flutter_page_indicator.BasePainter.__proto__),
    lerp: dart.fnType(dart.legacy(core.double), [dart.legacy(core.double), dart.legacy(core.double), dart.legacy(core.double)]),
    [_shouldSkip]: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.int)]),
    paint: dart.fnType(dart.void, [dart.legacy(ui.Canvas), dart.legacy(ui.Size)]),
    shouldRepaint: dart.fnType(dart.legacy(core.bool), [dart.legacy(core.Object)])
  }));
  dart.setLibraryUri(flutter_page_indicator.BasePainter, L0);
  dart.setFieldSignature(flutter_page_indicator.BasePainter, () => ({
    __proto__: dart.getFields(flutter_page_indicator.BasePainter.__proto__),
    widget: dart.finalFieldType(dart.legacy(flutter_page_indicator.PageIndicator)),
    page: dart.finalFieldType(dart.legacy(core.double)),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_paint$]: dart.finalFieldType(dart.legacy(ui.Paint))
  }));
  flutter_page_indicator.WarmPainter = class WarmPainter extends flutter_page_indicator.BasePainter {
    draw(canvas, space, size, radius) {
      let progress = dart.notNull(this.page) - dart.notNull(this.index);
      let distance = dart.notNull(size) + dart.notNull(space);
      let start = dart.notNull(this.index) * (dart.notNull(size) + dart.notNull(space));
      if (progress > 0.5) {
        let right = start + dart.notNull(size) + distance;
        let left = dart.notNull(this.index) * distance + distance * (progress - 0.5) * 2;
        canvas.drawRRect(new ui.RRect.fromLTRBR(left, 0.0, right, size, new ui.Radius.circular(radius)), this[_paint$]);
      } else {
        let right = start + dart.notNull(size) + distance * progress * 2;
        canvas.drawRRect(new ui.RRect.fromLTRBR(start, 0.0, right, size, new ui.Radius.circular(radius)), this[_paint$]);
      }
    }
  };
  (flutter_page_indicator.WarmPainter.new = function(widget, page, index, paint) {
    flutter_page_indicator.WarmPainter.__proto__.new.call(this, widget, page, index, paint);
    ;
  }).prototype = flutter_page_indicator.WarmPainter.prototype;
  dart.addTypeTests(flutter_page_indicator.WarmPainter);
  dart.addTypeCaches(flutter_page_indicator.WarmPainter);
  dart.setMethodSignature(flutter_page_indicator.WarmPainter, () => ({
    __proto__: dart.getMethods(flutter_page_indicator.WarmPainter.__proto__),
    draw: dart.fnType(dart.void, [dart.legacy(ui.Canvas), dart.legacy(core.double), dart.legacy(core.double), dart.legacy(core.double)])
  }));
  dart.setLibraryUri(flutter_page_indicator.WarmPainter, L0);
  flutter_page_indicator.DropPainter = class DropPainter extends flutter_page_indicator.BasePainter {
    draw(canvas, space, size, radius) {
      let progress = dart.notNull(this.page) - dart.notNull(this.index);
      let dropHeight = this.widget.dropHeight;
      let rate = (0.5 - progress)[$abs]() * 2;
      let scale = this.widget.scale;
      canvas.drawCircle(new ui.Offset.new(dart.notNull(radius) + dart.notNull(this.page) * (dart.notNull(size) + dart.notNull(space)), dart.notNull(radius) - dart.notNull(dropHeight) * (1 - rate)), dart.notNull(radius) * (dart.notNull(scale) + rate * (1.0 - dart.notNull(scale))), this[_paint$]);
    }
  };
  (flutter_page_indicator.DropPainter.new = function(widget, page, index, paint) {
    flutter_page_indicator.DropPainter.__proto__.new.call(this, widget, page, index, paint);
    ;
  }).prototype = flutter_page_indicator.DropPainter.prototype;
  dart.addTypeTests(flutter_page_indicator.DropPainter);
  dart.addTypeCaches(flutter_page_indicator.DropPainter);
  dart.setMethodSignature(flutter_page_indicator.DropPainter, () => ({
    __proto__: dart.getMethods(flutter_page_indicator.DropPainter.__proto__),
    draw: dart.fnType(dart.void, [dart.legacy(ui.Canvas), dart.legacy(core.double), dart.legacy(core.double), dart.legacy(core.double)])
  }));
  dart.setLibraryUri(flutter_page_indicator.DropPainter, L0);
  flutter_page_indicator.NonePainter = class NonePainter extends flutter_page_indicator.BasePainter {
    draw(canvas, space, size, radius) {
      let progress = dart.notNull(this.page) - dart.notNull(this.index);
      let secondOffset = this.index === dart.notNull(this.widget.count) - 1 ? radius : dart.notNull(radius) + (dart.notNull(this.index) + 1) * (dart.notNull(size) + dart.notNull(space));
      if (progress > 0.5) {
        canvas.drawCircle(new ui.Offset.new(secondOffset, radius), radius, this[_paint$]);
      } else {
        canvas.drawCircle(new ui.Offset.new(dart.notNull(radius) + dart.notNull(this.index) * (dart.notNull(size) + dart.notNull(space)), radius), radius, this[_paint$]);
      }
    }
  };
  (flutter_page_indicator.NonePainter.new = function(widget, page, index, paint) {
    flutter_page_indicator.NonePainter.__proto__.new.call(this, widget, page, index, paint);
    ;
  }).prototype = flutter_page_indicator.NonePainter.prototype;
  dart.addTypeTests(flutter_page_indicator.NonePainter);
  dart.addTypeCaches(flutter_page_indicator.NonePainter);
  dart.setMethodSignature(flutter_page_indicator.NonePainter, () => ({
    __proto__: dart.getMethods(flutter_page_indicator.NonePainter.__proto__),
    draw: dart.fnType(dart.void, [dart.legacy(ui.Canvas), dart.legacy(core.double), dart.legacy(core.double), dart.legacy(core.double)])
  }));
  dart.setLibraryUri(flutter_page_indicator.NonePainter, L0);
  flutter_page_indicator.SlidePainter = class SlidePainter extends flutter_page_indicator.BasePainter {
    draw(canvas, space, size, radius) {
      canvas.drawCircle(new ui.Offset.new(dart.notNull(radius) + dart.notNull(this.page) * (dart.notNull(size) + dart.notNull(space)), radius), radius, this[_paint$]);
    }
  };
  (flutter_page_indicator.SlidePainter.new = function(widget, page, index, paint) {
    flutter_page_indicator.SlidePainter.__proto__.new.call(this, widget, page, index, paint);
    ;
  }).prototype = flutter_page_indicator.SlidePainter.prototype;
  dart.addTypeTests(flutter_page_indicator.SlidePainter);
  dart.addTypeCaches(flutter_page_indicator.SlidePainter);
  dart.setMethodSignature(flutter_page_indicator.SlidePainter, () => ({
    __proto__: dart.getMethods(flutter_page_indicator.SlidePainter.__proto__),
    draw: dart.fnType(dart.void, [dart.legacy(ui.Canvas), dart.legacy(core.double), dart.legacy(core.double), dart.legacy(core.double)])
  }));
  dart.setLibraryUri(flutter_page_indicator.SlidePainter, L0);
  flutter_page_indicator.ScalePainter = class ScalePainter extends flutter_page_indicator.BasePainter {
    [_shouldSkip](i) {
      if (this.index === dart.notNull(this.widget.count) - 1) {
        return i === 0 || i == this.index;
      }
      return i == this.index || i === dart.notNull(this.index) + 1;
    }
    paint(canvas, size) {
      {
        this[_paint$].color = this.widget.color;
        let space = this.widget.space;
        let size = this.widget.size;
        let radius = dart.notNull(size) / 2;
        for (let i = 0, c = this.widget.count; i < dart.notNull(c); i = i + 1) {
          if (dart.test(this[_shouldSkip](i))) {
            continue;
          }
          canvas.drawCircle(new ui.Offset.new(i * (dart.notNull(size) + dart.notNull(space)) + radius, radius), radius * dart.notNull(this.widget.scale), this[_paint$]);
        }
        this[_paint$].color = this.widget.activeColor;
        this.draw(canvas, space, size, radius);
      }
    }
    draw(canvas, space, size, radius) {
      let secondOffset = this.index === dart.notNull(this.widget.count) - 1 ? radius : dart.notNull(radius) + (dart.notNull(this.index) + 1) * (dart.notNull(size) + dart.notNull(space));
      let progress = dart.notNull(this.page) - dart.notNull(this.index);
      this[_paint$].color = ui.Color.lerp(this.widget.activeColor, this.widget.color, progress);
      canvas.drawCircle(new ui.Offset.new(dart.notNull(radius) + dart.notNull(this.index) * (dart.notNull(size) + dart.notNull(space)), radius), this.lerp(radius, dart.notNull(radius) * dart.notNull(this.widget.scale), progress), this[_paint$]);
      this[_paint$].color = ui.Color.lerp(this.widget.color, this.widget.activeColor, progress);
      canvas.drawCircle(new ui.Offset.new(secondOffset, radius), this.lerp(dart.notNull(radius) * dart.notNull(this.widget.scale), radius, progress), this[_paint$]);
    }
  };
  (flutter_page_indicator.ScalePainter.new = function(widget, page, index, paint) {
    flutter_page_indicator.ScalePainter.__proto__.new.call(this, widget, page, index, paint);
    ;
  }).prototype = flutter_page_indicator.ScalePainter.prototype;
  dart.addTypeTests(flutter_page_indicator.ScalePainter);
  dart.addTypeCaches(flutter_page_indicator.ScalePainter);
  dart.setMethodSignature(flutter_page_indicator.ScalePainter, () => ({
    __proto__: dart.getMethods(flutter_page_indicator.ScalePainter.__proto__),
    draw: dart.fnType(dart.void, [dart.legacy(ui.Canvas), dart.legacy(core.double), dart.legacy(core.double), dart.legacy(core.double)])
  }));
  dart.setLibraryUri(flutter_page_indicator.ScalePainter, L0);
  flutter_page_indicator.ColorPainter = class ColorPainter extends flutter_page_indicator.BasePainter {
    [_shouldSkip](i) {
      if (this.index === dart.notNull(this.widget.count) - 1) {
        return i === 0 || i == this.index;
      }
      return i == this.index || i === dart.notNull(this.index) + 1;
    }
    draw(canvas, space, size, radius) {
      let progress = dart.notNull(this.page) - dart.notNull(this.index);
      let secondOffset = this.index === dart.notNull(this.widget.count) - 1 ? radius : dart.notNull(radius) + (dart.notNull(this.index) + 1) * (dart.notNull(size) + dart.notNull(space));
      this[_paint$].color = ui.Color.lerp(this.widget.activeColor, this.widget.color, progress);
      canvas.drawCircle(new ui.Offset.new(dart.notNull(radius) + dart.notNull(this.index) * (dart.notNull(size) + dart.notNull(space)), radius), radius, this[_paint$]);
      this[_paint$].color = ui.Color.lerp(this.widget.color, this.widget.activeColor, progress);
      canvas.drawCircle(new ui.Offset.new(secondOffset, radius), radius, this[_paint$]);
    }
  };
  (flutter_page_indicator.ColorPainter.new = function(widget, page, index, paint) {
    flutter_page_indicator.ColorPainter.__proto__.new.call(this, widget, page, index, paint);
    ;
  }).prototype = flutter_page_indicator.ColorPainter.prototype;
  dart.addTypeTests(flutter_page_indicator.ColorPainter);
  dart.addTypeCaches(flutter_page_indicator.ColorPainter);
  dart.setMethodSignature(flutter_page_indicator.ColorPainter, () => ({
    __proto__: dart.getMethods(flutter_page_indicator.ColorPainter.__proto__),
    draw: dart.fnType(dart.void, [dart.legacy(ui.Canvas), dart.legacy(core.double), dart.legacy(core.double), dart.legacy(core.double)])
  }));
  dart.setLibraryUri(flutter_page_indicator.ColorPainter, L0);
  var _name$ = dart.privateName(flutter_page_indicator, "_name");
  var C0;
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var _createPainer = dart.privateName(flutter_page_indicator, "_createPainer");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C8;
  var C7;
  var C6;
  var C11;
  var C12;
  var C13;
  var C10;
  var C9;
  var C16;
  var C15;
  var C14;
  var C19;
  var C18;
  var C17;
  var _onController = dart.privateName(flutter_page_indicator, "_onController");
  var Color__value = dart.privateName(ui, "Color._value");
  var C20;
  var C21;
  var size$ = dart.privateName(flutter_page_indicator, "PageIndicator.size");
  var space$ = dart.privateName(flutter_page_indicator, "PageIndicator.space");
  var count$ = dart.privateName(flutter_page_indicator, "PageIndicator.count");
  var activeColor$ = dart.privateName(flutter_page_indicator, "PageIndicator.activeColor");
  var color$ = dart.privateName(flutter_page_indicator, "PageIndicator.color");
  var layout$ = dart.privateName(flutter_page_indicator, "PageIndicator.layout");
  var scale$ = dart.privateName(flutter_page_indicator, "PageIndicator.scale");
  var dropHeight$ = dart.privateName(flutter_page_indicator, "PageIndicator.dropHeight");
  var controller$ = dart.privateName(flutter_page_indicator, "PageIndicator.controller");
  var activeSize$ = dart.privateName(flutter_page_indicator, "PageIndicator.activeSize");
  flutter_page_indicator.PageIndicator = class PageIndicator extends framework.StatefulWidget {
    get size() {
      return this[size$];
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
    get count() {
      return this[count$];
    }
    set count(value) {
      super.count = value;
    }
    get activeColor() {
      return this[activeColor$];
    }
    set activeColor(value) {
      super.activeColor = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get layout() {
      return this[layout$];
    }
    set layout(value) {
      super.layout = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get dropHeight() {
      return this[dropHeight$];
    }
    set dropHeight(value) {
      super.dropHeight = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get activeSize() {
      return this[activeSize$];
    }
    set activeSize(value) {
      super.activeSize = value;
    }
    createState() {
      return new flutter_page_indicator._PageIndicatorState.new();
    }
  };
  (flutter_page_indicator.PageIndicator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let size = opts && 'size' in opts ? opts.size : 20;
    let space = opts && 'space' in opts ? opts.space : 5;
    let count = opts && 'count' in opts ? opts.count : null;
    let activeSize = opts && 'activeSize' in opts ? opts.activeSize : 20;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let color = opts && 'color' in opts ? opts.color : C20 || CT.C20;
    let layout = opts && 'layout' in opts ? opts.layout : C1 || CT.C1;
    let activeColor = opts && 'activeColor' in opts ? opts.activeColor : C21 || CT.C21;
    let scale = opts && 'scale' in opts ? opts.scale : 0.6;
    let dropHeight = opts && 'dropHeight' in opts ? opts.dropHeight : 20;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[size$] = size;
    this[space$] = space;
    this[count$] = count;
    this[activeSize$] = activeSize;
    this[controller$] = controller;
    this[color$] = color;
    this[layout$] = layout;
    this[activeColor$] = activeColor;
    this[scale$] = scale;
    this[dropHeight$] = dropHeight;
    if (!(count != null)) dart.assertFailed(null, L1, 345, 16, "count != null");
    if (!(controller != null)) dart.assertFailed(null, L1, 346, 16, "controller != null");
    flutter_page_indicator.PageIndicator.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = flutter_page_indicator.PageIndicator.prototype;
  dart.addTypeTests(flutter_page_indicator.PageIndicator);
  dart.addTypeCaches(flutter_page_indicator.PageIndicator);
  dart.setMethodSignature(flutter_page_indicator.PageIndicator, () => ({
    __proto__: dart.getMethods(flutter_page_indicator.PageIndicator.__proto__),
    createState: dart.fnType(dart.legacy(framework.State$(dart.legacy(framework.StatefulWidget))), [])
  }));
  dart.setLibraryUri(flutter_page_indicator.PageIndicator, L0);
  dart.setFieldSignature(flutter_page_indicator.PageIndicator, () => ({
    __proto__: dart.getFields(flutter_page_indicator.PageIndicator.__proto__),
    size: dart.finalFieldType(dart.legacy(core.double)),
    space: dart.finalFieldType(dart.legacy(core.double)),
    count: dart.finalFieldType(dart.legacy(core.int)),
    activeColor: dart.finalFieldType(dart.legacy(ui.Color)),
    color: dart.finalFieldType(dart.legacy(ui.Color)),
    layout: dart.finalFieldType(dart.legacy(flutter_page_indicator.PageIndicatorLayout)),
    scale: dart.finalFieldType(dart.legacy(core.double)),
    dropHeight: dart.finalFieldType(dart.legacy(core.double)),
    controller: dart.finalFieldType(dart.legacy(page_view.PageController)),
    activeSize: dart.finalFieldType(dart.legacy(core.double))
  }));
  flutter_page_indicator._PageIndicatorState = class _PageIndicatorState extends framework.State$(dart.legacy(flutter_page_indicator.PageIndicator)) {
    [_createPainer]() {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      switch (this.widget.layout) {
        case C0 || CT.C0:
        {
          return new flutter_page_indicator.NonePainter.new(this.widget, (t0 = this.widget.controller.page, t0 == null ? 0.0 : t0), this.index, this[_paint$]);
        }
        case C1 || CT.C1:
        {
          return new flutter_page_indicator.SlidePainter.new(this.widget, (t0$ = this.widget.controller.page, t0$ == null ? 0.0 : t0$), this.index, this[_paint$]);
        }
        case C2 || CT.C2:
        {
          return new flutter_page_indicator.WarmPainter.new(this.widget, (t0$0 = this.widget.controller.page, t0$0 == null ? 0.0 : t0$0), this.index, this[_paint$]);
        }
        case C3 || CT.C3:
        {
          return new flutter_page_indicator.ColorPainter.new(this.widget, (t0$1 = this.widget.controller.page, t0$1 == null ? 0.0 : t0$1), this.index, this[_paint$]);
        }
        case C4 || CT.C4:
        {
          return new flutter_page_indicator.ScalePainter.new(this.widget, (t0$2 = this.widget.controller.page, t0$2 == null ? 0.0 : t0$2), this.index, this[_paint$]);
        }
        case C5 || CT.C5:
        {
          return new flutter_page_indicator.DropPainter.new(this.widget, (t0$3 = this.widget.controller.page, t0$3 == null ? 0.0 : t0$3), this.index, this[_paint$]);
        }
        default:
        {
          dart.throw(core.Exception.new("Not a valid layout"));
        }
      }
    }
    build(context) {
      let child = new basic.SizedBox.new({width: dart.notNull(this.widget.count) * dart.notNull(this.widget.size) + (dart.notNull(this.widget.count) - 1) * dart.notNull(this.widget.space), height: this.widget.size, child: new basic.CustomPaint.new({painter: this[_createPainer](), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9});
      if (this.widget.layout == flutter_page_indicator.PageIndicatorLayout.SCALE || this.widget.layout == flutter_page_indicator.PageIndicatorLayout.COLOR) {
        child = new basic.ClipRect.new({child: child, $creationLocationd_0dea112b090073317d4: C14 || CT.C14});
      }
      return new basic.IgnorePointer.new({child: child, $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
    }
    [_onController]() {
      let t0;
      let page = (t0 = this.widget.controller.page, t0 == null ? 0.0 : t0);
      this.index = page[$floor]();
      this.setState(dart.fn(() => {
      }, VoidToNullN()));
    }
    initState() {
      this.widget.controller.addListener(dart.bind(this, _onController));
      super.initState();
    }
    didUpdateWidget(oldWidget) {
      PageIndicatorL().as(oldWidget);
      if (!dart.equals(this.widget.controller, oldWidget.controller)) {
        oldWidget.controller.removeListener(dart.bind(this, _onController));
        this.widget.controller.addListener(dart.bind(this, _onController));
      }
      super.didUpdateWidget(oldWidget);
    }
    dispose() {
      this.widget.controller.removeListener(dart.bind(this, _onController));
      super.dispose();
    }
  };
  (flutter_page_indicator._PageIndicatorState.new = function() {
    this.index = 0;
    this[_paint$] = new ui.Paint.new();
    flutter_page_indicator._PageIndicatorState.__proto__.new.call(this);
    ;
  }).prototype = flutter_page_indicator._PageIndicatorState.prototype;
  dart.addTypeTests(flutter_page_indicator._PageIndicatorState);
  dart.addTypeCaches(flutter_page_indicator._PageIndicatorState);
  dart.setMethodSignature(flutter_page_indicator._PageIndicatorState, () => ({
    __proto__: dart.getMethods(flutter_page_indicator._PageIndicatorState.__proto__),
    [_createPainer]: dart.fnType(dart.legacy(flutter_page_indicator.BasePainter), []),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_onController]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(flutter_page_indicator._PageIndicatorState, L0);
  dart.setFieldSignature(flutter_page_indicator._PageIndicatorState, () => ({
    __proto__: dart.getFields(flutter_page_indicator._PageIndicatorState.__proto__),
    index: dart.fieldType(dart.legacy(core.int)),
    [_paint$]: dart.fieldType(dart.legacy(ui.Paint))
  }));
  var C22;
  flutter_page_indicator.PageIndicatorLayout = class PageIndicatorLayout extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (flutter_page_indicator.PageIndicatorLayout.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = flutter_page_indicator.PageIndicatorLayout.prototype;
  dart.addTypeTests(flutter_page_indicator.PageIndicatorLayout);
  dart.addTypeCaches(flutter_page_indicator.PageIndicatorLayout);
  dart.setMethodSignature(flutter_page_indicator.PageIndicatorLayout, () => ({
    __proto__: dart.getMethods(flutter_page_indicator.PageIndicatorLayout.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(flutter_page_indicator.PageIndicatorLayout, L0);
  dart.setFieldSignature(flutter_page_indicator.PageIndicatorLayout, () => ({
    __proto__: dart.getFields(flutter_page_indicator.PageIndicatorLayout.__proto__),
    index: dart.finalFieldType(dart.legacy(core.int)),
    [_name$]: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(flutter_page_indicator.PageIndicatorLayout, ['toString']);
  flutter_page_indicator.PageIndicatorLayout.NONE = C0 || CT.C0;
  flutter_page_indicator.PageIndicatorLayout.SLIDE = C1 || CT.C1;
  flutter_page_indicator.PageIndicatorLayout.WARM = C2 || CT.C2;
  flutter_page_indicator.PageIndicatorLayout.COLOR = C3 || CT.C3;
  flutter_page_indicator.PageIndicatorLayout.SCALE = C4 || CT.C4;
  flutter_page_indicator.PageIndicatorLayout.DROP = C5 || CT.C5;
  flutter_page_indicator.PageIndicatorLayout.values = C22 || CT.C22;
  dart.trackLibraries("packages/CabBookFlutterTemplate/utils/flutter_page_indicator", {
    "package:CabBookFlutterTemplate/utils/flutter_page_indicator.dart": flutter_page_indicator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flutter_page_indicator.dart"],"names":[],"mappings":"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","file":"flutter_page_indicator.unsound.ddc.js"}');
  // Exports:
  return {
    utils__flutter_page_indicator: flutter_page_indicator
  };
}));

//# sourceMappingURL=flutter_page_indicator.unsound.ddc.js.map
