define(['dart_sdk', 'packages/CabBookFlutterTemplate/model/Location', 'packages/CabBookFlutterTemplate/model/DateTimeString'], (function load__packages__CabBookFlutterTemplate__model__BookingDetails(dart_sdk, packages__CabBookFlutterTemplate__model__Location, packages__CabBookFlutterTemplate__model__DateTimeString) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const Location = packages__CabBookFlutterTemplate__model__Location.model__Location;
  const DateTimeString = packages__CabBookFlutterTemplate__model__DateTimeString.model__DateTimeString;
  var BookingDetails = Object.create(dart.library);
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var IdentityMapOfStringL$dynamic = () => (IdentityMapOfStringL$dynamic = dart.constFn(_js_helper.IdentityMap$(StringL(), dart.dynamic)))();
  const CT = Object.create(null);
  var L0 = "package:CabBookFlutterTemplate/model/BookingDetails.dart";
  var firstName = dart.privateName(BookingDetails, "BookingDetails.firstName");
  var lastName = dart.privateName(BookingDetails, "BookingDetails.lastName");
  var phoneNumber = dart.privateName(BookingDetails, "BookingDetails.phoneNumber");
  var emailId = dart.privateName(BookingDetails, "BookingDetails.emailId");
  var sourceLocation = dart.privateName(BookingDetails, "BookingDetails.sourceLocation");
  var destination = dart.privateName(BookingDetails, "BookingDetails.destination");
  var pickupDateTime = dart.privateName(BookingDetails, "BookingDetails.pickupDateTime");
  var returnDateTime = dart.privateName(BookingDetails, "BookingDetails.returnDateTime");
  var comment = dart.privateName(BookingDetails, "BookingDetails.comment");
  BookingDetails.BookingDetails = class BookingDetails extends core.Object {
    get firstName() {
      return this[firstName];
    }
    set firstName(value) {
      this[firstName] = value;
    }
    get lastName() {
      return this[lastName];
    }
    set lastName(value) {
      this[lastName] = value;
    }
    get phoneNumber() {
      return this[phoneNumber];
    }
    set phoneNumber(value) {
      this[phoneNumber] = value;
    }
    get emailId() {
      return this[emailId];
    }
    set emailId(value) {
      this[emailId] = value;
    }
    get sourceLocation() {
      return this[sourceLocation];
    }
    set sourceLocation(value) {
      this[sourceLocation] = value;
    }
    get destination() {
      return this[destination];
    }
    set destination(value) {
      this[destination] = value;
    }
    get pickupDateTime() {
      return this[pickupDateTime];
    }
    set pickupDateTime(value) {
      this[pickupDateTime] = value;
    }
    get returnDateTime() {
      return this[returnDateTime];
    }
    set returnDateTime(value) {
      this[returnDateTime] = value;
    }
    get comment() {
      return this[comment];
    }
    set comment(value) {
      this[comment] = value;
    }
    toJson() {
      return new (IdentityMapOfStringL$dynamic()).from(["name", dart.notNull(this.firstName) + " " + dart.notNull(this.lastName), "phoneNumber", this.phoneNumber, "emailId", this.emailId, "sourceLocation", this.sourceLocation.toJson(), "destination", this.destination.toJson(), "pickupDate", this.pickupDateTime.toJson(), "returnDate", this.returnDateTime.toJson(), "comment", this.comment]);
    }
  };
  (BookingDetails.BookingDetails.new = function() {
    this[firstName] = null;
    this[lastName] = null;
    this[phoneNumber] = null;
    this[emailId] = null;
    this[sourceLocation] = new Location.Location.new();
    this[destination] = new Location.Location.new();
    this[pickupDateTime] = new DateTimeString.DateTimeString.new();
    this[returnDateTime] = new DateTimeString.DateTimeString.new();
    this[comment] = null;
    ;
  }).prototype = BookingDetails.BookingDetails.prototype;
  dart.addTypeTests(BookingDetails.BookingDetails);
  dart.addTypeCaches(BookingDetails.BookingDetails);
  dart.setMethodSignature(BookingDetails.BookingDetails, () => ({
    __proto__: dart.getMethods(BookingDetails.BookingDetails.__proto__),
    toJson: dart.fnType(dart.legacy(core.Map$(dart.legacy(core.String), dart.dynamic)), [])
  }));
  dart.setLibraryUri(BookingDetails.BookingDetails, L0);
  dart.setFieldSignature(BookingDetails.BookingDetails, () => ({
    __proto__: dart.getFields(BookingDetails.BookingDetails.__proto__),
    firstName: dart.fieldType(dart.legacy(core.String)),
    lastName: dart.fieldType(dart.legacy(core.String)),
    phoneNumber: dart.fieldType(dart.legacy(core.String)),
    emailId: dart.fieldType(dart.legacy(core.String)),
    sourceLocation: dart.fieldType(dart.legacy(Location.Location)),
    destination: dart.fieldType(dart.legacy(Location.Location)),
    pickupDateTime: dart.fieldType(dart.legacy(DateTimeString.DateTimeString)),
    returnDateTime: dart.fieldType(dart.legacy(DateTimeString.DateTimeString)),
    comment: dart.fieldType(dart.legacy(core.String))
  }));
  dart.trackLibraries("packages/CabBookFlutterTemplate/model/BookingDetails", {
    "package:CabBookFlutterTemplate/model/BookingDetails.dart": BookingDetails
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["BookingDetails.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;IAIS;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACE;;;;;;IACA;;;;;;IACM;;;;;;IACA;;;;;;IACR;;;;;;;AAY0B,wDAC3B,QAAkB,AAAM,aAAhB,kBAAY,mBAAM,gBAC1B,eAAe,kBACf,WAAW,cACX,kBAAkB,AAAe,8BACjC,eAAe,AAAY,2BAC3B,cAAc,AAAe,8BAC7B,cAAc,AAAe,8BAC7B,WAAW;IACZ;;;IA7BE;IACA;IACA;IACA;IACE,uBAAiB;IACjB,oBAAc;IACR,uBAAiB;IACjB,uBAAiB;IACzB;;EAsBT","file":"BookingDetails.unsound.ddc.js"}');
  // Exports:
  return {
    model__BookingDetails: BookingDetails
  };
}));

//# sourceMappingURL=BookingDetails.unsound.ddc.js.map
