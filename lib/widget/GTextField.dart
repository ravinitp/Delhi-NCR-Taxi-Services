import 'package:CabBookFlutterTemplate/model/BookingDetails.dart';
import 'package:flutter_web/material.dart';

class GTextField extends StatefulWidget {
  String labelText;
  BookingDetails bookingDetails;
  TextEditingController controller;
  GTextField({
    Key key,
    this.labelText,
    this.bookingDetails,
    this.controller,
  }) : super(key: key);

  @override
  _GTextFieldState createState() =>
      _GTextFieldState(labelText, bookingDetails, controller);
}

class _GTextFieldState extends State<GTextField> {
  String labelText = '';
  BookingDetails bookingDetails;
  _GTextFieldState(String labelText, BookingDetails bookingDetails,
      TextEditingController controller) {
    this.bookingDetails = bookingDetails;
    this.labelText = labelText;
    this.controller = controller;
  }
  TextEditingController controller;
  @override
  Widget build(BuildContext context) {
    return Expanded(
      // margin: const EdgeInsets.only(top: 20.0),
      // height: 45,

      child: ClipRRect(
          borderRadius: BorderRadius.circular(22),
          child: new Container(
            padding: EdgeInsets.only(left: 16.0, right: 16.0),
            color: Colors.yellow[50],
            width: 350,
            child: TextFormField(
              controller: controller,
              textCapitalization: TextCapitalization.characters,
              keyboardType: TextInputType.text,
              enabled: true,
              onEditingComplete: () => {},
              decoration: InputDecoration(
                  prefixIcon: Icon(_getIcon()),
                  hintText: labelText,
                  hintStyle: TextStyle(
                      fontWeight: FontWeight.w300, color: Colors.black87)),
            ),
          )),
    );
  }

  IconData _getIcon() {
    if (this.labelText != null &&
        this.labelText.toLowerCase().contains('phone')) {
      return Icons.phone;
    } else if (this.labelText != null &&
        this.labelText.toLowerCase().contains('email')) {
      return Icons.mail;
    } else {
      return Icons.text_format;
    }
  }
}
