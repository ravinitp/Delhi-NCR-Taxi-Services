define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], (function load__packages__CabBookFlutterTemplate__widget__TimePicker(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const time_picker = packages__flutter_web__material.src__material__time_picker;
  const theme = packages__flutter_web__material.src__material__theme;
  const colors = packages__flutter_web__material.src__material__colors;
  const ink_well = packages__flutter_web__material.src__material__ink_well;
  const input_decorator = packages__flutter_web__material.src__material__input_decorator;
  const icons = packages__flutter_web__material.src__material__icons;
  const time = packages__flutter_web__material.src__material__time;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const ui = packages__flutter_web_ui__ui.ui;
  var TimePicker = Object.create(dart.library);
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  const CT = Object.create(null);
  var L0 = "package:CabBookFlutterTemplate/widget/TimePicker.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 38,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 45,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 55,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], _LocationL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/TimePicker.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "baseStyle",
        [_Location_column]: 19,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], _LocationL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/TimePicker.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 17,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], _LocationL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/TimePicker.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], _LocationL());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/TimePicker.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 11,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], _LocationL());
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C20 || CT.C20,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/TimePicker.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 7,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26], _LocationL());
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/TimePicker.dart"
      });
    }
  }, false);
  var _selectTime = dart.privateName(TimePicker, "_selectTime");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C2;
  var C3;
  var C4;
  var C1;
  var C0;
  var C7;
  var C8;
  var C6;
  var C5;
  var C11;
  var C12;
  var C10;
  var C9;
  var C15;
  var C16;
  var C17;
  var C18;
  var C14;
  var C13;
  var C21;
  var C22;
  var C20;
  var C19;
  var C25;
  var C26;
  var C24;
  var C23;
  var labelText$ = dart.privateName(TimePicker, "TimePicker.labelText");
  var selectedTime$ = dart.privateName(TimePicker, "TimePicker.selectedTime");
  var selectTime$ = dart.privateName(TimePicker, "TimePicker.selectTime");
  TimePicker.TimePicker = class TimePicker extends framework.StatelessWidget {
    get labelText() {
      return this[labelText$];
    }
    set labelText(value) {
      super.labelText = value;
    }
    get selectedTime() {
      return this[selectedTime$];
    }
    set selectedTime(value) {
      super.selectedTime = value;
    }
    get selectTime() {
      return this[selectTime$];
    }
    set selectTime(value) {
      super.selectTime = value;
    }
    [_selectTime](context) {
      return async.async(dart.void, (function* _selectTime() {
        let t0;
        let picked = (yield time_picker.showTimePicker({context: context, initialTime: this.selectedTime}));
        if (picked != null && !dart.equals(picked, this.selectedTime)) {
          t0 = picked;
          this.selectTime(t0);
        }
      }).bind(this));
    }
    build(context) {
      let valueStyle = theme.Theme.of(context).textTheme.title;
      return new basic.Expanded.new({flex: 2, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(22.0), child: new container.Container.new({height: 40.0, padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0, bottom: 5.0}), color: colors.Colors.pink._get(50), child: new ink_well.InkWell.new({onTap: dart.fn(() => {
                this[_selectTime](context);
              }, VoidToNullN()), child: new input_decorator.InputDecorator.new({baseStyle: valueStyle, decoration: new input_decorator.InputDecoration.new({labelText: "time", prefixIcon: new icon.Icon.new(icons.Icons.timer, {size: 20.0, color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), labelStyle: new text_style.TextStyle.new({fontWeight: ui.FontWeight.w500, color: colors.Colors.black87})}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23});
    }
  };
  (TimePicker.TimePicker.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let labelText = opts && 'labelText' in opts ? opts.labelText : null;
    let selectedTime = opts && 'selectedTime' in opts ? opts.selectedTime : null;
    let selectTime = opts && 'selectTime' in opts ? opts.selectTime : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[labelText$] = labelText;
    this[selectedTime$] = selectedTime;
    this[selectTime$] = selectTime;
    TimePicker.TimePicker.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = TimePicker.TimePicker.prototype;
  dart.addTypeTests(TimePicker.TimePicker);
  dart.addTypeCaches(TimePicker.TimePicker);
  dart.setMethodSignature(TimePicker.TimePicker, () => ({
    __proto__: dart.getMethods(TimePicker.TimePicker.__proto__),
    [_selectTime]: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(framework.BuildContext)]),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(TimePicker.TimePicker, L0);
  dart.setFieldSignature(TimePicker.TimePicker, () => ({
    __proto__: dart.getFields(TimePicker.TimePicker.__proto__),
    labelText: dart.finalFieldType(dart.legacy(core.String)),
    selectedTime: dart.finalFieldType(dart.legacy(time.TimeOfDay)),
    selectTime: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(time.TimeOfDay)])))
  }));
  dart.trackLibraries("packages/CabBookFlutterTemplate/widget/TimePicker", {
    "package:CabBookFlutterTemplate/widget/TimePicker.dart": TimePicker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["TimePicker.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOe;;;;;;IACG;;;;;;IACc;;;;;;kBAWQ;AAAd;;AACN,sBACZ,MAAM,qCAAwB,OAAO,eAAe;AACxD,YAAI,MAAM,IAAI,qBAAQ,MAAM,EAAI,oBAAgC;eAAP,MAAM;UAAjB,AAAU;;MAC1D;;UAE0B;AACR,uBAAmB,AAAY,AAAU,eAAnB,OAAO;AAC7C,YAAO,+BACC,UACC,uCACwB,wCAAS,cACzB,qCACC,eACY,uCAAW,aAAa,cAAc,cAC5C,AAAI,wBAAC,YACZ,iCACE;AACe,gBAApB,kBAAY,OAAO;wCAEd,mDACM,UAAU,cACT,oDACG,oBAEP,kBAAW,0BAAa,aAAkB,6FAClC,0CACe,2BAAoB;IAYnE;;;QAvDS;QAAU;QAAgB;QAAmB;;IAAnC;IAAgB;IAAmB;AAChD,yDAAW,GAAG;;EAAC","file":"TimePicker.unsound.ddc.js"}');
  // Exports:
  return {
    widget__TimePicker: TimePicker
  };
}));

//# sourceMappingURL=TimePicker.unsound.ddc.js.map
