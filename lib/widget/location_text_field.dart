import 'package:CabBookFlutterTemplate/google_map/address_search.dart';
import 'package:CabBookFlutterTemplate/google_map/place_service.dart';
import 'package:CabBookFlutterTemplate/model/FormController.dart';
import 'package:flutter_web/material.dart';
import 'package:uuid/uuid.dart';

class LocationTextField extends StatefulWidget {
  const LocationTextField({
    Key key,
    this.lableText,
    this.controller,
  }) : super(key: key);
  final String lableText;
  final TextEditingController controller;
  _LocationSearch createState() => _LocationSearch(lableText, controller);
}

class _LocationSearch extends State<LocationTextField> {
  TextEditingController _controller;

  String _streetNumber = '';
  String _street = '';
  String _city = '';
  String _zipCode = '';
  String _lableText;
  _LocationSearch(String lable_text, TextEditingController _controller) {
    this._lableText = lable_text;
    this._controller = _controller;
  }

  @override
  Widget build(BuildContext context) {
    return new Container(
      margin: const EdgeInsets.only(top: 20.0),
      height: 45,
      child: ClipRRect(
          borderRadius: BorderRadius.circular(22),
          child: new Container(
            padding: EdgeInsets.only(left: 16.0, right: 16.0),
            color: Colors.yellow[50],
            child: TextField(
              controller: _controller,
              textCapitalization: TextCapitalization.characters,
              keyboardType: TextInputType.text,
              enabled: true,
              // maxLength: 20,
              // onChanged: _aboutAction(),
              decoration: InputDecoration(
                  prefixIcon: Icon(Icons.location_city),
                  hintText: _lableText,
                  hintStyle: TextStyle(
                      fontWeight: FontWeight.w300, color: Colors.black87)),
            ),
          )),
    );
  }
}
