define(['dart_sdk', 'packages/CabBookFlutterTemplate/google_map/place_service', 'packages/flutter_web/material', 'packages/flutter_web/animation'], (function load__packages__CabBookFlutterTemplate__google_map__address_search(dart_sdk, packages__CabBookFlutterTemplate__google_map__place_service, packages__flutter_web__material, packages__flutter_web__animation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const place_service = packages__CabBookFlutterTemplate__google_map__place_service.google_map__place_service;
  const icon_button = packages__flutter_web__material.src__material__icon_button;
  const icons = packages__flutter_web__material.src__material__icons;
  const list_tile = packages__flutter_web__material.src__material__list_tile;
  const search = packages__flutter_web__material.src__material__search;
  const icon = packages__flutter_web__animation.src__widgets__icon;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const async = packages__flutter_web__animation.src__widgets__async;
  const localizations = packages__flutter_web__animation.src__widgets__localizations;
  const container = packages__flutter_web__animation.src__widgets__container;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const text = packages__flutter_web__animation.src__widgets__text;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  var address_search = Object.create(dart.library);
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  var SuggestionL = () => (SuggestionL = dart.constFn(dart.legacy(place_service.Suggestion)))();
  var ListOfSuggestionL = () => (ListOfSuggestionL = dart.constFn(core.List$(SuggestionL())))();
  var ListLOfSuggestionL = () => (ListLOfSuggestionL = dart.constFn(dart.legacy(ListOfSuggestionL())))();
  var FutureBuilderOfListLOfSuggestionL = () => (FutureBuilderOfListLOfSuggestionL = dart.constFn(async.FutureBuilder$(ListLOfSuggestionL())))();
  var ListTileL = () => (ListTileL = dart.constFn(dart.legacy(list_tile.ListTile)))();
  var BuildContextL = () => (BuildContextL = dart.constFn(dart.legacy(framework.BuildContext)))();
  var intL = () => (intL = dart.constFn(dart.legacy(core.int)))();
  var BuildContextLAndintLToListTileL = () => (BuildContextLAndintLToListTileL = dart.constFn(dart.fnType(ListTileL(), [BuildContextL(), intL()])))();
  var StatelessWidgetL = () => (StatelessWidgetL = dart.constFn(dart.legacy(framework.StatelessWidget)))();
  var AsyncSnapshotL = () => (AsyncSnapshotL = dart.constFn(dart.legacy(async.AsyncSnapshot)))();
  var BuildContextLAndAsyncSnapshotLToStatelessWidgetL = () => (BuildContextLAndAsyncSnapshotLToStatelessWidgetL = dart.constFn(dart.fnType(StatelessWidgetL(), [BuildContextL(), AsyncSnapshotL()])))();
  const CT = Object.create(null);
  var L0 = "package:CabBookFlutterTemplate/google_map/address_search.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 26,
        [_Location_line]: 17,
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
        [_Location_column]: 15,
        [_Location_line]: 17,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/google_map/address_search.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 9,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 9,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 18,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], _LocationL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/google_map/address_search.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 24,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], _LocationL());
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 29,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/google_map/address_search.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "tooltip",
        [_Location_column]: 7,
        [_Location_line]: 28,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 7,
        [_Location_line]: 29,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 7,
        [_Location_line]: 30,
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
        [_Location_column]: 12,
        [_Location_line]: 27,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/google_map/address_search.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], _LocationL());
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/google_map/address_search.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 51,
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
        [_Location_column]: 13,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/google_map/address_search.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 67,
        [_Location_line]: 57,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], _LocationL());
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/google_map/address_search.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 21,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 21,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], _LocationL());
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C27 || CT.C27,
        [_Location_name]: null,
        [_Location_column]: 52,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/google_map/address_search.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 19,
        [_Location_line]: 55,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 19,
        [_Location_line]: 62,
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
        [_Location_column]: 26,
        [_Location_line]: 54,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/google_map/address_search.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 39,
        [_Location_line]: 64,
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
        [_Location_column]: 34,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/google_map/address_search.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 27,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39], _LocationL());
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 64,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/google_map/address_search.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 7,
        [_Location_line]: 44,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], _LocationL());
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 43,
        [_Location_file]: "org-dartlang-app:///packages/CabBookFlutterTemplate/google_map/address_search.dart"
      });
    }
  }, false);
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
  var C4;
  var C3;
  var C10;
  var C9;
  var C8;
  var C13;
  var C14;
  var C15;
  var C12;
  var C11;
  var C18;
  var C17;
  var C16;
  var C21;
  var C22;
  var C20;
  var C19;
  var C25;
  var C24;
  var C23;
  var C28;
  var C29;
  var C27;
  var C26;
  var C32;
  var C33;
  var C31;
  var C30;
  var C36;
  var C35;
  var C34;
  var C39;
  var C38;
  var C37;
  var C42;
  var C43;
  var C41;
  var C40;
  var sessionToken$ = dart.privateName(address_search, "AddressSearch.sessionToken");
  var apiClient = dart.privateName(address_search, "AddressSearch.apiClient");
  address_search.AddressSearch = class AddressSearch extends search.SearchDelegate$(dart.legacy(place_service.Suggestion)) {
    get sessionToken() {
      return this[sessionToken$];
    }
    set sessionToken(value) {
      super.sessionToken = value;
    }
    get apiClient() {
      return this[apiClient];
    }
    set apiClient(value) {
      this[apiClient] = value;
    }
    buildActions(context) {
      return JSArrayOfWidgetL().of([new icon_button.IconButton.new({tooltip: "Clear", icon: new icon.Icon.new(icons.Icons.clear, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), onPressed: dart.fn(() => {
            this.query = "";
          }, VoidToNullN()), $creationLocationd_0dea112b090073317d4: C3 || CT.C3})]);
    }
    buildLeading(context) {
      return new icon_button.IconButton.new({tooltip: "Back", icon: new icon.Icon.new(icons.Icons.arrow_back, {$creationLocationd_0dea112b090073317d4: C8 || CT.C8}), onPressed: dart.fn(() => {
          this.close(context, null);
        }, VoidToNullN()), $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
    }
    buildResults(context) {
      return null;
    }
    buildSuggestions(context) {
      return new (FutureBuilderOfListLOfSuggestionL()).new({future: this.query === "" ? null : this.apiClient.fetchSuggestions(this.query, localizations.Localizations.localeOf(context).languageCode), builder: dart.fn((context, snapshot) => this.query === "" ? new container.Container.new({padding: new edge_insets.EdgeInsets.all(16.0), child: new text.Text.new("Enter your address", {$creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}) : dart.test(snapshot.hasData) ? new scroll_view.ListView.builder({itemBuilder: dart.fn((context, index) => new list_tile.ListTile.new({title: new text.Text.new(SuggestionL().as(dart.dsend(snapshot.data, '_get', [index])).description, {$creationLocationd_0dea112b090073317d4: C23 || CT.C23}), onTap: dart.fn(() => {
              this.close(context, SuggestionL().as(dart.dsend(snapshot.data, '_get', [index])));
            }, VoidToNullN()), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), BuildContextLAndintLToListTileL()), itemCount: intL().as(dart.dload(snapshot.data, 'length')), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}) : new container.Container.new({child: new text.Text.new("Loading...", {$creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), BuildContextLAndAsyncSnapshotLToStatelessWidgetL()), $creationLocationd_0dea112b090073317d4: C40 || CT.C40});
    }
  };
  (address_search.AddressSearch.new = function(sessionToken) {
    this[apiClient] = null;
    this[sessionToken$] = sessionToken;
    address_search.AddressSearch.__proto__.new.call(this);
    this.apiClient = new place_service.PlaceApiProvider.new(this.sessionToken);
  }).prototype = address_search.AddressSearch.prototype;
  dart.addTypeTests(address_search.AddressSearch);
  dart.addTypeCaches(address_search.AddressSearch);
  dart.setMethodSignature(address_search.AddressSearch, () => ({
    __proto__: dart.getMethods(address_search.AddressSearch.__proto__),
    buildActions: dart.fnType(dart.legacy(core.List$(dart.legacy(framework.Widget))), [dart.legacy(framework.BuildContext)]),
    buildLeading: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    buildResults: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    buildSuggestions: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(address_search.AddressSearch, L0);
  dart.setFieldSignature(address_search.AddressSearch, () => ({
    __proto__: dart.getFields(address_search.AddressSearch.__proto__),
    sessionToken: dart.finalFieldType(dart.dynamic),
    apiClient: dart.fieldType(dart.legacy(place_service.PlaceApiProvider))
  }));
  dart.trackLibraries("packages/CabBookFlutterTemplate/google_map/address_search", {
    "package:CabBookFlutterTemplate/google_map/address_search.dart": address_search
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["address_search.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQQ;;;;;;IACW;;;;;;iBAGsB;AACrC,YAAO,wBACL,yCACW,eACH,kBAAW,sFACN;AACC,YAAV,aAAQ;;IAIhB;iBAGiC;AAC/B,YAAO,0CACI,cACH,kBAAW,2FACN;AACW,UAApB,WAAM,OAAO,EAAE;;IAGrB;iBAGiC;AAC/B,YAAO;IACT;qBAGqC;AACnC,YAAO,wDACG,AAAM,eAAG,KACX,OACA,AAAU,gCACR,YAAqB,AAAkB,qCAAT,OAAO,0BACpC,SAAC,SAAS,aAAa,AAAM,eAAG,KACnC,sCACsB,+BAAI,cACjB,kBAAK,oJAEd,AAAS,QAAD,YACK,+CACM,SAAC,SAAS,UAAU,mCAE3B,kBAA2B,AAAe,iBAAvB,WAAb,AAAS,QAAD,gBAAM,KAAK,kFACtB;AAC6C,cAAlD,WAAM,OAAO,EAAuB,iBAAR,WAAb,AAAS,QAAD,gBAAM,KAAK;iJAGb,WAAd,AAAS,QAAD,6EAErB,oCAAiB,kBAAK;IAEpC;;+CA7DmB;IAKF;IALE;AAAnB;AAC4C,IAA1C,iBAAY,uCAAiB;EAC/B","file":"address_search.unsound.ddc.js"}');
  // Exports:
  return {
    google_map__address_search: address_search
  };
}));

//# sourceMappingURL=address_search.unsound.ddc.js.map
