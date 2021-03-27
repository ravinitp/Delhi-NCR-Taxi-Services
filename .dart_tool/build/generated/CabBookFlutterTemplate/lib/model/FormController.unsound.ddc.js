define(['dart_sdk', 'packages/flutter_web/animation', 'packages/CabBookFlutterTemplate/model/BookingDetails'], (function load__packages__CabBookFlutterTemplate__model__FormController(dart_sdk, packages__flutter_web__animation, packages__CabBookFlutterTemplate__model__BookingDetails) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const editable_text = packages__flutter_web__animation.src__widgets__editable_text;
  const BookingDetails = packages__CabBookFlutterTemplate__model__BookingDetails.model__BookingDetails;
  var FormController = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:CabBookFlutterTemplate/model/FormController.dart";
  var fNameController = dart.privateName(FormController, "FormController.fNameController");
  var lNameController = dart.privateName(FormController, "FormController.lNameController");
  var phoneController = dart.privateName(FormController, "FormController.phoneController");
  var emailController = dart.privateName(FormController, "FormController.emailController");
  var sourceLocationController = dart.privateName(FormController, "FormController.sourceLocationController");
  var destinationController = dart.privateName(FormController, "FormController.destinationController");
  var pickupDateController = dart.privateName(FormController, "FormController.pickupDateController");
  var returnDateController = dart.privateName(FormController, "FormController.returnDateController");
  var pickupTimeController = dart.privateName(FormController, "FormController.pickupTimeController");
  var returnTimeController = dart.privateName(FormController, "FormController.returnTimeController");
  var commentController = dart.privateName(FormController, "FormController.commentController");
  FormController.FormController = class FormController extends core.Object {
    get fNameController() {
      return this[fNameController];
    }
    set fNameController(value) {
      this[fNameController] = value;
    }
    get lNameController() {
      return this[lNameController];
    }
    set lNameController(value) {
      this[lNameController] = value;
    }
    get phoneController() {
      return this[phoneController];
    }
    set phoneController(value) {
      this[phoneController] = value;
    }
    get emailController() {
      return this[emailController];
    }
    set emailController(value) {
      this[emailController] = value;
    }
    get sourceLocationController() {
      return this[sourceLocationController];
    }
    set sourceLocationController(value) {
      this[sourceLocationController] = value;
    }
    get destinationController() {
      return this[destinationController];
    }
    set destinationController(value) {
      this[destinationController] = value;
    }
    get pickupDateController() {
      return this[pickupDateController];
    }
    set pickupDateController(value) {
      this[pickupDateController] = value;
    }
    get returnDateController() {
      return this[returnDateController];
    }
    set returnDateController(value) {
      this[returnDateController] = value;
    }
    get pickupTimeController() {
      return this[pickupTimeController];
    }
    set pickupTimeController(value) {
      this[pickupTimeController] = value;
    }
    get returnTimeController() {
      return this[returnTimeController];
    }
    set returnTimeController(value) {
      this[returnTimeController] = value;
    }
    get commentController() {
      return this[commentController];
    }
    set commentController(value) {
      this[commentController] = value;
    }
    getFormValues() {
      let bookingDetails = new BookingDetails.BookingDetails.new();
      bookingDetails.firstName = this.fNameController.text;
      bookingDetails.lastName = this.lNameController.text;
      bookingDetails.phoneNumber = this.phoneController.text;
      bookingDetails.emailId = this.emailController.text;
      bookingDetails.sourceLocation.locationName = this.sourceLocationController.text;
      bookingDetails.destination.locationName = this.destinationController.text;
      bookingDetails.pickupDateTime.date = this.pickupDateController.text;
      bookingDetails.pickupDateTime.time = this.pickupTimeController.text;
      bookingDetails.returnDateTime.date = this.returnDateController.text;
      bookingDetails.returnDateTime.time = this.returnTimeController.text;
      bookingDetails.comment = this.commentController.text;
      return bookingDetails;
    }
  };
  (FormController.FormController.new = function() {
    this[fNameController] = new editable_text.TextEditingController.new();
    this[lNameController] = new editable_text.TextEditingController.new();
    this[phoneController] = new editable_text.TextEditingController.new();
    this[emailController] = new editable_text.TextEditingController.new();
    this[sourceLocationController] = new editable_text.TextEditingController.new();
    this[destinationController] = new editable_text.TextEditingController.new();
    this[pickupDateController] = new editable_text.TextEditingController.new();
    this[returnDateController] = new editable_text.TextEditingController.new();
    this[pickupTimeController] = new editable_text.TextEditingController.new();
    this[returnTimeController] = new editable_text.TextEditingController.new();
    this[commentController] = new editable_text.TextEditingController.new();
    ;
  }).prototype = FormController.FormController.prototype;
  dart.addTypeTests(FormController.FormController);
  dart.addTypeCaches(FormController.FormController);
  dart.setMethodSignature(FormController.FormController, () => ({
    __proto__: dart.getMethods(FormController.FormController.__proto__),
    getFormValues: dart.fnType(dart.legacy(BookingDetails.BookingDetails), [])
  }));
  dart.setLibraryUri(FormController.FormController, L0);
  dart.setFieldSignature(FormController.FormController, () => ({
    __proto__: dart.getFields(FormController.FormController.__proto__),
    fNameController: dart.fieldType(dart.legacy(editable_text.TextEditingController)),
    lNameController: dart.fieldType(dart.legacy(editable_text.TextEditingController)),
    phoneController: dart.fieldType(dart.legacy(editable_text.TextEditingController)),
    emailController: dart.fieldType(dart.legacy(editable_text.TextEditingController)),
    sourceLocationController: dart.fieldType(dart.legacy(editable_text.TextEditingController)),
    destinationController: dart.fieldType(dart.legacy(editable_text.TextEditingController)),
    pickupDateController: dart.fieldType(dart.legacy(editable_text.TextEditingController)),
    returnDateController: dart.fieldType(dart.legacy(editable_text.TextEditingController)),
    pickupTimeController: dart.fieldType(dart.legacy(editable_text.TextEditingController)),
    returnTimeController: dart.fieldType(dart.legacy(editable_text.TextEditingController)),
    commentController: dart.fieldType(dart.legacy(editable_text.TextEditingController))
  }));
  dart.trackLibraries("packages/CabBookFlutterTemplate/model/FormController", {
    "package:CabBookFlutterTemplate/model/FormController.dart": FormController
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["FormController.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;IAIwB;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;AAGL,2BAAiB;AACe,MAA/C,AAAe,cAAD,aAAa,AAAgB;AACG,MAA9C,AAAe,cAAD,YAAY,AAAgB;AACO,MAAjD,AAAe,cAAD,eAAe,AAAgB;AACA,MAA7C,AAAe,cAAD,WAAW,AAAgB;AACiC,MAA1E,AAAe,AAAe,cAAhB,+BAA+B,AAAyB;AACF,MAApE,AAAe,AAAY,cAAb,4BAA4B,AAAsB;AACF,MAA9D,AAAe,AAAe,cAAhB,uBAAuB,AAAqB;AACI,MAA9D,AAAe,AAAe,cAAhB,uBAAuB,AAAqB;AACI,MAA9D,AAAe,AAAe,cAAhB,uBAAuB,AAAqB;AACI,MAA9D,AAAe,AAAe,cAAhB,uBAAuB,AAAqB;AACX,MAA/C,AAAe,cAAD,WAAW,AAAkB;AAC3C,YAAO,eAAc;IACvB;;;IA1BsB,wBAAkB;IAClB,wBAAkB;IAClB,wBAAkB;IAClB,wBAAkB;IAClB,iCAA2B;IAC3B,8BAAwB;IACxB,6BAAuB;IACvB,6BAAuB;IACvB,6BAAuB;IACvB,6BAAuB;IACvB,0BAAoB;;EAiB5C","file":"FormController.unsound.ddc.js"}');
  // Exports:
  return {
    model__FormController: FormController
  };
}));

//# sourceMappingURL=FormController.unsound.ddc.js.map
