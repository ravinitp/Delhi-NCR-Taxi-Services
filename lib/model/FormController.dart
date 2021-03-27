import 'package:CabBookFlutterTemplate/model/BookingDetails.dart';
import 'package:flutter_web/material.dart';

class FormController {
  TextEditingController fNameController = TextEditingController();
  TextEditingController lNameController = TextEditingController();
  TextEditingController phoneController = TextEditingController();
  TextEditingController emailController = TextEditingController();
  TextEditingController sourceLocationController = TextEditingController();
  TextEditingController destinationController = TextEditingController();
  TextEditingController pickupDateController = TextEditingController();
  TextEditingController returnDateController = TextEditingController();
  TextEditingController pickupTimeController = TextEditingController();
  TextEditingController returnTimeController = TextEditingController();
  TextEditingController commentController = TextEditingController();

  BookingDetails getFormValues() {
    BookingDetails bookingDetails = BookingDetails();
    bookingDetails.firstName = fNameController.text;
    bookingDetails.lastName = lNameController.text;
    bookingDetails.phoneNumber = phoneController.text;
    bookingDetails.emailId = emailController.text;
    bookingDetails.sourceLocation.locationName = sourceLocationController.text;
    bookingDetails.destination.locationName = destinationController.text;
    bookingDetails.pickupDateTime.date = pickupDateController.text;
    bookingDetails.pickupDateTime.time = pickupTimeController.text;
    bookingDetails.returnDateTime.date = returnDateController.text;
    bookingDetails.returnDateTime.time = returnTimeController.text;
    bookingDetails.comment = commentController.text;
    return bookingDetails;
  }
}
