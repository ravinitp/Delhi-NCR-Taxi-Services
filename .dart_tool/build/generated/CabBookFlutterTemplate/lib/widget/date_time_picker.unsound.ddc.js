define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/CabBookFlutterTemplate/widget/DatePicker', 'packages/CabBookFlutterTemplate/widget/TimePicker'], (function load__packages__CabBookFlutterTemplate__widget__date_time_picker(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__CabBookFlutterTemplate__widget__DatePicker, packages__CabBookFlutterTemplate__widget__TimePicker) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const theme = packages__flutter_web__material.src__material__theme;
  const time = packages__flutter_web__material.src__material__time;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const DatePicker = packages__CabBookFlutterTemplate__widget__DatePicker.widget__DatePicker;
  const TimePicker = packages__CabBookFlutterTemplate__widget__TimePicker.widget__TimePicker;
  var date_time_picker = Object.create(dart.library);
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  const CT = Object.create(null);
  var L0 = "package:CabBookFlutterTemplate/widget/date_time_picker.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: time.TimeOfDay.prototype,
        [TimeOfDay_minute]: 28,
        [TimeOfDay_hour]: 7
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelText",
        [_Location_column]: 24,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedDate",
        [_Location_column]: 51,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4], _LocationL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/date_time_picker.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelText",
        [_Location_column]: 24,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedTime",
        [_Location_column]: 43,
        [_Location_line]: 30,
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
        [_Location_column]: 13,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/date_time_picker.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], _LocationL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/date_time_picker.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 12
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelText",
        [_Location_column]: 24,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedDate",
        [_Location_column]: 50,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], _LocationL());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 34,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/date_time_picker.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelText",
        [_Location_column]: 24,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedTime",
        [_Location_column]: 43,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20], _LocationL());
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/date_time_picker.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23], _LocationL());
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/date_time_picker.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26, C27 || CT.C27], _LocationL());
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/date_time_picker.dart"
      });
    }
  }, false);
  var TimeOfDay_minute = dart.privateName(time, "TimeOfDay.minute");
  var TimeOfDay_hour = dart.privateName(time, "TimeOfDay.hour");
  var C0;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C3;
  var C4;
  var C2;
  var C1;
  var C7;
  var C8;
  var C6;
  var C5;
  var C11;
  var C10;
  var C9;
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var C12;
  var C15;
  var C16;
  var C14;
  var C13;
  var C19;
  var C20;
  var C18;
  var C17;
  var C23;
  var C22;
  var C21;
  var C26;
  var C27;
  var C25;
  var C24;
  var labelText$ = dart.privateName(date_time_picker, "DateTimePicker.labelText");
  var selectedDate$ = dart.privateName(date_time_picker, "DateTimePicker.selectedDate");
  var selectedTime$ = dart.privateName(date_time_picker, "DateTimePicker.selectedTime");
  var selectDate$ = dart.privateName(date_time_picker, "DateTimePicker.selectDate");
  var selectTime$ = dart.privateName(date_time_picker, "DateTimePicker.selectTime");
  date_time_picker.DateTimePicker = class DateTimePicker extends framework.StatelessWidget {
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
    get selectedTime() {
      return this[selectedTime$];
    }
    set selectedTime(value) {
      super.selectedTime = value;
    }
    get selectDate() {
      return this[selectDate$];
    }
    set selectDate(value) {
      super.selectDate = value;
    }
    get selectTime() {
      return this[selectTime$];
    }
    set selectTime(value) {
      super.selectTime = value;
    }
    build(context) {
      let valueStyle = theme.Theme.of(context).textTheme.title;
      let _selected_time = C0 || CT.C0;
      return new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.end, children: JSArrayOfWidgetL().of([new basic.Row.new({children: JSArrayOfWidgetL().of([new DatePicker.DatePicker.new({labelText: "Ongoing Date", selectedDate: new core.DateTime.now(), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), new TimePicker.TimePicker.new({labelText: "time", selectedTime: _selected_time, $creationLocationd_0dea112b090073317d4: C5 || CT.C5})]), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), C12 || CT.C12, new basic.Row.new({children: JSArrayOfWidgetL().of([new DatePicker.DatePicker.new({labelText: "Return Date", selectedDate: new core.DateTime.now(), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), new TimePicker.TimePicker.new({labelText: "time", selectedTime: _selected_time, $creationLocationd_0dea112b090073317d4: C17 || CT.C17})]), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), C12 || CT.C12]), $creationLocationd_0dea112b090073317d4: C24 || CT.C24});
    }
  };
  (date_time_picker.DateTimePicker.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let labelText = opts && 'labelText' in opts ? opts.labelText : null;
    let selectedDate = opts && 'selectedDate' in opts ? opts.selectedDate : null;
    let selectedTime = opts && 'selectedTime' in opts ? opts.selectedTime : null;
    let selectDate = opts && 'selectDate' in opts ? opts.selectDate : null;
    let selectTime = opts && 'selectTime' in opts ? opts.selectTime : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[labelText$] = labelText;
    this[selectedDate$] = selectedDate;
    this[selectedTime$] = selectedTime;
    this[selectDate$] = selectDate;
    this[selectTime$] = selectTime;
    date_time_picker.DateTimePicker.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = date_time_picker.DateTimePicker.prototype;
  dart.addTypeTests(date_time_picker.DateTimePicker);
  dart.addTypeCaches(date_time_picker.DateTimePicker);
  dart.setMethodSignature(date_time_picker.DateTimePicker, () => ({
    __proto__: dart.getMethods(date_time_picker.DateTimePicker.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(date_time_picker.DateTimePicker, L0);
  dart.setFieldSignature(date_time_picker.DateTimePicker, () => ({
    __proto__: dart.getFields(date_time_picker.DateTimePicker.__proto__),
    labelText: dart.finalFieldType(dart.legacy(core.String)),
    selectedDate: dart.finalFieldType(dart.legacy(core.DateTime)),
    selectedTime: dart.finalFieldType(dart.legacy(time.TimeOfDay)),
    selectDate: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(core.DateTime)]))),
    selectTime: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(time.TimeOfDay)])))
  }));
  dart.trackLibraries("packages/CabBookFlutterTemplate/widget/date_time_picker", {
    "package:CabBookFlutterTemplate/widget/date_time_picker.dart": date_time_picker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_time_picker.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAce;;;;;;IACE;;;;;;IACC;;;;;;IACa;;;;;;IACC;;;;;;UAGJ;AACR,uBAAmB,AAAY,AAAU,eAAnB,OAAO;AACvC;AACN,YAAO,2CACoC,uCACrB,uBAChB,6BAAsB,uBACpB,0CAAsB,8BAAuC,gFAC7D,0CAAsB,sBAAsB,cAAc,iIAG5D,6BAAsB,uBACpB,0CAAsB,6BAAsC,kFAC5D,0CAAsB,sBAAsB,cAAc;IAIpE;;;QAhCS;QACA;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;AACH,mEAAW,GAAG;;EAAC","file":"date_time_picker.unsound.ddc.js"}');
  // Exports:
  return {
    widget__date_time_picker: date_time_picker
  };
}));

//# sourceMappingURL=date_time_picker.unsound.ddc.js.map
