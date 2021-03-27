define(['dart_sdk', 'packages/flutter_web/material', 'packages/CabBookFlutterTemplate/utils/FormUtil', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], (function load__packages__CabBookFlutterTemplate__widget__DatePicker(dart_sdk, packages__flutter_web__material, packages__CabBookFlutterTemplate__utils__FormUtil, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const date_picker = packages__flutter_web__material.src__material__date_picker;
  const theme = packages__flutter_web__material.src__material__theme;
  const colors = packages__flutter_web__material.src__material__colors;
  const ink_well = packages__flutter_web__material.src__material__ink_well;
  const text_field = packages__flutter_web__material.src__material__text_field;
  const input_decorator = packages__flutter_web__material.src__material__input_decorator;
  const icons = packages__flutter_web__material.src__material__icons;
  const FormUtil = packages__CabBookFlutterTemplate__utils__FormUtil.utils__FormUtil;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const editable_text = packages__flutter_web__animation.src__widgets__editable_text;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const ui = packages__flutter_web_ui__ui.ui;
  var DatePicker = Object.create(dart.library);
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  const CT = Object.create(null);
  var L0 = "package:CabBookFlutterTemplate/widget/DatePicker.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 46,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 27,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 37,
        [_Location_line]: 51,
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
        [_Location_column]: 35,
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/DatePicker.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 19,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 19,
        [_Location_line]: 47,
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
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/DatePicker.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 17,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 44,
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
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/DatePicker.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 39,
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
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/DatePicker.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 11,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 35,
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
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/DatePicker.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 33,
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
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/DatePicker.dart"
      });
    }
  }, false);
  var _selectDate = dart.privateName(DatePicker, "_selectDate");
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
  var labelText$ = dart.privateName(DatePicker, "DatePicker.labelText");
  var selectedDate$ = dart.privateName(DatePicker, "DatePicker.selectedDate");
  var selectDate$ = dart.privateName(DatePicker, "DatePicker.selectDate");
  var controller$ = dart.privateName(DatePicker, "DatePicker.controller");
  DatePicker.DatePicker = class DatePicker extends framework.StatelessWidget {
    get labelText() {
      return this[labelText$];
    }
    set labelText(value) {
      super.labelText = value;
    }
    get selectedDate() {
      return this[selectedDate$];
    }
    set selectedDate(value) {
      super.selectedDate = value;
    }
    get selectDate() {
      return this[selectDate$];
    }
    set selectDate(value) {
      super.selectDate = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    [_selectDate](context) {
      return async.async(dart.void, (function* _selectDate() {
        let picked = (yield date_picker.showDatePicker({context: context, initialDate: new core.DateTime.now(), firstDate: new core.DateTime.now(), lastDate: new core.DateTime.new(2101)}));
        if (picked != null) {
          this.controller.text = FormUtil.FormUtil.formatDate(picked, this.labelText);
        }
        ;
      }).bind(this));
    }
    build(context) {
      let valueStyle = theme.Theme.of(context).textTheme.title;
      return new basic.Expanded.new({flex: 2, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(22.0), child: new container.Container.new({height: 40.0, padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0, bottom: 5.0}), color: colors.Colors.yellow._get(50), child: new ink_well.InkWell.new({onTap: dart.fn(() => {
                core.print("tapped");
                this[_selectDate](context);
              }, VoidToNullN()), child: new text_field.TextField.new({controller: this.controller, decoration: new input_decorator.InputDecoration.new({hintText: this.labelText, enabled: false, prefixIcon: new icon.Icon.new(icons.Icons.calendar_today, {size: 20.0, color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), labelStyle: new text_style.TextStyle.new({fontWeight: ui.FontWeight.w500, color: colors.Colors.black87})}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23});
    }
  };
  (DatePicker.DatePicker.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let labelText = opts && 'labelText' in opts ? opts.labelText : null;
    let selectedDate = opts && 'selectedDate' in opts ? opts.selectedDate : null;
    let selectDate = opts && 'selectDate' in opts ? opts.selectDate : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[labelText$] = labelText;
    this[selectedDate$] = selectedDate;
    this[selectDate$] = selectDate;
    this[controller$] = controller;
    DatePicker.DatePicker.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = DatePicker.DatePicker.prototype;
  dart.addTypeTests(DatePicker.DatePicker);
  dart.addTypeCaches(DatePicker.DatePicker);
  dart.setMethodSignature(DatePicker.DatePicker, () => ({
    __proto__: dart.getMethods(DatePicker.DatePicker.__proto__),
    [_selectDate]: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(framework.BuildContext)]),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(DatePicker.DatePicker, L0);
  dart.setFieldSignature(DatePicker.DatePicker, () => ({
    __proto__: dart.getFields(DatePicker.DatePicker.__proto__),
    labelText: dart.finalFieldType(dart.legacy(core.String)),
    selectedDate: dart.finalFieldType(dart.legacy(core.DateTime)),
    selectDate: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(core.DateTime)]))),
    controller: dart.finalFieldType(dart.legacy(editable_text.TextEditingController))
  }));
  dart.trackLibraries("packages/CabBookFlutterTemplate/widget/DatePicker", {
    "package:CabBookFlutterTemplate/widget/DatePicker.dart": DatePicker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["DatePicker.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAYe;;;;;;IACE;;;;;;IACc;;;;;;IACD;;;;;;kBACU;AAAd;AACP,sBAAS,MAAM,qCACjB,OAAO,eACM,oCACF,mCACV,sBAAS;AACvB,YAAI,MAAM,IAAI;AAC4C,UAAxD,AAAW,uBAAgB,6BAAW,MAAM,EAAE;;AAEhD;MACF;;UAE0B;AACR,uBAAmB,AAAY,AAAU,eAAnB,OAAO;AAC7C,YAAO,+BACC,UACC,uCACwB,wCAAS,cACzB,qCACC,eACY,uCAAW,aAAa,cAAc,cAC5C,AAAM,0BAAC,YACd,iCACE;AACU,gBAAf,WAAM;AACc,gBAApB,kBAAY,OAAO;wCAEd,0CAEO,6BACA,mDACE,yBACD,mBACG,kBAAW,mCACb,aAAkB,6FAChB,0CACe,2BAAoB;IAanE;;;QA5DS;QACA;QACA;QACA;QACU;;IAHV;IACA;IACA;IACU;AACb,yDAAW,GAAG;;EAAC","file":"DatePicker.unsound.ddc.js"}');
  // Exports:
  return {
    widget__DatePicker: DatePicker
  };
}));

//# sourceMappingURL=DatePicker.unsound.ddc.js.map
