define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui'], (function load__packages__CabBookFlutterTemplate__widget__location_text_field(dart_sdk, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web__material, packages__flutter_web_ui__ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const editable_text = packages__flutter_web__animation.src__widgets__editable_text;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const text_input = packages__flutter_web__animation.src__services__text_input;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const colors = packages__flutter_web__material.src__material__colors;
  const text_field = packages__flutter_web__material.src__material__text_field;
  const input_decorator = packages__flutter_web__material.src__material__input_decorator;
  const icons = packages__flutter_web__material.src__material__icons;
  const ui = packages__flutter_web_ui__ui.ui;
  var location_text_field = Object.create(dart.library);
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  const CT = Object.create(null);
  var L0 = "package:CabBookFlutterTemplate/widget/location_text_field.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 20,
        [EdgeInsets__left]: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 42,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3], _LocationL());
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C2 || CT.C2,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/location_text_field.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 15,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 15,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 15,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enabled",
        [_Location_column]: 15,
        [_Location_line]: 45,
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
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], _LocationL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 41,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/location_text_field.dart"
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
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], _LocationL());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/location_text_field.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 11,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19], _LocationL());
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 36,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/location_text_field.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23, C24 || CT.C24], _LocationL());
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/location_text_field.dart"
      });
    }
  }, false);
  var lableText$ = dart.privateName(location_text_field, "LocationTextField.lableText");
  var controller$ = dart.privateName(location_text_field, "LocationTextField.controller");
  location_text_field.LocationTextField = class LocationTextField extends framework.StatefulWidget {
    get lableText() {
      return this[lableText$];
    }
    set lableText(value) {
      super.lableText = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    createState() {
      return new location_text_field._LocationSearch.new(this.lableText, this.controller);
    }
  };
  (location_text_field.LocationTextField.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let lableText = opts && 'lableText' in opts ? opts.lableText : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[lableText$] = lableText;
    this[controller$] = controller;
    location_text_field.LocationTextField.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = location_text_field.LocationTextField.prototype;
  dart.addTypeTests(location_text_field.LocationTextField);
  dart.addTypeCaches(location_text_field.LocationTextField);
  dart.setMethodSignature(location_text_field.LocationTextField, () => ({
    __proto__: dart.getMethods(location_text_field.LocationTextField.__proto__),
    createState: dart.fnType(dart.legacy(location_text_field._LocationSearch), [])
  }));
  dart.setLibraryUri(location_text_field.LocationTextField, L0);
  dart.setFieldSignature(location_text_field.LocationTextField, () => ({
    __proto__: dart.getFields(location_text_field.LocationTextField.__proto__),
    lableText: dart.finalFieldType(dart.legacy(core.String)),
    controller: dart.finalFieldType(dart.legacy(editable_text.TextEditingController))
  }));
  var _controller$ = dart.privateName(location_text_field, "_controller");
  var _streetNumber = dart.privateName(location_text_field, "_streetNumber");
  var _street = dart.privateName(location_text_field, "_street");
  var _city = dart.privateName(location_text_field, "_city");
  var _zipCode = dart.privateName(location_text_field, "_zipCode");
  var _lableText = dart.privateName(location_text_field, "_lableText");
  var EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  var EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  var EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  var EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  var C0;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C3;
  var C2;
  var C1;
  var C6;
  var C7;
  var C8;
  var C9;
  var C10;
  var C5;
  var C4;
  var C13;
  var C14;
  var C15;
  var C12;
  var C11;
  var C18;
  var C19;
  var C17;
  var C16;
  var C22;
  var C23;
  var C24;
  var C21;
  var C20;
  location_text_field._LocationSearch = class _LocationSearch extends framework.State$(dart.legacy(location_text_field.LocationTextField)) {
    build(context) {
      return new container.Container.new({margin: C0 || CT.C0, height: 45.0, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(22.0), child: new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0}), color: colors.Colors.yellow._get(50), child: new text_field.TextField.new({controller: this[_controller$], textCapitalization: text_input.TextCapitalization.characters, keyboardType: text_input.TextInputType.text, enabled: true, decoration: new input_decorator.InputDecoration.new({prefixIcon: new icon.Icon.new(icons.Icons.location_city, {$creationLocationd_0dea112b090073317d4: C1 || CT.C1}), hintText: this[_lableText], hintStyle: new text_style.TextStyle.new({fontWeight: ui.FontWeight.w300, color: colors.Colors.black87})}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20});
    }
  };
  (location_text_field._LocationSearch.new = function(lable_text, _controller) {
    this[_controller$] = null;
    this[_streetNumber] = "";
    this[_street] = "";
    this[_city] = "";
    this[_zipCode] = "";
    this[_lableText] = null;
    location_text_field._LocationSearch.__proto__.new.call(this);
    this[_lableText] = lable_text;
    this[_controller$] = _controller;
  }).prototype = location_text_field._LocationSearch.prototype;
  dart.addTypeTests(location_text_field._LocationSearch);
  dart.addTypeCaches(location_text_field._LocationSearch);
  dart.setMethodSignature(location_text_field._LocationSearch, () => ({
    __proto__: dart.getMethods(location_text_field._LocationSearch.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(location_text_field._LocationSearch, L0);
  dart.setFieldSignature(location_text_field._LocationSearch, () => ({
    __proto__: dart.getFields(location_text_field._LocationSearch.__proto__),
    [_controller$]: dart.fieldType(dart.legacy(editable_text.TextEditingController)),
    [_streetNumber]: dart.fieldType(dart.legacy(core.String)),
    [_street]: dart.fieldType(dart.legacy(core.String)),
    [_city]: dart.fieldType(dart.legacy(core.String)),
    [_zipCode]: dart.fieldType(dart.legacy(core.String)),
    [_lableText]: dart.fieldType(dart.legacy(core.String))
  }));
  dart.trackLibraries("packages/CabBookFlutterTemplate/widget/location_text_field", {
    "package:CabBookFlutterTemplate/widget/location_text_field.dart": location_text_field
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["location_text_field.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAYe;;;;;;IACe;;;;;;;AACK,yDAAgB,gBAAW;IAAW;;;QANjE;QACC;QACA;;IADA;IACA;AACF,yEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAoBM;AACxB,YAAW,2DAED,aACD,uCACwB,wCAAS,cACzB,sCACW,uCAAW,aAAa,eAC9B,AAAM,0BAAC,YACd,0CACO,wCAC2B,wDACX,wCACnB,kBAGG,qDACI,kBAAW,6FACb,6BACC,0CACgB,2BAAoB;IAI/D;;sDA9BuB,YAAkC;IAPnC;IAEf,sBAAgB;IAChB,gBAAU;IACV,cAAQ;IACR,iBAAW;IACX;AACP;AAC8B,IAAvB,mBAAa,UAAU;AACE,IAAzB,qBAAc,WAAW;EAChC","file":"location_text_field.unsound.ddc.js"}');
  // Exports:
  return {
    widget__location_text_field: location_text_field
  };
}));

//# sourceMappingURL=location_text_field.unsound.ddc.js.map
