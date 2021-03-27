import 'package:CabBookFlutterTemplate/model/DateTimeString.dart';
import 'package:CabBookFlutterTemplate/model/Location.dart';

class BookingDetails {
  String firstName;
  String lastName;
  String phoneNumber;
  String emailId;
  Location sourceLocation = Location();
  Location destination = Location();
  DateTimeString pickupDateTime = DateTimeString();
  DateTimeString returnDateTime = DateTimeString();
  String comment;

  // BookingDetails(
  //     {this.firstName,
  //     this.lastName,
  //     this.phoneNumber,
  //     this.emailId,
  //     this.sourceLocation,
  //     this.destination,
  //     this.pickupDateTime,
  //     this.returnDateTime});

  Map<String, dynamic> toJson() => {
        'name': firstName + " " + lastName,
        'phoneNumber': phoneNumber,
        'emailId': emailId,
        'sourceLocation': sourceLocation.toJson(),
        'destination': destination.toJson(),
        'pickupDate': pickupDateTime.toJson(),
        'returnDate': returnDateTime.toJson(),
        'comment': comment
      };
}
