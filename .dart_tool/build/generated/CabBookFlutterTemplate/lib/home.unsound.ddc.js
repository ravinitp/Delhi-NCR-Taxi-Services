define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/CabBookFlutterTemplate/utils/responsive_layout', 'packages/CabBookFlutterTemplate/widget/button_row', 'packages/CabBookFlutterTemplate/utils/flutter_swiper', 'packages/CabBookFlutterTemplate/widget/location_text_field', 'packages/CabBookFlutterTemplate/widget/date_time_picker'], (function load__packages__CabBookFlutterTemplate__home(dart_sdk, packages__flutter_web__material, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui, packages__CabBookFlutterTemplate__utils__responsive_layout, packages__CabBookFlutterTemplate__widget__button_row, packages__CabBookFlutterTemplate__utils__flutter_swiper, packages__CabBookFlutterTemplate__widget__location_text_field, packages__CabBookFlutterTemplate__widget__date_time_picker) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
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
  const flat_button = packages__flutter_web__material.src__material__flat_button;
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
  const location_text_field = packages__CabBookFlutterTemplate__widget__location_text_field.widget__location_text_field;
  const date_time_picker = packages__CabBookFlutterTemplate__widget__date_time_picker.widget__date_time_picker;
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
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 39,
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
        [_Location_line]: 37,
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
        [_Location_line]: 48,
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
        [_Location_line]: 48,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 47,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 48,
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
        [_Location_line]: 46,
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
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 52,
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
        [_Location_line]: 50,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57545
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C17 || CT.C17,
        [Icon_size]: null,
        [Icon_icon]: C29 || CT.C29
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33], _LocationL());
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: icon_data.IconData.prototype,
        [IconData_matchTextDirection]: false,
        [IconData_fontPackage]: null,
        [IconData_fontFamily]: "MaterialIcons",
        [IconData_codePoint]: 57534
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: icon.Icon.prototype,
        [Widget_key]: null,
        [Icon_textDirection]: null,
        [Icon_semanticLabel]: null,
        [Icon_color]: C17 || CT.C17,
        [Icon_size]: null,
        [Icon_icon]: C35 || CT.C35
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 30,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 10
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40, C41 || CT.C41], _LocationL());
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 9,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 9,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerTitle",
        [_Location_column]: 9,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 9,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 9,
        [_Location_line]: 46,
        [_Location_file]: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49], _LocationL());
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C43 || CT.C43,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 0,
        [EdgeInsets__left]: 0
      });
    },
    get C52() {
      return C52 = dart.constList([], _LocationL());
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 19,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 74,
        [_Location_file]: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56], _LocationL());
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C54 || CT.C54,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 72,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60], _LocationL());
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 15,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64], _LocationL());
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 78,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 11,
        [_Location_line]: 67,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68], _LocationL());
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C67 || CT.C67,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 66,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "largeChild",
        [_Location_column]: 9,
        [_Location_line]: 66,
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
        [_Location_column]: 13,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75, C76 || CT.C76], _LocationL());
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 23,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 62,
        [_Location_line]: 92,
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
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 23,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 39,
        [_Location_line]: 93,
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
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 23,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 46,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87, C88 || CT.C88], _LocationL());
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 94,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 23,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 61,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91, C92 || CT.C92], _LocationL());
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 23,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 46,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96], _LocationL());
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: time.TimeOfDay.prototype,
        [TimeOfDay_minute]: 28,
        [TimeOfDay_hour]: 7
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tag",
        [_Location_column]: 29,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 37,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100, C101 || CT.C101], _LocationL());
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 114,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 17,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105], _LocationL());
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108], _LocationL());
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C107 || CT.C107,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 13,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 13,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemHeight",
        [_Location_column]: 13,
        [_Location_line]: 117,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemWidth",
        [_Location_column]: 13,
        [_Location_line]: 118,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "viewportFraction",
        [_Location_column]: 13,
        [_Location_line]: 119,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 13,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autoplay",
        [_Location_column]: 13,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "layout",
        [_Location_column]: 13,
        [_Location_line]: 122,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111, C112 || CT.C112, C113 || CT.C113, C114 || CT.C114, C115 || CT.C115, C116 || CT.C116, C117 || CT.C117, C118 || CT.C118], _LocationL());
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C110 || CT.C110,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 11,
        [_Location_line]: 107,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.constList([C121 || CT.C121, C122 || CT.C122], _LocationL());
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C120 || CT.C120,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 16,
        [EdgeInsets__right]: 16,
        [EdgeInsets__top]: 16,
        [EdgeInsets__left]: 16
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 140,
        [_Location_file]: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 141,
        [_Location_file]: null
      });
    },
    get C125() {
      return C125 = dart.constList([C126 || CT.C126, C127 || CT.C127], _LocationL());
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C125 || CT.C125,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 139,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 23,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 138,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130, C131 || CT.C131, C132 || CT.C132, C133 || CT.C133], _LocationL());
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 134,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 42,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 50,
        [_Location_line]: 157,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.constList([C136 || CT.C136, C137 || CT.C137], _LocationL());
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C135 || CT.C135,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 42,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 50,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140, C141 || CT.C141], _LocationL());
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 158,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 42,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 50,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.constList([C144 || CT.C144, C145 || CT.C145], _LocationL());
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C143 || CT.C143,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 159,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 154,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 25,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 156,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148, C149 || CT.C149, C150 || CT.C150], _LocationL());
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C147 || CT.C147,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 149,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 23,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.constList([C153 || CT.C153, C154 || CT.C154, C155 || CT.C155, C156 || CT.C156], _LocationL());
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C152 || CT.C152,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 148,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "lableText",
        [_Location_column]: 39,
        [_Location_line]: 163,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.constList([C159 || CT.C159], _LocationL());
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C158 || CT.C158,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 163,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "lableText",
        [_Location_column]: 39,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.constList([C162 || CT.C162], _LocationL());
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C161 || CT.C161,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 30,
        [_Location_line]: 188,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.constList([C165 || CT.C165], _LocationL());
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C164 || CT.C164,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 188,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedDate",
        [_Location_column]: 23,
        [_Location_line]: 190,
        [_Location_file]: null
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "selectedTime",
        [_Location_column]: 23,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C167() {
      return C167 = dart.constList([C168 || CT.C168, C169 || CT.C169], _LocationL());
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C167 || CT.C167,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 189,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 0,
        [EdgeInsets__right]: 0,
        [EdgeInsets__top]: 20,
        [EdgeInsets__left]: 0
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 8,
        [EdgeInsets__right]: 8,
        [EdgeInsets__top]: 8,
        [EdgeInsets__left]: 8
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 33,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.constList([C174 || CT.C174, C175 || CT.C175], _LocationL());
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C173 || CT.C173,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 205,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 31,
        [_Location_line]: 202,
        [_Location_file]: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textColor",
        [_Location_column]: 31,
        [_Location_line]: 203,
        [_Location_file]: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 31,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C177() {
      return C177 = dart.constList([C178 || CT.C178, C179 || CT.C179, C180 || CT.C180, C181 || CT.C181], _LocationL());
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C177 || CT.C177,
        [_Location_name]: null,
        [_Location_column]: 40,
        [_Location_line]: 201,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 29,
        [_Location_line]: 200,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.constList([C184 || CT.C184, C185 || CT.C185], _LocationL());
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C183 || CT.C183,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "borderRadius",
        [_Location_column]: 27,
        [_Location_line]: 198,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C187() {
      return C187 = dart.constList([C188 || CT.C188, C189 || CT.C189], _LocationL());
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C187 || CT.C187,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 197,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 23,
        [_Location_line]: 196,
        [_Location_file]: null
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C191() {
      return C191 = dart.constList([C192 || CT.C192, C193 || CT.C193, C194 || CT.C194, C195 || CT.C195], _LocationL());
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C191 || CT.C191,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 193,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 42,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 50,
        [_Location_line]: 224,
        [_Location_file]: null
      });
    },
    get C197() {
      return C197 = dart.constList([C198 || CT.C198, C199 || CT.C199], _LocationL());
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C197 || CT.C197,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 224,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 42,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 50,
        [_Location_line]: 225,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.constList([C202 || CT.C202, C203 || CT.C203], _LocationL());
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C201 || CT.C201,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 225,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 42,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 50,
        [_Location_line]: 226,
        [_Location_file]: null
      });
    },
    get C205() {
      return C205 = dart.constList([C206 || CT.C206, C207 || CT.C207], _LocationL());
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C205 || CT.C205,
        [_Location_name]: null,
        [_Location_column]: 31,
        [_Location_line]: 226,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 25,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 25,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 25,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.constList([C210 || CT.C210, C211 || CT.C211, C212 || CT.C212], _LocationL());
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C209 || CT.C209,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 220,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 216,
        [_Location_file]: null
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 23,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C214() {
      return C214 = dart.constList([C215 || CT.C215, C216 || CT.C216, C217 || CT.C217, C218 || CT.C218], _LocationL());
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C214 || CT.C214,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 215,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 19,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C220() {
      return C220 = dart.constList([C221 || CT.C221, C222 || CT.C222], _LocationL());
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C220 || CT.C220,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 15,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C224() {
      return C224 = dart.constList([C225 || CT.C225, C226 || CT.C226], _LocationL());
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C224 || CT.C224,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 11,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 11,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C228() {
      return C228 = dart.constList([C229 || CT.C229, C230 || CT.C230, C231 || CT.C231], _LocationL());
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C228 || CT.C228,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 126,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C233() {
      return C233 = dart.constList([C234 || CT.C234], _LocationL());
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C233 || CT.C233,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 125,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 18,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 60,
        [_Location_line]: 105,
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
        [_Location_column]: 14,
        [_Location_line]: 105,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 7,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.constList([C241 || CT.C241, C242 || CT.C242], _LocationL());
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C240 || CT.C240,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 103,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C244() {
      return C244 = dart.constList([C245 || CT.C245], _LocationL());
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C244 || CT.C244,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 102,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C247() {
      return C247 = dart.constList([C248 || CT.C248], _LocationL());
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C247 || CT.C247,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 101,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C52 || CT.C52,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/home.dart"
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "debugShowCheckedModeBanner",
        [_Location_column]: 7,
        [_Location_line]: 13,
        [_Location_file]: null
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 14,
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
        [_Location_column]: 5,
        [_Location_line]: 12,
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
  var C29;
  var C28;
  var C32;
  var C33;
  var C31;
  var C30;
  var C35;
  var C34;
  var C36;
  var C39;
  var C40;
  var C41;
  var C38;
  var C37;
  var C44;
  var C45;
  var C46;
  var C47;
  var C48;
  var C49;
  var C43;
  var C42;
  var C50;
  var C52;
  var C51;
  var C55;
  var C56;
  var C54;
  var C53;
  var C59;
  var C60;
  var C58;
  var C57;
  var C63;
  var C64;
  var C62;
  var C61;
  var C65;
  var C68;
  var C67;
  var C66;
  var C71;
  var C70;
  var C69;
  var C74;
  var C75;
  var C76;
  var C73;
  var C72;
  home.Furniture = class Furniture extends framework.StatelessWidget {
    build(context) {
      function _aboutAction() {
        dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(context => C0 || CT.C0, BuildContextLToAlertDialogL())});
      }
      dart.fn(_aboutAction, VoidTovoid());
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, appBar: new app_bar.AppBar.new({backgroundColor: colors.Colors.white, elevation: 0.0, centerTitle: false, title: new text.Text.new("Delhi NCR Taxi outstation services", {style: new text_style.TextStyle.new({color: colors.Colors.black, fontSize: 24.0, fontFamily: "Open Sans", fontWeight: ui.FontWeight.w800, fontStyle: ui.FontStyle.normal}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), leading: new basic.Padding.new({padding: C8 || CT.C8, child: new image.Image.asset("icon/nav-logo.png", {$creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), actions: JSArrayOfWidgetL().of([new icon_button.IconButton.new({icon: C16 || CT.C16, onPressed: _aboutAction, $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), new icon_button.IconButton.new({icon: C28 || CT.C28, onPressed: _aboutAction, $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), new icon_button.IconButton.new({icon: C34 || CT.C34, onPressed: _aboutAction, padding: C36 || CT.C36, $creationLocationd_0dea112b090073317d4: C37 || CT.C37})]), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), body: new responsive_layout.ResponsiveLayout.new({largeChild: new basic.Stack.new({children: JSArrayOfWidgetL().of([new basic.Align.new({alignment: alignment.Alignment.bottomRight, child: new basic.Padding.new({padding: C50 || CT.C50, child: new basic.SizedBox.new({height: 0.0, child: new button_row.ButtonRow.new({$creationLocationd_0dea112b090073317d4: C51 || CT.C51}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), new home.Body.new({$creationLocationd_0dea112b090073317d4: C65 || CT.C65})]), $creationLocationd_0dea112b090073317d4: C66 || CT.C66}), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), $creationLocationd_0dea112b090073317d4: C72 || CT.C72});
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
  var C79;
  var C80;
  var C78;
  var C77;
  var C83;
  var C84;
  var C82;
  var C81;
  var C87;
  var C88;
  var C86;
  var C85;
  var C91;
  var C92;
  var C90;
  var C89;
  var C95;
  var C96;
  var C94;
  var C93;
  var TimeOfDay_minute = dart.privateName(time, "TimeOfDay.minute");
  var TimeOfDay_hour = dart.privateName(time, "TimeOfDay.hour");
  var C97;
  var C100;
  var C101;
  var C99;
  var C98;
  var C104;
  var C105;
  var C103;
  var C102;
  var C108;
  var C107;
  var C106;
  var C111;
  var C112;
  var C113;
  var C114;
  var C115;
  var C116;
  var C117;
  var C118;
  var C110;
  var C109;
  var C121;
  var C122;
  var C120;
  var C119;
  var C123;
  var C126;
  var C127;
  var C125;
  var C124;
  var C130;
  var C131;
  var C132;
  var C133;
  var C129;
  var C128;
  var C136;
  var C137;
  var C135;
  var C134;
  var C140;
  var C141;
  var C139;
  var C138;
  var C144;
  var C145;
  var C143;
  var C142;
  var C148;
  var C149;
  var C150;
  var C147;
  var C146;
  var C153;
  var C154;
  var C155;
  var C156;
  var C152;
  var C151;
  var C159;
  var C158;
  var C157;
  var C162;
  var C161;
  var C160;
  var C165;
  var C164;
  var C163;
  var C168;
  var C169;
  var C167;
  var C166;
  var C170;
  var C171;
  var C174;
  var C175;
  var C173;
  var C172;
  var C178;
  var C179;
  var C180;
  var C181;
  var C177;
  var C176;
  var C184;
  var C185;
  var C183;
  var C182;
  var C188;
  var C189;
  var C187;
  var C186;
  var C192;
  var C193;
  var C194;
  var C195;
  var C191;
  var C190;
  var C198;
  var C199;
  var C197;
  var C196;
  var C202;
  var C203;
  var C201;
  var C200;
  var C206;
  var C207;
  var C205;
  var C204;
  var C210;
  var C211;
  var C212;
  var C209;
  var C208;
  var C215;
  var C216;
  var C217;
  var C218;
  var C214;
  var C213;
  var C221;
  var C222;
  var C220;
  var C219;
  var C225;
  var C226;
  var C224;
  var C223;
  var C229;
  var C230;
  var C231;
  var C228;
  var C227;
  var C234;
  var C233;
  var C232;
  var C237;
  var C238;
  var C236;
  var C235;
  var C241;
  var C242;
  var C240;
  var C239;
  var C245;
  var C244;
  var C243;
  var C248;
  var C247;
  var C246;
  home.Body = class Body extends framework.StatelessWidget {
    build(context) {
      let imageSlider = JSArrayOfImageL().of([new image.Image.asset("marutisuzuki-dzire-front-seats4.jpg", {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), new image.Image.asset("tajmahal.jpg", {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), new image.Image.asset("mat60sa_1458595.jpg", {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C85 || CT.C85}), new image.Image.asset("Solang-near-Manali-Kullu-min-1.jpg", {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), new image.Image.asset("56buusa_1483112.jpg", {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C93 || CT.C93})]);
      let _toDate = new core.DateTime.now();
      let _toTime = C97 || CT.C97;
      return new material.Material.new({child: new container.Container.new({child: new basic.ConstrainedBox.new({constraints: new box.BoxConstraints.new(), child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.end, children: JSArrayOfWidgetL().of([new container.Container.new({color: colors.Colors.grey, child: new flutter_swiper.Swiper.new({itemCount: imageSlider[$length], itemBuilder: dart.fn((cx, i) => new container.Container.new({child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(20.0), child: new heroes.Hero.new({tag: i, child: imageSlider[$_get](i), $creationLocationd_0dea112b090073317d4: C98 || CT.C98}), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), $creationLocationd_0dea112b090073317d4: C106 || CT.C106}), BuildContextLAndintLToContainerL()), itemHeight: 800.0, itemWidth: 1000.0, viewportFraction: 0.8, scale: 0.9, autoplay: true, layout: flutter_swiper.SwiperLayout.STACK, $creationLocationd_0dea112b090073317d4: C109 || CT.C109}), $creationLocationd_0dea112b090073317d4: C119 || CT.C119}), new card.Card.new({child: new basic.SizedBox.new({width: dart.notNull(media_query.MediaQuery.of(context).size.width) / 3, height: 800.0, child: new container.Container.new({color: colors.Colors.transparent, child: new scroll_view.ListView.new({padding: C123 || CT.C123, children: JSArrayOfWidgetL().of([new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 0.0, right: 0.0, top: 0.0, bottom: 0.0}), alignment: alignment.AlignmentDirectional.center, color: colors.Colors.transparent, child: new text.Text.new("Book Your Ride", {style: new text_style.TextStyle.new({fontSize: 22.0, fontWeight: ui.FontWeight.w600, color: colors.Colors.black}), $creationLocationd_0dea112b090073317d4: C124 || CT.C124}), $creationLocationd_0dea112b090073317d4: C128 || CT.C128}), new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 0.0, right: 0.0, top: 26.0, bottom: 0.0}), alignment: alignment.AlignmentDirectional.center, color: colors.Colors.transparent, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidgetL().of([new icon.Icon.new(icons.Icons.layers, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C134 || CT.C134}), new icon.Icon.new(icons.Icons.layers, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C138 || CT.C138}), new icon.Icon.new(icons.Icons.layers, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C142 || CT.C142})]), $creationLocationd_0dea112b090073317d4: C146 || CT.C146}), $creationLocationd_0dea112b090073317d4: C151 || CT.C151}), new location_text_field.LocationTextField.new({lableText: "Pickup Location", $creationLocationd_0dea112b090073317d4: C157 || CT.C157}), new location_text_field.LocationTextField.new({lableText: "Drop Location", $creationLocationd_0dea112b090073317d4: C160 || CT.C160}), new basic.SizedBox.new({height: 12.0, $creationLocationd_0dea112b090073317d4: C163 || CT.C163}), new date_time_picker.DateTimePicker.new({selectedDate: _toDate, selectedTime: _toTime, $creationLocationd_0dea112b090073317d4: C166 || CT.C166}), new container.Container.new({height: 35.0, width: 200.0, margin: C170 || CT.C170, child: new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(15.0), child: new container.Container.new({color: colors.Colors.blueAccent._get(200), child: new flat_button.FlatButton.new({padding: C171 || CT.C171, textColor: colors.Colors.black, onPressed: null, child: new text.Text.new("Book", {style: new text_style.TextStyle.new({fontSize: 20.0, color: colors.Colors.white, fontWeight: ui.FontWeight.w500}), $creationLocationd_0dea112b090073317d4: C172 || CT.C172}), $creationLocationd_0dea112b090073317d4: C176 || CT.C176}), $creationLocationd_0dea112b090073317d4: C182 || CT.C182}), $creationLocationd_0dea112b090073317d4: C186 || CT.C186}), $creationLocationd_0dea112b090073317d4: C190 || CT.C190}), new container.Container.new({padding: new edge_insets.EdgeInsets.only({left: 16.0, right: 16.0, top: 26.0, bottom: 0.0}), alignment: alignment.AlignmentDirectional.center, color: colors.Colors.transparent, child: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidgetL().of([new icon.Icon.new(icons.Icons.layers, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C196 || CT.C196}), new icon.Icon.new(icons.Icons.layers, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C200 || CT.C200}), new icon.Icon.new(icons.Icons.layers, {color: colors.Colors.blueAccent, $creationLocationd_0dea112b090073317d4: C204 || CT.C204})]), $creationLocationd_0dea112b090073317d4: C208 || CT.C208}), $creationLocationd_0dea112b090073317d4: C213 || CT.C213})]), $creationLocationd_0dea112b090073317d4: C219 || CT.C219}), $creationLocationd_0dea112b090073317d4: C223 || CT.C223}), $creationLocationd_0dea112b090073317d4: C227 || CT.C227}), $creationLocationd_0dea112b090073317d4: C232 || CT.C232})]), $creationLocationd_0dea112b090073317d4: C235 || CT.C235}), $creationLocationd_0dea112b090073317d4: C239 || CT.C239}), $creationLocationd_0dea112b090073317d4: C243 || CT.C243}), $creationLocationd_0dea112b090073317d4: C246 || CT.C246});
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
  var C249;
  var C252;
  var C253;
  var C251;
  var C250;
  home.main = function main() {
    binding.runApp(new app.MaterialApp.new({debugShowCheckedModeBanner: false, home: new home.Furniture.new({$creationLocationd_0dea112b090073317d4: C249 || CT.C249}), $creationLocationd_0dea112b090073317d4: C250 || CT.C250}));
  };
  dart.trackLibraries("packages/CabBookFlutterTemplate/home", {
    "package:CabBookFlutterTemplate/home.dart": home
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAoB4B;AACxB,eAAK;AAMG,QALN,0CACa,OAAO,WACP,QAAc;;;AAM7B,YAAO,6CACmB,6BAChB,yCACkB,gCACb,kBACE,cACN,kBACL,8CACO,qCACW,+BACJ,kBACE,yBACW,+BACF,uFAElB,oDAEQ,sBAAM,+IACN,uBACf,gEAEa,YAAY,2DAEzB,gEAEa,YAAY,2DAEzB,gEAEa,YAAY,oJAKvB,wDACQ,+BACA,uBACR,gCACuB,wCACd,sDAEE,gCACG,YACD,kQAIb;IAMV;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAK4B;AACZ,wBAAqB,sBAC3B,sBAAY,6CAAmD,+EAC/D,sBAAY,sBAA4B,+EACxC,sBAAY,6BAAmC,+EAC/C,sBAAY,4CAAkD,+EAC9D,sBAAY,6BAAmC;AAE5C,oBAAmB;AAClB;AAEV,YAAW,mCACI,oCACI,2CACA,qCACV,sCAAyC,sCAAuB,uBACjE,oCACY,2BACH,0CACE,AAAY,WAAD,wBACT,SAAC,IAAI,MACT,oCACI,uCACkB,wCAAS,cAC7B,0BAAU,CAAC,SAAS,AAAW,WAAA,QAAC,CAAC,mOAGhC,kBACD,0BACO,YACX,eACG,cACW,yJAGzB,0BACW,+BACgC,aAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe,WACnC,cACD,oCACW,kCACP,kEAEe,uBACZ,sCAEa,uCAAW,YAAU,UAAQ,aAAW,kBACvB,8CAClB,kCACH,kBACT,0BACW,wCACC,kBACa,2BACT,6IAIhB,sCACkB,uCACV,YAAU,UAAQ,cAAc,kBACV,8CAClB,kCACP,sCACgC,mDACV,iCACT,uBACZ,kBAAW,4BAAsB,qFACjC,kBAAW,4BAAsB,qFACjC,kBAAW,4BAAsB,6MAI3C,0DAA6B,8EAC7B,0DAA6B,4EAwB7B,gCAAiB,iEACjB,uDACgB,OAAO,gBACP,OAAO,6DAEnB,qCACM,aACD,uCAEA,uCACwB,wCAAS,cACzB,oCACK,AAAU,8BAAC,aACd,qEAES,gCACP,aACA,kBACT,gBACO,wCACO,aACI,iCACS,6TAKnC,sCACkB,uCACV,aAAa,WAAW,cAAc,kBAChB,8CAClB,kCACP,sCACgC,mDACV,iCACT,uBACZ,kBAAW,4BAAsB,qFACjC,kBAAW,4BAAsB,qFACjC,kBAAW,4BAAsB;IAsB7D;;;QAhKgB;;AAAQ,6CAAW,GAAG;;EAAC;;;;;;;;;;;;;;AAxEtC,IALD,eACE,qDAC8B,aACtB;EAGZ","file":"home.unsound.ddc.js"}');
  // Exports:
  return {
    home: home
  };
}));

//# sourceMappingURL=home.unsound.ddc.js.map