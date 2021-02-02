define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/CabBookFlutterTemplate/utils/responsive_layout', 'packages/CabBookFlutterTemplate/widget/button_row', 'packages/CabBookFlutterTemplate/utils/flutter_swiper'], (function load__packages__CabBookFlutterTemplate__home(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui, packages__CabBookFlutterTemplate__utils__responsive_layout, packages__CabBookFlutterTemplate__widget__button_row, packages__CabBookFlutterTemplate__utils__flutter_swiper) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const dialog = packages__flutter_web__material.src__material__dialog;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const colors = packages__flutter_web__material.src__material__colors;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const time = packages__flutter_web__material.src__material__time;
  const material = packages__flutter_web__material.src__material__material;
  const card = packages__flutter_web__material.src__material__card;
  const icons = packages__flutter_web__material.src__material__icons;
  const text_field = packages__flutter_web__material.src__material__text_field;
  const input_decorator = packages__flutter_web__material.src__material__input_decorator;
  const flat_button = packages__flutter_web__material.src__material__flat_button;
  const date_picker = packages__flutter_web__material.src__material__date_picker;
  const time_picker = packages__flutter_web__material.src__material__time_picker;
  const theme = packages__flutter_web__material.src__material__theme;
  const ink_well = packages__flutter_web__material.src__material__ink_well;
  const app = packages__flutter_web__material.src__material__app;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const text = packages__flutter_web__animation.src__widgets__text;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const image = packages__flutter_web__animation.src__widgets__image;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const container = packages__flutter_web__animation.src__widgets__container;
  const box = packages__flutter_web__animation.src__rendering__box;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const heroes = packages__flutter_web__animation.src__widgets__heroes;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const text_input = packages__flutter_web__animation.src__services__text_input;
  const binding = packages__flutter_web__animation.src__widgets__binding;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const colors$ = packages__flutter_web__src__animation__animation.src__painting__colors;
  const icon_data = packages__flutter_web__src__animation__animation.src__widgets__icon_data;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const box_fit = packages__flutter_web__src__animation__animation.src__painting__box_fit;
  const border_radius = packages__flutter_web__src__animation__animation.src__painting__border_radius;
  const ui = packages__flutter_web_ui__ui.ui;
  const responsive_layout = packages__CabBookFlutterTemplate__utils__responsive_layout.utils__responsive_layout;
  const button_row = packages__CabBookFlutterTemplate__widget__button_row.widget__button_row;
  const flutter_swiper = packages__CabBookFlutterTemplate__utils__flutter_swiper.utils__flutter_swiper;
  var home = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var AlertDialogL = () => (AlertDialogL = dart.constFn(dart.legacy(dialog.AlertDialog)))();
  var BuildContextL = () => (BuildContextL = dart.constFn(dart.legacy(framework.BuildContext)))();
  var BuildContextLToAlertDialogL = () => (BuildContextLToAlertDialogL = dart.constFn(dart.fnType(AlertDialogL(), [BuildContextL()])))();
  var VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var ColorL = () => (ColorL = dart.constFn(dart.legacy(ui.Color)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  var ImageL = () => (ImageL = dart.constFn(dart.legacy(image.Image)))();
  var JSArrayOfImageL = () => (JSArrayOfImageL = dart.constFn(_interceptors.JSArray$(ImageL())))();
  var ContainerL = () => (ContainerL = dart.constFn(dart.legacy(container.Container)))();
  var BuildContextLAndintLToContainerL = () => (BuildContextLAndintLToContainerL = dart.constFn(dart.fnType(ContainerL(), [BuildContextL(), intL()])))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  var L0 = "package:CabBookFlutterTemplate/home.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 24,
        [EdgeInsets__right]: 24,
        [EdgeInsets__top]: 20,
        [EdgeInsets__left]: 24
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "+91-9910638818"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "call me at"
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: dialog.AlertDialog.prototype,
        [Widget_key]: null,
        [AlertDialog_shape]: null,
        [AlertDialog_semanticLabel]: null,
        [AlertDialog_elevation]: null,
        [AlertDialog_backgroundColor]: null,
        [AlertDialog_actions]: null,
        [AlertDialog_contentTextStyle]: null,
        [AlertDialog_contentPadding]: C1 || CT.C1,
        [AlertDialog_content]: C2 || CT.C2,
        [AlertDialog_titleTextStyle]: null,
        [AlertDialog_titlePadding]: null,
        [AlertDialog_title]: C3 || CT.C3
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], _LocationL());
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 35,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 10,
        [EdgeInsets__right]: 10,
        [EdgeInsets__top]: 10,
        [EdgeInsets__left]: 10
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 32,
        [_Location_line]: 46,
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
        [_Location_column]: 26,
        [_Location_line]: 46,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], _LocationL());
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4286755327.0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4282682111.0
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4280908287.0
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4280902399.0
      });
    },
    get C18() {
      return C18 = dart.constMap(intL(), ColorL(), [100, C19 || CT.C19, 200, C20 || CT.C20, 400, C21 || CT.C21, 700, C22 || CT.C22]);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: colors.MaterialAccentColor.prototype,
        [Color__value]: 4282682111.0,
        [ColorSwatch__swatch]: C18 || CT.C18
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57520
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C17 || CT.C17,
        [Icon_size]: null,
        [Icon_icon]: C23 || CT.C23
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 50,
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
        [_Location_column]: 11,
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 9,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerTitle",
        [_Location_column]: 9,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 9,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35], _LocationL());
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C29 || CT.C29,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 48,
        [EdgeInsets__right]: 48,
        [EdgeInsets__top]: 48,
        [EdgeInsets__left]: 48
      });
    },
    get C38() {
      return C38 = dart.constList([], _LocationL());
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], _LocationL());
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], _LocationL());
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 15,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], _LocationL());
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54], _LocationL());
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "largeChild",
        [_Location_column]: 9,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "smallChild",
        [_Location_column]: 9,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58, C59 || CT.C59], _LocationL());
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 30,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 63,
        [_Location_file]: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62, C63 || CT.C63, C64 || CT.C64], _LocationL());
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C61 || CT.C61,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 23,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 62,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68], _LocationL());
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 91,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 23,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 39,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72], _LocationL());
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 23,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 46,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75, C76 || CT.C76], _LocationL());
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C74 || CT.C74,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 23,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 61,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79, C80 || CT.C80], _LocationL());
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C78 || CT.C78,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 23,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 46,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84], _LocationL());
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: time.TimeOfDay.prototype,
        [TimeOfDay_minute]: 28,
        [TimeOfDay_hour]: 7
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tag",
        [_Location_column]: 29,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 37,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.constList([C88 || CT.C88, C89 || CT.C89], _LocationL());
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C87 || CT.C87,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 17,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92, C93 || CT.C93], _LocationL());
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96], _LocationL());
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 13,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 13,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemHeight",
        [_Location_column]: 13,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemWidth",
        [_Location_column]: 13,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "viewportFraction",
        [_Location_column]: 13,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 13,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autoplay",
        [_Location_column]: 13,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "layout",
        [_Location_column]: 13,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99, C100 || CT.C100, C101 || CT.C101, C102 || CT.C102, C103 || CT.C103, C104 || CT.C104, C105 || CT.C105, C106 || CT.C106], _LocationL());
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C98 || CT.C98,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 108,
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
        [_Location_column]: 13,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 16,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 16,
        [EdgeInsets__left]: 16
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114, C115 || CT.C115], _LocationL());
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C113 || CT.C113,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 23,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.constList([C118 || CT.C118, C119 || CT.C119, C120 || CT.C120, C121 || CT.C121], _LocationL());
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C117 || CT.C117,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 42,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 50,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124, C125 || CT.C125], _LocationL());
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C123 || CT.C123,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 42,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 50,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.constList([C128 || CT.C128, C129 || CT.C129], _LocationL());
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C127 || CT.C127,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 42,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 50,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.constList([C132 || CT.C132, C133 || CT.C133], _LocationL());
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C131 || CT.C131,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 25,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.constList([C136 || CT.C136, C137 || CT.C137, C138 || CT.C138], _LocationL());
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C135 || CT.C135,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 23,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141, C142 || CT.C142, C143 || CT.C143, C144 || CT.C144], _LocationL());
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C140 || CT.C140,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 20,
        [EdgeInsets__left]: 0
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 58,
        [_Location_line]: 177,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148], _LocationL());
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 47,
        [_Location_line]: 177,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 31,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autocorrect",
        [_Location_column]: 31,
        [_Location_line]: 173,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 31,
        [_Location_line]: 174,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 31,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 31,
        [_Location_line]: 176,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.constList([C151 || CT.C151, C152 || CT.C152, C153 || CT.C153, C154 || CT.C154, C155 || CT.C155], _LocationL());
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C150 || CT.C150,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 29,
        [_Location_line]: 169,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 29,
        [_Location_line]: 170,
        [_Location_file]: null
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 171,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.constList([C158 || CT.C158, C159 || CT.C159, C160 || CT.C160], _LocationL());
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C157 || CT.C157,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 168,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 27,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163, C164 || CT.C164], _LocationL());
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C162 || CT.C162,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 166,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 23,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.constList([C167 || CT.C167, C168 || CT.C168, C169 || CT.C169], _LocationL());
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C166 || CT.C166,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 163,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 58,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C171() {
      return C171 = dart.constList([C172 || CT.C172], _LocationL());
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C171 || CT.C171,
        [_Location_name]: null,
        [_Location_column]: 47,
        [_Location_line]: 200,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textCapitalization",
        [_Location_column]: 31,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autocorrect",
        [_Location_column]: 31,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 31,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 31,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 31,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.constList([C175 || CT.C175, C176 || CT.C176, C177 || CT.C177, C178 || CT.C178, C179 || CT.C179], _LocationL());
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C174 || CT.C174,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 193,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 29,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 29,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.constList([C182 || CT.C182, C183 || CT.C183, C184 || CT.C184], _LocationL());
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C181 || CT.C181,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 27,
        [_Location_line]: 189,
        [_Location_file]: null
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C186() {
      return C186 = dart.constList([C187 || CT.C187, C188 || CT.C188], _LocationL());
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C186 || CT.C186,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 188,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 23,
        [_Location_line]: 186,
        [_Location_file]: null
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 187,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C190() {
      return C190 = dart.constList([C191 || CT.C191, C192 || CT.C192, C193 || CT.C193], _LocationL());
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C190 || CT.C190,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 185,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 30,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.constList([C196 || CT.C196], _LocationL());
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C195 || CT.C195,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 207,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "labelText",
        [_Location_column]: 23,
        [_Location_line]: 209,
        [_Location_file]: null
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedDate",
        [_Location_column]: 23,
        [_Location_line]: 210,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedTime",
        [_Location_column]: 23,
        [_Location_line]: 211,
        [_Location_file]: null
      });
    },
    get C198() {
      return C198 = dart.constList([C199 || CT.C199, C200 || CT.C200, C201 || CT.C201], _LocationL());
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C198 || CT.C198,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 208,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 8,
        [EdgeInsets__right]: 8,
        [EdgeInsets__top]: 8,
        [EdgeInsets__left]: 8
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 227,
        [_Location_file]: null
      });
    },
    get C204() {
      return C204 = dart.constList([C205 || CT.C205, C206 || CT.C206], _LocationL());
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C204 || CT.C204,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 225,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 31,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 31,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C208() {
      return C208 = dart.constList([C209 || CT.C209, C210 || CT.C210, C211 || CT.C211, C212 || CT.C212], _LocationL());
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C208 || CT.C208,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 221,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 29,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C214() {
      return C214 = dart.constList([C215 || CT.C215, C216 || CT.C216], _LocationL());
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C214 || CT.C214,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 219,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 27,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C218() {
      return C218 = dart.constList([C219 || CT.C219, C220 || CT.C220], _LocationL());
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C218 || CT.C218,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 217,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 214,
        [_Location_file]: null
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 215,
        [_Location_file]: null
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 23,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 217,
        [_Location_file]: null
      });
    },
    get C222() {
      return C222 = dart.constList([C223 || CT.C223, C224 || CT.C224, C225 || CT.C225, C226 || CT.C226], _LocationL());
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C222 || CT.C222,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 213,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 42,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 50,
        [_Location_line]: 244,
        [_Location_file]: null
      });
    },
    get C228() {
      return C228 = dart.constList([C229 || CT.C229, C230 || CT.C230], _LocationL());
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C228 || CT.C228,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 244,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 42,
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 50,
        [_Location_line]: 245,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.constList([C233 || CT.C233, C234 || CT.C234], _LocationL());
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C232 || CT.C232,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 245,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 42,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 50,
        [_Location_line]: 246,
        [_Location_file]: null
      });
    },
    get C236() {
      return C236 = dart.constList([C237 || CT.C237, C238 || CT.C238], _LocationL());
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C236 || CT.C236,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 246,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 241,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 25,
        [_Location_line]: 242,
        [_Location_file]: null
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 243,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.constList([C241 || CT.C241, C242 || CT.C242, C243 || CT.C243], _LocationL());
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C240 || CT.C240,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 240,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 23,
        [_Location_line]: 238,
        [_Location_file]: null
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 239,
        [_Location_file]: null
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 240,
        [_Location_file]: null
      });
    },
    get C245() {
      return C245 = dart.constList([C246 || CT.C246, C247 || CT.C247, C248 || CT.C248, C249 || CT.C249], _LocationL());
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C245 || CT.C245,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 235,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C251() {
      return C251 = dart.constList([C252 || CT.C252, C253 || CT.C253], _LocationL());
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C251 || CT.C251,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C255() {
      return C255 = dart.constList([C256 || CT.C256, C257 || CT.C257], _LocationL());
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C255 || CT.C255,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C259() {
      return C259 = dart.constList([C260 || CT.C260, C261 || CT.C261, C262 || CT.C262], _LocationL());
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C259 || CT.C259,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C264() {
      return C264 = dart.constList([C265 || CT.C265], _LocationL());
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C264 || CT.C264,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C268() {
      return C268 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 25,
        [_Location_line]: 252,
        [_Location_file]: null
      });
    },
    get C267() {
      return C267 = dart.constList([C268 || CT.C268], _LocationL());
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C267 || CT.C267,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 252,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 13,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C270() {
      return C270 = dart.constList([C271 || CT.C271, C272 || CT.C272], _LocationL());
    },
    get C269() {
      return C269 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C270 || CT.C270,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 257,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 254,
        [_Location_file]: null
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 256,
        [_Location_file]: null
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C274() {
      return C274 = dart.constList([C275 || CT.C275, C276 || CT.C276, C277 || CT.C277], _LocationL());
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C274 || CT.C274,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 253,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 60,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C279() {
      return C279 = dart.constList([C280 || CT.C280, C281 || CT.C281], _LocationL());
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C279 || CT.C279,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 7,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C285() {
      return C285 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C283() {
      return C283 = dart.constList([C284 || CT.C284, C285 || CT.C285], _LocationL());
    },
    get C282() {
      return C282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C283 || CT.C283,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C287() {
      return C287 = dart.constList([C288 || CT.C288], _LocationL());
    },
    get C286() {
      return C286 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C287 || CT.C287,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C290() {
      return C290 = dart.constList([C291 || CT.C291], _LocationL());
    },
    get C289() {
      return C289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C290 || CT.C290,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 100,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C294() {
      return C294 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 50,
        [_Location_line]: 325,
        [_Location_file]: null
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 31,
        [_Location_line]: 326,
        [_Location_file]: null
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 41,
        [_Location_line]: 326,
        [_Location_file]: null
      });
    },
    get C293() {
      return C293 = dart.constList([C294 || CT.C294, C295 || CT.C295, C296 || CT.C296], _LocationL());
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C293 || CT.C293,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 325,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "baseStyle",
        [_Location_column]: 23,
        [_Location_line]: 322,
        [_Location_file]: null
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 323,
        [_Location_file]: null
      });
    },
    get C298() {
      return C298 = dart.constList([C299 || CT.C299, C300 || CT.C300], _LocationL());
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C298 || CT.C298,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 321,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 21,
        [_Location_line]: 318,
        [_Location_file]: null
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 321,
        [_Location_file]: null
      });
    },
    get C302() {
      return C302 = dart.constList([C303 || CT.C303, C304 || CT.C304], _LocationL());
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C302 || CT.C302,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 317,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 313,
        [_Location_file]: null
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 314,
        [_Location_file]: null
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 316,
        [_Location_file]: null
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 317,
        [_Location_file]: null
      });
    },
    get C306() {
      return C306 = dart.constList([C307 || CT.C307, C308 || CT.C308, C309 || CT.C309, C310 || CT.C310], _LocationL());
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C306 || CT.C306,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 312,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 15,
        [_Location_line]: 311,
        [_Location_file]: null
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 312,
        [_Location_file]: null
      });
    },
    get C312() {
      return C312 = dart.constList([C313 || CT.C313, C314 || CT.C314], _LocationL());
    },
    get C311() {
      return C311 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C312 || CT.C312,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 310,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 11,
        [_Location_line]: 309,
        [_Location_file]: null
      });
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 310,
        [_Location_file]: null
      });
    },
    get C316() {
      return C316 = dart.constList([C317 || CT.C317, C318 || CT.C318], _LocationL());
    },
    get C315() {
      return C315 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C316 || CT.C316,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 308,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C319() {
      return C319 = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 12
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 50,
        [_Location_line]: 360,
        [_Location_file]: null
      });
    },
    get C323() {
      return C323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "size",
        [_Location_column]: 31,
        [_Location_line]: 361,
        [_Location_file]: null
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 41,
        [_Location_line]: 361,
        [_Location_file]: null
      });
    },
    get C321() {
      return C321 = dart.constList([C322 || CT.C322, C323 || CT.C323, C324 || CT.C324], _LocationL());
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C321 || CT.C321,
        [_Location_name]: null,
        [_Location_column]: 39,
        [_Location_line]: 360,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "baseStyle",
        [_Location_column]: 23,
        [_Location_line]: 357,
        [_Location_file]: null
      });
    },
    get C328() {
      return C328 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 23,
        [_Location_line]: 358,
        [_Location_file]: null
      });
    },
    get C326() {
      return C326 = dart.constList([C327 || CT.C327, C328 || CT.C328], _LocationL());
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C326 || CT.C326,
        [_Location_name]: null,
        [_Location_column]: 28,
        [_Location_line]: 356,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 21,
        [_Location_line]: 353,
        [_Location_file]: null
      });
    },
    get C332() {
      return C332 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 356,
        [_Location_file]: null
      });
    },
    get C330() {
      return C330 = dart.constList([C331 || CT.C331, C332 || CT.C332], _LocationL());
    },
    get C329() {
      return C329 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C330 || CT.C330,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 352,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C335() {
      return C335 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 348,
        [_Location_file]: null
      });
    },
    get C336() {
      return C336 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 349,
        [_Location_file]: null
      });
    },
    get C337() {
      return C337 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 19,
        [_Location_line]: 351,
        [_Location_file]: null
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 352,
        [_Location_file]: null
      });
    },
    get C334() {
      return C334 = dart.constList([C335 || CT.C335, C336 || CT.C336, C337 || CT.C337, C338 || CT.C338], _LocationL());
    },
    get C333() {
      return C333 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C334 || CT.C334,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 347,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C341() {
      return C341 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 15,
        [_Location_line]: 346,
        [_Location_file]: null
      });
    },
    get C342() {
      return C342 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 347,
        [_Location_file]: null
      });
    },
    get C340() {
      return C340 = dart.constList([C341 || CT.C341, C342 || CT.C342], _LocationL());
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C340 || CT.C340,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 345,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C345() {
      return C345 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 11,
        [_Location_line]: 344,
        [_Location_file]: null
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 345,
        [_Location_file]: null
      });
    },
    get C344() {
      return C344 = dart.constList([C345 || CT.C345, C346 || CT.C346], _LocationL());
    },
    get C343() {
      return C343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C344 || CT.C344,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 343,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C349() {
      return C349 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 306,
        [_Location_file]: null
      });
    },
    get C350() {
      return C350 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 307,
        [_Location_file]: null
      });
    },
    get C348() {
      return C348 = dart.constList([C349 || CT.C349, C350 || CT.C350], _LocationL());
    },
    get C347() {
      return C347 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C348 || CT.C348,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 305,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C351() {
      return C351 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 12,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C354() {
      return C354 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "debugShowCheckedModeBanner",
        [_Location_column]: 7,
        [_Location_line]: 11,
        [_Location_file]: null
      });
    },
    get C355() {
      return C355 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 12,
        [_Location_file]: null
      });
    },
    get C353() {
      return C353 = dart.constList([C354 || CT.C354, C355 || CT.C355], _LocationL());
    },
    get C352() {
      return C352 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C353 || CT.C353,
        [_Location_name]: null,
        [_Location_column]: 5,
        [_Location_line]: 10,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    }
  }, false);
  var Widget_key = dart.privateName(framework, "Widget.key");
  var AlertDialog_shape = dart.privateName(dialog, "AlertDialog.shape");
  var AlertDialog_semanticLabel = dart.privateName(dialog, "AlertDialog.semanticLabel");
  var AlertDialog_elevation = dart.privateName(dialog, "AlertDialog.elevation");
  var AlertDialog_backgroundColor = dart.privateName(dialog, "AlertDialog.backgroundColor");
  var AlertDialog_actions = dart.privateName(dialog, "AlertDialog.actions");
  var AlertDialog_contentTextStyle = dart.privateName(dialog, "AlertDialog.contentTextStyle");
  var EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  var EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  var EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  var EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  var C1;
  var AlertDialog_contentPadding = dart.privateName(dialog, "AlertDialog.contentPadding");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  var C2;
  var AlertDialog_content = dart.privateName(dialog, "AlertDialog.content");
  var AlertDialog_titleTextStyle = dart.privateName(dialog, "AlertDialog.titleTextStyle");
  var AlertDialog_titlePadding = dart.privateName(dialog, "AlertDialog.titlePadding");
  var C3;
  var AlertDialog_title = dart.privateName(dialog, "AlertDialog.title");
  var C0;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C6;
  var C7;
  var C5;
  var C4;
  var C8;
  var C11;
  var C10;
  var C9;
  var C14;
  var C15;
  var C13;
  var C12;
  var Icon_textDirection = dart.privateName(icon, "Icon.textDirection");
  var Icon_semanticLabel = dart.privateName(icon, "Icon.semanticLabel");
  var Color__value = dart.privateName(ui, "Color._value");
  var C19;
  var C20;
  var C21;
  var C22;
  var C18;
  var ColorSwatch__swatch = dart.privateName(colors$, "ColorSwatch._swatch");
  var C17;
  var Icon_color = dart.privateName(icon, "Icon.color");
  var Icon_size = dart.privateName(icon, "Icon.size");
  var IconData_matchTextDirection = dart.privateName(icon_data, "IconData.matchTextDirection");
  var IconData_fontPackage = dart.privateName(icon_data, "IconData.fontPackage");
  var IconData_fontFamily = dart.privateName(icon_data, "IconData.fontFamily");
  var IconData_codePoint = dart.privateName(icon_data, "IconData.codePoint");
  var C23;
  var Icon_icon = dart.privateName(icon, "Icon.icon");
  var C16;
  var C26;
  var C27;
  var C25;
  var C24;
  var C30;
  var C31;
  var C32;
  var C33;
  var C34;
  var C35;
  var C29;
  var C28;
  var C36;
  var C38;
  var C37;
  var C41;
  var C42;
  var C40;
  var C39;
  var C45;
  var C46;
  var C44;
  var C43;
  var C49;
  var C50;
  var C48;
  var C47;
  var C51;
  var C54;
  var C53;
  var C52;
  var C55;
  var C58;
  var C59;
  var C57;
  var C56;
  var C62;
  var C63;
  var C64;
  var C61;
  var C60;
  home.Furniture = class Furniture extends framework.StatelessWidget {
    build(context) {
      function _aboutAction() {
        dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => C0 || CT.C0, BuildContextLToAlertDialogL())});
      }
      dart.fn(_aboutAction, VoidTovoid());
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, appBar: new app_bar.AppBar.new({backgroundColor: colors.Colors.white, elevation: 0.0, centerTitle: false, title: new text.Text.new("Delhi NCR Taxi outstation services", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 24.0, fontFamily: "Open Sans", fontWeight: ui.FontWeight.w800, fontStyle: ui.FontStyle.normal}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), leading: new basic.Padding.new({padding: C8 || CT.C8, child: new image.Image.asset("icon/nav-logo.png", {$creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), actions: JSArrayOfWidgetL().of([new icon_button.IconButton.new({icon: C16 || CT.C16, onPressed: _aboutAction, $creationLocationd_0dea112b090073317d4: C24 || CT.C24})]), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), body: new responsive_layout.ResponsiveLayout.new({largeChild: new basic.Stack.new({children: JSArrayOfWidgetL().of([new basic.Align.new({alignment: alignment.Alignment.bottomRight, child: new basic.Padding.new({padding: C36 || CT.C36, child: new basic.SizedBox.new({height: 50.0, child: new button_row.ButtonRow.new({$creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), new home.Body.new({$creationLocationd_0dea112b090073317d4: C51 || CT.C51})]), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), smallChild: new home.Body.new({$creationLocationd_0dea112b090073317d4: C55 || CT.C55}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), $creationLocationd_0dea112b090073317d4: C60 || CT.C60});
    }
  };
  (home.Furniture.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home.Furniture.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.Furniture.prototype;
  dart.addTypeTests(home.Furniture);
  dart.addTypeCaches(home.Furniture);
  dart.setMethodSignature(home.Furniture, () => ({
    __proto__: dart.getMethods(home.Furniture.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(home.Furniture, L0);
  var C67;
  var C68;
  var C66;
  var C65;
  var C71;
  var C72;
  var C70;
  var C69;
  var C75;
  var C76;
  var C74;
  var C73;
  var C79;
  var C80;
  var C78;
  var C77;
  var C83;
  var C84;
  var C82;
  var C81;
  var TimeOfDay_minute = dart.privateName(time, "TimeOfDay.minute");
  var TimeOfDay_hour = dart.privateName(time, "TimeOfDay.hour");
  var C85;
  var C88;
  var C89;
  var C87;
  var C86;
  var C92;
  var C93;
  var C91;
  var C90;
  var C96;
  var C95;
  var C94;
  var C99;
  var C100;
  var C101;
  var C102;
  var C103;
  var C104;
  var C105;
  var C106;
  var C98;
  var C97;
  var C109;
  var C110;
  var C108;
  var C107;
  var C111;
  var C114;
  var C115;
  var C113;
  var C112;
  var C118;
  var C119;
  var C120;
  var C121;
  var C117;
  var C116;
  var C124;
  var C125;
  var C123;
  var C122;
  var C128;
  var C129;
  var C127;
  var C126;
  var C132;
  var C133;
  var C131;
  var C130;
  var C136;
  var C137;
  var C138;
  var C135;
  var C134;
  var C141;
  var C142;
  var C143;
  var C144;
  var C140;
  var C139;
  var C145;
  var C148;
  var C147;
  var C146;
  var C151;
  var C152;
  var C153;
  var C154;
  var C155;
  var C150;
  var C149;
  var C158;
  var C159;
  var C160;
  var C157;
  var C156;
  var C163;
  var C164;
  var C162;
  var C161;
  var C167;
  var C168;
  var C169;
  var C166;
  var C165;
  var C172;
  var C171;
  var C170;
  var C175;
  var C176;
  var C177;
  var C178;
  var C179;
  var C174;
  var C173;
  var C182;
  var C183;
  var C184;
  var C181;
  var C180;
  var C187;
  var C188;
  var C186;
  var C185;
  var C191;
  var C192;
  var C193;
  var C190;
  var C189;
  var C196;
  var C195;
  var C194;
  var C199;
  var C200;
  var C201;
  var C198;
  var C197;
  var C202;
  var C205;
  var C206;
  var C204;
  var C203;
  var C209;
  var C210;
  var C211;
  var C212;
  var C208;
  var C207;
  var C215;
  var C216;
  var C214;
  var C213;
  var C219;
  var C220;
  var C218;
  var C217;
  var C223;
  var C224;
  var C225;
  var C226;
  var C222;
  var C221;
  var C229;
  var C230;
  var C228;
  var C227;
  var C233;
  var C234;
  var C232;
  var C231;
  var C237;
  var C238;
  var C236;
  var C235;
  var C241;
  var C242;
  var C243;
  var C240;
  var C239;
  var C246;
  var C247;
  var C248;
  var C249;
  var C245;
  var C244;
  var C252;
  var C253;
  var C251;
  var C250;
  var C256;
  var C257;
  var C255;
  var C254;
  var C260;
  var C261;
  var C262;
  var C259;
  var C258;
  var C265;
  var C264;
  var C263;
  var C268;
  var C267;
  var C266;
  var C271;
  var C272;
  var C270;
  var C269;
  var C275;
  var C276;
  var C277;
  var C274;
  var C273;
  var C280;
  var C281;
  var C279;
  var C278;
  var C284;
  var C285;
  var C283;
  var C282;
  var C288;
  var C287;
  var C286;
  var C291;
  var C290;
  var C289;
  home.Body = class Body extends framework.StatelessWidget {
    build(context) {
      let imageSlider = JSArrayOfImageL().of([new image.Image.asset("marutisuzuki-dzire-front-seats4.jpg", {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C65 || CT.C65}), new image.Image.asset("tajmahal.jpg", {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), new image.Image.asset("mat60sa_1458595.jpg", {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), new image.Image.asset("Solang-near-Manali-Kullu-min-1.jpg", {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), new image.Image.asset("56buusa_1483112.jpg", {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C81 || CT.C81})]);
      let _toDate = new core.DateTime.now();
      let _toTime = C85 || CT.C85;
      return new material.Material.new({child: new container.Container.new({child: new basic.ConstrainedBox.new({constraints: new box.BoxConstraints.new(), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidgetL().of([new container.Container.new({color: colors.Colors.grey, child: new flutter_swiper.Swiper.new({itemCount: imageSlider[$length], itemBuilder: dart.fn((cx, i) => new container.Container.new({child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(20.0), child: new heroes.Hero.new({tag: i, child: imageSlider[$_get](i), $creationLocationd_0dea112b090073317d4: C86 || CT.C86}), $creationLocationd_0dea112b090073317d4: C90 || CT.C90}), $creationLocationd_0dea112b090073317d4: C94 || CT.C94}), BuildContextLAndintLToContainerL()), itemHeight: 500.0, itemWidth: 1000.0, viewportFraction: 0.8, scale: 0.9, autoplay: true, layout: flutter_swiper.SwiperLayout.STACK, $creationLocationd_0dea112b090073317d4: C97 || CT.C97}), $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), new card.Card.new({child: new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 3, height: 500.0, child: new container.Container.new({color: colors.Colors.transparent, child: new scroll_view.ListView.new({padding: C111 || CT.C111, children: JSArrayOfWidgetL().of([new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0, top: 50.0, bottom: 0.0}), alignment: alignment.AlignmentDirectional.center, color: colors.Colors.transparent, child: new text.Text.new("Book Your Ride", {style: new text_style.TextStyle.new({fontSize: 22.0, fontWeight: ui.FontWeight.w600, color: colors.Colors.black}), $creationLocationd_0dea112b090073317d4: C112 || CT.C112}), $creationLocationd_0dea112b090073317d4: C116 || CT.C116}), new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0, top: 26.0, bottom: 0.0}), alignment: alignment.AlignmentDirectional.center, color: colors.Colors.transparent, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidgetL().of([new icon.Icon.new(icons.Icons.layers, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C122 || CT.C122}), new icon.Icon.new(icons.Icons.layers, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C126 || CT.C126}), new icon.Icon.new(icons.Icons.layers, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C130 || CT.C130})]), $creationLocationd_0dea112b090073317d4: C134 || CT.C134}), $creationLocationd_0dea112b090073317d4: C139 || CT.C139}), new container.Container.new({margin: C145 || CT.C145, height: 45.0, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(22.0), child: new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0}), color: colors.Colors.pink._get(50), child: new text_field.TextField.new({textCapitalization: text_input.TextCapitalization.characters, autocorrect: true, autofocus: true, keyboardType: text_input.TextInputType.text, decoration: new input_decorator.InputDecoration.new({prefixIcon: new icon.Icon.new(icons.Icons.map, {$creationLocationd_0dea112b090073317d4: C146 || CT.C146}), hintText: "Pickup Location", hintStyle: new text_style.TextStyle.new({fontWeight: ui.FontWeight.w300, color: colors.Colors.black87})}), $creationLocationd_0dea112b090073317d4: C149 || CT.C149}), $creationLocationd_0dea112b090073317d4: C156 || CT.C156}), $creationLocationd_0dea112b090073317d4: C161 || CT.C161}), $creationLocationd_0dea112b090073317d4: C165 || CT.C165}), new container.Container.new({margin: C145 || CT.C145, height: 45.0, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(22.0), child: new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0}), color: colors.Colors.pink._get(50), child: new text_field.TextField.new({textCapitalization: text_input.TextCapitalization.characters, autocorrect: true, autofocus: true, keyboardType: text_input.TextInputType.text, decoration: new input_decorator.InputDecoration.new({hintText: "Drop Location", prefixIcon: new icon.Icon.new(icons.Icons.map, {$creationLocationd_0dea112b090073317d4: C170 || CT.C170}), hintStyle: new text_style.TextStyle.new({fontWeight: ui.FontWeight.w300, color: colors.Colors.black87})}), $creationLocationd_0dea112b090073317d4: C173 || CT.C173}), $creationLocationd_0dea112b090073317d4: C180 || CT.C180}), $creationLocationd_0dea112b090073317d4: C185 || CT.C185}), $creationLocationd_0dea112b090073317d4: C189 || CT.C189}), new basic.SizedBox.new({height: 12.0, $creationLocationd_0dea112b090073317d4: C194 || CT.C194}), new home._DateTimePicker.new({labelText: "To", selectedDate: _toDate, selectedTime: _toTime, $creationLocationd_0dea112b090073317d4: C197 || CT.C197}), new container.Container.new({height: 35.0, width: 200.0, margin: C145 || CT.C145, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(15.0), child: new container.Container.new({color: colors.Colors.blueAccent._get(200), child: new flat_button.FlatButton.new({padding: C202 || CT.C202, textColor: colors.Colors.black, onPressed: null, child: new text.Text.new("Search", {style: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.white, fontWeight: ui.FontWeight.w500}), $creationLocationd_0dea112b090073317d4: C203 || CT.C203}), $creationLocationd_0dea112b090073317d4: C207 || CT.C207}), $creationLocationd_0dea112b090073317d4: C213 || CT.C213}), $creationLocationd_0dea112b090073317d4: C217 || CT.C217}), $creationLocationd_0dea112b090073317d4: C221 || CT.C221}), new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0, top: 26.0, bottom: 0.0}), alignment: alignment.AlignmentDirectional.center, color: colors.Colors.transparent, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidgetL().of([new icon.Icon.new(icons.Icons.layers, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C227 || CT.C227}), new icon.Icon.new(icons.Icons.layers, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C231 || CT.C231}), new icon.Icon.new(icons.Icons.layers, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C235 || CT.C235})]), $creationLocationd_0dea112b090073317d4: C239 || CT.C239}), $creationLocationd_0dea112b090073317d4: C244 || CT.C244})]), $creationLocationd_0dea112b090073317d4: C250 || CT.C250}), $creationLocationd_0dea112b090073317d4: C254 || CT.C254}), $creationLocationd_0dea112b090073317d4: C258 || CT.C258}), $creationLocationd_0dea112b090073317d4: C263 || CT.C263}), new image.Image.asset("header_background.png", {$creationLocationd_0dea112b090073317d4: C266 || CT.C266}), new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0, top: 16.0, bottom: 16.0}), color: colors.Colors.grey, child: new text.Text.new("Cast Light life style Here", {style: new text_style.TextStyle.new({fontSize: 40.0, fontWeight: ui.FontWeight.bold, color: colors.Colors.black}), $creationLocationd_0dea112b090073317d4: C269 || CT.C269}), $creationLocationd_0dea112b090073317d4: C273 || CT.C273})]), $creationLocationd_0dea112b090073317d4: C278 || CT.C278}), $creationLocationd_0dea112b090073317d4: C282 || CT.C282}), $creationLocationd_0dea112b090073317d4: C286 || CT.C286}), $creationLocationd_0dea112b090073317d4: C289 || CT.C289});
    }
  };
  (home.Body.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    home.Body.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.Body.prototype;
  dart.addTypeTests(home.Body);
  dart.addTypeCaches(home.Body);
  dart.setMethodSignature(home.Body, () => ({
    __proto__: dart.getMethods(home.Body.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(home.Body, L0);
  var _selectDate = dart.privateName(home, "_selectDate");
  var _selectTime = dart.privateName(home, "_selectTime");
  var C294;
  var C295;
  var C296;
  var C293;
  var C292;
  var C299;
  var C300;
  var C298;
  var C297;
  var C303;
  var C304;
  var C302;
  var C301;
  var C307;
  var C308;
  var C309;
  var C310;
  var C306;
  var C305;
  var C313;
  var C314;
  var C312;
  var C311;
  var C317;
  var C318;
  var C316;
  var C315;
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var C319;
  var C322;
  var C323;
  var C324;
  var C321;
  var C320;
  var C327;
  var C328;
  var C326;
  var C325;
  var C331;
  var C332;
  var C330;
  var C329;
  var C335;
  var C336;
  var C337;
  var C338;
  var C334;
  var C333;
  var C341;
  var C342;
  var C340;
  var C339;
  var C345;
  var C346;
  var C344;
  var C343;
  var C349;
  var C350;
  var C348;
  var C347;
  var labelText$ = dart.privateName(home, "_DateTimePicker.labelText");
  var selectedDate$ = dart.privateName(home, "_DateTimePicker.selectedDate");
  var selectedTime$ = dart.privateName(home, "_DateTimePicker.selectedTime");
  var selectDate$ = dart.privateName(home, "_DateTimePicker.selectDate");
  var selectTime$ = dart.privateName(home, "_DateTimePicker.selectTime");
  home._DateTimePicker = class _DateTimePicker extends framework.StatelessWidget {
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
    [_selectDate](context) {
      return async.async(dart.void, (function* _selectDate() {
        let t0;
        let picked = (yield date_picker.showDatePicker({context: context, initialDate: this.selectedDate, firstDate: new core.DateTime.new(2015, 8), lastDate: new core.DateTime.new(2101)}));
        if (picked != null && !dart.equals(picked, this.selectedDate)) {
          t0 = picked;
          this.selectDate(t0);
        }
      }).bind(this));
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
      return new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.end, children: JSArrayOfWidgetL().of([new basic.Expanded.new({flex: 2, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(22.0), child: new container.Container.new({height: 40.0, padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0, bottom: 5.0}), color: colors.Colors.pink._get(50), child: new ink_well.InkWell.new({onTap: dart.fn(() => {
                    this[_selectDate](context);
                  }, VoidToNullN()), child: new input_decorator.InputDecorator.new({baseStyle: valueStyle, decoration: new input_decorator.InputDecoration.new({labelText: "Onward Date", prefixIcon: new icon.Icon.new(icons.Icons.calendar_today, {size: 20.0, color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C292 || CT.C292}), labelStyle: new text_style.TextStyle.new({fontWeight: ui.FontWeight.w500, color: colors.Colors.black87})}), $creationLocationd_0dea112b090073317d4: C297 || CT.C297}), $creationLocationd_0dea112b090073317d4: C301 || CT.C301}), $creationLocationd_0dea112b090073317d4: C305 || CT.C305}), $creationLocationd_0dea112b090073317d4: C311 || CT.C311}), $creationLocationd_0dea112b090073317d4: C315 || CT.C315}), C319 || CT.C319, new basic.Expanded.new({flex: 2, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(22.0), child: new container.Container.new({height: 40.0, padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0, bottom: 5.0}), color: colors.Colors.pink._get(50), child: new ink_well.InkWell.new({onTap: dart.fn(() => {
                    this[_selectTime](context);
                  }, VoidToNullN()), child: new input_decorator.InputDecorator.new({baseStyle: valueStyle, decoration: new input_decorator.InputDecoration.new({labelText: "Onward Time", prefixIcon: new icon.Icon.new(icons.Icons.timer, {size: 20.0, color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C320 || CT.C320}), labelStyle: new text_style.TextStyle.new({fontWeight: ui.FontWeight.w500, color: colors.Colors.black87})}), $creationLocationd_0dea112b090073317d4: C325 || CT.C325}), $creationLocationd_0dea112b090073317d4: C329 || CT.C329}), $creationLocationd_0dea112b090073317d4: C333 || CT.C333}), $creationLocationd_0dea112b090073317d4: C339 || CT.C339}), $creationLocationd_0dea112b090073317d4: C343 || CT.C343})]), $creationLocationd_0dea112b090073317d4: C347 || CT.C347});
    }
  };
  (home._DateTimePicker.new = function(opts) {
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
    home._DateTimePicker.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home._DateTimePicker.prototype;
  dart.addTypeTests(home._DateTimePicker);
  dart.addTypeCaches(home._DateTimePicker);
  dart.setMethodSignature(home._DateTimePicker, () => ({
    __proto__: dart.getMethods(home._DateTimePicker.__proto__),
    [_selectDate]: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(framework.BuildContext)]),
    [_selectTime]: dart.fnType(dart.legacy(async.Future$(dart.void)), [dart.legacy(framework.BuildContext)]),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(home._DateTimePicker, L0);
  dart.setFieldSignature(home._DateTimePicker, () => ({
    __proto__: dart.getFields(home._DateTimePicker.__proto__),
    labelText: dart.finalFieldType(dart.legacy(core.String)),
    selectedDate: dart.finalFieldType(dart.legacy(core.DateTime)),
    selectedTime: dart.finalFieldType(dart.legacy(time.TimeOfDay)),
    selectDate: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(core.DateTime)]))),
    selectTime: dart.finalFieldType(dart.legacy(dart.fnType(dart.void, [dart.legacy(time.TimeOfDay)])))
  }));
  var C351;
  var C354;
  var C355;
  var C353;
  var C352;
  home.main = function main() {
    binding.runApp(new app.MaterialApp.new({debugShowCheckedModeBanner: false, home: new home.Furniture.new({$creationLocationd_0dea112b090073317d4: C351 || CT.C351}), $creationLocationd_0dea112b090073317d4: C352 || CT.C352}));
  };
  dart.trackLibraries("packages/CabBookFlutterTemplate/home", {
    "package:CabBookFlutterTemplate/home.dart": home
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAkB4B;AACxB,eAAK;AAMG,QALN,0CACa,OAAO,WACP,QAAc;;;AAM7B,YAAO,6CACmB,6BAChB,yCACkB,gCACb,kBACE,cACN,kBACL,8CACO,qCACW,+BACJ,kBACE,yBACW,+BACF,uFAElB,oDAEQ,sBAAM,+IACN,uBACf,gEAEa,YAAY,4HAavB,wDACQ,+BACA,uBACR,gCACuB,wCACd,sDAEE,gCACG,aACD,kQAIb,mJAGQ;IAGlB;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACZ,wBAAqB,sBAC3B,sBAAY,6CAAmD,+EAC/D,sBAAY,sBAA4B,+EACxC,sBAAY,6BAAmC,+EAC/C,sBAAY,4CAAkD,+EAC9D,sBAAY,6BAAmC;AAE5C,oBAAmB;AAClB;AAEV,YAAW,mCACI,oCACI,2CACA,qCAEb,sCAAyC,yCAA0B,uBACjE,oCACY,2BACH,0CACE,AAAY,WAAD,wBACT,SAAC,IAAI,MACT,oCACI,uCACkB,wCAAS,cAC7B,0BAAU,CAAC,SAAS,AAAW,WAAA,QAAC,CAAC,+NAGhC,kBACD,0BACO,YACX,eACG,cACW,uJAGzB,0BACW,+BACgC,aAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe,WACnC,cACD,oCACW,kCACP,kEAEe,uBACZ,sCACkB,uCACV,aAAa,WAAW,cAAY,kBACd,8CAClB,kCACH,kBACT,0BACW,wCACC,kBACa,2BACT,6IAIhB,sCACkB,uCACV,aAAa,WAAW,cAAc,kBAChB,8CAClB,kCACP,sCACgC,mDACV,iCACT,uBACZ,kBAAW,4BAAsB,qFACjC,kBAAW,4BAAsB,qFACjC,kBAAW,4BAAsB,6MAIvC,8DAEM,aACD,uCACwB,wCAAS,cACzB,sCACW,uCAAW,aAAa,eAC9B,AAAI,wBAAC,YACZ,kDACkC,uDAC1B,iBACF,oBACiB,2CAChB,qDACI,kBAAW,uFACb,8BACC,0CACgB,2BACT,uQAI5B,8DAEM,aACD,uCACwB,wCAAS,cACzB,sCACW,uCAAW,aAAa,eAC9B,AAAI,wBAAC,YACZ,kDACkC,uDAC1B,iBACF,oBACiB,2CAChB,mDACE,6BACE,kBAAW,wFACZ,0CACgB,2BACT,uQAIhC,gCAAiB,iEACjB,yCACa,oBACG,OAAO,gBACP,OAAO,6DAEnB,qCACM,aACD,uCAEA,uCACwB,wCAAS,cACzB,oCACK,AAAU,8BAAC,aACd,qEAES,gCACP,aACA,kBACT,kBACO,wCACO,aACI,iCACS,6TAKnC,sCACkB,uCACV,aAAa,WAAW,cAAc,kBAChB,8CAClB,kCACP,sCACgC,mDACV,iCACT,uBACZ,kBAAW,4BAAsB,qFACjC,kBAAW,4BAAsB,qFACjC,kBAAW,4BAAsB,2bAMnD,sBAAY,qFACZ,sCAEa,uCAAW,aAAa,WAAW,cAAc,eAClD,2BACH,kBACT,sCACW,wCACC,kBACa,2BACT;IAM1B;;;QAtLgB;;AAAQ,6CAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmM1B;;;;;;IACE;;;;;;IACC;;;;;;IACa;;;;;;IACC;;;;;;kBAEQ;AAAd;;AACP,sBAAS,MAAM,qCACjB,OAAO,eACH,8BACF,sBAAS,MAAM,cAChB,sBAAS;AACvB,YAAI,MAAM,IAAI,qBAAQ,MAAM,EAAI,oBAAgC;eAAP,MAAM;UAAjB,AAAU;;MAC1D;;kBAEsC;AAAd;;AACN,sBACZ,MAAM,qCAAwB,OAAO,eAAe;AACxD,YAAI,MAAM,IAAI,qBAAQ,MAAM,EAAI,oBAAgC;eAAP,MAAM;UAAjB,AAAU;;MAC1D;;UAG0B;AACR,uBAAmB,AAAY,AAAU,eAAnB,OAAO;AAC7C,YAAO,wCACkC,uCACrB,uBAChB,8BACQ,UACC,uCACwB,wCAAS,cACzB,qCACC,eAEO,uCAAW,aAAa,cAAc,cACvC,AAAI,wBAAC,YACZ,iCACE;AACe,oBAApB,kBAAY,OAAO;4CAEd,mDACM,UAAU,cACT,oDACG,2BACC,kBAAW,mCACb,aAAkB,iGAChB,0CACe,2BACT,mVAcpC,8BACQ,UACC,uCACwB,wCAAS,cACzB,qCACC,eAEO,uCAAW,aAAa,cAAc,cACvC,AAAI,wBAAC,YACZ,iCACE;AACe,oBAApB,kBAAY,OAAO;4CAEd,mDACM,UAAU,cACT,oDACG,2BACC,kBAAW,0BACb,aAAkB,iGAChB,0CACe,2BACT;IAc1C;;;QAzGS;QACA;QACA;QACA;QACA;QACA;;IAJA;IACA;IACA;IACA;IACA;AACH,wDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;AAzQpB,IALD,eACE,qDAC8B,aACtB;EAGZ","file":"home.unsound.ddc.js"}');
  // Exports:
  return {
    home: home
  };
}));

//# sourceMappingURL=home.unsound.ddc.js.map
