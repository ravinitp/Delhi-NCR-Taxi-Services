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
  const editable_text = packages__flutter_web__animation.src__widgets__editable_text;
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
        [_Location_column]: 15,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedDate",
        [_Location_column]: 15,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 15,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], _LocationL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/date_time_picker.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 22,
        [_Location_line]: 32,
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
        [_Location_column]: 13,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/date_time_picker.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelText",
        [_Location_column]: 17,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedTime",
        [_Location_column]: 17,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 17,
        [_Location_line]: 36,
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
        [_Location_column]: 13,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/date_time_picker.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 26,
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
        [_Location_column]: 11,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/date_time_picker.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 20,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 33,
        [_Location_line]: 38,
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
        [_Location_column]: 11,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/date_time_picker.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelText",
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedDate",
        [_Location_column]: 15,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 15,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24, C25 || CT.C25], _LocationL());
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C22 || CT.C22,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 40,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/date_time_picker.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 22,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28], _LocationL());
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 45,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/date_time_picker.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelText",
        [_Location_column]: 17,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedTime",
        [_Location_column]: 17,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 17,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], _LocationL());
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/date_time_picker.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36], _LocationL());
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 39,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/date_time_picker.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 12
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41], _LocationL());
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C39 || CT.C39,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 23,
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
  var C5;
  var C2;
  var C1;
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
  var C20;
  var C18;
  var C17;
  var C23;
  var C24;
  var C25;
  var C22;
  var C21;
  var C28;
  var C27;
  var C26;
  var C31;
  var C32;
  var C33;
  var C30;
  var C29;
  var C36;
  var C35;
  var C34;
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var C37;
  var C40;
  var C41;
  var C39;
  var C38;
  var pickupDateController$ = dart.privateName(date_time_picker, "DateTimePicker.pickupDateController");
  var pickupTimeController$ = dart.privateName(date_time_picker, "DateTimePicker.pickupTimeController");
  var returnDateController$ = dart.privateName(date_time_picker, "DateTimePicker.returnDateController");
  var returnTimeController$ = dart.privateName(date_time_picker, "DateTimePicker.returnTimeController");
  date_time_picker.DateTimePicker = class DateTimePicker extends framework.StatelessWidget {
    get pickupDateController() {
      return this[pickupDateController$];
    }
    set pickupDateController(value) {
      super.pickupDateController = value;
    }
    get pickupTimeController() {
      return this[pickupTimeController$];
    }
    set pickupTimeController(value) {
      super.pickupTimeController = value;
    }
    get returnDateController() {
      return this[returnDateController$];
    }
    set returnDateController(value) {
      super.returnDateController = value;
    }
    get returnTimeController() {
      return this[returnTimeController$];
    }
    set returnTimeController(value) {
      super.returnTimeController = value;
    }
    build(context) {
      let valueStyle = theme.Theme.of(context).textTheme.title;
      let _selected_time = C0 || CT.C0;
      return new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.end, children: JSArrayOfWidgetL().of([new basic.Row.new({children: JSArrayOfWidgetL().of([new DatePicker.DatePicker.new({labelText: "Pickup Date", selectedDate: new core.DateTime.now(), controller: this.pickupDateController, $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), new TimePicker.TimePicker.new({labelText: "Pickup Time", selectedTime: new time.TimeOfDay.new({hour: 18, minute: 28}), controller: this.pickupTimeController, $creationLocationd_0dea112b090073317d4: C9 || CT.C9})]), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new basic.SizedBox.new({width: 12.0, height: 12.0, $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), new basic.Row.new({children: JSArrayOfWidgetL().of([new DatePicker.DatePicker.new({labelText: "Return Date", selectedDate: new core.DateTime.now(), controller: this.returnDateController, $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), new TimePicker.TimePicker.new({labelText: "Return Time", selectedTime: new time.TimeOfDay.new({hour: 18, minute: 28}), controller: this.returnTimeController, $creationLocationd_0dea112b090073317d4: C29 || CT.C29})]), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), C37 || CT.C37]), $creationLocationd_0dea112b090073317d4: C38 || CT.C38});
    }
  };
  (date_time_picker.DateTimePicker.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let pickupDateController = opts && 'pickupDateController' in opts ? opts.pickupDateController : null;
    let pickupTimeController = opts && 'pickupTimeController' in opts ? opts.pickupTimeController : null;
    let returnDateController = opts && 'returnDateController' in opts ? opts.returnDateController : null;
    let returnTimeController = opts && 'returnTimeController' in opts ? opts.returnTimeController : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[pickupDateController$] = pickupDateController;
    this[pickupTimeController$] = pickupTimeController;
    this[returnDateController$] = returnDateController;
    this[returnTimeController$] = returnTimeController;
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
    pickupDateController: dart.finalFieldType(dart.legacy(editable_text.TextEditingController)),
    pickupTimeController: dart.finalFieldType(dart.legacy(editable_text.TextEditingController)),
    returnDateController: dart.finalFieldType(dart.legacy(editable_text.TextEditingController)),
    returnTimeController: dart.finalFieldType(dart.legacy(editable_text.TextEditingController))
  }));
  dart.trackLibraries("packages/CabBookFlutterTemplate/widget/date_time_picker", {
    "package:CabBookFlutterTemplate/widget/date_time_picker.dart": date_time_picker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_time_picker.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAa8B;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;UAGF;AACR,uBAAmB,AAAY,AAAU,eAAnB,OAAO;AACvC;AACN,YAAO,2CACoC,uCACrB,uBAChB,6BAAsB,uBACpB,0CACa,6BACY,qCACX,kFAEd,+BAAgB,6DAChB,0CACe,6BACG,8BAAgB,YAAY,kBAC9B,6IAElB,+BAAgB,cAAc,+DAC9B,6BAAsB,uBACpB,0CACa,6BACY,qCACX,oFAEd,+BAAgB,+DAChB,0CACe,6BACG,8BAAgB,YAAY,kBAC9B;IAI1B;;;QA9CS;QACA;QACA;QACA;QACA;;IAHA;IACA;IACA;IACA;AACH,mEAAW,GAAG;;EAAC","file":"date_time_picker.unsound.ddc.js"}');
  // Exports:
  return {
    widget__date_time_picker: date_time_picker
  };
}));

//# sourceMappingURL=date_time_picker.unsound.ddc.js.map
