define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui'], (function load__packages__CabBookFlutterTemplate__widget__location_text_field(dart_sdk, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web__material, packages__flutter_web_ui__ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const editable_text = packages__flutter_web__animation.src__widgets__editable_text;
  const text_input = packages__flutter_web__animation.src__services__text_input;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const colors = packages__flutter_web__material.src__material__colors;
  const text_form_field = packages__flutter_web__material.src__material__text_form_field;
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
        [_Location_line]: 25,
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
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/location_text_field.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 15,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 15,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 15,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 15,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enabled",
        [_Location_column]: 15,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], _LocationL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/location_text_field.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 14,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 16,
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
        [_Location_column]: 22,
        [_Location_line]: 13,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/location_text_field.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 11,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 13,
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
        [_Location_line]: 11,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/location_text_field.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 9,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 10,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 11,
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
        [_Location_column]: 16,
        [_Location_line]: 8,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/location_text_field.dart"
      });
    }
  }, false);
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
  var C11;
  var C5;
  var C4;
  var C14;
  var C15;
  var C16;
  var C13;
  var C12;
  var C19;
  var C20;
  var C18;
  var C17;
  var C23;
  var C24;
  var C25;
  var C22;
  var C21;
  var lableText$ = dart.privateName(location_text_field, "LocationTextField.lableText");
  location_text_field.LocationTextField = class LocationTextField extends framework.StatelessWidget {
    get lableText() {
      return this[lableText$];
    }
    set lableText(value) {
      super.lableText = value;
    }
    build(context) {
      return new container.Container.new({margin: C0 || CT.C0, height: 45.0, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(22.0), child: new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0}), color: colors.Colors.pink._get(50), child: new text_form_field.TextFormField.new({style: new text_style.TextStyle.new({color: colors.Colors.black}), controller: new editable_text.TextEditingController.new(), textCapitalization: text_input.TextCapitalization.characters, keyboardType: text_input.TextInputType.text, enabled: true, decoration: new input_decorator.InputDecoration.new({prefixIcon: new icon.Icon.new(icons.Icons.map, {$creationLocationd_0dea112b090073317d4: C1 || CT.C1}), hintText: this.lableText, hintStyle: new text_style.TextStyle.new({fontWeight: ui.FontWeight.w300, color: colors.Colors.black87})}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21});
    }
  };
  (location_text_field.LocationTextField.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let lableText = opts && 'lableText' in opts ? opts.lableText : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[lableText$] = lableText;
    location_text_field.LocationTextField.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = location_text_field.LocationTextField.prototype;
  dart.addTypeTests(location_text_field.LocationTextField);
  dart.addTypeCaches(location_text_field.LocationTextField);
  dart.setMethodSignature(location_text_field.LocationTextField, () => ({
    __proto__: dart.getMethods(location_text_field.LocationTextField.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(location_text_field.LocationTextField, L0);
  dart.setFieldSignature(location_text_field.LocationTextField, () => ({
    __proto__: dart.getFields(location_text_field.LocationTextField.__proto__),
    lableText: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.trackLibraries("packages/CabBookFlutterTemplate/widget/location_text_field", {
    "package:CabBookFlutterTemplate/widget/location_text_field.dart": location_text_field
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["location_text_field.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIe;;;;;;UAEa;AACxB,YAAW,2DAED,aACD,uCACwB,wCAAS,cACzB,sCACW,uCAAW,aAAa,eAC9B,AAAI,wBAAC,YACZ,8CACE,qCAAwB,mCACnB,mEAC2B,wDACX,wCACnB,kBAGG,qDACI,kBAAW,mFACb,2BACC,0CACgB,2BAAoB;IAI/D;;;QA5B6B;QAAU;;;AAAc,yEAAW,GAAG;;EAAC","file":"location_text_field.unsound.ddc.js"}');
  // Exports:
  return {
    widget__location_text_field: location_text_field
  };
}));

//# sourceMappingURL=location_text_field.unsound.ddc.js.map
