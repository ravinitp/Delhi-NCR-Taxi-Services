define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui'], (function load__packages__CabBookFlutterTemplate__widget__GComment(dart_sdk, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web__material, packages__flutter_web_ui__ui) {
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
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const colors = packages__flutter_web__material.src__material__colors;
  const text_form_field = packages__flutter_web__material.src__material__text_form_field;
  const input_decorator = packages__flutter_web__material.src__material__input_decorator;
  const ui = packages__flutter_web_ui__ui.ui;
  var GComment = Object.create(dart.library);
  var MapL = () => (MapL = dart.constFn(dart.legacy(core.Map)))();
  var VoidToMapL = () => (VoidToMapL = dart.constFn(dart.fnType(MapL(), [])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  const CT = Object.create(null);
  var L0 = "package:CabBookFlutterTemplate/widget/GComment.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 15,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 15,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 15,
        [_Location_line]: 40,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 15,
        [_Location_line]: 41,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLength",
        [_Location_column]: 15,
        [_Location_line]: 42,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "enabled",
        [_Location_column]: 15,
        [_Location_line]: 43,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onEditingComplete",
        [_Location_column]: 15,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], _LocationL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/GComment.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], _LocationL());
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 32,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/GComment.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 11,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 32,
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
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/GComment.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22], _LocationL());
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/GComment.dart"
      });
    }
  }, false);
  var labelText$ = dart.privateName(GComment, "Gcomment.labelText");
  var controller$ = dart.privateName(GComment, "Gcomment.controller");
  GComment.Gcomment = class Gcomment extends framework.StatefulWidget {
    get labelText() {
      return this[labelText$];
    }
    set labelText(value) {
      this[labelText$] = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      this[controller$] = value;
    }
    createState() {
      return new GComment._GTextFieldState.new(this.labelText, this.controller);
    }
  };
  (GComment.Gcomment.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let labelText = opts && 'labelText' in opts ? opts.labelText : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[labelText$] = labelText;
    this[controller$] = controller;
    GComment.Gcomment.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = GComment.Gcomment.prototype;
  dart.addTypeTests(GComment.Gcomment);
  dart.addTypeCaches(GComment.Gcomment);
  dart.setMethodSignature(GComment.Gcomment, () => ({
    __proto__: dart.getMethods(GComment.Gcomment.__proto__),
    createState: dart.fnType(dart.legacy(GComment._GTextFieldState), [])
  }));
  dart.setLibraryUri(GComment.Gcomment, L0);
  dart.setFieldSignature(GComment.Gcomment, () => ({
    __proto__: dart.getFields(GComment.Gcomment.__proto__),
    labelText: dart.fieldType(dart.legacy(core.String)),
    controller: dart.fieldType(dart.legacy(editable_text.TextEditingController))
  }));
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C2;
  var C3;
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var C1;
  var C0;
  var C12;
  var C13;
  var C14;
  var C15;
  var C11;
  var C10;
  var C18;
  var C19;
  var C17;
  var C16;
  var C22;
  var C21;
  var C20;
  GComment._GTextFieldState = class _GTextFieldState extends framework.State$(dart.legacy(GComment.Gcomment)) {
    build(context) {
      return new basic.Expanded.new({child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(22.0), child: new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0}), color: colors.Colors.yellow._get(50), width: 350.0, child: new text_form_field.TextFormField.new({controller: this.controller, textCapitalization: text_input.TextCapitalization.characters, keyboardType: text_input.TextInputType.multiline, maxLines: 10, maxLength: 600, enabled: true, onEditingComplete: dart.fn(() => new _js_helper.LinkedMap.new(), VoidToMapL()), decoration: new input_decorator.InputDecoration.new({hintText: this.labelText, hintStyle: new text_style.TextStyle.new({fontWeight: ui.FontWeight.w300, color: colors.Colors.grey, fontStyle: ui.FontStyle.italic})}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C20 || CT.C20});
    }
  };
  (GComment._GTextFieldState.new = function(labelText, controller) {
    this.labelText = null;
    this.controller = null;
    GComment._GTextFieldState.__proto__.new.call(this);
    this.labelText = labelText;
    this.controller = controller;
  }).prototype = GComment._GTextFieldState.prototype;
  dart.addTypeTests(GComment._GTextFieldState);
  dart.addTypeCaches(GComment._GTextFieldState);
  dart.setMethodSignature(GComment._GTextFieldState, () => ({
    __proto__: dart.getMethods(GComment._GTextFieldState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(GComment._GTextFieldState, L0);
  dart.setFieldSignature(GComment._GTextFieldState, () => ({
    __proto__: dart.getFields(GComment._GTextFieldState.__proto__),
    labelText: dart.fieldType(dart.legacy(core.String)),
    controller: dart.fieldType(dart.legacy(editable_text.TextEditingController))
  }));
  dart.trackLibraries("packages/CabBookFlutterTemplate/widget/GComment", {
    "package:CabBookFlutterTemplate/widget/GComment.dart": GComment
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["GComment.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGS;;;;;;IACe;;;;;;;AAQY,+CAAiB,gBAAW;IAAW;;;QANnE;QACC;QACA;;IADA;IACA;AACF,qDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAeM;AACxB,YAAO,gCAIE,uCACwB,wCAAS,cACzB,sCACW,uCAAW,aAAa,eAC9B,AAAM,0BAAC,YACd,cAEA,mDACO,qCAC2B,wDACX,8CAClB,eACC,cACF,yBACU,cAAM,2DACb,mDAEE,2BACC,0CACgB,2BACT,+BACO;IAIzC;;4CApCwB,WAAiC;IAFlD;IACe;AACtB;AAC4B,IAArB,iBAAY,SAAS;AACE,IAAvB,kBAAa,UAAU;EAC9B","file":"GComment.unsound.ddc.js"}');
  // Exports:
  return {
    widget__GComment: GComment
  };
}));

//# sourceMappingURL=GComment.unsound.ddc.js.map
