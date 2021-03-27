define(['dart_sdk', 'packages/flutter_web/animation', 'packages/CabBookFlutterTemplate/model/BookingDetails', 'packages/CabBookFlutterTemplate/model/FormController', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/CabBookFlutterTemplate/widget/GTextField', 'packages/CabBookFlutterTemplate/widget/location_text_field', 'packages/CabBookFlutterTemplate/widget/date_time_picker', 'packages/CabBookFlutterTemplate/widget/GComment'], (function load__packages__CabBookFlutterTemplate__widget__BookingForm(dart_sdk, packages__flutter_web__animation, packages__CabBookFlutterTemplate__model__BookingDetails, packages__CabBookFlutterTemplate__model__FormController, packages__flutter_web__material, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui, packages__CabBookFlutterTemplate__widget__GTextField, packages__CabBookFlutterTemplate__widget__location_text_field, packages__CabBookFlutterTemplate__widget__date_time_picker, packages__CabBookFlutterTemplate__widget__GComment) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const form = packages__flutter_web__animation.src__widgets__form;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const container = packages__flutter_web__animation.src__widgets__container;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const BookingDetails = packages__CabBookFlutterTemplate__model__BookingDetails.model__BookingDetails;
  const FormController = packages__CabBookFlutterTemplate__model__FormController.model__FormController;
  const card = packages__flutter_web__material.src__material__card;
  const colors = packages__flutter_web__material.src__material__colors;
  const icons = packages__flutter_web__material.src__material__icons;
  const flat_button = packages__flutter_web__material.src__material__flat_button;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const ui = packages__flutter_web_ui__ui.ui;
  const GTextField = packages__CabBookFlutterTemplate__widget__GTextField.widget__GTextField;
  const location_text_field = packages__CabBookFlutterTemplate__widget__location_text_field.widget__location_text_field;
  const date_time_picker = packages__CabBookFlutterTemplate__widget__date_time_picker.widget__date_time_picker;
  const GComment = packages__CabBookFlutterTemplate__widget__GComment.widget__GComment;
  var BookingForm = Object.create(dart.library);
  var FormStateL = () => (FormStateL = dart.constFn(dart.legacy(form.FormState)))();
  var GlobalKeyOfFormStateL = () => (GlobalKeyOfFormStateL = dart.constFn(framework.GlobalKey$(FormStateL())))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L0 = "package:CabBookFlutterTemplate/widget/BookingForm.dart";
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 16,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 16,
        [EdgeInsets__left]: 16
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 29,
        [_Location_line]: 39,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 29,
        [_Location_line]: 40,
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
        [_Location_column]: 38,
        [_Location_line]: 38,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 27,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 27,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 27,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], _LocationL());
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C6 || CT.C6,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 46,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 54,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], _LocationL());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C12 || CT.C12,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 56,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 46,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 54,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], _LocationL());
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C16 || CT.C16,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 46,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 54,
        [_Location_line]: 58,
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
        [_Location_column]: 35,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 29,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 29,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 29,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26, C27 || CT.C27], _LocationL());
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 52,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 27,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 27,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 27,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], _LocationL());
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelText",
        [_Location_column]: 31,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bookingDetails",
        [_Location_column]: 31,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 31,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], _LocationL());
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 38,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41], _LocationL());
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelText",
        [_Location_column]: 31,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bookingDetails",
        [_Location_column]: 31,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 31,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45, C46 || CT.C46], _LocationL());
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 31,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49], _LocationL());
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 36,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52], _LocationL());
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C51 || CT.C51,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelText",
        [_Location_column]: 31,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bookingDetails",
        [_Location_column]: 31,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 31,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56, C57 || CT.C57], _LocationL());
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 31,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60], _LocationL());
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 36,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63], _LocationL());
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelText",
        [_Location_column]: 31,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bookingDetails",
        [_Location_column]: 31,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 31,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67, C68 || CT.C68], _LocationL());
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 31,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71], _LocationL());
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 88,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "lableText",
        [_Location_column]: 31,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 31,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75], _LocationL());
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 36,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78], _LocationL());
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "lableText",
        [_Location_column]: 31,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 31,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82], _LocationL());
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 36,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85], _LocationL());
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C84 || CT.C84,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pickupDateController",
        [_Location_column]: 31,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "pickupTimeController",
        [_Location_column]: 31,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "returnDateController",
        [_Location_column]: 31,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "returnTimeController",
        [_Location_column]: 31,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88, C89 || CT.C89, C90 || CT.C90, C91 || CT.C91], _LocationL());
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 36,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94], _LocationL());
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C93 || CT.C93,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelText",
        [_Location_column]: 33,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 33,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98], _LocationL());
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C96 || CT.C96,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 116,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 31,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101], _LocationL());
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C100 || CT.C100,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 32,
        [_Location_line]: 62,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104], _LocationL());
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 62,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 20,
        [EdgeInsets__left]: 0
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 8,
        [EdgeInsets__right]: 8,
        [EdgeInsets__top]: 8,
        [EdgeInsets__left]: 8
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 37,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 142,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110], _LocationL());
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 46,
        [_Location_line]: 140,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 35,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 35,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 35,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113, C114 || CT.C114, C115 || CT.C115, C116 || CT.C116], _LocationL());
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C112 || CT.C112,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 130,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 33,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 33,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119, C120 || CT.C120], _LocationL());
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C118 || CT.C118,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 31,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124], _LocationL());
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 27,
        [_Location_line]: 123,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 27,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 27,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127, C128 || CT.C128, C129 || CT.C129, C130 || CT.C130], _LocationL());
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 46,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 54,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133, C134 || CT.C134], _LocationL());
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C132 || CT.C132,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 46,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 54,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137, C138 || CT.C138], _LocationL());
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 46,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 54,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141, C142 || CT.C142], _LocationL());
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C140 || CT.C140,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 161,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 29,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 29,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 29,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.constList([C145 || CT.C145, C146 || CT.C146, C147 || CT.C147], _LocationL());
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C144 || CT.C144,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 155,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 27,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 27,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 27,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.constList([C150 || CT.C150, C151 || CT.C151, C152 || CT.C152, C153 || CT.C153], _LocationL());
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C149 || CT.C149,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 23,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156, C157 || CT.C157], _LocationL());
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C155 || CT.C155,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.constList([C160 || CT.C160, C161 || CT.C161], _LocationL());
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C159 || CT.C159,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 28,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.constList([C164 || CT.C164, C165 || CT.C165, C166 || CT.C166], _LocationL());
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C163 || CT.C163,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 25,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.constList([C169 || CT.C169, C170 || CT.C170], _LocationL());
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C168 || CT.C168,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 9,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.constList([C173 || CT.C173, C174 || CT.C174], _LocationL());
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C172 || CT.C172,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/widget/BookingForm.dart"
      });
    }
  }, false);
  BookingForm.BookingForm = class BookingForm$ extends framework.StatefulWidget {
    createState() {
      return new BookingForm.BookingFormState.new();
    }
  };
  (BookingForm.BookingForm.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    BookingForm.BookingForm.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = BookingForm.BookingForm.prototype;
  dart.addTypeTests(BookingForm.BookingForm);
  dart.addTypeCaches(BookingForm.BookingForm);
  dart.setMethodSignature(BookingForm.BookingForm, () => ({
    __proto__: dart.getMethods(BookingForm.BookingForm.__proto__),
    createState: dart.fnType(dart.legacy(framework.State$(dart.legacy(framework.StatefulWidget))), [])
  }));
  dart.setLibraryUri(BookingForm.BookingForm, L0);
  var _formKey = dart.privateName(BookingForm, "_formKey");
  var _bookingDetails = dart.privateName(BookingForm, "_bookingDetails");
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
  var C4;
  var C2;
  var C1;
  var C7;
  var C8;
  var C9;
  var C10;
  var C6;
  var C5;
  var C13;
  var C14;
  var C12;
  var C11;
  var C17;
  var C18;
  var C16;
  var C15;
  var C21;
  var C22;
  var C20;
  var C19;
  var C25;
  var C26;
  var C27;
  var C24;
  var C23;
  var C30;
  var C31;
  var C32;
  var C33;
  var C29;
  var C28;
  var C36;
  var C37;
  var C38;
  var C35;
  var C34;
  var C41;
  var C40;
  var C39;
  var C44;
  var C45;
  var C46;
  var C43;
  var C42;
  var C49;
  var C48;
  var C47;
  var C52;
  var C51;
  var C50;
  var C55;
  var C56;
  var C57;
  var C54;
  var C53;
  var C60;
  var C59;
  var C58;
  var C63;
  var C62;
  var C61;
  var C66;
  var C67;
  var C68;
  var C65;
  var C64;
  var C71;
  var C70;
  var C69;
  var C74;
  var C75;
  var C73;
  var C72;
  var C78;
  var C77;
  var C76;
  var C81;
  var C82;
  var C80;
  var C79;
  var C85;
  var C84;
  var C83;
  var C88;
  var C89;
  var C90;
  var C91;
  var C87;
  var C86;
  var C94;
  var C93;
  var C92;
  var C97;
  var C98;
  var C96;
  var C95;
  var C101;
  var C100;
  var C99;
  var C104;
  var C103;
  var C102;
  var C105;
  var C106;
  var C109;
  var C110;
  var C108;
  var C107;
  var C113;
  var C114;
  var C115;
  var C116;
  var C112;
  var C111;
  var C119;
  var C120;
  var C118;
  var C117;
  var C123;
  var C124;
  var C122;
  var C121;
  var C127;
  var C128;
  var C129;
  var C130;
  var C126;
  var C125;
  var C133;
  var C134;
  var C132;
  var C131;
  var C137;
  var C138;
  var C136;
  var C135;
  var C141;
  var C142;
  var C140;
  var C139;
  var C145;
  var C146;
  var C147;
  var C144;
  var C143;
  var C150;
  var C151;
  var C152;
  var C153;
  var C149;
  var C148;
  var C156;
  var C157;
  var C155;
  var C154;
  var C160;
  var C161;
  var C159;
  var C158;
  var C164;
  var C165;
  var C166;
  var C163;
  var C162;
  var C169;
  var C170;
  var C168;
  var C167;
  var C173;
  var C174;
  var C172;
  var C171;
  BookingForm.BookingFormState = class BookingFormState extends framework.State$(dart.legacy(BookingForm.BookingForm)) {
    build(context) {
      let formController = new FormController.FormController.new();
      return new form.Form.new({key: this[_formKey], child: new card.Card.new({color: colors.Colors.transparent, child: new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 3, height: 1000.0, child: new container.Container.new({color: colors.Colors.transparent, child: new scroll_view.ListView.new({padding: C0 || CT.C0, children: JSArrayOfWidgetL().of([new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 0.0, right: 0.0, top: 0.0, bottom: 0.0}), alignment: alignment.AlignmentDirectional.center, color: colors.Colors.transparent, child: new text.Text.new("Book Your Ride", {style: new text_style.TextStyle.new({fontSize: 32.0, fontWeight: ui.FontWeight.w600, color: colors.Colors.cyan._get(50)}), $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 0.0, right: 0.0, top: 26.0, bottom: 0.0}), alignment: alignment.AlignmentDirectional.center, color: colors.Colors.transparent, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidgetL().of([new icon.Icon.new(icons.Icons.layers, {color: colors.Colors.cyan._get(50), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), new icon.Icon.new(icons.Icons.layers, {color: colors.Colors.cyan._get(50), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), new icon.Icon.new(icons.Icons.layers, {color: colors.Colors.cyan._get(50), $creationLocationd_0dea112b090073317d4: C19 || CT.C19})]), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), new basic.Column.new({children: JSArrayOfWidgetL().of([new basic.Row.new({children: JSArrayOfWidgetL().of([new GTextField.GTextField.new({labelText: "First Name", bookingDetails: this[_bookingDetails], controller: formController.fNameController, $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), new basic.SizedBox.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), new GTextField.GTextField.new({labelText: "Last Name", bookingDetails: this[_bookingDetails], controller: formController.lNameController, $creationLocationd_0dea112b090073317d4: C42 || CT.C42})]), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), new basic.Row.new({children: JSArrayOfWidgetL().of([new GTextField.GTextField.new({labelText: "Phone Number", bookingDetails: this[_bookingDetails], controller: formController.phoneController, $creationLocationd_0dea112b090073317d4: C53 || CT.C53})]), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), new basic.Row.new({children: JSArrayOfWidgetL().of([new GTextField.GTextField.new({labelText: "Email", bookingDetails: this[_bookingDetails], controller: formController.emailController, $creationLocationd_0dea112b090073317d4: C64 || CT.C64})]), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), new location_text_field.LocationTextField.new({lableText: "Pickup Location", controller: formController.sourceLocationController, $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), new location_text_field.LocationTextField.new({lableText: "Drop Location", controller: formController.destinationController, $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C83 || CT.C83}), new date_time_picker.DateTimePicker.new({pickupDateController: formController.pickupDateController, pickupTimeController: formController.pickupTimeController, returnDateController: formController.returnDateController, returnTimeController: formController.returnTimeController, $creationLocationd_0dea112b090073317d4: C86 || CT.C86}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), new basic.Row.new({children: JSArrayOfWidgetL().of([new GComment.Gcomment.new({labelText: "please describe your preferences and passenger details", controller: formController.commentController, $creationLocationd_0dea112b090073317d4: C95 || CT.C95})]), $creationLocationd_0dea112b090073317d4: C99 || CT.C99})]), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), new container.Container.new({height: 35.0, width: 200.0, margin: C105 || CT.C105, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(15.0), child: new container.Container.new({color: colors.Colors.blue._get(300), child: new flat_button.FlatButton.new({padding: C106 || CT.C106, textColor: colors.Colors.black, onPressed: dart.fn(() => {
                            let bookingDetails = formController.getFormValues();
                            core.print("pressed-----book");
                            core.print("fname--" + dart.notNull(bookingDetails.firstName));
                            core.print(bookingDetails.toJson());
                          }, VoidToNullN()), child: new text.Text.new("Book", {style: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.white, fontWeight: ui.FontWeight.w500}), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), $creationLocationd_0dea112b090073317d4: C117 || CT.C117}), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0, top: 26.0, bottom: 0.0}), alignment: alignment.AlignmentDirectional.center, color: colors.Colors.transparent, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidgetL().of([new icon.Icon.new(icons.Icons.layers, {color: colors.Colors.cyan._get(50), $creationLocationd_0dea112b090073317d4: C131 || CT.C131}), new icon.Icon.new(icons.Icons.layers, {color: colors.Colors.cyan._get(50), $creationLocationd_0dea112b090073317d4: C135 || CT.C135}), new icon.Icon.new(icons.Icons.layers, {color: colors.Colors.cyan._get(50), $creationLocationd_0dea112b090073317d4: C139 || CT.C139})]), $creationLocationd_0dea112b090073317d4: C143 || CT.C143}), $creationLocationd_0dea112b090073317d4: C148 || CT.C148})]), $creationLocationd_0dea112b090073317d4: C154 || CT.C154}), $creationLocationd_0dea112b090073317d4: C158 || CT.C158}), $creationLocationd_0dea112b090073317d4: C162 || CT.C162}), $creationLocationd_0dea112b090073317d4: C167 || CT.C167}), $creationLocationd_0dea112b090073317d4: C171 || CT.C171});
    }
  };
  (BookingForm.BookingFormState.new = function() {
    this[_formKey] = GlobalKeyOfFormStateL().new();
    this[_bookingDetails] = new BookingDetails.BookingDetails.new();
    BookingForm.BookingFormState.__proto__.new.call(this);
    ;
  }).prototype = BookingForm.BookingFormState.prototype;
  dart.addTypeTests(BookingForm.BookingFormState);
  dart.addTypeCaches(BookingForm.BookingFormState);
  dart.setMethodSignature(BookingForm.BookingFormState, () => ({
    __proto__: dart.getMethods(BookingForm.BookingFormState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(BookingForm.BookingFormState, L0);
  dart.setFieldSignature(BookingForm.BookingFormState, () => ({
    __proto__: dart.getFields(BookingForm.BookingFormState.__proto__),
    [_formKey]: dart.finalFieldType(dart.legacy(framework.GlobalKey$(dart.legacy(form.FormState)))),
    [_bookingDetails]: dart.fieldType(dart.legacy(BookingDetails.BookingDetails))
  }));
  dart.trackLibraries("packages/CabBookFlutterTemplate/widget/BookingForm", {
    "package:CabBookFlutterTemplate/widget/BookingForm.dart": BookingForm
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["BookingForm.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAWI,YAAO;IACT;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAK4B;AACT,2BAAiB;AAChC,YAAO,yBACE,uBACE,0BACW,kCACP,+BACoC,aAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe,WACnC,eACD,oCACW,kCACP,8DAEe,uBACZ,sCACkB,uCACV,YAAU,UAAQ,aAAW,kBACP,8CAClB,kCACH,kBACT,0BACW,wCACC,kBACa,2BACT,AAAI,wBAAC,qHAIrB,sCACkB,uCACV,YAAU,UAAQ,cAAc,kBACV,8CAClB,kCACP,sCACgC,mDACV,iCACT,uBACZ,kBAAW,4BAAsB,AAAI,wBAAC,8DACtC,kBAAW,4BAAsB,AAAI,wBAAC,8DACtC,kBAAW,4BAAsB,AAAI,wBAAC,kLAIhD,gCAAyB,uBACvB,6BAAsB,uBACpB,0CACa,8BAEK,mCACJ,AAAe,cAAD,2EAE5B,+BAAgB,+DAChB,0CACa,6BAEK,mCACJ,AAAe,cAAD,sIAG9B,gCAAiB,+DACjB,6BAAc,uBACZ,0CACa,gCAEK,mCACJ,AAAe,cAAD,sIAG9B,gCAAiB,+DACjB,6BAAc,uBACZ,0CACa,yBAEK,mCACJ,AAAe,cAAD,sIAG9B,0DACe,+BAEP,AAAe,cAAD,oFACtB,gCAAiB,+DACjB,0DACe,6BACC,AAAe,cAAD,iFAC9B,gCAAiB,+DACjB,+DAEQ,AAAe,cAAD,6CAEd,AAAe,cAAD,6CAEd,AAAe,cAAD,6CAEd,AAAe,cAAD,gFACtB,gCAAiB,+DACjB,6BAAc,uBACZ,sCAEQ,sEACQ,AAAe,cAAD,qMAG9B,qCACM,aACD,uCAEA,uCACwB,wCAAS,cACzB,oCACK,AAAI,wBAAC,aACR,qEAES,gCACP;AACM,iDACX,AAAe,cAAD;AACO,4BAAzB,WAAM;AACqC,4BAA3C,WAAM,AAAU,yBAAE,AAAe,cAAD;AACF,4BAA9B,WAAM,AAAe,cAAD;oDAEX,kBACT,gBACO,wCACO,aACI,iCACS,6TAKnC,sCACkB,uCACV,aAAa,WAAW,cAAc,kBAChB,8CAClB,kCACP,sCACgC,mDACV,iCACT,uBACZ,kBAAW,4BAAsB,AAAI,wBAAC,gEACtC,kBAAW,4BAAsB,AAAI,wBAAC,gEACtC,kBAAW,4BAAsB,AAAI,wBAAC;IAMtE;;;IAtJM,iBAAW;IACF,wBAAsB;;;EAsJvC","file":"BookingForm.unsound.ddc.js"}');
  // Exports:
  return {
    widget__BookingForm: BookingForm
  };
}));

//# sourceMappingURL=BookingForm.unsound.ddc.js.map
