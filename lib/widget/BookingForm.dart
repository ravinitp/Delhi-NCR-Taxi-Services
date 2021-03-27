import 'package:CabBookFlutterTemplate/model/BookingDetails.dart';
import 'package:CabBookFlutterTemplate/model/FormController.dart';
import 'package:CabBookFlutterTemplate/widget/GComment.dart';
import 'package:flutter_web/material.dart';
import 'package:CabBookFlutterTemplate/widget/GTextField.dart';
import 'package:CabBookFlutterTemplate/widget/location_text_field.dart';
import 'package:CabBookFlutterTemplate/widget/date_time_picker.dart';

class BookingForm extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return BookingFormState();
  }
}

class BookingFormState extends State<BookingForm> {
  final _formKey = GlobalKey<FormState>();
  BookingDetails _bookingDetails = new BookingDetails();
  Widget build(BuildContext context) {
    FormController formController = FormController();
    return Form(
        key: _formKey,
        child: Card(
            color: Colors.transparent,
            child: SizedBox(
              width: MediaQuery.of(context).size.width / 3,
              height: 1000,
              child: Container(
                  color: Colors.transparent,
                  child: ListView(
                      padding: const EdgeInsets.all(16.0),
                      children: <Widget>[
                        new Container(
                          padding: EdgeInsets.only(
                              left: 0, right: 0, top: 0, bottom: 0),
                          alignment: AlignmentDirectional.center,
                          color: Colors.transparent,
                          child: new Text(
                            'Book Your Ride',
                            style: new TextStyle(
                              fontSize: 32.0,
                              fontWeight: FontWeight.w600,
                              color: Colors.cyan[50],
                            ),
                          ),
                        ),
                        new Container(
                          padding: EdgeInsets.only(
                              left: 0, right: 0, top: 26.0, bottom: 0),
                          alignment: AlignmentDirectional.center,
                          color: Colors.transparent,
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            mainAxisSize: MainAxisSize.min,
                            children: <Widget>[
                              new Icon(Icons.layers, color: Colors.cyan[50]),
                              new Icon(Icons.layers, color: Colors.cyan[50]),
                              new Icon(Icons.layers, color: Colors.cyan[50])
                            ],
                          ),
                        ),
                        Column(children: <Widget>[
                          Row(children: <Widget>[
                            GTextField(
                              labelText: "First Name",
                              // key: _formKey,
                              bookingDetails: _bookingDetails,
                              controller: formController.fNameController,
                            ),
                            SizedBox(width: 10),
                            GTextField(
                              labelText: "Last Name",
                              // key: _formKey,
                              bookingDetails: _bookingDetails,
                              controller: formController.lNameController,
                            )
                          ]),
                          SizedBox(height: 10),
                          Row(children: [
                            GTextField(
                              labelText: "Phone Number",
                              // key: _formKey,
                              bookingDetails: _bookingDetails,
                              controller: formController.phoneController,
                            )
                          ]),
                          SizedBox(height: 10),
                          Row(children: [
                            GTextField(
                              labelText: "Email",
                              // key: _formKey,
                              bookingDetails: _bookingDetails,
                              controller: formController.emailController,
                            )
                          ]),
                          LocationTextField(
                              lableText: "Pickup Location",
                              controller:
                                  formController.sourceLocationController),
                          SizedBox(height: 10),
                          LocationTextField(
                              lableText: "Drop Location",
                              controller: formController.destinationController),
                          SizedBox(height: 10),
                          DateTimePicker(
                              pickupDateController:
                                  formController.pickupDateController,
                              pickupTimeController:
                                  formController.pickupTimeController,
                              returnDateController:
                                  formController.returnDateController,
                              returnTimeController:
                                  formController.returnTimeController),
                          SizedBox(height: 10),
                          Row(children: [
                            Gcomment(
                                labelText:
                                    'please describe your preferences and passenger details',
                                controller: formController.commentController)
                          ]),
                        ]),
                        new Container(
                          height: 35,
                          width: 200,
                          margin: const EdgeInsets.only(top: 20.0),
                          child: ClipRRect(
                              borderRadius: BorderRadius.circular(15),
                              child: new Container(
                                color: Colors.blue[300],
                                child: new FlatButton(
                                  padding: const EdgeInsets.all(8.0),
                                  textColor: Colors.black,
                                  onPressed: () {
                                    BookingDetails bookingDetails =
                                        formController.getFormValues();
                                    print("pressed-----book");
                                    print("fname--" + bookingDetails.firstName);
                                    print(bookingDetails.toJson());
                                  },
                                  child: new Text(
                                    "Book",
                                    style: TextStyle(
                                        fontSize: 20.0,
                                        color: Colors.white,
                                        fontWeight: FontWeight.w500),
                                  ),
                                ),
                              )),
                        ),
                        new Container(
                          padding: EdgeInsets.only(
                              left: 16.0, right: 16.0, top: 26.0, bottom: 0),
                          alignment: AlignmentDirectional.center,
                          color: Colors.transparent,
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            mainAxisSize: MainAxisSize.min,
                            children: <Widget>[
                              new Icon(Icons.layers, color: Colors.cyan[50]),
                              new Icon(Icons.layers, color: Colors.cyan[50]),
                              new Icon(Icons.layers, color: Colors.cyan[50])
                            ],
                          ),
                        ),
                      ])),
            )));
  }
}
