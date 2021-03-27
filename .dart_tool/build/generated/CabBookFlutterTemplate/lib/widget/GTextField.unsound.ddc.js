define(['dart_sdk', 'packages/flutter_web/animation', 'packages/CabBookFlutterTemplate/model/BookingDetails', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui'], (function load__packages__CabBookFlutterTemplate__widget__GTextField(dart_sdk, packages__flutter_web__animation, packages__CabBookFlutterTemplate__model__BookingDetails, packages__flutter_web__src__animation__animation, packages__flutter_web__material, packages__flutter_web_ui__ui) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const editable_text = packages__flutter_web__animation.src__widgets__editable_text;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const text_input = packages__flutter_web__animation.src__services__text_input;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const BookingDetails = packages__CabBookFlutterTemplate__model__BookingDetails.model__BookingDetails;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const colors = packages__flutter_web__material.src__material__colors;
  const text_form_field = packages__flutter_web__material.src__material__text_form_field;
  const input_decorator = packages__flutter_web__material.src__material__input_decorator;
  const icons = packages__flutter_web__material.src__material__icons;
  const ui = packages__flutter_web_ui__ui.ui;
  var GTextField = Object.create(dart.library);
  var $toLowerCase = dartx.toLowerCase;
  var $contains = dartx.contains;
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var VoidToMapL = () => (VoidToMapL = dart.constFn(dart.fnType(MapL(), [])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  const CT = Object.create(null);
  var L0 = "package:CabBookFlutterTemplate/widget/GTextField.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 36,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], _LocationL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/GTextField.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 15,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 15,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 15,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enabled",
        [_Location_column]: 15,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onEditingComplete",
        [_Location_column]: 15,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], _LocationL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 42,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/GTextField.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], _LocationL());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/GTextField.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 11,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
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
        [_Location_column]: 14,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/GTextField.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 36,
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
        [_Location_column]: 12,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/GTextField.dart"
      });
    }
  }, false);
  var labelText$ = dart.privateName(GTextField, "GTextField.labelText");
  var bookingDetails$ = dart.privateName(GTextField, "GTextField.bookingDetails");
  var controller$ = dart.privateName(GTextField, "GTextField.controller");
  GTextField.GTextField = class GTextField$ extends framework.StatefulWidget {
    get labelText() {
      return this[labelText$];
    }
    set labelText(value) {
      this[labelText$] = value;
    }
    get bookingDetails() {
      return this[bookingDetails$];
    }
    set bookingDetails(value) {
      this[bookingDetails$] = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      this[controller$] = value;
    }
    createState() {
      return new GTextField._GTextFieldState.new(this.labelText, this.bookingDetails, this.controller);
    }
  };
  (GTextField.GTextField.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let labelText = opts && 'labelText' in opts ? opts.labelText : null;
    let bookingDetails = opts && 'bookingDetails' in opts ? opts.bookingDetails : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[labelText$] = labelText;
    this[bookingDetails$] = bookingDetails;
    this[controller$] = controller;
    GTextField.GTextField.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = GTextField.GTextField.prototype;
  dart.addTypeTests(GTextField.GTextField);
  dart.addTypeCaches(GTextField.GTextField);
  dart.setMethodSignature(GTextField.GTextField, () => ({
    __proto__: dart.getMethods(GTextField.GTextField.__proto__),
    createState: dart.fnType(dart.legacy(GTextField._GTextFieldState), [])
  }));
  dart.setLibraryUri(GTextField.GTextField, L0);
  dart.setFieldSignature(GTextField.GTextField, () => ({
    __proto__: dart.getFields(GTextField.GTextField.__proto__),
    labelText: dart.fieldType(dart.legacy(core.String)),
    bookingDetails: dart.fieldType(dart.legacy(BookingDetails.BookingDetails)),
    controller: dart.fieldType(dart.legacy(editable_text.TextEditingController))
  }));
  var _getIcon = dart.privateName(GTextField, "_getIcon");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C2;
  var C1;
  var C0;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C4;
  var C3;
  var C13;
  var C14;
  var C15;
  var C16;
  var C12;
  var C11;
  var C19;
  var C20;
  var C18;
  var C17;
  var C23;
  var C22;
  var C21;
  GTextField._GTextFieldState = class _GTextFieldState extends framework.State$(dart.legacy(GTextField.GTextField)) {
    build(context) {
      return new basic.Expanded.new({child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(22.0), child: new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0}), color: colors.Colors.yellow._get(50), width: 350.0, child: new text_form_field.TextFormField.new({controller: this.controller, textCapitalization: text_input.TextCapitalization.characters, keyboardType: text_input.TextInputType.text, enabled: true, onEditingComplete: dart.fn(() => new _js_helper.LinkedMap.new(), VoidToMapL()), decoration: new input_decorator.InputDecoration.new({prefixIcon: new icon.Icon.new(this[_getIcon](), {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), hintText: this.labelText, hintStyle: new text_style.TextStyle.new({fontWeight: ui.FontWeight.w300, color: colors.Colors.black87})}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21});
    }
    [_getIcon]() {
      if (this.labelText != null && this.labelText[$toLowerCase]()[$contains]("phone")) {
        return icons.Icons.phone;
      } else if (this.labelText != null && this.labelText[$toLowerCase]()[$contains]("email")) {
        return icons.Icons.mail;
      } else {
        return icons.Icons.text_format;
      }
    }
  };
  (GTextField._GTextFieldState.new = function(labelText, bookingDetails, controller) {
    this.labelText = "";
    this.bookingDetails = null;
    this.controller = null;
    GTextField._GTextFieldState.__proto__.new.call(this);
    this.bookingDetails = bookingDetails;
    this.labelText = labelText;
    this.controller = controller;
  }).prototype = GTextField._GTextFieldState.prototype;
  dart.addTypeTests(GTextField._GTextFieldState);
  dart.addTypeCaches(GTextField._GTextFieldState);
  dart.setMethodSignature(GTextField._GTextFieldState, () => ({
    __proto__: dart.getMethods(GTextField._GTextFieldState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_getIcon]: dart.fnType(dart.legacy(icon_data.IconData), [])
  }));
  dart.setLibraryUri(GTextField._GTextFieldState, L0);
  dart.setFieldSignature(GTextField._GTextFieldState, () => ({
    __proto__: dart.getFields(GTextField._GTextFieldState.__proto__),
    labelText: dart.fieldType(dart.legacy(core.String)),
    bookingDetails: dart.fieldType(dart.legacy(BookingDetails.BookingDetails)),
    controller: dart.fieldType(dart.legacy(editable_text.TextEditingController))
  }));
  dart.trackLibraries("packages/CabBookFlutterTemplate/widget/GTextField", {
    "package:CabBookFlutterTemplate/widget/GTextField.dart": GTextField
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["GTextField.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIS;;;;;;IACQ;;;;;;IACO;;;;;;;AAUlB,iDAAiB,gBAAW,qBAAgB;IAAW;;;QARrD;QACC;QACA;QACA;;IAFA;IACA;IACA;AACF,yDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAkBM;AACxB,YAAO,gCAIE,uCACwB,wCAAS,cACzB,sCACW,uCAAW,aAAa,eAC9B,AAAM,0BAAC,YACd,cACA,mDACO,qCAC2B,wDACX,wCACnB,yBACU,cAAM,2DACb,qDACI,kBAAK,oFACP,2BACC,0CACgB,2BAAoB;IAI/D;;AAGE,UAAS,kBAAa,QACb,AAAU,AAAc,0CAAS;AACxC,cAAa;YACR,KAAS,kBAAa,QACpB,AAAU,AAAc,0CAAS;AACxC,cAAa;;AAEb,cAAa;;IAEjB;;8CA7CwB,WAA0B,gBACxB;IAHnB,iBAAY;IACJ;IAOO;AANtB;AAEsC,IAA/B,sBAAiB,cAAc;AACV,IAArB,iBAAY,SAAS;AACE,IAAvB,kBAAa,UAAU;EAC9B","file":"GTextField.unsound.ddc.js"}');
  // Exports:
  return {
    widget__GTextField: GTextField
  };
}));

//# sourceMappingURL=GTextField.unsound.ddc.js.map
