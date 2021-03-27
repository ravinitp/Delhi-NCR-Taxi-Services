define(['dart_sdk', 'packages/http/src/base_client'], (function load__packages__CabBookFlutterTemplate__google_map__place_service(dart_sdk, packages__http__src__base_client) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const client = packages__http__src__base_client.src__client;
  var place_service = Object.create(dart.library);
  var $toString = dartx.toString;
  var $contains = dartx.contains;
  var $forEach = dartx.forEach;
  var SuggestionL = () => (SuggestionL = dart.constFn(dart.legacy(place_service.Suggestion)))();
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var dynamicToSuggestionL = () => (dynamicToSuggestionL = dart.constFn(dart.fnType(SuggestionL(), [dart.dynamic])))();
  var ListOfSuggestionL = () => (ListOfSuggestionL = dart.constFn(core.List$(SuggestionL())))();
  var ListLOfSuggestionL = () => (ListLOfSuggestionL = dart.constFn(dart.legacy(ListOfSuggestionL())))();
  var FutureOrOfListLOfSuggestionL = () => (FutureOrOfListLOfSuggestionL = dart.constFn(async.FutureOr$(ListLOfSuggestionL())))();
  var FutureOrLOfListLOfSuggestionL = () => (FutureOrLOfListLOfSuggestionL = dart.constFn(dart.legacy(FutureOrOfListLOfSuggestionL())))();
  var JSArrayOfSuggestionL = () => (JSArrayOfSuggestionL = dart.constFn(_interceptors.JSArray$(SuggestionL())))();
  var ListL = () => (ListL = dart.constFn(dart.legacy(core.List)))();
  var dynamicToNullN = () => (dynamicToNullN = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  var PlaceL = () => (PlaceL = dart.constFn(dart.legacy(place_service.Place)))();
  const CT = Object.create(null);
  var L0 = "package:CabBookFlutterTemplate/google_map/place_service.dart";
  var streetNumber$ = dart.privateName(place_service, "Place.streetNumber");
  var street$ = dart.privateName(place_service, "Place.street");
  var city$ = dart.privateName(place_service, "Place.city");
  var zipCode$ = dart.privateName(place_service, "Place.zipCode");
  place_service.Place = class Place extends core.Object {
    get streetNumber() {
      return this[streetNumber$];
    }
    set streetNumber(value) {
      this[streetNumber$] = value;
    }
    get street() {
      return this[street$];
    }
    set street(value) {
      this[street$] = value;
    }
    get city() {
      return this[city$];
    }
    set city(value) {
      this[city$] = value;
    }
    get zipCode() {
      return this[zipCode$];
    }
    set zipCode(value) {
      this[zipCode$] = value;
    }
    toString() {
      return "Place(streetNumber: " + dart.str(this.streetNumber) + ", street: " + dart.str(this.street) + ", city: " + dart.str(this.city) + ", zipCode: " + dart.str(this.zipCode) + ")";
    }
  };
  (place_service.Place.new = function(opts) {
    let streetNumber = opts && 'streetNumber' in opts ? opts.streetNumber : null;
    let street = opts && 'street' in opts ? opts.street : null;
    let city = opts && 'city' in opts ? opts.city : null;
    let zipCode = opts && 'zipCode' in opts ? opts.zipCode : null;
    this[streetNumber$] = streetNumber;
    this[street$] = street;
    this[city$] = city;
    this[zipCode$] = zipCode;
    ;
  }).prototype = place_service.Place.prototype;
  dart.addTypeTests(place_service.Place);
  dart.addTypeCaches(place_service.Place);
  dart.setMethodSignature(place_service.Place, () => ({
    __proto__: dart.getMethods(place_service.Place.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(place_service.Place, L0);
  dart.setFieldSignature(place_service.Place, () => ({
    __proto__: dart.getFields(place_service.Place.__proto__),
    streetNumber: dart.fieldType(dart.legacy(core.String)),
    street: dart.fieldType(dart.legacy(core.String)),
    city: dart.fieldType(dart.legacy(core.String)),
    zipCode: dart.fieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(place_service.Place, ['toString']);
  var placeId$ = dart.privateName(place_service, "Suggestion.placeId");
  var description$ = dart.privateName(place_service, "Suggestion.description");
  place_service.Suggestion = class Suggestion extends core.Object {
    get placeId() {
      return this[placeId$];
    }
    set placeId(value) {
      super.placeId = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      super.description = value;
    }
    toString() {
      return "Suggestion(description: " + dart.str(this.description) + ", placeId: " + dart.str(this.placeId) + ")";
    }
  };
  (place_service.Suggestion.new = function(placeId, description) {
    this[placeId$] = placeId;
    this[description$] = description;
    ;
  }).prototype = place_service.Suggestion.prototype;
  dart.addTypeTests(place_service.Suggestion);
  dart.addTypeCaches(place_service.Suggestion);
  dart.setMethodSignature(place_service.Suggestion, () => ({
    __proto__: dart.getMethods(place_service.Suggestion.__proto__),
    toString: dart.fnType(dart.legacy(core.String), []),
    [$toString]: dart.fnType(dart.legacy(core.String), [])
  }));
  dart.setLibraryUri(place_service.Suggestion, L0);
  dart.setFieldSignature(place_service.Suggestion, () => ({
    __proto__: dart.getFields(place_service.Suggestion.__proto__),
    placeId: dart.finalFieldType(dart.legacy(core.String)),
    description: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.defineExtensionMethods(place_service.Suggestion, ['toString']);
  var client$ = dart.privateName(place_service, "PlaceApiProvider.client");
  var sessionToken$ = dart.privateName(place_service, "PlaceApiProvider.sessionToken");
  var apiKey = dart.privateName(place_service, "PlaceApiProvider.apiKey");
  place_service.PlaceApiProvider = class PlaceApiProvider extends core.Object {
    get client() {
      return this[client$];
    }
    set client(value) {
      super.client = value;
    }
    get sessionToken() {
      return this[sessionToken$];
    }
    set sessionToken(value) {
      super.sessionToken = value;
    }
    get apiKey() {
      return this[apiKey];
    }
    set apiKey(value) {
      super.apiKey = value;
    }
    fetchSuggestions(input, lang) {
      return async.async(ListLOfSuggestionL(), (function* fetchSuggestions() {
        let request = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + dart.str(input) + "&types=address&language=" + dart.str(lang) + "&components=country:ch&key=" + dart.str(this.apiKey) + "&sessiontoken=" + dart.str(this.sessionToken);
        let response = (yield this.client.get(request));
        if (response.statusCode === 200) {
          let result = convert.json.decode(response.body);
          core.print(result);
          if (dart.equals(dart.dsend(result, '_get', ["status"]), "OK")) {
            return FutureOrLOfListLOfSuggestionL().as(dart.dsend(dart.dgsend(dart.dsend(result, '_get', ["predictions"]), [SuggestionL()], 'map', [dart.fn(p => new place_service.Suggestion.new(StringL().as(dart.dsend(p, '_get', ["place_id"])), StringL().as(dart.dsend(p, '_get', ["description"]))), dynamicToSuggestionL())]), 'toList', []));
          }
          if (dart.equals(dart.dsend(result, '_get', ["status"]), "ZERO_RESULTS")) {
            return JSArrayOfSuggestionL().of([]);
          }
          dart.throw(core.Exception.new(dart.dsend(result, '_get', ["error_message"])));
        } else {
          dart.throw(core.Exception.new("Failed to fetch suggestion"));
        }
      }).bind(this));
    }
    getPlaceDetailFromId(placeId) {
      return async.async(PlaceL(), (function* getPlaceDetailFromId() {
        let request = "https://maps.googleapis.com/maps/api/place/details/json?place_id=" + dart.str(placeId) + "&fields=address_component&key=" + dart.str(this.apiKey) + "&sessiontoken=" + dart.str(this.sessionToken);
        let response = (yield this.client.get(request));
        if (response.statusCode === 200) {
          let result = convert.json.decode(response.body);
          if (dart.equals(dart.dsend(result, '_get', ["status"]), "OK")) {
            let components = ListL().as(dart.dsend(dart.dsend(result, '_get', ["result"]), '_get', ["address_components"]));
            let place = new place_service.Place.new();
            components[$forEach](dart.fn(c => {
              let type = ListL().as(dart.dsend(c, '_get', ["types"]));
              if (dart.test(type[$contains]("street_number"))) {
                place.streetNumber = StringL().as(dart.dsend(c, '_get', ["long_name"]));
              }
              if (dart.test(type[$contains]("route"))) {
                place.street = StringL().as(dart.dsend(c, '_get', ["long_name"]));
              }
              if (dart.test(type[$contains]("locality"))) {
                place.city = StringL().as(dart.dsend(c, '_get', ["long_name"]));
              }
              if (dart.test(type[$contains]("postal_code"))) {
                place.zipCode = StringL().as(dart.dsend(c, '_get', ["long_name"]));
              }
            }, dynamicToNullN()));
            return place;
          }
          dart.throw(core.Exception.new(dart.dsend(result, '_get', ["error_message"])));
        } else {
          dart.throw(core.Exception.new("Failed to fetch suggestion"));
        }
      }).bind(this));
    }
  };
  (place_service.PlaceApiProvider.new = function(sessionToken) {
    this[client$] = client.Client.new();
    this[apiKey] = "07c8f1201d1068ccaf573db0e916ed54fb45ef80";
    this[sessionToken$] = sessionToken;
    ;
  }).prototype = place_service.PlaceApiProvider.prototype;
  dart.addTypeTests(place_service.PlaceApiProvider);
  dart.addTypeCaches(place_service.PlaceApiProvider);
  dart.setMethodSignature(place_service.PlaceApiProvider, () => ({
    __proto__: dart.getMethods(place_service.PlaceApiProvider.__proto__),
    fetchSuggestions: dart.fnType(dart.legacy(async.Future$(dart.legacy(core.List$(dart.legacy(place_service.Suggestion))))), [dart.legacy(core.String), dart.legacy(core.String)]),
    getPlaceDetailFromId: dart.fnType(dart.legacy(async.Future$(dart.legacy(place_service.Place))), [dart.legacy(core.String)])
  }));
  dart.setLibraryUri(place_service.PlaceApiProvider, L0);
  dart.setFieldSignature(place_service.PlaceApiProvider, () => ({
    __proto__: dart.getFields(place_service.PlaceApiProvider.__proto__),
    client: dart.finalFieldType(dart.legacy(client.Client)),
    sessionToken: dart.finalFieldType(dart.dynamic),
    apiKey: dart.finalFieldType(dart.legacy(core.String))
  }));
  dart.trackLibraries("packages/CabBookFlutterTemplate/google_map/place_service", {
    "package:CabBookFlutterTemplate/google_map/place_service.dart": place_service
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["place_service.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIS;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;AAWL,YAAO,AAAqF,mCAA/D,qBAAY,wBAAW,eAAM,sBAAS,aAAI,yBAAY,gBAAO;IAC5F;;;QATO;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;IASW;;;;;;IACA;;;;;;;AAMX,YAAO,AAA0D,uCAAhC,oBAAW,yBAAY,gBAAO;IACjE;;2CALgB,SAAc;IAAd;IAAc;;EAAY;;;;;;;;;;;;;;;;;;;IASpC;;;;;;IAIA;;;;;;IAKA;;;;;;qBAE2C,OAAc;AAAtB;AACjC,sBACF,AAAqK,iFAAhG,KAAK,0CAAyB,IAAI,6CAA4B,eAAM,4BAAe;AACtJ,wBAAW,MAAM,AAAO,gBAAI,OAAO;AAEzC,YAAI,AAAS,AAAW,QAAZ,gBAAe;AACnB,uBAAS,AAAK,oBAAO,AAAS,QAAD;AACtB,UAAb,WAAM,MAAM;AACZ,cAAqB,YAAX,WAAN,MAAM,WAAC,YAAa;AAEtB,sDAEK,WADA,YADQ,WAAN,MAAM,WAAC,0CACO,QAAC,KAAM,8CAAY,WAAD,CAAC,WAAC,4BAAc,WAAD,CAAC,WAAC;;AAG1D,cAAqB,YAAX,WAAN,MAAM,WAAC,YAAa;AACtB,kBAAO;;AAE+B,UAAxC,WAAM,mBAAgB,WAAN,MAAM,WAAC;;AAEsB,UAA7C,WAAM,mBAAU;;MAEpB;;yBAE0C;AAAR;AAC1B,sBACF,AAA2I,+EAAxE,OAAO,gDAA+B,eAAM,4BAAe;AAC5H,wBAAW,MAAM,AAAO,gBAAI,OAAO;AAEzC,YAAI,AAAS,AAAW,QAAZ,gBAAe;AACnB,uBAAS,AAAK,oBAAO,AAAS,QAAD;AACnC,cAAqB,YAAX,WAAN,MAAM,WAAC,YAAa;AAChB,6BACqC,WAAvB,WAAV,WAAN,MAAM,WAAC,qBAAU;AAEf,wBAAQ;AAeZ,YAdF,AAAW,UAAD,WAAS,QAAC;AACP,oCAAQ,WAAD,CAAC,WAAC;AACpB,4BAAI,AAAK,IAAD,YAAU;AACmB,gBAAnC,AAAM,KAAD,gBAAC,aAAgB,WAAD,CAAC,WAAC;;AAEzB,4BAAI,AAAK,IAAD,YAAU;AACa,gBAA7B,AAAM,KAAD,UAAC,aAAU,WAAD,CAAC,WAAC;;AAEnB,4BAAI,AAAK,IAAD,YAAU;AACW,gBAA3B,AAAM,KAAD,QAAC,aAAQ,WAAD,CAAC,WAAC;;AAEjB,4BAAI,AAAK,IAAD,YAAU;AACc,gBAA9B,AAAM,KAAD,WAAC,aAAW,WAAD,CAAC,WAAC;;;AAGtB,kBAAO,MAAK;;AAE0B,UAAxC,WAAM,mBAAgB,WAAN,MAAM,WAAC;;AAEsB,UAA7C,WAAM,mBAAU;;MAEpB;;;iDAjEsB;IAFhB,gBAAS;IAST,eAAS;IAPO;;EAAa","file":"place_service.unsound.ddc.js"}');
  // Exports:
  return {
    google_map__place_service: place_service
  };
}));

//# sourceMappingURL=place_service.unsound.ddc.js.map
